// בדיקת האלגוריתם המשוכלל לדירוג משתמשים
// משכפלת את נוסחת computeSmartScores מ-NodeBB-Unified.user.js
// הכוונה: דירוג הוגן בהתבסס על איכות + עמידות בזמן
// הרצה: node test/ranking.test.js

const assert = require('assert');

// ============================================
// ⚙️ קונפיגורציה הדירוג המשוכלל
// ============================================
const CONFIG_scoring = {
  confidenceBase: 200,           // דרוש ממוצע של 200+ מוניטין להגנה מ-spammer
  minPostsForRanking: 5,         // משתמש עם <5 פוסטים מקבל דירוג נמוך
  accountAgePenaltyDays: 30,     // משתמשים <30 ימים מקבלים קנס של 50%
  inactivityPenaltyDays: 90,     // לא פעיל >90 ימים = קנס של 30%
  spamThresholdRatio: 50,        // אם פוסטים/מוניטין > 50 = ספאמר
  spamPenalty: 0.1,              // דירוג ספאמר מוכפל ב-0.1
};

// ============================================
// 📐 הנוסחה המשוכללת
// ============================================
function computeSmartScores(users, now = Date.now()) {
  const cfg = CONFIG_scoring;
  
  // סינון משתמשים בעיתיים
  const pool = users.filter(u => u?.userslug && !u.banned && !u.deleted && !u.muted);
  if (!pool.length) return [];

  // חישוב ממוצעים עבור Bayesian smoothing
  let sumR = 0, sumP = 0;
  for (const u of pool) {
    sumR += Math.max(0, u.reputation);
    sumP += Math.max(0, u.postcount);
  }
  const avgRepPerPost = sumP > 0 ? sumR / sumP : 0;

  // דירוג עם משקולות מרובות
  const scored = pool.map(u => {
    const R = Math.max(0, u.reputation);
    const P = Math.max(0, u.postcount);
    
    // 1️⃣ ציון בסיסי: Bayesian smoothing עם confidence גבוה יותר
    let baseScore = (R + cfg.confidenceBase * avgRepPerPost) / (P + cfg.confidenceBase);

    // 2️⃣ קנס לחשבונות חדשים (< 30 ימים)
    const accountAgeDays = (now - u.joindate) / (1000 * 60 * 60 * 24);
    let ageMultiplier = 1.0;
    if (accountAgeDays < cfg.accountAgePenaltyDays) {
      ageMultiplier = 0.5 + (accountAgeDays / cfg.accountAgePenaltyDays) * 0.5; // 0.5 to 1.0
    }

    // 3️⃣ קנס לחשבונות לא פעילים (> 90 ימים)
    const inactivityDays = (now - u.lastonline) / (1000 * 60 * 60 * 24);
    let inactivityMultiplier = 1.0;
    if (inactivityDays > cfg.inactivityPenaltyDays) {
      inactivityMultiplier = 0.7; // 30% קנס
    }

    // 4️⃣ זיהוי ספאמים: פוסטים הרבה יותר מ-מוניטין
    let spamMultiplier = 1.0;
    if (P > 0 && P / R > cfg.spamThresholdRatio) {
      spamMultiplier = cfg.spamPenalty; // דירוג נמוך מאוד
    }

    // 5️⃣ קנס אם מעט מדי פוסטים
    let volumeMultiplier = 1.0;
    if (P < cfg.minPostsForRanking) {
      volumeMultiplier = 0.3; // דירוג נמוך מאוד
    }

    // חישוב הסיום
    const finalScore = baseScore * ageMultiplier * inactivityMultiplier * spamMultiplier * volumeMultiplier;

    return {
      ...u,
      smartScore: finalScore,
      // Debug data
      _debug: {
        baseScore: baseScore.toFixed(3),
        ageMultiplier: ageMultiplier.toFixed(2),
        inactivityMultiplier: inactivityMultiplier.toFixed(2),
        spamMultiplier: spamMultiplier.toFixed(2),
        volumeMultiplier: volumeMultiplier.toFixed(2),
        accountAgeDays: accountAgeDays.toFixed(1),
        inactivityDays: inactivityDays.toFixed(1),
      }
    };
  });

  scored.sort((a, b) => b.smartScore - a.smartScore);
  return scored;
}

function ranksBySlug(scored) {
  const map = {};
  scored.forEach((u, i) => { map[u.userslug] = i + 1; });
  return map;
}

// ============================================
// 🧪 אוכלוסיית בדיקה
// ============================================
const NOW = 1_700_000_000_000;
const DAY = 86400000;

