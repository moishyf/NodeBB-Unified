# Security policy

## Reporting an issue

Please **do not publish an exploitable vulnerability, secret, private messages, browser session data or personal backups in public GitHub issues**. Contact the repository maintainer through a private channel you already trust or use GitHub's private vulnerability reporting feature **if the repository has it enabled**. No dedicated security email or response-time commitment is claimed here.

When reporting, share only the minimum required reproduction steps and use synthetic test data.

## Scope and limitations

NodeBB Unified is an unofficial community userscript. It runs within the browser on supported NodeBB forums and may interact with the page's DOM and local settings. This makes input validation, permissions and safe handling of backups important.

The repository has automated checks covering certain code paths, but passing checks **does not constitute a security certification**. Review the userscript manager's requested privileges before installation.

## Credentials and sensitive data

Never include API tokens, cookies, private messages, database exports, contact details, or backups in bug reports or pull requests.

This document does not change licensing, redistribute third-party modules, or grant new permissions.
