// בדיקת מנגנון חיווי הנוכחות (סימן רוחב-אפס נסתר + הזרקה).
// משכפלת את הפונקציות הטהורות מ-NodeBB-Unified.user.js (מודול presence) - לעדכן יחד.
// הרצה: node test/presence.test.js

const assert = require('assert');

const VERSION = 1;
const BIT0 = String.fromCharCode(0x200B); // ZWSP
const BIT1 = String.fromCharCode(0x200C); // ZWNJ
const MAGIC_BITS = '10110100';
const LEGACY_RE = /[\u{E0000}-\u{E007F}]/gu;

function buildMarker() {
    const bits = MAGIC_BITS + VERSION.toString(2).padStart(4, '0');
    return bits.replace(/0/g, BIT0).replace(/1/g, BIT1);
}
const MARKER = buildMarker();

function decodeMarker(text) {
    if (!text) return null;
    let bits = '';
    for (const ch of text) bits += ch === BIT0 ? '0' : ch === BIT1 ? '1' : ' ';
    const i = bits.indexOf(MAGIC_BITS);
    if (i < 0) return null;
    const v = bits.slice(i + 8, i + 12);
    return { version: /^[01]{4}$/.test(v) ? parseInt(v, 2) : 0 };
}
const hasMarker = t => !!decodeMarker(t);
const stripLegacy = str => (typeof str === 'string' ? str.replace(LEGACY_RE, '') : str);

function insertMarkerInto(str) {
    if (typeof str !== 'string' || !str) return str;
    const cleaned = stripLegacy(str);
    if (hasMarker(cleaned)) return cleaned;
    const m = cleaned.match(/\s/);
    if (m) { const i = m.index; return cleaned.slice(0, i) + MARKER + cleaned.slice(i); }
    return cleaned + MARKER;
}

const WRITE_RE = /\/api\/v3\/(topics(\/\d+)?|posts\/\d+|chats\/\d+)\/?(\?.*)?$/;
const zwCount = s => [...s].filter(c => c === BIT0 || c === BIT1).length;

// --- הסימן בלתי-נראה: רק תווי רוחב-אפס, 12 ביט ---
assert.strictEqual([...MARKER].length, 12, 'הסימן = 12 תווי רוחב-אפס');
assert.ok([...MARKER].every(c => c === BIT0 || c === BIT1), 'רק ZWSP/ZWNJ');
assert.ok(!/[\x20-\x7e]/.test(MARKER), 'אין ASCII נראה');

// --- round-trip ---
assert.deepStrictEqual(decodeMarker(MARKER), { version: 1 });
assert.strictEqual(hasMarker('שלום עולם'), false, 'טקסט רגיל בלי סימן');
assert.strictEqual(hasMarker('היי' + MARKER), true, 'מזהה סימן');

// --- הזרקה: אחרי המילה הראשונה (לפני הרווח הראשון), לא בסוף => ספויילר-בסוף שורד ---
const spoiler = 'תראו את זה >!סוד!<';
const injected = insertMarkerInto(spoiler);
assert.ok(hasMarker(injected), 'הוזרק סימן');
assert.ok(injected.endsWith('>!סוד!<'), 'הסוף (הספויילר) לא נגע - הסימן לא בסוף');
assert.ok(injected.startsWith('תראו' + MARKER + ' '), 'הסימן בסוף המילה הראשונה');

// --- idempotent ---
assert.strictEqual(insertMarkerInto(injected), injected, 'הזרקה כפולה נמנעת');
assert.strictEqual(zwCount(injected), 12, 'סימן יחיד (12 תווים)');

// --- ניקוי סימני TAG ישנים + החלפה בחדש ---
const legacy = 'שלום' + String.fromCodePoint(0xE006E, 0xE0062) + ' עולם';
const fixed = insertMarkerInto(legacy);
assert.ok(!LEGACY_RE.test(fixed), 'תווי TAG ישנים נוקו');
assert.ok(hasMarker(fixed), 'סימן חדש נוסף במקום');

// --- מילה אחת בלי רווח => נופל לסוף ---
assert.ok(insertMarkerInto('שלום').startsWith('שלום' + MARKER), 'מילה אחת: הסימן אחריה');

// --- זיהוי endpoints של write (ללא שינוי) ---
['/api/v3/topics', '/api/v3/topics/123', '/api/v3/posts/456', '/api/v3/chats/789'].forEach(u =>
    assert.ok(WRITE_RE.test(u), 'צריך להתאים: ' + u));
['/api/v3/users/1', '/api/config', '/api/v3/posts/456/raw', '/api/v3/topics/123/tags'].forEach(u =>
    assert.ok(!WRITE_RE.test(u), 'לא צריך להתאים: ' + u));

console.log('✅ בדיקת חיווי הנוכחות עברה');
