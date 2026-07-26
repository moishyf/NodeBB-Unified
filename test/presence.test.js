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

const UNSAFE_RE = /(https?:\/\/\S+|www\.\S+|\[[^\]]*\]\([^)]*\)|[@#][^\s@#]+)/gi;
const RUN_RE = /[\p{L}\p{N}]+/gu;
function insertMarkerInto(str) {
    if (typeof str !== 'string' || !str) return str;
    const cleaned = stripLegacy(str);
    if (hasMarker(cleaned)) return cleaned;
    const unsafe = [];
    UNSAFE_RE.lastIndex = 0;
    for (let u; (u = UNSAFE_RE.exec(cleaned));) unsafe.push([u.index, u.index + u[0].length]);
    const inUnsafe = i => unsafe.some(([a, b]) => i > a && i <= b);
    RUN_RE.lastIndex = 0;
    for (let m; (m = RUN_RE.exec(cleaned));) {
        const end = m.index + m[0].length;
        if (!inUnsafe(m.index) && !inUnsafe(end)) return cleaned.slice(0, end) + MARKER + cleaned.slice(end);
    }
    return cleaned;
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

// --- הזרקה אחרי המילה הראשונה (בתוך התוכן) => תוחם ספוילר בקצוות שורד ---
const injected = insertMarkerInto('תראו את זה ||סוד||');
assert.ok(hasMarker(injected), 'הוזרק סימן');
assert.ok(injected.endsWith('||סוד||'), 'הספוילר בסוף לא נגע');
assert.ok(injected.startsWith('תראו' + MARKER), 'הסימן אחרי המילה הראשונה');

// המקרה הקריטי: ספוילר בלי רווח שהוא כל ההודעה - הסימן חייב להיכנס בפנים, לא לשבור ||..||
const s2 = insertMarkerInto('||דוגמא||');
assert.strictEqual(s2, '||דוגמא' + MARKER + '||', 'הסימן בתוך הספוילר, התוחמים שלמים');
assert.ok(s2.startsWith('||') && s2.endsWith('||'), 'תוחמי ||..|| שלמים');

// --- idempotent ---
assert.strictEqual(insertMarkerInto(injected), injected, 'הזרקה כפולה נמנעת');
assert.strictEqual(zwCount(injected), 12, 'סימן יחיד (12 תווים)');

// --- ניקוי סימני TAG ישנים + החלפה בחדש ---
const legacy = 'שלום' + String.fromCodePoint(0xE006E, 0xE0062) + ' עולם';
const fixed = insertMarkerInto(legacy);
assert.ok(!LEGACY_RE.test(fixed), 'תווי TAG ישנים נוקו');
assert.ok(hasMarker(fixed), 'סימן חדש נוסף במקום');

// --- מילה אחת בלי רווח => הסימן אחריה ---
assert.ok(insertMarkerInto('שלום').startsWith('שלום' + MARKER), 'מילה אחת: הסימן אחריה');

// --- קישורים: הסימן לעולם לא בתוך/צמוד ל-URL ---
const urlOnly = 'https://example.com/foo?a=1';
assert.strictEqual(insertMarkerInto(urlOnly), urlOnly, 'הודעה שהיא רק קישור - לא נגעים (אין מקום בטוח)');
const urlEnd = insertMarkerInto('תראו https://example.com');
assert.ok(urlEnd.endsWith('https://example.com'), 'קישור בסוף שלם');
assert.ok(urlEnd.startsWith('תראו' + MARKER), 'הסימן אחרי המילה הראשונה, לא בקישור');
const urlStart = insertMarkerInto('https://example.com וזהו');
assert.ok(urlStart.startsWith('https://example.com'), 'קישור בהתחלה שלם (הסימן לא נכנס לתוכו)');
assert.ok(hasMarker(urlStart) && urlStart.includes('וזהו' + MARKER), 'הסימן אחרי מילה בטוחה');
const mdLink = insertMarkerInto('[פוסט](https://mitmachim.top/post/1)');
assert.ok(mdLink.includes('](https://mitmachim.top/post/1)'), 'קישור-מרקדאון לא נשבר');
assert.strictEqual(mdLink, '[פוסט](https://mitmachim.top/post/1)', 'קישור-מרקדאון בלבד - לא נגעים');

// --- זיהוי endpoints של write (ללא שינוי) ---
['/api/v3/topics', '/api/v3/topics/123', '/api/v3/posts/456', '/api/v3/chats/789'].forEach(u =>
    assert.ok(WRITE_RE.test(u), 'צריך להתאים: ' + u));
['/api/v3/users/1', '/api/config', '/api/v3/posts/456/raw', '/api/v3/topics/123/tags'].forEach(u =>
    assert.ok(!WRITE_RE.test(u), 'לא צריך להתאים: ' + u));

console.log('✅ בדיקת חיווי הנוכחות עברה');