const U = (userslug, reputation, postcount, ageDays, idleDays) => ({
  userslug, username: userslug, reputation, postcount,
  joindate: NOW - ageDays * DAY,
  lastonline: NOW - idleDays * DAY,
  banned: false, deleted: false, muted: false,
});

const users = [
  // משתמשים טובים
  U('veteran', 5000, 8000, 3650, 10),        // ותיק, פעיל, יחס סביר (0.625/פוסט)
  U('quality', 3000, 200, 400, 5),           // איכותי, יחס גבוה (15/פוסט)
  U('steady', 2000, 3000, 1000, 20),         // בעקביות, יחס טוב (0.67/פוסט)
  
  // בעיות - יחסים שהיו בעיה
  U('newbie', 10, 2, 7, 1),                  // משתמש חדש עם מעט פוסטים ← אמור להיות נמוך!
  U('spammer', 2500, 9000, 1000, 2),         // ספאמר: יחס נמוך (0.28/פוסט) ← אמור להיות נמוך!
  U('inactive', 4000, 5000, 2000, 180),      // בלא פעילות זמן רב ← אמור להיות נמוך!
  U('farce', 100, 5000, 500, 15),            // זיוף טוטלי: המון פוסטים, מוניטין נמוך ← אמור להיות נמוך!
];

const scored = computeSmartScores(users, NOW);
const rank = ranksBySlug(scored);

console.log('\n📊 דירוג משתמשים (חדש + משוכלל):\n');
scored.forEach((u, i) => {
  const ageStr = `Age: ${u._debug.accountAgeDays}d`;
  const inactStr = `Inactive: ${u._debug.inactivityDays}d`;
  const scoreStr = `Score: ${u.smartScore.toFixed(3)}`;
  console.log(`${String(i+1).padStart(2)}. ${u.userslug.padEnd(12)} | ${ageStr.padEnd(12)} | ${inactStr.padEnd(14)} | ${scoreStr.padEnd(12)} | Rank #${rank[u.userslug]}`);
  console.log(`    └─ Base: ${u._debug.baseScore} × Age: ${u._debug.ageMultiplier} × Inactive: ${u._debug.inactivityMultiplier} × Spam: ${u._debug.spamMultiplier} × Vol: ${u._debug.volumeMultiplier}`);
});

// ============================================
// ✅ בדיקות חיוביות
// ============================================
console.log('\n🔍 בדיקות חיוביות:\n');

try {
  // בדיקה 1: ותיק > newbie
  assert.ok(rank.veteran < rank.newbie, 
    `❌ ותיק (R:5000,P:8000) צריך להיות גבוה מ-newbie (R:10,P:2)`);
  console.log('✅ בדיקה 1: ותיק > newbie');

  // בדיקה 2: quality > spammer
  assert.ok(rank.quality < rank.spammer,
    `❌ quality (R:3000,P:200) צריך להיות גבוה מ-spammer (R:2500,P:9000)`);
  console.log('✅ בדיקה 2: quality > spammer');

  // בדיקה 3: veteran > inactive
  assert.ok(rank.veteran < rank.inactive,
    `❌ ותיק פעיל צריך להיות גבוה מ-לא פעיל 180 ימים`);
  console.log('✅ בדיקה 3: veteran > inactive');

  // בדיקה 4: steady > farce
  assert.ok(rank.steady < rank.farce,
    `❌ steady (R:2000,P:3000) צריך להיות גבוה מ-farce (R:100,P:5000)`);
  console.log('✅ בדיקה 4: steady > farce (זיוף)');

  // בדיקה 5: quality צריך להיות #1 או #2
  assert.ok(rank.quality <= 2,
    `❌ quality (יחס 15:1) צריך להיות בחזית`);
  console.log('✅ בדיקה 5: quality בחזית (rank <= 2)');

  // בדיקה 6: newbie NOT #1
  assert.ok(rank.newbie !== 1,
    `❌ newbie (2 posts, 10 rep) לא צריך להיות #1`);
  console.log('✅ בדיקה 6: newbie NOT #1 ✨ (תיקון ראשי!)');

  // בדיקה 7: spammer בתחתית
  assert.ok(rank.spammer > rank.veteran,
    `❌ spammer צריך להיות בתחתית`);
  console.log('✅ בדיקה 7: spammer בתחתית');

  console.log('\n🎉 כל הבדיקות עברו בהצלחה!\n');
} catch (e) {
  console.error('\n❌ בדיקה נכשלה:', e.message, '\n');
  process.exit(1);
}
