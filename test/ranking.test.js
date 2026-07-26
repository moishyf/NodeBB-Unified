// בדיקת הדירוג ה"משוכלל" (מודול "reputation-ranking").
// משכפלת את נוסחת computeSmartScores מ-NodeBB-Unified.user.js - לעדכן את שניהם יחד.
// הכוונה: הדירוג = יחס מוניטין/פוסטים בלבד (בייסיאני). ספאמר (אלפי פוסטים, לייק בודד) בתחתית.
// הרצה: node test/ranking.test.js

const assert = require('assert');

const CONFIG_scoring = { bayesConfidence: 20 };

function computeSmartScores(users) {
    const cfg = CONFIG_scoring;
    const pool = users.filter(u => u?.userslug && !u.banned && !u.deleted && !u.muted);
    if (!pool.length) return [];

    let sumR = 0, sumP = 0;
    for (const u of pool) { sumR += Math.max(0, u.reputation); sumP += Math.max(0, u.postcount); }
    const m = sumP > 0 ? sumR / sumP : 0;

    const scored = pool.map(u => {
        const R = Math.max(0, u.reputation);
        const P = Math.max(0, u.postcount);
        return { ...u, smartScore: (R + cfg.bayesConfidence * m) / (P + cfg.bayesConfidence) };
    });
    scored.sort((a, b) => b.smartScore - a.smartScore);
    return scored;
}

function ranksBySlug(scored) {
    const map = {};
    scored.forEach((u, i) => { map[u.userslug] = i + 1; });
    return map;
}

// ---- אוכלוסיית בדיקה ----
const NOW = 1_700_000_000_000;
const DAY = 86400000;
const U = (userslug, reputation, postcount, ageDays, idleDays) => ({
    userslug, username: userslug, reputation, postcount,
    joindate: NOW - ageDays * DAY,
    lastonline: NOW - idleDays * DAY,
    banned: false, deleted: false, muted: false,
});

const users = [
    U('fastriser', 3000, 200, 400, 1),      // יחס גבוה מאוד (15/פוסט)
    U('veteranleft', 5000, 8000, 3650, 730), // מוניטין גדול אך מדולל (0.63/פוסט)
    U('spammer', 2500, 9000, 1000, 2),       // אלפי פוסטים, יחס נמוך (0.28/פוסט)
    U('filler1', 600, 1200, 1500, 40),       // 0.5/פוסט
    U('filler2', 1200, 900, 700, 15),        // 1.3/פוסט
];

const scored = computeSmartScores(users);
const rank = ranksBySlug(scored);

console.log('דירוג:', scored.map(u => `${u.userslug}(#${rank[u.userslug]}, ${u.smartScore.toFixed(3)})`).join('  '));

// יחס גבוה => ראש; ספאמר (יחס הכי נמוך) => תחתית
assert.strictEqual(rank.fastriser, 1, 'היחס הגבוה ביותר חייב להיות #1');
assert.strictEqual(rank.spammer, users.length, 'ספאמר (יחס הכי נמוך) חייב להיות אחרון');
assert.ok(rank.fastriser < rank.veteranleft, 'יחס גבוה מנצח מוניטין גדול-אך-מדולל');
assert.ok(rank.veteranleft < rank.spammer, 'ותיק (0.63/פוסט) מעל ספאמר (0.28/פוסט)');
// סינון banned
assert.strictEqual(computeSmartScores([...users, U('x', 9999, 1, 10, 1)].map((u, i) =>
    i === 5 ? { ...u, banned: true } : u)).find(u => u.userslug === 'x'), undefined, 'banned מסונן');

console.log('✅ בדיקת הדירוג עברה');
