# Contributing to NodeBB Unified

Thank you for helping improve the project. NodeBB Unified combines community-origin userscript modules, so preserve original attribution and **do not assume all modules share one open-source license**.

## Before you open a PR

1. Open an issue describing the behavior, browser and affected NodeBB site. Do not post private conversations, personal notes, private messages, saved backups or session information.
2. Keep changes focused and identify any third-party code/assets you propose importing, including authorship and permission to redistribute.
3. Preserve existing credits. Do not add or change a project-wide license without explicit approval.
4. Include a concise manual test plan with the affected module and user journey.

## Local checks

Run the existing tests before submitting:

```bash
node test/security.test.js
node test/presence.test.js
node test/ranking.test.js
```

These tests validate selected invariants. They **do not prove that a change is safe** or compatible with every NodeBB site. Test real browser behavior manually using **test data only** and note any unverified scenarios.

## Pull request checklist

- [ ] Behavior and motivation documented
- [ ] Source code and original credits preserved
- [ ] No personal data, credentials or private backups committed
- [ ] Relevant tests executed (or limitations explained)
- [ ] Impact on installation, settings, import/export and permissions considered

For security-sensitive vulnerabilities, please do not share exploitable details in public issues. See [SECURITY.md](SECURITY.md).
