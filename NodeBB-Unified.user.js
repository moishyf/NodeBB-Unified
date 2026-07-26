// ==UserScript==
// @name         NodeBB Unified – אוסף הכלים המאוחד
// @namespace    https://mitmachim.top/nodebb-unified/
// @version      2.2.0
// @description  מאחד את סקריפטי NodeBB המקוריים במודולים מבודדים עם פאנל ניהול מרכזי, גיבוי ואבחון
// @author       מחברי הסקריפטים המקוריים
// @updateURL    https://raw.githubusercontent.com/moishyf/NodeBB-Unified/main/NodeBB-Unified.user.js
// @downloadURL  https://raw.githubusercontent.com/moishyf/NodeBB-Unified/main/NodeBB-Unified.user.js
// @match        http://*/*
// @match        https://*/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @connect      icons.duckduckgo.com
// @connect      cdn-icons-png.flaticon.com
// @connect      *
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    function pageWindow() {
        return typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    }

    function escapeHtml(value) {
        return String(value ?? '').replace(/[&<>"']/g, character => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[character]);
    }

    const modules = [
    {
        id: "hebrew-translations",
        name: "תרגום לעברית – אימוג'ים, התראות וסקרים | מתמחים טופ",
        description: "מתרגם טקסטים ותיאורים לעברית בלי לשנות מזהים פנימיים של האתר",
        category: "ממשק ותצוגה",
        originalFile: "תרגום לעברית – אימוג'ים, התראות וסקרים.txt",
        version: "2.1.0",
        author: "Moishy",
        runAt: "document-start",
        matches: ["https://mitmachim.top/*","https://www.mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "882e502b65b430be43ab2e3fe2418c9f7ea4dc02e3cdce1aabdcdaa548ff386a",
        originalBodySha256: "c1cfd4aa351b4d305c245b2b424409b1e7e3947b21f6b665a91220a47db721f3",
        embeddedBodySha256: "c1cfd4aa351b4d305c245b2b424409b1e7e3947b21f6b665a91220a47db721f3",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: תרגום לעברית – אימוג'ים, התראות וסקרים.txt */
(function () {
    'use strict';

    /* =========================================================
       תרגום שמות האימוג'ים
       ========================================================= */

    const emojiTranslations = {
        'nerd face': 'פרצוף חנון',
        'face palm': 'יד על הפנים',
        'facepalm': 'יד על הפנים',
        'man facepalming': 'יד על הפנים',
        'joy': 'צחוק עם דמעות',
        'face with rolling eyes': 'מגלגל עיניים',
        'grinning': 'מחייך',
        'astonished': 'נדהם',
        'thinking face': 'פרצוף חושב',
        'pray': 'תודה',
        'folded hands': 'תודה',
        'sunglasses': 'משקפי שמש',
        'robot face': 'פרצוף רובוט',
        'disappointed relieved': 'פרצוף דומע'
    };

    /* =========================================================
       תרגום טקסטים רגילים באתר
       ========================================================= */

    const pageTranslations = {
        'When someone reacts to your posts & chats':
            'כאשר מישהו מגיב לפוסטים ולצ׳אטים שלך',

        'When someone reacts to your posts and chats':
            'כאשר מישהו מגיב לפוסטים ולצ׳אטים שלך',

        'Manage polls': 'ניהול סקרים',
        'Manage Polls': 'ניהול סקרים',

        'No polls found': 'לא נמצאו סקרים',
        'No Polls Found': 'לא נמצאו סקרים',

        'Add poll': 'הוסף סקר',
        'Add Poll': 'הוסף סקר',

        'Create poll': 'צור סקר',
        'Create Poll': 'צור סקר',

        'Poll title': 'כותרת הסקר',
        'Poll Title': 'כותרת הסקר',

        'Poll topic': 'נושא הסקר',
        'Poll Topic': 'נושא הסקר',

        'Option': 'אפשרות בחירה',
        'Poll option': 'אפשרות בחירה',
        'Poll Option': 'אפשרות בחירה',

        'Add option': 'הוסף אפשרות',
        'Add Option': 'הוסף אפשרות',

        'Allow anonymous voting': 'אפשר הצבעה אנונימית',

        'Allow users to change their vote':
            'אפשר למשתמשים לשנות את הצבעתם',

        'Allow users to change their votes':
            'אפשר למשתמשים לשנות את הצבעתם',

        'Allow multiple choices':
            'אפשר בחירה במספר אפשרויות',

        'Allow multiple answers':
            'אפשר בחירה במספר אפשרויות',

        'Number of votes a user can cast':
            'כמה פעמים כל משתמש יכול להצביע?',

        'Maximum votes per user':
            'מספר הצבעות מרבי לכל משתמש',

        'Automatically end poll':
            'סיום אוטומטי של הסקר',

        'Poll end date':
            'תאריך סיום הסקר',

        'Close': 'סגור',
        'Cancel': 'ביטול',
        'Confirm': 'אישור',
        'Save': 'שמור',
        'Submit': 'אישור',
        'Delete': 'מחק',
        'Edit': 'ערוך'
    };

    const partialTranslations = [
        {
            english: 'When someone reacts to your posts & chats',
            hebrew: 'כאשר מישהו מגיב לפוסטים ולצ׳אטים שלך'
        },
        {
            english: 'Allow anonymous voting',
            hebrew: 'אפשר הצבעה אנונימית'
        },
        {
            english: 'Manage polls',
            hebrew: 'ניהול סקרים'
        },
        {
            english: 'No polls found',
            hebrew: 'לא נמצאו סקרים'
        },
        {
            english: 'Add poll',
            hebrew: 'הוסף סקר'
        }
    ];

    /*
     * מתרגמים רק מאפיינים שמוצגים למשתמש.
     *
     * חשוב:
     * לא מתרגמים data-reaction, data-emoji או data-name,
     * מפני שאלו עשויים להיות מזהים פנימיים שהשרת צריך.
     */
    const attributesToTranslate = [
        'title',
        'aria-label',
        'placeholder',
        'data-title',
        'data-original-title',
        'data-bs-original-title',
        'data-tooltip',
        'data-content'
    ];

    /*
     * מאפייני מערכת שאסור לסקריפט לשנות.
     */
    const protectedAttributes = new Set([
        'data-reaction',
        'data-emoji',
        'data-name',
        'data-alias',
        'data-pid',
        'data-uid',
        'data-tid',
        'data-action',
        'data-component',
        'component',
        'href',
        'src',
        'value'
    ]);

    function normalizeText(text) {
        return String(text || '')
            .replace(/\u00A0/g, ' ')
            .trim()
            .toLowerCase()
            .replace(/^:+|:+$/g, '')
            .replace(/[_-]+/g, ' ')
            .replace(/\s+/g, ' ');
    }

    function preserveOuterSpaces(originalText, translatedText) {
        const leadingSpaces =
            originalText.match(/^\s*/)?.[0] || '';

        const trailingSpaces =
            originalText.match(/\s*$/)?.[0] || '';

        return leadingSpaces +
            translatedText +
            trailingSpaces;
    }

    function findPageTranslation(text) {
        if (!text || typeof text !== 'string') {
            return null;
        }

        const trimmedText = text
            .replace(/\u00A0/g, ' ')
            .trim();

        if (!trimmedText) {
            return null;
        }

        if (pageTranslations[trimmedText]) {
            return pageTranslations[trimmedText];
        }

        const lowerText = trimmedText.toLowerCase();

        for (const [english, hebrew] of
            Object.entries(pageTranslations)) {

            if (english.toLowerCase() === lowerText) {
                return hebrew;
            }
        }

        return null;
    }

    function translateEmojiText(text) {
        if (!text || typeof text !== 'string') {
            return null;
        }

        const normalized = normalizeText(text);

        if (emojiTranslations[normalized]) {
            return emojiTranslations[normalized];
        }

        const prefixes = [
            'react with ',
            'reaction: ',
            'emoji: ',
            'add reaction ',
            'add reaction: '
        ];

        for (const prefix of prefixes) {
            if (!normalized.startsWith(prefix)) {
                continue;
            }

            const emojiName = normalized
                .slice(prefix.length)
                .trim();

            if (emojiTranslations[emojiName]) {
                return emojiTranslations[emojiName];
            }
        }

        return null;
    }

    function translateAnyText(text) {
        return (
            findPageTranslation(text) ||
            translateEmojiText(text)
        );
    }

    function setRtl(element) {
        if (!(element instanceof Element)) {
            return;
        }

        element.setAttribute('dir', 'rtl');

        if (!element.style.textAlign) {
            element.style.textAlign = 'right';
        }
    }

    /* =========================================================
       תיקון נזק מגרסאות קודמות
       ========================================================= */

    function repairReactionIdentifiers(root = document) {
        if (
            !(root instanceof Document) &&
            !(root instanceof Element)
        ) {
            return;
        }

        const selector =
            '[component="post/reaction"][data-reaction]';

        const reactions = [];

        if (
            root instanceof Element &&
            root.matches(selector)
        ) {
            reactions.push(root);
        }

        reactions.push(
            ...root.querySelectorAll?.(selector) || []
        );

        for (const reactionElement of reactions) {
            const image =
                reactionElement.querySelector('img');

            if (!image) {
                continue;
            }

            /*
             * לדוגמה:
             * emoji--astonished
             * נהפך בחזרה ל:
             * astonished
             */
            const emojiClass = Array
                .from(image.classList)
                .find(className =>
                    className.startsWith('emoji--')
                );

            if (!emojiClass) {
                continue;
            }

            const originalReaction = emojiClass
                .slice('emoji--'.length)
                .trim();

            if (!originalReaction) {
                continue;
            }

            reactionElement.setAttribute(
                'data-reaction',
                originalReaction
            );
        }
    }

    /* =========================================================
       תרגום מאפיינים גלויים בלבד
       ========================================================= */

    function translateAttributes(element) {
        if (!(element instanceof Element)) {
            return;
        }

        for (const attribute of attributesToTranslate) {
            if (protectedAttributes.has(attribute)) {
                continue;
            }

            if (!element.hasAttribute(attribute)) {
                continue;
            }

            const originalText =
                element.getAttribute(attribute);

            if (!originalText) {
                continue;
            }

            const translatedText =
                translateAnyText(originalText);

            if (
                translatedText &&
                translatedText !== originalText
            ) {
                element.setAttribute(
                    attribute,
                    translatedText
                );
            }
        }

        /*
         * עבור input מתרגמים רק טקסט של כפתורי ממשק.
         * אין שינוי בשדות מערכת אחרים.
         */
        if (
            element instanceof HTMLInputElement &&
            ['button', 'submit', 'reset']
                .includes(element.type)
        ) {
            const translatedValue =
                translateAnyText(element.value);

            if (translatedValue) {
                element.value = translatedValue;
            }
        }
    }

    /* =========================================================
       תרגום טקסט גלוי
       ========================================================= */

    function translateTextNode(textNode) {
        if (!(textNode instanceof Text)) {
            return;
        }

        const parent = textNode.parentElement;

        if (!parent) {
            return;
        }

        if (
            parent.matches(
                'script, style, code, pre, textarea, input, ' +
                '[contenteditable="true"], ' +
                '[contenteditable="plaintext-only"]'
            )
        ) {
            return;
        }

        const originalText = textNode.nodeValue;

        if (!originalText || !originalText.trim()) {
            return;
        }

        const translatedText =
            findPageTranslation(originalText);

        if (translatedText) {
            textNode.nodeValue =
                preserveOuterSpaces(
                    originalText,
                    translatedText
                );

            setRtl(parent);
            return;
        }

        let updatedText = originalText;
        let changed = false;

        for (const translation of partialTranslations) {
            const escapedEnglish =
                translation.english.replace(
                    /[.*+?^${}()|[\]\\]/g,
                    '\\$&'
                );

            const expression =
                new RegExp(escapedEnglish, 'gi');

            if (expression.test(updatedText)) {
                updatedText = updatedText.replace(
                    expression,
                    translation.hebrew
                );

                changed = true;
            }
        }

        if (changed) {
            textNode.nodeValue = updatedText;
            setRtl(parent);
        }
    }

    function translateTextNodes(root = document) {
        if (root instanceof Text) {
            translateTextNode(root);
            return;
        }

        if (
            !(root instanceof Document) &&
            !(root instanceof Element)
        ) {
            return;
        }

        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    const parent = node.parentElement;

                    if (!parent) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    if (
                        parent.matches(
                            'script, style, code, pre, ' +
                            'textarea, input, ' +
                            '[contenteditable="true"], ' +
                            '[contenteditable="plaintext-only"]'
                        )
                    ) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const nodes = [];

        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }

        for (const node of nodes) {
            translateTextNode(node);
        }
    }

    /* =========================================================
       בועות והודעות דינמיות
       ========================================================= */

    function translateVisibleTooltip(element) {
        if (!(element instanceof Element)) {
            return;
        }

        const tooltipSelector = [
            '.tooltip',
            '.tooltip-inner',
            '[role="tooltip"]',
            '.popover',
            '.popover-body',
            '.emoji-tooltip',
            '.alert',
            '.modal',
            '.dropdown-menu'
        ].join(', ');

        if (!element.matches(tooltipSelector)) {
            return;
        }

        translateTextNodes(element);
        translateAttributes(element);

        element.querySelectorAll('*').forEach(child => {
            translateAttributes(child);
        });
    }

    function translateElement(element) {
        if (!(element instanceof Element)) {
            return;
        }

        /*
         * מתקנים קודם מזהי תגובות שניזוקו
         * על ידי גרסה קודמת.
         */
        repairReactionIdentifiers(element);

        translateAttributes(element);
        translateVisibleTooltip(element);
    }

    /* =========================================================
       סריקת העמוד
       ========================================================= */

    function scan(root = document) {
        if (
            !(root instanceof Document) &&
            !(root instanceof Element) &&
            !(root instanceof Text)
        ) {
            return;
        }

        if (root instanceof Text) {
            translateTextNode(root);
            return;
        }

        repairReactionIdentifiers(root);

        if (root instanceof Element) {
            translateElement(root);
        }

        root.querySelectorAll?.('*').forEach(element => {
            translateAttributes(element);
        });

        translateTextNodes(root);
    }

    /* =========================================================
       הפעלה ומעקב
       ========================================================= */

    function initialize() {
        scan(document);

        let scanScheduled = false;

        function scheduleFullScan() {
            if (scanScheduled) {
                return;
            }

            scanScheduled = true;

            requestAnimationFrame(() => {
                scanScheduled = false;
                scan(document);
            });
        }

        const observer = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                if (mutation.type === 'characterData') {
                    translateTextNode(mutation.target);
                    continue;
                }

                if (mutation.type === 'attributes') {
                    translateElement(mutation.target);
                    continue;
                }

                for (const addedNode of mutation.addedNodes) {
                    if (
                        addedNode.nodeType ===
                            Node.ELEMENT_NODE ||
                        addedNode.nodeType ===
                            Node.TEXT_NODE
                    ) {
                        scan(addedNode);
                    }
                }
            }

            scheduleFullScan();
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true,

            /*
             * מעקב רק אחרי מאפיינים גלויים.
             * אין מעקב אחר data-reaction.
             */
            attributeFilter: attributesToTranslate
        });

        document.addEventListener(
            'mouseover',
            event => {
                if (event.target instanceof Element) {
                    repairReactionIdentifiers(
                        event.target.closest(
                            '[component="post/reaction"]'
                        ) || event.target
                    );

                    translateElement(event.target);
                }

                setTimeout(scheduleFullScan, 20);
                setTimeout(scheduleFullScan, 100);
                setTimeout(scheduleFullScan, 300);
            },
            true
        );

        document.addEventListener(
            'pointerdown',
            event => {
                if (!(event.target instanceof Element)) {
                    return;
                }

                const reaction =
                    event.target.closest(
                        '[component="post/reaction"]'
                    );

                if (reaction) {
                    repairReactionIdentifiers(reaction);
                }
            },
            true
        );

        document.addEventListener(
            'click',
            () => {
                setTimeout(scheduleFullScan, 20);
                setTimeout(scheduleFullScan, 150);
                setTimeout(scheduleFullScan, 500);
            },
            true
        );
    }

    if (document.readyState === 'loading') {
        document.addEventListener(
            'DOMContentLoaded',
            initialize,
            { once: true }
        );
    } else {
        initialize();
    }
})();
/* SOURCE_END: תרגום לעברית – אימוג'ים, התראות וסקרים.txt */
        }
    },

    {
        id: "smart-shortcuts-random-topic",
        name: "קיצורי דרך ונושא אקראי חכם – מתמחים טופ",
        description: "קיצורים בסרגל הצד ונושא אקראי אמיתי מכל הזמנים, לפי קטגוריות וסוג נושא",
        category: "ניווט וחיפוש",
        originalFile: "קיצורי דרך ונושא אקראי חכם.txt",
        version: "4.1.0",
        author: "Moishy",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "ac795fe20668684d3da6c4bb92cc7ecfd593021188ad7d7347d5b83120bfa821",
        originalBodySha256: "61b5e04f8fa6f8b55f4af2f87d18f344df6fdd9da5e35bcc99dfe80cebd743ec",
        embeddedBodySha256: "61b5e04f8fa6f8b55f4af2f87d18f344df6fdd9da5e35bcc99dfe80cebd743ec",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: קיצורי דרך ונושא אקראי חכם.txt */
(() => {
    'use strict';

    const APP = {
        itemClass: 'moishy-native-shortcut-item-v41',
        linkClass: 'moishy-native-shortcut-link-v41',
        tooltipId: 'moishy-shortcut-tooltip-v41',

        modalId: 'moishy-random-modal-v41',
        overlayId: 'moishy-random-overlay-v41',
        styleId: 'moishy-random-style-v41',

        dbName: 'mitmachim-random-topic-index-v1',
        dbVersion: 1,

        cacheMs: 24 * 60 * 60 * 1000,
        concurrency: 3,

        settingsKey: 'moishy-random-topic-settings-v41'
    };

    const state = {
        categories: [],
        running: false,
        cancelled: false,
        path: location.pathname,
        dbPromise: null
    };

    const shortcuts = [
        {
            title: 'הכי הרבה הצבעות',
            href: '/top',
            icon: 'fa-trophy'
        },
        {
            title: 'קבוצות',
            href: '/groups',
            icon: 'fa-users'
        },
        {
            title: 'תגיות',
            href: '/tags',
            icon: 'fa-tag'
        },
        {
            title: 'נושא אקראי',
            action: openModal,
            icon: 'fa-random'
        }
    ];

    /* =========================================================
       עיצוב
       ========================================================= */

    function addStyles() {
        if (document.getElementById(APP.styleId)) {
            return;
        }

        const style = document.createElement('style');
        style.id = APP.styleId;

        style.textContent = `
            /*
             * בועת ההסבר הפרטית של הכפתורים החדשים.
             * אינה משתמשת ב-Bootstrap ולכן אינה יורשת את
             * הכיתוב "צור קשר".
             */
            #${APP.tooltipId} {
                position: fixed !important;
                display: none !important;

                max-width: 240px !important;
                padding: 7px 10px !important;

                background: #181818 !important;
                color: #ffffff !important;

                border-radius: 6px !important;
                box-shadow: 0 3px 10px rgba(0, 0, 0, 0.28) !important;

                font-family: inherit !important;
                font-size: 14px !important;
                font-weight: 400 !important;
                line-height: 1.35 !important;
                white-space: nowrap !important;

                direction: rtl !important;
                text-align: right !important;

                pointer-events: none !important;
                opacity: 0 !important;

                z-index: 2147483647 !important;
                transition: opacity 80ms ease !important;
            }

            #${APP.tooltipId}.visible {
                display: block !important;
                opacity: 1 !important;
            }

            #${APP.tooltipId}::after {
                content: "" !important;
                position: absolute !important;

                width: 0 !important;
                height: 0 !important;

                border: 6px solid transparent !important;
            }

            #${APP.tooltipId}.tooltip-left::after {
                top: 50% !important;
                right: -12px !important;
                transform: translateY(-50%) !important;
                border-left-color: #181818 !important;
            }

            #${APP.tooltipId}.tooltip-right::after {
                top: 50% !important;
                left: -12px !important;
                transform: translateY(-50%) !important;
                border-right-color: #181818 !important;
            }

            /*
             * הסרת תצוגות ש-Bootstrap עלול ליצור בטעות
             * לכפתורים מהגרסאות הקודמות.
             */
            .tooltip.moishy-old-shortcut-tooltip {
                display: none !important;
            }

            #${APP.overlayId} {
                position: fixed !important;
                inset: 0 !important;
                z-index: 2147483640 !important;

                display: flex !important;
                align-items: center !important;
                justify-content: center !important;

                padding: 18px !important;
                background: rgba(0, 0, 0, 0.48) !important;
                direction: rtl !important;
            }

            #${APP.modalId} {
                width: 560px !important;
                max-width: calc(100vw - 36px) !important;
                max-height: calc(100vh - 36px) !important;
                overflow: auto !important;

                background: #ffffff !important;
                color: #26313b !important;

                border: 1px solid #d8dde2 !important;
                border-radius: 12px !important;
                box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3) !important;

                font-family: inherit !important;
                direction: rtl !important;
                text-align: right !important;
            }

            #${APP.modalId} .m-header {
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                gap: 12px !important;

                padding: 16px 18px !important;
                border-bottom: 1px solid #e4e8ec !important;
            }

            #${APP.modalId} .m-title {
                margin: 0 !important;
                font-size: 19px !important;
                font-weight: 700 !important;
            }

            #${APP.modalId} .m-close {
                width: 32px !important;
                height: 32px !important;
                padding: 0 !important;

                border: 0 !important;
                border-radius: 6px !important;
                background: transparent !important;
                color: #687580 !important;

                font-size: 25px !important;
                line-height: 1 !important;
                cursor: pointer !important;
            }

            #${APP.modalId} .m-close:hover {
                background: #eef1f3 !important;
            }

            #${APP.modalId} .m-body {
                padding: 18px !important;
            }

            #${APP.modalId} .m-field {
                margin-bottom: 17px !important;
            }

            #${APP.modalId} .m-label {
                display: block !important;
                margin-bottom: 7px !important;

                font-size: 14px !important;
                font-weight: 700 !important;
            }

            #${APP.modalId} select,
            #${APP.modalId} button,
            #${APP.modalId} input {
                font-family: inherit !important;
            }

            #${APP.modalId} select {
                width: 100% !important;
                min-height: 42px !important;
                padding: 7px 11px !important;

                border: 1px solid #cbd2d9 !important;
                border-radius: 7px !important;

                background: #ffffff !important;
                color: #28333c !important;

                font-size: 14px !important;
                direction: rtl !important;
            }

            #${APP.modalId} select:focus {
                outline: 0 !important;
                border-color: #3f8ef7 !important;
                box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.13) !important;
            }

            #${APP.modalId} select:disabled {
                background: #f1f3f5 !important;
                color: #87919a !important;
                cursor: wait !important;
            }

            #${APP.modalId} .m-category-box {
                max-height: 230px !important;
                overflow: auto !important;

                padding: 9px 11px !important;

                border: 1px solid #cbd2d9 !important;
                border-radius: 7px !important;
                background: #ffffff !important;
            }

            #${APP.modalId} .m-check {
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;

                padding: 5px 2px !important;
                margin: 0 !important;

                font-size: 14px !important;
                cursor: pointer !important;
            }

            #${APP.modalId} .m-check input {
                width: 16px !important;
                height: 16px !important;
                margin: 0 !important;
                accent-color: #0d6efd !important;
            }

            #${APP.modalId} .m-help {
                margin-top: 6px !important;
                color: #7d8892 !important;

                font-size: 12px !important;
                line-height: 1.55 !important;
            }

            #${APP.modalId} .m-status {
                display: none !important;

                margin-bottom: 12px !important;
                padding: 10px 12px !important;

                border-radius: 7px !important;
                background: #edf6ff !important;
                color: #28577f !important;

                font-size: 13px !important;
                line-height: 1.6 !important;
                white-space: pre-line !important;
            }

            #${APP.modalId} .m-status.visible {
                display: block !important;
            }

            #${APP.modalId} .m-status.error {
                background: #fff0f0 !important;
                color: #922e2e !important;
            }

            #${APP.modalId} .m-progress {
                display: none !important;
                height: 7px !important;
                margin: 0 0 14px !important;
                overflow: hidden !important;

                border-radius: 999px !important;
                background: #e5e9ed !important;
            }

            #${APP.modalId} .m-progress.visible {
                display: block !important;
            }

            #${APP.modalId} .m-progress > span {
                display: block !important;
                width: 0%;
                height: 100% !important;

                background: #0d6efd !important;
                transition: width 0.16s ease !important;
            }

            #${APP.modalId} .m-actions {
                display: flex !important;
                flex-wrap: wrap !important;
                gap: 8px !important;
            }

            #${APP.modalId} .m-btn {
                min-height: 40px !important;
                padding: 8px 16px !important;

                border: 0 !important;
                border-radius: 7px !important;

                font-size: 14px !important;
                font-weight: 700 !important;
                cursor: pointer !important;
            }

            #${APP.modalId} .m-primary {
                background: #0d6efd !important;
                color: #ffffff !important;
            }

            #${APP.modalId} .m-primary:hover {
                background: #0b5ed7 !important;
            }

            #${APP.modalId} .m-secondary {
                background: #e8ebee !important;
                color: #3e4852 !important;
            }

            #${APP.modalId} .m-danger {
                background: #fff0f0 !important;
                color: #922e2e !important;
            }

            #${APP.modalId} .m-btn:disabled {
                opacity: 0.65 !important;
                cursor: wait !important;
            }
        `;

        document.head.appendChild(style);
    }

    /* =========================================================
       בועות ההסבר של הכפתורים החדשים
       ========================================================= */

    function getShortcutTooltip() {
        let tooltip = document.getElementById(APP.tooltipId);

        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = APP.tooltipId;
            tooltip.setAttribute('role', 'tooltip');
            document.body.appendChild(tooltip);
        }

        return tooltip;
    }

    function hideShortcutTooltip() {
        const tooltip = document.getElementById(APP.tooltipId);

        if (!tooltip) {
            return;
        }

        tooltip.classList.remove(
            'visible',
            'tooltip-left',
            'tooltip-right'
        );

        tooltip.textContent = '';
    }

    function showShortcutTooltip(link) {
        const text = link.dataset.moishyTooltip;

        if (!text || !link.isConnected) {
            return;
        }

        const tooltip = getShortcutTooltip();

        tooltip.textContent = text;
        tooltip.classList.remove(
            'tooltip-left',
            'tooltip-right'
        );

        /*
         * מציגים זמנית כדי לקבל את המידות האמיתיות.
         */
        tooltip.style.visibility = 'hidden';
        tooltip.classList.add('visible');

        const linkRect = link.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();

        const sidebarIsOnRight =
            linkRect.left >
            window.innerWidth / 2;

        let left;
        let top;

        if (sidebarIsOnRight) {
            /*
             * הסרגל בצד ימין — הבועה תופיע משמאל.
             */
            tooltip.classList.add('tooltip-left');

            left =
                linkRect.left -
                tooltipRect.width -
                12;
        } else {
            /*
             * הסרגל בצד שמאל — הבועה תופיע מימין.
             */
            tooltip.classList.add('tooltip-right');

            left =
                linkRect.right +
                12;
        }

        top =
            linkRect.top +
            linkRect.height / 2 -
            tooltipRect.height / 2;

        left = Math.max(
            8,
            Math.min(
                window.innerWidth -
                tooltipRect.width -
                8,
                left
            )
        );

        top = Math.max(
            8,
            Math.min(
                window.innerHeight -
                tooltipRect.height -
                8,
                top
            )
        );

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
        tooltip.style.visibility = 'visible';
    }

    function addShortcutTooltipEvents(link) {
        link.addEventListener(
            'mouseenter',
            () => showShortcutTooltip(link)
        );

        link.addEventListener(
            'mouseleave',
            hideShortcutTooltip
        );

        link.addEventListener(
            'focus',
            () => showShortcutTooltip(link)
        );

        link.addEventListener(
            'blur',
            hideShortcutTooltip
        );

        link.addEventListener(
            'click',
            hideShortcutTooltip
        );
    }

    /*
     * מנקה בועות Bootstrap שייתכן שנשארו מהגרסה הקודמת.
     */
    function cleanupOldTooltips() {
        hideShortcutTooltip();

        document
            .querySelectorAll(
                `.${APP.linkClass}`
            )
            .forEach(link => {
                link.removeAttribute(
                    'data-original-title'
                );

                link.removeAttribute(
                    'data-bs-original-title'
                );

                link.removeAttribute(
                    'data-toggle'
                );

                link.removeAttribute(
                    'data-bs-toggle'
                );

                link.removeAttribute(
                    'data-placement'
                );

                link.removeAttribute(
                    'data-bs-placement'
                );

                link.removeAttribute(
                    'aria-describedby'
                );

                link.removeAttribute(
                    'title'
                );
            });

        /*
         * סגירת בועה פתוחה ששייכת לכפתורים ישנים.
         */
        document
            .querySelectorAll(
                '.tooltip.show, .tooltip.in'
            )
            .forEach(tooltip => {
                const text =
                    tooltip.textContent
                        ?.trim();

                if (
                    text === 'צור קשר' ||
                    shortcuts.some(
                        item =>
                            item.title === text
                    )
                ) {
                    tooltip.remove();
                }
            });
    }

    /* =========================================================
       שילוב הכפתורים בסרגל הצד המקורי
       ========================================================= */

    function isVisible(element) {
        if (!(element instanceof Element)) {
            return false;
        }

        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);

        return (
            rect.width > 0 &&
            rect.height > 0 &&
            style.display !== 'none' &&
            style.visibility !== 'hidden'
        );
    }

    function findNativeAnchor() {
        const contactSelectors = [
            'a[href="/contact"]',
            'a[href$="/contact"]',
            'a[href*="/contact"]'
        ];

        for (const selector of contactSelectors) {
            const candidates =
                document.querySelectorAll(
                    selector
                );

            for (const candidate of candidates) {
                if (isVisible(candidate)) {
                    return candidate;
                }
            }
        }

        /*
         * פתרון חלופי אם כתובת צור קשר תשתנה.
         */
        return [
            ...document.querySelectorAll(
                'a.nav-link.navigation-link, nav a, .sidebar a'
            )
        ].find(link => {
            if (!isVisible(link)) {
                return false;
            }

            const rect =
                link.getBoundingClientRect();

            return (
                (
                    rect.left < 110 ||
                    rect.right >
                    window.innerWidth - 110
                ) &&
                rect.width >= 30 &&
                rect.width <= 280 &&
                link.querySelector(
                    'i[class*="fa-"]'
                )
            );
        }) || null;
    }

    function findNativeItem(anchor) {
        if (!anchor) {
            return null;
        }

        const possibleItem =
            anchor.closest(
                'li, .nav-item, [role="listitem"]'
            );

        if (
            possibleItem &&
            possibleItem.parentElement
        ) {
            return possibleItem;
        }

        return anchor;
    }

    function cleanClonedElement(element) {
        if (!(element instanceof Element)) {
            return;
        }

        element.removeAttribute('id');
        element.removeAttribute('title');
        element.removeAttribute('aria-describedby');

        element.removeAttribute(
            'data-original-title'
        );

        element.removeAttribute(
            'data-bs-original-title'
        );

        element.removeAttribute(
            'data-toggle'
        );

        element.removeAttribute(
            'data-bs-toggle'
        );

        element.removeAttribute(
            'data-placement'
        );

        element.removeAttribute(
            'data-bs-placement'
        );

        element.removeAttribute(
            'data-content'
        );

        element.classList.remove(
            'active',
            'selected',
            'open',
            'show'
        );
    }

    function createNativeShortcut(
        sampleAnchor,
        sampleItem,
        item
    ) {
        let itemElement;
        let linkElement;

        /*
         * אם הכפתורים המקוריים עטופים ב-li או nav-item,
         * משכפלים את העטיפה כדי לשמור על המרווח המקורי.
         */
        if (
            sampleItem &&
            sampleItem !== sampleAnchor
        ) {
            itemElement =
                sampleItem.cloneNode(false);

            cleanClonedElement(
                itemElement
            );

            linkElement =
                sampleAnchor.cloneNode(false);
        } else {
            itemElement = null;

            linkElement =
                sampleAnchor.cloneNode(false);
        }

        cleanClonedElement(
            linkElement
        );

        linkElement.classList.add(
            APP.linkClass
        );

        linkElement.textContent = '';

        /*
         * בכוונה אין title או data-original-title.
         * הבועה הפרטית משתמשת רק ב-data-moishy-tooltip.
         */
        linkElement.dataset.moishyTooltip =
            item.title;

        linkElement.setAttribute(
            'aria-label',
            item.title
        );

        const icon = document.createElement('i');
        icon.className =
            `fa fa-fw ${item.icon}`;

        icon.setAttribute(
            'aria-hidden',
            'true'
        );

        const iconWrapper =
            document.createElement('span');

        iconWrapper.className =
            'position-relative';

        iconWrapper.appendChild(icon);

        const content =
            document.createElement('span');

        content.className =
            'd-flex gap-2 align-items-center text-nowrap truncate-open';

        content.appendChild(
            iconWrapper
        );

        const text =
            document.createElement('span');

        text.className =
            'nav-text small visible-open fw-semibold text-truncate';

        text.textContent =
            item.title;

        content.appendChild(
            text
        );

        linkElement.appendChild(
            content
        );

        if (item.href) {
            linkElement.href =
                item.href;
        } else {
            linkElement.href = '#';

            linkElement.addEventListener(
                'click',
                event => {
                    event.preventDefault();
                    item.action();
                }
            );
        }

        addShortcutTooltipEvents(
            linkElement
        );

        if (itemElement) {
            itemElement.classList.add(
                APP.itemClass
            );

            itemElement.appendChild(
                linkElement
            );

            return itemElement;
        }

        linkElement.classList.add(
            APP.itemClass
        );

        return linkElement;
    }

    function removeExistingShortcuts() {
        document
            .querySelectorAll(
                `.${APP.itemClass}`
            )
            .forEach(element => {
                element.remove();
            });

        /*
         * ניקוי גם מזהים מהגרסאות הקודמות.
         */
        document
            .querySelectorAll([
                '#moishy-native-shortcuts',
                '#moishy-native-shortcuts-v4',
                '#moishy-native-shortcuts-v41'
            ].join(','))
            .forEach(element => {
                element.remove();
            });

        cleanupOldTooltips();
    }

    function insertShortcuts() {
        if (
            document.querySelector(
                `.${APP.itemClass}`
            )
        ) {
            markActive();
            return true;
        }

        const sampleAnchor =
            findNativeAnchor();

        const sampleItem =
            findNativeItem(
                sampleAnchor
            );

        if (
            !sampleAnchor ||
            !sampleItem ||
            !sampleItem.parentElement
        ) {
            return false;
        }

        /*
         * הכפתורים מתווספים כאחים אמיתיים של כפתור צור קשר,
         * ולא כתוכן פנימי שלו.
         */
        let insertionPoint =
            sampleItem;

        shortcuts.forEach(item => {
            const newItem =
                createNativeShortcut(
                    sampleAnchor,
                    sampleItem,
                    item
                );

            insertionPoint.insertAdjacentElement(
                'afterend',
                newItem
            );

            insertionPoint =
                newItem;
        });

        markActive();
        return true;
    }

    function markActive() {
        document
            .querySelectorAll(
                `.${APP.linkClass}[href]`
            )
            .forEach(link => {
                const href =
                    link.getAttribute('href');

                if (
                    !href ||
                    href === '#'
                ) {
                    link.classList.remove(
                        'active'
                    );

                    return;
                }

                const path =
                    new URL(
                        href,
                        location.origin
                    ).pathname;

                link.classList.toggle(
                    'active',
                    location.pathname === path ||
                    location.pathname.startsWith(
                        `${path}/`
                    )
                );
            });
    }

    /* =========================================================
       תקשורת עם האתר
       ========================================================= */

    async function fetchJson(url) {
        const response = await fetch(url, {
            credentials: 'same-origin',
            cache: 'no-store',

            headers: {
                Accept: 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(
                `HTTP ${response.status}`
            );
        }

        return response.json();
    }

    function decodeHtml(value) {
        const element =
            document.createElement(
                'textarea'
            );

        element.innerHTML =
            String(value || '');

        return element.value;
    }

    function normalizeCategory(raw) {
        const cid =
            Number.parseInt(
                raw?.cid ?? raw?.id,
                10
            );

        if (!Number.isFinite(cid)) {
            return null;
        }

        return {
            cid,

            name: decodeHtml(
                raw.name ||
                raw.title ||
                `קטגוריה ${cid}`
            ).trim(),

            slug: String(
                raw.slug ||
                raw.categorySlug ||
                ''
            ).trim(),

            topicCount:
                Number.parseInt(
                    raw.topic_count ??
                    raw.topicCount ??
                    raw.numTopics ??
                    0,
                    10
                ) || 0,

            disabled: Boolean(
                raw.disabled ||
                raw.isSection ||
                raw.link
            )
        };
    }

    function collectCategories(data) {
        const categories = [];
        const seen = new Set();

        function add(raw) {
            if (
                !raw ||
                typeof raw !== 'object'
            ) {
                return;
            }

            const category =
                normalizeCategory(raw);

            if (
                category &&
                !category.disabled &&
                !seen.has(category.cid)
            ) {
                seen.add(category.cid);
                categories.push(category);
            }

            const children =
                raw.children ||
                raw.subCategories ||
                raw.categories;

            if (Array.isArray(children)) {
                children.forEach(add);
            }
        }

        [
            data?.categories,
            data?.data?.categories,
            Array.isArray(data)
                ? data
                : null
        ].forEach(array => {
            if (Array.isArray(array)) {
                array.forEach(add);
            }
        });

        return categories.sort(
            (first, second) =>
                first.name.localeCompare(
                    second.name,
                    'he',
                    {
                        numeric: true
                    }
                )
        );
    }

    async function loadCategories() {
        if (state.categories.length) {
            return state.categories;
        }

        try {
            state.categories =
                collectCategories(
                    await fetchJson(
                        '/api/categories'
                    )
                );
        } catch (_) {
            const response = await fetch(
                '/categories',
                {
                    credentials:
                        'same-origin',
                    cache: 'no-store'
                }
            );

            const html =
                await response.text();

            const copiedDocument =
                new DOMParser()
                    .parseFromString(
                        html,
                        'text/html'
                    );

            const seen =
                new Set();

            state.categories = [
                ...copiedDocument
                    .querySelectorAll(
                        'a[href*="/category/"]'
                    )
            ].map(link => {
                const match =
                    (
                        link.getAttribute(
                            'href'
                        ) || ''
                    ).match(
                        /\/category\/(\d+)(?:\/([^/?#]+))?/
                    );

                if (
                    !match ||
                    seen.has(match[1])
                ) {
                    return null;
                }

                seen.add(match[1]);

                return {
                    cid: Number(match[1]),
                    slug: match[2] || '',
                    name:
                        link.textContent
                            .trim()
                            .replace(
                                /\s+/g,
                                ' '
                            ),

                    topicCount: 0
                };
            }).filter(Boolean);
        }

        if (!state.categories.length) {
            throw new Error(
                'לא נמצאו קטגוריות'
            );
        }

        return state.categories;
    }

    function normalizeTopic(raw) {
        const tid =
            Number.parseInt(
                raw?.tid ?? raw?.id,
                10
            );

        if (
            !Number.isFinite(tid) ||
            tid <= 0
        ) {
            return null;
        }

        return {
            tid,

            cid:
                Number.parseInt(
                    raw.cid ??
                    raw.category?.cid,
                    10
                ) || 0,

            title: decodeHtml(
                raw.title || ''
            ).trim(),

            slug: String(
                raw.slug || ''
            ).trim(),

            pinned: Boolean(
                raw.pinned ||
                raw.isPinned
            ),

            deleted: Boolean(
                raw.deleted ||
                raw.isDeleted
            ),

            scheduled: Boolean(
                raw.scheduled ||
                raw.isScheduled
            )
        };
    }

    function collectTopics(data) {
        const topics = [];
        const seen = new Set();

        [
            data?.topics,
            data?.category?.topics,
            data?.data?.topics,
            data?.payload?.topics,
            Array.isArray(data)
                ? data
                : null
        ].forEach(array => {
            if (!Array.isArray(array)) {
                return;
            }

            array.forEach(raw => {
                const topic =
                    normalizeTopic(raw);

                if (
                    topic &&
                    !seen.has(topic.tid)
                ) {
                    seen.add(topic.tid);
                    topics.push(topic);
                }
            });
        });

        return topics;
    }

    function getPageCount(data) {
        const pagination =
            data?.pagination ||
            data?.category?.pagination ||
            data?.data?.pagination;

        const value =
            Number.parseInt(
                pagination?.pageCount ??
                pagination?.pages ??
                data?.pageCount ??
                1,
                10
            );

        return (
            Number.isFinite(value) &&
            value > 0
        )
            ? value
            : 1;
    }

    async function fetchCategoryPage(
        category,
        page
    ) {
        const endpoints = [];

        if (category.slug) {
            endpoints.push(
                `/api/category/${category.cid}/${encodeURIComponent(category.slug)}/${page}`
            );
        }

        endpoints.push(
            `/api/category/${category.cid}/${page}`,
            `/api/category/${category.cid}?page=${page}`
        );

        let lastError = null;

        for (const endpoint of endpoints) {
            try {
                const data =
                    await fetchJson(endpoint);

                return {
                    topics:
                        collectTopics(data),

                    pageCount:
                        getPageCount(data)
                };
            } catch (error) {
                lastError = error;
            }
        }

        throw (
            lastError ||
            new Error(
                `לא ניתן לקרוא את ${category.name}`
            )
        );
    }

    /* =========================================================
       זיהוי סוגי נושא מתוך הכותרת
       ========================================================= */

    function cleanType(value) {
        const type =
            String(value || '')
                .replace(
                    /^[\s[\](){}\-–—:|]+/,
                    ''
                )
                .replace(
                    /[\s[\](){}\-–—:|]+$/,
                    ''
                )
                .replace(/\s+/g, ' ')
                .trim();

        if (
            !type ||
            type.length > 36 ||
            type.split(/\s+/).length > 6
        ) {
            return '';
        }

        return type;
    }

    function extractType(title) {
        const text =
            String(title || '')
                .replace(/\s+/g, ' ')
                .trim();

        return cleanType(
            text.match(
                /^([^|]{1,50}?)\s*\|\s*.+$/
            )?.[1] ||

            text.match(
                /^\[([^\]]{1,40})\]\s*.+$/
            )?.[1] ||

            text.match(
                /^([^:]{1,35}?)\s*:\s+.+$/
            )?.[1] ||

            ''
        );
    }

    function normalizeType(value) {
        return String(value || '')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }

    /* =========================================================
       IndexedDB
       ========================================================= */

    function openDatabase() {
        if (state.dbPromise) {
            return state.dbPromise;
        }

        state.dbPromise =
            new Promise(
                (resolve, reject) => {
                    const request =
                        indexedDB.open(
                            APP.dbName,
                            APP.dbVersion
                        );

                    request.onupgradeneeded =
                        () => {
                            const database =
                                request.result;

                            if (
                                !database.objectStoreNames
                                    .contains('topics')
                            ) {
                                const topics =
                                    database
                                        .createObjectStore(
                                            'topics',
                                            {
                                                keyPath:
                                                    'tid'
                                            }
                                        );

                                topics.createIndex(
                                    'cid',
                                    'cid',
                                    {
                                        unique: false
                                    }
                                );

                                topics.createIndex(
                                    'cidType',
                                    [
                                        'cid',
                                        'type'
                                    ],
                                    {
                                        unique: false
                                    }
                                );

                                topics.createIndex(
                                    'type',
                                    'type',
                                    {
                                        unique: false
                                    }
                                );
                            }

                            if (
                                !database.objectStoreNames
                                    .contains('meta')
                            ) {
                                database
                                    .createObjectStore(
                                        'meta',
                                        {
                                            keyPath:
                                                'cid'
                                        }
                                    );
                            }
                        };

                    request.onsuccess =
                        () => resolve(
                            request.result
                        );

                    request.onerror =
                        () => reject(
                            request.error
                        );
                }
            );

        return state.dbPromise;
    }

    async function transaction(
        storeNames,
        mode,
        callback
    ) {
        const database =
            await openDatabase();

        return new Promise(
            (resolve, reject) => {
                const currentTransaction =
                    database.transaction(
                        storeNames,
                        mode
                    );

                const stores =
                    Object.fromEntries(
                        storeNames.map(
                            name => [
                                name,
                                currentTransaction
                                    .objectStore(
                                        name
                                    )
                            ]
                        )
                    );

                let value;

                try {
                    value = callback(
                        stores,
                        currentTransaction
                    );
                } catch (error) {
                    reject(error);
                    return;
                }

                currentTransaction
                    .oncomplete =
                        () => resolve(value);

                currentTransaction
                    .onerror =
                        () => reject(
                            currentTransaction.error
                        );

                currentTransaction
                    .onabort =
                        () => reject(
                            currentTransaction.error ||
                            new Error(
                                'הפעולה בוטלה'
                            )
                        );
            }
        );
    }

    function requestPromise(request) {
        return new Promise(
            (resolve, reject) => {
                request.onsuccess =
                    () => resolve(
                        request.result
                    );

                request.onerror =
                    () => reject(
                        request.error
                    );
            }
        );
    }

    async function getCategoryMeta(cid) {
        const database =
            await openDatabase();

        const currentTransaction =
            database.transaction(
                'meta',
                'readonly'
            );

        return requestPromise(
            currentTransaction
                .objectStore('meta')
                .get(cid)
        );
    }

    async function saveCategoryMeta(meta) {
        await transaction(
            ['meta'],
            'readwrite',
            ({ meta: store }) => {
                store.put(meta);
            }
        );
    }

    async function storeTopics(topics) {
        if (!topics.length) {
            return;
        }

        await transaction(
            ['topics'],
            'readwrite',
            ({ topics: store }) => {
                topics.forEach(topic => {
                    const displayType =
                        extractType(
                            topic.title
                        );

                    store.put({
                        ...topic,

                        type:
                            normalizeType(
                                displayType
                            ),

                        typeDisplay:
                            displayType
                    });
                });
            }
        );
    }

    async function clearCategory(cid) {
        const database =
            await openDatabase();

        await new Promise(
            (resolve, reject) => {
                const currentTransaction =
                    database.transaction(
                        [
                            'topics',
                            'meta'
                        ],
                        'readwrite'
                    );

                const topicStore =
                    currentTransaction
                        .objectStore(
                            'topics'
                        );

                const cursorRequest =
                    topicStore
                        .index('cid')
                        .openKeyCursor(
                            IDBKeyRange.only(
                                cid
                            )
                        );

                cursorRequest.onsuccess =
                    () => {
                        const cursor =
                            cursorRequest.result;

                        if (cursor) {
                            topicStore.delete(
                                cursor.primaryKey
                            );

                            cursor.continue();
                        }
                    };

                currentTransaction
                    .objectStore('meta')
                    .delete(cid);

                currentTransaction
                    .oncomplete =
                        resolve;

                currentTransaction
                    .onerror =
                        () => reject(
                            currentTransaction.error
                        );
            }
        );
    }

    async function clearEntireIndex() {
        await transaction(
            [
                'topics',
                'meta'
            ],
            'readwrite',
            stores => {
                stores.topics.clear();
                stores.meta.clear();
            }
        );
    }

    /* =========================================================
       בניית המאגר
       ========================================================= */

    async function runPool(
        items,
        worker,
        concurrency =
            APP.concurrency
    ) {
        let nextIndex = 0;

        const workers =
            Array.from(
                {
                    length:
                        Math.min(
                            concurrency,
                            items.length
                        )
                },

                async () => {
                    while (true) {
                        if (state.cancelled) {
                            throw new Error(
                                'הפעולה בוטלה'
                            );
                        }

                        const index =
                            nextIndex++;

                        if (
                            index >=
                            items.length
                        ) {
                            return;
                        }

                        await worker(
                            items[index],
                            index
                        );
                    }
                }
            );

        await Promise.all(workers);
    }

    async function ensureCategoryIndexed(
        category,
        onProgress,
        force = false
    ) {
        const meta =
            await getCategoryMeta(
                category.cid
            );

        const isFresh =
            meta?.complete &&
            Date.now() -
            meta.scannedAt <
            APP.cacheMs;

        if (isFresh && !force) {
            onProgress?.({
                category,
                page:
                    meta.pageCount,
                pages:
                    meta.pageCount,
                cached: true
            });

            return;
        }

        if (force) {
            await clearCategory(
                category.cid
            );
        }

        const first =
            await fetchCategoryPage(
                category,
                1
            );

        const pages =
            Math.max(
                1,
                first.pageCount
            );

        await storeTopics(
            first.topics
        );

        await saveCategoryMeta({
            cid: category.cid,
            complete: false,
            pageCount: pages,
            nextPage: 2,
            scannedAt: 0
        });

        onProgress?.({
            category,
            page: 1,
            pages
        });

        const remainingPages =
            Array.from(
                {
                    length:
                        Math.max(
                            0,
                            pages - 1
                        )
                },

                (_, index) =>
                    index + 2
            );

        let completedPages = 1;

        await runPool(
            remainingPages,

            async page => {
                const result =
                    await fetchCategoryPage(
                        category,
                        page
                    );

                await storeTopics(
                    result.topics
                );

                completedPages++;

                onProgress?.({
                    category,
                    page:
                        completedPages,
                    pages
                });
            }
        );

        await saveCategoryMeta({
            cid: category.cid,
            complete: true,
            pageCount: pages,
            nextPage: pages + 1,
            scannedAt: Date.now()
        });
    }

    async function ensureIndexed(
        categories,
        onProgress,
        force = false
    ) {
        for (
            let index = 0;
            index < categories.length;
            index++
        ) {
            if (state.cancelled) {
                throw new Error(
                    'הפעולה בוטלה'
                );
            }

            await ensureCategoryIndexed(
                categories[index],

                progress => {
                    onProgress?.({
                        ...progress,

                        categoryIndex:
                            index + 1,

                        categoryCount:
                            categories.length
                    });
                },

                force
            );
        }
    }

    async function listTypes(
        categoryIds
    ) {
        const database =
            await openDatabase();

        const types =
            new Map();

        for (const cid of categoryIds) {
            await new Promise(
                (resolve, reject) => {
                    const currentTransaction =
                        database.transaction(
                            'topics',
                            'readonly'
                        );

                    const request =
                        currentTransaction
                            .objectStore(
                                'topics'
                            )
                            .index('cid')
                            .openCursor(
                                IDBKeyRange.only(
                                    cid
                                )
                            );

                    request.onsuccess =
                        () => {
                            const cursor =
                                request.result;

                            if (!cursor) {
                                resolve();
                                return;
                            }

                            const value =
                                cursor.value;

                            if (
                                value.type &&
                                value.typeDisplay &&
                                !types.has(
                                    value.type
                                )
                            ) {
                                types.set(
                                    value.type,
                                    value.typeDisplay
                                );
                            }

                            cursor.continue();
                        };

                    request.onerror =
                        () => reject(
                            request.error
                        );
                }
            );
        }

        return [
            ...types.values()
        ].sort(
            (first, second) =>
                first.localeCompare(
                    second,
                    'he',
                    {
                        numeric: true
                    }
                )
        );
    }

    async function countEligibleTopics(
        cid,
        type,
        includePinned
    ) {
        const database =
            await openDatabase();

        return new Promise(
            (resolve, reject) => {
                const currentTransaction =
                    database.transaction(
                        'topics',
                        'readonly'
                    );

                const store =
                    currentTransaction
                        .objectStore(
                            'topics'
                        );

                const index =
                    type
                        ? store.index(
                            'cidType'
                        )
                        : store.index(
                            'cid'
                        );

                const range =
                    type
                        ? IDBKeyRange.only([
                            cid,
                            normalizeType(type)
                        ])
                        : IDBKeyRange.only(
                            cid
                        );

                let count = 0;

                const request =
                    index.openCursor(
                        range
                    );

                request.onsuccess =
                    () => {
                        const cursor =
                            request.result;

                        if (!cursor) {
                            resolve(count);
                            return;
                        }

                        const topic =
                            cursor.value;

                        if (
                            !topic.deleted &&
                            !topic.scheduled &&
                            (
                                includePinned ||
                                !topic.pinned
                            )
                        ) {
                            count++;
                        }

                        cursor.continue();
                    };

                request.onerror =
                    () => reject(
                        request.error
                    );
            }
        );
    }

    async function getRandomFromGroup(
        cid,
        type,
        includePinned
    ) {
        const database =
            await openDatabase();

        return new Promise(
            (resolve, reject) => {
                const currentTransaction =
                    database.transaction(
                        'topics',
                        'readonly'
                    );

                const store =
                    currentTransaction
                        .objectStore(
                            'topics'
                        );

                const index =
                    type
                        ? store.index(
                            'cidType'
                        )
                        : store.index(
                            'cid'
                        );

                const range =
                    type
                        ? IDBKeyRange.only([
                            cid,
                            normalizeType(type)
                        ])
                        : IDBKeyRange.only(
                            cid
                        );

                let selected = null;
                let eligibleCount = 0;

                const request =
                    index.openCursor(
                        range
                    );

                request.onsuccess =
                    () => {
                        const cursor =
                            request.result;

                        if (!cursor) {
                            resolve(selected);
                            return;
                        }

                        const topic =
                            cursor.value;

                        if (
                            !topic.deleted &&
                            !topic.scheduled &&
                            (
                                includePinned ||
                                !topic.pinned
                            )
                        ) {
                            eligibleCount++;

                            if (
                                Math.floor(
                                    Math.random() *
                                    eligibleCount
                                ) === 0
                            ) {
                                selected =
                                    topic;
                            }
                        }

                        cursor.continue();
                    };

                request.onerror =
                    () => reject(
                        request.error
                    );
            }
        );
    }

    async function chooseRandomTopic(
        categoryIds,
        type,
        includePinned
    ) {
        const groups = [];
        let total = 0;

        for (const cid of categoryIds) {
            const count =
                await countEligibleTopics(
                    cid,
                    type,
                    includePinned
                );

            if (count > 0) {
                groups.push({
                    cid,
                    count
                });

                total += count;
            }
        }

        if (!total) {
            return null;
        }

        let target =
            Math.floor(
                Math.random() *
                total
            );

        let selectedGroup =
            groups[0];

        for (const group of groups) {
            if (
                target <
                group.count
            ) {
                selectedGroup =
                    group;

                break;
            }

            target -=
                group.count;
        }

        return getRandomFromGroup(
            selectedGroup.cid,
            type,
            includePinned
        );
    }

    /* =========================================================
       הגדרות
       ========================================================= */

    function readSettings() {
        try {
            const value =
                JSON.parse(
                    localStorage.getItem(
                        APP.settingsKey
                    ) || '{}'
                );

            return {
                categoryCids:
                    Array.isArray(
                        value.categoryCids
                    )
                        ? value.categoryCids
                            .map(String)
                        : [],

                type:
                    String(
                        value.type || ''
                    ),

                includePinned:
                    Boolean(
                        value.includePinned
                    )
            };
        } catch (_) {
            return {
                categoryCids: [],
                type: '',
                includePinned: false
            };
        }
    }

    function writeSettings(
        settings
    ) {
        try {
            localStorage.setItem(
                APP.settingsKey,
                JSON.stringify(
                    settings
                )
            );
        } catch (_) {
            // השמירה אינה חובה.
        }
    }

    /* =========================================================
       החלון
       ========================================================= */

    function openModal() {
        closeModal();
        state.cancelled = false;

        const overlay =
            document.createElement(
                'div'
            );

        overlay.id =
            APP.overlayId;

        overlay.innerHTML = `
            <section
                id="${APP.modalId}"
                role="dialog"
                aria-modal="true"
                aria-labelledby="moishy-random-title"
            >
                <div class="m-header">
                    <h2
                        id="moishy-random-title"
                        class="m-title"
                    >
                        נושא אקראי מכל הזמנים
                    </h2>

                    <button
                        type="button"
                        class="m-close"
                        title="סגור"
                        aria-label="סגור"
                    >
                        ×
                    </button>
                </div>

                <div class="m-body">
                    <div class="m-field">
                        <span class="m-label">
                            באילו קטגוריות לחפש?
                        </span>

                        <div class="m-category-box">
                            <div class="m-help">
                                טוען קטגוריות...
                            </div>
                        </div>

                        <div class="m-help">
                            אפשר לבחור כמה קטגוריות.
                            בחירה ב״כל הקטגוריות״ מבטלת את הסינון.
                        </div>
                    </div>

                    <div class="m-field">
                        <label
                            class="m-label"
                            for="m-topic-type"
                        >
                            איזה סוג נושא?
                        </label>

                        <select
                            id="m-topic-type"
                            disabled
                        >
                            <option value="">
                                כל סוגי הנושאים
                            </option>
                        </select>

                        <div class="m-help">
                            הסוגים נלקחים מהכיתוב בתחילת כותרות הנושאים, ולא מתגיות.
                        </div>
                    </div>

                    <label class="m-check">
                        <input
                            id="m-pinned"
                            type="checkbox"
                        >

                        <span>
                            לכלול גם נושאים נעוצים
                        </span>
                    </label>

                    <div
                        class="m-status"
                        role="status"
                    ></div>

                    <div
                        class="m-progress"
                        aria-hidden="true"
                    >
                        <span></span>
                    </div>

                    <div class="m-actions">
                        <button
                            type="button"
                            class="m-btn m-primary m-search"
                            disabled
                        >
                            הבא לי נושא אקראי
                        </button>

                        <button
                            type="button"
                            class="m-btn m-secondary m-refresh"
                            disabled
                        >
                            רענן את המאגר
                        </button>

                        <button
                            type="button"
                            class="m-btn m-danger m-cancel-work"
                            hidden
                        >
                            עצור
                        </button>

                        <button
                            type="button"
                            class="m-btn m-secondary m-clear-index"
                        >
                            נקה את המאגר
                        </button>

                        <button
                            type="button"
                            class="m-btn m-secondary m-close2"
                        >
                            ביטול
                        </button>
                    </div>
                </div>
            </section>
        `;

        document.body.appendChild(
            overlay
        );

        const currentModal =
            overlay.querySelector(
                `#${APP.modalId}`
            );

        currentModal
            .querySelector('.m-close')
            .addEventListener(
                'click',
                closeModal
            );

        currentModal
            .querySelector('.m-close2')
            .addEventListener(
                'click',
                closeModal
            );

        currentModal
            .querySelector('.m-search')
            .addEventListener(
                'click',
                runSearch
            );

        currentModal
            .querySelector('.m-refresh')
            .addEventListener(
                'click',
                rebuildSelected
            );

        currentModal
            .querySelector('.m-clear-index')
            .addEventListener(
                'click',
                clearSavedIndex
            );

        currentModal
            .querySelector('.m-cancel-work')
            .addEventListener(
                'click',
                () => {
                    state.cancelled =
                        true;
                }
            );

        overlay.addEventListener(
            'click',
            event => {
                if (
                    event.target ===
                    overlay &&
                    !state.running
                ) {
                    closeModal();
                }
            }
        );

        document.addEventListener(
            'keydown',
            escapeHandler
        );

        populateModal()
            .catch(error => {
                showStatus(
                    `שגיאה: ${error.message}`,
                    true
                );
            });
    }

    function closeModal() {
        if (state.running) {
            state.cancelled = true;
        }

        document
            .getElementById(
                APP.overlayId
            )
            ?.remove();

        document.removeEventListener(
            'keydown',
            escapeHandler
        );

        state.running = false;
    }

    function escapeHandler(event) {
        if (
            event.key ===
            'Escape' &&
            !state.running
        ) {
            closeModal();
        }
    }

    function getModal() {
        return document.getElementById(
            APP.modalId
        );
    }

    function showStatus(
        text,
        isError = false
    ) {
        const element =
            getModal()?.querySelector(
                '.m-status'
            );

        if (!element) {
            return;
        }

        element.textContent =
            text;

        element.classList.add(
            'visible'
        );

        element.classList.toggle(
            'error',
            isError
        );
    }

    function clearStatus() {
        const element =
            getModal()?.querySelector(
                '.m-status'
            );

        if (!element) {
            return;
        }

        element.textContent = '';

        element.classList.remove(
            'visible',
            'error'
        );
    }

    function updateProgress(
        show,
        percentage = 0
    ) {
        const box =
            getModal()?.querySelector(
                '.m-progress'
            );

        if (!box) {
            return;
        }

        box.classList.toggle(
            'visible',
            show
        );

        const bar =
            box.querySelector(
                'span'
            );

        if (bar) {
            bar.style.width =
                `${Math.max(
                    0,
                    Math.min(
                        100,
                        percentage
                    )
                )}%`;
        }
    }

    function getSelectedCategoryIds() {
        const box =
            getModal()?.querySelector(
                '.m-category-box'
            );

        if (!box) {
            return [];
        }

        const all =
            box.querySelector(
                'input[data-all="1"]'
            );

        if (all?.checked) {
            return state.categories
                .map(
                    category =>
                        category.cid
                );
        }

        return [
            ...box.querySelectorAll(
                'input[data-cid]:checked'
            )
        ].map(
            input =>
                Number(
                    input.dataset.cid
                )
        );
    }

    function renderCategories(
        settings
    ) {
        const box =
            getModal().querySelector(
                '.m-category-box'
            );

        box.innerHTML = '';

        const allRow =
            document.createElement(
                'label'
            );

        allRow.className =
            'm-check';

        allRow.innerHTML = `
            <input
                type="checkbox"
                data-all="1"
            >

            <strong>
                כל הקטגוריות
            </strong>
        `;

        box.appendChild(
            allRow
        );

        const saved =
            new Set(
                settings.categoryCids
            );

        const allCheckbox =
            allRow.querySelector(
                'input'
            );

        allCheckbox.checked =
            saved.size === 0;

        state.categories.forEach(
            category => {
                const row =
                    document.createElement(
                        'label'
                    );

                row.className =
                    'm-check';

                row.innerHTML = `
                    <input
                        type="checkbox"
                        data-cid="${category.cid}"
                    >

                    <span></span>
                `;

                row.querySelector(
                    'span'
                ).textContent =
                    category.name;

                row.querySelector(
                    'input'
                ).checked =
                    saved.has(
                        String(
                            category.cid
                        )
                    );

                box.appendChild(
                    row
                );
            }
        );

        allCheckbox.addEventListener(
            'change',
            () => {
                if (
                    allCheckbox.checked
                ) {
                    box
                        .querySelectorAll(
                            'input[data-cid]'
                        )
                        .forEach(input => {
                            input.checked =
                                false;
                        });
                }

                refreshTypeList()
                    .catch(
                        console.error
                    );
            }
        );

        box
            .querySelectorAll(
                'input[data-cid]'
            )
            .forEach(input => {
                input.addEventListener(
                    'change',
                    () => {
                        if (input.checked) {
                            allCheckbox.checked =
                                false;
                        }

                        const someChecked = [
                            ...box.querySelectorAll(
                                'input[data-cid]'
                            )
                        ].some(
                            categoryInput =>
                                categoryInput
                                    .checked
                        );

                        if (!someChecked) {
                            allCheckbox.checked =
                                true;
                        }

                        refreshTypeList()
                            .catch(
                                console.error
                            );
                    }
                );
            });
    }

    async function populateModal() {
        const settings =
            readSettings();

        state.categories =
            await loadCategories();

        if (!getModal()) {
            return;
        }

        renderCategories(
            settings
        );

        getModal()
            .querySelector(
                '#m-pinned'
            )
            .checked =
                settings
                    .includePinned;

        getModal()
            .querySelector(
                '.m-search'
            )
            .disabled =
                false;

        getModal()
            .querySelector(
                '.m-refresh'
            )
            .disabled =
                false;

        await refreshTypeList(
            settings.type
        );
    }

    function setBusy(busy) {
        state.running = busy;

        const currentModal =
            getModal();

        if (!currentModal) {
            return;
        }

        currentModal
            .querySelectorAll(
                'select, input, ' +
                '.m-search, .m-refresh, ' +
                '.m-clear-index, ' +
                '.m-close2, .m-close'
            )
            .forEach(element => {
                element.disabled =
                    busy;
            });

        currentModal
            .querySelector(
                '.m-cancel-work'
            )
            .hidden =
                !busy;
    }

    async function indexSelected(
        force = false
    ) {
        const categoryIds =
            getSelectedCategoryIds();

        const categories =
            state.categories.filter(
                category =>
                    categoryIds.includes(
                        category.cid
                    )
            );

        if (!categories.length) {
            throw new Error(
                'לא נבחרה קטגוריה'
            );
        }

        await ensureIndexed(
            categories,

            progress => {
                const total =
                    Math.max(
                        1,
                        progress
                            .categoryCount
                    );

                const percentage =
                    (
                        (
                            progress
                                .categoryIndex -
                            1
                        ) +
                        progress.page /
                        Math.max(
                            1,
                            progress.pages
                        )
                    ) /
                    total *
                    100;

                updateProgress(
                    true,
                    percentage
                );

                showStatus(
                    progress.cached
                        ? `המאגר של „${progress.category.name}” כבר מעודכן.`
                        : (
                            `בונה מאגר מכל הזמנים...\n` +
                            `קטגוריה ${progress.categoryIndex} מתוך ${progress.categoryCount}: ${progress.category.name}\n` +
                            `עמוד ${progress.page} מתוך ${progress.pages}`
                        )
                );
            },

            force
        );

        return categoryIds;
    }

    async function refreshTypeList(
        preferred = ''
    ) {
        const select =
            getModal()?.querySelector(
                '#m-topic-type'
            );

        if (
            !select ||
            state.running
        ) {
            return;
        }

        const categoryIds =
            getSelectedCategoryIds();

        select.disabled =
            true;

        select.innerHTML = `
            <option value="">
                כל סוגי הנושאים
            </option>
        `;

        try {
            const types =
                await listTypes(
                    categoryIds
                );

            types.forEach(type => {
                const option =
                    document.createElement(
                        'option'
                    );

                option.value =
                    type;

                option.textContent =
                    type;

                select.appendChild(
                    option
                );
            });

            select.value = [
                ...select.options
            ].some(
                option =>
                    option.value ===
                    preferred
            )
                ? preferred
                : '';
        } finally {
            select.disabled =
                false;
        }
    }

    async function rebuildSelected() {
        if (state.running) {
            return;
        }

        state.cancelled = false;

        setBusy(true);
        updateProgress(
            true,
            0
        );

        try {
            await indexSelected(
                true
            );

            await refreshTypeList();

            showStatus(
                'המאגר עודכן בהצלחה מכל עמודי הקטגוריות שנבחרו.'
            );

            updateProgress(
                false
            );
        } catch (error) {
            showStatus(
                error.message ===
                    'הפעולה בוטלה'
                    ? 'הפעולה נעצרה.'
                    : `העדכון נכשל: ${error.message}`,
                true
            );
        } finally {
            setBusy(false);
            state.cancelled = false;
        }
    }

    async function clearSavedIndex() {
        if (state.running) {
            return;
        }

        const confirmed =
            window.confirm(
                'למחוק את המאגר המקומי של הנושאים? בפעם הבאה יהיה צורך לבנות אותו מחדש.'
            );

        if (!confirmed) {
            return;
        }

        setBusy(true);

        try {
            await clearEntireIndex();
            await refreshTypeList();

            showStatus(
                'המאגר המקומי נמחק בהצלחה.'
            );

            updateProgress(
                false
            );
        } catch (error) {
            showStatus(
                `מחיקת המאגר נכשלה: ${error.message}`,
                true
            );
        } finally {
            setBusy(false);
        }
    }

    async function runSearch() {
        if (state.running) {
            return;
        }

        state.cancelled = false;

        setBusy(true);
        updateProgress(
            true,
            0
        );

        clearStatus();

        try {
            const categoryIds =
                await indexSelected(
                    false
                );

            const type =
                getModal()
                    .querySelector(
                        '#m-topic-type'
                    )
                    .value;

            const includePinned =
                getModal()
                    .querySelector(
                        '#m-pinned'
                    )
                    .checked;

            writeSettings({
                categoryCids:
                    categoryIds.length ===
                    state.categories.length
                        ? []
                        : categoryIds
                            .map(String),

                type,
                includePinned
            });

            showStatus(
                type
                    ? `מגריל נושא מסוג „${type}” מכל הזמנים...`
                    : 'מגריל נושא מכל הזמנים...'
            );

            const topic =
                await chooseRandomTopic(
                    categoryIds,
                    type,
                    includePinned
                );

            if (!topic) {
                await refreshTypeList(
                    type
                );

                throw new Error(
                    type
                        ? `לא נמצא נושא מסוג „${type}” בקטגוריות שנבחרו.`
                        : 'לא נמצא נושא מתאים.'
                );
            }

            updateProgress(
                true,
                100
            );

            showStatus(
                `נמצא:\n${
                    topic.title ||
                    `נושא מספר ${topic.tid}`
                }`
            );

            setTimeout(
                () => {
                    location.href =
                        buildTopicUrl(
                            topic
                        );
                },
                300
            );
        } catch (error) {
            showStatus(
                error.message ===
                    'הפעולה בוטלה'
                    ? 'החיפוש נעצר.'
                    : `החיפוש נכשל: ${error.message}`,
                true
            );

            updateProgress(
                false
            );
        } finally {
            setBusy(false);
            state.cancelled = false;
        }
    }

    function buildTopicUrl(topic) {
        if (
            /^https?:\/\//i.test(
                topic.slug
            )
        ) {
            return topic.slug;
        }

        if (
            topic.slug.startsWith(
                '/topic/'
            )
        ) {
            return topic.slug;
        }

        if (
            topic.slug &&
            topic.slug.startsWith(
                `${topic.tid}/`
            )
        ) {
            return `/topic/${topic.slug}`;
        }

        if (topic.slug) {
            return `/topic/${topic.tid}/${topic.slug}`;
        }

        return `/topic/${topic.tid}`;
    }

    /* =========================================================
       ניווט דינמי
       ========================================================= */

    function navigationCheck() {
        if (
            location.pathname ===
            state.path
        ) {
            return;
        }

        state.path =
            location.pathname;

        hideShortcutTooltip();
        markActive();

        if (!state.running) {
            closeModal();
        }
    }

    /* =========================================================
       הפעלה
       ========================================================= */

    function initialize() {
        addStyles();
        getShortcutTooltip();

        /*
         * מסירים כפתורים ישנים לפני הוספת הגרסה המתוקנת.
         */
        removeExistingShortcuts();

        let tries = 0;

        const timer =
            setInterval(
                () => {
                    tries++;

                    if (
                        insertShortcuts() ||
                        tries >= 40
                    ) {
                        clearInterval(
                            timer
                        );
                    }
                },
                250
            );

        const observer =
            new MutationObserver(() => {
                if (
                    !document.querySelector(
                        `.${APP.itemClass}`
                    )
                ) {
                    insertShortcuts();
                }

                navigationCheck();
            });

        observer.observe(
            document.body,
            {
                childList: true,
                subtree: true
            }
        );

        window.addEventListener(
            'popstate',
            navigationCheck
        );

        window.addEventListener(
            'resize',
            hideShortcutTooltip
        );

        document.addEventListener(
            'scroll',
            hideShortcutTooltip,
            true
        );

        document.addEventListener(
            'click',
            () => {
                hideShortcutTooltip();

                setTimeout(
                    navigationCheck,
                    100
                );

                setTimeout(
                    navigationCheck,
                    500
                );
            },
            true
        );
    }

    if (
        document.readyState ===
        'loading'
    ) {
        document.addEventListener(
            'DOMContentLoaded',
            initialize,
            {
                once: true
            }
        );
    } else {
        initialize();
    }
})();
/* SOURCE_END: קיצורי דרך ונושא אקראי חכם.txt */
        }
    },

    {
        id: "ellipsis-font-fix",
        name: "NodeBB Cards - Fix Ellipsis",
        description: "",
        category: "ממשק ותצוגה",
        originalFile: "מראה שלוש נקודות.txt",
        version: "1.1",
        author: "",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "671751d12cc105f30ef65b79df8d786270f3aa364f142193f1418029229ca848",
        originalBodySha256: "a10d3eb45d991feeb59871a6985cbba7e99bf28f05f31950dc11bc62216758ee",
        embeddedBodySha256: "a10d3eb45d991feeb59871a6985cbba7e99bf28f05f31950dc11bc62216758ee",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: מראה שלוש נקודות.txt */
(function () {
    'use strict';

    function fix() {
        document.querySelectorAll('.fa-ellipsis-v').forEach(el => {
            el.style.fontFamily = '"Font Awesome 7 Free"';
            el.style.fontWeight = '900';
        });
    }

    // מיד כשהדף נטען
    fix();

    // כל פעם שנוסף תוכן חדש (הפופאפ)
    new MutationObserver(fix).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    // ליתר ביטחון
    setInterval(fix, 500);
})();
/* SOURCE_END: מראה שלוש נקודות.txt */
        }
    },

    {
        id: "marked-users-display-fixes",
        name: "תיקוני תצוגה למשתמשים מסומנים | מתמחים טופ",
        description: "בועת הערה קומפקטית ואייקון מרכז ניהול בסרגל השמאלי",
        category: "משתמשים ופרופיל",
        originalFile: "תיקוני תצוגה למשתמשים מסומנים.txt",
        version: "1.3.0",
        author: "Moishy",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*","https://www.mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "ed0b374c9da5048c8a6182ebaca45d43eef948d747a893a14028da3fb70d0c51",
        originalBodySha256: "35986f7420fe89d41b1afb07f22661c8b1f8014ed0b943a96034d39f8bd91308",
        embeddedBodySha256: "35986f7420fe89d41b1afb07f22661c8b1f8014ed0b943a96034d39f8bd91308",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: תיקוני תצוגה למשתמשים מסומנים.txt */
(function () {
    'use strict';

    const SCRIPT_ID = 'mtpun-display-fixes';
    const SIDEBAR_ITEM_ID = 'mtpun-sidebar-manager-item';

    let observer = null;
    let scheduled = false;

    /* =========================================================
       עיצוב
       ========================================================= */

    function addStyles() {
        document
            .querySelectorAll(
                `#${SCRIPT_ID}-styles`
            )
            .forEach(element => element.remove());

        const style = document.createElement('style');
        style.id = `${SCRIPT_ID}-styles`;

        style.textContent = `
            /* =====================================================
               בועת ההערה — קומפקטית לפי כמות המלל
               ===================================================== */

            .mtpun-note-tooltip {
                display: none;
                width: fit-content !important;
                min-width: 0 !important;
                max-width: min(340px, calc(100vw - 24px)) !important;

                height: fit-content !important;
                min-height: 0 !important;
                max-height: min(380px, calc(100vh - 30px)) !important;

                padding: 9px 11px !important;
                margin: 0 !important;

                overflow-x: hidden !important;
                overflow-y: auto !important;

                /*
                 * חשוב: אין pre-wrap על הבועה עצמה,
                 * כדי שרווחים בקוד ה-HTML לא יוצגו.
                 */
                white-space: normal !important;

                word-break: normal !important;
                overflow-wrap: anywhere !important;

                box-sizing: border-box !important;
                line-height: 1.45 !important;
            }

            .mtpun-note-tooltip-title {
                display: block !important;
                width: fit-content !important;
                min-width: 0 !important;
                max-width: 100% !important;

                margin: 0 0 7px !important;
                padding: 0 0 6px !important;

                white-space: normal !important;
                line-height: 1.35 !important;
            }

            .mtpun-note-tooltip > div:last-child {
                display: block !important;
                width: fit-content !important;
                min-width: 0 !important;
                max-width: 100% !important;

                height: auto !important;
                min-height: 0 !important;

                margin: 0 !important;
                padding: 0 !important;

                /*
                 * רק תוכן ההערה שומר ירידות שורה שהמשתמש כתב.
                 */
                white-space: pre-wrap !important;
                line-height: 1.5 !important;
                word-break: normal !important;
                overflow-wrap: anywhere !important;
            }

            /*
             * הסרת טקסטים ריקים ורווחים שיכולים להיווצר
             * בין רכיבי הבועה.
             */
            .mtpun-note-tooltip:empty {
                display: none !important;
            }

            /* =====================================================
               כפתור מרכז הניהול — אייקון בלבד בסרגל השמאלי
               ===================================================== */

            #${SIDEBAR_ITEM_ID} {
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                width: 100% !important;
                min-height: 42px !important;
                margin: 0 !important;
                padding: 0 !important;
            }

            #${SIDEBAR_ITEM_ID} .mtpun-floating-button {
                position: relative !important;
                inset: auto !important;

                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;

                width: 40px !important;
                height: 40px !important;
                min-width: 40px !important;
                min-height: 40px !important;

                padding: 0 !important;
                margin: 0 auto !important;

                color: inherit !important;
                background: transparent !important;
                border: 0 !important;
                border-radius: 10px !important;
                box-shadow: none !important;

                font-size: inherit !important;
                line-height: 1 !important;
                transform: none !important;
            }

            #${SIDEBAR_ITEM_ID} .mtpun-floating-button:hover {
                background:
                    var(
                        --bs-tertiary-bg,
                        rgba(0, 0, 0, 0.055)
                    ) !important;

                box-shadow: none !important;
                transform: none !important;
            }

            #${SIDEBAR_ITEM_ID} .mtpun-floating-button:active {
                transform: scale(0.96) !important;
            }

            #${SIDEBAR_ITEM_ID} .mtpun-sidebar-icon-wrapper {
                position: relative;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 22px;
                height: 22px;
            }

            #${SIDEBAR_ITEM_ID} .mtpun-sidebar-icon {
                color: inherit;  /* ניטרלי כמו שאר כפתורי-הניווט, לא primary צבוע */
                font-size: 16px;
                line-height: 1;
            }

            #${SIDEBAR_ITEM_ID} .mtpun-sidebar-count {
                position: absolute;
                top: -8px;
                right: -10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                min-width: 17px;
                height: 17px;
                padding: 0 4px;

                color: #fff;
                background: var(--bs-primary, #0d6efd);
                border: 2px solid var(--bs-body-bg, #fff);
                border-radius: 999px;

                font-size: 9px;
                font-weight: 700;
                line-height: 1;
                box-sizing: border-box;
            }

            body > .mtpun-floating-button {
                visibility: hidden !important;
            }

            #${SIDEBAR_ITEM_ID} .mtpun-floating-button {
                visibility: visible !important;
            }

            @media (max-width: 991.98px) {
                body > .mtpun-floating-button {
                    visibility: visible !important;
                }
            }
        `;

        document.head.appendChild(style);
    }

    /* =========================================================
       ניקוי המלל והבועה
       ========================================================= */

    function cleanText(value) {
        return String(value || '')
            .replace(/\r\n?/g, '\n')
            .replace(/[ \t]+\n/g, '\n')
            .replace(/\n[ \t]+/g, '\n')
            .replace(/[ \t]{2,}/g, ' ')
            .replace(/\n{3,}/g, '\n\n')
            .trim();
    }

    function cleanStoredTooltipData(root = document) {
        const elements = [];

        if (
            root instanceof Element &&
            root.matches('[data-mtpun-tooltip]')
        ) {
            elements.push(root);
        }

        if (
            root instanceof Document ||
            root instanceof Element
        ) {
            elements.push(
                ...root.querySelectorAll(
                    '[data-mtpun-tooltip]'
                )
            );
        }

        for (const element of elements) {
            if (element.dataset.mtpunTooltip) {
                element.dataset.mtpunTooltip =
                    cleanText(
                        element.dataset.mtpunTooltip
                    );
            }

            if (element.dataset.mtpunTooltipTitle) {
                element.dataset.mtpunTooltipTitle =
                    cleanText(
                        element.dataset.mtpunTooltipTitle
                    );
            }
        }
    }

    function cleanVisibleTooltips() {
        document
            .querySelectorAll('.mtpun-note-tooltip')
            .forEach(tooltip => {
                /*
                 * מסירים צמתי טקסט לבנים שנוצרו
                 * מההזחות בקוד ה-HTML.
                 */
                Array.from(tooltip.childNodes)
                    .filter(node => {
                        return (
                            node.nodeType === Node.TEXT_NODE &&
                            !node.textContent.trim()
                        );
                    })
                    .forEach(node => node.remove());

                const title =
                    tooltip.querySelector(
                        '.mtpun-note-tooltip-title'
                    );

                if (title) {
                    title.textContent =
                        cleanText(title.textContent);
                }

                const content =
                    tooltip.querySelector(
                        ':scope > div:last-child'
                    );

                if (content) {
                    content.textContent =
                        cleanText(content.textContent);
                }

                /*
                 * מנקה מידות ישנות שחושבו לפני ניקוי המלל.
                 */
                tooltip.style.width = 'fit-content';
                tooltip.style.height = 'auto';
                tooltip.style.minWidth = '0';
                tooltip.style.minHeight = '0';
            });
    }

    document.addEventListener(
        'pointerover',
        event => {
            if (!(event.target instanceof Element)) {
                return;
            }

            const tag =
                event.target.closest(
                    '[data-mtpun-tooltip]'
                );

            if (!tag) {
                return;
            }

            if (tag.dataset.mtpunTooltip) {
                tag.dataset.mtpunTooltip =
                    cleanText(
                        tag.dataset.mtpunTooltip
                    );
            }

            if (tag.dataset.mtpunTooltipTitle) {
                tag.dataset.mtpunTooltipTitle =
                    cleanText(
                        tag.dataset.mtpunTooltipTitle
                    );
            }

            requestAnimationFrame(
                cleanVisibleTooltips
            );

            setTimeout(
                cleanVisibleTooltips,
                10
            );

            setTimeout(
                cleanVisibleTooltips,
                60
            );
        },
        true
    );

    /* =========================================================
       הסרגל השמאלי
       ========================================================= */

    function getVisualLeftSidebar() {
        return (
            document.querySelector(
                'nav[component="sidebar/right"]'
            ) ||
            document.querySelector(
                '.sidebar-right'
            )
        );
    }

    function getSidebarList() {
        const sidebar = getVisualLeftSidebar();

        if (!sidebar) {
            return null;
        }

        return (
            sidebar.querySelector(
                'ul.list-unstyled'
            ) ||
            sidebar.querySelector('ul') ||
            sidebar
        );
    }

    function getManagerButton() {
        return document.querySelector(
            `#${SIDEBAR_ITEM_ID} .mtpun-floating-button, ` +
            'body > .mtpun-floating-button'
        );
    }

    function getSavedUsersCount(button) {
        const countElement =
            button?.querySelector(
                '.mtpun-floating-count, ' +
                '.mtpun-sidebar-count'
            );

        const count = Number(
            countElement?.textContent?.trim()
        );

        return Number.isFinite(count)
            ? count
            : 0;
    }

    function formatManagerButton(button) {
        const count =
            getSavedUsersCount(button);

        button.className =
            'mtpun-floating-button';

        button.title =
            'המשתמשים המסומנים שלי';

        button.setAttribute(
            'aria-label',
            'המשתמשים המסומנים שלי'
        );

        // ה-badge של המונה מופיע רק כשיש מסומנים בפועל (count>0).
        // כשאין - רק האייקון, אחרת "0" נראה כמו התראה שלא נקראה.
        button.innerHTML = `
            <span class="mtpun-sidebar-icon-wrapper">
                <i
                    class="fa fa-fw fa-note-sticky mtpun-sidebar-icon"
                    aria-hidden="true"
                ></i>
                ${count > 0 ? `<span class="mtpun-sidebar-count">${count}</span>` : ''}
            </span>
        `;
    }

    function mountManagerInLeftSidebar() {
        if (
            window.matchMedia(
                '(max-width: 991.98px)'
            ).matches
        ) {
            document
                .getElementById(
                    SIDEBAR_ITEM_ID
                )
                ?.remove();

            return;
        }

        const sidebarList = getSidebarList();
        const button = getManagerButton();

        if (!sidebarList || !button) {
            return;
        }

        const existingItem =
            document.getElementById(
                SIDEBAR_ITEM_ID
            );

        if (
            existingItem &&
            existingItem.contains(button)
        ) {
            return;
        }

        existingItem?.remove();

        const item =
            document.createElement('li');

        item.id = SIDEBAR_ITEM_ID;
        item.className = 'nav-item';
        item.dataset.mtpunFixOwned = 'true';

        formatManagerButton(button);
        item.appendChild(button);
        sidebarList.appendChild(item);
    }

    /* =========================================================
       מעקב דינמי
       ========================================================= */

    function scheduleRefresh() {
        if (scheduled) {
            return;
        }

        scheduled = true;

        requestAnimationFrame(() => {
            scheduled = false;

            cleanStoredTooltipData(document);
            cleanVisibleTooltips();
            mountManagerInLeftSidebar();
        });
    }

    function observePage() {
        observer?.disconnect();

        observer = new MutationObserver(
            mutations => {
                const relevant =
                    mutations.some(mutation => {
                        return (
                            mutation.addedNodes.length ||
                            mutation.removedNodes.length
                        );
                    });

                if (relevant) {
                    scheduleRefresh();
                }
            }
        );

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    window.addEventListener(
        'resize',
        scheduleRefresh
    );

    /* =========================================================
       הפעלה
       ========================================================= */

    function initialize() {
        if (!document.body) {
            setTimeout(initialize, 50);
            return;
        }

        addStyles();
        cleanStoredTooltipData(document);
        cleanVisibleTooltips();
        mountManagerInLeftSidebar();
        observePage();

        setTimeout(scheduleRefresh, 150);
        setTimeout(scheduleRefresh, 600);
        setTimeout(scheduleRefresh, 1300);
    }

    if (document.readyState === 'loading') {
        document.addEventListener(
            'DOMContentLoaded',
            initialize,
            { once: true }
        );
    } else {
        initialize();
    }
})();
/* SOURCE_END: תיקוני תצוגה למשתמשים מסומנים.txt */
        }
    },

    {
        id: "whatsapp-chat-style",
        name: "עיצוב צאט מתמחים.טופ",
        description: "עיצוב משופר לצ'אט במתמחים טופ, כולל תמיכה בהודעות קוליות",
        category: "צ'אט",
        originalFile: "עיצוב צאט מתמחים.טופ.txt",
        version: "1.3",
        author: "צדיק וטוב לו וההודי של Gemini",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "591af390ff49d4ed04634e8118fc011915065524bea44504af980fa86e8146d4",
        originalBodySha256: "4e7fb43aa1faf98b2052dd52b0ca5e5d221a2ac9d99aa27c86f2e36f4ab742f6",
        embeddedBodySha256: "4e7fb43aa1faf98b2052dd52b0ca5e5d221a2ac9d99aa27c86f2e36f4ab742f6",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: עיצוב צאט מתמחים.טופ.txt */
(function () {
    'use strict';

    const style = document.createElement('style');

    style.textContent = `
        /*
         * רקע הצ'אט בצבע חום־בז' עם תבנית.
         * מתאים לחלונית הקטנה ולעמוד הצ'אטים המלא.
         */
        .modal-content,
        [component="chat/main-wrapper"] {
            background-color: #efeae2 !important;
            background-image: url("https://raw.githubusercontent.com/Tzadikvtovlo/New-style-for-chat-in-mitmachim.top/refs/heads/main/background.png") !important;
            background-repeat: repeat !important;
        }

        /*
         * עיצוב בסיסי לכל הודעה.
         */
        [component="chat/message"] {
            margin-top: 9px !important;
            padding-right: 17px !important;
            max-width: min(82%, 620px) !important;
            box-sizing: border-box !important;
        }

        [component="chat/message"][data-break="false"] {
            padding-top: 13px !important;
        }

        /*
         * הודעות נכנסות.
         */
        [data-self="0"][component="chat/message"] {
            width: fit-content;
            max-width: min(82%, 620px) !important;

            margin-right: 0 !important;
            margin-left: auto !important;

            padding-right: 21px !important;

            border-radius: 20px 20px 0 20px !important;

            background-color: #ffffff !important;

            box-shadow:
                0 1px 2px rgba(0, 0, 0, 0.15) !important;
        }

        /*
         * הודעות יוצאות.
         */
        [data-self="1"][component="chat/message"] {
            width: fit-content;
            max-width: min(82%, 620px) !important;

            margin-right: auto !important;
            margin-left: 0 !important;

            padding-left: 21px !important;

            border-radius: 20px 20px 20px 0 !important;

            background-color: #d9fdd3 !important;

            box-shadow:
                0 1px 2px rgba(0, 0, 0, 0.15) !important;
        }

        /*
         * ריווח פנימי של הודעות.
         */
        .chat-message.mx-2.pe-2.clear {
            margin-bottom: 10px !important;
            padding: 15px 20px 8px 20px !important;
        }

        /*
         * תיקון מיוחד להודעות שמכילות נגן שמע.
         *
         * במקום fit-content, בועת ההודעה מקבלת רוחב
         * שמאפשר לנגן להופיע בצורה מלאה ולא דחוסה.
         */
        [component="chat/message"]:has(audio) {
            width: min(390px, calc(100vw - 75px)) !important;
            min-width: min(330px, calc(100vw - 75px)) !important;
            max-width: min(390px, calc(100vw - 75px)) !important;

            padding-left: 14px !important;
            padding-right: 14px !important;
            padding-bottom: 12px !important;
        }

        /*
         * גוף הודעה שמכילה שמע.
         */
        [component="chat/message"]:has(audio)
        [component="chat/message/body"] {
            display: block !important;
            width: 100% !important;
            min-width: 0 !important;
            max-width: none !important;
        }

        /*
         * נגן השמע עצמו.
         */
        [component="chat/message"] audio {
            display: block !important;

            width: 100% !important;
            min-width: 0 !important;
            max-width: 100% !important;
            height: 54px !important;

            margin: 7px 0 3px !important;

            box-sizing: border-box !important;
        }

        /*
         * אם הסקריפט של ההודעות הקוליות עוטף את הנגן
         * בתוך תיבה משלו, גם התיבה מקבלת רוחב מלא.
         */
        [component="chat/message"] .mt-voice-player,
        [component="chat/message"] [class*="mt-voice-player"] {
            display: flex !important;
            width: 100% !important;
            min-width: 0 !important;
            max-width: 100% !important;

            margin: 6px 0 !important;

            box-sizing: border-box !important;
        }

        [component="chat/message"] .mt-voice-player audio,
        [component="chat/message"] [class*="mt-voice-player"] audio {
            flex: 1 1 auto !important;
            width: auto !important;
            min-width: 0 !important;
        }

        /*
         * קישורים וקבצים בתוך הודעות לא יחרגו מהבועה.
         */
        [component="chat/message"] img,
        [component="chat/message"] video,
        [component="chat/message"] audio {
            max-width: 100% !important;
        }

        /*
         * התאמה למסכים צרים ולחלונית הצ'אט הקטנה.
         */
        @media (max-width: 600px) {
            [component="chat/message"] {
                max-width: 90% !important;
            }

            [component="chat/message"]:has(audio) {
                width: calc(100vw - 80px) !important;
                min-width: 260px !important;
                max-width: calc(100vw - 80px) !important;
            }
        }
    `;

    document.head.appendChild(style);

    /*
     * לחיצה כפולה על הודעה מוסיפה אותה כציטוט
     * לתיבת הכתיבה.
     */
    $(document).on(
        'dblclick',
        '[component="chat/message"], [component="chat/message/body"], .chat-message',
        function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            }

            const bodyEl = this.querySelector('[component="chat/message/body"]') || this;
            const messageText = (bodyEl.innerText || bodyEl.textContent || '').trim();

            if (!messageText) {
                return;
            }

            const lines = messageText.split('\n');
            const input = document.querySelector('[component="chat/input"]') || document.querySelector('.chat-input textarea');

            if (!input) {
                return;
            }

            const quoteBlock = `>${lines.join('\n>')}\n\n`;

            if (!input.value.includes(quoteBlock)) {
                input.value += quoteBlock;
                input.dispatchEvent(new Event('input', { bubbles: true }));
                input.dispatchEvent(new Event('change', { bubbles: true }));
            }

            input.focus();
        }
    );
})();
/* SOURCE_END: עיצוב צאט מתמחים.טופ.txt */
        }
    },

    {
        id: "thousand-posts-text-fix",
        name: "תיקון הודעת 1000 פוסטים – מתמחים טופ",
        description: "מחליף בהודעה הקופצת את הכיתוב 1000 תודות בכיתוב 1000 פוסטים",
        category: "ממשק ותצוגה",
        originalFile: "תיקון הודעת 1000 פוסטים.txt",
        version: "1.0.0",
        author: "Moishy",
        runAt: "document-start",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "a87ce83fa6fe76a0a670c9df36273dc1d58131913ab44b350b9bbf43ed72ddf3",
        originalBodySha256: "a28c489f1c56afbc7de8ae08e523d4439a93044aa7e535ebabd4404d108588b0",
        embeddedBodySha256: "a28c489f1c56afbc7de8ae08e523d4439a93044aa7e535ebabd4404d108588b0",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: תיקון הודעת 1000 פוסטים.txt */
(function () {
    'use strict';

    const replacements = [
        {
            from: /1[\s,.]?000\s*תודות/g,
            to: '1000 פוסטים'
        },
        {
            from: /אלף\s*תודות/g,
            to: 'אלף פוסטים'
        },
        {
            from: /1000\s*תודה/g,
            to: '1000 פוסטים'
        }
    ];

    function replaceText(text) {
        let result = text;

        for (const replacement of replacements) {
            result = result.replace(
                replacement.from,
                replacement.to
            );
        }

        return result;
    }

    function processTextNode(node) {
        if (!(node instanceof Text)) {
            return;
        }

        const originalText = node.nodeValue;

        if (!originalText) {
            return;
        }

        const newText = replaceText(originalText);

        if (newText !== originalText) {
            node.nodeValue = newText;
        }
    }

    function processElement(element) {
        if (!(element instanceof Element)) {
            return;
        }

        /*
         * תרגום טקסט גלוי בתוך ההודעה.
         */
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT
        );

        const textNodes = [];

        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        textNodes.forEach(processTextNode);

        /*
         * טיפול גם בטקסטים ששמורים במאפיינים.
         */
        const attributes = [
            'title',
            'aria-label',
            'data-title',
            'data-content'
        ];

        element
            .querySelectorAll('*')
            .forEach(child => {
                attributes.forEach(attribute => {
                    if (!child.hasAttribute(attribute)) {
                        return;
                    }

                    const originalValue =
                        child.getAttribute(attribute);

                    const newValue =
                        replaceText(originalValue);

                    if (newValue !== originalValue) {
                        child.setAttribute(
                            attribute,
                            newValue
                        );
                    }
                });
            });
    }

    function scan(root = document) {
        if (root instanceof Text) {
            processTextNode(root);
            return;
        }

        if (
            root instanceof Document ||
            root instanceof Element
        ) {
            processElement(root);
        }
    }

    function initialize() {
        scan(document);

        const observer = new MutationObserver(
            mutations => {
                for (const mutation of mutations) {
                    if (
                        mutation.type === 'characterData'
                    ) {
                        processTextNode(
                            mutation.target
                        );
                    }

                    mutation.addedNodes.forEach(node => {
                        if (
                            node.nodeType ===
                            Node.TEXT_NODE
                        ) {
                            processTextNode(node);
                        }

                        if (
                            node.nodeType ===
                            Node.ELEMENT_NODE
                        ) {
                            scan(node);
                        }
                    });
                }
            }
        );

        observer.observe(
            document.documentElement,
            {
                childList: true,
                subtree: true,
                characterData: true
            }
        );
    }

    if (document.readyState === 'loading') {
        document.addEventListener(
            'DOMContentLoaded',
            initialize,
            { once: true }
        );
    } else {
        initialize();
    }
})();
/* SOURCE_END: תיקון הודעת 1000 פוסטים.txt */
        }
    },

    {
        id: "nodebb-dashboard",
        name: "NodeBB Dashboard Integrated - FULL & SECURED",
        description: "מערכת ניהול פורומים: הזרקה לתפריט, דשבורד מרכז (תיקון Bootstrap + הגנת XSS מלאה)",
        category: "מעקב וניהול",
        originalFile: "מערכת ניהול פורומים.txt",
        version: "0.3.4",
        author: "Gemini 3 Pro Preview (Security Patch)",
        runAt: "document-idle",
        matches: ["*://*/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: ["nodebb_dashboard_sites_v03","nodebb_dashboard_ignored_v03"],
        sourceSha256: "06fa087204740bac025ec02227129105f0c923c81d18b82240804919430611e5",
        originalBodySha256: "68a60e16e74a7ce60f00aea51f6dfed20f71b949ee1f510ae9aabdbb0a5db676",
        embeddedBodySha256: "109cedc64bff4011dd937b1fd89dc18872fb4829a907904df808975e07d620c0",
        mergeChanges: ["נוסף fallback לזיהוי NodeBB מודרני רק כאשר בדיקת config/ajaxify/meta המקורית נכשלת."],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: מערכת ניהול פורומים.txt */
(function() {
    'use strict';
 
    // --- 0. פונקציות אבטחה (מניעת פריצות XSS) ---
    function esc(str) {
        if (!str) return '';
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
        return String(str).replace(/[&<>"']/g, m => map[m]);
    }
 
    function safeStripHTML(html) {
        if (!html) return "";
        try {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            return doc.body.textContent || "";
        } catch(e) { return ""; }
    }
 
    // --- 1. הגדרות ---
    const STORAGE_KEY_SITES = 'nodebb_dashboard_sites_v03';
    const STORAGE_KEY_IGNORED = 'nodebb_dashboard_ignored_v03';
    const DASHBOARD_HASH = '#nodebb-dashboard';
 
    const DEFAULT_SITES = [
        { name: 'מתמחים', url: 'https://mitmachim.top' }
    ];
 
    let currentUnreadTopics = [];
 
    // --- 2. ניהול נתונים ---
    function getSites() {
        const stored = GM_getValue(STORAGE_KEY_SITES);
        if (!stored) {
            saveSites(DEFAULT_SITES);
            return DEFAULT_SITES;
        }
        try { return JSON.parse(stored); } catch(e) { return DEFAULT_SITES; }
    }
    function saveSites(sites) { GM_setValue(STORAGE_KEY_SITES, JSON.stringify(sites)); }
    function getIgnored() { try { return JSON.parse(GM_getValue(STORAGE_KEY_IGNORED) || '[]'); } catch(e) { return []; } }
    function addToIgnored(url) {
        const list = getIgnored();
        if (!list.includes(url)) {
            list.push(url);
            GM_setValue(STORAGE_KEY_IGNORED, JSON.stringify(list));
        }
    }
 
    function isNodeBB() {
        try {
            const rawWin = pageWindow();
            const originalDetection =
                (rawWin.config && rawWin.ajaxify) ||
                document.querySelector('meta[name="generator"][content="NodeBB"]');

            if (originalDetection) return true;

            // MERGE FALLBACK: NodeBB מודרני אינו חושף תמיד config/ajaxify או meta generator.
            if (
                document.querySelector(
                    'script[src*="/assets/nodebb.min.js"], script[src*="/assets/nodebb.js"]'
                )
            ) return true;

            const body = document.body;
            const hasTemplate = body &&
                Array.from(body.classList).some(name => name.startsWith('template-'));
            const componentCount = document.querySelectorAll('[component*="/"]').length;

            return Boolean(hasTemplate && componentCount >= 10);
        } catch(e) { return false; }
    }
 
    function getSiteName() {
        try {
            const rawWin = pageWindow();
            if (rawWin.config && rawWin.config.siteTitle) {
                return rawWin.config.siteTitle;
            }
        } catch(e) {}
        const parts = document.title.split('|');
        if (parts.length > 1) return parts.pop().trim();
        return document.title.trim();
    }
 
    // --- 3. לוגיקה ראשית ---
    function init() {
        if (!isNodeBB()) return;
 
        if (window.location.hash === DASHBOARD_HASH) {
            injectDashboard();
        }
 
        window.addEventListener('hashchange', () => {
            if (window.location.hash === DASHBOARD_HASH) {
                location.reload();
            }
        });
 
        const currentUrl = window.location.origin;
        const sites = getSites();
        const isMySite = sites.some(s => s.url === currentUrl);
 
        if (isMySite) {
            ensureMenuButton();
        } else {
            const ignored = getIgnored();
            if (!ignored.includes(currentUrl) && window.location.hash !== DASHBOARD_HASH) {
                showDiscoveryPopup(currentUrl);
            }
        }
    }
 
    function ensureMenuButton() {
        setInterval(() => {
            if (document.getElementById('nodebb-dash-link')) return;
            const nav = document.querySelector('#main-nav') || document.querySelector('.navbar-nav');
            if (nav) {
                const li = document.createElement('li');
                li.className = 'nav-item';
                li.innerHTML = `
                    <a class="nav-link navigation-link" href="${DASHBOARD_HASH}" id="nodebb-dash-link" title="מרכז הפורומים" style="justify-content: center; text-align: center;">
                        <i class="fa fa-fw fa-cubes" style="background: linear-gradient(135deg, #0d6efd, #8b5cf6, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 2px 4px rgba(13,110,253,0.3)); font-size: 1.25rem;"></i>
                        <span class="visible-xs-inline">מרכז הפורומים</span>
                    </a>
                `;
                const ref = nav.querySelector('a[href="/unread"]');
                if (ref && ref.parentElement) ref.parentElement.after(li);
                else nav.appendChild(li);
            }
        }, 1500);
    }
 
    function showDiscoveryPopup(url) {
        if (document.getElementById('ndb-popup')) return;
        const rawTitle = getSiteName();
        const div = document.createElement('div');
        div.id = 'ndb-popup';
        div.style.cssText = `position:fixed; bottom:20px; right:20px; background:white; padding:15px; border:1px solid #ccc; box-shadow:0 5px 20px rgba(0,0,0,0.2); z-index:999999; direction:rtl; width:280px; border-radius:8px; font-family:sans-serif; text-align:right;`;
 
        div.innerHTML = `
            <div style="font-weight:bold; margin-bottom:10px;">זיהיתי פורום חדש!</div>
            <div style="font-size:13px; margin-bottom:10px;">להוסיף את <b>${esc(rawTitle)}</b> למרכז הפורומים?</div>
            <div style="display:flex; gap:10px;">
                <button id="p-yes" style="flex:1; background:#28a745; color:white; border:none; padding:5px; border-radius:4px; cursor:pointer;">כן</button>
                <button id="p-no" style="flex:1; background:#dc3545; color:white; border:none; padding:5px; border-radius:4px; cursor:pointer;">לא</button>
            </div>
        `;
        document.body.appendChild(div);
 
        document.getElementById('p-yes').onclick = () => {
            const sites = getSites();
            sites.push({ name: safeStripHTML(rawTitle).trim().slice(0,150), url: url });
            saveSites(sites);
            div.remove();
            location.reload();
        };
        document.getElementById('p-no').onclick = () => {
            addToIgnored(url);
            div.remove();
        };
    }
 
    function injectDashboard() {
        const contentDiv = document.getElementById('content');
        if (!contentDiv) {
            setTimeout(injectDashboard, 100);
            return;
        }
 
        document.title = "מרכז הפורומים";
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon'; link.rel = 'shortcut icon'; link.href = 'https://cdn-icons-png.flaticon.com/512/9966/9966469.png';
        document.head.appendChild(link);
 
        GM_addStyle(`
            @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&display=swap');
            #nbd-root { font-family: 'Assistant', sans-serif; font-size: 16px; direction: rtl; text-align: right; background: #fff; border-radius: 4px; padding: 15px; min-height: 80vh; width: 100%; }
            .nbd-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px solid #eee; padding-bottom:10px; }
            .nbd-topic { display: flex; align-items: center; padding: 10px; border-bottom: 1px solid #f0f0f0; transition: background 0.2s; }
            .nbd-topic:hover { background: #f9f9f9; }
            .nbd-auth { width: 50px; flex-shrink: 0; text-align: center; position: relative; margin-left: 15px; }
            .nbd-avatar { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; }
            .nbd-letter { width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px; }
            .nbd-icon { position: absolute; bottom: -2px; left: -2px; width: 18px; height: 18px; background: white; border-radius: 50%; border: 2px solid white; object-fit: contain; }
            .nbd-main { flex-grow: 1; min-width: 0; }
            .nbd-link { font-size: 18px; font-weight: 600; color: #333; text-decoration: none; display: block; margin-bottom: 4px; }
            .nbd-meta { font-size: 13px; color: #777; display: flex; gap: 8px; align-items: center; }
            .nbd-badge { background: #f0f0f0; padding: 2px 8px; border-radius: 12px; font-size: 13px; display: flex; align-items: center; gap: 5px; }
            .nbd-teaser { width: 300px; flex-shrink: 0; border-right: 1px solid #eee; padding-right: 15px; margin-right: 10px; display: flex; flex-direction: column; justify-content: center; }
            @media (max-width: 991px) { .nbd-teaser { display: none; } }
            .nbd-btn { padding: 5px 12px; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-left: 5px; }
            .nbd-bg-blue { background: #007bff; color: white; }
            .nbd-bg-gray { background: #eee; color: #333; }
            .nbd-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 10500; display: none; justify-content: center; align-items: center; }
            .nbd-modal-box { background: white; width: 500px; padding: 20px; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
        `);
 
        contentDiv.innerHTML = `
            <div id="nbd-root">
                <div class="nbd-header">
                    <div class="nbd-h-title">נושאים שלא נקראו (כל האתרים)</div>
                    <div>
                        <button class="nbd-btn nbd-bg-gray" id="dash-select-all">בחר הכל</button>
                        <button class="nbd-btn nbd-bg-blue" id="dash-mark-selected">סמן נבחרים כנקראו</button>
                        <button class="nbd-btn nbd-bg-gray" id="dash-mark-all">סמן הכל כנקרא</button>
                        <button class="nbd-btn nbd-bg-gray" id="dash-set-btn">הגדרות</button>
                        <button class="nbd-btn nbd-bg-blue" id="dash-ref-btn">רענן</button>
                    </div>
                </div>
                <div id="dash-list"></div>
            </div>
            <div id="dash-settings" class="nbd-modal">
                <div class="nbd-modal-box">
                    <h4>ניהול אתרים</h4>
                    <div id="dash-sites-ui" style="max-height:250px; overflow-y:auto; margin-bottom:15px; border:1px solid #eee; padding:5px;"></div>
                    <div style="display:flex; gap:5px;">
                        <input id="add-n" placeholder="שם" style="flex:1; padding:5px;">
                        <input id="add-u" placeholder="URL" style="flex:2; padding:5px; direction:ltr;">
                        <button id="add-b" class="nbd-btn nbd-bg-blue">הוסף</button>
                    </div>
                    <div style="margin-top:15px; text-align:left;"><button id="close-s" class="nbd-btn nbd-bg-gray">סגור</button></div>
                </div>
            </div>
        `;
 
        loadDashboardContent();
        document.getElementById('dash-ref-btn').onclick = loadDashboardContent;
        document.getElementById('dash-select-all').onclick = toggleSelectAll;
        document.getElementById('dash-mark-selected').onclick = markSelectedAsRead;
        document.getElementById('dash-mark-all').onclick = markAllVisibleAsRead;
        document.getElementById('dash-set-btn').onclick = openSettings;
        document.getElementById('close-s').onclick = () => document.getElementById('dash-settings').style.display = 'none';
        document.getElementById('add-b').onclick = addSiteFromDash;
    }
 
    async function loadDashboardContent() {
        const container = document.getElementById('dash-list');
        const sites = getSites();
        container.innerHTML = '<div style="text-align:center; padding:50px;">טוען...</div>';
 
        const results = await Promise.all(sites.map(s => fetchUnread(s)));
        const all = [].concat(...results).sort((a,b) => new Date(b.lastposttimeISO) - new Date(a.lastposttimeISO));
        currentUnreadTopics = all;
 
        if (all.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding:50px;">הכל נקרא!</div>';
            return;
        }
 
        container.innerHTML = '';
        all.forEach(t => {
            const author = t.user || {};
            const teaser = t.teaser;
            const tUser = teaser ? (teaser.user || t.user) : t.user;
            const domain = new URL(t.origin.url).hostname;
            const iconUrl = `https://icons.duckduckgo.com/ip3/${domain}.ico`;
 
            let authHtml = `<div class="nbd-letter" style="background:${esc(author['icon:bgColor']||'#666')}">${esc(author['icon:text']||'?')}</div>`;
            if (author.picture) authHtml = `<img class="nbd-avatar orb-fix" data-src="${fixUrl(author.picture, t.origin.url)}">`;
 
            let tImg = `<div style="width:18px; height:18px; border-radius:50%; background:${esc(tUser['icon:bgColor']||'#666')}; display:inline-block;"></div>`;
            if (tUser.picture) tImg = `<img class="nbd-t-avatar orb-fix" data-src="${fixUrl(tUser.picture, t.origin.url)}">`;
 
            const cleanTeaser = teaser ? safeStripHTML(teaser.content) : "אין תוכן";
 
            const row = document.createElement('div');
            row.className = 'nbd-topic';
            row.innerHTML = `
                <input type="checkbox" class="nbd-topic-check" data-tid="${esc(t.tid)}" data-origin="${esc(t.origin.url)}" style="margin-left:10px;">
                <div class="nbd-auth">
                    <a href="${t.origin.url}/user/${esc(author.userslug)}" target="_blank" style="text-decoration:none; display:inline-block; position:relative;">
                        ${authHtml}
                        <img class="nbd-icon orb-fix" data-src="${iconUrl}">
                    </a>
                </div>
                <div class="nbd-main">
                    <a href="${t.origin.url}/topic/${esc(t.slug)}" target="_blank" class="nbd-link">${esc(t.title)}</a>
                    <div class="nbd-meta">
                        <span class="nbd-badge"><img src="${iconUrl}" style="width:14px;"> ${esc(t.origin.name)} | ${esc(t.category.name)}</span>
                        <span><i class="fa fa-comment"></i> ${t.postcount}</span>
                    </div>
                </div>
                <div class="nbd-teaser">
                    <div class="nbd-t-meta">${tImg} <b>${esc(tUser.username)}</b> <span>• ${timeAgo(t.lastposttimeISO)}</span></div>
                    <div class="nbd-t-txt">${esc(cleanTeaser)}</div>
                </div>
            `;
            container.appendChild(row);
        });
        document.querySelectorAll('.orb-fix').forEach(img => loadSecureImage(img.getAttribute('data-src'), img));
    }
 
    function fetchUnread(site) {
        return new Promise(resolve => {
            GM_xmlhttpRequest({
                method: "GET",
                url: site.url.replace(/\/$/, "") + '/api/unread',
                onload: (res) => {
                    try {
                        const json = JSON.parse(res.responseText);
                        resolve((json.topics || []).map(t => ({ ...t, origin: site })));
                    } catch(e) { resolve([]); }
                },
                onerror: () => resolve([])
            });
        });
    }
 
    const csrfCache = {};
 
    function getCsrfToken(originUrl) {
        return new Promise(resolve => {
            const origin = originUrl.replace(/\/$/, "");
 
            if (csrfCache[origin]) {
                resolve(csrfCache[origin]);
                return;
            }
 
            GM_xmlhttpRequest({
                method: "GET",
                url: origin + "/api/config",
                withCredentials: true,
                anonymous: false,
                onload: res => {
                    try {
                        const json = JSON.parse(res.responseText);
                        const token = json.csrf_token || json.csrfToken || json.csrf;
 
                        if (token) {
                            csrfCache[origin] = token;
                            resolve(token);
                            return;
                        }
                    } catch(e) {}
 
                    resolve("");
                },
                onerror: () => resolve("")
            });
        });
    }
 
    async function markTopicAsRead(originUrl, tid) {
        const csrfToken = await getCsrfToken(originUrl);
 
        return new Promise(resolve => {
            GM_xmlhttpRequest({
                method: "PUT",
                url: originUrl.replace(/\/$/, "") + "/api/v3/topics/" + encodeURIComponent(tid) + "/read",
                headers: {
                    "Content-Type": "application/json",
                    "x-csrf-token": csrfToken
                },
                data: JSON.stringify({}),
                withCredentials: true,
                anonymous: false,
                onload: res => {
                    console.log('mark read response', originUrl, tid, res.status, res.responseText);
                    resolve(res.status >= 200 && res.status < 300);
                },
                onerror: err => {
                    console.error('mark read error', originUrl, tid, err);
                    resolve(false);
                }
            });
        });
    }
 
    async function markSelectedAsRead() {
        const checks = [...document.querySelectorAll('.nbd-topic-check:checked')];
 
        if (!checks.length) {
            alert('לא נבחרו נושאים');
            return;
        }
 
        await Promise.all(checks.map(ch =>
                                     markTopicAsRead(ch.dataset.origin, ch.dataset.tid)
                                    ));
 
        loadDashboardContent();
    }
 
    async function markAllVisibleAsRead() {
        if (!currentUnreadTopics.length) return;
 
        await Promise.all(currentUnreadTopics.map(t =>
                                                  markTopicAsRead(t.origin.url, t.tid)
                                                 ));
 
        loadDashboardContent();
    }
 
    function toggleSelectAll() {
        const checks = [...document.querySelectorAll('.nbd-topic-check')];
        const shouldCheck = checks.some(ch => !ch.checked);
        checks.forEach(ch => ch.checked = shouldCheck);
    }
 
    function openSettings() {
        const list = document.getElementById('dash-sites-ui');
        list.innerHTML = '';
        getSites().forEach((s, i) => {
            const div = document.createElement('div');
            div.style.cssText = "display:flex; justify-content:space-between; padding:5px; border-bottom:1px solid #eee;";
            div.innerHTML = `<div><b>${esc(s.name)}</b><br><small>${esc(s.url)}</small></div>`;
            const del = document.createElement('button');
            del.className = "nbd-btn nbd-bg-gray"; del.textContent = "X";
            del.onclick = () => { const sites = getSites(); sites.splice(i, 1); saveSites(sites); openSettings(); };
            div.appendChild(del);
            list.appendChild(div);
        });
        document.getElementById('dash-settings').style.display = 'flex';
    }
 
    function addSiteFromDash() {
        const n = document.getElementById('add-n').value;
        const u = document.getElementById('add-u').value.trim();
        if (!u) return;
        const sites = getSites();
        sites.push({ name: n||'אתר', url: u.startsWith('http') ? u : 'https://' + u });
        saveSites(sites);
        openSettings();
        document.getElementById('add-n').value=''; document.getElementById('add-u').value='';
    }
 
    function fixUrl(url, base) {
        if (!url || url.startsWith('http')) return url;
        return base + (url.startsWith('/') ? '' : '/') + url;
    }
 
    function loadSecureImage(url, img) {
        if(!url) return;
        GM_xmlhttpRequest({
            method: "GET", url: url, responseType: "blob",
            onload: (res) => {
                if(res.status===200) {
                    const reader = new FileReader();
                    reader.onloadend = () => { img.src = reader.result; };
                    reader.readAsDataURL(res.response);
                }
            }
        });
    }
 
    function timeAgo(d) {
        const diff = (new Date() - new Date(d)) / 1000;
        if(diff<60) return 'עכשיו';
        if(diff<3600) return Math.floor(diff/60) + ' דק\'';
        if(diff<86400) return Math.floor(diff/3600) + ' שע\'';
        return Math.floor(diff/86400) + ' ימים';
    }
 
    init();
})();

/* SOURCE_END: מערכת ניהול פורומים.txt */
        }
    },

    {
        id: "chat-formatting-window",
        name: "NodeBB Chat Formatter - Pro (V2.4 - Multi Site)",
        description: "הוספת סרגל כפתורי עיצוב לחלון הצ'אט בפורומי NodeBB -  עובד בכמה אתרים",
        category: "צ'אט",
        originalFile: "עיצוב לחלון הצ'אט.txt",
        version: "2.4",
        author: "טופ שבמתמחים",
        runAt: "document-idle",
        matches: ["*://*.mitmachim.top/*","*://mitmachim.top/*","*://bnebrak.com/*","*://otzaria.org/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "5db2a5dde7555fb8d45ea8bc9890384d9764bc74daab2dbb30decd1046ca42bc",
        originalBodySha256: "cf046544278e678a44e54647cc1ef7c4e79c4ff11abee6793adc754faaa947de",
        embeddedBodySha256: "cf046544278e678a44e54647cc1ef7c4e79c4ff11abee6793adc754faaa947de",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: עיצוב לחלון הצ'אט.txt */
(function() {
    'use strict';

    const buttonsConfig = [
        { id: 'bold',       icon: 'fa-bold',       prefix: '**',    suffix: '**',   defaultText: 'מודגש',        title: 'מודגש' },
        { id: 'italic',     icon: 'fa-italic',     prefix: '*',     suffix: '*',    defaultText: 'נטוי',         title: 'נטוי' },
        { id: 'code_block', icon: 'fa-code',       prefix: '```\n', suffix: '\n```',defaultText: 'הכנס קוד כאן', title: 'בלוק קוד' },
        { id: 'link',       icon: 'fa-link',       prefix: '[',     suffix: ']',    defaultText: 'טקסט קישור',   title: 'קישור',  isLink: true },
        { id: 'image',      icon: 'fa-image',      prefix: '![',    suffix: ']',    defaultText: 'תיאור תמונה',  title: 'תמונה',  isLink: true },
        { id: 'list',       icon: 'fa-list',       prefix: '• ',    suffix: '',     defaultText: 'פריט רשימה',   title: 'רשימה',  isList: true },
        { id: 'quote',      icon: 'fa-quote-left', prefix: '> ',    suffix: '',     defaultText: 'ציטוט',        title: 'ציטוט',  isQuote: true },
        { id: 'center',     icon: 'fa-align-center',prefix: '|-',   suffix: '-|',   defaultText: 'מרכוז',        title: 'מרכוז' },
        { id: 'spoiler',    icon: 'fa-eye-slash',  prefix: '||',    suffix: '||',   defaultText: 'ספויילר',      title: 'ספוילר' }
    ];

    // placeholder מוגדר שניתן לסמן מיד בהדבקה
    const URL_PLACEHOLDER = 'כתובת_כאן';

    function insertFormatting(input, config) {
        const start = input.selectionStart;
        const end   = input.selectionEnd;
        const selectedText = input.value.substring(start, end);
        const hadSelection = selectedText.length > 0;

        let innerText    = selectedText || config.defaultText;
        let formattedText = '';

        // אחרי ההכנסה — מה לסמן?
        // selectStart/selectEnd יחסי לתחילת formattedText
        let selectStart = null;
        let selectEnd   = null;

        if (config.isLink) {
            // [טקסט קישור](כתובת_כאן)
            formattedText = config.prefix + innerText + '](' + URL_PLACEHOLDER + ')';

            // תמיד סמן את כתובת_כאן — בין אם היה טקסט מסומן מראש ובין אם לא
            const urlOffset = config.prefix.length + innerText.length + 2; // אחרי "]("
            selectStart = start + urlOffset;
            selectEnd   = selectStart + URL_PLACEHOLDER.length;

        } else if (config.isList) {
            if (selectedText) {
                const lines = selectedText.split('\n');
                formattedText = lines.map(line => '• ' + line).join('\n');
            } else {
                formattedText = '• ' + innerText;
                selectStart = start + 2; // אחרי "• "
                selectEnd   = selectStart + innerText.length;
            }

        } else if (config.isQuote) {
            if (selectedText) {
                const lines = selectedText.split('\n');
                formattedText = lines.map(line => '> ' + line).join('\n');
            } else {
                formattedText = '> ' + innerText;
                selectStart = start + 2; // אחרי "> "
                selectEnd   = selectStart + innerText.length;
            }

        } else {
            formattedText = config.prefix + innerText + config.suffix;

            if (!hadSelection) {
                // סמן את ה-defaultText בתוך הפורמט
                selectStart = start + config.prefix.length;
                selectEnd   = selectStart + innerText.length;
            }
            // אם היה selectedText — לא צריך לסמן שוב, הסמן נשאר בסוף
        }

        // הכנסה
        input.setRangeText(formattedText, start, end, 'end');

        // סימון הפלייסהולדר / defaultText
        if (selectStart !== null) {
            input.setSelectionRange(selectStart, selectEnd);
        }

        input.focus();
        input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    // ─── Floating quote button ───────────────────────────────────────────────

    function addQuoteButtonToSelection() {
        const selection  = window.getSelection();
        const selectedText = selection.toString().trim();

        if (!selectedText || selectedText.length < 3) {
            const existingBtn = document.getElementById('floating-quote-btn');
            if (existingBtn) existingBtn.remove();
            return;
        }

        const chatTextarea = document.querySelector('textarea[component="chat/input"]');
        if (!chatTextarea) {
            const existingBtn = document.getElementById('floating-quote-btn');
            if (existingBtn) existingBtn.remove();
            return;
        }

        const range = selection.getRangeAt(0);
        const selectedElement = range.commonAncestorContainer.parentElement;

        if (selectedElement.closest('textarea') || selectedElement.closest('.chat-input')) {
            const existingBtn = document.getElementById('floating-quote-btn');
            if (existingBtn) existingBtn.remove();
            return;
        }

        let quoteBtn = document.getElementById('floating-quote-btn');
        if (!quoteBtn) {
            quoteBtn = document.createElement('button');
            quoteBtn.id = 'floating-quote-btn';
            quoteBtn.innerHTML = '<i class="fa fa-quote-left"></i> ציטוט';
            quoteBtn.style.cssText = `
                position: fixed;
                background: #007bff;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 4px;
                cursor: pointer;
                z-index: 10000;
                font-size: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                transition: all 0.2s;
                font-family: Arial, sans-serif;
            `;

            quoteBtn.addEventListener('mouseover', () => { quoteBtn.style.background = '#0056b3'; });
            quoteBtn.addEventListener('mouseout',  () => { quoteBtn.style.background = '#007bff'; });

            quoteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const textarea = document.querySelector('textarea[component="chat/input"]');
                if (textarea) {
                    const currentValue = textarea.value;
                    const lines = selectedText.split('\n');
                    const quotedText = lines.map(line => '> ' + line).join('\n');
                    textarea.value = currentValue + (currentValue ? '\n' : '') + quotedText;
                    textarea.focus();
                    textarea.dispatchEvent(new Event('input', { bubbles: true }));
                    quoteBtn.remove();
                    window.getSelection().removeAllRanges();
                }
            });

            document.body.appendChild(quoteBtn);
        }

        const rect = range.getBoundingClientRect();
        quoteBtn.style.top  = (rect.bottom + 10) + 'px';
        quoteBtn.style.left = (rect.left + rect.width / 2 - 40) + 'px';
    }

    document.addEventListener('mouseup',  addQuoteButtonToSelection);
    document.addEventListener('touchend', addQuoteButtonToSelection);

    // ─── Toolbar creation ────────────────────────────────────────────────────

    function createToolbar(textarea) {
        if (!textarea.getAttribute('component') || textarea.getAttribute('component') !== 'chat/input') return;

        const parent = textarea.parentNode;
        if (!parent || parent.querySelector('.chat-pro-toolbar')) return;

        const toolbar = document.createElement('div');
        toolbar.className = 'chat-pro-toolbar';
        toolbar.style.cssText = 'display:flex;gap:4px;padding:3px 4px;background:transparent;border-bottom:1px solid #eee;margin-bottom:3px;flex-wrap:wrap;direction:rtl;';

        buttonsConfig.forEach(btnInfo => {
            const btn = document.createElement('button');
            btn.type      = 'button';
            btn.title     = btnInfo.title;
            btn.className = 'chat-format-btn';
            btn.innerHTML = '<i class="fa ' + btnInfo.icon + '"></i>';
            btn.style.cssText = 'background:white;border:1px solid #ddd;cursor:pointer;color:#666;font-size:12px;padding:3px 5px;border-radius:2px;transition:all 0.2s;min-width:24px;height:24px;display:flex;align-items:center;justify-content:center;';

            btn.addEventListener('mouseover', () => { btn.style.background = '#007bff'; btn.style.color = 'white'; btn.style.borderColor = '#007bff'; });
            btn.addEventListener('mouseout',  () => { btn.style.background = 'white';   btn.style.color = '#666';  btn.style.borderColor = '#ddd'; });

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                insertFormatting(textarea, btnInfo);
            });

            toolbar.appendChild(btn);
        });

        parent.insertBefore(toolbar, textarea);
        console.log('✅ סרגל עיצוב התווסף בהצלחה!');
    }

    // ─── Scan & observe ──────────────────────────────────────────────────────

    function scanForTextareas() {
        document.querySelectorAll('textarea[component="chat/input"]').forEach(textarea => {
            if (textarea && textarea.parentNode) createToolbar(textarea);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scanForTextareas);
    } else {
        scanForTextareas();
    }

    setInterval(scanForTextareas, 1000);

    const observer = new MutationObserver(scanForTextareas);
    observer.observe(document.body, { childList: true, subtree: true, attributes: false });

    console.log('🚀 NodeBB Chat Formatter v2.4 - מופעל!');

})();
/* SOURCE_END: עיצוב לחלון הצ'אט.txt */
        }
    },

    {
        id: "hebrew-date",
        name: "תאריך עברי לצד תאריך לועזי | מתמחים טופ",
        description: "מוסיף תאריך עברי לתאריכים מלאים ולבועות הריחוף, בלי להוסיף בכותרות שבין פוסטים",
        category: "ממשק ותצוגה",
        originalFile: "תאריך עברי לצד תאריך לועזי.txt",
        version: "1.1.0",
        author: "Moishy",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*","https://www.mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "0326e60f9a5bfa69f9071cda7c11d7623997dc48caac74a62f48ff6dd49c12ac",
        originalBodySha256: "5c9912646aec99c8e5b762a500c0067fb34dc46d0e9abd589f47b160c1ac03ab",
        embeddedBodySha256: "5c9912646aec99c8e5b762a500c0067fb34dc46d0e9abd589f47b160c1ac03ab",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: תאריך עברי לצד תאריך לועזי.txt */
(function () {
    'use strict';

    const CONFIG = {
        /*
         * inline = לצד התאריך הלועזי
         * below  = בשורה מתחת לתאריך הלועזי
         */
        displayMode: 'inline',

        separator: '•',
        timeZone: 'Asia/Jerusalem',
        omitThousandsInYear: true
    };

    const SCRIPT_ID = 'mt-hebrew-date';

    const DATE_SELECTOR = [
        'time[datetime]',
        '.timeago[datetime]',
        '[datetime]',
        '[data-timestamp]',
        '[data-time]'
    ].join(',');

    /*
     * אזורים שבהם מופיעה כותרת תאריך בין פוסטים.
     * באזורים אלו לא נוסיף תאריך גלוי.
     */
    const INLINE_EXCLUDED_SELECTOR = [
        '.timeline-event',
        '.timeline-event-text',
        '.topic-event',
        '.topic-event-date',
        '.post-stream-date',
        '.posts-date',
        '.date-separator',
        '.post-date-separator',
        '[component="topic/event"]',
        '[component="topic/timeline/event"]',
        '[component="post/date-separator"]',
        '[data-component="topic/event"]'
    ].join(',');

    const TOOLTIP_ATTRIBUTES = [
        'title',
        'data-original-title',
        'data-bs-original-title'
    ];

    const gregorianMonthNames = [
        'ינואר',
        'פברואר',
        'מרץ',
        'אפריל',
        'מאי',
        'יוני',
        'יולי',
        'אוגוסט',
        'ספטמבר',
        'אוקטובר',
        'נובמבר',
        'דצמבר',

        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ];

    const relativeDateExpressions = [
        /^עכשיו$/,
        /^הרגע$/,
        /^היום$/,
        /^אתמול$/,
        /^מחר$/,
        /^לפני\s+/,
        /^בעוד\s+/,
        /^לפני פחות מ/,
        /^כמה שניות/,
        /^מספר שניות/,

        /^now$/i,
        /^today$/i,
        /^yesterday$/i,
        /^tomorrow$/i,
        /^a few seconds/i,
        /^seconds? ago$/i,
        /^minutes? ago$/i,
        /^hours? ago$/i,
        /^days? ago$/i,
        /^weeks? ago$/i,
        /^months? ago$/i,
        /^years? ago$/i
    ];

    /* =========================================================
       עיצוב
       ========================================================= */

    function addStyles() {
        if (document.getElementById(`${SCRIPT_ID}-styles`)) {
            return;
        }

        const style = document.createElement('style');
        style.id = `${SCRIPT_ID}-styles`;

        style.textContent = `
            .${SCRIPT_ID}-wrapper {
                display: inline-flex;
                align-items: baseline;
                flex-wrap: wrap;
                font: inherit;
                font-size: inherit;
                font-weight: inherit;
                line-height: inherit;
                color: inherit;
            }

            .${SCRIPT_ID}-value {
                display: inline;
                direction: rtl;
                unicode-bidi: isolate;
                white-space: nowrap;
                font: inherit;
                font-size: inherit;
                font-weight: inherit;
                line-height: inherit;
                color: inherit;
                opacity: 0.92;
            }

            .${SCRIPT_ID}-separator {
                display: inline;
                margin-inline: 5px;
                font: inherit;
                font-size: inherit;
                color: inherit;
                opacity: 0.62;
            }

            .${SCRIPT_ID}-wrapper.${SCRIPT_ID}-below {
                display: inline-flex;
                flex-direction: column;
                align-items: flex-start;
                vertical-align: top;
            }

            .${SCRIPT_ID}-wrapper.${SCRIPT_ID}-below
            .${SCRIPT_ID}-separator {
                display: none;
            }

            .${SCRIPT_ID}-wrapper.${SCRIPT_ID}-below
            .${SCRIPT_ID}-value {
                display: block;
                margin-top: 1px;
            }
        `;

        document.head.appendChild(style);
    }

    /* =========================================================
       מספרים עבריים
       ========================================================= */

    function convertUnderOneThousand(number) {
        let value = Math.floor(Number(number));

        if (!Number.isFinite(value) || value <= 0) {
            return '';
        }

        value %= 1000;

        const letters = [];

        const hundreds = [
            [400, 'ת'],
            [300, 'ש'],
            [200, 'ר'],
            [100, 'ק']
        ];

        for (const [amount, letter] of hundreds) {
            while (value >= amount) {
                letters.push(letter);
                value -= amount;
            }
        }

        if (value === 15) {
            letters.push('ט', 'ו');
            value = 0;
        } else if (value === 16) {
            letters.push('ט', 'ז');
            value = 0;
        }

        const tens = [
            [90, 'צ'],
            [80, 'פ'],
            [70, 'ע'],
            [60, 'ס'],
            [50, 'נ'],
            [40, 'מ'],
            [30, 'ל'],
            [20, 'כ'],
            [10, 'י']
        ];

        for (const [amount, letter] of tens) {
            if (value >= amount) {
                letters.push(letter);
                value -= amount;
                break;
            }
        }

        const units = [
            '',
            'א',
            'ב',
            'ג',
            'ד',
            'ה',
            'ו',
            'ז',
            'ח',
            'ט'
        ];

        if (value > 0 && value < units.length) {
            letters.push(units[value]);
        }

        return letters.join('');
    }

    function addHebrewPunctuation(letters) {
        if (!letters) {
            return '';
        }

        if (letters.length === 1) {
            return `${letters}׳`;
        }

        return (
            letters.slice(0, -1) +
            '״' +
            letters.slice(-1)
        );
    }

    function numberToHebrew(number, options = {}) {
        const numericValue = Math.floor(Number(number));

        if (
            !Number.isFinite(numericValue) ||
            numericValue <= 0
        ) {
            return '';
        }

        const {
            omitThousands = false
        } = options;

        if (numericValue < 1000) {
            return addHebrewPunctuation(
                convertUnderOneThousand(numericValue)
            );
        }

        const thousands =
            Math.floor(numericValue / 1000);

        const remainder =
            numericValue % 1000;

        if (omitThousands) {
            return addHebrewPunctuation(
                convertUnderOneThousand(remainder)
            );
        }

        const thousandsText =
            convertUnderOneThousand(thousands);

        const remainderText =
            addHebrewPunctuation(
                convertUnderOneThousand(remainder)
            );

        return `${thousandsText}׳${remainderText}`;
    }

    /* =========================================================
       המרת תאריך לעברי
       ========================================================= */

    function parseLocalizedNumber(value) {
        if (!value) {
            return null;
        }

        const normalized = String(value)
            .replace(/[٠-٩]/g, digit =>
                String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit))
            )
            .replace(/[۰-۹]/g, digit =>
                String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit))
            )
            .replace(/[^\d]/g, '');

        const number = Number(normalized);

        return Number.isFinite(number) && number > 0
            ? number
            : null;
    }

    function cleanHebrewMonthName(monthName) {
        return String(monthName || '')
            .replace(/^ב(?=[א-ת])/, '')
            .trim();
    }

    function getHebrewDateParts(date) {
        try {
            const formatter = new Intl.DateTimeFormat(
                'he-IL-u-ca-hebrew',
                {
                    timeZone: CONFIG.timeZone,
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                }
            );

            const parts = formatter.formatToParts(date);

            const day = parseLocalizedNumber(
                parts.find(
                    part => part.type === 'day'
                )?.value
            );

            const month = cleanHebrewMonthName(
                parts.find(
                    part => part.type === 'month'
                )?.value
            );

            const year = parseLocalizedNumber(
                parts.find(
                    part => part.type === 'year'
                )?.value
            );

            if (!day || !month || !year) {
                return null;
            }

            return {
                day,
                month,
                year
            };
        } catch (error) {
            console.error(
                '[Hebrew Date] שגיאה בהמרת תאריך:',
                error
            );

            return null;
        }
    }

    function formatHebrewDate(date) {
        const parts = getHebrewDateParts(date);

        if (!parts) {
            return null;
        }

        const day = numberToHebrew(parts.day);

        const year = numberToHebrew(
            parts.year,
            {
                omitThousands:
                    CONFIG.omitThousandsInYear
            }
        );

        return `${day} ב${parts.month} ${year}`;
    }

    /* =========================================================
       זיהוי ופענוח תאריכים
       ========================================================= */

    function isValidDate(date) {
        return (
            date instanceof Date &&
            !Number.isNaN(date.getTime())
        );
    }

    function normalizeVisibleText(text) {
        return String(text || '')
            .replace(/\u00A0/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function isRelativeDateText(text) {
        const normalized =
            normalizeVisibleText(text);

        if (!normalized) {
            return true;
        }

        return relativeDateExpressions.some(
            expression =>
                expression.test(normalized)
        );
    }

    function looksLikeFullDate(text) {
        const normalized =
            normalizeVisibleText(text);

        if (
            !normalized ||
            isRelativeDateText(normalized)
        ) {
            return false;
        }

        if (/\b(?:19|20)\d{2}\b/.test(normalized)) {
            return true;
        }

        if (
            /\b\d{1,2}[./-]\d{1,2}[./-](?:\d{2}|\d{4})\b/
                .test(normalized)
        ) {
            return true;
        }

        const lowerText = normalized.toLowerCase();

        return gregorianMonthNames.some(monthName => {
            return (
                lowerText.includes(monthName) &&
                /\d{1,2}/.test(lowerText)
            );
        });
    }

    function parseDateValue(value) {
        if (value === null || value === undefined) {
            return null;
        }

        const stringValue = String(value).trim();

        if (!stringValue) {
            return null;
        }

        /*
         * מונע ניסיון לקרוא כותרת שכבר הוספנו לה
         * תאריך עברי.
         */
        const gregorianPart = stringValue
            .split(/\s+[•|]\s+/)[0]
            .trim();

        if (/^\d{10,13}$/.test(gregorianPart)) {
            let timestamp = Number(gregorianPart);

            if (gregorianPart.length === 10) {
                timestamp *= 1000;
            }

            const date = new Date(timestamp);

            return isValidDate(date)
                ? date
                : null;
        }

        const directDate =
            new Date(gregorianPart);

        if (isValidDate(directDate)) {
            return directDate;
        }

        /*
         * תאריך מספרי ישראלי.
         */
        const numericMatch = gregorianPart.match(
            /(\d{1,2})[./-](\d{1,2})[./-](\d{4})(?:\D|$)/
        );

        if (numericMatch) {
            const day = Number(numericMatch[1]);
            const month = Number(numericMatch[2]);
            const year = Number(numericMatch[3]);

            const date = new Date(
                year,
                month - 1,
                day,
                12,
                0,
                0
            );

            return isValidDate(date)
                ? date
                : null;
        }

        /*
         * תאריך מילולי בעברית כגון:
         * 18 במרץ 2025, 2:02
         */
        const hebrewMonths = {
            ינואר: 0,
            פברואר: 1,
            מרץ: 2,
            אפריל: 3,
            מאי: 4,
            יוני: 5,
            יולי: 6,
            אוגוסט: 7,
            ספטמבר: 8,
            אוקטובר: 9,
            נובמבר: 10,
            דצמבר: 11
        };

        const verbalMatch = gregorianPart.match(
            /(\d{1,2})\s+ב?([א-ת]+)\s+((?:19|20)\d{2})(?:[,\s]+(\d{1,2}):(\d{2}))?/
        );

        if (verbalMatch) {
            const day = Number(verbalMatch[1]);
            const monthName = verbalMatch[2];
            const year = Number(verbalMatch[3]);
            const hour = Number(verbalMatch[4] || 12);
            const minute = Number(verbalMatch[5] || 0);

            if (
                Object.prototype.hasOwnProperty.call(
                    hebrewMonths,
                    monthName
                )
            ) {
                const date = new Date(
                    year,
                    hebrewMonths[monthName],
                    day,
                    hour,
                    minute,
                    0
                );

                return isValidDate(date)
                    ? date
                    : null;
            }
        }

        return null;
    }

    function getOriginalTooltipValue(element) {
        /*
         * אם כבר שמרנו את הכותרת המקורית,
         * משתמשים בה ולא בכותרת שכבר שונתה.
         */
        if (element.dataset.mtHebrewDateOriginalTitle) {
            return element.dataset.mtHebrewDateOriginalTitle;
        }

        for (const attribute of TOOLTIP_ATTRIBUTES) {
            const value =
                element.getAttribute(attribute);

            if (value) {
                return value;
            }
        }

        return null;
    }

    function parseDateFromElement(element) {
        const possibleValues = [
            element.getAttribute('datetime'),
            element.dataset.timestamp,
            element.dataset.time,
            element.getAttribute('data-timestamp'),
            element.getAttribute('data-time'),
            getOriginalTooltipValue(element)
        ].filter(Boolean);

        for (const value of possibleValues) {
            const parsed = parseDateValue(value);

            if (parsed) {
                return parsed;
            }
        }

        return null;
    }

    /* =========================================================
       תאריך גלוי ליד תאריך לועזי מלא
       ========================================================= */

    function isExcludedFromInlineDisplay(element) {
        if (element.matches(INLINE_EXCLUDED_SELECTOR)) {
            return true;
        }

        if (element.closest(INLINE_EXCLUDED_SELECTOR)) {
            return true;
        }

        /*
         * הגנה נוספת לכותרות שמפרידות בין פוסטים.
         */
        const parent = element.parentElement;

        if (
            parent &&
            parent.children.length <= 3 &&
            parent.textContent.trim() ===
                element.textContent.trim() &&
            (
                parent.className
                    .toString()
                    .toLowerCase()
                    .includes('timeline') ||
                parent.className
                    .toString()
                    .toLowerCase()
                    .includes('separator') ||
                parent.className
                    .toString()
                    .toLowerCase()
                    .includes('event')
            )
        ) {
            return true;
        }

        return false;
                /*
         * כותרות תאריך גדולות בין פוסטים.
         * לדוגמה: ב׳ באב תשפ״ו עם נקודה ליד.
         */
        const separatorContainer = element.closest(
            '.topic-posts > li,' +
            '[component="post/container"],' +
            '[component="topic/posts"] > *,' +
            '.posts-list > *'
        );

        const text = normalizeVisibleText(element.textContent);

        const looksLikeHebrewDateSeparator =
            /^[•·]?\s*[א-ת][׳״']?\s+ב[א-ת]+\s+[א-ת״׳']+\s*[•·]?$/.test(text) ||
            /^[•·]\s+/.test(text) ||
            /\s+[•·]$/.test(text);

        const isSmallStandaloneBlock =
            element.children.length === 0 &&
            text.length > 0 &&
            text.length < 40 &&
            element.getBoundingClientRect().height < 55;

        const parentText =
            normalizeVisibleText(
                element.parentElement?.textContent
            );

        const parentLooksLikeSeparator =
            parentText === text &&
            element.parentElement?.children.length <= 3;

        if (
            looksLikeHebrewDateSeparator &&
            (
                isSmallStandaloneBlock ||
                parentLooksLikeSeparator ||
                separatorContainer
            )
        ) {
            return true;
        }

        /*
         * NodeBB יוצר לעיתים מפריד כתאריך בתוך LI ללא
         * component קבוע. מזהים לפי מבנה: אין תוכן פוסט,
         * אין כותב ואין כפתורי פעולות.
         */
        const possibleSeparator = element.closest(
            'li, .topic-post, .posts-list-item, [data-index]'
        );

        if (
            possibleSeparator &&
            !possibleSeparator.querySelector('[component="post/content"]') &&
            !possibleSeparator.querySelector('[itemprop="author"]') &&
            !possibleSeparator.querySelector('[component="post/actions"]')
        ) {
            const separatorText =
                normalizeVisibleText(
                    possibleSeparator.textContent
                );

            if (
                separatorText.length > 0 &&
                separatorText.length < 60
            ) {
                return true;
            }
        }
    }

    function getExistingAddition(element) {
        const next = element.nextElementSibling;

        if (
            next?.classList.contains(
                `${SCRIPT_ID}-wrapper`
            )
        ) {
            return next;
        }

        return null;
    }

    function removeInlineAddition(element) {
        getExistingAddition(element)?.remove();

        element.removeAttribute(
            'data-mt-hebrew-date-inline'
        );
    }

    function createHebrewDateElement(hebrewDate) {
        const wrapper =
            document.createElement('span');

        wrapper.className =
            `${SCRIPT_ID}-wrapper`;

        if (CONFIG.displayMode === 'below') {
            wrapper.classList.add(
                `${SCRIPT_ID}-below`
            );
        }

        wrapper.setAttribute(
            'aria-hidden',
            'true'
        );

        const separator =
            document.createElement('span');

        separator.className =
            `${SCRIPT_ID}-separator`;

        separator.textContent =
            CONFIG.separator;

        const value =
            document.createElement('span');

        value.className =
            `${SCRIPT_ID}-value`;

        value.textContent = hebrewDate;
        value.dir = 'rtl';

        wrapper.append(separator, value);

        return wrapper;
    }

    function updateInlineDate(
        element,
        date,
        hebrewDate
    ) {
        const visibleText =
            normalizeVisibleText(
                element.textContent
            );

        /*
         * רק תאריך לועזי מלא שמופיע בפועל בעמוד.
         */
        if (
            !looksLikeFullDate(visibleText) ||
            isExcludedFromInlineDisplay(element)
        ) {
            removeInlineAddition(element);
            return;
        }

        const signature =
            `${date.getTime()}|${visibleText}`;

        if (
            element.dataset.mtHebrewDateInline ===
                signature &&
            getExistingAddition(element)
        ) {
            return;
        }

        removeInlineAddition(element);

        element.insertAdjacentElement(
            'afterend',
            createHebrewDateElement(hebrewDate)
        );

        element.dataset.mtHebrewDateInline =
            signature;
    }

    /* =========================================================
       הוספת תאריך עברי לבועת הריחוף
       ========================================================= */

    function updateTooltipDate(
        element,
        hebrewDate
    ) {
        const originalTitle =
            getOriginalTooltipValue(element);

        if (!originalTitle) {
            return;
        }

        if (
            !element.dataset
                .mtHebrewDateOriginalTitle
        ) {
            element.dataset
                .mtHebrewDateOriginalTitle =
                originalTitle;
        }

        const updatedTitle =
            `${originalTitle} ${CONFIG.separator} ${hebrewDate}`;

        /*
         * title רגיל.
         */
        element.setAttribute(
            'title',
            updatedTitle
        );

        /*
         * Bootstrap עשוי להעביר את הכותרת לאחד
         * מהמאפיינים הבאים לאחר יצירת הבועה.
         */
        if (
            element.hasAttribute(
                'data-original-title'
            )
        ) {
            element.setAttribute(
                'data-original-title',
                updatedTitle
            );
        }

        if (
            element.hasAttribute(
                'data-bs-original-title'
            )
        ) {
            element.setAttribute(
                'data-bs-original-title',
                updatedTitle
            );
        }

        element.dataset.mtHebrewDateTooltip =
            hebrewDate;
    }

    /*
     * אם הבועה כבר נוצרה לפני ששינינו את title,
     * מעדכנים גם את הטקסט שבתוכה.
     */
    function updateVisibleTooltip(element) {
        const hebrewDate =
            element.dataset.mtHebrewDateTooltip;

        if (!hebrewDate) {
            return;
        }

        setTimeout(() => {
            const tooltips =
                document.querySelectorAll(
                    '.tooltip.show .tooltip-inner,' +
                    '.tooltip .tooltip-inner,' +
                    '[role="tooltip"] .tooltip-inner'
                );

            for (const tooltipInner of tooltips) {
                const text =
                    normalizeVisibleText(
                        tooltipInner.textContent
                    );

                if (
                    !text ||
                    text.includes(hebrewDate)
                ) {
                    continue;
                }

                /*
                 * משנה רק בועה שמכילה תאריך לועזי.
                 */
                if (
                    parseDateValue(text) ||
                    /\b(?:19|20)\d{2}\b/.test(text)
                ) {
                    tooltipInner.textContent =
                        `${text} ${CONFIG.separator} ${hebrewDate}`;

                    tooltipInner.dir = 'rtl';
                }
            }
        }, 30);

        setTimeout(() => {
            const tooltips =
                document.querySelectorAll(
                    '.tooltip.show .tooltip-inner,' +
                    '.tooltip .tooltip-inner,' +
                    '[role="tooltip"] .tooltip-inner'
                );

            for (const tooltipInner of tooltips) {
                const text =
                    normalizeVisibleText(
                        tooltipInner.textContent
                    );

                if (
                    text &&
                    !text.includes(hebrewDate) &&
                    (
                        parseDateValue(text) ||
                        /\b(?:19|20)\d{2}\b/.test(text)
                    )
                ) {
                    tooltipInner.textContent =
                        `${text} ${CONFIG.separator} ${hebrewDate}`;

                    tooltipInner.dir = 'rtl';
                }
            }
        }, 150);
    }

    /* =========================================================
       טיפול באלמנט תאריך
       ========================================================= */

    function enhanceDateElement(element) {
        if (!(element instanceof Element)) {
            return;
        }

        if (
            element.closest(
                `.${SCRIPT_ID}-wrapper`
            )
        ) {
            return;
        }

        if (
            element.matches(
                'script, style, code, pre, input, textarea'
            )
        ) {
            return;
        }

        const date =
            parseDateFromElement(element);

        if (!date) {
            removeInlineAddition(element);
            return;
        }

        const hebrewDate =
            formatHebrewDate(date);

        if (!hebrewDate) {
            return;
        }

        /*
         * גם תאריך יחסי מקבל תאריך עברי בבועה.
         */
        updateTooltipDate(
            element,
            hebrewDate
        );

        /*
         * תאריך גלוי מקבל תאריך עברי רק אם הוא
         * תאריך לועזי מלא ואינו מפריד בין פוסטים.
         */
        updateInlineDate(
            element,
            date,
            hebrewDate
        );
    }

    /* =========================================================
       סריקה
       ========================================================= */

    function getDateElements(root = document) {
        const elements = [];

        if (
            root instanceof Element &&
            root.matches(DATE_SELECTOR)
        ) {
            elements.push(root);
        }

        if (
            root instanceof Document ||
            root instanceof Element
        ) {
            elements.push(
                ...root.querySelectorAll(
                    DATE_SELECTOR
                )
            );
        }

        return [...new Set(elements)];
    }

    function scan(root = document) {
        for (
            const element of getDateElements(root)
        ) {
            enhanceDateElement(element);
        }
    }

    /* =========================================================
       ניקוי תוספות ישנות בכותרות שבין פוסטים
       ========================================================= */

    function removeOldSeparatorAdditions() {
        document
            .querySelectorAll(
                `.${SCRIPT_ID}-wrapper`
            )
            .forEach(wrapper => {
                const previous =
                    wrapper.previousElementSibling;

                if (!previous) {
                    return;
                }

                const wrapperText =
                    normalizeVisibleText(
                        wrapper.textContent
                    );

                const previousText =
                    normalizeVisibleText(
                        previous.textContent
                    );

                const looksLikeStandaloneHebrewDate =
                    /^[א-ת][׳״']?\s+ב[א-ת]+\s+[א-ת״׳']+$/
                        .test(wrapperText);

                const parent = wrapper.parentElement;

                const parentIsPostHeader =
                    Boolean(
                        parent?.closest(
                            '.post-header,' +
                            '[component="post/header"],' +
                            '[itemprop="author"]'
                        )
                    );

                if (
                    isExcludedFromInlineDisplay(previous) ||
                    (
                        looksLikeStandaloneHebrewDate &&
                        !parentIsPostHeader &&
                        previousText.length < 40
                    )
                ) {
                    wrapper.remove();

                    previous.removeAttribute(
                        'data-mt-hebrew-date-inline'
                    );
                }
            });
    }

    /* =========================================================
       מעקב אחר שינויים
       ========================================================= */

    function observePage() {
        let scheduled = false;

        function scheduleScan() {
            if (scheduled) {
                return;
            }

            scheduled = true;

            requestAnimationFrame(() => {
                scheduled = false;

                scan(document);
                removeOldSeparatorAdditions();
            });
        }

        const observer =
            new MutationObserver(mutations => {
                for (const mutation of mutations) {
                    if (
                        mutation.type ===
                        'characterData'
                    ) {
                        const parent =
                            mutation.target
                                .parentElement;

                        if (
                            parent?.matches(
                                DATE_SELECTOR
                            )
                        ) {
                            enhanceDateElement(
                                parent
                            );
                        }

                        continue;
                    }

                    if (
                        mutation.type ===
                        'attributes'
                    ) {
                        if (
                            mutation.target
                                .matches?.(
                                    DATE_SELECTOR
                                )
                        ) {
                            enhanceDateElement(
                                mutation.target
                            );
                        }

                        continue;
                    }

                    for (
                        const node of
                        mutation.addedNodes
                    ) {
                        if (
                            node.nodeType ===
                            Node.ELEMENT_NODE
                        ) {
                            scan(node);
                        }
                    }
                }

                scheduleScan();
            });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true,
            attributeFilter: [
                'datetime',
                'data-timestamp',
                'data-time'
            ]
        });
    }

    function handleMouseOver(event) {
        if (!(event.target instanceof Element)) {
            return;
        }

        const dateElement =
            event.target.closest(DATE_SELECTOR);

        if (!dateElement) {
            return;
        }

        enhanceDateElement(dateElement);
        updateVisibleTooltip(dateElement);
    }

    function watchInternalNavigation() {
        let previousUrl = location.href;

        let previousPosts =
            window.ajaxify?.data?.posts;

        setInterval(() => {
            const currentPosts =
                window.ajaxify?.data?.posts;

            const urlChanged =
                location.href !== previousUrl;

            const dataChanged =
                currentPosts !== previousPosts;

            if (!urlChanged && !dataChanged) {
                return;
            }

            previousUrl = location.href;
            previousPosts = currentPosts;

            setTimeout(() => {
                scan(document);
                removeOldSeparatorAdditions();
            }, 50);

            setTimeout(() => {
                scan(document);
                removeOldSeparatorAdditions();
            }, 300);

            setTimeout(() => {
                scan(document);
                removeOldSeparatorAdditions();
            }, 800);
        }, 350);
    }

    /* =========================================================
       הפעלה
       ========================================================= */

    function initialize() {
        if (!document.body) {
            setTimeout(initialize, 50);
            return;
        }

        addStyles();

        /*
         * מסיר קודם תוספות שנותרו מהגרסה הקודמת.
         */
        document
            .querySelectorAll(
                `.${SCRIPT_ID}-wrapper`
            )
            .forEach(element => element.remove());

        document
            .querySelectorAll(
                '[data-mt-hebrew-date-inline]'
            )
            .forEach(element => {
                element.removeAttribute(
                    'data-mt-hebrew-date-inline'
                );
            });

        scan(document);
        removeOldSeparatorAdditions();

        observePage();
        watchInternalNavigation();

        document.addEventListener(
            'mouseover',
            handleMouseOver,
            true
        );

        setTimeout(() => {
            scan(document);
            removeOldSeparatorAdditions();
        }, 150);

        setTimeout(() => {
            scan(document);
            removeOldSeparatorAdditions();
        }, 600);

        setTimeout(() => {
            scan(document);
            removeOldSeparatorAdditions();
        }, 1400);
    }

    if (document.readyState === 'loading') {
        document.addEventListener(
            'DOMContentLoaded',
            initialize,
            {
                once: true
            }
        );
    } else {
        initialize();
    }
})();
/* SOURCE_END: תאריך עברי לצד תאריך לועזי.txt */
        }
    },

    {
        id: "topic-tag-filter",
        name: "מתמחים טופ - סינון נושאים לפי תגיות (ריבוי תגיות + טעינה דינמית)",
        description: "סינון <li class=\"category-item\"> בדף user/*/topics לפי תגיות span (המלצה, בקשה וכו'), כולל נושאים שנוספים בגלילה/דפדוף.‏",
        category: "ניווט וחיפוש",
        originalFile: "סינון נושאים לפי תגיות.txt",
        version: "3.0",
        author: "",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/user/*/topics","https://www.mitmachim.top/user/*/topics"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "199dcb66c21e408e969e137d806f8d15bd3573ed4a28407cc252e285e51fc2ea",
        originalBodySha256: "d09dcc1399200922d2de54aeb2d1c709a32a14f56dbc83400d472c599d69e56d",
        embeddedBodySha256: "d09dcc1399200922d2de54aeb2d1c709a32a14f56dbc83400d472c599d69e56d",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: סינון נושאים לפי תגיות.txt */
(function () {
  'use strict';

  // --- עזר בסיסי ---

  function getTagFromRow(row) {
    const link = row.querySelector('h3[component="topic/header"] a.text-reset');
    if (!link) return '';
    const span = link.querySelector('span');
    if (!span) return '';
    const clone = span.cloneNode(true);
    clone.querySelectorAll('i, svg').forEach(el => el.remove());
    return clone.textContent.replace(/\s+/g, ' ').trim();
  }

  function slugifyTag(tag) {
    return tag
      .replace(/\s+/g, '-')                 // רווחים -> מקף
      .replace(/[^\w\u0590-\u05FF-]/g, ''); // מסיר תווים בעייתיים (משאיר אותיות/ספרות/עברית/מקף)
  }

  // --- מצב גלובלי ---

  let currentRows = [];
  let currentTagInfos = [];
  let filterPanel = null;

  function getSelectedSlugs() {
    if (!filterPanel) return [];
    return Array.from(filterPanel.querySelectorAll('input[type="checkbox"]:checked'))
      .map(chk => chk.value);
  }

  // --- תיוג שורות לפי תגיות ---

  function addTagClasses(rows) {
    const tagSet = new Set();

    rows.forEach(row => {
      const tag = getTagFromRow(row);
      if (!tag) return;

      const slug = slugifyTag(tag);
      row.classList.add('topic-tag-' + slug);
      tagSet.add(JSON.stringify({ tag, slug }));
    });

    return Array.from(tagSet).map(str => JSON.parse(str));
  }

  // --- יצירת / עדכון פאנל סינון ---

  function ensureGlobalCSS() {
    if (document.getElementById('topics-tag-filter-css')) return;

    const css = `
      li.category-item[component="category/topic"] {
        display: flex;
      }

      body.has-topic-filter li.category-item[component="category/topic"] {
        display: none !important;
      }

      body.has-topic-filter li.category-item[component="category/topic"].topic-tag-selected {
        display: flex !important;
      }
    `;
    const style = document.createElement('style');
    style.id = 'topics-tag-filter-css';
    style.textContent = css;
    document.documentElement.appendChild(style);
  }

  function createOrUpdateFilterPanel(list, tagInfos) {
    ensureGlobalCSS();

    if (!filterPanel) {
      // יצירה ראשונית
      const panel = document.createElement('div');
      panel.style.margin = '10px 0';
      panel.style.padding = '10px';
      panel.style.border = '1px solid #ccc';
      panel.style.background = '#f9f9f9';
      panel.style.display = 'flex';
      panel.style.flexWrap = 'wrap';
      panel.style.alignItems = 'center';
      panel.style.gap = '8px';
      panel.style.direction = 'rtl';

      const title = document.createElement('span');
      title.textContent = 'סינון לפי תגיות נושא:';
      title.style.fontWeight = 'bold';
      panel.appendChild(title);

      const clearBtn = document.createElement('button');
      clearBtn.type = 'button';
      clearBtn.textContent = 'הכול';
      clearBtn.style.marginInlineStart = '8px';
      clearBtn.style.padding = '2px 6px';
      clearBtn.style.fontSize = '12px';
      clearBtn.addEventListener('click', () => {
        panel.querySelectorAll('input[type="checkbox"]').forEach(chk => chk.checked = false);
        applyFilter([]); // אין תגיות מסומנות
      });
      panel.appendChild(clearBtn);

      const tagsContainer = document.createElement('div');
      tagsContainer.className = 'tags-container';
      tagsContainer.style.display = 'flex';
      tagsContainer.style.flexWrap = 'wrap';
      tagsContainer.style.gap = '6px';
      tagsContainer.style.alignItems = 'center';
      panel.appendChild(tagsContainer);

      const note = document.createElement('span');
      note.textContent = ' (אפשר לבחור כמה תגיות; מוצגים נושאים שיש להם לפחות אחת מהן)';
      note.style.fontSize = '11px';
      note.style.color = '#666';
      note.style.width = '100%';
      panel.appendChild(note);

      list.parentElement.insertBefore(panel, list);

      panel.addEventListener('change', () => {
        const selected = getSelectedSlugs();
        applyFilter(selected);
      });

      filterPanel = panel;
    }

    // עדכון רשימת הצ'קבוקסים (איחוד תגיות מכל העמוד/גלילות)
    const tagsContainer = filterPanel.querySelector('.tags-container');
    const existingSlugs = new Set(Array.from(tagsContainer.querySelectorAll('input[type="checkbox"]')).map(chk => chk.value));
    const selectedBefore = new Set(getSelectedSlugs());

    tagInfos.forEach(info => {
      if (existingSlugs.has(info.slug)) return;
      const wrapper = document.createElement('label');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '4px';
      wrapper.style.fontSize = '12px';

      const chk = document.createElement('input');
      chk.type = 'checkbox';
      chk.value = info.slug;
      if (selectedBefore.has(info.slug)) chk.checked = true;

      const span = document.createElement('span');
      span.textContent = info.tag;

      wrapper.appendChild(chk);
      wrapper.appendChild(span);
      tagsContainer.appendChild(wrapper);
    });
  }

  // --- סינון בפועל ---

  function applyFilter(selectedSlugs) {
    const rows = currentRows;
    if (!rows.length) return;

    if (!selectedSlugs || !selectedSlugs.length) {
      document.body.classList.remove('has-topic-filter');
      rows.forEach(row => {
        row.classList.remove('topic-tag-selected');
        row.style.display = 'flex';
      });
      return;
    }

    document.body.classList.add('has-topic-filter');

    rows.forEach(row => {
      const hasAny = selectedSlugs.some(slug => row.classList.contains('topic-tag-' + slug));
      if (hasAny) {
        row.classList.add('topic-tag-selected');
      } else {
        row.classList.remove('topic-tag-selected');
      }
    });
  }

  // --- סריקה מחדש של הדף (לדף חדש / גלילה חדשה) ---

  function rescan() {
    const root = document.querySelector('#ajaxify') || document.querySelector('#content') || document.body;
    if (!root) return;

    const rows = Array.from(root.querySelectorAll('li.category-item[component="category/topic"]'));
    if (!rows.length) return;

    currentRows = rows;

    const tagInfos = addTagClasses(rows);
    currentTagInfos = mergeTagInfos(currentTagInfos, tagInfos);

    const list = rows[0].parentElement;
    createOrUpdateFilterPanel(list, currentTagInfos);

    // להחיל מחדש את הסינון לפי מה שכבר מסומן
    const selected = getSelectedSlugs();
    if (selected.length) {
      applyFilter(selected);
    }
  }

  function mergeTagInfos(oldInfos, newInfos) {
    const map = new Map();
    [...oldInfos, ...newInfos].forEach(info => {
      map.set(info.slug, info);
    });
    return Array.from(map.values());
  }

  // --- התחלה + MutationObserver לטעינה דינמית ---

  function start() {
    rescan();

    const ajaxify = document.querySelector('#ajaxify') || document.querySelector('#content') || document.body;
    if (!ajaxify) return;

    const observer = new MutationObserver((mutations) => {
      // כל שינוי משמעותי ב־childList גורר rescan
      if (mutations.some(m => m.type === 'childList' && m.addedNodes.length)) {
        rescan();
      }
    });

    observer.observe(ajaxify, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
/* SOURCE_END: סינון נושאים לפי תגיות.txt */
        }
    },

    {
        id: "keyword-alerts",
        name: "מתמחים טופ - מעקב חכם לפי מילות מפתח",
        description: "התראות חכמות על נושאים ופוסטים חדשים לפי מילות מפתח",
        category: "מעקב וניהול",
        originalFile: "מעקב חכם לפי מילות מפתח.txt",
        version: "2.0.0",
        author: "פרוזי & ChatGPT",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: ["mitmachim-keyword-alerts:settings","mitmachim-keyword-alerts:alerts","mitmachim-keyword-alerts:seen","mitmachim-keyword-alerts:last-check","mitmachim-keyword-alerts:initialized"],
        sourceSha256: "dd8e8767b46369029634c091acee019f5061b4133912302b3a2a97f0285d4d37",
        originalBodySha256: "f24d795e99e52efaabcaa7f6a9adf80ac4716cd5fd509d9471a3cc2f031435b5",
        embeddedBodySha256: "f24d795e99e52efaabcaa7f6a9adf80ac4716cd5fd509d9471a3cc2f031435b5",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: מעקב חכם לפי מילות מפתח.txt */
(function () {
    'use strict';

    const SCRIPT_ID = 'mitmachim-keyword-alerts';
    const VERSION = '2.0.0';

    const STORAGE = {
        settings: `${SCRIPT_ID}:settings`,
        alerts: `${SCRIPT_ID}:alerts`,
        seen: `${SCRIPT_ID}:seen`,
        lastCheck: `${SCRIPT_ID}:last-check`,
        initialized: `${SCRIPT_ID}:initialized`,
    };

    const DEFAULT_SETTINGS = {
        enabled: true,
        pollMinutes: 5,
        fuzzyEnabled: true,
        fuzzyDistance: 1,
        fuzzyMinimumLength: 5,
        notifyInsideForum: true,
        notifyDesktop: true,
        notifyOnlyWhenHidden: false,
        playSound: false,
        includeCategoryIds: [],
        excludeCategoryIds: [],
        rules: [],
    };

    let settings = loadJSON(STORAGE.settings, DEFAULT_SETTINGS);
    let alerts = loadJSON(STORAGE.alerts, []);
    let seenItems = new Set(loadJSON(STORAGE.seen, []));

    let pollTimer = null;
    let currentlyChecking = false;
    let mutationObserver = null;
    let soundContext = null;

    normalizeSettings();
    injectStyles();
    initialize();

    /* =========================================================
       אתחול
    ========================================================= */

    function initialize() {
        installNavigationListeners();
        observePageChanges();
        ensureButton();
        updateButtonBadge();
        restartPolling();

        const initialized = GM_getValue(STORAGE.initialized, false);

        if (!initialized) {
            GM_setValue(STORAGE.initialized, true);
            GM_setValue(STORAGE.lastCheck, Date.now());

            setTimeout(() => {
                showToast(
                    'מעקב מילות המפתח הותקן',
                    'לחץ על סמל הפעמון עם זכוכית המגדלת כדי להוסיף מילות מעקב.',
                    'info'
                );
            }, 1200);
        } else if (settings.enabled) {
            setTimeout(() => checkForNewContent(false), 3500);
        }
    }

    function installNavigationListeners() {
        window.addEventListener('popstate', handleNavigation);
        window.addEventListener('hashchange', handleNavigation);

        document.addEventListener('click', () => {
            setTimeout(handleNavigation, 400);
        });

        if (window.$) {
            try {
                window.$(window).on('action:ajaxify.end', handleNavigation);
            } catch (error) {
                console.debug('[Keyword Alerts]', error);
            }
        }
    }

    function handleNavigation() {
        setTimeout(() => {
            ensureButton();
            updateButtonBadge();
        }, 150);

        setTimeout(() => {
            ensureButton();
            updateButtonBadge();
        }, 800);
    }

    function observePageChanges() {
        mutationObserver = new MutationObserver(
            debounce(() => {
                ensureButton();
                updateButtonBadge();
            }, 300)
        );

        mutationObserver.observe(document.documentElement, {
            childList: true,
            subtree: true,
        });
    }

    /* =========================================================
       כפתור בסרגל הצד
    ========================================================= */

    function ensureButton() {
        const existing = document.getElementById(`${SCRIPT_ID}-nav-item`);

        if (existing && document.contains(existing)) {
            return;
        }

        const notificationButton = findNotificationButton();

        if (!notificationButton) {
            createFloatingFallbackButton();
            return;
        }

        removeFloatingFallbackButton();

        const notificationContainer =
            notificationButton.closest('li') ||
            notificationButton.closest('.nav-item') ||
            notificationButton.parentElement;

        if (!notificationContainer?.parentElement) {
            createFloatingFallbackButton();
            return;
        }

        const tagName =
            notificationContainer.tagName?.toLowerCase() === 'li'
                ? 'li'
                : 'div';

        const item = document.createElement(tagName);
        item.id = `${SCRIPT_ID}-nav-item`;
        item.className = notificationContainer.className || '';

        item.innerHTML = `
            <a
                href="#"
                id="${SCRIPT_ID}-nav-button"
                class="keyword-alerts-nav-link"
                aria-label="מעקב מילות מפתח"
            >
                <span class="keyword-alerts-icon-wrap">
                    <i class="fa fa-bell keyword-alerts-main-bell"></i>
                    <i class="fa fa-search keyword-alerts-search-icon"></i>

                    <span
                        id="${SCRIPT_ID}-badge"
                        class="keyword-alerts-badge"
                        hidden
                    ></span>
                </span>
            </a>
        `;

        item.querySelector('a').addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            openMainModal('alerts');
        });

        notificationContainer.insertAdjacentElement('afterend', item);
        updateButtonBadge();
    }

    function findNotificationButton() {
        const selectors = [
            '[component="navbar/notifications"]',
            'a[component="navbar/notifications"]',
            '[data-component="navbar/notifications"]',
            'a[href*="/notifications"]',
            '[aria-label*="התראות"]',
            '[title*="התראות"]',
            '.notifications.dropdown-toggle',
        ];

        for (const selector of selectors) {
            const elements = [...document.querySelectorAll(selector)];

            const visible = elements.find(element => {
                const rect = element.getBoundingClientRect();
                const style = getComputedStyle(element);

                return (
                    rect.width > 0 &&
                    rect.height > 0 &&
                    style.display !== 'none' &&
                    style.visibility !== 'hidden'
                );
            });

            if (visible) {
                return visible;
            }
        }

        return null;
    }

    function createFloatingFallbackButton() {
        if (document.getElementById(`${SCRIPT_ID}-floating-button`)) {
            return;
        }

        const button = document.createElement('button');
        button.id = `${SCRIPT_ID}-floating-button`;
        button.type = 'button';
        button.title = 'מעקב מילות מפתח';

        button.innerHTML = `
            <span class="keyword-alerts-icon-wrap">
                <i class="fa fa-bell keyword-alerts-main-bell"></i>
                <i class="fa fa-search keyword-alerts-search-icon"></i>

                <span
                    id="${SCRIPT_ID}-floating-badge"
                    class="keyword-alerts-badge"
                    hidden
                ></span>
            </span>
        `;

        button.addEventListener('click', () => openMainModal('alerts'));
        document.body.appendChild(button);
    }

    function removeFloatingFallbackButton() {
        document.getElementById(`${SCRIPT_ID}-floating-button`)?.remove();
    }

    function updateButtonBadge() {
        const unreadCount = alerts.filter(alert => !alert.read).length;

        const badges = [
            document.getElementById(`${SCRIPT_ID}-badge`),
            document.getElementById(`${SCRIPT_ID}-floating-badge`),
        ].filter(Boolean);

        badges.forEach(badge => {
            if (unreadCount > 0) {
                badge.hidden = false;
                badge.textContent = unreadCount > 99 ? '99+' : unreadCount;
            } else {
                badge.hidden = true;
                badge.textContent = '';
            }
        });
    }

    /* =========================================================
       חלון ראשי
    ========================================================= */

    function openMainModal(activeTab = 'alerts') {
        closeAllModals();

        const overlay = document.createElement('div');
        overlay.id = `${SCRIPT_ID}-overlay`;
        overlay.className = 'keyword-alerts-overlay';

        overlay.innerHTML = `
            <section class="keyword-alerts-modal" dir="rtl">
                <header class="keyword-alerts-modal-header">
                    <div class="keyword-alerts-title-area">
                        <div class="keyword-alerts-title-icon">
                            <i class="fa fa-bell"></i>
                            <i class="fa fa-search"></i>
                        </div>

                        <div>
                            <h2>מעקב מילות מפתח</h2>

                            <div class="keyword-alerts-status-line">
                                ${
                                    settings.enabled
                                        ? '<span class="keyword-alerts-status active">המעקב פעיל</span>'
                                        : '<span class="keyword-alerts-status inactive">המעקב מושבת</span>'
                                }
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        class="keyword-alerts-close"
                        data-action="close"
                    >
                        <i class="fa fa-times"></i>
                    </button>
                </header>

                <nav class="keyword-alerts-tabs">
                    <button
                        type="button"
                        class="keyword-alerts-tab ${activeTab === 'alerts' ? 'active' : ''}"
                        data-tab="alerts"
                    >
                        <i class="fa fa-inbox"></i>
                        התראות
                    </button>

                    <button
                        type="button"
                        class="keyword-alerts-tab ${activeTab === 'rules' ? 'active' : ''}"
                        data-tab="rules"
                    >
                        <i class="fa fa-key"></i>
                        מילות מעקב
                    </button>

                    <button
                        type="button"
                        class="keyword-alerts-tab ${activeTab === 'settings' ? 'active' : ''}"
                        data-tab="settings"
                    >
                        <i class="fa fa-cog"></i>
                        הגדרות
                    </button>
                </nav>

                <main class="keyword-alerts-modal-body">
                    <section
                        class="keyword-alerts-panel ${activeTab === 'alerts' ? 'active' : ''}"
                        data-panel="alerts"
                    >
                        ${renderAlertsPanel()}
                    </section>

                    <section
                        class="keyword-alerts-panel ${activeTab === 'rules' ? 'active' : ''}"
                        data-panel="rules"
                    >
                        ${renderRulesPanel()}
                    </section>

                    <section
                        class="keyword-alerts-panel ${activeTab === 'settings' ? 'active' : ''}"
                        data-panel="settings"
                    >
                        ${renderSettingsPanel()}
                    </section>
                </main>
            </section>
        `;

        document.body.appendChild(overlay);
        document.body.classList.add('keyword-alerts-modal-open');

        bindMainModalEvents(overlay);

        requestAnimationFrame(() => {
            overlay.classList.add('visible');
        });
    }

    function renderAlertsPanel() {
        const sorted = [...alerts].sort((a, b) => b.detectedAt - a.detectedAt);
        const unreadCount = sorted.filter(alert => !alert.read).length;

        return `
            <div class="keyword-alerts-toolbar">
                <div>
                    <button
                        type="button"
                        class="keyword-alerts-primary-button"
                        data-action="check-now"
                        ${currentlyChecking ? 'disabled' : ''}
                    >
                        <i class="fa ${currentlyChecking ? 'fa-spinner fa-spin' : 'fa-refresh'}"></i>
                        ${currentlyChecking ? 'בודק...' : 'בדוק עכשיו'}
                    </button>

                    <button
                        type="button"
                        class="keyword-alerts-secondary-button"
                        data-action="mark-all-read"
                        ${unreadCount === 0 ? 'disabled' : ''}
                    >
                        <i class="fa fa-check"></i>
                        סמן הכול כנקרא
                    </button>
                </div>

                <button
                    type="button"
                    class="keyword-alerts-danger-text-button"
                    data-action="clear-alerts"
                    ${sorted.length === 0 ? 'disabled' : ''}
                >
                    <i class="fa fa-trash"></i>
                    נקה התראות
                </button>
            </div>

            <div class="keyword-alerts-last-check">
                <i class="fa fa-clock-o"></i>
                ${getLastCheckText()}
            </div>

            <div class="keyword-alerts-alert-list">
                ${
                    sorted.length
                        ? sorted.map(renderAlertCard).join('')
                        : renderEmptyAlertsState()
                }
            </div>
        `;
    }

    function renderAlertCard(alert) {
        return `
            <article
                class="keyword-alerts-alert-card ${alert.read ? 'read' : 'unread'}"
                data-alert-id="${escapeHTML(alert.id)}"
            >
                <div class="keyword-alerts-alert-main">
                    <div class="keyword-alerts-alert-meta">
                        <span class="keyword-alerts-rule-chip">
                            <i class="fa fa-key"></i>
                            ${escapeHTML(alert.ruleName)}
                        </span>

                        <span>
                            <i class="fa fa-folder-open-o"></i>
                            ${escapeHTML(alert.categoryName || 'ללא קטגוריה')}
                        </span>

                        <span>
                            <i class="fa fa-user-o"></i>
                            ${escapeHTML(alert.author || 'משתמש')}
                        </span>

                        <span>
                            <i class="fa fa-clock-o"></i>
                            ${formatRelativeTime(alert.timestamp)}
                        </span>
                    </div>

                    <a
                        href="${escapeHTML(alert.url)}"
                        class="keyword-alerts-alert-title"
                        data-action="open-alert"
                        data-alert-id="${escapeHTML(alert.id)}"
                    >
                        ${escapeHTML(alert.title)}
                    </a>

                    ${
                        alert.excerpt
                            ? `
                                <p class="keyword-alerts-alert-excerpt">
                                    ${highlightTerms(alert.excerpt, alert.matchedTerms)}
                                </p>
                            `
                            : ''
                    }

                    <div class="keyword-alerts-match-line">
                        <strong>התאמה:</strong>
                        ${escapeHTML((alert.matchedTerms || []).join(', '))}
                    </div>
                </div>

                <div class="keyword-alerts-alert-actions">
                    ${
                        !alert.read
                            ? `
                                <button
                                    type="button"
                                    data-action="mark-read"
                                    data-alert-id="${escapeHTML(alert.id)}"
                                    title="סמן כנקרא"
                                >
                                    <i class="fa fa-check"></i>
                                </button>
                            `
                            : ''
                    }

                    <button
                        type="button"
                        data-action="delete-alert"
                        data-alert-id="${escapeHTML(alert.id)}"
                        title="מחק"
                    >
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            </article>
        `;
    }

    function renderEmptyAlertsState() {
        return `
            <div class="keyword-alerts-empty-state">
                <div class="keyword-alerts-empty-icon">
                    <i class="fa fa-bell-o"></i>
                </div>

                <h3>עדיין אין התראות</h3>

                <p>
                    כאשר יתפרסם נושא או פוסט שמתאים לאחת ממילות המעקב, הוא יופיע כאן.
                </p>

                <button
                    type="button"
                    class="keyword-alerts-primary-button"
                    data-action="go-to-rules"
                >
                    <i class="fa fa-plus"></i>
                    הוסף מילת מעקב
                </button>
            </div>
        `;
    }

    function renderRulesPanel() {
        return `
            <div class="keyword-alerts-rules-header">
                <div>
                    <h3>מילות וביטויי מעקב</h3>

                    <p>
                        לכל מעקב ניתן לבחור בנפרד אם לבדוק נושאים חדשים, פוסטים חדשים או את שניהם.
                    </p>
                </div>

                <button
                    type="button"
                    class="keyword-alerts-primary-button"
                    data-action="add-rule"
                >
                    <i class="fa fa-plus"></i>
                    הוסף מעקב
                </button>
            </div>

            <div class="keyword-alerts-rule-list">
                ${
                    settings.rules.length
                        ? settings.rules.map(renderRuleCard).join('')
                        : `
                            <div class="keyword-alerts-empty-state">
                                <div class="keyword-alerts-empty-icon">
                                    <i class="fa fa-key"></i>
                                </div>

                                <h3>אין עדיין מילות מעקב</h3>

                                <p>
                                    הוסף מילה או ביטוי כדי להתחיל לקבל התראות.
                                </p>

                                <button
                                    type="button"
                                    class="keyword-alerts-primary-button"
                                    data-action="add-rule"
                                >
                                    <i class="fa fa-plus"></i>
                                    הוסף מעקב ראשון
                                </button>
                            </div>
                        `
                }
            </div>
        `;
    }

    function renderRuleCard(rule) {
        const scopeLabel = getScopeLabel(rule.scope);

        const chips = [
            ...(rule.keywords || []).map(term => ({
                text: term,
                type: 'keyword',
            })),
            ...(rule.exactPhrases || []).map(term => ({
                text: `"${term}"`,
                type: 'phrase',
            })),
            ...(rule.excludedWords || []).map(term => ({
                text: `ללא: ${term}`,
                type: 'excluded',
            })),
        ];

        return `
            <article
                class="keyword-alerts-rule-card ${rule.enabled ? '' : 'disabled'}"
                data-rule-id="${escapeHTML(rule.id)}"
            >
                <div class="keyword-alerts-rule-top">
                    <label class="keyword-alerts-switch">
                        <input
                            type="checkbox"
                            data-action="toggle-rule"
                            data-rule-id="${escapeHTML(rule.id)}"
                            ${rule.enabled ? 'checked' : ''}
                        >
                        <span class="keyword-alerts-switch-slider"></span>
                    </label>

                    <div class="keyword-alerts-rule-info">
                        <h4>${escapeHTML(rule.name)}</h4>

                        <div class="keyword-alerts-rule-description">
                            <span>
                                <i class="fa fa-search"></i>
                                ${escapeHTML(scopeLabel)}
                            </span>

                            <span>
                                ${
                                    rule.matchMode === 'all'
                                        ? 'כל המילים חייבות להופיע'
                                        : 'מספיקה מילה אחת'
                                }
                            </span>
                        </div>
                    </div>

                    <div class="keyword-alerts-rule-actions">
                        <button
                            type="button"
                            data-action="edit-rule"
                            data-rule-id="${escapeHTML(rule.id)}"
                            title="עריכה"
                        >
                            <i class="fa fa-pencil"></i>
                        </button>

                        <button
                            type="button"
                            data-action="delete-rule"
                            data-rule-id="${escapeHTML(rule.id)}"
                            title="מחיקה"
                            class="danger"
                        >
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>
                </div>

                <div class="keyword-alerts-rule-chips">
                    ${
                        chips.length
                            ? chips.map(chip => `
                                <span class="keyword-alerts-word-chip ${chip.type}">
                                    ${escapeHTML(chip.text)}
                                </span>
                            `).join('')
                            : '<span class="keyword-alerts-no-words">לא הוגדרו מילים</span>'
                    }
                </div>
            </article>
        `;
    }

    function renderSettingsPanel() {
        return `
            <form id="${SCRIPT_ID}-settings-form" class="keyword-alerts-settings-form">
                <section class="keyword-alerts-settings-section">
                    <h3>הפעלת המעקב</h3>

                    ${renderToggleSetting(
                        'enabled',
                        'הפעל מעקב אוטומטי',
                        'בדוק תוכן חדש באופן אוטומטי.',
                        settings.enabled
                    )}

                    <label class="keyword-alerts-field-row">
                        <span>
                            <strong>תדירות בדיקה</strong>
                            <small>מספר הדקות בין בדיקה לבדיקה.</small>
                        </span>

                        <div class="keyword-alerts-number-input-wrap">
                            <input
                                type="number"
                                name="pollMinutes"
                                min="1"
                                max="120"
                                value="${settings.pollMinutes}"
                            >
                            <span>דקות</span>
                        </div>
                    </label>
                </section>

                <section class="keyword-alerts-settings-section">
                    <h3>התאמה חכמה</h3>

                    ${renderToggleSetting(
                        'fuzzyEnabled',
                        'זיהוי שגיאות כתיב',
                        'מאפשר לזהות שגיאות כתיב קטנות במילה.',
                        settings.fuzzyEnabled
                    )}

                    <label class="keyword-alerts-field-row">
                        <span>
                            <strong>מספר שגיאות מותרות</strong>
                        </span>

                        <select name="fuzzyDistance">
                            <option value="1" ${settings.fuzzyDistance === 1 ? 'selected' : ''}>
                                שגיאה אחת
                            </option>

                            <option value="2" ${settings.fuzzyDistance === 2 ? 'selected' : ''}>
                                עד שתי שגיאות
                            </option>
                        </select>
                    </label>

                    <label class="keyword-alerts-field-row">
                        <span>
                            <strong>אורך מינימלי לזיהוי חכם</strong>
                            <small>מילים קצרות יותר ידרשו התאמה מדויקת.</small>
                        </span>

                        <div class="keyword-alerts-number-input-wrap">
                            <input
                                type="number"
                                name="fuzzyMinimumLength"
                                min="4"
                                max="12"
                                value="${settings.fuzzyMinimumLength}"
                            >
                            <span>אותיות</span>
                        </div>
                    </label>
                </section>

                <section class="keyword-alerts-settings-section">
                    <h3>התראות</h3>

                    ${renderToggleSetting(
                        'notifyInsideForum',
                        'התראה בתוך הפורום',
                        'הצג חלונית קטנה כאשר נמצאה התאמה.',
                        settings.notifyInsideForum
                    )}

                    ${renderToggleSetting(
                        'notifyDesktop',
                        'התראת דפדפן',
                        'הצג התראה של מערכת ההפעלה.',
                        settings.notifyDesktop
                    )}

                    ${renderToggleSetting(
                        'notifyOnlyWhenHidden',
                        'התראת דפדפן רק כשהכרטיסייה מוסתרת',
                        'אל תציג התראת מערכת כאשר אתה צופה בפורום.',
                        settings.notifyOnlyWhenHidden
                    )}

                    ${renderToggleSetting(
                        'playSound',
                        'השמע צליל',
                        'השמע צליל קצר כאשר נמצאה התאמה.',
                        settings.playSound
                    )}

                    <button
                        type="button"
                        class="keyword-alerts-secondary-button"
                        data-action="request-notification-permission"
                    >
                        <i class="fa fa-bell-o"></i>
                        אשר התראות דפדפן
                    </button>
                </section>

                <section class="keyword-alerts-settings-section">
                    <h3>סינון קטגוריות</h3>

                    <label class="keyword-alerts-text-field">
                        <span>
                            <strong>קטגוריות מורשות</strong>
                            <small>הפרד מזהי קטגוריות בפסיקים. השאר ריק לכל הקטגוריות.</small>
                        </span>

                        <input
                            type="text"
                            name="includeCategoryIds"
                            value="${escapeHTML(settings.includeCategoryIds.join(', '))}"
                            placeholder="לדוגמה: 5, 12, 20"
                        >
                    </label>

                    <label class="keyword-alerts-text-field">
                        <span>
                            <strong>קטגוריות חסומות</strong>
                            <small>תוכן מקטגוריות אלו לא ייבדק.</small>
                        </span>

                        <input
                            type="text"
                            name="excludeCategoryIds"
                            value="${escapeHTML(settings.excludeCategoryIds.join(', '))}"
                            placeholder="לדוגמה: 3, 18"
                        >
                    </label>
                </section>

                <footer class="keyword-alerts-settings-footer">
                    <button
                        type="button"
                        class="keyword-alerts-secondary-button"
                        data-action="close"
                    >
                        ביטול
                    </button>

                    <button
                        type="submit"
                        class="keyword-alerts-primary-button"
                    >
                        <i class="fa fa-save"></i>
                        שמור הגדרות
                    </button>
                </footer>
            </form>
        `;
    }

    function renderToggleSetting(name, title, description, checked) {
        return `
            <label class="keyword-alerts-toggle-row">
                <span>
                    <strong>${escapeHTML(title)}</strong>
                    <small>${escapeHTML(description)}</small>
                </span>

                <span class="keyword-alerts-switch">
                    <input
                        type="checkbox"
                        name="${escapeHTML(name)}"
                        ${checked ? 'checked' : ''}
                    >
                    <span class="keyword-alerts-switch-slider"></span>
                </span>
            </label>
        `;
    }

    function bindMainModalEvents(overlay) {
        overlay.addEventListener('click', async event => {
            if (event.target === overlay) {
                closeAllModals();
                return;
            }

            const tab = event.target.closest('[data-tab]');

            if (tab) {
                switchTab(tab.dataset.tab);
                return;
            }

            const actionElement = event.target.closest('[data-action]');

            if (!actionElement) {
                return;
            }

            const action = actionElement.dataset.action;
            const ruleId = actionElement.dataset.ruleId;
            const alertId = actionElement.dataset.alertId;

            switch (action) {
                case 'close':
                    closeAllModals();
                    break;

                case 'go-to-rules':
                    switchTab('rules');
                    break;

                case 'add-rule':
                    openRuleEditor();
                    break;

                case 'edit-rule':
                    openRuleEditor(ruleId);
                    break;

                case 'delete-rule':
                    deleteRule(ruleId);
                    break;

                case 'toggle-rule':
                    toggleRule(ruleId, actionElement.checked);
                    break;

                case 'check-now':
                    actionElement.disabled = true;
                    actionElement.innerHTML =
                        '<i class="fa fa-spinner fa-spin"></i> בודק...';

                    await checkForNewContent(true);
                    openMainModal('alerts');
                    break;

                case 'mark-all-read':
                    alerts.forEach(alert => {
                        alert.read = true;
                    });

                    saveAlerts();
                    openMainModal('alerts');
                    break;

                case 'clear-alerts':
                    if (confirm('למחוק את כל ההתראות?')) {
                        alerts = [];
                        saveAlerts();
                        openMainModal('alerts');
                    }
                    break;

                case 'mark-read':
                    markAlertRead(alertId);
                    openMainModal('alerts');
                    break;

                case 'delete-alert':
                    alerts = alerts.filter(alert => alert.id !== alertId);
                    saveAlerts();
                    openMainModal('alerts');
                    break;

                case 'open-alert':
                    markAlertRead(alertId);
                    break;

                case 'request-notification-permission':
                    await requestNotificationPermission();
                    break;
            }
        });

        const settingsForm = overlay.querySelector(
            `#${CSS.escape(SCRIPT_ID)}-settings-form`
        );

        settingsForm?.addEventListener('submit', event => {
            event.preventDefault();
            saveSettingsForm(settingsForm);
        });
    }

    function switchTab(tabName) {
        const overlay = document.getElementById(`${SCRIPT_ID}-overlay`);

        overlay?.querySelectorAll('[data-tab]').forEach(button => {
            button.classList.toggle('active', button.dataset.tab === tabName);
        });

        overlay?.querySelectorAll('[data-panel]').forEach(panel => {
            panel.classList.toggle('active', panel.dataset.panel === tabName);
        });
    }

    /* =========================================================
       עורך מילות מעקב
    ========================================================= */

    function openRuleEditor(ruleId = null) {
        document.getElementById(`${SCRIPT_ID}-rule-overlay`)?.remove();

        const existingRule = settings.rules.find(rule => rule.id === ruleId);

        const rule = existingRule
            ? structuredCloneSafe(existingRule)
            : {
                id: makeId(),
                name: '',
                enabled: true,
                keywords: [],
                exactPhrases: [],
                excludedWords: [],
                matchMode: 'any',
                scope: 'both',
            };

        const overlay = document.createElement('div');
        overlay.id = `${SCRIPT_ID}-rule-overlay`;
        overlay.className =
            'keyword-alerts-overlay keyword-alerts-rule-overlay visible';

        overlay.innerHTML = `
            <section class="keyword-alerts-modal keyword-alerts-rule-editor" dir="rtl">
                <header class="keyword-alerts-modal-header">
                    <div class="keyword-alerts-title-area">
                        <div class="keyword-alerts-title-icon">
                            <i class="fa fa-key"></i>
                        </div>

                        <div>
                            <h2>${existingRule ? 'עריכת מעקב' : 'הוספת מעקב חדש'}</h2>
                        </div>
                    </div>

                    <button
                        type="button"
                        class="keyword-alerts-close"
                        data-rule-action="close"
                    >
                        <i class="fa fa-times"></i>
                    </button>
                </header>

                <form id="${SCRIPT_ID}-rule-form" class="keyword-alerts-rule-form">
                    <label class="keyword-alerts-text-field">
                        <span>
                            <strong>שם המעקב</strong>
                            <small>לדוגמה: תוכנות להורדה</small>
                        </span>

                        <input
                            type="text"
                            name="name"
                            value="${escapeHTML(rule.name)}"
                            placeholder="שם המעקב"
                            required
                        >
                    </label>

                    <fieldset class="keyword-alerts-radio-group">
                        <legend>היכן לחפש?</legend>

                        <label>
                            <input
                                type="radio"
                                name="scope"
                                value="topics"
                                ${rule.scope === 'topics' ? 'checked' : ''}
                            >

                            <span>
                                <strong>נושאים חדשים בלבד</strong>

                                <small>
                                    החיפוש יתבצע רק בכותרת ובתוכן הפוסט הראשון של נושא חדש.
                                    תגובות חדשות בנושאים ישנים לא יפעילו את המעקב.
                                </small>
                            </span>
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="scope"
                                value="posts"
                                ${rule.scope === 'posts' ? 'checked' : ''}
                            >

                            <span>
                                <strong>פוסטים חדשים בלבד</strong>

                                <small>
                                    החיפוש יתבצע רק בתוכן ההודעה החדשה.
                                    כותרת הנושא לא תיכלל בחיפוש.
                                </small>
                            </span>
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="scope"
                                value="both"
                                ${rule.scope === 'both' ? 'checked' : ''}
                            >

                            <span>
                                <strong>נושאים ופוסטים</strong>

                                <small>
                                    בנושאים חדשים תיבדק הכותרת וההודעה הראשונה.
                                    בתגובות תיבדק רק ההודעה החדשה.
                                </small>
                            </span>
                        </label>
                    </fieldset>

                    <label class="keyword-alerts-text-field">
                        <span>
                            <strong>מילות מפתח</strong>
                            <small>הפרד מילים באמצעות פסיקים או שורות.</small>
                        </span>

                        <textarea
                            name="keywords"
                            rows="4"
                            placeholder="להורדה, תוכנה חדשה"
                        >${escapeHTML(rule.keywords.join(', '))}</textarea>
                    </label>

                    <label class="keyword-alerts-text-field">
                        <span>
                            <strong>ביטויים מדויקים</strong>
                            <small>הביטוי כולו חייב להופיע ברצף.</small>
                        </span>

                        <textarea
                            name="exactPhrases"
                            rows="3"
                            placeholder="קישור להורדה"
                        >${escapeHTML(rule.exactPhrases.join(', '))}</textarea>
                    </label>

                    <label class="keyword-alerts-text-field">
                        <span>
                            <strong>מילות שלילה</strong>
                            <small>אם אחת מהמילים האלו מופיעה, לא תיווצר התראה.</small>
                        </span>

                        <textarea
                            name="excludedWords"
                            rows="3"
                            placeholder="נמכר, הסתדרתי"
                        >${escapeHTML(rule.excludedWords.join(', '))}</textarea>
                    </label>

                    <fieldset class="keyword-alerts-radio-group">
                        <legend>צורת ההתאמה</legend>

                        <label>
                            <input
                                type="radio"
                                name="matchMode"
                                value="any"
                                ${rule.matchMode !== 'all' ? 'checked' : ''}
                            >

                            <span>
                                <strong>לפחות מילה אחת</strong>
                                <small>מספיקה התאמה לאחת מהמילים.</small>
                            </span>
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="matchMode"
                                value="all"
                                ${rule.matchMode === 'all' ? 'checked' : ''}
                            >

                            <span>
                                <strong>כל המילים</strong>
                                <small>כל המילים והביטויים חייבים להופיע.</small>
                            </span>
                        </label>
                    </fieldset>

                    ${renderToggleSetting(
                        'enabled',
                        'הפעל את המעקב',
                        'אפשר להשבית זמנית בלי למחוק.',
                        rule.enabled
                    )}

                    <footer class="keyword-alerts-settings-footer">
                        <button
                            type="button"
                            class="keyword-alerts-secondary-button"
                            data-rule-action="close"
                        >
                            ביטול
                        </button>

                        <button
                            type="submit"
                            class="keyword-alerts-primary-button"
                        >
                            <i class="fa fa-save"></i>
                            שמור מעקב
                        </button>
                    </footer>
                </form>
            </section>
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener('click', event => {
            if (
                event.target === overlay ||
                event.target.closest('[data-rule-action="close"]')
            ) {
                overlay.remove();
            }
        });

        const form = overlay.querySelector(`#${CSS.escape(SCRIPT_ID)}-rule-form`);

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const updatedRule = {
                id: rule.id,
                name: String(formData.get('name') || '').trim(),
                enabled: form.querySelector('[name="enabled"]').checked,
                keywords: parseTermList(formData.get('keywords')),
                exactPhrases: parseTermList(formData.get('exactPhrases')),
                excludedWords: parseTermList(formData.get('excludedWords')),
                matchMode:
                    formData.get('matchMode') === 'all'
                        ? 'all'
                        : 'any',
                scope: ['topics', 'posts', 'both'].includes(formData.get('scope'))
                    ? formData.get('scope')
                    : 'both',
            };

            if (!updatedRule.name) {
                showToast('חסר שם', 'יש להזין שם למעקב.', 'error');
                return;
            }

            if (
                updatedRule.keywords.length === 0 &&
                updatedRule.exactPhrases.length === 0
            ) {
                showToast(
                    'לא הוגדרו מילים',
                    'יש להזין לפחות מילת מפתח אחת או ביטוי אחד.',
                    'error'
                );
                return;
            }

            const index = settings.rules.findIndex(
                existing => existing.id === updatedRule.id
            );

            if (index >= 0) {
                settings.rules[index] = updatedRule;
            } else {
                settings.rules.push(updatedRule);
            }

            saveSettings();
            overlay.remove();
            openMainModal('rules');

            showToast(
                'המעקב נשמר',
                `המעקב „${updatedRule.name}” נשמר בהצלחה.`,
                'success'
            );
        });

        setTimeout(() => {
            form.querySelector('[name="name"]')?.focus();
        }, 100);
    }

    function deleteRule(ruleId) {
        const rule = settings.rules.find(item => item.id === ruleId);

        if (!rule) {
            return;
        }

        if (!confirm(`למחוק את המעקב „${rule.name}”?`)) {
            return;
        }

        settings.rules = settings.rules.filter(item => item.id !== ruleId);
        saveSettings();
        openMainModal('rules');
    }

    function toggleRule(ruleId, enabled) {
        const rule = settings.rules.find(item => item.id === ruleId);

        if (!rule) {
            return;
        }

        rule.enabled = Boolean(enabled);
        saveSettings();

        const card = document.querySelector(
            `.keyword-alerts-rule-card[data-rule-id="${CSS.escape(ruleId)}"]`
        );

        card?.classList.toggle('disabled', !enabled);
    }

    function getScopeLabel(scope) {
        switch (scope) {
            case 'topics':
                return 'נושאים חדשים בלבד';

            case 'posts':
                return 'פוסטים חדשים בלבד';

            default:
                return 'נושאים ופוסטים';
        }
    }

    /* =========================================================
       שמירת הגדרות
    ========================================================= */

    function saveSettingsForm(form) {
        const formData = new FormData(form);

        settings.enabled = form.querySelector('[name="enabled"]').checked;

        settings.pollMinutes = clampNumber(
            formData.get('pollMinutes'),
            1,
            120,
            5
        );

        settings.fuzzyEnabled =
            form.querySelector('[name="fuzzyEnabled"]').checked;

        settings.fuzzyDistance = clampNumber(
            formData.get('fuzzyDistance'),
            1,
            2,
            1
        );

        settings.fuzzyMinimumLength = clampNumber(
            formData.get('fuzzyMinimumLength'),
            4,
            12,
            5
        );

        settings.notifyInsideForum =
            form.querySelector('[name="notifyInsideForum"]').checked;

        settings.notifyDesktop =
            form.querySelector('[name="notifyDesktop"]').checked;

        settings.notifyOnlyWhenHidden =
            form.querySelector('[name="notifyOnlyWhenHidden"]').checked;

        settings.playSound =
            form.querySelector('[name="playSound"]').checked;

        settings.includeCategoryIds = parseNumberList(
            formData.get('includeCategoryIds')
        );

        settings.excludeCategoryIds = parseNumberList(
            formData.get('excludeCategoryIds')
        );

        saveSettings();
        restartPolling();
        closeAllModals();

        showToast(
            'ההגדרות נשמרו',
            settings.enabled
                ? `הבדיקה תתבצע בכל ${settings.pollMinutes} דקות.`
                : 'המעקב האוטומטי הושבת.',
            'success'
        );
    }

    function normalizeSettings() {
        settings = deepMerge(
            structuredCloneSafe(DEFAULT_SETTINGS),
            settings
        );

        settings.pollMinutes = clampNumber(
            settings.pollMinutes,
            1,
            120,
            5
        );

        settings.fuzzyDistance = clampNumber(
            settings.fuzzyDistance,
            1,
            2,
            1
        );

        settings.fuzzyMinimumLength = clampNumber(
            settings.fuzzyMinimumLength,
            4,
            12,
            5
        );

        settings.includeCategoryIds = parseNumberList(
            settings.includeCategoryIds
        );

        settings.excludeCategoryIds = parseNumberList(
            settings.excludeCategoryIds
        );

        if (!Array.isArray(settings.rules)) {
            settings.rules = [];
        }

        settings.rules = settings.rules.map(rule => ({
            id: rule.id || makeId(),
            name: String(rule.name || 'מעקב'),
            enabled: rule.enabled !== false,
            keywords: parseTermList(rule.keywords),
            exactPhrases: parseTermList(rule.exactPhrases),
            excludedWords: parseTermList(rule.excludedWords),
            matchMode: rule.matchMode === 'all' ? 'all' : 'any',
            scope: ['topics', 'posts', 'both'].includes(rule.scope)
                ? rule.scope
                : 'both',
        }));

        saveSettings();
    }

    function saveSettings() {
        GM_setValue(STORAGE.settings, JSON.stringify(settings));
    }

    /* =========================================================
       בדיקת תוכן חדש
    ========================================================= */

    function restartPolling() {
        if (pollTimer) {
            clearInterval(pollTimer);
            pollTimer = null;
        }

        if (!settings.enabled) {
            return;
        }

        pollTimer = setInterval(() => {
            checkForNewContent(false);
        }, settings.pollMinutes * 60 * 1000);
    }

    async function checkForNewContent(manual = false) {
        if (currentlyChecking) {
            return [];
        }

        const activeRules = settings.rules.filter(rule => {
            return (
                rule.enabled &&
                (
                    rule.keywords.length > 0 ||
                    rule.exactPhrases.length > 0
                )
            );
        });

        if (activeRules.length === 0) {
            if (manual) {
                showToast(
                    'אין מילות מעקב פעילות',
                    'יש להוסיף או להפעיל לפחות מעקב אחד.',
                    'info'
                );
            }

            return [];
        }

        currentlyChecking = true;

        try {
            const previousCheck = Number(
                GM_getValue(
                    STORAGE.lastCheck,
                    Date.now() - 24 * 60 * 60 * 1000
                )
            );

            const checkStartedAt = Date.now();
            const rawItems = await fetchRecentForumItems(previousCheck);

            const items = deduplicateItems(
                rawItems
                    .map(normalizeForumItem)
                    .filter(Boolean)
            );

            const newAlerts = [];

            for (const item of items) {
                if (!isItemNewEnough(item, previousCheck)) {
                    continue;
                }

                if (!categoryIsAllowed(item.categoryId)) {
                    continue;
                }

                const seenKey = makeSeenKey(item);

                if (seenItems.has(seenKey)) {
                    continue;
                }

                seenItems.add(seenKey);

                const matches = matchItemAgainstRules(item, activeRules);

                for (const match of matches) {
                    const alert = createAlert(item, match);

                    if (!alertAlreadyExists(alert)) {
                        alerts.unshift(alert);
                        newAlerts.push(alert);
                    }
                }
            }

            saveSeenItems();
            saveAlerts();

            GM_setValue(STORAGE.lastCheck, checkStartedAt);

            if (newAlerts.length > 0) {
                notifyAboutMatches(newAlerts);
            } else if (manual) {
                showToast(
                    'הבדיקה הסתיימה',
                    'לא נמצאו התאמות חדשות.',
                    'success'
                );
            }

            return newAlerts;
        } catch (error) {
            console.error('[Keyword Alerts]', error);

            if (manual) {
                showToast(
                    'הבדיקה נכשלה',
                    error.message || 'לא ניתן לקבל את התוכן החדש.',
                    'error'
                );
            }

            return [];
        } finally {
            currentlyChecking = false;
            updateButtonBadge();
        }
    }

    async function fetchRecentForumItems(previousCheck) {
        const items = [];

        const elapsedMinutes =
            Math.max(1, (Date.now() - previousCheck) / 60000);

        const pages =
            elapsedMinutes <= 10
                ? 1
                : elapsedMinutes <= 60
                    ? 2
                    : 3;

        for (let page = 1; page <= pages; page++) {
            let data = null;

            const endpoints = [
                `/api/recent?page=${page}`,
                `/api/recent?sort=recent&page=${page}`,
            ];

            for (const endpoint of endpoints) {
                try {
                    data = await fetchJSON(endpoint);

                    if (data) {
                        break;
                    }
                } catch (error) {
                    console.debug('[Keyword Alerts]', endpoint, error);
                }
            }

            if (!data) {
                continue;
            }

            const pageItems = extractItemsFromResponse(data);

            items.push(...pageItems);

            if (pageItems.length === 0) {
                break;
            }
        }

        return items;
    }

    function extractItemsFromResponse(data) {
        const result = [];

        const lists = [
            data?.topics,
            data?.posts,
            data?.data?.topics,
            data?.data?.posts,
            data?.result?.topics,
            data?.result?.posts,
        ];

        for (const list of lists) {
            if (Array.isArray(list)) {
                result.push(...list);
            }
        }

        if (Array.isArray(data)) {
            result.push(...data);
        }

        return result;
    }

    function normalizeForumItem(raw) {
        if (!raw || typeof raw !== 'object') {
            return null;
        }

        const topic = raw.topic || raw;
        const teaser =
            raw.teaser ||
            raw.lastpost ||
            raw.lastPost ||
            {};

        const post =
            raw.post ||
            raw.mainPost ||
            raw.firstPost ||
            teaser ||
            raw;

        const tid = toNumber(
            raw.tid ??
            topic.tid ??
            post.tid ??
            teaser.tid
        );

        const pid = toNumber(
            post.pid ??
            raw.pid ??
            teaser.pid ??
            topic.mainPid ??
            topic.mainpid
        );

        if (!tid && !pid) {
            return null;
        }

        const title =
            topic.title ||
            raw.title ||
            post.topicTitle ||
            raw.topicTitle ||
            'ללא כותרת';

        const categoryId = toNumber(
            raw.cid ??
            topic.cid ??
            raw.category?.cid ??
            topic.category?.cid
        );

        const categoryName =
            raw.category?.name ||
            topic.category?.name ||
            raw.categoryName ||
            topic.categoryName ||
            '';

        const author =
            post.user?.displayname ||
            post.user?.username ||
            raw.user?.displayname ||
            raw.user?.username ||
            teaser.user?.displayname ||
            teaser.user?.username ||
            post.username ||
            raw.username ||
            '';

        const contentHtml =
            post.content ||
            raw.content ||
            teaser.content ||
            '';

        const content = htmlToText(contentHtml);

        const timestamp = getRawItemTimestamp({
            ...raw,
            ...post,
            ...teaser,
        });

        const postIndex = toNumber(
            post.index ??
            raw.index ??
            teaser.index
        );

        const mainPid = toNumber(
            topic.mainPid ??
            topic.mainpid ??
            raw.mainPid ??
            raw.mainpid
        );

        const isMainPost =
            postIndex === 0 ||
            (
                pid &&
                mainPid &&
                pid === mainPid
            ) ||
            raw.isMainPost === true ||
            raw.isTopic === true;

        const slug =
            topic.slug ||
            raw.slug ||
            slugifyTitle(title);

        return {
            tid,
            pid,
            title: String(title || ''),
            content: String(content || ''),
            categoryId,
            categoryName: String(categoryName || ''),
            author: String(author || ''),
            timestamp,
            postIndex,
            isMainPost,
            url: buildItemUrl({
                tid,
                pid,
                slug,
            }),
        };
    }

    function getRawItemTimestamp(raw) {
        const candidates = [
            raw?.timestamp,
            raw?.timestampISO,
            raw?.postTimestamp,
            raw?.lastposttime,
            raw?.lastPostTime,
            raw?.lastpost?.timestamp,
            raw?.lastPost?.timestamp,
            raw?.teaser?.timestamp,
        ];

        for (const candidate of candidates) {
            const parsed = parseTimestamp(candidate);

            if (Number.isFinite(parsed)) {
                return parsed;
            }
        }

        return Date.now();
    }

    function buildItemUrl({ tid, pid, slug }) {
        if (pid) {
            return `${location.origin}/post/${pid}`;
        }

        if (tid) {
            return `${location.origin}/topic/${slug || 'topic'}/${tid}`;
        }

        return location.origin;
    }

    function isItemNewEnough(item, previousCheck) {
        return (
            !Number.isFinite(item.timestamp) ||
            item.timestamp >= previousCheck - 5 * 60 * 1000
        );
    }

    function categoryIsAllowed(categoryId) {
        const cid = Number(categoryId);

        if (
            settings.excludeCategoryIds.length > 0 &&
            settings.excludeCategoryIds.includes(cid)
        ) {
            return false;
        }

        if (
            settings.includeCategoryIds.length > 0 &&
            !settings.includeCategoryIds.includes(cid)
        ) {
            return false;
        }

        return true;
    }

    /* =========================================================
       מנגנון ההתאמה המתוקן
    ========================================================= */

    function matchItemAgainstRules(item, activeRules) {
        const matches = [];

        for (const rule of activeRules) {
            if (!ruleAppliesToItemType(rule, item)) {
                continue;
            }

            const searchableText = buildSearchableTextForRule(item, rule);

            if (!searchableText.trim()) {
                continue;
            }

            const normalizedText = normalizeText(searchableText);
            const words = tokenize(normalizedText);

            const excluded = rule.excludedWords.some(term => {
                return termMatchesText(
                    term,
                    normalizedText,
                    words,
                    false
                );
            });

            if (excluded) {
                continue;
            }

            const checks = [];

            for (const keyword of rule.keywords) {
                checks.push({
                    term: keyword,
                    matched: termMatchesText(
                        keyword,
                        normalizedText,
                        words,
                        settings.fuzzyEnabled
                    ),
                });
            }

            for (const phrase of rule.exactPhrases) {
                checks.push({
                    term: phrase,
                    matched: exactPhraseMatches(
                        phrase,
                        normalizedText
                    ),
                });
            }

            if (checks.length === 0) {
                continue;
            }

            const matched =
                rule.matchMode === 'all'
                    ? checks.every(check => check.matched)
                    : checks.some(check => check.matched);

            if (!matched) {
                continue;
            }

            matches.push({
                rule,
                matchedTerms: checks
                    .filter(check => check.matched)
                    .map(check => check.term),
                searchedText: searchableText,
            });
        }

        return matches;
    }

    function ruleAppliesToItemType(rule, item) {
        if (item.isMainPost) {
            return (
                rule.scope === 'topics' ||
                rule.scope === 'both'
            );
        }

        return (
            rule.scope === 'posts' ||
            rule.scope === 'both'
        );
    }

    function buildSearchableTextForRule(item, rule) {
        /*
         * זה התיקון המרכזי:
         *
         * נושא חדש:
         * בודקים את הכותרת ואת תוכן הפוסט הראשון.
         *
         * תגובה חדשה בנושא קיים:
         * בודקים רק את תוכן התגובה החדשה.
         * לא מצרפים את כותרת הנושא הישן.
         */

        if (item.isMainPost) {
            return [
                item.title,
                item.content,
            ]
                .filter(Boolean)
                .join('\n');
        }

        return item.content || '';
    }

    function termMatchesText(term, normalizedText, words, allowFuzzy) {
        const normalizedTerm = normalizeText(term);

        if (!normalizedTerm) {
            return false;
        }

        if (normalizedTerm.includes(' ')) {
            return normalizedText.includes(normalizedTerm);
        }

        if (words.includes(normalizedTerm)) {
            return true;
        }

        if (
            normalizedTerm.length >= 3 &&
            normalizedText.includes(normalizedTerm)
        ) {
            return true;
        }

        if (
            !allowFuzzy ||
            normalizedTerm.length < settings.fuzzyMinimumLength
        ) {
            return false;
        }

        return words.some(word => {
            if (
                word.length < settings.fuzzyMinimumLength ||
                Math.abs(word.length - normalizedTerm.length) >
                    settings.fuzzyDistance
            ) {
                return false;
            }

            return (
                levenshteinDistanceLimited(
                    word,
                    normalizedTerm,
                    settings.fuzzyDistance
                ) <= settings.fuzzyDistance
            );
        });
    }

    function exactPhraseMatches(phrase, normalizedText) {
        const normalizedPhrase = normalizeText(phrase);

        return Boolean(
            normalizedPhrase &&
            normalizedText.includes(normalizedPhrase)
        );
    }

    function normalizeText(value) {
        return String(value || '')
            .normalize('NFKD')
            .replace(/[\u0591-\u05C7]/g, '')
            .replace(/[״”“]/g, '"')
            .replace(/[׳’‘`]/g, "'")
            .replace(/[\u200E\u200F\u202A-\u202E]/g, '')
            .toLocaleLowerCase('he')
            .replace(/[^\p{L}\p{N}'"\s-]/gu, ' ')
            .replace(/[-_]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function tokenize(text) {
        return text
            .split(/\s+/)
            .map(word => word.replace(/^['"]+|['"]+$/g, ''))
            .filter(Boolean);
    }

    function levenshteinDistanceLimited(a, b, limit) {
        if (a === b) {
            return 0;
        }

        if (Math.abs(a.length - b.length) > limit) {
            return limit + 1;
        }

        let previous = Array.from(
            { length: b.length + 1 },
            (_, index) => index
        );

        for (let i = 1; i <= a.length; i++) {
            const current = [i];
            let rowMinimum = current[0];

            for (let j = 1; j <= b.length; j++) {
                const substitutionCost =
                    a[i - 1] === b[j - 1]
                        ? 0
                        : 1;

                current[j] = Math.min(
                    current[j - 1] + 1,
                    previous[j] + 1,
                    previous[j - 1] + substitutionCost
                );

                rowMinimum = Math.min(rowMinimum, current[j]);
            }

            if (rowMinimum > limit) {
                return limit + 1;
            }

            previous = current;
        }

        return previous[b.length];
    }

    /* =========================================================
       יצירת התראות
    ========================================================= */

    function createAlert(item, match) {
        const displayTitle = item.isMainPost
            ? item.title
            : `תגובה חדשה בנושא: ${item.title}`;

        return {
            id: makeId(),
            uniqueKey: `${item.pid || item.tid}:${match.rule.id}`,
            tid: item.tid,
            pid: item.pid,
            title: displayTitle,
            url: item.url,
            author: item.author,
            categoryId: item.categoryId,
            categoryName: item.categoryName,
            excerpt: makeExcerpt(
                match.searchedText,
                match.matchedTerms
            ),
            ruleId: match.rule.id,
            ruleName: match.rule.name,
            matchedTerms: match.matchedTerms,
            timestamp: item.timestamp,
            detectedAt: Date.now(),
            read: false,
        };
    }

    function alertAlreadyExists(alert) {
        return alerts.some(existing => {
            return existing.uniqueKey === alert.uniqueKey;
        });
    }

    function markAlertRead(alertId) {
        const alert = alerts.find(item => item.id === alertId);

        if (alert) {
            alert.read = true;
            saveAlerts();
        }
    }

    function saveAlerts() {
        alerts = alerts
            .sort((a, b) => b.detectedAt - a.detectedAt)
            .slice(0, 250);

        GM_setValue(STORAGE.alerts, JSON.stringify(alerts));
        updateButtonBadge();
    }

    function saveSeenItems() {
        const items = [...seenItems].slice(-3000);

        seenItems = new Set(items);

        GM_setValue(
            STORAGE.seen,
            JSON.stringify(items)
        );
    }

    function makeSeenKey(item) {
        if (item.pid) {
            return `pid:${item.pid}`;
        }

        return `tid:${item.tid}:${item.timestamp}`;
    }

    function deduplicateItems(items) {
        const map = new Map();

        for (const item of items) {
            const key = item.pid
                ? `pid:${item.pid}`
                : `tid:${item.tid}:${item.timestamp}`;

            if (!map.has(key)) {
                map.set(key, item);
            }
        }

        return [...map.values()];
    }

    /* =========================================================
       הצגת התראות
    ========================================================= */

    function notifyAboutMatches(newAlerts) {
        updateButtonBadge();

        if (settings.playSound) {
            playNotificationSound();
        }

        if (settings.notifyInsideForum) {
            if (newAlerts.length === 1) {
                showToast(
                    `התאמה חדשה: ${newAlerts[0].ruleName}`,
                    newAlerts[0].title,
                    'match',
                    newAlerts[0].url
                );
            } else {
                showToast(
                    `${newAlerts.length} התאמות חדשות`,
                    'נמצאו מספר פרסומים שמתאימים למילות המעקב.',
                    'match'
                );
            }
        }

        if (
            settings.notifyDesktop &&
            !(
                settings.notifyOnlyWhenHidden &&
                document.visibilityState === 'visible'
            )
        ) {
            showDesktopNotifications(newAlerts);
        }
    }

    function showDesktopNotifications(newAlerts) {
        for (const alert of newAlerts.slice(0, 3)) {
            if (typeof GM_notification === 'function') {
                try {
                    GM_notification({
                        title: `התאמה חדשה: ${alert.ruleName}`,
                        text: `${alert.title}\n${alert.excerpt}`.trim(),
                        timeout: 12000,
                        onclick: () => {
                            markAlertRead(alert.id);
                            window.focus();
                            location.href = alert.url;
                        },
                    });
                } catch (error) {
                    console.debug('[Keyword Alerts]', error);
                }

                continue;
            }

            if (
                'Notification' in window &&
                Notification.permission === 'granted'
            ) {
                const notification = new Notification(
                    `התאמה חדשה: ${alert.ruleName}`,
                    {
                        body: `${alert.title}\n${alert.excerpt}`.trim(),
                    }
                );

                notification.onclick = () => {
                    markAlertRead(alert.id);
                    window.focus();
                    location.href = alert.url;
                    notification.close();
                };
            }
        }
    }

    async function requestNotificationPermission() {
        if (!('Notification' in window)) {
            showToast(
                'התראות אינן נתמכות',
                'הדפדפן אינו תומך בהתראות מערכת.',
                'error'
            );

            return;
        }

        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
            showToast(
                'ההתראות אושרו',
                'התראות הדפדפן הופעלו.',
                'success'
            );
        } else {
            showToast(
                'ההתראות לא אושרו',
                'ניתן לשנות זאת בהגדרות האתר בדפדפן.',
                'error'
            );
        }
    }

    function showToast(
        title,
        message,
        type = 'info',
        url = null
    ) {
        document.getElementById(`${SCRIPT_ID}-toast`)?.remove();

        const toast = document.createElement(url ? 'a' : 'div');

        toast.id = `${SCRIPT_ID}-toast`;
        toast.className = `keyword-alerts-toast ${type}`;
        toast.dir = 'rtl';

        if (url) {
            toast.href = url;
        }

        toast.innerHTML = `
            <div class="keyword-alerts-toast-icon">
                <i class="fa ${
                    type === 'success'
                        ? 'fa-check-circle'
                        : type === 'error'
                            ? 'fa-exclamation-circle'
                            : type === 'match'
                                ? 'fa-bell'
                                : 'fa-info-circle'
                }"></i>
            </div>

            <div class="keyword-alerts-toast-content">
                <strong>${escapeHTML(title)}</strong>
                <span>${escapeHTML(message)}</span>
            </div>

            <button
                type="button"
                class="keyword-alerts-toast-close"
            >
                <i class="fa fa-times"></i>
            </button>
        `;

        toast
            .querySelector('.keyword-alerts-toast-close')
            .addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
                toast.remove();
            });

        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add('visible');
        });

        setTimeout(() => {
            toast.classList.remove('visible');

            setTimeout(() => {
                toast.remove();
            }, 250);
        }, 7000);
    }

    function playNotificationSound() {
        try {
            const AudioContext =
                window.AudioContext ||
                window.webkitAudioContext;

            if (!AudioContext) {
                return;
            }

            soundContext ||= new AudioContext();

            const oscillator = soundContext.createOscillator();
            const gain = soundContext.createGain();

            oscillator.frequency.setValueAtTime(
                720,
                soundContext.currentTime
            );

            oscillator.frequency.exponentialRampToValueAtTime(
                900,
                soundContext.currentTime + 0.12
            );

            gain.gain.setValueAtTime(
                0.0001,
                soundContext.currentTime
            );

            gain.gain.exponentialRampToValueAtTime(
                0.06,
                soundContext.currentTime + 0.02
            );

            gain.gain.exponentialRampToValueAtTime(
                0.0001,
                soundContext.currentTime + 0.22
            );

            oscillator.connect(gain);
            gain.connect(soundContext.destination);

            oscillator.start();
            oscillator.stop(soundContext.currentTime + 0.23);
        } catch (error) {
            console.debug('[Keyword Alerts]', error);
        }
    }

    /* =========================================================
       פעולות כלליות
    ========================================================= */

    function closeAllModals() {
        document.getElementById(`${SCRIPT_ID}-rule-overlay`)?.remove();

        const overlay = document.getElementById(`${SCRIPT_ID}-overlay`);

        if (overlay) {
            overlay.classList.remove('visible');

            setTimeout(() => {
                overlay.remove();
            }, 180);
        }

        document.body.classList.remove('keyword-alerts-modal-open');
    }

    async function fetchJSON(url) {
        const controller = new AbortController();

        const timeout = setTimeout(() => {
            controller.abort();
        }, 15000);

        try {
            const response = await fetch(url, {
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                signal: controller.signal,
            });

            if (!response.ok) {
                throw new Error(`שגיאת שרת ${response.status}`);
            }

            return await response.json();
        } finally {
            clearTimeout(timeout);
        }
    }

    function getLastCheckText() {
        const lastCheck = Number(
            GM_getValue(STORAGE.lastCheck, 0)
        );

        return lastCheck
            ? `הבדיקה האחרונה בוצעה ${formatRelativeTime(lastCheck)}`
            : 'עדיין לא בוצעה בדיקה';
    }

    /* =========================================================
       פונקציות עזר
    ========================================================= */

    function loadJSON(key, fallback) {
        try {
            const value = GM_getValue(key, null);

            if (value === null || value === undefined || value === '') {
                return structuredCloneSafe(fallback);
            }

            return typeof value === 'string'
                ? JSON.parse(value)
                : value;
        } catch (error) {
            return structuredCloneSafe(fallback);
        }
    }

    function structuredCloneSafe(value) {
        if (typeof structuredClone === 'function') {
            try {
                return structuredClone(value);
            } catch (error) {
                console.debug(error);
            }
        }

        return JSON.parse(JSON.stringify(value));
    }

    function deepMerge(target, source) {
        if (!source || typeof source !== 'object') {
            return target;
        }

        for (const [key, value] of Object.entries(source)) {
            if (
                value &&
                typeof value === 'object' &&
                !Array.isArray(value) &&
                target[key] &&
                typeof target[key] === 'object' &&
                !Array.isArray(target[key])
            ) {
                target[key] = deepMerge(target[key], value);
            } else {
                target[key] = value;
            }
        }

        return target;
    }

    function parseTermList(value) {
        if (Array.isArray(value)) {
            return uniqueStrings(value);
        }

        return uniqueStrings(
            String(value || '')
                .split(/[\n,;]+/)
                .map(item => item.trim())
                .map(item => item.replace(/^["']+|["']+$/g, ''))
                .filter(Boolean)
        );
    }

    function parseNumberList(value) {
        const values = Array.isArray(value)
            ? value
            : String(value || '').split(/[\s,;]+/);

        return [
            ...new Set(
                values
                    .map(Number)
                    .filter(Number.isFinite)
                    .filter(number => number > 0)
            ),
        ];
    }

    function uniqueStrings(values) {
        const map = new Map();

        for (const raw of values) {
            const value = String(raw || '').trim();
            const key = normalizeText(value);

            if (key && !map.has(key)) {
                map.set(key, value);
            }
        }

        return [...map.values()];
    }

    function htmlToText(html) {
        const template = document.createElement('template');
        template.innerHTML = String(html || '');

        template.content
            .querySelectorAll('script, style, noscript')
            .forEach(element => element.remove());

        return (
            template.content.textContent ||
            ''
        )
            .replace(/\s+/g, ' ')
            .trim();
    }

    function makeExcerpt(text, terms) {
        const clean = String(text || '')
            .replace(/\s+/g, ' ')
            .trim();

        if (!clean) {
            return '';
        }

        if (clean.length <= 220) {
            return clean;
        }

        const normalized = normalizeText(clean);
        let firstIndex = -1;

        for (const term of terms || []) {
            const index = normalized.indexOf(
                normalizeText(term)
            );

            if (
                index >= 0 &&
                (
                    firstIndex < 0 ||
                    index < firstIndex
                )
            ) {
                firstIndex = index;
            }
        }

        if (firstIndex < 0) {
            return `${clean.slice(0, 220)}…`;
        }

        const start = Math.max(0, firstIndex - 70);
        const end = Math.min(clean.length, start + 220);

        return `${
            start > 0 ? '…' : ''
        }${clean.slice(start, end)}${
            end < clean.length ? '…' : ''
        }`;
    }

    function highlightTerms(text, terms) {
        let safe = escapeHTML(text);

        const sortedTerms = [...(terms || [])]
            .filter(Boolean)
            .sort((a, b) => b.length - a.length);

        for (const term of sortedTerms) {
            const escaped = escapeRegExp(escapeHTML(term));

            safe = safe.replace(
                new RegExp(`(${escaped})`, 'gi'),
                '<mark>$1</mark>'
            );
        }

        return safe;
    }

    function parseTimestamp(value) {
        if (value === null || value === undefined || value === '') {
            return NaN;
        }

        if (typeof value === 'number') {
            return value < 100000000000
                ? value * 1000
                : value;
        }

        const numeric = Number(value);

        if (Number.isFinite(numeric)) {
            return numeric < 100000000000
                ? numeric * 1000
                : numeric;
        }

        const parsed = Date.parse(String(value));

        return Number.isFinite(parsed)
            ? parsed
            : NaN;
    }

    function formatRelativeTime(timestamp) {
        const difference = Date.now() - Number(timestamp);

        if (difference < 60 * 1000) {
            return 'עכשיו';
        }

        const minutes = Math.floor(difference / 60000);

        if (minutes < 60) {
            return `לפני ${minutes} דקות`;
        }

        const hours = Math.floor(minutes / 60);

        if (hours < 24) {
            return `לפני ${hours} שעות`;
        }

        const days = Math.floor(hours / 24);

        return `לפני ${days} ימים`;
    }

    function slugifyTitle(title) {
        return String(title || 'topic')
            .toLocaleLowerCase('he')
            .replace(/[^\p{L}\p{N}\s-]/gu, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .slice(0, 100) || 'topic';
    }

    function toNumber(value) {
        const number = Number(value);

        return Number.isFinite(number)
            ? number
            : null;
    }

    function clampNumber(value, min, max, fallback) {
        const number = Number(value);

        if (!Number.isFinite(number)) {
            return fallback;
        }

        return Math.min(max, Math.max(min, number));
    }

    function makeId() {
        if (crypto?.randomUUID) {
            return crypto.randomUUID();
        }

        return `${Date.now().toString(36)}-${Math.random()
            .toString(36)
            .slice(2, 10)}`;
    }

    function escapeHTML(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function escapeRegExp(value) {
        return String(value).replace(
            /[.*+?^${}()|[\]\\]/g,
            '\\$&'
        );
    }

    function debounce(callback, wait) {
        let timer = null;

        return (...args) => {
            clearTimeout(timer);

            timer = setTimeout(() => {
                callback(...args);
            }, wait);
        };
    }

    /* =========================================================
       עיצוב
    ========================================================= */

    function injectStyles() {
        GM_addStyle(`
            :root {
                --kwa-primary: #246bfd;
                --kwa-primary-hover: #1557d7;
                --kwa-primary-soft: rgba(36, 107, 253, 0.11);
                --kwa-success: #159447;
                --kwa-danger: #d93c3c;
                --kwa-warning: #dc8c00;
                --kwa-text: #202938;
                --kwa-muted: #697386;
                --kwa-border: #dfe4ec;
                --kwa-background: #f6f8fb;
                --kwa-card: #ffffff;
            }

            body.keyword-alerts-modal-open {
                overflow: hidden !important;
            }

            #${SCRIPT_ID}-nav-item {
                position: relative !important;
                width: 100% !important;
                min-width: 0 !important;
                max-width: 100% !important;
                height: 48px !important;
                padding: 0 !important;
                margin: 0 !important;
                overflow: visible !important;
            }

            #${SCRIPT_ID}-nav-item .keyword-alerts-nav-link {
                position: relative !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                width: 100% !important;
                min-width: 0 !important;
                max-width: 100% !important;
                height: 48px !important;
                padding: 0 !important;
                margin: 0 !important;
                overflow: visible !important;
                text-decoration: none !important;
            }

            #${SCRIPT_ID}-nav-item .keyword-alerts-icon-wrap {
                position: relative !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                width: 28px !important;
                height: 32px !important;
            }

            #${SCRIPT_ID}-nav-item .keyword-alerts-main-bell {
                color: #657383;
                font-size: 18px !important;
            }

            #${SCRIPT_ID}-nav-item .keyword-alerts-search-icon {
                position: absolute !important;
                right: -2px !important;
                bottom: 2px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                width: 13px !important;
                height: 13px !important;
                border: 2px solid #f8f9fa !important;
                border-radius: 50% !important;
                background: var(--kwa-primary) !important;
                color: #fff !important;
                font-size: 7px !important;
            }

            #${SCRIPT_ID}-nav-item .keyword-alerts-nav-link:hover .keyword-alerts-main-bell {
                color: var(--kwa-primary);
            }

            #${SCRIPT_ID}-nav-item .keyword-alerts-nav-link::after {
                content: "מעקב מילות מפתח";
                position: absolute !important;
                z-index: 999999 !important;
                top: 50% !important;
                left: calc(100% + 10px) !important;
                width: max-content !important;
                padding: 7px 10px !important;
                border-radius: 7px !important;
                background: rgba(25, 30, 38, 0.96) !important;
                color: #fff !important;
                font-size: 12px !important;
                white-space: nowrap !important;
                pointer-events: none !important;
                opacity: 0 !important;
                visibility: hidden !important;
                transform: translateY(-50%) translateX(-4px) !important;
                transition: 0.15s ease !important;
            }

            #${SCRIPT_ID}-nav-item .keyword-alerts-nav-link::before {
                content: "";
                position: absolute !important;
                z-index: 1000000 !important;
                top: 50% !important;
                left: calc(100% + 4px) !important;
                border-top: 6px solid transparent !important;
                border-bottom: 6px solid transparent !important;
                border-right: 6px solid rgba(25, 30, 38, 0.96) !important;
                pointer-events: none !important;
                opacity: 0 !important;
                visibility: hidden !important;
                transform: translateY(-50%) !important;
                transition: 0.15s ease !important;
            }

            #${SCRIPT_ID}-nav-item .keyword-alerts-nav-link:hover::after,
            #${SCRIPT_ID}-nav-item .keyword-alerts-nav-link:hover::before {
                opacity: 1 !important;
                visibility: visible !important;
            }

            .keyword-alerts-badge {
                position: absolute;
                top: -3px;
                left: -8px;
                min-width: 17px;
                height: 17px;
                padding: 0 4px;
                border: 2px solid #fff;
                border-radius: 999px;
                background: #e53935;
                color: #fff;
                font-size: 9px;
                font-weight: 800;
                line-height: 13px;
                text-align: center;
            }

            #${SCRIPT_ID}-floating-button {
                position: fixed;
                z-index: 99980;
                left: 18px;
                bottom: 85px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 48px;
                height: 48px;
                border: 0;
                border-radius: 50%;
                background: var(--kwa-primary);
                color: #fff;
                box-shadow: 0 7px 24px rgba(25, 72, 160, 0.35);
                cursor: pointer;
            }

            #${SCRIPT_ID}-floating-button .keyword-alerts-icon-wrap {
                position: relative;
            }

            .keyword-alerts-overlay {
                position: fixed;
                z-index: 100000;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                background: rgba(13, 23, 38, 0.56);
                opacity: 0;
                backdrop-filter: blur(3px);
                transition: opacity 0.18s ease;
            }

            .keyword-alerts-overlay.visible {
                opacity: 1;
            }

            .keyword-alerts-modal {
                display: flex;
                flex-direction: column;
                width: min(900px, 100%);
                max-height: 88vh;
                overflow: hidden;
                border-radius: 18px;
                background: var(--kwa-card);
                color: var(--kwa-text);
                box-shadow: 0 20px 60px rgba(15, 29, 51, 0.22);
            }

            .keyword-alerts-modal-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 16px;
                padding: 19px 22px;
                border-bottom: 1px solid var(--kwa-border);
                background: linear-gradient(
                    135deg,
                    rgba(36, 107, 253, 0.08),
                    rgba(36, 107, 253, 0.015)
                );
            }

            .keyword-alerts-title-area {
                display: flex;
                align-items: center;
                gap: 14px;
            }

            .keyword-alerts-title-icon {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 47px;
                height: 47px;
                border-radius: 14px;
                background: var(--kwa-primary);
                color: #fff;
            }

            .keyword-alerts-title-icon .fa-search {
                position: absolute;
                right: 7px;
                bottom: 7px;
                font-size: 9px;
            }

            .keyword-alerts-title-area h2 {
                margin: 0 0 4px;
                font-size: 21px;
                font-weight: 800;
            }

            .keyword-alerts-status-line {
                color: var(--kwa-muted);
                font-size: 12px;
            }

            .keyword-alerts-status.active {
                color: var(--kwa-success);
            }

            .keyword-alerts-status.inactive {
                color: var(--kwa-muted);
            }

            .keyword-alerts-close {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 37px;
                height: 37px;
                border: 0;
                border-radius: 10px;
                background: transparent;
                color: var(--kwa-muted);
                cursor: pointer;
            }

            .keyword-alerts-close:hover {
                background: rgba(217, 60, 60, 0.1);
                color: var(--kwa-danger);
            }

            .keyword-alerts-tabs {
                display: flex;
                gap: 4px;
                padding: 8px 18px 0;
                border-bottom: 1px solid var(--kwa-border);
            }

            .keyword-alerts-tab {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 7px;
                min-width: 130px;
                padding: 12px 15px;
                border: 0;
                background: transparent;
                color: var(--kwa-muted);
                font-weight: 700;
                cursor: pointer;
            }

            .keyword-alerts-tab.active {
                color: var(--kwa-primary);
            }

            .keyword-alerts-tab.active::after {
                content: "";
                position: absolute;
                right: 12px;
                bottom: -1px;
                left: 12px;
                height: 3px;
                background: var(--kwa-primary);
            }

            .keyword-alerts-modal-body {
                flex: 1;
                min-height: 0;
                overflow-y: auto;
                background: var(--kwa-background);
            }

            .keyword-alerts-panel {
                display: none;
                min-height: 430px;
                padding: 20px;
            }

            .keyword-alerts-panel.active {
                display: block;
            }

            .keyword-alerts-toolbar,
            .keyword-alerts-rules-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                margin-bottom: 14px;
            }

            .keyword-alerts-toolbar > div {
                display: flex;
                gap: 8px;
            }

            .keyword-alerts-primary-button,
            .keyword-alerts-secondary-button,
            .keyword-alerts-danger-text-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 7px;
                min-height: 38px;
                padding: 8px 14px;
                border-radius: 9px;
                font-size: 13px;
                font-weight: 700;
                cursor: pointer;
            }

            .keyword-alerts-primary-button {
                border: 1px solid var(--kwa-primary);
                background: var(--kwa-primary);
                color: #fff;
            }

            .keyword-alerts-primary-button:hover {
                background: var(--kwa-primary-hover);
            }

            .keyword-alerts-secondary-button {
                border: 1px solid var(--kwa-border);
                background: #fff;
                color: var(--kwa-text);
            }

            .keyword-alerts-danger-text-button {
                border: 0;
                background: transparent;
                color: var(--kwa-danger);
            }

            button:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }

            .keyword-alerts-last-check {
                margin-bottom: 14px;
                color: var(--kwa-muted);
                font-size: 12px;
            }

            .keyword-alerts-alert-list,
            .keyword-alerts-rule-list {
                display: flex;
                flex-direction: column;
                gap: 11px;
            }

            .keyword-alerts-alert-card,
            .keyword-alerts-rule-card,
            .keyword-alerts-settings-section {
                padding: 15px 17px;
                border: 1px solid var(--kwa-border);
                border-radius: 13px;
                background: #fff;
            }

            .keyword-alerts-alert-card {
                display: grid;
                grid-template-columns: minmax(0, 1fr) auto;
                gap: 13px;
            }

            .keyword-alerts-alert-card.unread {
                border-color: rgba(36, 107, 253, 0.34);
                background: rgba(36, 107, 253, 0.035);
            }

            .keyword-alerts-alert-meta {
                display: flex;
                flex-wrap: wrap;
                gap: 6px 13px;
                margin-bottom: 7px;
                color: var(--kwa-muted);
                font-size: 11px;
            }

            .keyword-alerts-rule-chip {
                padding: 3px 7px;
                border-radius: 999px;
                background: var(--kwa-primary-soft);
                color: var(--kwa-primary);
            }

            .keyword-alerts-alert-title {
                display: inline-block;
                margin-bottom: 6px;
                color: var(--kwa-text) !important;
                font-size: 16px;
                font-weight: 800;
                text-decoration: none !important;
            }

            .keyword-alerts-alert-excerpt {
                margin: 0 0 7px;
                color: #4c586b;
                font-size: 13px;
                line-height: 1.65;
            }

            .keyword-alerts-alert-excerpt mark {
                background: #fff0a8;
            }

            .keyword-alerts-match-line {
                color: var(--kwa-muted);
                font-size: 11px;
            }

            .keyword-alerts-alert-actions,
            .keyword-alerts-rule-actions {
                display: flex;
                gap: 5px;
            }

            .keyword-alerts-alert-actions button,
            .keyword-alerts-rule-actions button {
                width: 32px;
                height: 32px;
                border: 0;
                border-radius: 8px;
                background: transparent;
                color: var(--kwa-muted);
                cursor: pointer;
            }

            .keyword-alerts-alert-actions button:hover,
            .keyword-alerts-rule-actions button:hover {
                background: var(--kwa-primary-soft);
                color: var(--kwa-primary);
            }

            .keyword-alerts-rule-actions button.danger:hover {
                color: var(--kwa-danger);
            }

            .keyword-alerts-empty-state {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 330px;
                padding: 35px 20px;
                border: 1px dashed #cad2df;
                border-radius: 15px;
                background: rgba(255, 255, 255, 0.66);
                text-align: center;
            }

            .keyword-alerts-empty-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 65px;
                height: 65px;
                margin-bottom: 15px;
                border-radius: 19px;
                background: var(--kwa-primary-soft);
                color: var(--kwa-primary);
                font-size: 28px;
            }

            .keyword-alerts-empty-state h3 {
                margin: 0 0 7px;
            }

            .keyword-alerts-empty-state p {
                margin: 0 0 17px;
                color: var(--kwa-muted);
            }

            .keyword-alerts-rules-header h3 {
                margin: 0 0 4px;
            }

            .keyword-alerts-rules-header p {
                margin: 0;
                color: var(--kwa-muted);
                font-size: 12px;
            }

            .keyword-alerts-rule-card.disabled {
                opacity: 0.6;
            }

            .keyword-alerts-rule-top {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .keyword-alerts-rule-info {
                flex: 1;
            }

            .keyword-alerts-rule-info h4 {
                margin: 0 0 4px;
            }

            .keyword-alerts-rule-description {
                display: flex;
                flex-wrap: wrap;
                gap: 8px 15px;
                color: var(--kwa-muted);
                font-size: 11px;
            }

            .keyword-alerts-rule-chips {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                margin-top: 12px;
                padding-right: 47px;
            }

            .keyword-alerts-word-chip {
                padding: 4px 8px;
                border-radius: 7px;
                background: #eef2f7;
                color: #455268;
                font-size: 11px;
            }

            .keyword-alerts-word-chip.phrase {
                background: rgba(36, 107, 253, 0.1);
                color: var(--kwa-primary);
            }

            .keyword-alerts-word-chip.excluded {
                background: rgba(217, 60, 60, 0.08);
                color: var(--kwa-danger);
            }

            .keyword-alerts-switch {
                position: relative;
                display: inline-flex;
                width: 42px;
                min-width: 42px;
                height: 23px;
            }

            .keyword-alerts-switch input {
                position: absolute;
                opacity: 0;
            }

            .keyword-alerts-switch-slider {
                position: absolute;
                inset: 0;
                border-radius: 999px;
                background: #c6ccd6;
                cursor: pointer;
            }

            .keyword-alerts-switch-slider::before {
                content: "";
                position: absolute;
                top: 3px;
                right: 3px;
                width: 17px;
                height: 17px;
                border-radius: 50%;
                background: #fff;
                transition: transform 0.18s ease;
            }

            .keyword-alerts-switch input:checked + .keyword-alerts-switch-slider {
                background: var(--kwa-primary);
            }

            .keyword-alerts-switch input:checked + .keyword-alerts-switch-slider::before {
                transform: translateX(-19px);
            }

            .keyword-alerts-settings-form,
            .keyword-alerts-rule-form {
                display: flex;
                flex-direction: column;
                gap: 14px;
            }

            .keyword-alerts-settings-section h3 {
                margin: 0 0 10px;
            }

            .keyword-alerts-toggle-row,
            .keyword-alerts-field-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                min-height: 53px;
                padding: 9px 2px;
                border-bottom: 1px solid #f0f2f6;
            }

            .keyword-alerts-toggle-row > span:first-child,
            .keyword-alerts-field-row > span:first-child,
            .keyword-alerts-text-field > span {
                display: flex;
                flex-direction: column;
                gap: 3px;
            }

            .keyword-alerts-toggle-row small,
            .keyword-alerts-field-row small,
            .keyword-alerts-text-field small {
                color: var(--kwa-muted);
                font-size: 10px;
            }

            .keyword-alerts-number-input-wrap {
                display: flex;
                align-items: center;
                overflow: hidden;
                border: 1px solid #cfd6e1;
                border-radius: 8px;
            }

            .keyword-alerts-number-input-wrap input {
                width: 75px;
                padding: 8px;
                border: 0;
            }

            .keyword-alerts-number-input-wrap span {
                padding: 8px;
                background: #f5f7fa;
                color: var(--kwa-muted);
                font-size: 11px;
            }

            .keyword-alerts-field-row select,
            .keyword-alerts-text-field input,
            .keyword-alerts-text-field textarea {
                border: 1px solid #cfd6e1;
                border-radius: 8px;
                background: #fff;
                color: var(--kwa-text);
                font-family: inherit;
                font-size: 13px;
            }

            .keyword-alerts-field-row select {
                min-width: 160px;
                padding: 8px 10px;
            }

            .keyword-alerts-text-field {
                display: flex;
                flex-direction: column;
                gap: 8px;
                margin-bottom: 14px;
            }

            .keyword-alerts-text-field input,
            .keyword-alerts-text-field textarea {
                width: 100%;
                padding: 10px 11px;
                box-sizing: border-box;
            }

            .keyword-alerts-settings-footer {
                display: flex;
                justify-content: flex-end;
                gap: 8px;
                padding-top: 14px;
            }

            .keyword-alerts-rule-editor {
                width: min(680px, 100%);
            }

            .keyword-alerts-rule-form {
                overflow-y: auto;
                padding: 20px;
                background: var(--kwa-background);
            }

            .keyword-alerts-radio-group {
                display: flex;
                flex-direction: column;
                gap: 7px;
                padding: 13px;
                border: 1px solid var(--kwa-border);
                border-radius: 10px;
                background: #fff;
            }

            .keyword-alerts-radio-group legend {
                padding: 0 4px;
                font-weight: 800;
            }

            .keyword-alerts-radio-group label {
                display: flex;
                align-items: flex-start;
                gap: 9px;
                padding: 8px;
                border-radius: 8px;
                cursor: pointer;
            }

            .keyword-alerts-radio-group label:hover {
                background: #f7f9fc;
            }

            .keyword-alerts-radio-group span {
                display: flex;
                flex-direction: column;
                gap: 3px;
            }

            .keyword-alerts-radio-group small {
                color: var(--kwa-muted);
                font-size: 10px;
                line-height: 1.5;
            }

            .keyword-alerts-toast {
                position: fixed;
                z-index: 100100;
                right: 22px;
                bottom: 22px;
                display: grid;
                grid-template-columns: auto 1fr auto;
                align-items: center;
                gap: 11px;
                width: min(410px, calc(100vw - 30px));
                padding: 13px 14px;
                border: 1px solid var(--kwa-border);
                border-radius: 13px;
                background: #fff;
                color: var(--kwa-text) !important;
                box-shadow: 0 13px 40px rgba(15, 29, 51, 0.23);
                opacity: 0;
                text-decoration: none !important;
                transform: translateY(18px);
                transition: 0.2s ease;
            }

            .keyword-alerts-toast.visible {
                opacity: 1;
                transform: translateY(0);
            }

            .keyword-alerts-toast-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 37px;
                height: 37px;
                border-radius: 10px;
                background: var(--kwa-primary-soft);
                color: var(--kwa-primary);
            }

            .keyword-alerts-toast-content {
                display: flex;
                flex-direction: column;
                gap: 2px;
            }

            .keyword-alerts-toast-content span {
                color: var(--kwa-muted);
                font-size: 11px;
            }

            .keyword-alerts-toast-close {
                border: 0;
                background: transparent;
                cursor: pointer;
            }

            @media (max-width: 700px) {
                .keyword-alerts-overlay {
                    align-items: flex-end;
                    padding: 0;
                }

                .keyword-alerts-modal {
                    width: 100%;
                    max-height: 94vh;
                    border-radius: 18px 18px 0 0;
                }

                .keyword-alerts-tabs {
                    padding: 6px 7px 0;
                }

                .keyword-alerts-tab {
                    flex: 1;
                    min-width: 0;
                    padding: 11px 5px;
                    font-size: 12px;
                }

                .keyword-alerts-panel {
                    padding: 13px;
                }

                .keyword-alerts-toolbar,
                .keyword-alerts-rules-header {
                    align-items: stretch;
                    flex-direction: column;
                }

                .keyword-alerts-alert-card {
                    grid-template-columns: 1fr;
                }

                .keyword-alerts-rule-chips {
                    padding-right: 0;
                }

                .keyword-alerts-field-row {
                    align-items: stretch;
                    flex-direction: column;
                    gap: 8px;
                }

                .keyword-alerts-field-row select {
                    width: 100%;
                }

                .keyword-alerts-rule-form {
                    padding: 14px;
                }
            }
        `);
    }
})();
/* SOURCE_END: מעקב חכם לפי מילות מפתח.txt */
        }
    },

    {
        id: "chat-edit-enter",
        name: "שליחת עריכת הודעה בצ׳אט באמצעות Enter – מתמחים טופ",
        description: "Enter שומר עריכת הודעה קיימת בצ׳אט, ו-Shift+Enter יורד שורה. לא משנה שום שדה אחר.",
        category: "צ'אט",
        originalFile: "שליחת עריכת הודעה בצ׳אט באמצעות Enter.txt",
        version: "1.1.0",
        author: "Moishy",
        runAt: "document-start",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "36e2781fc83a8262ae0f59453406a28c2360d17de8d05f687bc81cf0c9a665bb",
        originalBodySha256: "4bd12ac7522fd45635c17a081cb962f814199787222c849f040180d4c009e4e0",
        embeddedBodySha256: "9dda9cb41e53edf712a89025df643d91957d5631a6988d6cb8e326435267e9aa",
        mergeChanges: ["הוחרגו חלונות Keyword Alerts, Reading List ו־Private User Notes מזיהוי Enter של עריכת צ׳אט."],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: שליחת עריכת הודעה בצ׳אט באמצעות Enter.txt */
(function () {
    'use strict';

    let sending = false;

    /**
     * מחזיר טקסט מזהה של כפתור.
     */
    function getButtonText(button) {
        return [
            button.textContent,
            button.value,
            button.title,
            button.getAttribute('aria-label'),
            button.getAttribute('data-original-title'),
            button.getAttribute('data-title')
        ]
            .filter(Boolean)
            .join(' ')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }

    /**
     * בודק אם אלמנט מוצג ופעיל.
     */
    function isVisible(element) {
        if (!element || !element.isConnected) {
            return false;
        }

        if (
            element.disabled ||
            element.getAttribute('aria-disabled') === 'true'
        ) {
            return false;
        }

        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();

        return (
            style.display !== 'none' &&
            style.visibility !== 'hidden' &&
            style.opacity !== '0' &&
            rect.width > 0 &&
            rect.height > 0
        );
    }

    /**
     * בודק האם זה שדה הקלדה.
     */
    function isTextField(element) {
        return (
            element instanceof HTMLTextAreaElement ||
            (
                element instanceof HTMLInputElement &&
                ['text', 'search', ''].includes(element.type)
            ) ||
            element?.isContentEditable === true
        );
    }

    /**
     * מחפש את האזור הקרוב ביותר שמכיל את שדה העריכה.
     */
    function getPossibleContainers(field) {
        const containers = [];

        const selectors = [
            '[component="chat/message/edit"]',
            '[component*="chat"][component*="edit"]',
            '[data-action*="edit"]',
            '.chat-message-edit',
            '.chat-message-editing',
            '.message-edit',
            '.edit-message',
            '.editing',
            '.modal.show',
            '.modal.in',
            '.modal',
            '.chat-modal',
            '.chats-full',
            '.chat-room',
            '.chat-content',
            'form'
        ];

        for (const selector of selectors) {
            const container = field.closest(selector);

            if (container && !containers.includes(container)) {
                containers.push(container);
            }
        }

        let parent = field.parentElement;

        for (let i = 0; parent && i < 8; i++) {
            if (!containers.includes(parent)) {
                containers.push(parent);
            }

            parent = parent.parentElement;
        }

        return containers;
    }

    /**
     * מחפש כפתור שמירה/שליחה בתוך אזור נתון.
     */
    function findSaveButton(container) {
        if (!container) {
            return null;
        }

        const preferredSelectors = [
            '[component="chat/message/edit-submit"]',
            '[component="chat/message/save"]',
            '[component="chat/send"]',
            '[data-action="save"]',
            '[data-action="submit"]',
            '[data-action="send"]',
            '[data-action="update"]',
            'button[type="submit"]',
            'input[type="submit"]',
            '.btn-primary',
            '.btn-success',
            '.send',
            '.save',
            '.submit'
        ];

        const candidates = [];

        for (const selector of preferredSelectors) {
            container.querySelectorAll(selector).forEach(button => {
                if (!candidates.includes(button)) {
                    candidates.push(button);
                }
            });
        }

        container
            .querySelectorAll(
                'button, input[type="button"], input[type="submit"], [role="button"]'
            )
            .forEach(button => {
                if (!candidates.includes(button)) {
                    candidates.push(button);
                }
            });

        const saveWords = [
            'שלח',
            'שליחה',
            'שמור',
            'שמירה',
            'עדכן',
            'אישור',
            'save',
            'send',
            'update',
            'submit',
            'confirm'
        ];

        const cancelWords = [
            'ביטול',
            'בטל',
            'סגור',
            'מחיקה',
            'cancel',
            'close',
            'delete',
            'remove'
        ];

        for (const button of candidates) {
            if (!isVisible(button)) {
                continue;
            }

            const text = getButtonText(button);

            if (cancelWords.some(word => text.includes(word))) {
                continue;
            }

            if (saveWords.some(word => text.includes(word))) {
                return button;
            }
        }

        /*
         * בחלק מגרסאות הצ׳אט כפתור העריכה הוא פשוט
         * הכפתור הראשי היחיד בחלון, ללא טקסט ברור.
         */
        const primaryButtons = candidates.filter(button => {
            if (!isVisible(button)) {
                return false;
            }

            const text = getButtonText(button);

            if (cancelWords.some(word => text.includes(word))) {
                return false;
            }

            return (
                button.matches('.btn-primary, .btn-success') ||
                button.type === 'submit'
            );
        });

        return primaryButtons.length === 1 ? primaryButtons[0] : null;
    }

    /**
     * בודק שהשדה אכן שייך לעריכת הודעה קיימת,
     * ולא לשדה כתיבת הודעה חדשה.
     */
    function findEditContext(field) {
        const containers = getPossibleContainers(field);

        for (const container of containers) {
            const button = findSaveButton(container);

            if (!button) {
                continue;
            }

            const contextText = [
                container.className,
                container.id,
                container.getAttribute('component'),
                container.getAttribute('data-action'),
                container.getAttribute('aria-label'),
                container.getAttribute('role'),
                field.placeholder,
                field.getAttribute('aria-label')
            ]
                .filter(Boolean)
                .join(' ')
                .toLowerCase();

            const editIndicators = [
                'edit',
                'editing',
                'עריכה',
                'ערוך',
                'update'
            ];

            if (editIndicators.some(word => contextText.includes(word))) {
                return { container, button };
            }

            /*
             * במקרה שחלון העריכה לא מכיל שם מחלקה ברור:
             * נזהה אותו לפי כך שהשדה וכפתור השמירה נמצאים
             * בתוך חלון מודאלי פתוח.
             */
            if (
                container.matches(
                    '.modal.show, .modal.in, [role="dialog"], .chat-message-edit'
                )
            ) {
                return { container, button };
            }
        }

        return null;
    }

    /**
     * שליחת העריכה.
     */
    function submitEdit(field, context) {
        if (sending) {
            return;
        }

        sending = true;

        const { button } = context;

        /*
         * אירועי עכבר מלאים, משום שבחלק מגרסאות NodeBB
         * מאזינים ל-mousedown ולא רק ל-click.
         */
        button.dispatchEvent(
            new MouseEvent('mousedown', {
                bubbles: true,
                cancelable: true,
                view: window
            })
        );

        button.dispatchEvent(
            new MouseEvent('mouseup', {
                bubbles: true,
                cancelable: true,
                view: window
            })
        );

        button.click();

        /*
         * גיבוי לטופס רגיל.
         */
        const form = field.closest('form');

        if (form && field.isConnected) {
            window.setTimeout(() => {
                if (field.isConnected && typeof form.requestSubmit === 'function') {
                    try {
                        form.requestSubmit(button);
                    } catch {
                        form.requestSubmit();
                    }
                }
            }, 50);
        }

        window.setTimeout(() => {
            sending = false;
        }, 600);
    }

    /**
     * תפיסת Enter בשלב המוקדם ביותר.
     */
    function handleEnter(event) {
        if (
            event.key !== 'Enter' &&
            event.code !== 'Enter' &&
            event.keyCode !== 13
        ) {
            return;
        }

        if (
            event.shiftKey ||
            event.ctrlKey ||
            event.altKey ||
            event.metaKey ||
            event.isComposing
        ) {
            return;
        }

        const field = event.target;

        /*
         * MERGE FIX: חלונות פנימיים של מודולים אחרים אינם חלונות עריכת צ׳אט.
         * ההחרגה ממוקדת ואינה משנה את זיהוי הצ׳אט המקורי.
         */
        if (
            field instanceof Element &&
            field.closest(
                '.keyword-alerts-overlay, .mrl-dialog-overlay, .mtpun-overlay'
            )
        ) {
            return;
        }

        if (!isTextField(field)) {
            return;
        }

        const context = findEditContext(field);

        if (!context) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        submitEdit(field, context);
    }

    /*
     * גם על document וגם על window, בשלב capture,
     * כדי להקדים את מנגנון ירידת השורה של הצ׳אט.
     */
    window.addEventListener('keydown', handleEnter, true);
    document.addEventListener('keydown', handleEnter, true);

    /*
     * גיבוי למקרה שהצ׳אט מטפל ב-keypress.
     */
    window.addEventListener(
        'keypress',
        function (event) {
            if (
                event.key !== 'Enter' ||
                event.shiftKey ||
                event.ctrlKey ||
                event.altKey ||
                event.metaKey
            ) {
                return;
            }

            const field = event.target;

            /*
             * MERGE FIX: חלונות פנימיים של מודולים אחרים אינם חלונות עריכת צ׳אט.
             * ההחרגה ממוקדת ואינה משנה את זיהוי הצ׳אט המקורי.
             */
            if (
                field instanceof Element &&
                field.closest(
                    '.keyword-alerts-overlay, .mrl-dialog-overlay, .mtpun-overlay'
                )
            ) {
                return;
            }

            if (!isTextField(field)) {
                return;
            }

            if (!findEditContext(field)) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
        },
        true
    );
})();
/* SOURCE_END: שליחת עריכת הודעה בצ׳אט באמצעות Enter.txt */
        }
    },

    {
        id: "online-user-status",
        name: "סטטוס משתמשים מחוברים – מתמחים טופ",
        description: "מציג נקודה ירוקה ליד משתמשים מחוברים בפרופילים, בצ׳אטים, בהתראות וברשימת המשתמשים",
        category: "משתמשים ופרופיל",
        originalFile: "סטטוס משתמשים מחוברים.txt",
        version: "5.0.0",
        author: "Moishy",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "458dac94d4b7658c44c70f006973b1ba38df245f1cf98ee4fc438e287faa29bb",
        originalBodySha256: "951184a67e3ee2855af52bc45d58810233a46c843a6a6d12a78c3f9e5ff36e3e",
        embeddedBodySha256: "951184a67e3ee2855af52bc45d58810233a46c843a6a6d12a78c3f9e5ff36e3e",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: סטטוס משתמשים מחוברים.txt */
(function () {
    'use strict';

    const CONFIG = {
        refreshInterval: 60 * 1000,
        scanInterval: 2000,
        onlineColor: '#22bd59',
        borderColor: '#ffffff'
    };

    const HOST_CLASS = 'moishy-online-status-host';
    const DOT_CLASS = 'moishy-online-status-dot';
    const STYLE_ID = 'moishy-online-status-style-v5';

    let onlineUids = new Set();
    let onlineUsernames = new Set();

    let refreshRunning = false;
    let scanScheduled = false;
    let positionScheduled = false;

    /*
     * שמירת הקשר בין כל תמונה לבין העיגול שלה.
     */
    const trackedAvatars = new Map();

    /* =========================================================
       ניקוי שאריות מכל הגרסאות הקודמות
       ========================================================= */

    function cleanupOldVersions() {
        document.querySelectorAll([
            '#moishy-online-dots-layer',
            '.moishy-online-overlay-dot',
            '.moishy-online-dot',
            '.moishy-user-online-dot',
            '.moishy-status-dot',
            '.moishy-online-status-dot'
        ].join(',')).forEach(element => {
            /*
             * לא מוחקים את העיגולים של הגרסה הנוכחית
             * כשהם כבר מנוהלים במפה.
             */
            if (!Array.from(trackedAvatars.values()).some(
                record => record.dot === element
            )) {
                element.remove();
            }
        });

        document.querySelectorAll([
            '.moishy-online-host',
            '.moishy-profile-main-avatar',
            '.moishy-user-online',
            '.moishy-online-dot-host'
        ].join(',')).forEach(element => {
            element.classList.remove(
                'moishy-online-host',
                'moishy-profile-main-avatar',
                'moishy-user-online',
                'moishy-online-dot-host'
            );
        });

        /*
         * תיקון תמונות שקיבלו בטעות מחלקת מארח
         * בגרסאות קודמות.
         */
        document.querySelectorAll([
            `img.${HOST_CLASS}`,
            `.avatar.${HOST_CLASS}`,
            `.user-icon.${HOST_CLASS}`
        ].join(',')).forEach(element => {
            element.classList.remove(HOST_CLASS);
            element.style.removeProperty('overflow');
            element.style.removeProperty('position');
        });

        /*
         * פירוק עטיפות שנוצרו בגרסאות ישנות,
         * בלי למחוק את תמונת המשתמש שבתוכן.
         */
        document.querySelectorAll([
            '.moishy-online-wrapper',
            '.moishy-avatar-online-wrapper'
        ].join(',')).forEach(wrapper => {
            const parent = wrapper.parentNode;

            if (!parent) {
                wrapper.remove();
                return;
            }

            while (wrapper.firstChild) {
                parent.insertBefore(wrapper.firstChild, wrapper);
            }

            wrapper.remove();
        });
    }

    /* =========================================================
       עיצוב
       ========================================================= */

    function addStyles() {
        if (document.getElementById(STYLE_ID)) {
            return;
        }

        const style = document.createElement('style');
        style.id = STYLE_ID;

        style.textContent = `
            /*
             * המחלקה מתווספת רק לאלמנט חיצוני,
             * לעולם לא ישירות לתמונה.
             */
            .${HOST_CLASS} {
                position: relative !important;
                overflow: visible !important;
            }

            .${DOT_CLASS} {
                position: absolute !important;

                left: var(--moishy-dot-left, 0px) !important;
                top: var(--moishy-dot-top, 0px) !important;

                width: 12px !important;
                height: 12px !important;
                min-width: 12px !important;
                min-height: 12px !important;

                padding: 0 !important;
                margin: 0 !important;

                transform: translate(-50%, -50%) !important;

                border: 2px solid ${CONFIG.borderColor} !important;
                border-radius: 50% !important;
                box-sizing: border-box !important;

                background: ${CONFIG.onlineColor} !important;

                box-shadow:
                    0 0 0 1px rgba(0, 0, 0, 0.10),
                    0 1px 3px rgba(0, 0, 0, 0.25) !important;

                z-index: 9999 !important;
                pointer-events: none !important;
            }

            .${DOT_CLASS}.moishy-small-dot {
                width: 9px !important;
                height: 9px !important;
                min-width: 9px !important;
                min-height: 9px !important;
                border-width: 1.5px !important;
            }

            .${DOT_CLASS}.moishy-large-dot {
                width: 15px !important;
                height: 15px !important;
                min-width: 15px !important;
                min-height: 15px !important;
                border-width: 2.5px !important;
            }

            /*
             * הסקריפט אינו משנה את צורת התמונה.
             * תמונות שהאתר הגדיר כעגולות נשארות עגולות.
             */
            img.avatar,
            img[class*="avatar"],
            [component="user/picture"] img,
            [data-component="user/picture"] img {
                object-fit: cover;
            }
        `;

        document.head.appendChild(style);
    }

    /* =========================================================
       פונקציות עזר
       ========================================================= */

    function normalizeUsername(value) {
        return String(value || '')
            .trim()
            .replace(/^@/, '')
            .replace(/\s+/g, ' ')
            .toLowerCase();
    }

    function normalizeUid(value) {
        const parsed = Number.parseInt(value, 10);

        return Number.isFinite(parsed) && parsed > 0
            ? String(parsed)
            : '';
    }

    function isVisible(element) {
        if (!(element instanceof Element)) {
            return false;
        }

        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();

        return (
            rect.width > 0 &&
            rect.height > 0 &&
            style.display !== 'none' &&
            style.visibility !== 'hidden' &&
            Number.parseFloat(style.opacity || '1') !== 0
        );
    }

    function isProfilePage() {
        return /^\/user\/[^/]+/i.test(location.pathname);
    }

    function isUsersPage() {
        return /^\/users(?:\/|$)/i.test(location.pathname);
    }

    function getProfileUsernameFromUrl() {
        const match = location.pathname.match(/^\/user\/([^/?#]+)/i);

        if (!match) {
            return '';
        }

        try {
            return normalizeUsername(
                decodeURIComponent(match[1])
            );
        } catch {
            return normalizeUsername(match[1]);
        }
    }

    function extractUsernameFromLink(element) {
        if (!(element instanceof Element)) {
            return '';
        }

        const link =
            element.matches('a[href*="/user/"]')
                ? element
                : element.closest('a[href*="/user/"]') ||
                  element.querySelector('a[href*="/user/"]');

        if (!link) {
            return '';
        }

        const href = link.getAttribute('href') || '';
        const match = href.match(/\/user\/([^/?#]+)/i);

        if (!match) {
            return '';
        }

        try {
            return normalizeUsername(
                decodeURIComponent(match[1])
            );
        } catch {
            return normalizeUsername(match[1]);
        }
    }

    function looksLikeAvatar(element) {
        if (!(element instanceof Element)) {
            return false;
        }

        const rect = element.getBoundingClientRect();

        if (
            rect.width < 14 ||
            rect.height < 14 ||
            rect.width > 450 ||
            rect.height > 450
        ) {
            return false;
        }

        if (element.matches('img')) {
            const src = element.getAttribute('src') || '';
            const className = String(element.className || '');

            return Boolean(
                /avatar|profile|user/i.test(className) ||
                /avatar|profile|uploads\/profile/i.test(src) ||
                element.closest(
                    '[data-uid], [data-username], [component*="user"]'
                )
            );
        }

        return element.matches([
            '.avatar',
            '.user-icon',
            '[component="user/picture"]',
            '[data-component="user/picture"]',
            '[class*="avatar"]'
        ].join(','));
    }

    function getUserData(element, stopAt = null) {
        let uid = '';
        let username = '';

        let current = element;

        for (
            let depth = 0;
            current && depth < 14;
            depth++, current = current.parentElement
        ) {
            if (!(current instanceof Element)) {
                break;
            }

            uid =
                uid ||
                normalizeUid(
                    current.dataset.uid ||
                    current.getAttribute('data-uid') ||
                    current.getAttribute('data-user-id') ||
                    current.getAttribute('data-userid')
                );

            username =
                username ||
                normalizeUsername(
                    current.dataset.username ||
                    current.getAttribute('data-username') ||
                    current.getAttribute('data-userslug') ||
                    current.getAttribute('data-user-name')
                );

            username =
                username ||
                extractUsernameFromLink(current);

            if (uid && username) {
                break;
            }

            if (stopAt && current === stopAt) {
                break;
            }
        }

        if (!username) {
            username = normalizeUsername(
                element.getAttribute?.('data-username') ||
                element.getAttribute?.('alt') ||
                element.getAttribute?.('title')
            );
        }

        return {
            uid,
            username
        };
    }

    function isUserOnline(userData) {
        return Boolean(
            (userData.uid && onlineUids.has(userData.uid)) ||
            (
                userData.username &&
                onlineUsernames.has(userData.username)
            )
        );
    }

    /* =========================================================
       קבלת רשימת המחוברים
       ========================================================= */

    async function fetchJson(url) {
        const response = await fetch(url, {
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return response.json();
    }

    function extractUsersArray(data) {
        const possibleArrays = [
            data?.users,
            data?.onlineUsers,
            data?.members,
            data?.data?.users,
            data?.data?.onlineUsers,
            data?.payload?.users,
            data?.payload?.onlineUsers
        ];

        for (const array of possibleArrays) {
            if (Array.isArray(array)) {
                return array;
            }
        }

        return Array.isArray(data) ? data : [];
    }

    async function getOnlineUsersFromApi() {
        const endpoints = [
            '/api/users?section=online',
            '/api/users?section=online&sort=joindate',
            '/api/users/online'
        ];

        for (const endpoint of endpoints) {
            try {
                const data = await fetchJson(endpoint);
                const users = extractUsersArray(data);

                if (users.length) {
                    return users;
                }
            } catch {
                // עוברים לכתובת הבאה
            }
        }

        return [];
    }

    async function getOnlineUsersFromPage() {
        try {
            const response = await fetch(
                '/users?section=online',
                {
                    credentials: 'same-origin'
                }
            );

            if (!response.ok) {
                return [];
            }

            const html = await response.text();

            const copiedDocument = new DOMParser().parseFromString(
                html,
                'text/html'
            );

            const users = [];

            copiedDocument.querySelectorAll([
                '[data-uid]',
                '[data-username]',
                'a[href*="/user/"]'
            ].join(',')).forEach(element => {
                const container =
                    element.closest(
                        '[data-uid], [data-username]'
                    ) || element;

                const uid =
                    container.getAttribute('data-uid') ||
                    container.getAttribute('data-user-id') ||
                    '';

                const username =
                    container.getAttribute('data-username') ||
                    container.getAttribute('data-userslug') ||
                    extractUsernameFromLink(element) ||
                    '';

                if (uid || username) {
                    users.push({
                        uid,
                        username
                    });
                }
            });

            return users;
        } catch {
            return [];
        }
    }

    function storeOnlineUsers(users) {
        const newUids = new Set();
        const newUsernames = new Set();

        users.forEach(user => {
            if (!user || typeof user !== 'object') {
                return;
            }

            const status = String(
                user.status ||
                user.presence ||
                user.userStatus ||
                'online'
            ).toLowerCase();

            if (
                status &&
                ![
                    'online',
                    'available',
                    'active',
                    '1',
                    'true'
                ].includes(status)
            ) {
                return;
            }

            const uid = normalizeUid(
                user.uid ||
                user.userId ||
                user.userid ||
                user.id
            );

            const possibleNames = [
                user.username,
                user.userslug,
                user.name,
                user.displayname,
                user.displayName
            ];

            if (uid) {
                newUids.add(uid);
            }

            possibleNames.forEach(value => {
                const username = normalizeUsername(value);

                if (username) {
                    newUsernames.add(username);
                }
            });
        });

        onlineUids = newUids;
        onlineUsernames = newUsernames;
    }

    async function refreshOnlineUsers() {
        if (refreshRunning) {
            return;
        }

        refreshRunning = true;

        try {
            let users = await getOnlineUsersFromApi();

            if (!users.length) {
                users = await getOnlineUsersFromPage();
            }

            storeOnlineUsers(users);
            scheduleScan();
        } catch (error) {
            console.warn(
                '[סימון מחוברים – מתמחים טופ]',
                error
            );
        } finally {
            refreshRunning = false;
        }
    }

    /* =========================================================
       יצירת מארח חיצוני לעיגול
       ========================================================= */

    function chooseHost(avatar) {
        if (!(avatar instanceof Element)) {
            return null;
        }

        /*
         * אסור להחזיר את התמונה עצמה.
         * העיגול חייב להתווסף לאלמנט חיצוני.
         */

        const pictureContainer = avatar.closest([
            '[component="user/picture"]',
            '[data-component="user/picture"]',
            '[class*="avatar-wrapper"]',
            '[class*="profile-picture"]'
        ].join(','));

        if (
            pictureContainer &&
            pictureContainer !== avatar &&
            !pictureContainer.matches('img')
        ) {
            return pictureContainer;
        }

        const avatarContainer = avatar.closest(
            '.avatar, .user-icon'
        );

        if (
            avatarContainer &&
            avatarContainer !== avatar &&
            !avatarContainer.matches('img')
        ) {
            return avatarContainer;
        }

        const profileLink = avatar.closest(
            'a[href*="/user/"]'
        );

        if (
            profileLink &&
            profileLink !== avatar &&
            !profileLink.matches('img')
        ) {
            return profileLink;
        }

        /*
         * ברירת מחדל: ההורה הישיר של התמונה.
         */
        if (
            avatar.parentElement &&
            avatar.parentElement !== document.body &&
            !avatar.parentElement.matches('img')
        ) {
            return avatar.parentElement;
        }

        return null;
    }

    function createDot(avatar) {
        const existing = trackedAvatars.get(avatar);

        if (
            existing?.dot?.isConnected &&
            existing?.host?.isConnected
        ) {
            return existing;
        }

        /*
         * ניקוי כל שינוי ישן מהתמונה עצמה.
         */
        avatar.classList.remove(
            HOST_CLASS,
            'moishy-online-host',
            'moishy-online-dot-host'
        );

        avatar.style.removeProperty('overflow');
        avatar.style.removeProperty('position');

        const host = chooseHost(avatar);

        if (
            !host ||
            host === avatar ||
            host.matches('img')
        ) {
            return null;
        }

        /*
         * שמירת סגנונות קיימים.
         */
        host.classList.add(HOST_CLASS);

        const dot = document.createElement('span');
        dot.className = DOT_CLASS;
        dot.title = 'מחובר כעת';
        dot.setAttribute(
            'aria-label',
            'מחובר כעת'
        );

        host.appendChild(dot);

        const record = {
            host,
            dot
        };

        trackedAvatars.set(avatar, record);

        return record;
    }

    function removeDot(avatar) {
        const record = trackedAvatars.get(avatar);

        if (!record) {
            return;
        }

        record.dot?.remove();
        trackedAvatars.delete(avatar);

        if (
            record.host &&
            !record.host.querySelector(`.${DOT_CLASS}`)
        ) {
            record.host.classList.remove(HOST_CLASS);

            record.host.style.removeProperty(
                '--moishy-dot-left'
            );

            record.host.style.removeProperty(
                '--moishy-dot-top'
            );
        }
    }

    function positionDot(avatar) {
        const record = trackedAvatars.get(avatar);

        if (
            !record ||
            !avatar.isConnected ||
            !record.host?.isConnected ||
            !record.dot?.isConnected
        ) {
            removeDot(avatar);
            return;
        }

        if (!isVisible(avatar)) {
            record.dot.style.display = 'none';
            return;
        }

        const avatarRect = avatar.getBoundingClientRect();
        const hostRect = record.host.getBoundingClientRect();

        /*
         * מיקום בשמאל למטה של התמונה.
         */
        const left =
            avatarRect.left -
            hostRect.left +
            3;

        const top =
            avatarRect.bottom -
            hostRect.top -
            3;

        record.host.style.setProperty(
            '--moishy-dot-left',
            `${left}px`
        );

        record.host.style.setProperty(
            '--moishy-dot-top',
            `${top}px`
        );

        const size = Math.max(
            avatarRect.width,
            avatarRect.height
        );

        record.dot.classList.toggle(
            'moishy-small-dot',
            size <= 35
        );

        record.dot.classList.toggle(
            'moishy-large-dot',
            size >= 90
        );

        record.dot.style.display = 'block';
    }

    function showDot(avatar) {
        const record = createDot(avatar);

        if (record) {
            positionDot(avatar);
        }
    }

    function updateAllPositions() {
        for (const avatar of trackedAvatars.keys()) {
            positionDot(avatar);
        }
    }

    function schedulePositionUpdate() {
        if (positionScheduled) {
            return;
        }

        positionScheduled = true;

        requestAnimationFrame(() => {
            positionScheduled = false;
            updateAllPositions();
        });
    }

    /* =========================================================
       עמוד פרופיל
       ========================================================= */

    function findMainProfileAvatar() {
        if (!isProfilePage()) {
            return null;
        }

        const candidates = [];

        const selectors = [
            '[component="account/header"] img.avatar',
            '[component="account/header"] [component="user/picture"] img',
            '[component="account/header"] .user-icon',

            '.account-header img.avatar',
            '.account-header .user-icon',

            '.profile-header img.avatar',
            '.profile-header .user-icon',

            '.cover img.avatar',
            '.cover .user-icon',

            '.account img.avatar',
            '.account .user-icon',

            '[component="user/picture"] img',
            'img.avatar',
            '.user-icon'
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                if (
                    !candidates.includes(element) &&
                    looksLikeAvatar(element) &&
                    isVisible(element)
                ) {
                    candidates.push(element);
                }
            });
        });

        if (!candidates.length) {
            return null;
        }

        /*
         * בחירת תמונת הפרופיל הגדולה והעליונה ביותר.
         */
        candidates.sort((first, second) => {
            const firstRect =
                first.getBoundingClientRect();

            const secondRect =
                second.getBoundingClientRect();

            const firstScore =
                firstRect.width * firstRect.height -
                Math.max(0, firstRect.top) * 4;

            const secondScore =
                secondRect.width * secondRect.height -
                Math.max(0, secondRect.top) * 4;

            return secondScore - firstScore;
        });

        return candidates[0];
    }

    function scanProfile() {
        const usedAvatars = new Set();

        if (!isProfilePage()) {
            return usedAvatars;
        }

        const avatar = findMainProfileAvatar();

        if (!avatar) {
            return usedAvatars;
        }

        const userData = getUserData(avatar);

        if (!userData.username) {
            userData.username =
                getProfileUsernameFromUrl();
        }

        if (isUserOnline(userData)) {
            usedAvatars.add(avatar);
            showDot(avatar);
        } else {
            removeDot(avatar);
        }

        return usedAvatars;
    }

    /* =========================================================
       עמוד כל המשתמשים
       ========================================================= */

    function scanUsersPage() {
        const usedAvatars = new Set();

        if (!isUsersPage()) {
            return usedAvatars;
        }

        const selectors = [
            '[data-uid] img',
            '[data-username] img',
            '[component="user/picture"] img',
            '[data-component="user/picture"] img',
            'a[href*="/user/"] img',
            'img.avatar',
            '.user-icon'
        ];

        document.querySelectorAll(
            selectors.join(',')
        ).forEach(avatar => {
            if (
                !looksLikeAvatar(avatar) ||
                !isVisible(avatar)
            ) {
                return;
            }

            const userData = getUserData(avatar);

            if (
                !userData.uid &&
                !userData.username
            ) {
                return;
            }

            if (isUserOnline(userData)) {
                usedAvatars.add(avatar);
                showDot(avatar);
            } else {
                removeDot(avatar);
            }
        });

        return usedAvatars;
    }

    /* =========================================================
       זיהוי חלונות צ׳אט
       ========================================================= */

    function getChatRoots() {
        const roots = new Set();

        const selectors = [
            '.chat-modal',
            '.chat-main',
            '.chat-window',
            '.chat-list',
            '.chats-list',
            '.expanded-chat',

            '[component="chat"]',
            '[component="chat/main"]',
            '[component="chat/modal"]',
            '[component="chat/messages"]',
            '[component="chat/recent"]',
            '[component="chat/recent/room"]',

            '[data-component="chat"]',
            '[data-component*="chat/"]'
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                if (isVisible(element)) {
                    roots.add(element);
                }
            });
        });

        /*
         * זיהוי צ׳אט גם לפי שדה ההודעה.
         */
        document.querySelectorAll([
            'textarea[placeholder*="הודעת צ"]',
            'input[placeholder*="הודעת צ"]',
            'textarea[placeholder*="chat" i]',
            'input[placeholder*="chat" i]',
            '[contenteditable="true"][data-placeholder*="chat" i]',
            '[contenteditable="true"][aria-label*="chat" i]'
        ].join(',')).forEach(input => {
            if (!isVisible(input)) {
                return;
            }

            let current = input.parentElement;
            let bestCandidate = null;

            for (
                let depth = 0;
                current && depth < 14;
                depth++, current = current.parentElement
            ) {
                const rect =
                    current.getBoundingClientRect();

                if (
                    rect.width >= 250 &&
                    rect.height >= 180
                ) {
                    bestCandidate = current;
                }

                if (
                    current.matches?.(
                        '.chat-modal, .chat-main, .chat-window, ' +
                        '[component*="chat"], [data-component*="chat"]'
                    )
                ) {
                    bestCandidate = current;
                    break;
                }
            }

            if (bestCandidate) {
                roots.add(bestCandidate);
            }
        });

        return Array.from(roots);
    }

    function findItemRoot(avatar, mainRoot) {
        const selectors = [
            '[data-uid]',
            '[data-username]',
            '[component="chat/message"]',
            '[component="chat/recent/room"]',
            '[component="chat/recent/user"]',
            '.chat-message',
            '.chat-room',
            '.chat-item',
            '.message',
            'li'
        ];

        for (const selector of selectors) {
            const item = avatar.closest(selector);

            if (item && mainRoot.contains(item)) {
                return item;
            }
        }

        return avatar.parentElement || mainRoot;
    }

    function getUsernameFromItem(avatar, itemRoot) {
        const directData = getUserData(
            avatar,
            itemRoot
        );

        if (directData.username) {
            return directData.username;
        }

        const usernameElement =
            itemRoot.querySelector([
                '[component="chat/message/username"]',
                '[component="user/username"]',
                '[data-username]',
                '[data-userslug]',
                '.username',
                '.user-name',
                '.chat-username',
                'a[href*="/user/"]'
            ].join(','));

        if (!usernameElement) {
            return '';
        }

        return (
            normalizeUsername(
                usernameElement.getAttribute(
                    'data-username'
                ) ||
                usernameElement.getAttribute(
                    'data-userslug'
                )
            ) ||
            extractUsernameFromLink(usernameElement) ||
            normalizeUsername(
                usernameElement.textContent
            )
        );
    }

    function scanChats() {
        const usedAvatars = new Set();
        const chatRoots = getChatRoots();

        const avatarSelector = [
            'img.avatar',
            'img[class*="avatar"]',
            '.avatar img',
            '.user-icon',
            '[component="user/picture"] img',
            '[data-component="user/picture"] img',
            '[data-uid] img',
            '[data-username] img',
            'a[href*="/user/"] img'
        ].join(',');

        chatRoots.forEach(chatRoot => {
            chatRoot.querySelectorAll(
                avatarSelector
            ).forEach(avatar => {
                if (
                    !looksLikeAvatar(avatar) ||
                    !isVisible(avatar)
                ) {
                    return;
                }

                const itemRoot = findItemRoot(
                    avatar,
                    chatRoot
                );

                const userData = getUserData(
                    avatar,
                    itemRoot
                );

                if (!userData.username) {
                    userData.username =
                        getUsernameFromItem(
                            avatar,
                            itemRoot
                        );
                }

                if (
                    !userData.uid &&
                    !userData.username
                ) {
                    removeDot(avatar);
                    return;
                }

                if (isUserOnline(userData)) {
                    usedAvatars.add(avatar);
                    showDot(avatar);
                } else {
                    removeDot(avatar);
                }
            });
        });

        return usedAvatars;
    }

    /* =========================================================
       התראות
       ========================================================= */

    function getNotificationRoots() {
        const roots = new Set();

        const selectors = [
            '.notifications-list',
            '.notification-list',
            '.notifications',
            '[component="notifications/list"]',
            '[component="notifications"]',
            '[data-component="notifications/list"]'
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                if (isVisible(element)) {
                    roots.add(element);
                }
            });
        });

        /*
         * תפריט ההתראות עשוי להיות dropdown רגיל.
         */
        document.querySelectorAll(
            '.dropdown-menu'
        ).forEach(element => {
            if (
                isVisible(element) &&
                element.querySelector(
                    '[data-uid], [data-username], a[href*="/user/"]'
                )
            ) {
                roots.add(element);
            }
        });

        return Array.from(roots);
    }

    function scanNotifications() {
        const usedAvatars = new Set();

        const avatarSelector = [
            'img.avatar',
            'img[class*="avatar"]',
            '.avatar img',
            '.user-icon',
            '[component="user/picture"] img',
            '[data-uid] img',
            '[data-username] img',
            'a[href*="/user/"] img'
        ].join(',');

        getNotificationRoots().forEach(root => {
            root.querySelectorAll(
                avatarSelector
            ).forEach(avatar => {
                if (
                    !looksLikeAvatar(avatar) ||
                    !isVisible(avatar)
                ) {
                    return;
                }

                const itemRoot =
                    avatar.closest(
                        '[data-uid], [data-username], li, .notification'
                    ) || root;

                const userData = getUserData(
                    avatar,
                    itemRoot
                );

                if (!userData.username) {
                    const link =
                        itemRoot.querySelector(
                            'a[href*="/user/"]'
                        );

                    if (link) {
                        userData.username =
                            extractUsernameFromLink(link);
                    }
                }

                if (
                    !userData.uid &&
                    !userData.username
                ) {
                    return;
                }

                if (isUserOnline(userData)) {
                    usedAvatars.add(avatar);
                    showDot(avatar);
                } else {
                    removeDot(avatar);
                }
            });
        });

        return usedAvatars;
    }

    /* =========================================================
       ניקוי נקודות שלא נמצאות עוד באזורים הרצויים
       ========================================================= */

    function cleanupUnusedDots(usedAvatars) {
        for (const avatar of Array.from(
            trackedAvatars.keys()
        )) {
            if (
                !avatar.isConnected ||
                !usedAvatars.has(avatar)
            ) {
                removeDot(avatar);
            }
        }
    }

    /* =========================================================
       סריקה כוללת
       ========================================================= */

    function scanPage() {
        const usedAvatars = new Set();

        const results = [
            scanProfile(),
            scanUsersPage(),
            scanChats(),
            scanNotifications()
        ];

        results.forEach(result => {
            result.forEach(avatar => {
                usedAvatars.add(avatar);
            });
        });

        cleanupUnusedDots(usedAvatars);
        schedulePositionUpdate();
    }

    function scheduleScan() {
        if (scanScheduled) {
            return;
        }

        scanScheduled = true;

        requestAnimationFrame(() => {
            scanScheduled = false;
            scanPage();
        });
    }

    /* =========================================================
       טיפול בגלילה
       ========================================================= */

    function handleScroll() {
        /*
         * מזיז מיד את הנקודות הקיימות.
         */
        schedulePositionUpdate();

        /*
         * סורק פריטים חדשים שנטענו בגלילה.
         */
        clearTimeout(handleScroll.scanTimer);

        handleScroll.scanTimer = setTimeout(() => {
            scheduleScan();
        }, 100);
    }

    /* =========================================================
       הפעלה
       ========================================================= */

    function initialize() {
        cleanupOldVersions();
        addStyles();

        scanPage();
        refreshOnlineUsers();

        const observer = new MutationObserver(
            mutations => {
                let relevantChange = false;

                for (const mutation of mutations) {
                    if (
                        mutation.type === 'childList' &&
                        (
                            mutation.addedNodes.length ||
                            mutation.removedNodes.length
                        )
                    ) {
                        relevantChange = true;
                        break;
                    }

                    if (mutation.type === 'attributes') {
                        relevantChange = true;
                        break;
                    }
                }

                if (relevantChange) {
                    scheduleScan();
                }
            }
        );

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [
                'class',
                'style',
                'src',
                'href',
                'data-uid',
                'data-username',
                'data-userslug'
            ]
        });

        /*
         * גלילה בחלון הראשי ובחלונות פנימיים,
         * כגון רשימת הצ׳אטים וההתראות.
         */
        document.addEventListener(
            'scroll',
            handleScroll,
            true
        );

        window.addEventListener(
            'resize',
            () => {
                schedulePositionUpdate();
                scheduleScan();
            }
        );

        document.addEventListener(
            'click',
            () => {
                setTimeout(scheduleScan, 50);
                setTimeout(scheduleScan, 250);
                setTimeout(scheduleScan, 700);
            },
            true
        );

        window.addEventListener(
            'popstate',
            () => {
                setTimeout(() => {
                    cleanupOldVersions();
                    refreshOnlineUsers();
                    scheduleScan();
                }, 200);
            }
        );

        setInterval(
            refreshOnlineUsers,
            CONFIG.refreshInterval
        );

        /*
         * מטפל ברשימות שבהן האתר ממחזר אלמנטים בזמן גלילה.
         */
        setInterval(
            scheduleScan,
            CONFIG.scanInterval
        );
    }

    if (document.readyState === 'loading') {
        document.addEventListener(
            'DOMContentLoaded',
            initialize,
            {
                once: true
            }
        );
    } else {
        initialize();
    }
})();
/* SOURCE_END: סטטוס משתמשים מחוברים.txt */
        }
    },

    {
        id: "reading-list",
        name: "מתמחים טופ - רשימת קריאה ושמור לאחר כך",
        description: "שמירת פוסטים לרשימת קריאה אישית, חיפוש, הערות, ייצוא וייבוא - ללא API",
        category: "תוכן ופוסטים",
        originalFile: "רשימת קריאה ושמור לאחר כך.txt",
        version: "1.1.0",
        author: "פרוזי",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: ["mitmachim_reading_list_v1","mitmachim_reading_list_settings_v1"],
        sourceSha256: "cdc7c70d471272e9ec6580f12f1787fd97850fd9066d8bd037ac6c618c2f3fe7",
        originalBodySha256: "f70a0a9cea6cad396b088c780a8238df6f119d47980a9b363c75cd0ae32e9b4b",
        embeddedBodySha256: "f70a0a9cea6cad396b088c780a8238df6f119d47980a9b363c75cd0ae32e9b4b",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: רשימת קריאה ושמור לאחר כך.txt */
(function () {
    'use strict';

    const CONFIG = {
        storageKey: 'mitmachim_reading_list_v1',
        settingsKey: 'mitmachim_reading_list_settings_v1',

        buttonText: 'שמור לקריאה',
        savedButtonText: 'נשמר',

        maxPreviewLength: 260,
        maxTitleLength: 140,

        selectors: {
            posts: [
                '[component="post"]',
                '.posts-list .post-row',
                '.topic .post-row',
                'li.post-row',
                'article[data-pid]'
            ],

            postContent: [
                '[component="post/content"]',
                '.content',
                '.post-content',
                '.post-body',
                '[itemprop="text"]'
            ],

            postActions: [
                '[component="post/actions"]',
                '.post-tools',
                '.post-actions',
                '.post-footer',
                '.post-bar',
                '.clearfix.post-footer'
            ],

            username: [
                '[component="user/username"]',
                '.username',
                '.user-name',
                '[itemprop="author"]',
                '.post-author a'
            ],

            topicTitle: [
                '[component="topic/title"]',
                'h1.title',
                '.topic-title',
                '.topic-header h1',
                'h1'
            ],

            leftSidebar: [
                '[component="sidebar/left"]',
                '.sidebar-left',
                '#left-sidebar',
                '.left-sidebar',
                '.categories-sidebar',
                '.sidebar.col-lg-3',
                '.sidebar.col-md-3',
                '.sidebar'
            ]
        }
    };

    const ICONS = {
        bookmark: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 3.75A2.75 2.75 0 0 1 8.75 1h6.5A2.75 2.75 0 0 1 18 3.75V22l-6-3.75L6 22V3.75Zm2.75-.75A.75.75 0 0 0 8 3.75v14.64l4-2.5 4 2.5V3.75a.75.75 0 0 0-.75-.75h-6.5Z"/>
            </svg>
        `,

        bookmarkFilled: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.75 1A2.75 2.75 0 0 0 6 3.75V22l6-3.75L18 22V3.75A2.75 2.75 0 0 0 15.25 1h-6.5Z"/>
            </svg>
        `,

        search: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10.5 3a7.5 7.5 0 1 0 4.72 13.33l4.22 4.23 1.42-1.42-4.23-4.22A7.5 7.5 0 0 0 10.5 3Zm-5.5 7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"/>
            </svg>
        `,

        close: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6.7 5.3 5.3 5.29 5.3-5.3 1.4 1.42-5.29 5.3 5.3 5.3-1.42 1.4-5.3-5.29-5.3 5.3-1.4-1.42 5.29-5.3-5.3-5.3L6.7 5.3Z"/>
            </svg>
        `,

        trash: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 2h6l1 2h5v2h-2l-1 15H6L5 6H3V4h5l1-2Zm-.99 4 .87 13h6.24l.87-13H8.01ZM10 8h2v8h-2V8Zm4 0h2v8h-2V8Z"/>
            </svg>
        `,

        check: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9.2 17.6-5.3-5.3 1.4-1.4 3.9 3.88 9.5-9.5 1.4 1.42-10.9 10.9Z"/>
            </svg>
        `,

        copy: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 2h11a3 3 0 0 1 3 3v11h-2V5a1 1 0 0 0-1-1H8V2ZM5 6h11a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5Z"/>
            </svg>
        `,

        edit: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m16.86 2.59 4.55 4.55L8.55 20H4v-4.55L16.86 2.59Zm0 2.83L6 16.28V18h1.72L18.58 7.14l-1.72-1.72ZM14 20h8v2h-8v-2Z"/>
            </svg>
        `,

        export: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11 3h2v10.17l3.59-3.58L18 11l-6 6-6-6 1.41-1.41L11 13.17V3ZM4 19h16v2H4v-2Z"/>
            </svg>
        `,

        import: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11 21h2V10.83l3.59 3.58L18 13l-6-6-6 6 1.41 1.41L11 10.83V21ZM4 3h16v2H4V3Z"/>
            </svg>
        `,

        external: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 3h7v7h-2V6.41l-8.3 8.3-1.4-1.42L17.58 5H14V3ZM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/>
            </svg>
        `
    };

    GM_addStyle(`
        :root {
            --mrl-primary: #337ab7;
            --mrl-primary-hover: #286090;
            --mrl-primary-soft: rgba(51, 122, 183, 0.11);
            --mrl-success: #248547;
            --mrl-danger: #c53939;
            --mrl-warning: #a56600;
            --mrl-text: #23272f;
            --mrl-muted: #737b87;
            --mrl-border: #dfe3e8;
            --mrl-bg: #ffffff;
            --mrl-bg-soft: #f5f7f9;
            --mrl-shadow: 0 12px 38px rgba(0, 0, 0, 0.18);
        }

        body.mrl-no-scroll {
            overflow: hidden !important;
        }

        .mrl-post-button {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 4px !important;
            min-width: 28px !important;
            height: 27px !important;
            margin: 0 3px !important;
            padding: 0 7px !important;
            border: 0 !important;
            border-radius: 5px !important;
            background: transparent !important;
            color: var(--mrl-primary) !important;
            font-size: 12px !important;
            font-weight: 500 !important;
            line-height: 1 !important;
            cursor: pointer !important;
            box-shadow: none !important;
            vertical-align: middle !important;
            transition:
                background-color 0.16s ease,
                color 0.16s ease,
                transform 0.16s ease !important;
        }

        .mrl-post-button:hover,
        .mrl-post-button:focus-visible {
            background: var(--mrl-primary-soft) !important;
            color: var(--mrl-primary-hover) !important;
            outline: none !important;
        }

        .mrl-post-button:active {
            transform: scale(0.95);
        }

        .mrl-post-button.is-saved {
            color: var(--mrl-success) !important;
            background: rgba(36, 133, 71, 0.1) !important;
        }

        .mrl-post-button svg {
            width: 15px !important;
            height: 15px !important;
            flex: 0 0 auto !important;
            fill: currentColor !important;
        }

        .mrl-post-button .mrl-button-label {
            white-space: nowrap !important;
        }

        @media (max-width: 650px) {
            .mrl-post-button .mrl-button-label {
                display: none !important;
            }

            .mrl-post-button {
                width: 29px !important;
                padding: 0 !important;
            }
        }

        /* שילוב בסרגל הצד */
        #mrl-sidebar-entry {
            position: relative !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
            margin: 4px 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
            direction: rtl !important;
        }

        #mrl-sidebar-entry.mrl-in-list {
            width: auto !important;
        }

        #mrl-sidebar-button {
            position: relative !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 34px !important;
            height: 34px !important;
            min-width: 34px !important;
            min-height: 34px !important;
            padding: 0 !important;
            border: 0 !important;
            border-radius: 8px !important;
            background: transparent !important;
            color: #637487 !important;
            cursor: pointer !important;
            box-shadow: none !important;
            transition:
                background-color 0.16s ease,
                color 0.16s ease,
                transform 0.16s ease !important;
        }

        #mrl-sidebar-button:hover,
        #mrl-sidebar-button:focus-visible {
            background: rgba(51, 122, 183, 0.10) !important;
            color: var(--mrl-primary) !important;
            outline: none !important;
        }

        #mrl-sidebar-button:active {
            transform: scale(0.96) !important;
        }

        #mrl-sidebar-button svg {
            width: 21px !important;
            height: 21px !important;
            fill: currentColor !important;
            flex: 0 0 auto !important;
        }

        .mrl-sidebar-label {
            display: none !important;
        }

        #mrl-sidebar-count {
            position: absolute !important;
            top: -2px !important;
            right: -2px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            min-width: 16px !important;
            height: 16px !important;
            padding: 0 4px !important;
            border-radius: 999px !important;
            background: #1f73ff !important;
            color: #fff !important;
            font-size: 10px !important;
            font-weight: 700 !important;
            line-height: 1 !important;
            border: 2px solid #fff !important;
            box-sizing: border-box !important;
        }

        #mrl-sidebar-count:empty,
        #mrl-sidebar-count[data-count="0"] {
            display: none !important;
        }

        .mrl-sr-only {
            position: absolute !important;
            width: 1px !important;
            height: 1px !important;
            padding: 0 !important;
            margin: -1px !important;
            overflow: hidden !important;
            clip: rect(0, 0, 0, 0) !important;
            white-space: nowrap !important;
            border: 0 !important;
        }

        #mrl-overlay {
            position: fixed !important;
            inset: 0 !important;
            z-index: 100000 !important;
            display: none;
            align-items: center !important;
            justify-content: center !important;
            padding: 16px !important;
            background: rgba(16, 20, 25, 0.54) !important;
            backdrop-filter: blur(2px);
            direction: rtl !important;
            box-sizing: border-box !important;
        }

        #mrl-overlay.is-open {
            display: flex !important;
        }

        #mrl-modal {
            display: flex !important;
            flex-direction: column !important;
            width: min(920px, 96vw) !important;
            max-height: min(840px, 92vh) !important;
            overflow: hidden !important;
            border: 1px solid var(--mrl-border) !important;
            border-radius: 14px !important;
            background: var(--mrl-bg) !important;
            box-shadow: var(--mrl-shadow) !important;
            color: var(--mrl-text) !important;
            font-family: inherit !important;
        }

        .mrl-modal-header {
            display: flex !important;
            align-items: center !important;
            gap: 12px !important;
            min-height: 62px !important;
            padding: 12px 16px !important;
            border-bottom: 1px solid var(--mrl-border) !important;
            background: var(--mrl-bg) !important;
        }

        .mrl-modal-title-wrap {
            min-width: 0 !important;
            flex: 1 !important;
        }

        .mrl-modal-title {
            margin: 0 !important;
            color: var(--mrl-text) !important;
            font-size: 19px !important;
            font-weight: 700 !important;
            line-height: 1.3 !important;
        }

        .mrl-modal-subtitle {
            margin-top: 3px !important;
            color: var(--mrl-muted) !important;
            font-size: 12px !important;
        }

        .mrl-icon-button {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 34px !important;
            height: 34px !important;
            padding: 0 !important;
            border: 0 !important;
            border-radius: 7px !important;
            background: transparent !important;
            color: var(--mrl-muted) !important;
            cursor: pointer !important;
            transition:
                color 0.16s ease,
                background-color 0.16s ease !important;
        }

        .mrl-icon-button:hover {
            background: var(--mrl-bg-soft) !important;
            color: var(--mrl-text) !important;
        }

        .mrl-icon-button svg {
            width: 19px !important;
            height: 19px !important;
            fill: currentColor !important;
        }

        .mrl-toolbar {
            display: flex !important;
            flex-wrap: wrap !important;
            align-items: center !important;
            gap: 8px !important;
            padding: 11px 14px !important;
            border-bottom: 1px solid var(--mrl-border) !important;
            background: var(--mrl-bg-soft) !important;
        }

        .mrl-search-wrap {
            position: relative !important;
            min-width: 220px !important;
            flex: 1 1 300px !important;
        }

        .mrl-search-wrap svg {
            position: absolute !important;
            top: 50% !important;
            right: 11px !important;
            width: 17px !important;
            height: 17px !important;
            transform: translateY(-50%) !important;
            fill: var(--mrl-muted) !important;
            pointer-events: none !important;
        }

        #mrl-search {
            width: 100% !important;
            height: 38px !important;
            box-sizing: border-box !important;
            padding: 0 38px 0 12px !important;
            border: 1px solid var(--mrl-border) !important;
            border-radius: 8px !important;
            background: var(--mrl-bg) !important;
            color: var(--mrl-text) !important;
            font-family: inherit !important;
            font-size: 13px !important;
            outline: none !important;
        }

        #mrl-search:focus {
            border-color: var(--mrl-primary) !important;
            box-shadow: 0 0 0 3px var(--mrl-primary-soft) !important;
        }

        .mrl-filter-group {
            display: inline-flex !important;
            align-items: center !important;
            padding: 3px !important;
            border: 1px solid var(--mrl-border) !important;
            border-radius: 8px !important;
            background: var(--mrl-bg) !important;
        }

        .mrl-filter-button {
            height: 30px !important;
            padding: 0 10px !important;
            border: 0 !important;
            border-radius: 6px !important;
            background: transparent !important;
            color: var(--mrl-muted) !important;
            font-family: inherit !important;
            font-size: 12px !important;
            cursor: pointer !important;
        }

        .mrl-filter-button.is-active {
            background: var(--mrl-primary) !important;
            color: #fff !important;
        }

        .mrl-toolbar-button {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 6px !important;
            height: 36px !important;
            padding: 0 11px !important;
            border: 1px solid var(--mrl-border) !important;
            border-radius: 8px !important;
            background: var(--mrl-bg) !important;
            color: var(--mrl-text) !important;
            font-family: inherit !important;
            font-size: 12px !important;
            font-weight: 600 !important;
            cursor: pointer !important;
            white-space: nowrap !important;
        }

        .mrl-toolbar-button:hover {
            border-color: var(--mrl-primary) !important;
            color: var(--mrl-primary) !important;
        }

        .mrl-toolbar-button.danger:hover {
            border-color: var(--mrl-danger) !important;
            color: var(--mrl-danger) !important;
        }

        .mrl-toolbar-button svg {
            width: 16px !important;
            height: 16px !important;
            fill: currentColor !important;
        }

        #mrl-list {
            flex: 1 1 auto !important;
            overflow: auto !important;
            padding: 13px !important;
            background: var(--mrl-bg-soft) !important;
            overscroll-behavior: contain !important;
        }

        .mrl-item {
            position: relative !important;
            margin-bottom: 10px !important;
            padding: 13px 14px !important;
            border: 1px solid var(--mrl-border) !important;
            border-radius: 10px !important;
            background: var(--mrl-bg) !important;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
            transition:
                border-color 0.16s ease,
                box-shadow 0.16s ease !important;
        }

        .mrl-item:hover {
            border-color: #c5ccd4 !important;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.07) !important;
        }

        .mrl-item.is-read {
            opacity: 0.72 !important;
        }

        .mrl-item.is-read .mrl-item-title {
            font-weight: 500 !important;
        }

        .mrl-item-top {
            display: flex !important;
            align-items: flex-start !important;
            gap: 10px !important;
        }

        .mrl-item-main {
            min-width: 0 !important;
            flex: 1 !important;
        }

        .mrl-item-title {
            display: block !important;
            overflow: hidden !important;
            margin: 0 0 5px !important;
            color: var(--mrl-primary) !important;
            font-size: 14px !important;
            font-weight: 700 !important;
            line-height: 1.45 !important;
            text-decoration: none !important;
            text-overflow: ellipsis !important;
            white-space: nowrap !important;
        }

        .mrl-item-title:hover {
            color: var(--mrl-primary-hover) !important;
            text-decoration: underline !important;
        }

        .mrl-item-meta {
            display: flex !important;
            flex-wrap: wrap !important;
            align-items: center !important;
            gap: 5px 10px !important;
            color: var(--mrl-muted) !important;
            font-size: 11px !important;
            line-height: 1.5 !important;
        }

        .mrl-item-preview {
            display: -webkit-box !important;
            overflow: hidden !important;
            margin: 10px 0 0 !important;
            color: #474d56 !important;
            font-size: 12.5px !important;
            line-height: 1.65 !important;
            white-space: normal !important;
            -webkit-box-orient: vertical !important;
            -webkit-line-clamp: 3 !important;
        }

        .mrl-item-note {
            margin-top: 9px !important;
            padding: 8px 10px !important;
            border-right: 3px solid var(--mrl-primary) !important;
            border-radius: 5px !important;
            background: var(--mrl-primary-soft) !important;
            color: #37404a !important;
            font-size: 12px !important;
            line-height: 1.5 !important;
            white-space: pre-wrap !important;
        }

        .mrl-item-actions {
            display: flex !important;
            flex-wrap: wrap !important;
            align-items: center !important;
            gap: 5px !important;
            margin-top: 11px !important;
        }

        .mrl-item-action {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 5px !important;
            min-height: 29px !important;
            padding: 0 8px !important;
            border: 1px solid var(--mrl-border) !important;
            border-radius: 6px !important;
            background: var(--mrl-bg) !important;
            color: var(--mrl-muted) !important;
            font-family: inherit !important;
            font-size: 11px !important;
            cursor: pointer !important;
        }

        .mrl-item-action:hover {
            border-color: var(--mrl-primary) !important;
            color: var(--mrl-primary) !important;
        }

        .mrl-item-action.danger:hover {
            border-color: var(--mrl-danger) !important;
            color: var(--mrl-danger) !important;
        }

        .mrl-item-action svg {
            width: 14px !important;
            height: 14px !important;
            fill: currentColor !important;
        }

        .mrl-read-badge {
            display: inline-flex !important;
            align-items: center !important;
            gap: 4px !important;
            padding: 2px 7px !important;
            border-radius: 999px !important;
            background: rgba(36, 133, 71, 0.1) !important;
            color: var(--mrl-success) !important;
            font-size: 10px !important;
            font-weight: 600 !important;
        }

        .mrl-empty {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            min-height: 310px !important;
            padding: 30px !important;
            color: var(--mrl-muted) !important;
            text-align: center !important;
        }

        .mrl-empty svg {
            width: 52px !important;
            height: 52px !important;
            margin-bottom: 14px !important;
            fill: #aab2bc !important;
        }

        .mrl-empty-title {
            margin-bottom: 5px !important;
            color: var(--mrl-text) !important;
            font-size: 16px !important;
            font-weight: 700 !important;
        }

        .mrl-empty-text {
            max-width: 390px !important;
            font-size: 12.5px !important;
            line-height: 1.7 !important;
        }

        .mrl-modal-footer {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 10px !important;
            min-height: 47px !important;
            padding: 8px 14px !important;
            border-top: 1px solid var(--mrl-border) !important;
            background: var(--mrl-bg) !important;
            color: var(--mrl-muted) !important;
            font-size: 11px !important;
        }

        #mrl-toast-container {
            position: fixed !important;
            left: 18px !important;
            bottom: 18px !important;
            z-index: 100005 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
            direction: rtl !important;
            pointer-events: none !important;
        }

        .mrl-toast {
            min-width: 210px !important;
            max-width: min(420px, calc(100vw - 36px)) !important;
            padding: 10px 13px !important;
            border-radius: 8px !important;
            background: #252a31 !important;
            color: #fff !important;
            box-shadow: 0 6px 22px rgba(0, 0, 0, 0.23) !important;
            font-family: inherit !important;
            font-size: 12px !important;
            line-height: 1.5 !important;
            opacity: 0 !important;
            transform: translateY(8px) !important;
            transition:
                opacity 0.18s ease,
                transform 0.18s ease !important;
        }

        .mrl-toast.is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        .mrl-toast.success {
            background: #257848 !important;
        }

        .mrl-toast.error {
            background: #b43b3b !important;
        }

        .mrl-dialog-overlay {
            position: fixed !important;
            inset: 0 !important;
            z-index: 100010 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 18px !important;
            background: rgba(15, 18, 22, 0.48) !important;
            direction: rtl !important;
        }

        .mrl-dialog {
            width: min(460px, 94vw) !important;
            padding: 18px !important;
            border-radius: 12px !important;
            background: var(--mrl-bg) !important;
            color: var(--mrl-text) !important;
            box-shadow: var(--mrl-shadow) !important;
            font-family: inherit !important;
        }

        .mrl-dialog h3 {
            margin: 0 0 9px !important;
            font-size: 17px !important;
        }

        .mrl-dialog p {
            margin: 0 0 14px !important;
            color: var(--mrl-muted) !important;
            font-size: 12.5px !important;
            line-height: 1.6 !important;
        }

        .mrl-dialog textarea {
            width: 100% !important;
            min-height: 120px !important;
            box-sizing: border-box !important;
            padding: 10px !important;
            border: 1px solid var(--mrl-border) !important;
            border-radius: 8px !important;
            color: var(--mrl-text) !important;
            font-family: inherit !important;
            font-size: 13px !important;
            line-height: 1.6 !important;
            resize: vertical !important;
            outline: none !important;
        }

        .mrl-dialog textarea:focus {
            border-color: var(--mrl-primary) !important;
            box-shadow: 0 0 0 3px var(--mrl-primary-soft) !important;
        }

        .mrl-dialog-actions {
            display: flex !important;
            justify-content: flex-start !important;
            gap: 8px !important;
            margin-top: 14px !important;
        }

        .mrl-dialog-button {
            min-height: 35px !important;
            padding: 0 13px !important;
            border: 1px solid var(--mrl-border) !important;
            border-radius: 7px !important;
            background: var(--mrl-bg) !important;
            color: var(--mrl-text) !important;
            font-family: inherit !important;
            font-size: 12px !important;
            font-weight: 600 !important;
            cursor: pointer !important;
        }

        .mrl-dialog-button.primary {
            border-color: var(--mrl-primary) !important;
            background: var(--mrl-primary) !important;
            color: #fff !important;
        }

        .mrl-dialog-button.danger {
            border-color: var(--mrl-danger) !important;
            background: var(--mrl-danger) !important;
            color: #fff !important;
        }

        @media (max-width: 600px) {
            #mrl-overlay {
                padding: 0 !important;
                align-items: stretch !important;
            }

            #mrl-modal {
                width: 100% !important;
                max-height: 100vh !important;
                border: 0 !important;
                border-radius: 0 !important;
            }

            .mrl-modal-header {
                min-height: 56px !important;
            }

            .mrl-toolbar {
                align-items: stretch !important;
            }

            .mrl-search-wrap {
                flex-basis: 100% !important;
            }

            .mrl-filter-group {
                flex: 1 1 auto !important;
            }

            .mrl-filter-button {
                flex: 1 !important;
            }

            .mrl-toolbar-button span {
                display: none !important;
            }

            .mrl-toolbar-button {
                width: 36px !important;
                padding: 0 !important;
            }

            .mrl-item-title {
                white-space: normal !important;
            }
        }
    `);

    let currentFilter = 'all';
    let currentSearch = '';
    let renderTimer = null;
    let injectTimer = null;
    let previousUrl = location.href;

    function getReadingList() {
        const stored = GM_getValue(CONFIG.storageKey, []);
        if (!Array.isArray(stored)) return [];
        return stored
            .filter(item => item && typeof item === 'object' && item.id && item.url)
            .map(normalizeItem)
            .sort((a, b) => b.savedAt - a.savedAt);
    }

    function saveReadingList(list) {
        const cleanList = Array.isArray(list)
            ? list.map(normalizeItem).sort((a, b) => b.savedAt - a.savedAt)
            : [];

        GM_setValue(CONFIG.storageKey, cleanList);
        updateSidebarCount();
        updateAllPostButtons();
        scheduleRender();
    }

    function normalizeItem(item) {
        return {
            id: String(item.id || createIdFromUrl(item.url || '')),
            pid: String(item.pid || ''),
            tid: String(item.tid || ''),
            title: cleanText(item.title || 'פוסט שמור').slice(0, CONFIG.maxTitleLength),
            author: cleanText(item.author || 'משתמש לא ידוע'),
            preview: cleanText(item.preview || '').slice(0, CONFIG.maxPreviewLength),
            url: normalizeUrl(item.url || location.href),
            savedAt: Number(item.savedAt || Date.now()),
            updatedAt: Number(item.updatedAt || item.savedAt || Date.now()),
            read: Boolean(item.read),
            note: String(item.note || '').trim(),
            source: 'mitmachim.top'
        };
    }

    function getSettings() {
        const defaults = {
            confirmBeforeDelete: true,
            markReadWhenOpened: true
        };
        const stored = GM_getValue(CONFIG.settingsKey, {});
        return Object.assign({}, defaults, stored || {});
    }

    function queryFirst(root, selectors) {
        for (const selector of selectors) {
            const element = root.querySelector(selector);
            if (element) return element;
        }
        return null;
    }

    function queryAllCombined(selectors) {
        const set = new Set();
        for (const selector of selectors) {
            document.querySelectorAll(selector).forEach(element => set.add(element));
        }
        return Array.from(set);
    }

    function cleanText(value) {
        return String(value || '')
            .replace(/\u00a0/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function truncate(value, maxLength) {
        const text = cleanText(value);
        if (text.length <= maxLength) return text;
        return `${text.slice(0, maxLength - 1).trim()}…`;
    }

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function normalizeUrl(url) {
        try {
            const parsed = new URL(url, location.origin);
            parsed.hash = parsed.hash || '';
            return parsed.href;
        } catch {
            return String(url || location.href);
        }
    }

    function createIdFromUrl(url) {
        const value = String(url || '');
        let hash = 0;
        for (let i = 0; i < value.length; i += 1) {
            hash = ((hash << 5) - hash) + value.charCodeAt(i);
            hash |= 0;
        }
        return `mrl_${Math.abs(hash)}`;
    }

    function getPostId(post) {
        const directId =
            post.dataset.pid ||
            post.getAttribute('data-pid') ||
            post.dataset.postId ||
            post.getAttribute('data-post-id');

        if (directId) return String(directId);

        const idMatch = String(post.id || '').match(/(?:post|pid)[-_]?(\d+)/i);
        if (idMatch) return idMatch[1];

        const postLink = post.querySelector(
            'a[href*="/post/"], a[href*="#"], a[data-pid], [component="post/anchor"]'
        );

        if (postLink) {
            const href = postLink.getAttribute('href') || '';
            const match = href.match(/(?:\/post\/|#)(\d+)/);
            if (match) return match[1];
        }

        const index = queryAllCombined(CONFIG.selectors.posts).indexOf(post);
        return `local-${index >= 0 ? index : Date.now()}`;
    }

    function getTopicId() {
        const bodyTid = document.body.dataset.tid || document.body.getAttribute('data-tid');
        if (bodyTid) return String(bodyTid);

        const topicElement = document.querySelector('[data-tid]');
        if (topicElement?.dataset?.tid) return String(topicElement.dataset.tid);

        const match = location.pathname.match(/\/topic\/(\d+)/i);
        return match ? match[1] : '';
    }

    function getTopicTitle() {
        const element = queryFirst(document, CONFIG.selectors.topicTitle);
        const text = cleanText(element?.textContent || document.title);

        return truncate(
            text
                .replace(/\s*\|\s*מתמחים.*$/i, '')
                .replace(/\s*-\s*מתמחים.*$/i, ''),
            CONFIG.maxTitleLength
        ) || 'פוסט שמור';
    }

    function getPostAuthor(post) {
        const element = queryFirst(post, CONFIG.selectors.username);

        if (element) {
            const username =
                element.getAttribute('data-username') ||
                element.getAttribute('title') ||
                element.textContent;

            if (cleanText(username)) return truncate(username, 80);
        }

        return 'משתמש לא ידוע';
    }

    function getPostContentElement(post) {
        return queryFirst(post, CONFIG.selectors.postContent);
    }

    function getPostPreview(post) {
        const contentElement = getPostContentElement(post);
        if (!contentElement) return '';

        const clone = contentElement.cloneNode(true);

        clone.querySelectorAll(`
            script,
            style,
            button,
            .mrl-post-button,
            blockquote,
            .signature,
            [component="post/signature"],
            .post-signature,
            .spoiler-title
        `).forEach(element => element.remove());

        return truncate(clone.textContent, CONFIG.maxPreviewLength);
    }

    function getPostUrl(post) {
        const pid = getPostId(post);

        const explicitLink = post.querySelector(
            [
                `a[href*="/post/${CSS.escape(pid)}"]`,
                `a[href$="#${CSS.escape(pid)}"]`,
                'a[component="post/anchor"]',
                '.post-index a',
                'a[data-pid]'
            ].join(',')
        );

        if (explicitLink?.href) {
            return normalizeUrl(explicitLink.href);
        }

        const baseUrl = new URL(location.href);
        baseUrl.hash = pid;
        return baseUrl.href;
    }

    function getItemFromPost(post) {
        const pid = getPostId(post);
        const url = getPostUrl(post);

        return normalizeItem({
            id: pid ? `post-${pid}` : createIdFromUrl(url),
            pid,
            tid: getTopicId(),
            title: getTopicTitle(),
            author: getPostAuthor(post),
            preview: getPostPreview(post),
            url,
            savedAt: Date.now(),
            updatedAt: Date.now(),
            read: false,
            note: ''
        });
    }

    function findSavedItemForPost(post, list = getReadingList()) {
        const pid = getPostId(post);
        const url = getPostUrl(post);

        return list.find(item =>
            (pid && item.pid && String(item.pid) === String(pid)) ||
            item.url === url ||
            item.id === `post-${pid}`
        );
    }

    function formatDate(timestamp) {
        try {
            return new Intl.DateTimeFormat('he-IL', {
                dateStyle: 'short',
                timeStyle: 'short'
            }).format(new Date(timestamp));
        } catch {
            return new Date(timestamp).toLocaleString('he-IL');
        }
    }

    function debounce(callback, delay = 150) {
        let timer = null;
        return function debounced(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => callback.apply(this, args), delay);
        };
    }

    function injectPostButtons() {
        const posts = queryAllCombined(CONFIG.selectors.posts);
        const list = getReadingList();

        for (const post of posts) {
            if (!(post instanceof HTMLElement)) continue;
            if (post.querySelector('.mrl-post-button')) continue;

            const actions = findPostActionsContainer(post);
            if (!actions) continue;

            const button = createPostButton(post);
            insertPostButton(actions, button);
            updatePostButton(button, Boolean(findSavedItemForPost(post, list)));
        }
    }

    function findPostActionsContainer(post) {
        let actions = queryFirst(post, CONFIG.selectors.postActions);
        if (actions) return actions;

        const reactionButton = post.querySelector(
            '[component="post/reply"], [component="post/like"], .post-tools a, .post-tools button'
        );

        if (reactionButton?.parentElement) return reactionButton.parentElement;

        const content = getPostContentElement(post);
        if (!content) return null;

        actions = document.createElement('div');
        actions.className = 'mrl-created-actions';
        actions.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 8px;
            direction: rtl;
        `;
        content.insertAdjacentElement('afterend', actions);
        return actions;
    }

    function createPostButton(post) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'mrl-post-button';
        button.dataset.mrlPid = getPostId(post);
        button.title = 'הוספה לרשימת הקריאה';
        button.setAttribute('aria-label', 'הוספה לרשימת הקריאה');

        button.innerHTML = `
            <span class="mrl-button-icon">${ICONS.bookmark}</span>
            <span class="mrl-button-label">${CONFIG.buttonText}</span>
        `;

        button.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            togglePostSaved(post, button);
        });

        return button;
    }

    function insertPostButton(actions, button) {
        const preferredReference = actions.querySelector(
            [
                '[component="post/reply"]',
                '[component="post/like"]',
                '.post-reply',
                '.post-like',
                '.emoji-add',
                '.reactions'
            ].join(',')
        );

        if (preferredReference) {
            preferredReference.insertAdjacentElement('beforebegin', button);
        } else {
            actions.appendChild(button);
        }
    }

    function togglePostSaved(post, button) {
        const list = getReadingList();
        const existing = findSavedItemForPost(post, list);

        if (existing) {
            const nextList = list.filter(item => item.id !== existing.id);
            saveReadingList(nextList);
            updatePostButton(button, false);
            showToast('הפוסט הוסר מרשימת הקריאה');
            return;
        }

        const item = getItemFromPost(post);
        list.unshift(item);
        saveReadingList(list);
        updatePostButton(button, true);
        showToast('הפוסט נוסף לרשימת הקריאה', 'success');
    }

    function updatePostButton(button, isSaved) {
        if (!button) return;

        button.classList.toggle('is-saved', isSaved);
        button.title = isSaved ? 'הסרה מרשימת הקריאה' : 'הוספה לרשימת הקריאה';
        button.setAttribute('aria-label', isSaved ? 'הסרה מרשימת הקריאה' : 'הוספה לרשימת הקריאה');

        const icon = button.querySelector('.mrl-button-icon');
        const label = button.querySelector('.mrl-button-label');

        if (icon) {
            icon.innerHTML = isSaved ? ICONS.bookmarkFilled : ICONS.bookmark;
        }

        if (label) {
            label.textContent = isSaved ? CONFIG.savedButtonText : CONFIG.buttonText;
        }
    }

    function updateAllPostButtons() {
        const list = getReadingList();

        document.querySelectorAll('.mrl-post-button').forEach(button => {
            const post = button.closest(CONFIG.selectors.posts.join(','));
            if (!post) return;
            updatePostButton(button, Boolean(findSavedItemForPost(post, list)));
        });
    }

    function injectSidebarButton() {
        const insertionPoint = findSidebarInsertionPoint();
        if (!insertionPoint) return;

        let wrapper = document.getElementById('mrl-sidebar-entry');

        if (!wrapper) {
            wrapper = document.createElement(insertionPoint.matches('ul,ol') ? 'li' : 'div');
            wrapper.id = 'mrl-sidebar-entry';

            if (insertionPoint.matches('ul,ol')) {
                wrapper.classList.add('mrl-in-list');
                wrapper.style.listStyle = 'none';
            }

            wrapper.innerHTML = `
                <button type="button" id="mrl-sidebar-button" title="רשימת קריאה" aria-label="רשימת קריאה">
                    ${ICONS.bookmark}
                    <span class="mrl-sr-only mrl-sidebar-label">רשימת קריאה</span>
                    <span id="mrl-sidebar-count" data-count="0"></span>
                </button>
            `;

            wrapper.querySelector('#mrl-sidebar-button').addEventListener('click', openModal);
        }

        if (wrapper.parentElement !== insertionPoint) {
            insertionPoint.appendChild(wrapper);
        }

        updateSidebarCount();
    }

    function findLeftSidebar() {
        for (const selector of CONFIG.selectors.leftSidebar) {
            const candidates = Array.from(document.querySelectorAll(selector));

            for (const candidate of candidates) {
                if (!(candidate instanceof HTMLElement)) continue;

                const rect = candidate.getBoundingClientRect();

                if (
                    rect.width >= 40 &&
                    rect.width <= 450 &&
                    rect.left < window.innerWidth * 0.5 &&
                    rect.height > 120
                ) {
                    return candidate;
                }
            }
        }

        const possibleColumns = Array.from(
            document.querySelectorAll('.col-lg-3, .col-md-3, .col-sm-3, aside')
        );

        for (const column of possibleColumns) {
            const rect = column.getBoundingClientRect();

            if (
                rect.width >= 40 &&
                rect.width <= 430 &&
                rect.left < window.innerWidth * 0.45 &&
                rect.height > 120
            ) {
                return column;
            }
        }

        return null;
    }

    function findSidebarInsertionPoint() {
        const sidebar = findLeftSidebar();
        if (!sidebar) return null;

        const specificCandidates = [
            '.nav',
            '.menu',
            '.sidebar-menu',
            '.icon-bar',
            '.categories',
            'ul',
            'ol',
            '[role="menu"]',
            '.btn-group-vertical'
        ];

        for (const selector of specificCandidates) {
            const elements = Array.from(sidebar.querySelectorAll(selector));

            for (const el of elements) {
                if (!(el instanceof HTMLElement)) continue;

                const itemCount = el.querySelectorAll('a, button, li').length;
                if (itemCount >= 3) {
                    return el;
                }
            }
        }

        const childContainers = Array.from(sidebar.children).filter(el => el instanceof HTMLElement);
        for (const child of childContainers) {
            const itemCount = child.querySelectorAll('a, button').length;
            if (itemCount >= 3) {
                return child;
            }
        }

        return sidebar;
    }

    function updateSidebarCount() {
        const countElement = document.getElementById('mrl-sidebar-count');
        const button = document.getElementById('mrl-sidebar-button');

        if (!countElement) return;

        const count = getReadingList().length;
        countElement.textContent = count > 999 ? '999+' : String(count);
        countElement.dataset.count = String(count);

        if (button) {
            button.title = count ? `רשימת קריאה (${count})` : 'רשימת קריאה';
        }
    }

    function createModal() {
        if (document.getElementById('mrl-overlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'mrl-overlay';

        overlay.innerHTML = `
            <section id="mrl-modal" role="dialog" aria-modal="true" aria-label="רשימת קריאה">
                <header class="mrl-modal-header">
                    <div class="mrl-modal-title-wrap">
                        <h2 class="mrl-modal-title">רשימת הקריאה שלי</h2>
                        <div class="mrl-modal-subtitle" id="mrl-modal-subtitle"></div>
                    </div>

                    <button type="button" class="mrl-icon-button" id="mrl-close" title="סגירה">
                        ${ICONS.close}
                    </button>
                </header>

                <div class="mrl-toolbar">
                    <div class="mrl-search-wrap">
                        ${ICONS.search}
                        <input
                            id="mrl-search"
                            type="search"
                            autocomplete="off"
                            placeholder="חיפוש לפי כותרת, משתמש, תוכן או הערה..."
                        >
                    </div>

                    <div class="mrl-filter-group" role="group" aria-label="סינון">
                        <button type="button" class="mrl-filter-button is-active" data-filter="all">הכול</button>
                        <button type="button" class="mrl-filter-button" data-filter="unread">לא נקראו</button>
                        <button type="button" class="mrl-filter-button" data-filter="read">נקראו</button>
                    </div>

                    <button type="button" class="mrl-toolbar-button" id="mrl-export" title="ייצוא הרשימה">
                        ${ICONS.export}
                        <span>ייצוא</span>
                    </button>

                    <button type="button" class="mrl-toolbar-button" id="mrl-import" title="ייבוא רשימה">
                        ${ICONS.import}
                        <span>ייבוא</span>
                    </button>

                    <button type="button" class="mrl-toolbar-button danger" id="mrl-clear" title="מחיקת כל הרשימה">
                        ${ICONS.trash}
                        <span>ניקוי</span>
                    </button>

                    <input type="file" id="mrl-import-file" accept=".json,application/json" hidden>
                </div>

                <main id="mrl-list"></main>

                <footer class="mrl-modal-footer">
                    <span id="mrl-footer-status"></span>
                    <span>המידע נשמר מקומית בדפדפן בלבד</span>
                </footer>
            </section>
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener('click', event => {
            if (event.target === overlay) {
                closeModal();
            }
        });

        overlay.querySelector('#mrl-close').addEventListener('click', closeModal);

        const searchInput = overlay.querySelector('#mrl-search');
        searchInput.addEventListener('input', debounce(() => {
            currentSearch = searchInput.value;
            renderReadingList();
        }, 100));

        overlay.querySelectorAll('.mrl-filter-button').forEach(button => {
            button.addEventListener('click', () => {
                currentFilter = button.dataset.filter || 'all';

                overlay.querySelectorAll('.mrl-filter-button').forEach(item => {
                    item.classList.toggle('is-active', item === button);
                });

                renderReadingList();
            });
        });

        overlay.querySelector('#mrl-export').addEventListener('click', exportReadingList);

        const importFile = overlay.querySelector('#mrl-import-file');

        overlay.querySelector('#mrl-import').addEventListener('click', () => {
            importFile.value = '';
            importFile.click();
        });

        importFile.addEventListener('change', event => {
            const file = event.target.files?.[0];
            if (file) importReadingList(file);
        });

        overlay.querySelector('#mrl-clear').addEventListener('click', clearReadingList);

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
                closeModal();
            }
        });
    }

    function openModal() {
        createModal();

        const overlay = document.getElementById('mrl-overlay');
        if (!overlay) return;

        overlay.classList.add('is-open');
        document.body.classList.add('mrl-no-scroll');

        renderReadingList();

        requestAnimationFrame(() => {
            document.getElementById('mrl-search')?.focus();
        });
    }

    function closeModal() {
        document.getElementById('mrl-overlay')?.classList.remove('is-open');
        document.body.classList.remove('mrl-no-scroll');
    }

    function scheduleRender() {
        clearTimeout(renderTimer);

        renderTimer = setTimeout(() => {
            const overlay = document.getElementById('mrl-overlay');
            if (overlay?.classList.contains('is-open')) {
                renderReadingList();
            }
        }, 60);
    }

    function renderReadingList() {
        const listElement = document.getElementById('mrl-list');
        if (!listElement) return;

        const allItems = getReadingList();
        const filteredItems = filterItems(allItems);

        updateModalSummary(allItems, filteredItems);

        if (filteredItems.length === 0) {
            listElement.innerHTML = createEmptyState(allItems.length);
            return;
        }

        listElement.innerHTML = filteredItems.map(item => createItemHtml(item)).join('');
        bindItemActions(listElement);
    }

    function filterItems(items) {
        const search = cleanText(currentSearch).toLowerCase();

        return items.filter(item => {
            if (currentFilter === 'read' && !item.read) return false;
            if (currentFilter === 'unread' && item.read) return false;

            if (!search) return true;

            const haystack = [
                item.title,
                item.author,
                item.preview,
                item.note,
                item.url
            ].join(' ').toLowerCase();

            return haystack.includes(search);
        });
    }

    function updateModalSummary(allItems, filteredItems) {
        const unreadCount = allItems.filter(item => !item.read).length;
        const subtitle = document.getElementById('mrl-modal-subtitle');
        const footer = document.getElementById('mrl-footer-status');

        if (subtitle) {
            subtitle.textContent = allItems.length
                ? `${allItems.length} פריטים • ${unreadCount} טרם נקראו`
                : 'עדיין לא שמרת פוסטים';
        }

        if (footer) {
            footer.textContent = filteredItems.length === allItems.length
                ? `${allItems.length} פריטים ברשימה`
                : `מוצגים ${filteredItems.length} מתוך ${allItems.length}`;
        }
    }

    function createItemHtml(item) {
        const noteHtml = item.note
            ? `<div class="mrl-item-note">${escapeHtml(item.note)}</div>`
            : '';

        const readBadge = item.read
            ? `<span class="mrl-read-badge">${ICONS.check} נקרא</span>`
            : '';

        return `
            <article class="mrl-item ${item.read ? 'is-read' : ''}" data-item-id="${escapeHtml(item.id)}">
                <div class="mrl-item-top">
                    <div class="mrl-item-main">
                        <a
                            class="mrl-item-title"
                            href="${escapeHtml(item.url)}"
                            data-action="open"
                            title="${escapeHtml(item.title)}"
                        >
                            ${escapeHtml(item.title)}
                        </a>

                        <div class="mrl-item-meta">
                            <span>מאת ${escapeHtml(item.author)}</span>
                            <span>נשמר ${escapeHtml(formatDate(item.savedAt))}</span>
                            ${readBadge}
                        </div>
                    </div>
                </div>

                ${item.preview ? `<p class="mrl-item-preview">${escapeHtml(item.preview)}</p>` : ''}
                ${noteHtml}

                <div class="mrl-item-actions">
                    <button type="button" class="mrl-item-action" data-action="open">
                        ${ICONS.external}
                        פתח פוסט
                    </button>

                    <button type="button" class="mrl-item-action" data-action="toggle-read">
                        ${ICONS.check}
                        ${item.read ? 'סמן כלא נקרא' : 'סמן כנקרא'}
                    </button>

                    <button type="button" class="mrl-item-action" data-action="note">
                        ${ICONS.edit}
                        ${item.note ? 'ערוך הערה' : 'הוסף הערה'}
                    </button>

                    <button type="button" class="mrl-item-action" data-action="copy">
                        ${ICONS.copy}
                        העתק קישור
                    </button>

                    <button type="button" class="mrl-item-action danger" data-action="delete">
                        ${ICONS.trash}
                        מחק
                    </button>
                </div>
            </article>
        `;
    }

    function createEmptyState(totalCount) {
        const isSearchOrFilter = Boolean(cleanText(currentSearch)) || currentFilter !== 'all';

        return `
            <div class="mrl-empty">
                ${ICONS.bookmark}
                <div class="mrl-empty-title">
                    ${isSearchOrFilter ? 'לא נמצאו תוצאות' : 'רשימת הקריאה עדיין ריקה'}
                </div>
                <div class="mrl-empty-text">
                    ${
                        isSearchOrFilter
                            ? `לא נמצאו פריטים שמתאימים לחיפוש או לסינון שבחרת.
                               יש ברשימה ${totalCount} פריטים בסך הכול.`
                            : `לחץ על הכפתור הקטן "שמור לקריאה" שמתחת לפוסט,
                               והוא יופיע כאן באופן אוטומטי.`
                    }
                </div>
            </div>
        `;
    }

    function bindItemActions(container) {
        container.querySelectorAll('.mrl-item').forEach(itemElement => {
            const itemId = itemElement.dataset.itemId;

            itemElement.querySelectorAll('[data-action]').forEach(control => {
                control.addEventListener('click', event => {
                    const action = control.dataset.action;

                    if (control.tagName === 'A' && action === 'open') {
                        event.preventDefault();
                    }

                    handleItemAction(action, itemId);
                });
            });
        });
    }

    function handleItemAction(action, itemId) {
        const list = getReadingList();
        const item = list.find(entry => entry.id === itemId);

        if (!item) {
            showToast('הפריט כבר אינו קיים ברשימה', 'error');
            renderReadingList();
            return;
        }

        switch (action) {
            case 'open':
                openReadingItem(item);
                break;

            case 'toggle-read':
                updateItem(itemId, {
                    read: !item.read,
                    updatedAt: Date.now()
                });
                showToast(item.read ? 'הפריט סומן כלא נקרא' : 'הפריט סומן כנקרא');
                break;

            case 'note':
                openNoteDialog(item);
                break;

            case 'copy':
                copyText(item.url)
                    .then(() => showToast('הקישור הועתק', 'success'))
                    .catch(() => showToast('לא הצלחתי להעתיק את הקישור', 'error'));
                break;

            case 'delete':
                deleteReadingItem(item);
                break;
        }
    }

    function openReadingItem(item) {
        const settings = getSettings();

        if (settings.markReadWhenOpened && !item.read) {
            updateItem(item.id, {
                read: true,
                updatedAt: Date.now()
            });
        }

        window.location.href = item.url;
    }

    function updateItem(itemId, changes) {
        const list = getReadingList();
        const index = list.findIndex(item => item.id === itemId);
        if (index === -1) return;

        list[index] = normalizeItem({
            ...list[index],
            ...changes
        });

        saveReadingList(list);
    }

    function deleteReadingItem(item) {
        const settings = getSettings();

        const performDelete = () => {
            const nextList = getReadingList().filter(entry => entry.id !== item.id);
            saveReadingList(nextList);
            showToast('הפריט נמחק מרשימת הקריאה');
        };

        if (!settings.confirmBeforeDelete) {
            performDelete();
            return;
        }

        openConfirmDialog({
            title: 'מחיקת פריט',
            message: `למחוק את הפוסט "${item.title}" מרשימת הקריאה?`,
            confirmText: 'מחק',
            danger: true,
            onConfirm: performDelete
        });
    }

    function openNoteDialog(item) {
        openTextDialog({
            title: item.note ? 'עריכת הערה אישית' : 'הוספת הערה אישית',
            description: 'ההערה נשמרת רק בדפדפן שלך ולא נשלחת לפורום.',
            value: item.note,
            placeholder: 'לדוגמה: לבדוק אחר כך, פתרון אפשרי לבעיה שלי...',
            confirmText: 'שמור הערה',
            onConfirm: value => {
                updateItem(item.id, {
                    note: value.trim(),
                    updatedAt: Date.now()
                });

                showToast(value.trim() ? 'ההערה נשמרה' : 'ההערה הוסרה', 'success');
            }
        });
    }

    function exportReadingList() {
        const list = getReadingList();

        const payload = {
            format: 'mitmachim-reading-list',
            version: 1,
            exportedAt: new Date().toISOString(),
            site: location.hostname,
            count: list.length,
            items: list
        };

        const blob = new Blob(
            [JSON.stringify(payload, null, 2)],
            { type: 'application/json;charset=utf-8' }
        );

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const date = new Date().toISOString().slice(0, 10);

        link.href = url;
        link.download = `mitmachim-reading-list-${date}.json`;

        document.body.appendChild(link);
        link.click();
        link.remove();

        setTimeout(() => URL.revokeObjectURL(url), 1500);

        showToast(list.length ? `יוצאו ${list.length} פריטים` : 'יוצא קובץ רשימה ריק', 'success');
    }

    async function importReadingList(file) {
        try {
            const text = await file.text();
            const parsed = JSON.parse(text);

            const importedItems = Array.isArray(parsed)
                ? parsed
                : Array.isArray(parsed?.items)
                    ? parsed.items
                    : null;

            if (!importedItems) {
                throw new Error('מבנה הקובץ אינו תקין');
            }

            const normalizedImported = importedItems
                .filter(item => item && item.url)
                .map(normalizeItem);

            if (normalizedImported.length === 0) {
                throw new Error('לא נמצאו בקובץ פריטים תקינים');
            }

            openImportDialog(normalizedImported);
        } catch (error) {
            console.error('[Reading List] Import error:', error);
            showToast(`הייבוא נכשל: ${error.message || 'קובץ לא תקין'}`, 'error');
        }
    }

    function openImportDialog(importedItems) {
        const existing = getReadingList();

        openConfirmDialog({
            title: 'ייבוא רשימת קריאה',
            message:
                `נמצאו בקובץ ${importedItems.length} פריטים.\n\n` +
                `לחיצה על "מזג רשימות" תשמור את הרשימה הקיימת ותוסיף רק פריטים חדשים.`,
            confirmText: 'מזג רשימות',
            secondaryText: 'החלף את הרשימה',
            onConfirm: () => mergeImportedItems(existing, importedItems),
            onSecondary: () => replaceWithImportedItems(importedItems)
        });
    }

    function mergeImportedItems(existing, imported) {
        const map = new Map();

        for (const item of existing) {
            map.set(getDeduplicationKey(item), item);
        }

        let addedCount = 0;

        for (const item of imported) {
            const key = getDeduplicationKey(item);

            if (!map.has(key)) {
                map.set(key, item);
                addedCount += 1;
            } else {
                const current = map.get(key);

                map.set(key, normalizeItem({
                    ...item,
                    ...current,
                    note: current.note || item.note,
                    read: current.read || item.read,
                    savedAt: Math.min(current.savedAt, item.savedAt),
                    updatedAt: Math.max(current.updatedAt, item.updatedAt)
                }));
            }
        }

        saveReadingList(Array.from(map.values()));

        showToast(
            addedCount ? `נוספו ${addedCount} פריטים חדשים` : 'לא נמצאו פריטים חדשים לייבוא',
            'success'
        );
    }

    function replaceWithImportedItems(importedItems) {
        openConfirmDialog({
            title: 'החלפת הרשימה הקיימת',
            message: 'פעולה זו תמחק את רשימת הקריאה הנוכחית ותחליף אותה ברשימה מהקובץ. להמשיך?',
            confirmText: 'החלף רשימה',
            danger: true,
            onConfirm: () => {
                saveReadingList(importedItems);
                showToast(`הרשימה הוחלפה בהצלחה: ${importedItems.length} פריטים`, 'success');
            }
        });
    }

    function getDeduplicationKey(item) {
        if (item.pid) return `pid:${item.pid}`;
        return `url:${item.url}`;
    }

    function clearReadingList() {
        const list = getReadingList();

        if (list.length === 0) {
            showToast('רשימת הקריאה כבר ריקה');
            return;
        }

        openConfirmDialog({
            title: 'ניקוי רשימת הקריאה',
            message:
                `למחוק את כל ${list.length} הפריטים מרשימת הקריאה?\n` +
                'מומלץ לייצא גיבוי לפני המחיקה.',
            confirmText: 'מחק הכול',
            danger: true,
            onConfirm: () => {
                saveReadingList([]);
                showToast('רשימת הקריאה נוקתה');
            }
        });
    }

    function openConfirmDialog({
        title,
        message,
        confirmText = 'אישור',
        secondaryText = '',
        danger = false,
        onConfirm,
        onSecondary
    }) {
        closeDialog();

        const overlay = document.createElement('div');
        overlay.className = 'mrl-dialog-overlay';

        overlay.innerHTML = `
            <div class="mrl-dialog" role="alertdialog" aria-modal="true">
                <h3>${escapeHtml(title)}</h3>
                <p style="white-space: pre-line;">${escapeHtml(message)}</p>

                <div class="mrl-dialog-actions">
                    <button
                        type="button"
                        class="mrl-dialog-button ${danger ? 'danger' : 'primary'}"
                        data-role="confirm"
                    >
                        ${escapeHtml(confirmText)}
                    </button>

                    ${
                        secondaryText
                            ? `
                                <button
                                    type="button"
                                    class="mrl-dialog-button"
                                    data-role="secondary"
                                >
                                    ${escapeHtml(secondaryText)}
                                </button>
                            `
                            : ''
                    }

                    <button type="button" class="mrl-dialog-button" data-role="cancel">
                        ביטול
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        const finish = callback => {
            closeDialog();
            if (typeof callback === 'function') callback();
        };

        overlay.querySelector('[data-role="confirm"]').addEventListener('click', () => {
            finish(onConfirm);
        });

        overlay.querySelector('[data-role="secondary"]')?.addEventListener('click', () => {
            finish(onSecondary);
        });

        overlay.querySelector('[data-role="cancel"]').addEventListener('click', closeDialog);

        overlay.addEventListener('click', event => {
            if (event.target === overlay) closeDialog();
        });
    }

    function openTextDialog({
        title,
        description,
        value = '',
        placeholder = '',
        confirmText = 'שמור',
        onConfirm
    }) {
        closeDialog();

        const overlay = document.createElement('div');
        overlay.className = 'mrl-dialog-overlay';

        overlay.innerHTML = `
            <div class="mrl-dialog" role="dialog" aria-modal="true">
                <h3>${escapeHtml(title)}</h3>
                <p>${escapeHtml(description)}</p>

                <textarea
                    id="mrl-dialog-textarea"
                    maxlength="2000"
                    placeholder="${escapeHtml(placeholder)}"
                >${escapeHtml(value)}</textarea>

                <div class="mrl-dialog-actions">
                    <button type="button" class="mrl-dialog-button primary" data-role="confirm">
                        ${escapeHtml(confirmText)}
                    </button>

                    <button type="button" class="mrl-dialog-button" data-role="cancel">
                        ביטול
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        const textarea = overlay.querySelector('#mrl-dialog-textarea');

        overlay.querySelector('[data-role="confirm"]').addEventListener('click', () => {
            const result = textarea.value;
            closeDialog();

            if (typeof onConfirm === 'function') {
                onConfirm(result);
            }
        });

        overlay.querySelector('[data-role="cancel"]').addEventListener('click', closeDialog);

        overlay.addEventListener('click', event => {
            if (event.target === overlay) closeDialog();
        });

        textarea.addEventListener('keydown', event => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
                event.preventDefault();
                overlay.querySelector('[data-role="confirm"]').click();
            }
        });

        requestAnimationFrame(() => {
            textarea.focus();
            textarea.setSelectionRange(textarea.value.length, textarea.value.length);
        });
    }

    function closeDialog() {
        document.querySelectorAll('.mrl-dialog-overlay').forEach(element => element.remove());
    }

    async function copyText(text) {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            return;
        }

        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';

        document.body.appendChild(textarea);
        textarea.select();

        const successful = document.execCommand('copy');
        textarea.remove();

        if (!successful) {
            throw new Error('Copy failed');
        }
    }

    function showToast(message, type = '') {
        let container = document.getElementById('mrl-toast-container');

        if (!container) {
            container = document.createElement('div');
            container.id = 'mrl-toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `mrl-toast ${type}`;
        toast.textContent = message;

        container.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add('is-visible');
        });

        setTimeout(() => {
            toast.classList.remove('is-visible');

            setTimeout(() => {
                toast.remove();
                if (!container.children.length) container.remove();
            }, 220);
        }, 2600);
    }

    function markCurrentSavedPostAsRead() {
        const settings = getSettings();
        if (!settings.markReadWhenOpened) return;

        const hash = location.hash.replace('#', '');
        const pathnamePostMatch = location.pathname.match(/\/post\/(\d+)/);
        const pid = pathnamePostMatch?.[1] || (/^\d+$/.test(hash) ? hash : '');

        if (!pid) return;

        const list = getReadingList();
        const index = list.findIndex(item => String(item.pid) === String(pid));

        if (index === -1 || list[index].read) return;

        list[index].read = true;
        list[index].updatedAt = Date.now();
        saveReadingList(list);
    }

    GM_registerMenuCommand('פתח את רשימת הקריאה', openModal);
    GM_registerMenuCommand('ייצא את רשימת הקריאה', exportReadingList);

    GM_registerMenuCommand('אפס את כל נתוני רשימת הקריאה', () => {
        openConfirmDialog({
            title: 'איפוס מלא',
            message: 'פעולה זו תמחק את רשימת הקריאה ואת הגדרות הסקריפט. להמשיך?',
            confirmText: 'אפס הכול',
            danger: true,
            onConfirm: () => {
                GM_deleteValue(CONFIG.storageKey);
                GM_deleteValue(CONFIG.settingsKey);
                updateSidebarCount();
                updateAllPostButtons();
                scheduleRender();
                showToast('כל נתוני הסקריפט נמחקו');
            }
        });
    });

    function scheduleInjection() {
        clearTimeout(injectTimer);

        injectTimer = setTimeout(() => {
            injectSidebarButton();
            injectPostButtons();
            markCurrentSavedPostAsRead();
        }, 100);
    }

    const mutationObserver = new MutationObserver(mutations => {
        let relevantChange = false;

        for (const mutation of mutations) {
            if (mutation.type !== 'childList' || mutation.addedNodes.length === 0) continue;

            for (const node of mutation.addedNodes) {
                if (!(node instanceof HTMLElement)) continue;

                if (
                    node.matches?.(
                        CONFIG.selectors.posts.join(',') +
                        ',' +
                        CONFIG.selectors.leftSidebar.join(',')
                    ) ||
                    node.querySelector?.(
                        CONFIG.selectors.posts.join(',') +
                        ',' +
                        CONFIG.selectors.leftSidebar.join(',')
                    )
                ) {
                    relevantChange = true;
                    break;
                }
            }

            if (relevantChange) break;
        }

        if (relevantChange) {
            scheduleInjection();
        }
    });

    function patchHistoryMethod(methodName) {
        const original = history[methodName];
        if (typeof original !== 'function') return;

        history[methodName] = function patchedHistoryMethod(...args) {
            const result = original.apply(this, args);

            setTimeout(() => {
                if (location.href !== previousUrl) {
                    previousUrl = location.href;
                    onNavigation();
                }
            }, 0);

            return result;
        };
    }

    function onNavigation() {
        closeDialog();
        closeModal();

        setTimeout(scheduleInjection, 100);
        setTimeout(scheduleInjection, 500);
        setTimeout(scheduleInjection, 1200);
    }

    patchHistoryMethod('pushState');
    patchHistoryMethod('replaceState');

    window.addEventListener('popstate', onNavigation);
    window.addEventListener('hashchange', () => {
        markCurrentSavedPostAsRead();
    });

    document.addEventListener('ajaxify.end', onNavigation);
    document.addEventListener('action:ajaxify.end', onNavigation);
    window.addEventListener('action:ajaxify.end', onNavigation);

    setInterval(() => {
        if (location.href !== previousUrl) {
            previousUrl = location.href;
            onNavigation();
        }

        injectSidebarButton();
        injectPostButtons();
    }, 2500);

    function init() {
        createModal();
        injectSidebarButton();
        injectPostButtons();
        markCurrentSavedPostAsRead();

        mutationObserver.observe(document.documentElement, {
            childList: true,
            subtree: true
        });

        setTimeout(scheduleInjection, 500);
        setTimeout(scheduleInjection, 1500);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
/* SOURCE_END: רשימת קריאה ושמור לאחר כך.txt */
        }
    },

    {
        id: "quick-chat-post-link",
        name: "כפתור צאט מתמחים.טופ",
        description: "הזרקת לחצן צ'אט מהיר ליד כל פוסט בפורום מתמחים.טופ והדבקת קישור הפוסט אוטומטית",
        category: "צ'אט",
        originalFile: "כפתור צאט מתמחים.טופ.txt",
        version: "1.1",
        author: "צדיק וטוב לו וההודי של gemini",
        runAt: "document-end",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "6a2882bf399720dbcc41afebb99ae3d50783674bcaf6ce43820991639976495e",
        originalBodySha256: "31df3a06af6cd8c9211f759a8f4162a2e7041861b38e19452dfcf4463b9440d9",
        embeddedBodySha256: "32785ca4836dc469e38aca83739bde7bfe41419c3d1514abc42d3915b2eebcd9",
        mergeChanges: ["נוסף fallback ל־UID מאווטאר הכותרת כאשר unsafeWindow.app.user אינו קיים ב־NodeBB מודרני."],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: כפתור צאט מתמחים.טופ.txt */
(function() {
    'use strict';

    // פונקציה להזרקת הכפתור לפוסטים שעוד לא טופלו
    function injectChatButtons() {
        // בדיקה מקורית תחילה; ב-NodeBB מודרני app אינו תמיד גלובלי.
        const rawWin = pageWindow();
        // בפורומים שהצ'אט מושבת בהם (config.disableChat) הכפתור מוביל לשום מקום - לא מזריקים.
        if (rawWin.config && rawWin.config.disableChat) return;
        const originalUid = rawWin.app && rawWin.app.user
            ? rawWin.app.user.uid
            : null;
        const headerAvatar = !originalUid
            ? document.querySelector('[component="header/avatar"] [data-uid]')
            : null;
        const currentUid = Number(
            originalUid || headerAvatar?.getAttribute('data-uid') || 0
        );

        // MERGE FALLBACK: ללא UID אמין המודול נשאר כבוי, כמו בבדיקה המקורית.
        if (!currentUid) return;

        // שליפת כל הפוסטים בעמוד שעוד לא קיבלו כפתור
        const posts = document.querySelectorAll('[component="post"]:not(.chat-btn-added)');

        posts.forEach(post => {
            post.classList.add('chat-btn-added');

            const postUid = post.getAttribute('data-uid');

            // הגנה: שלא יוצג כפתור צ'אט של המשתמש עם עצמו, או אם אין uid תקין
            if (!postUid || Array.of(0, currentUid).includes(Number(postUid))) return;

            // איתור מיקום הלחצנים של הפוסט (תומך ברוב ערכות הנושא של NodeBB)
            const actionsContainer = post.querySelector('[component="post/actions"]') || post.querySelector('.post-tools');

            if (actionsContainer) {
                const chatBtn = document.createElement('a');
                chatBtn.className = 'btn btn-xs btn-link chat-quick-btn';
                chatBtn.innerHTML = '<i class="fa fa-fw fa-comment-dots"></i> צ\'אט';
                chatBtn.style.marginLeft = '8px';
                chatBtn.style.cursor = 'pointer';

                // אירוע לחיצה לפתיחת הצ'אט המובנה של המערכת
                chatBtn.addEventListener('click', async function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    const userLink = post.querySelector('a[data-uid]');
                    if (!userLink) return;

                    // ניסיון לפתוח את ה-popover המקורי
                    userLink.dispatchEvent(new PointerEvent('pointerenter', { bubbles: true }));
                    userLink.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
                    userLink.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));

                    const observer = new MutationObserver(() => {
                        const popoverId = userLink.getAttribute('aria-describedby');
                        if (!popoverId) return;

                        const popover = document.getElementById(popoverId);
                        if (!popover) return;

                        const btn =
                            popover.querySelector('[component="account/new-chat"]') ||
                            popover.querySelector('[component="account/chat"]') ||
                            popover.querySelector('a[href*="/chats"]');

                        if (btn) {
                            observer.disconnect();

                            // חילוץ מזהה הפוסט ויצירת קישור ישיר אליו
                            const pid = post.getAttribute('data-pid');
                            const postUrl = pid ? `${window.location.origin}/post/${pid}` : window.location.href;

                            // האזנה לפתיחת חלונית הצ'אט והופעת תיבת הקלט
                            const chatInputObserver = new MutationObserver(() => {
                                const chatInput = document.querySelector('[component="chat/input"]') || document.querySelector('.chat-input');

                                if (chatInput) {
                                    chatInputObserver.disconnect();

                                    // הזנת הקישור רק אם הוא לא קיים כבר בתיבה
                                    if (!chatInput.value.includes(postUrl)) {
                                        chatInput.value = postUrl + '\n' + chatInput.value;

                                        // שיגור אירועים כדי לעדכן את מערכת ה-Framework של NodeBB
                                        chatInput.dispatchEvent(new Event('input', { bubbles: true }));
                                        chatInput.dispatchEvent(new Event('change', { bubbles: true }));
                                        chatInput.focus();
                                    }
                                }
                            });

                            chatInputObserver.observe(document.body, {
                                childList: true,
                                subtree: true
                            });

                            // הגבלת זמן לחיפוש תיבת הצ'אט ל-5 שניות
                            setTimeout(() => chatInputObserver.disconnect(), 5000);

                            // לחיצה על כפתור פתיחת הצ'אט
                            btn.click();
                        }
                    });

                    observer.observe(document.body, {
                        childList: true,
                        subtree: true
                    });

                    setTimeout(() => observer.disconnect(), 5000);
                });

                // הזרקה לתחילת או סוף רשימת הלחצנים לפי הנוחיות
                actionsContainer.appendChild(chatBtn);
            }
        });
    }

    // האזנה לשינויים ב-DOM לצורך תמיכה בגלילה אינסופית ומעברי עמודים דינמיים
    const observer = new MutationObserver(() => {
        injectChatButtons();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // הרצה ראשונית בטעינת העמוד
    injectChatButtons();
})();

/* SOURCE_END: כפתור צאט מתמחים.טופ.txt */
        }
    },

    {
        id: "empty-chat-cleanup",
        name: "ניקוי צ'אטים ריקים - מתמחים טופ",
        description: "מסתיר אוטומטית שיחות צ'אט ריקות או שבורות ברשימת הצ'אטים במתמחים טופ",
        category: "צ'אט",
        originalFile: "ניקוי צ'אטים ריקים.txt",
        version: "1.1.0",
        author: "Moishy",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*","http://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "a12f30cdc47cfbdad1406ba138c8b6a3f086435fec0a74b0cdcc6f988389a7d2",
        originalBodySha256: "d52295e48046c4206a04dc793169df27b01b7a54abc0cd5d6121b0f230555746",
        embeddedBodySha256: "d52295e48046c4206a04dc793169df27b01b7a54abc0cd5d6121b0f230555746",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: ניקוי צ'אטים ריקים.txt */
(function () {
    'use strict';

    const ROOM_SELECTOR = '[component="chat/recent/room"]';
    const TEASER_SELECTOR = '.teaser-content';
    const HIDDEN_CLASS = 'moishy-empty-chat-hidden';
    const CHECK_DELAY = 250;

    /*
     * עיצוב להסתרת שיחות ריקות.
     */
    const style = document.createElement('style');

    style.textContent = `
        .${HIDDEN_CLASS} {
            display: none !important;
        }
    `;

    document.head.appendChild(style);

    /*
     * בודק האם השיחה ריקה או שבורה.
     */
    function isEmptyOrBrokenChat(room) {
        const teaser = room.querySelector(TEASER_SELECTOR);

        /*
         * זה העיקרון שבו השתמש התוסף המקורי:
         *
         * 1. אין בכלל אזור של הודעה אחרונה.
         * 2. או שיש אזור כזה, אבל אין בו שום טקסט.
         */
        return !teaser || teaser.textContent.trim() === '';
    }

    /*
     * מעדכן שיחה אחת.
     *
     * אם היא ריקה — מוסיף מחלקת הסתרה.
     * אם נטענה בה הודעה מאוחר יותר — מציג אותה מחדש.
     */
    function updateChatRoom(room) {
        room.classList.toggle(
            HIDDEN_CLASS,
            isEmptyOrBrokenChat(room)
        );
    }

    /*
     * סורק את כל השיחות.
     */
    function scanChatRooms(root = document) {
        if (
            root instanceof Element &&
            root.matches(ROOM_SELECTOR)
        ) {
            updateChatRoom(root);
        }

        root
            .querySelectorAll?.(ROOM_SELECTOR)
            .forEach(updateChatRoom);
    }

    /*
     * מונע הפעלה עשרות פעמים ברצף בזמן טעינת הצ'אטים.
     */
    let scanTimer = null;

    function scheduleScan() {
        clearTimeout(scanTimer);

        scanTimer = setTimeout(() => {
            scanChatRooms(document);
        }, CHECK_DELAY);
    }

    /*
     * רשימת הצ'אטים במתמחים טופ נטענת באופן דינמי,
     * ולכן מאזינים לכל שינוי בעמוד.
     */
    const observer = new MutationObserver(mutations => {
        let relevantChange = false;

        for (const mutation of mutations) {
            if (mutation.type === 'characterData') {
                relevantChange = true;
                break;
            }

            if (
                mutation.type === 'childList' &&
                (
                    mutation.addedNodes.length ||
                    mutation.removedNodes.length
                )
            ) {
                relevantChange = true;
                break;
            }
        }

        if (relevantChange) {
            scheduleScan();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });

    /*
     * סריקה ראשונית.
     */
    scanChatRooms(document);
})();
/* SOURCE_END: ניקוי צ'אטים ריקים.txt */
        }
    },

    {
        id: "recent-topics-button",
        name: "כפתור \"נושאים אחרונים\" במתמחים טופ",
        description: "מוסיף כפתור \"נושאים אחרונים\" לסינון נושאים לפי תאריך יצירה במתמחים טופ",
        category: "ניווט וחיפוש",
        originalFile: "כפתור נושאים אחרונים.txt",
        version: "24193.644",
        author: "",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "5c46bf19869dda79fdba5e3dccfea8cd665cc70447842b1fec9b3b6d06c02c33",
        originalBodySha256: "3510bb4d2bee3829559e5bcb226f17e9302183c71196566965b7cdc1f5be7146",
        embeddedBodySha256: "3510bb4d2bee3829559e5bcb226f17e9302183c71196566965b7cdc1f5be7146",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: כפתור נושאים אחרונים.txt */
(function () {
    'use strict';

    const styles = `
        #recent-topics-tooltip{position:fixed;background-color:#212529;color:#fff;padding:2px 10px;border-radius:6px;font-size:16px;font-weight:150;font-family:"Assistant",sans-serif;white-space:nowrap;z-index:1100;pointer-events:none;--arrow-size:6px;}
        #recent-topics-tooltip::before{content:"";position:absolute;top:50%;left:100%;margin-top:calc(-1*var(--arrow-size));border-width:var(--arrow-size);border-style:solid;border-color:transparent transparent transparent #212529;}
    `;
    GM_addStyle(styles);

    let currentTooltip = null;
    const TOOLTIP_TEXT = "נושאים אחרונים";
    const TOOLTIP_GAP = -100;

    function showDynamicTooltip(targetElement) {
        const sidebar = document.querySelector('nav[component="sidebar/left"]');
        if (sidebar && sidebar.classList.contains('open')) {
            return;
        }

        removeDynamicTooltip();
        currentTooltip = document.createElement('div');
        currentTooltip.id = 'recent-topics-tooltip';
        currentTooltip.textContent = TOOLTIP_TEXT;
        document.body.appendChild(currentTooltip);
        const rect = targetElement.getBoundingClientRect();
        const tooltipRect = currentTooltip.getBoundingClientRect();
        let top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
        let left = rect.left + rect.width + TOOLTIP_GAP - 58;
        if (top < 5) top = 5;
        if (top + tooltipRect.height > window.innerHeight - 5) top = window.innerHeight - tooltipRect.height - 5;
        if (left + tooltipRect.width > window.innerWidth - 5) left = window.innerWidth - tooltipRect.width - 5;
        currentTooltip.style.top = `${top}px`;
        currentTooltip.style.left = `${left}px`;
        currentTooltip.style.right = 'auto';
    }

    function removeDynamicTooltip() {
        if (currentTooltip) {
            currentTooltip.remove();
            currentTooltip = null;
        }
    }

    function waitForNavBar() {
        const navBar = document.querySelector('#main-nav');
        const postsElement = navBar?.querySelector('[data-bs-original-title="פוסטים אחרונים"]');
        if (navBar && postsElement) addRecentTopicsButton(postsElement); else requestAnimationFrame(waitForNavBar);
    }

    function addRecentTopicsButton(anchorElement) {
        if (anchorElement.parentNode.querySelector('[data-bs-original-title="נושאים אחרונים"]')) return;
        const button = document.createElement('li');
        button.className = 'nav-item mx-2';
        button.innerHTML = `<a class="nav-link navigation-link d-flex gap-2 justify-content-between align-items-center" href="https://mitmachim.top/search?in=titles&term=&matchWords=all&by=&categories=&searchChildren=false&hasTags=&replies=&repliesFilter=atleast&timeFilter=newer&timeRange=&sortBy=topic.timestamp&sortDirection=desc&showAs=topics" aria-label="נושאים אחרונים"><span class="d-flex gap-2 align-items-center text-nowrap truncate-open"><img src="https://mitmachim.top/assets/uploads/files/1736619302714-220_f_113125302_tteb9ox2w2h554esgjduh9a7mvsy5zfo-removebg-preview.png" alt="נושאים אחרונים" style="width: 24px; height: 24px; object-fit: contain;"/><span class="nav-text small visible-open fw-semibold text-truncate">נושאים אחרונים</span></span></a>`;
        anchorElement.insertAdjacentElement('afterend', button);
        const buttonLink = button.querySelector('a');
        buttonLink.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.setItem('clickedRecentTopics', 'true');
            handleRecentTopicsClick(e.target.closest('a').href);
        });
        button.addEventListener('mouseenter', (event) => {
            showDynamicTooltip(event.currentTarget);
        });
        button.addEventListener('mouseleave', removeDynamicTooltip);
    }

    function handleRecentTopicsClick(targetUrl) {
        history.pushState(null, '', targetUrl);
        updatePageTitleAndContent();
    }

    function updatePageTitleAndContent() {
        if (sessionStorage.getItem('clickedRecentTopics') === 'true' && window.location.href.includes('sortBy=topic.timestamp')) {
            document.title = 'נושאים אחרונים';
            ['.flex-shrink-0.pe-2.border-end-md.text-sm.mb-3', '.d-flex.flex-wrap.gap-2.align-items-center[component="search/filters"]', '.card.card-header.text-xs.px-2.py-1.fw-semibold.border-0.align-self-start'].forEach((selector) => document.querySelector(selector)?.remove());
        }
    }

    waitForNavBar();
    updatePageTitleAndContent();
    new MutationObserver(updatePageTitleAndContent).observe(document.body, { childList: true, subtree: true });
    window.addEventListener('popstate', updatePageTitleAndContent);
})();
/* SOURCE_END: כפתור נושאים אחרונים.txt */
        }
    },

    {
        id: "profile-linkifier",
        name: "מתמחים טופ - קישורים ומיילים לחיצים בפרופיל",
        description: "הופך כתובות אתרים וכתובות מייל בפרופילי מתמחים טופ לקישורים לחיצים",
        category: "משתמשים ופרופיל",
        originalFile: "קישורים ומיילים לחיצים בפרופיל.txt",
        version: "1.7",
        author: "טופ-שבמתמחים",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "8af69df0fc0f115b77e5a57b4355686f54960db9927d5ea62474409353ffbdde",
        originalBodySha256: "d8356c4e2ffc4a4b86e2dcf659110aeb654727ca7d2075d21599b408b1fa28f7",
        embeddedBodySha256: "d8356c4e2ffc4a4b86e2dcf659110aeb654727ca7d2075d21599b408b1fa28f7",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: קישורים ומיילים לחיצים בפרופיל.txt */
(function () {
    'use strict';

    const SELECTORS = [
        'span.text-center.text-break.w-100.px-2.ff-secondary',
        'span.text-center.fs-6.ff-secondary',
    ];

    function injectStyles() {
        if (document.getElementById('mt-link-style')) return;
        const s = document.createElement('style');
        s.id = 'mt-link-style';
        s.textContent = `
            .mt-link {
                color: #0073aa !important;
                text-decoration: none !important;
                word-break: break-all;
                cursor: pointer !important;
            }
            .mt-link:hover {
                text-decoration: underline !important;
            }
        `;
        document.head.appendChild(s);
    }

    function gmailUrl(email) {
        return 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(email);
    }

    function processSpan(span) {
        if (span.dataset.mtDone) return;
        span.dataset.mtDone = '1';

        const text = span.innerText.trim();
        if (!text) return;

        const COMBINED = /([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})|(https?:\/\/[^\s<>"']+|(?:www\.)[^\s<>"']+\.[a-z]{2,}[^\s<>"']*)/g;

        let lastIndex = 0;
        let hasMatch = false;
        const fragment = document.createDocumentFragment();
        let match;

        while ((match = COMBINED.exec(text)) !== null) {
            hasMatch = true;
            if (match.index > lastIndex) {
                fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
            }
            const a = document.createElement('a');
            a.className = 'mt-link';
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            if (match[1]) {
                a.textContent = '✉ ' + match[1];
                a.href = gmailUrl(match[1]);
            } else {
                const url = match[2];
                a.textContent = '🔗 ' + url;
                a.href = url.startsWith('http') ? url : 'https://' + url;
            }
            fragment.appendChild(a);
            lastIndex = match.index + match[0].length;
        }

        if (!hasMatch) return;
        if (lastIndex < text.length) {
            fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
        }
        span.innerHTML = '';
        span.appendChild(fragment);
    }

    function processAll() {
        if (!location.pathname.startsWith('/user/')) return;
        SELECTORS.forEach(sel => {
            document.querySelectorAll(sel).forEach(processSpan);
        });
    }

    function resetAndProcess() {
        if (!location.pathname.startsWith('/user/')) return;
        document.querySelectorAll('[data-mt-done]').forEach(el => {
            delete el.dataset.mtDone;
        });
        setTimeout(processAll, 400);
        setTimeout(processAll, 1000);
    }

    const _pushState = history.pushState.bind(history);
    history.pushState = function (...args) {
        _pushState(...args);
        resetAndProcess();
    };

    window.addEventListener('popstate', resetAndProcess);

    const observer = new MutationObserver((mutations) => {
        if (!location.pathname.startsWith('/user/')) return;
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1) continue;
                if (SELECTORS.some(sel => node.matches?.(sel))) {
                    processSpan(node);
                    continue;
                }
                SELECTORS.forEach(sel => {
                    node.querySelectorAll?.(sel).forEach(processSpan);
                });
            }
        }
    });

    function init() {
        injectStyles();
        processAll();
        observer.observe(document.body, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
/* SOURCE_END: קישורים ומיילים לחיצים בפרופיל.txt */
        }
    },

    {
        id: "private-user-notes",
        name: "משתמשים מסומנים והערות אישיות | מתמחים טופ",
        description: "תגיות, הערות פרטיות, מועדפים, מרכז ניהול, ייבוא וייצוא למשתמשי מתמחים טופ",
        category: "משתמשים ופרופיל",
        originalFile: "משתמשים מסומנים והערות אישיות.txt",
        version: "2.0.0",
        author: "frozi",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*","https://www.mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: ["mt-private-user-notes:database","mt-private-user-notes:settings","mt-private-user-notes:automatic-backup"],
        sourceSha256: "44fd8e946d997fd70e5663885ddc80cf762b87918c35d4afe9f4b5fd54c42131",
        originalBodySha256: "f5bbd55aa7ff22df2e7b610c4708259061fa93b4af42ab85556be4384db5f748",
        embeddedBodySha256: "f5bbd55aa7ff22df2e7b610c4708259061fa93b4af42ab85556be4384db5f748",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: משתמשים מסומנים והערות אישיות.txt */
(function () {
    'use strict';

    /* =========================================================
       הגדרות ומפתחות שמירה

       נשמרים אותם מפתחות מהגרסאות הקודמות,
       כדי שפרטים שכבר נשמרו לא יימחקו.
       ========================================================= */

    const SCRIPT_ID = 'mt-private-user-notes';
    const STORAGE_KEY = `${SCRIPT_ID}:database`;
    const SETTINGS_KEY = `${SCRIPT_ID}:settings`;
    const BACKUP_KEY = `${SCRIPT_ID}:automatic-backup`;

    const DATABASE_VERSION = 2;

    const DEFAULT_SETTINGS = {
        showFloatingButton: true,
        showInlineTags: true,
        showFavoriteStar: true,
        showNoteOnHover: true
    };

    const PRESET_COLORS = [
        '#2563eb',
        '#7c3aed',
        '#db2777',
        '#dc2626',
        '#ea580c',
        '#ca8a04',
        '#16a34a',
        '#0d9488',
        '#0891b2',
        '#475569',
        '#6b7280',
        '#111827'
    ];

    const state = {
        database: loadDatabase(),
        settings: loadSettings(),

        currentUrl: location.href,

        editorOverlay: null,
        managerOverlay: null,
        noteTooltip: null,

        observer: null,
        scanScheduled: false,
        profileRenderScheduled: false
    };

    /* =========================================================
       שמירה וטעינה
       ========================================================= */

    function createEmptyDatabase() {
        return {
            version: DATABASE_VERSION,
            updatedAt: new Date().toISOString(),
            users: {}
        };
    }

    function loadDatabase() {
        try {
            const stored = GM_getValue(STORAGE_KEY, null);

            if (!stored) {
                return createEmptyDatabase();
            }

            const parsed =
                typeof stored === 'string'
                    ? JSON.parse(stored)
                    : stored;

            if (
                !parsed ||
                typeof parsed !== 'object' ||
                !parsed.users ||
                typeof parsed.users !== 'object'
            ) {
                return createEmptyDatabase();
            }

            const database = {
                version:
                    Number(parsed.version) ||
                    DATABASE_VERSION,

                updatedAt:
                    parsed.updatedAt ||
                    new Date().toISOString(),

                users: {}
            };

            for (const [uid, record] of Object.entries(parsed.users)) {
                database.users[String(uid)] =
                    normalizeUserRecord(uid, record);
            }

            return database;
        } catch (error) {
            console.error(
                `[${SCRIPT_ID}] שגיאה בטעינת הנתונים`,
                error
            );

            return createEmptyDatabase();
        }
    }

    function saveDatabase() {
        state.database.version = DATABASE_VERSION;
        state.database.updatedAt =
            new Date().toISOString();

        GM_setValue(
            STORAGE_KEY,
            JSON.stringify(state.database)
        );
    }

    function loadSettings() {
        try {
            const stored =
                GM_getValue(SETTINGS_KEY, null);

            if (!stored) {
                return { ...DEFAULT_SETTINGS };
            }

            const parsed =
                typeof stored === 'string'
                    ? JSON.parse(stored)
                    : stored;

            return {
                ...DEFAULT_SETTINGS,
                ...(parsed || {})
            };
        } catch {
            return { ...DEFAULT_SETTINGS };
        }
    }

    function saveSettings() {
        GM_setValue(
            SETTINGS_KEY,
            JSON.stringify(state.settings)
        );
    }

    function createAutomaticBackup() {
        const backup = {
            createdAt: new Date().toISOString(),
            database: cloneObject(state.database),
            settings: cloneObject(state.settings)
        };

        GM_setValue(
            BACKUP_KEY,
            JSON.stringify(backup)
        );
    }

    function loadAutomaticBackup() {
        try {
            const stored =
                GM_getValue(BACKUP_KEY, null);

            if (!stored) {
                return null;
            }

            return typeof stored === 'string'
                ? JSON.parse(stored)
                : stored;
        } catch {
            return null;
        }
    }

    function cloneObject(value) {
        return JSON.parse(JSON.stringify(value));
    }

    /* =========================================================
       מבנה רשומת משתמש
       ========================================================= */

    function createEmptyUserRecord(uid) {
        const now = new Date().toISOString();

        return {
            uid: String(uid),
            username: '',
            userslug: '',
            profileUrl: '',

            label: '',
            note: '',
            color: PRESET_COLORS[0],
            favorite: false,

            createdAt: now,
            updatedAt: now,
            lastSeenAt: now
        };
    }

    function normalizeUserRecord(uid, input = {}) {
        const empty = createEmptyUserRecord(uid);

        return {
            ...empty,
            ...input,

            uid: String(uid),

            username:
                String(input.username || '').trim(),

            userslug:
                String(input.userslug || '').trim(),

            profileUrl:
                String(input.profileUrl || '').trim(),

            label:
                String(input.label || '').trim(),

            note:
                String(input.note || '').trim(),

            color:
                isValidHexColor(input.color)
                    ? input.color
                    : empty.color,

            favorite:
                Boolean(input.favorite),

            createdAt:
                input.createdAt ||
                empty.createdAt,

            updatedAt:
                input.updatedAt ||
                empty.updatedAt,

            lastSeenAt:
                input.lastSeenAt ||
                empty.lastSeenAt
        };
    }

    function getUserRecord(uid) {
        if (!uid) {
            return null;
        }

        return (
            state.database.users[String(uid)] ||
            null
        );
    }

    function saveUserRecord(record) {
        if (!record?.uid) {
            return;
        }

        const normalized =
            normalizeUserRecord(
                record.uid,
                record
            );

        normalized.updatedAt =
            new Date().toISOString();

        state.database.users[normalized.uid] =
            normalized;

        saveDatabase();
        refreshAll();
    }

    function deleteUserRecord(uid) {
        if (!uid) {
            return;
        }

        delete state.database.users[String(uid)];

        saveDatabase();
        refreshAll();
    }

    function recordHasContent(record) {
        return Boolean(
            record &&
            (
                record.label ||
                record.note ||
                record.favorite
            )
        );
    }

    function isValidHexColor(value) {
        return /^#[0-9a-f]{6}$/i.test(
            String(value || '')
        );
    }

    /* =========================================================
       עיצוב
       ========================================================= */

    function addStyles() {
        if (
            document.getElementById(
                `${SCRIPT_ID}-styles`
            )
        ) {
            return;
        }

        const style = document.createElement('style');
        style.id = `${SCRIPT_ID}-styles`;

        style.textContent = `
            /* ---------- תגיות ליד ניקים ---------- */

            .mtpun-inline-wrapper {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                margin-inline-start: 5px;
                vertical-align: middle;
                font: inherit;
                line-height: inherit;
            }

            .mtpun-inline-tag {
                display: inline-flex;
                align-items: center;
                max-width: 155px;
                min-height: 19px;
                padding: 1px 7px;
                color: var(--mtpun-color);
                background: var(--mtpun-light);
                border: 1px solid var(--mtpun-border);
                border-radius: 999px;
                font-family: inherit;
                font-size: 11px;
                font-weight: 650;
                line-height: 1.35;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                cursor: pointer;
                user-select: none;
                transition:
                    filter 120ms ease,
                    transform 120ms ease,
                    box-shadow 120ms ease;
            }

            .mtpun-inline-tag:hover {
                filter: brightness(0.97);
                box-shadow:
                    0 2px 6px rgba(0,0,0,0.09);
            }

            .mtpun-inline-tag:active {
                transform: scale(0.96);
            }

            .mtpun-favorite-star {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 17px;
                height: 17px;
                color: #eab308;
                font-size: 14px;
                line-height: 1;
                cursor: pointer;
                filter:
                    drop-shadow(
                        0 1px 1px rgba(0,0,0,0.14)
                    );
            }

            /* ---------- כרטיס בדף פרופיל ---------- */

            .mtpun-profile-card {
                position: relative !important;
                z-index: 2 !important;
                display: block !important;
                clear: both !important;
                width: 100% !important;
                max-width: 100% !important;
                min-height: 0 !important;
                margin: 0 0 18px !important;
                padding: 15px 17px !important;
                direction: rtl;
                box-sizing: border-box !important;
                color: #1f2937;
                background:
                    linear-gradient(
                        135deg,
                        var(--mtpun-light),
                        #ffffff 72%
                    );
                border: 1px solid var(--mtpun-border);
                border-inline-start:
                    4px solid var(--mtpun-color);
                border-radius: 12px;
                box-shadow:
                    0 3px 12px rgba(0,0,0,0.06);
                font-family: Arial, sans-serif;
                overflow: visible !important;
                pointer-events: auto !important;
            }

            .mtpun-profile-card * {
                pointer-events: auto;
            }

            .mtpun-profile-card-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 12px;
            }

            .mtpun-profile-card-title {
                display: flex;
                align-items: center;
                gap: 7px;
                font-size: 14px;
                font-weight: 700;
            }

            .mtpun-profile-card-description {
                margin-top: 5px;
                color: #6b7280;
                font-size: 12px;
                line-height: 1.45;
            }

            .mtpun-profile-card-details {
                margin-top: 12px;
                padding-top: 11px;
                border-top: 1px solid #e5e7eb;
            }

            .mtpun-profile-card-tag {
                display: inline-flex;
                max-width: 100%;
                padding: 3px 10px;
                margin-bottom: 8px;
                color: var(--mtpun-color);
                background: var(--mtpun-light);
                border: 1px solid var(--mtpun-border);
                border-radius: 999px;
                font-size: 12px;
                font-weight: 700;
            }

            .mtpun-profile-card-favorite {
                margin-bottom: 7px;
                color: #ca8a04;
                font-size: 12px;
                font-weight: 700;
            }

            .mtpun-profile-card-note {
                color: #4b5563;
                font-size: 13px;
                line-height: 1.65;
                white-space: pre-wrap;
                word-break: break-word;
            }

            .mtpun-profile-card-empty {
                color: #6b7280;
                font-size: 12px;
            }

            /* ---------- כפתורים ---------- */

            .mtpun-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                min-height: 37px;
                padding: 8px 14px;
                border: 1px solid transparent;
                border-radius: 8px;
                font-family: Arial, sans-serif;
                font-size: 13px;
                font-weight: 650;
                line-height: 1.2;
                cursor: pointer !important;
                pointer-events: auto !important;
                user-select: none;
                transition:
                    transform 120ms ease,
                    background-color 120ms ease,
                    border-color 120ms ease;
            }

            .mtpun-button:active {
                transform: scale(0.97);
            }

            .mtpun-button-primary {
                color: #fff;
                background: #2563eb;
                border-color: #2563eb;
            }

            .mtpun-button-primary:hover {
                background: #1d4ed8;
                border-color: #1d4ed8;
            }

            .mtpun-button-secondary {
                color: #374151;
                background: #fff;
                border-color: #d1d5db;
            }

            .mtpun-button-secondary:hover {
                background: #f9fafb;
            }

            .mtpun-button-danger {
                color: #b91c1c;
                background: #fff;
                border-color: #fecaca;
            }

            .mtpun-button-danger:hover {
                background: #fef2f2;
            }

            /* ---------- כפתור ניהול צף ---------- */

            .mtpun-floating-button {
                position: fixed;
                left: 18px;
                bottom: 18px;
                z-index: 9998;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 49px;
                height: 49px;
                padding: 0;
                color: #fff;
                background: #2563eb;
                border: 0;
                border-radius: 50%;
                box-shadow:
                    0 5px 18px rgba(0,0,0,0.23);
                font-size: 21px;
                cursor: pointer;
                transition:
                    transform 130ms ease,
                    box-shadow 130ms ease;
            }

            .mtpun-floating-button:hover {
                transform: translateY(-2px);
                box-shadow:
                    0 8px 23px rgba(0,0,0,0.28);
            }

            .mtpun-floating-count {
                position: absolute;
                top: -4px;
                right: -4px;
                min-width: 20px;
                height: 20px;
                padding: 0 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                background: #dc2626;
                border: 2px solid #fff;
                border-radius: 999px;
                font-size: 10px;
                font-weight: 700;
            }

            /* ---------- חלונות ---------- */

            .mtpun-overlay {
                position: fixed;
                inset: 0;
                z-index: 2147483000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                background: rgba(15, 23, 42, 0.58);
                backdrop-filter: blur(3px);
            }

            .mtpun-modal {
                width: min(920px, 96vw);
                max-height: 92vh;
                display: flex;
                flex-direction: column;
                direction: rtl;
                color: #1f2937;
                background: #fff;
                border-radius: 16px;
                box-shadow:
                    0 22px 65px rgba(0,0,0,0.31);
                overflow: hidden;
                font-family: Arial, sans-serif;
            }

            .mtpun-editor-modal {
                width: min(570px, 96vw);
            }

            .mtpun-modal-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
                padding: 17px 20px;
                background:
                    linear-gradient(
                        135deg,
                        #eff6ff,
                        #fff
                    );
                border-bottom: 1px solid #e5e7eb;
            }

            .mtpun-modal-title {
                margin: 0;
                font-size: 20px;
                font-weight: 700;
            }

            .mtpun-modal-subtitle {
                margin-top: 3px;
                color: #6b7280;
                font-size: 12px;
            }

            .mtpun-close-button {
                flex: 0 0 auto;
                width: 36px;
                height: 36px;
                padding: 0;
                color: #6b7280;
                background: transparent;
                border: 0;
                border-radius: 8px;
                font-size: 26px;
                line-height: 1;
                cursor: pointer;
            }

            .mtpun-close-button:hover {
                color: #111827;
                background: #f3f4f6;
            }

            .mtpun-modal-body {
                min-height: 0;
                padding: 18px 20px;
                overflow-y: auto;
            }

            .mtpun-modal-footer {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 10px;
                padding: 14px 20px;
                background: #f9fafb;
                border-top: 1px solid #e5e7eb;
            }

            /* ---------- טופס ---------- */

            .mtpun-form {
                display: grid;
                gap: 15px;
            }

            .mtpun-label {
                display: block;
                margin-bottom: 6px;
                color: #374151;
                font-size: 13px;
                font-weight: 700;
            }

            .mtpun-input,
            .mtpun-textarea,
            .mtpun-select {
                width: 100%;
                padding: 10px 11px;
                color: #111827;
                background: #fff;
                border: 1px solid #d1d5db;
                border-radius: 9px;
                box-sizing: border-box;
                outline: none;
                font-family: Arial, sans-serif;
                font-size: 14px;
            }

            .mtpun-input:focus,
            .mtpun-textarea:focus,
            .mtpun-select:focus {
                border-color: #2563eb;
                box-shadow:
                    0 0 0 3px rgba(37,99,235,0.12);
            }

            .mtpun-textarea {
                min-height: 125px;
                resize: vertical;
                line-height: 1.55;
            }

            .mtpun-color-row {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 8px;
            }

            .mtpun-color-option {
                width: 27px;
                height: 27px;
                padding: 0;
                background: var(--color);
                border: 2px solid transparent;
                border-radius: 50%;
                cursor: pointer;
                box-shadow:
                    0 1px 4px rgba(0,0,0,0.17);
            }

            .mtpun-color-option.selected {
                border-color: #fff;
                outline: 2px solid var(--color);
                transform: scale(1.08);
            }

            .mtpun-color-custom {
                width: 44px;
                height: 31px;
                padding: 2px;
                background: #fff;
                border: 1px solid #d1d5db;
                border-radius: 7px;
                cursor: pointer;
            }

            .mtpun-checkbox {
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                user-select: none;
            }

            .mtpun-checkbox input {
                width: 17px;
                height: 17px;
            }

            /* ---------- מרכז ניהול ---------- */

            .mtpun-toolbar {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 9px;
                margin-bottom: 14px;
            }

            .mtpun-search-input {
                flex: 1 1 250px;
            }

            .mtpun-stats {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 14px;
            }

            .mtpun-stat {
                padding: 7px 10px;
                color: #4b5563;
                background: #f3f4f6;
                border-radius: 8px;
                font-size: 12px;
            }

            .mtpun-users-list {
                display: grid;
                gap: 10px;
            }

            .mtpun-user-card {
                display: grid;
                grid-template-columns:
                    minmax(0, 1fr) auto;
                gap: 12px;
                padding: 13px 14px;
                border: 1px solid #e5e7eb;
                border-inline-start:
                    4px solid var(--mtpun-color);
                border-radius: 11px;
                background: #fff;
            }

            .mtpun-user-card:hover {
                background: #fafafa;
            }

            .mtpun-user-name {
                color: #1d4ed8;
                font-size: 14px;
                font-weight: 700;
                text-decoration: none;
            }

            .mtpun-user-name:hover {
                text-decoration: underline;
            }

            .mtpun-user-uid {
                margin-inline-start: 6px;
                color: #9ca3af;
                font-size: 10px;
            }

            .mtpun-manager-label {
                display: inline-flex;
                max-width: 230px;
                padding: 2px 8px;
                margin-inline-start: 7px;
                color: var(--mtpun-color);
                background: var(--mtpun-light);
                border-radius: 999px;
                font-size: 11px;
                font-weight: 700;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .mtpun-manager-note {
                margin-top: 7px;
                color: #4b5563;
                font-size: 12px;
                line-height: 1.6;
                white-space: pre-wrap;
                word-break: break-word;
            }

            .mtpun-manager-meta {
                margin-top: 5px;
                color: #9ca3af;
                font-size: 10px;
            }

            .mtpun-user-actions {
                display: flex;
                align-items: flex-start;
                gap: 6px;
            }

            .mtpun-icon-button {
                width: 34px;
                height: 34px;
                padding: 0;
                color: #4b5563;
                background: #fff;
                border: 1px solid #d1d5db;
                border-radius: 8px;
                cursor: pointer;
            }

            .mtpun-icon-button:hover {
                color: #1d4ed8;
                background: #eff6ff;
                border-color: #bfdbfe;
            }

            .mtpun-empty-state {
                padding: 42px 20px;
                text-align: center;
                color: #6b7280;
                background: #f9fafb;
                border: 1px dashed #d1d5db;
                border-radius: 12px;
            }

            .mtpun-settings-box {
                margin-top: 16px;
                padding: 13px;
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                border-radius: 10px;
            }

            .mtpun-settings-title {
                display: block;
                margin-bottom: 9px;
                font-size: 13px;
                font-weight: 700;
            }

            .mtpun-settings-list {
                display: grid;
                gap: 8px;
            }

            /* ---------- בועה והודעה ---------- */

            .mtpun-note-tooltip {
                position: fixed;
                z-index: 2147483647;
                display: none;
                min-width: 190px;
                max-width: 330px;
                padding: 10px 12px;
                direction: rtl;
                text-align: right;
                color: #fff;
                background: rgba(30,35,44,0.98);
                border: 1px solid rgba(255,255,255,0.12);
                border-radius: 10px;
                box-shadow:
                    0 10px 32px rgba(0,0,0,0.27);
                font-family: Arial, sans-serif;
                font-size: 13px;
                line-height: 1.55;
                white-space: pre-wrap;
                pointer-events: none;
            }

            .mtpun-note-tooltip-title {
                margin-bottom: 5px;
                padding-bottom: 5px;
                font-weight: 700;
                border-bottom:
                    1px solid rgba(255,255,255,0.13);
            }

            .mtpun-toast {
                position: fixed;
                left: 50%;
                bottom: 25px;
                z-index: 2147483647;
                max-width: min(420px, 90vw);
                padding: 10px 15px;
                direction: rtl;
                color: #fff;
                background: #1f2937;
                border-radius: 9px;
                box-shadow:
                    0 7px 25px rgba(0,0,0,0.25);
                transform: translateX(-50%);
                font-family: Arial, sans-serif;
                font-size: 13px;
            }

            @media (max-width: 650px) {
                .mtpun-profile-card-header {
                    align-items: stretch;
                    flex-direction: column;
                }

                .mtpun-profile-card-header
                .mtpun-button {
                    width: 100%;
                }

                .mtpun-user-card {
                    grid-template-columns: 1fr;
                }

                .mtpun-user-actions {
                    justify-content: flex-end;
                }

                .mtpun-floating-button {
                    left: 12px;
                    bottom: 12px;
                    width: 45px;
                    height: 45px;
                }
            }
        `;

        document.head.appendChild(style);
    }

    /* =========================================================
       כלי צבע
       ========================================================= */

    function applyColorVariables(element, color) {
        const safeColor =
            isValidHexColor(color)
                ? color
                : PRESET_COLORS[0];

        element.style.setProperty(
            '--mtpun-color',
            safeColor
        );

        element.style.setProperty(
            '--mtpun-light',
            hexToRgba(safeColor, 0.09)
        );

        element.style.setProperty(
            '--mtpun-border',
            hexToRgba(safeColor, 0.36)
        );
    }

    function hexToRgba(hex, alpha) {
        const clean = String(hex || '')
            .replace('#', '')
            .trim();

        if (!/^[0-9a-f]{6}$/i.test(clean)) {
            return `rgba(37,99,235,${alpha})`;
        }

        const red =
            parseInt(clean.slice(0, 2), 16);

        const green =
            parseInt(clean.slice(2, 4), 16);

        const blue =
            parseInt(clean.slice(4, 6), 16);

        return `rgba(${red},${green},${blue},${alpha})`;
    }

    /* =========================================================
       זיהוי המשתמש בדף פרופיל
       ========================================================= */

    function isProfilePage() {
        return /^\/user\/[^/]+\/?$/i.test(
            location.pathname
        );
    }

    function getCurrentProfileUser() {
        if (!isProfilePage()) {
            return null;
        }

        const pageData = window.ajaxify?.data;

        if (
            pageData?.uid &&
            (
                pageData.username ||
                pageData.userslug ||
                pageData.displayname
            )
        ) {
            return {
                uid: String(pageData.uid),

                username:
                    pageData.displayname ||
                    pageData.username ||
                    '',

                userslug:
                    pageData.userslug ||
                    getSlugFromCurrentUrl(),

                profileUrl:
                    location.href
            };
        }

        const account =
            document.querySelector('.account');

        const picture =
            account?.querySelector(
                '[component="avatar/picture"][data-uid], ' +
                '[component="avatar/icon"][data-uid], ' +
                '[component="user/picture"][data-uid]'
            );

        const uid =
            picture?.getAttribute('data-uid');

        if (!uid) {
            return null;
        }

        const username =
            account.querySelector('.fullname')
                ?.textContent?.trim() ||
            account.querySelector('.username')
                ?.textContent?.replace(/^@/, '').trim() ||
            picture.getAttribute('title') ||
            '';

        return {
            uid: String(uid),
            username,
            userslug: getSlugFromCurrentUrl(),
            profileUrl: location.href
        };
    }

    function getSlugFromCurrentUrl() {
        const match =
            location.pathname.match(
                /^\/user\/([^/?#]+)/i
            );

        if (!match) {
            return '';
        }

        try {
            return decodeURIComponent(match[1]);
        } catch {
            return match[1];
        }
    }

    function getSlugFromHref(href) {
        const match =
            String(href || '').match(
                /\/user\/([^/?#]+)/i
            );

        if (!match) {
            return '';
        }

        try {
            return decodeURIComponent(match[1]);
        } catch {
            return match[1];
        }
    }

    /* =========================================================
       מיקום הכרטיס בדף הפרופיל
       ========================================================= */

    function findProfileAccount() {
        return document.querySelector(
            '#content > .account, #content .account'
        );
    }

    function findProfileHeaderRow(account) {
        if (!account) {
            return null;
        }

        /*
         * זהו האזור שמכיל את תמונת הפרופיל,
         * הניק, כפתור המעקב וכפתור הצ׳אט.
         */
        return Array.from(account.children).find(element => {
            return (
                element.querySelector(
                    '.avatar-wrapper, ' +
                    '[component="avatar/picture"], ' +
                    '[component="avatar/icon"]'
                ) &&
                element.querySelector(
                    '.fullname, .username'
                )
            );
        }) || null;
    }

    function findProfileContentRow(account) {
        if (!account) {
            return null;
        }

        return Array.from(account.children).find(element => {
            return Boolean(
                element.querySelector(
                    '.account-content'
                )
            );
        }) || null;
    }

    /* =========================================================
       כרטיס הפרופיל
       ========================================================= */

    function renderProfileCard() {
        document
            .querySelectorAll(
                '.mtpun-profile-card'
            )
            .forEach(element => element.remove());

        const user = getCurrentProfileUser();

        if (!user) {
            return;
        }

        const account = findProfileAccount();

        if (!account) {
            return;
        }

        updateStoredUserDetails(user);

        const record = getUserRecord(user.uid);

        const card =
            document.createElement('section');

        card.className =
            'mtpun-profile-card';

        card.dataset.mtpunOwned = 'true';
        card.dataset.uid = user.uid;

        applyColorVariables(
            card,
            record?.color ||
            PRESET_COLORS[0]
        );

        card.innerHTML = `
            <div class="mtpun-profile-card-header">
                <div>
                    <div class="mtpun-profile-card-title">
                        <span>📝</span>
                        <span>הסימון האישי שלי</span>
                    </div>

                    <div class="mtpun-profile-card-description">
                        תגית והערה פרטית למשתמש הזה.
                        המידע מוצג רק אצלך.
                    </div>
                </div>

                <button
                    type="button"
                    class="mtpun-button mtpun-button-primary"
                    data-mtpun-action="edit-profile-user"
                    data-uid="${escapeAttribute(user.uid)}"
                >
                    ${
                        record
                            ? 'עריכת התגית וההערה'
                            : 'הוספת תגית והערה'
                    }
                </button>
            </div>

            ${
                recordHasContent(record)
                    ? `
                        <div class="mtpun-profile-card-details">
                            ${
                                record.label
                                    ? `
                                        <div class="mtpun-profile-card-tag">
                                            ${escapeHtml(record.label)}
                                        </div>
                                    `
                                    : ''
                            }

                            ${
                                record.favorite
                                    ? `
                                        <div class="mtpun-profile-card-favorite">
                                            ★ משתמש מועדף
                                        </div>
                                    `
                                    : ''
                            }

                            <div class="mtpun-profile-card-note">
                                ${
                                    record.note
                                        ? escapeHtml(record.note)
                                        : 'לא נכתבה הערה פרטית.'
                                }
                            </div>
                        </div>
                    `
                    : `
                        <div
                            class="mtpun-profile-card-empty"
                            style="margin-top:10px;"
                        >
                            עדיין לא הוספת תגית או הערה פרטית למשתמש הזה.
                        </div>
                    `
            }
        `;

        const headerRow =
            findProfileHeaderRow(account);

        const contentRow =
            findProfileContentRow(account);

        /*
         * הכרטיס נכנס אחרי כותרת הפרופיל,
         * ולכן אינו נמצא מאחורי תמונת הרקע או האווטאר.
         */
        if (headerRow) {
            headerRow.insertAdjacentElement(
                'afterend',
                card
            );
        } else if (contentRow) {
            contentRow.insertAdjacentElement(
                'beforebegin',
                card
            );
        } else {
            account.appendChild(card);
        }
    }

    /* =========================================================
       זיהוי משתמשים במקומות אחרים באתר
       ========================================================= */

    function extractUserFromAnchor(anchor) {
        if (!(anchor instanceof Element)) {
            return null;
        }

        const href =
            anchor.getAttribute('href') || '';

        if (!/\/user\//i.test(href)) {
            return null;
        }

        let uid =
            anchor.getAttribute('data-uid');

        if (!uid) {
            uid =
                anchor.closest('[data-uid]')
                    ?.getAttribute('data-uid');
        }

        if (!uid) {
            const nearbyContainer =
                anchor.closest(
                    '.post-header, ' +
                    '[itemprop="author"], ' +
                    '.user-info, ' +
                    '.account, ' +
                    'li'
                );

            uid =
                nearbyContainer
                    ?.querySelector('[data-uid]')
                    ?.getAttribute('data-uid');
        }

        if (!uid || !/^\d+$/.test(uid)) {
            return null;
        }

        const username =
            anchor.getAttribute('data-username') ||
            anchor.textContent?.trim() ||
            '';

        return {
            uid: String(uid),
            username,
            userslug: getSlugFromHref(href),

            profileUrl:
                new URL(
                    href,
                    location.origin
                ).href
        };
    }

    function updateStoredUserDetails(user) {
        if (!user?.uid) {
            return;
        }

        const record =
            getUserRecord(user.uid);

        if (!record) {
            return;
        }

        let changed = false;

        if (
            user.username &&
            record.username !== user.username
        ) {
            record.username = user.username;
            changed = true;
        }

        if (
            user.userslug &&
            record.userslug !== user.userslug
        ) {
            record.userslug = user.userslug;
            changed = true;
        }

        if (
            user.profileUrl &&
            record.profileUrl !== user.profileUrl
        ) {
            record.profileUrl = user.profileUrl;
            changed = true;
        }

        record.lastSeenAt =
            new Date().toISOString();

        if (changed) {
            state.database.users[user.uid] =
                normalizeUserRecord(
                    user.uid,
                    record
                );

            saveDatabase();
        }
    }

    /* =========================================================
       תגיות ליד שמות המשתמשים
       ========================================================= */

    function removeInlineTags() {
        document
            .querySelectorAll(
                '.mtpun-inline-wrapper'
            )
            .forEach(element => element.remove());
    }

    function scanInlineTags(root = document) {
        if (!state.settings.showInlineTags) {
            removeInlineTags();
            return;
        }

        const anchors = [];

        const selector = [
            'a[data-uid][href*="/user/"]',
            'a[data-username][href*="/user/"]',
            '[itemprop="author"] a[href*="/user/"]',
            '.post-header a[href*="/user/"]'
        ].join(',');

        if (
            root instanceof Element &&
            root.matches(selector)
        ) {
            anchors.push(root);
        }

        if (
            root instanceof Document ||
            root instanceof Element
        ) {
            anchors.push(
                ...root.querySelectorAll(selector)
            );
        }

        for (const anchor of anchors) {
            if (
                anchor.closest(
                    '.mtpun-overlay, ' +
                    '.mtpun-profile-card, ' +
                    '.mtpun-inline-wrapper'
                )
            ) {
                continue;
            }

            const user =
                extractUserFromAnchor(anchor);

            if (!user) {
                continue;
            }

            const record =
                getUserRecord(user.uid);

            if (!record) {
                continue;
            }

            updateStoredUserDetails(user);

            if (!record.label && !record.favorite) {
                continue;
            }

            const parent = anchor.parentElement;

            if (!parent) {
                continue;
            }

            const existing =
                Array.from(parent.children).find(
                    element =>
                        element.classList.contains(
                            'mtpun-inline-wrapper'
                        ) &&
                        element.dataset.uid === user.uid
                );

            if (existing) {
                continue;
            }

            const wrapper =
                document.createElement('span');

            wrapper.className =
                'mtpun-inline-wrapper';

            wrapper.dataset.uid = user.uid;
            wrapper.dataset.mtpunOwned = 'true';

            applyColorVariables(
                wrapper,
                record.color
            );

            if (
                state.settings.showFavoriteStar &&
                record.favorite
            ) {
                const star =
                    document.createElement('span');

                star.className =
                    'mtpun-favorite-star';

                star.textContent = '★';
                star.title = 'משתמש מועדף';

                star.dataset.mtpunAction =
                    'edit-user';

                star.dataset.uid = user.uid;

                wrapper.appendChild(star);
            }

            if (record.label) {
                const tag =
                    document.createElement('span');

                tag.className =
                    'mtpun-inline-tag';

                tag.textContent =
                    record.label;

                tag.dataset.mtpunAction =
                    'edit-user';

                tag.dataset.uid = user.uid;

                if (
                    state.settings.showNoteOnHover &&
                    record.note
                ) {
                    tag.dataset.mtpunTooltip =
                        record.note;

                    tag.dataset.mtpunTooltipTitle =
                        record.username ||
                        `משתמש ${record.uid}`;
                }

                wrapper.appendChild(tag);
            }

            anchor.insertAdjacentElement(
                'afterend',
                wrapper
            );
        }
    }

    /* =========================================================
       חלון עריכת משתמש
       ========================================================= */

    function openUserEditor(uid, context = {}) {
        closeUserEditor();

        const existing =
            getUserRecord(uid);

        const record =
            normalizeUserRecord(
                uid,
                {
                    ...(existing || {}),

                    username:
                        existing?.username ||
                        context.username ||
                        '',

                    userslug:
                        existing?.userslug ||
                        context.userslug ||
                        '',

                    profileUrl:
                        existing?.profileUrl ||
                        context.profileUrl ||
                        ''
                }
            );

        const overlay =
            document.createElement('div');

        overlay.className = 'mtpun-overlay';
        overlay.dataset.mtpunOwned = 'true';

        overlay.dataset.uid = record.uid;
        overlay.dataset.username =
            record.username;

        overlay.dataset.userslug =
            record.userslug;

        overlay.dataset.profileUrl =
            record.profileUrl;

        overlay.dataset.createdAt =
            record.createdAt;

        overlay.innerHTML = `
            <div class="mtpun-modal mtpun-editor-modal">
                <div class="mtpun-modal-header">
                    <div>
                        <h2 class="mtpun-modal-title">
                            סימון אישי למשתמש
                        </h2>

                        <div class="mtpun-modal-subtitle">
                            ${escapeHtml(
                                record.username ||
                                `UID ${record.uid}`
                            )}
                        </div>
                    </div>

                    <button
                        type="button"
                        class="mtpun-close-button"
                        data-mtpun-action="close-editor"
                        aria-label="סגירה"
                    >
                        ×
                    </button>
                </div>

                <div class="mtpun-modal-body">
                    <div class="mtpun-form">
                        <div>
                            <label class="mtpun-label">
                                תגית קצרה
                            </label>

                            <input
                                type="text"
                                class="mtpun-input"
                                data-mtpun-field="label"
                                maxlength="60"
                                placeholder="לדוגמה: מבין במחשבים"
                                value="${escapeAttribute(record.label)}"
                            >
                        </div>

                        <div>
                            <label class="mtpun-label">
                                הערה פרטית
                            </label>

                            <textarea
                                class="mtpun-textarea"
                                data-mtpun-field="note"
                                maxlength="3000"
                                placeholder="כתוב כאן פרטים שרק אתה תראה..."
                            >${escapeHtml(record.note)}</textarea>
                        </div>

                        <div>
                            <label class="mtpun-label">
                                צבע התגית
                            </label>

                            <div class="mtpun-color-row">
                                ${PRESET_COLORS.map(color => `
                                    <button
                                        type="button"
                                        class="mtpun-color-option ${
                                            color.toLowerCase() ===
                                            record.color.toLowerCase()
                                                ? 'selected'
                                                : ''
                                        }"
                                        style="--color:${color}"
                                        data-mtpun-action="select-color"
                                        data-color="${color}"
                                        title="${color}"
                                    ></button>
                                `).join('')}

                                <input
                                    type="color"
                                    class="mtpun-color-custom"
                                    data-mtpun-field="color"
                                    value="${escapeAttribute(record.color)}"
                                    title="בחירת צבע אחר"
                                >
                            </div>
                        </div>

                        <label class="mtpun-checkbox">
                            <input
                                type="checkbox"
                                data-mtpun-field="favorite"
                                ${
                                    record.favorite
                                        ? 'checked'
                                        : ''
                                }
                            >

                            <span>
                                סמן את המשתמש כמועדף
                            </span>
                        </label>
                    </div>
                </div>

                <div class="mtpun-modal-footer">
                    <div>
                        ${
                            existing
                                ? `
                                    <button
                                        type="button"
                                        class="mtpun-button mtpun-button-danger"
                                        data-mtpun-action="delete-user"
                                        data-uid="${escapeAttribute(record.uid)}"
                                    >
                                        מחיקת הסימון
                                    </button>
                                `
                                : ''
                        }
                    </div>

                    <div
                        style="
                            display:flex;
                            gap:8px;
                            flex-wrap:wrap;
                        "
                    >
                        <button
                            type="button"
                            class="mtpun-button mtpun-button-secondary"
                            data-mtpun-action="close-editor"
                        >
                            ביטול
                        </button>

                        <button
                            type="button"
                            class="mtpun-button mtpun-button-primary"
                            data-mtpun-action="save-user"
                            data-uid="${escapeAttribute(record.uid)}"
                        >
                            שמירה
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        state.editorOverlay = overlay;

        setTimeout(() => {
            overlay
                .querySelector(
                    '[data-mtpun-field="label"]'
                )
                ?.focus();
        }, 30);
    }

    function saveEditorForm() {
        const overlay =
            state.editorOverlay;

        if (!overlay) {
            return;
        }

        const uid =
            overlay.dataset.uid;

        const oldRecord =
            getUserRecord(uid);

        const record =
            normalizeUserRecord(
                uid,
                {
                    ...(oldRecord || {}),

                    username:
                        overlay.dataset.username ||
                        oldRecord?.username ||
                        '',

                    userslug:
                        overlay.dataset.userslug ||
                        oldRecord?.userslug ||
                        '',

                    profileUrl:
                        overlay.dataset.profileUrl ||
                        oldRecord?.profileUrl ||
                        '',

                    createdAt:
                        overlay.dataset.createdAt ||
                        oldRecord?.createdAt,

                    label:
                        overlay
                            .querySelector(
                                '[data-mtpun-field="label"]'
                            )
                            ?.value.trim() || '',

                    note:
                        overlay
                            .querySelector(
                                '[data-mtpun-field="note"]'
                            )
                            ?.value.trim() || '',

                    color:
                        overlay
                            .querySelector(
                                '[data-mtpun-field="color"]'
                            )
                            ?.value ||
                        PRESET_COLORS[0],

                    favorite:
                        Boolean(
                            overlay.querySelector(
                                '[data-mtpun-field="favorite"]'
                            )?.checked
                        )
                }
            );

        if (!recordHasContent(record)) {
            deleteUserRecord(uid);

            showToast(
                'לא הוזנו פרטים ולכן הסימון הוסר'
            );
        } else {
            saveUserRecord(record);
            showToast('הפרטים נשמרו');
        }

        closeUserEditor();
    }

    function closeUserEditor() {
        state.editorOverlay?.remove();
        state.editorOverlay = null;
    }

    /* =========================================================
       מרכז הניהול
       ========================================================= */

    function openManager() {
        closeManager();

        const overlay =
            document.createElement('div');

        overlay.className = 'mtpun-overlay';
        overlay.dataset.mtpunOwned = 'true';

        overlay.innerHTML = `
            <div class="mtpun-modal">
                <div class="mtpun-modal-header">
                    <div>
                        <h2 class="mtpun-modal-title">
                            המשתמשים המסומנים שלי
                        </h2>

                        <div class="mtpun-modal-subtitle">
                            הנתונים נשמרים מקומית בתוך Tampermonkey
                        </div>
                    </div>

                    <button
                        type="button"
                        class="mtpun-close-button"
                        data-mtpun-action="close-manager"
                        aria-label="סגירה"
                    >
                        ×
                    </button>
                </div>

                <div class="mtpun-modal-body">
                    <div class="mtpun-toolbar">
                        <input
                            type="search"
                            class="mtpun-input mtpun-search-input"
                            placeholder="חיפוש לפי ניק, תגית או הערה..."
                            data-mtpun-manager-search
                        >

                        <select
                            class="mtpun-select"
                            data-mtpun-manager-filter
                            style="width:auto;"
                        >
                            <option value="all">
                                כל המשתמשים
                            </option>

                            <option value="favorites">
                                מועדפים בלבד
                            </option>

                            <option value="notes">
                                עם הערות
                            </option>

                            <option value="labels">
                                עם תגיות
                            </option>
                        </select>

                        <select
                            class="mtpun-select"
                            data-mtpun-manager-sort
                            style="width:auto;"
                        >
                            <option value="updated">
                                עודכן לאחרונה
                            </option>

                            <option value="name">
                                לפי שם
                            </option>

                            <option value="created">
                                נוסף לאחרונה
                            </option>

                            <option value="favorites">
                                מועדפים תחילה
                            </option>
                        </select>
                    </div>

                    <div
                        class="mtpun-stats"
                        data-mtpun-manager-stats
                    ></div>

                    <div
                        class="mtpun-users-list"
                        data-mtpun-manager-list
                    ></div>

                    <div class="mtpun-settings-box">
                        <span class="mtpun-settings-title">
                            הגדרות תצוגה
                        </span>

                        <div class="mtpun-settings-list">
                            ${createSettingCheckbox(
                                'showFloatingButton',
                                'הצג כפתור ניהול צף'
                            )}

                            ${createSettingCheckbox(
                                'showInlineTags',
                                'הצג תגיות ליד הניקים'
                            )}

                            ${createSettingCheckbox(
                                'showFavoriteStar',
                                'הצג כוכב למשתמש מועדף'
                            )}

                            ${createSettingCheckbox(
                                'showNoteOnHover',
                                'הצג הערה בריחוף על התגית'
                            )}
                        </div>
                    </div>
                </div>

                <div class="mtpun-modal-footer">
                    <div
                        style="
                            display:flex;
                            gap:8px;
                            flex-wrap:wrap;
                        "
                    >
                        <button
                            type="button"
                            class="mtpun-button mtpun-button-secondary"
                            data-mtpun-action="export"
                        >
                            ייצוא גיבוי
                        </button>

                        <button
                            type="button"
                            class="mtpun-button mtpun-button-secondary"
                            data-mtpun-action="choose-import"
                        >
                            ייבוא גיבוי
                        </button>

                        <button
                            type="button"
                            class="mtpun-button mtpun-button-secondary"
                            data-mtpun-action="restore-backup"
                        >
                            שחזור גיבוי אוטומטי
                        </button>

                        <input
                            type="file"
                            accept=".json,application/json"
                            data-mtpun-import-file
                            hidden
                        >
                    </div>

                    <button
                        type="button"
                        class="mtpun-button mtpun-button-secondary"
                        data-mtpun-action="close-manager"
                    >
                        סגירה
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        state.managerOverlay = overlay;

        renderManager();
    }

    function createSettingCheckbox(key, label) {
        return `
            <label class="mtpun-checkbox">
                <input
                    type="checkbox"
                    data-mtpun-setting="${key}"
                    ${
                        state.settings[key]
                            ? 'checked'
                            : ''
                    }
                >

                <span>${escapeHtml(label)}</span>
            </label>
        `;
    }

    function renderManager() {
        const overlay =
            state.managerOverlay;

        if (!overlay) {
            return;
        }

        const search =
            overlay
                .querySelector(
                    '[data-mtpun-manager-search]'
                )
                ?.value.trim()
                .toLowerCase() || '';

        const filter =
            overlay
                .querySelector(
                    '[data-mtpun-manager-filter]'
                )
                ?.value || 'all';

        const sort =
            overlay
                .querySelector(
                    '[data-mtpun-manager-sort]'
                )
                ?.value || 'updated';

        let records =
            Object.values(
                state.database.users
            ).map(record =>
                normalizeUserRecord(
                    record.uid,
                    record
                )
            );

        records = records.filter(record => {
            if (
                filter === 'favorites' &&
                !record.favorite
            ) {
                return false;
            }

            if (
                filter === 'notes' &&
                !record.note
            ) {
                return false;
            }

            if (
                filter === 'labels' &&
                !record.label
            ) {
                return false;
            }

            if (!search) {
                return true;
            }

            const searchable = [
                record.username,
                record.userslug,
                record.label,
                record.note,
                record.uid
            ]
                .join(' ')
                .toLowerCase();

            return searchable.includes(search);
        });

        records.sort((a, b) => {
            if (sort === 'name') {
                return (
                    a.username ||
                    a.uid
                ).localeCompare(
                    b.username ||
                    b.uid,
                    'he'
                );
            }

            if (sort === 'created') {
                return (
                    new Date(b.createdAt) -
                    new Date(a.createdAt)
                );
            }

            if (sort === 'favorites') {
                if (
                    a.favorite !== b.favorite
                ) {
                    return (
                        Number(b.favorite) -
                        Number(a.favorite)
                    );
                }
            }

            return (
                new Date(b.updatedAt) -
                new Date(a.updatedAt)
            );
        });

        renderManagerStats(
            overlay,
            records
        );

        const list =
            overlay.querySelector(
                '[data-mtpun-manager-list]'
            );

        if (!list) {
            return;
        }

        if (!records.length) {
            list.innerHTML = `
                <div class="mtpun-empty-state">
                    <div
                        style="
                            font-size:32px;
                            margin-bottom:8px;
                        "
                    >
                        📝
                    </div>

                    לא נמצאו משתמשים מתאימים.
                </div>
            `;

            return;
        }

        list.innerHTML =
            records.map(record =>
                createManagerCardHtml(record)
            ).join('');
    }

    function renderManagerStats(
        overlay,
        visibleRecords
    ) {
        const allRecords =
            Object.values(
                state.database.users
            );

        const favorites =
            allRecords.filter(
                record => record.favorite
            ).length;

        const withNotes =
            allRecords.filter(
                record => record.note
            ).length;

        const stats =
            overlay.querySelector(
                '[data-mtpun-manager-stats]'
            );

        if (!stats) {
            return;
        }

        stats.innerHTML = `
            <span class="mtpun-stat">
                סה״כ: ${allRecords.length}
            </span>

            <span class="mtpun-stat">
                מוצגים: ${visibleRecords.length}
            </span>

            <span class="mtpun-stat">
                מועדפים: ${favorites}
            </span>

            <span class="mtpun-stat">
                עם הערות: ${withNotes}
            </span>
        `;
    }

    function createManagerCardHtml(record) {
        const profileUrl =
            record.profileUrl ||
            (
                record.userslug
                    ? `${location.origin}/user/${encodeURIComponent(record.userslug)}`
                    : ''
            );

        return `
            <article
                class="mtpun-user-card"
                style="
                    --mtpun-color:${escapeAttribute(record.color)};
                    --mtpun-light:${hexToRgba(record.color, 0.09)};
                "
            >
                <div>
                    <div>
                        ${
                            profileUrl
                                ? `
                                    <a
                                        class="mtpun-user-name"
                                        href="${escapeAttribute(profileUrl)}"
                                    >
                                        ${escapeHtml(
                                            record.username ||
                                            `משתמש ${record.uid}`
                                        )}
                                    </a>
                                `
                                : `
                                    <span class="mtpun-user-name">
                                        ${escapeHtml(
                                            record.username ||
                                            `משתמש ${record.uid}`
                                        )}
                                    </span>
                                `
                        }

                        <span class="mtpun-user-uid">
                            UID ${escapeHtml(record.uid)}
                        </span>

                        ${
                            record.favorite
                                ? `
                                    <span
                                        style="
                                            color:#eab308;
                                            margin-inline-start:5px;
                                        "
                                        title="מועדף"
                                    >
                                        ★
                                    </span>
                                `
                                : ''
                        }

                        ${
                            record.label
                                ? `
                                    <span class="mtpun-manager-label">
                                        ${escapeHtml(record.label)}
                                    </span>
                                `
                                : ''
                        }
                    </div>

                    <div class="mtpun-manager-note">
                        ${
                            record.note
                                ? escapeHtml(record.note)
                                : 'אין הערה.'
                        }
                    </div>

                    <div class="mtpun-manager-meta">
                        עודכן:
                        ${escapeHtml(
                            formatDateTime(
                                record.updatedAt
                            )
                        )}
                    </div>
                </div>

                <div class="mtpun-user-actions">
                    <button
                        type="button"
                        class="mtpun-icon-button"
                        data-mtpun-action="edit-user"
                        data-uid="${escapeAttribute(record.uid)}"
                        title="עריכה"
                    >
                        ✎
                    </button>

                    <button
                        type="button"
                        class="mtpun-icon-button"
                        data-mtpun-action="delete-user"
                        data-uid="${escapeAttribute(record.uid)}"
                        title="מחיקה"
                    >
                        🗑
                    </button>
                </div>
            </article>
        `;
    }

    function closeManager() {
        state.managerOverlay?.remove();
        state.managerOverlay = null;
    }

    /* =========================================================
       ייצוא
       ========================================================= */

    function exportDatabase() {
        const exportData = {
            application:
                'Mitmachim Top Private User Notes',

            exportedAt:
                new Date().toISOString(),

            version:
                DATABASE_VERSION,

            database:
                cloneObject(state.database),

            settings:
                cloneObject(state.settings)
        };

        const json =
            JSON.stringify(
                exportData,
                null,
                2
            );

        const blob =
            new Blob(
                [json],
                {
                    type:
                        'application/json;charset=utf-8'
                }
            );

        const url =
            URL.createObjectURL(blob);

        const anchor =
            document.createElement('a');

        const date =
            new Date()
                .toISOString()
                .slice(0, 10);

        anchor.href = url;
        anchor.download =
            `mitmachim-user-notes-${date}.json`;

        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();

        setTimeout(
            () => URL.revokeObjectURL(url),
            1000
        );

        showToast('קובץ הגיבוי נוצר');
    }

    /* =========================================================
       ייבוא
       ========================================================= */

    async function importDatabaseFile(file) {
        try {
            const text = await file.text();
            const parsed = JSON.parse(text);

            const importedDatabase =
                extractImportedDatabase(parsed);

            if (!importedDatabase) {
                throw new Error(
                    'מבנה הקובץ אינו מתאים'
                );
            }

            const mode = prompt(
                'כיצד לייבא?\n\n' +
                'כתוב 1 כדי למזג עם הנתונים הקיימים.\n' +
                'כתוב 2 כדי להחליף את כל הנתונים.',
                '1'
            );

            if (mode !== '1' && mode !== '2') {
                return;
            }

            createAutomaticBackup();

            if (mode === '2') {
                state.database =
                    createEmptyDatabase();
            }

            for (
                const [uid, importedRecord]
                of Object.entries(
                    importedDatabase.users || {}
                )
            ) {
                const normalized =
                    normalizeUserRecord(
                        uid,
                        importedRecord
                    );

                const existing =
                    getUserRecord(uid);

                if (mode === '1' && existing) {
                    state.database.users[uid] =
                        mergeUserRecords(
                            existing,
                            normalized
                        );
                } else {
                    state.database.users[uid] =
                        normalized;
                }
            }

            if (
                parsed.settings &&
                typeof parsed.settings ===
                    'object'
            ) {
                state.settings = {
                    ...DEFAULT_SETTINGS,
                    ...state.settings,
                    ...parsed.settings
                };

                saveSettings();
            }

            saveDatabase();
            refreshAll();
            renderManager();

            showToast('הייבוא הושלם');
        } catch (error) {
            console.error(
                `[${SCRIPT_ID}] שגיאת ייבוא`,
                error
            );

            alert(
                `לא ניתן לייבא את הקובץ:\n${
                    error.message ||
                    'שגיאה לא ידועה'
                }`
            );
        }
    }

    function extractImportedDatabase(parsed) {
        if (
            parsed?.database?.users &&
            typeof parsed.database.users ===
                'object'
        ) {
            return parsed.database;
        }

        if (
            parsed?.users &&
            typeof parsed.users === 'object'
        ) {
            return parsed;
        }

        return null;
    }

    function mergeUserRecords(
        existing,
        imported
    ) {
        const existingTime =
            new Date(
                existing.updatedAt || 0
            ).getTime();

        const importedTime =
            new Date(
                imported.updatedAt || 0
            ).getTime();

        const primary =
            importedTime >= existingTime
                ? imported
                : existing;

        const secondary =
            importedTime >= existingTime
                ? existing
                : imported;

        return normalizeUserRecord(
            primary.uid,
            {
                ...secondary,
                ...primary,

                username:
                    primary.username ||
                    secondary.username,

                userslug:
                    primary.userslug ||
                    secondary.userslug,

                profileUrl:
                    primary.profileUrl ||
                    secondary.profileUrl,

                label:
                    primary.label ||
                    secondary.label,

                note:
                    primary.note ||
                    secondary.note
            }
        );
    }

    /* =========================================================
       שחזור גיבוי
       ========================================================= */

    function restoreAutomaticBackup() {
        const backup =
            loadAutomaticBackup();

        if (!backup?.database?.users) {
            alert(
                'לא נמצא גיבוי אוטומטי לשחזור.'
            );

            return;
        }

        const confirmed = confirm(
            'לשחזר את הגיבוי האוטומטי?\n\n' +
            'הנתונים הנוכחיים יוחלפו.'
        );

        if (!confirmed) {
            return;
        }

        const currentDatabase =
            cloneObject(state.database);

        state.database =
            cloneObject(backup.database);

        if (backup.settings) {
            state.settings = {
                ...DEFAULT_SETTINGS,
                ...backup.settings
            };

            saveSettings();
        }

        GM_setValue(
            BACKUP_KEY,
            JSON.stringify({
                createdAt:
                    new Date().toISOString(),

                database:
                    currentDatabase,

                settings:
                    cloneObject(state.settings)
            })
        );

        saveDatabase();
        refreshAll();
        renderManager();

        showToast('הגיבוי שוחזר');
    }

    /* =========================================================
       הכפתור הצף
       ========================================================= */

    function renderFloatingButton() {
        document
            .querySelectorAll(
                '.mtpun-floating-button'
            )
            .forEach(element => element.remove());

        if (!state.settings.showFloatingButton) {
            return;
        }

        const button =
            document.createElement('button');

        button.type = 'button';

        button.className =
            'mtpun-floating-button';

        button.dataset.mtpunOwned = 'true';
        button.dataset.mtpunAction =
            'open-manager';

        button.title =
            'המשתמשים המסומנים שלי';

        button.setAttribute(
            'aria-label',
            'פתיחת המשתמשים המסומנים שלי'
        );

        button.innerHTML = `
            <span>📝</span>

            <span class="mtpun-floating-count">
                ${
                    Object.keys(
                        state.database.users
                    ).length
                }
            </span>
        `;

        document.body.appendChild(button);
    }

    /* =========================================================
       בועת הערה
       ========================================================= */

    function showNoteTooltip(
        target,
        title,
        note
    ) {
        hideNoteTooltip();

        const tooltip =
            document.createElement('div');

        tooltip.className =
            'mtpun-note-tooltip';

        tooltip.dataset.mtpunOwned = 'true';

        tooltip.innerHTML = `
            ${
                title
                    ? `
                        <div class="mtpun-note-tooltip-title">
                            ${escapeHtml(title)}
                        </div>
                    `
                    : ''
            }

            <div>${escapeHtml(note)}</div>
        `;

        document.body.appendChild(tooltip);

        tooltip.style.display = 'block';

        const targetRect =
            target.getBoundingClientRect();

        const tooltipRect =
            tooltip.getBoundingClientRect();

        let left =
            targetRect.left +
            targetRect.width / 2 -
            tooltipRect.width / 2;

        left = Math.max(
            8,
            Math.min(
                left,
                window.innerWidth -
                    tooltipRect.width -
                    8
            )
        );

        let top =
            targetRect.top -
            tooltipRect.height -
            8;

        if (top < 8) {
            top =
                targetRect.bottom + 8;
        }

        tooltip.style.left =
            `${Math.round(left)}px`;

        tooltip.style.top =
            `${Math.round(top)}px`;

        state.noteTooltip = tooltip;
    }

    function hideNoteTooltip() {
        state.noteTooltip?.remove();
        state.noteTooltip = null;
    }

    /* =========================================================
       טיפול מרכזי בלחיצות
       ========================================================= */

    function handleDocumentClick(event) {
        if (!(event.target instanceof Element)) {
            return;
        }

        const actionElement =
            event.target.closest(
                '[data-mtpun-action]'
            );

        if (!actionElement) {
            if (
                event.target ===
                state.editorOverlay
            ) {
                closeUserEditor();
            }

            if (
                event.target ===
                state.managerOverlay
            ) {
                closeManager();
            }

            return;
        }

        const action =
            actionElement.dataset.mtpunAction;

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        if (action === 'edit-profile-user') {
            const user =
                getCurrentProfileUser();

            if (!user) {
                showToast(
                    'לא ניתן היה לזהות את המשתמש'
                );

                return;
            }

            openUserEditor(
                user.uid,
                user
            );

            return;
        }

        if (action === 'edit-user') {
            const uid =
                actionElement.dataset.uid;

            if (!uid) {
                return;
            }

            const record =
                getUserRecord(uid);

            openUserEditor(
                uid,
                record || {}
            );

            return;
        }

        if (action === 'save-user') {
            saveEditorForm();
            return;
        }

        if (action === 'close-editor') {
            closeUserEditor();
            return;
        }

        if (action === 'delete-user') {
            const uid =
                actionElement.dataset.uid;

            if (!uid) {
                return;
            }

            const record =
                getUserRecord(uid);

            const confirmed = confirm(
                `למחוק את הסימון של ${
                    record?.username ||
                    `UID ${uid}`
                }?`
            );

            if (!confirmed) {
                return;
            }

            deleteUserRecord(uid);
            closeUserEditor();
            renderManager();

            showToast('הסימון נמחק');
            return;
        }

        if (action === 'select-color') {
            const overlay =
                actionElement.closest(
                    '.mtpun-overlay'
                );

            const color =
                actionElement.dataset.color;

            const colorInput =
                overlay?.querySelector(
                    '[data-mtpun-field="color"]'
                );

            if (colorInput && color) {
                colorInput.value = color;
            }

            overlay
                ?.querySelectorAll(
                    '.mtpun-color-option'
                )
                .forEach(button => {
                    button.classList.toggle(
                        'selected',
                        button === actionElement
                    );
                });

            return;
        }

        if (action === 'open-manager') {
            openManager();
            return;
        }

        if (action === 'close-manager') {
            closeManager();
            return;
        }

        if (action === 'export') {
            exportDatabase();
            return;
        }

        if (action === 'choose-import') {
            state.managerOverlay
                ?.querySelector(
                    '[data-mtpun-import-file]'
                )
                ?.click();

            return;
        }

        if (action === 'restore-backup') {
            restoreAutomaticBackup();
        }
    }

    function handleDocumentInput(event) {
        if (!(event.target instanceof Element)) {
            return;
        }

        if (
            event.target.matches(
                '[data-mtpun-manager-search]'
            )
        ) {
            renderManager();
        }

        if (
            event.target.matches(
                '[data-mtpun-field="color"]'
            )
        ) {
            const overlay =
                event.target.closest(
                    '.mtpun-overlay'
                );

            overlay
                ?.querySelectorAll(
                    '.mtpun-color-option'
                )
                .forEach(button => {
                    button.classList.toggle(
                        'selected',
                        button.dataset.color
                            ?.toLowerCase() ===
                            event.target.value
                                .toLowerCase()
                    );
                });
        }
    }

    function handleDocumentChange(event) {
        if (!(event.target instanceof Element)) {
            return;
        }

        if (
            event.target.matches(
                '[data-mtpun-manager-filter], ' +
                '[data-mtpun-manager-sort]'
            )
        ) {
            renderManager();
            return;
        }

        if (
            event.target.matches(
                '[data-mtpun-setting]'
            )
        ) {
            const key =
                event.target.dataset.mtpunSetting;

            state.settings[key] =
                Boolean(event.target.checked);

            saveSettings();
            refreshAll();
            return;
        }

        if (
            event.target.matches(
                '[data-mtpun-import-file]'
            )
        ) {
            const file =
                event.target.files?.[0];

            if (file) {
                importDatabaseFile(file);
            }

            event.target.value = '';
        }
    }

    function handleMouseOver(event) {
        if (!(event.target instanceof Element)) {
            return;
        }

        const tag =
            event.target.closest(
                '[data-mtpun-tooltip]'
            );

        if (!tag) {
            return;
        }

        const related =
            event.relatedTarget;

        if (
            related instanceof Node &&
            tag.contains(related)
        ) {
            return;
        }

        showNoteTooltip(
            tag,
            tag.dataset.mtpunTooltipTitle || '',
            tag.dataset.mtpunTooltip || ''
        );
    }

    function handleMouseOut(event) {
        if (!(event.target instanceof Element)) {
            return;
        }

        const tag =
            event.target.closest(
                '[data-mtpun-tooltip]'
            );

        if (!tag) {
            return;
        }

        const related =
            event.relatedTarget;

        if (
            related instanceof Node &&
            tag.contains(related)
        ) {
            return;
        }

        hideNoteTooltip();
    }

    /* =========================================================
       מעקב אחר שינויים באתר
       ========================================================= */

    function scheduleScan() {
        if (state.scanScheduled) {
            return;
        }

        state.scanScheduled = true;

        requestAnimationFrame(() => {
            state.scanScheduled = false;
            scanInlineTags(document);
        });
    }

    function scheduleProfileRender() {
        if (state.profileRenderScheduled) {
            return;
        }

        state.profileRenderScheduled = true;

        setTimeout(() => {
            state.profileRenderScheduled = false;
            renderProfileCard();
        }, 120);
    }

    function observePage() {
        state.observer?.disconnect();

        state.observer =
            new MutationObserver(mutations => {
                let shouldScan = false;
                let shouldRenderProfile = false;

                for (const mutation of mutations) {
                    for (const node of mutation.addedNodes) {
                        if (
                            node.nodeType !==
                            Node.ELEMENT_NODE
                        ) {
                            continue;
                        }

                        const element = node;

                        /*
                         * מתעלמים מכל דבר שהסקריפט עצמו יצר.
                         */
                        if (
                            element.matches?.(
                                '[data-mtpun-owned], ' +
                                '.mtpun-inline-wrapper, ' +
                                '.mtpun-profile-card, ' +
                                '.mtpun-overlay, ' +
                                '.mtpun-floating-button'
                            ) ||
                            element.closest?.(
                                '[data-mtpun-owned]'
                            )
                        ) {
                            continue;
                        }

                        shouldScan = true;

                        if (
                            isProfilePage() &&
                            (
                                element.matches?.(
                                    '.account, .account *'
                                ) ||
                                element.querySelector?.(
                                    '.account'
                                )
                            )
                        ) {
                            shouldRenderProfile = true;
                        }
                    }
                }

                if (shouldScan) {
                    scheduleScan();
                }

                if (
                    shouldRenderProfile &&
                    !document.querySelector(
                        '.mtpun-profile-card'
                    )
                ) {
                    scheduleProfileRender();
                }
            });

        state.observer.observe(
            document.body,
            {
                childList: true,
                subtree: true
            }
        );
    }

    function watchInternalNavigation() {
        setInterval(() => {
            if (
                location.href ===
                state.currentUrl
            ) {
                return;
            }

            state.currentUrl =
                location.href;

            closeUserEditor();
            closeManager();
            hideNoteTooltip();

            removeInlineTags();

            document
                .querySelectorAll(
                    '.mtpun-profile-card'
                )
                .forEach(element =>
                    element.remove()
                );

            setTimeout(() => {
                scanInlineTags(document);
                renderProfileCard();
            }, 100);

            setTimeout(() => {
                scanInlineTags(document);
                renderProfileCard();
            }, 450);

            setTimeout(() => {
                scanInlineTags(document);
                renderProfileCard();
            }, 1000);
        }, 300);
    }

    /* =========================================================
       רענון
       ========================================================= */

    function refreshAll() {
        removeInlineTags();
        scanInlineTags(document);
        renderProfileCard();
        renderFloatingButton();

        if (state.managerOverlay) {
            renderManager();
        }
    }

    /* =========================================================
       עזרים
       ========================================================= */

    function escapeHtml(value) {
        const div =
            document.createElement('div');

        div.textContent =
            String(value ?? '');

        return div.innerHTML;
    }

    function escapeAttribute(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function formatDateTime(value) {
        try {
            const date = new Date(value);

            if (
                Number.isNaN(date.getTime())
            ) {
                return '';
            }

            return new Intl.DateTimeFormat(
                'he-IL',
                {
                    dateStyle: 'short',
                    timeStyle: 'short'
                }
            ).format(date);
        } catch {
            return '';
        }
    }

    function showToast(message) {
        document
            .querySelectorAll(
                '.mtpun-toast'
            )
            .forEach(element =>
                element.remove()
            );

        const toast =
            document.createElement('div');

        toast.className = 'mtpun-toast';
        toast.dataset.mtpunOwned = 'true';
        toast.textContent = message;

        document.body.appendChild(toast);

        setTimeout(
            () => toast.remove(),
            2800
        );
    }

    /* =========================================================
       פקודות בתפריט Tampermonkey
       ========================================================= */

    GM_registerMenuCommand(
        'פתיחת המשתמשים המסומנים',
        openManager
    );

    GM_registerMenuCommand(
        'ייצוא גיבוי',
        exportDatabase
    );

    GM_registerMenuCommand(
        'רענון תגיות וכרטיס פרופיל',
        refreshAll
    );

    /* =========================================================
       הפעלה
       ========================================================= */

    function initialize() {
        if (!document.body) {
            setTimeout(initialize, 50);
            return;
        }

        addStyles();

        /*
         * כל הכפתורים משתמשים בהאזנת אירועים אחת קבועה.
         * כך הם ממשיכים לעבוד גם לאחר ניווט פנימי של NodeBB.
         */
        document.addEventListener(
            'click',
            handleDocumentClick,
            true
        );

        document.addEventListener(
            'input',
            handleDocumentInput,
            true
        );

        document.addEventListener(
            'change',
            handleDocumentChange,
            true
        );

        document.addEventListener(
            'mouseover',
            handleMouseOver,
            true
        );

        document.addEventListener(
            'mouseout',
            handleMouseOut,
            true
        );

        document.addEventListener(
            'keydown',
            event => {
                if (event.key === 'Escape') {
                    closeUserEditor();
                    closeManager();
                    hideNoteTooltip();
                }

                if (
                    event.key === 'Enter' &&
                    (
                        event.ctrlKey ||
                        event.metaKey
                    ) &&
                    state.editorOverlay
                ) {
                    saveEditorForm();
                }
            },
            true
        );

        renderFloatingButton();
        scanInlineTags(document);
        renderProfileCard();

        observePage();
        watchInternalNavigation();

        setTimeout(() => {
            scanInlineTags(document);
            renderProfileCard();
        }, 250);

        setTimeout(() => {
            scanInlineTags(document);
            renderProfileCard();
        }, 900);
    }

    if (document.readyState === 'loading') {
        document.addEventListener(
            'DOMContentLoaded',
            initialize,
            {
                once: true
            }
        );
    } else {
        initialize();
    }
})();
/* SOURCE_END: משתמשים מסומנים והערות אישיות.txt */
        }
    },

    {
        id: "topic-search",
        name: "מתמחים טופ - חיפוש מושלם בתוך נושא",
        description: "חיפוש יציב בתוך נושא, משולב בסרגל, עם הדגשת מילים וניווט ללא איפוס",
        category: "ניווט וחיפוש",
        originalFile: "חיפוש מושלם בתוך נושא.txt",
        version: "5.0.0",
        author: "פרוזי & ChatGPT",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "09c84f8f08139f1d529c8c2c60a070fffb27abbbea2ecf13ea182ea92ed6cd43",
        originalBodySha256: "120a4972afd6c9f65204d61bcea9c717edd3cfe4a1d59c6e8a74248017c7b40d",
        embeddedBodySha256: "120a4972afd6c9f65204d61bcea9c717edd3cfe4a1d59c6e8a74248017c7b40d",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: חיפוש מושלם בתוך נושא.txt */
(function () {
    'use strict';

    /* =========================================================
       הגדרות
    ========================================================= */

    const CONFIG = {
        rootId: 'prozy-topic-search',
        inputId: 'prozy-topic-search-input',
        countId: 'prozy-topic-search-count',

        allHighlightName: 'prozy-topic-search-all',
        activeHighlightName: 'prozy-topic-search-active',

        searchDelay: 170,
        rebuildDelay: 180,

        selectors: {
            posts: [
                '[component="post"][data-pid]',
                'li[component="post"]',
                '.posts-list > li[data-pid]',
                '.posts-list .post-row',
                '.post-row[data-pid]',
                'article[data-pid]',
                '[data-pid].post'
            ],

            content: [
                '[component="post/content"]',
                '.post-content',
                '.post-body',
                '[itemprop="text"]',
                '.content'
            ],

            username: [
                '[component="user/username"]',
                '.username',
                '.user-name',
                '[itemprop="author"]',
                '.post-author'
            ],

            toolbar: [
                '[component="topic/toolbar"]',
                '.topic-main-buttons',
                '.topic-toolbar',
                '.topic-tools',
                '.topic-actions',
                '.topic-header .btn-toolbar',
                '.topic-header + .btn-toolbar',
                '.topic-header + div .btn-toolbar'
            ],

            reply: [
                '[component="topic/reply"]',
                'button[data-action="reply"]',
                'a[data-action="reply"]',
                '.topic-reply',
                '.reply-button'
            ]
        }
    };

    const ICONS = {
        search: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10.5 3a7.5 7.5 0 1 0 4.62 13.41l4.73 4.74
                1.42-1.42-4.74-4.73A7.5 7.5 0 0 0 10.5 3Zm-5.5
                7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"/>
            </svg>
        `,

        previous: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59
                4.58L18 14l-6-6Z"/>
            </svg>
        `,

        next: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 16 6-6-1.41-1.41L12 13.17 7.41
                8.59 6 10l6 6Z"/>
            </svg>
        `,

        close: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6.7 5.3 5.3 5.29 5.3-5.3 1.4
                1.42-5.29 5.3 5.3 5.3-1.42 1.4-5.3-5.29-5.3
                5.3-1.4-1.42 5.29-5.3-5.3-5.3L6.7 5.3Z"/>
            </svg>
        `
    };

    /* =========================================================
       מצב פנימי

       המצב נשמר בזיכרון הסקריפט ולא בתוך שורת החיפוש.
       לכן החלפת הסרגל על ידי NodeBB אינה מאפסת אותו.
    ========================================================= */

    let currentTopicId = getTopicId();

    let currentQuery = '';
    let currentResultIndex = -1;
    let results = [];

    let searchTimer = null;
    let rebuildTimer = null;
    let injectTimer = null;

    let isBuildingResults = false;
    let isNavigating = false;

    let lastPostsSignature = '';

    /* =========================================================
       עיצוב
    ========================================================= */

    GM_addStyle(`
        /*
         * התיבה היא חלק אמיתי מסרגל הנושא.
         * לכן היא זזה יחד איתו ללא חישובי מיקום וללא קפיצות.
         */
        #${CONFIG.rootId} {
            display: flex !important;
            align-items: center !important;
            flex: 1 1 320px !important;
            min-width: 220px !important;
            max-width: 470px !important;
            height: 40px !important;
            margin: 0 12px !important;
            padding: 0 !important;
            direction: rtl !important;
            box-sizing: border-box !important;
            position: relative !important;
            z-index: auto !important;
            order: 20 !important;
        }

        .prozy-topic-search-box {
            display: flex !important;
            align-items: center !important;
            width: 100% !important;
            height: 38px !important;
            padding: 0 6px !important;
            border: 1px solid #d7dee7 !important;
            border-radius: 9px !important;
            background: #ffffff !important;
            box-shadow: 0 1px 4px rgba(22, 39, 60, 0.07) !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
            transition:
                border-color 0.16s ease,
                box-shadow 0.16s ease !important;
        }

        #${CONFIG.rootId}:focus-within .prozy-topic-search-box {
            border-color: #147df5 !important;
            box-shadow: 0 0 0 3px rgba(20, 125, 245, 0.13) !important;
        }

        .prozy-topic-search-icon {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 29px !important;
            height: 29px !important;
            flex: 0 0 29px !important;
            color: #67778a !important;
            pointer-events: none !important;
        }

        .prozy-topic-search-icon svg {
            width: 18px !important;
            height: 18px !important;
            fill: currentColor !important;
        }

        #${CONFIG.inputId} {
            min-width: 0 !important;
            height: 34px !important;
            flex: 1 1 auto !important;
            padding: 0 4px !important;
            border: 0 !important;
            outline: 0 !important;
            background: transparent !important;
            color: #26374a !important;
            box-shadow: none !important;
            font-family: inherit !important;
            font-size: 13px !important;
            font-weight: 400 !important;
            text-align: right !important;
        }

        #${CONFIG.inputId}::placeholder {
            color: #8996a6 !important;
            opacity: 1 !important;
        }

        #${CONFIG.countId} {
            display: none !important;
            align-items: center !important;
            justify-content: center !important;
            min-width: 48px !important;
            height: 25px !important;
            margin: 0 3px !important;
            padding: 0 7px !important;
            border-radius: 6px !important;
            background: #eef3f8 !important;
            color: #657487 !important;
            font-size: 11px !important;
            font-weight: 700 !important;
            line-height: 1 !important;
            white-space: nowrap !important;
            box-sizing: border-box !important;
        }

        #${CONFIG.rootId}.has-query #${CONFIG.countId} {
            display: inline-flex !important;
        }

        #${CONFIG.rootId}.no-results #${CONFIG.countId} {
            background: #fff0f0 !important;
            color: #c43f3f !important;
        }

        .prozy-topic-search-action {
            display: none !important;
            align-items: center !important;
            justify-content: center !important;
            width: 28px !important;
            height: 28px !important;
            flex: 0 0 28px !important;
            padding: 0 !important;
            border: 0 !important;
            border-radius: 6px !important;
            background: transparent !important;
            color: #667589 !important;
            cursor: pointer !important;
            outline: 0 !important;
            box-shadow: none !important;
        }

        #${CONFIG.rootId}.has-query .prozy-topic-search-action {
            display: inline-flex !important;
        }

        .prozy-topic-search-action:hover,
        .prozy-topic-search-action:focus-visible {
            background: #edf4fc !important;
            color: #147df5 !important;
        }

        .prozy-topic-search-action:disabled {
            opacity: 0.35 !important;
            cursor: default !important;
            background: transparent !important;
        }

        .prozy-topic-search-action svg {
            width: 17px !important;
            height: 17px !important;
            fill: currentColor !important;
        }

        /*
         * הדגשת המילים ללא שינוי ה-HTML של הפוסטים.
         */
        ::highlight(${CONFIG.allHighlightName}) {
            background-color: #fff19a;
            color: inherit;
            text-decoration: none;
        }

        ::highlight(${CONFIG.activeHighlightName}) {
            background-color: #ffad33;
            color: #172033;
            text-decoration: underline;
            text-decoration-color: rgba(181, 91, 0, 0.65);
            text-decoration-thickness: 2px;
        }

        .prozy-topic-search-current-post {
            position: relative !important;
            animation: prozyTopicSearchPulse 1.05s ease !important;
        }

        .prozy-topic-search-current-post::after {
            content: "" !important;
            position: absolute !important;
            inset: 3px !important;
            border: 2px solid rgba(20, 125, 245, 0.62) !important;
            border-radius: 9px !important;
            background: rgba(20, 125, 245, 0.025) !important;
            pointer-events: none !important;
            z-index: 3 !important;
        }

        @keyframes prozyTopicSearchPulse {
            0% {
                filter: none;
            }

            45% {
                filter: drop-shadow(0 0 8px rgba(20, 125, 245, 0.28));
            }

            100% {
                filter: none;
            }
        }

        /*
         * מאפשר לסרגל להשתמש במקום הפנוי בלי להזיז את הכפתורים הקיימים.
         */
        .prozy-topic-search-toolbar {
            display: flex !important;
            align-items: center !important;
            flex-wrap: nowrap !important;
        }

        @media (max-width: 1050px) {
            #${CONFIG.rootId} {
                min-width: 180px !important;
                max-width: 340px !important;
                margin: 0 7px !important;
            }

            #${CONFIG.countId} {
                min-width: 42px !important;
                padding: 0 5px !important;
            }
        }

        @media (max-width: 820px) {
            .prozy-topic-search-toolbar {
                flex-wrap: wrap !important;
            }

            #${CONFIG.rootId} {
                order: 100 !important;
                width: 100% !important;
                min-width: 100% !important;
                max-width: none !important;
                flex: 1 0 100% !important;
                margin: 8px 0 0 !important;
            }
        }
    `);

    /* =========================================================
       עזרים
    ========================================================= */

    function getTopicId() {
        const match = location.pathname.match(/\/topic\/(\d+)/i);
        return match ? match[1] : '';
    }

    function isTopicPage() {
        return Boolean(getTopicId());
    }

    function normalizeText(value) {
        return String(value || '')
            .replace(/\u00a0/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .toLocaleLowerCase('he-IL');
    }

    function findFirst(root, selectors) {
        for (const selector of selectors) {
            try {
                const element = root.querySelector(selector);

                if (element) {
                    return element;
                }
            } catch {
                // מתעלמים מבורר שאינו נתמך
            }
        }

        return null;
    }

    function queryAllUnique(selectors, root = document) {
        const set = new Set();

        for (const selector of selectors) {
            try {
                root.querySelectorAll(selector).forEach(element => {
                    set.add(element);
                });
            } catch {
                // מתעלמים מבורר שאינו נתמך
            }
        }

        return Array.from(set);
    }

    function getDirectChild(parent, descendant) {
        let current = descendant;

        while (current && current.parentElement !== parent) {
            current = current.parentElement;
        }

        return current?.parentElement === parent
            ? current
            : null;
    }

    /* =========================================================
       איתור סרגל הנושא
    ========================================================= */

    function findReplyButton() {
        const candidates = [];

        for (const selector of CONFIG.selectors.reply) {
            try {
                document.querySelectorAll(selector).forEach(element => {
                    candidates.push(element);
                });
            } catch {
                // מתעלמים
            }
        }

        document.querySelectorAll('button, a').forEach(element => {
            if (element.closest(`#${CONFIG.rootId}`)) {
                return;
            }

            const text = normalizeText(
                element.textContent ||
                element.getAttribute('title') ||
                element.getAttribute('aria-label')
            );

            if (
                text === 'תגובה' ||
                text.includes('תגובה') ||
                text.includes('הגב')
            ) {
                candidates.push(element);
            }
        });

        return Array.from(new Set(candidates)).find(element => {
            if (!(element instanceof HTMLElement)) {
                return false;
            }

            const rect = element.getBoundingClientRect();

            return (
                rect.width >= 55 &&
                rect.height >= 27 &&
                rect.top > -50 &&
                rect.top < 600
            );
        }) || null;
    }

    function findToolbar() {
        for (const selector of CONFIG.selectors.toolbar) {
            const candidates = Array.from(
                document.querySelectorAll(selector)
            );

            for (const candidate of candidates) {
                if (isSuitableToolbar(candidate)) {
                    return candidate;
                }
            }
        }

        const replyButton = findReplyButton();

        if (replyButton) {
            const parents = [
                replyButton.closest('[component="topic/toolbar"]'),
                replyButton.closest('.topic-main-buttons'),
                replyButton.closest('.topic-toolbar'),
                replyButton.closest('.topic-tools'),
                replyButton.closest('.topic-actions'),
                replyButton.closest('.btn-toolbar'),
                replyButton.closest('.toolbar'),
                replyButton.parentElement,
                replyButton.parentElement?.parentElement
            ].filter(Boolean);

            for (const parent of parents) {
                if (isSuitableToolbar(parent)) {
                    return parent;
                }
            }
        }

        return findToolbarByText();
    }

    function findToolbarByText() {
        const candidates = Array.from(document.querySelectorAll(
            '.d-flex, .btn-toolbar, .toolbar, [class*="topic-tools"], [class*="topic-actions"]'
        ));

        return candidates.find(element => {
            if (!isSuitableToolbar(element)) {
                return false;
            }

            const text = normalizeText(element.textContent);

            return (
                text.includes('תגובה') &&
                (
                    text.includes('מעקב') ||
                    text.includes('סימון') ||
                    text.includes('מחדש') ||
                    text.includes('קטגוריות')
                )
            );
        }) || null;
    }

    function isSuitableToolbar(element) {
        if (!(element instanceof HTMLElement)) {
            return false;
        }

        if (element.closest(`#${CONFIG.rootId}`)) {
            return false;
        }

        const rect = element.getBoundingClientRect();

        if (
            rect.width < 430 ||
            rect.height < 34 ||
            rect.height > 150
        ) {
            return false;
        }

        return element.querySelectorAll(
            'button, a, [role="button"]'
        ).length >= 2;
    }

    /* =========================================================
       יצירת שורת החיפוש
    ========================================================= */

    function createSearchBar() {
        const root = document.createElement('div');

        root.id = CONFIG.rootId;
        root.setAttribute('role', 'search');
        root.setAttribute('aria-label', 'חיפוש בתוך הנושא');

        root.innerHTML = `
            <div class="prozy-topic-search-box">
                <span class="prozy-topic-search-icon">
                    ${ICONS.search}
                </span>

                <input
                    id="${CONFIG.inputId}"
                    type="search"
                    autocomplete="off"
                    spellcheck="false"
                    placeholder="חיפוש בתוך הנושא..."
                    aria-label="חיפוש בתוך הנושא"
                >

                <span
                    id="${CONFIG.countId}"
                    aria-live="polite"
                >
                    0 תוצאות
                </span>

                <button
                    type="button"
                    class="prozy-topic-search-action"
                    data-search-action="previous"
                    title="התוצאה הקודמת"
                    aria-label="התוצאה הקודמת"
                >
                    ${ICONS.previous}
                </button>

                <button
                    type="button"
                    class="prozy-topic-search-action"
                    data-search-action="next"
                    title="התוצאה הבאה"
                    aria-label="התוצאה הבאה"
                >
                    ${ICONS.next}
                </button>

                <button
                    type="button"
                    class="prozy-topic-search-action"
                    data-search-action="clear"
                    title="נקה חיפוש"
                    aria-label="נקה חיפוש"
                >
                    ${ICONS.close}
                </button>
            </div>
        `;

        bindSearchEvents(root);
        restoreSearchBarState(root);

        return root;
    }

    function bindSearchEvents(root) {
        const input = root.querySelector(`#${CONFIG.inputId}`);

        input.addEventListener('input', () => {
            currentQuery = input.value;

            clearTimeout(searchTimer);

            searchTimer = setTimeout(() => {
                runSearch(currentQuery, true);
            }, CONFIG.searchDelay);

            updateInterface();
        });

        input.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                event.preventDefault();

                if (event.shiftKey) {
                    previousResult();
                } else {
                    nextResult();
                }

                return;
            }

            if (event.key === 'Escape') {
                event.preventDefault();
                clearSearch(true);
            }
        });

        root.querySelectorAll('[data-search-action]').forEach(button => {
            button.addEventListener('pointerdown', event => {
                event.preventDefault();
                event.stopPropagation();
            });

            button.addEventListener('mousedown', event => {
                event.preventDefault();
                event.stopPropagation();
            });

            button.addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();

                const liveInput =
                    document.getElementById(CONFIG.inputId);

                if (liveInput) {
                    currentQuery = liveInput.value;
                }

                clearTimeout(searchTimer);

                const action = button.dataset.searchAction;

                if (action === 'next') {
                    nextResult();
                } else if (action === 'previous') {
                    previousResult();
                } else if (action === 'clear') {
                    clearSearch(true);
                }
            }, true);
        });
    }

    function restoreSearchBarState(root) {
        const input = root.querySelector(`#${CONFIG.inputId}`);

        if (input && input.value !== currentQuery) {
            input.value = currentQuery;
        }

        root.classList.toggle(
            'has-query',
            Boolean(normalizeText(currentQuery))
        );

        root.classList.toggle(
            'no-results',
            Boolean(normalizeText(currentQuery)) &&
            results.length === 0
        );
    }

    /* =========================================================
       הכנסת החיפוש לסרגל
    ========================================================= */

    function injectSearchBar() {
        if (!isTopicPage()) {
            document.getElementById(CONFIG.rootId)?.remove();
            return;
        }

        const toolbar = findToolbar();
        const replyButton = findReplyButton();

        if (!toolbar || !replyButton || !toolbar.contains(replyButton)) {
            return;
        }

        toolbar.classList.add('prozy-topic-search-toolbar');

        let root = document.getElementById(CONFIG.rootId);

        if (!root) {
            root = createSearchBar();
        }

        /*
         * אם NodeBB בנה את הסרגל מחדש, מעבירים את אותה תיבה
         * לסרגל החדש בלי לאפס את המצב.
         */
        if (root.parentElement !== toolbar) {
            const replyContainer = getDirectChild(
                toolbar,
                replyButton
            );

            if (replyContainer) {
                replyContainer.insertAdjacentElement(
                    'afterend',
                    root
                );
            } else {
                toolbar.appendChild(root);
            }
        }

        restoreSearchBarState(root);
        updateInterface();
    }

    function scheduleInjection(delay = 60) {
        clearTimeout(injectTimer);

        injectTimer = setTimeout(() => {
            injectSearchBar();
        }, delay);
    }

    /* =========================================================
       פוסטים
    ========================================================= */

    function getPosts() {
        return queryAllUnique(CONFIG.selectors.posts)
            .filter(post => {
                if (!(post instanceof HTMLElement)) {
                    return false;
                }

                return Boolean(
                    findFirst(post, CONFIG.selectors.content)
                );
            });
    }

    function getPostId(post) {
        if (!post) {
            return '';
        }

        return String(
            post.dataset?.pid ||
            post.getAttribute?.('data-pid') ||
            post.id ||
            ''
        );
    }

    function getPostsSignature() {
        return getPosts()
            .map(post => getPostId(post))
            .join('|');
    }

    /* =========================================================
       חיפוש והדגשה
    ========================================================= */

    function runSearch(rawQuery, jumpToFirst = true) {
        const query = normalizeText(rawQuery);

        currentQuery = rawQuery;

        clearHighlights();
        clearCurrentPostClass();

        if (!query) {
            results = [];
            currentResultIndex = -1;
            updateInterface();
            return;
        }

        isBuildingResults = true;

        try {
            results = collectMatches(query);

            if (!results.length) {
                currentResultIndex = -1;
            } else if (jumpToFirst) {
                currentResultIndex = 0;
            } else {
                currentResultIndex = Math.min(
                    Math.max(currentResultIndex, 0),
                    results.length - 1
                );
            }

            applyAllHighlights();
            applyActiveHighlight();
            updateInterface();

            if (results.length && jumpToFirst) {
                scrollToCurrentResult(false);
            }
        } finally {
            isBuildingResults = false;
        }
    }

    function collectMatches(query) {
        const found = [];

        for (const post of getPosts()) {
            const content =
                findFirst(post, CONFIG.selectors.content);

            const username =
                findFirst(post, CONFIG.selectors.username);

            const roots = [];

            if (content) {
                roots.push(content);
            }

            if (username && !content?.contains(username)) {
                roots.push(username);
            }

            for (const root of roots) {
                collectMatchesFromRoot(
                    root,
                    post,
                    query,
                    found
                );
            }
        }

        return found;
    }

    function collectMatchesFromRoot(
        root,
        post,
        query,
        output
    ) {
        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    if (!node.nodeValue?.trim()) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    const parent = node.parentElement;

                    if (!parent) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    if (
                        parent.closest(`
                            script,
                            style,
                            textarea,
                            input,
                            select,
                            option,
                            button,
                            #${CONFIG.rootId},
                            [contenteditable="true"]
                        `)
                    ) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        let textNode;

        while ((textNode = walker.nextNode())) {
            const originalText = textNode.nodeValue || '';

            const lowercaseText =
                originalText.toLocaleLowerCase('he-IL');

            let startIndex = 0;

            while (startIndex < lowercaseText.length) {
                const matchIndex = lowercaseText.indexOf(
                    query,
                    startIndex
                );

                if (matchIndex === -1) {
                    break;
                }

                const range = document.createRange();

                range.setStart(textNode, matchIndex);
                range.setEnd(
                    textNode,
                    matchIndex + query.length
                );

                output.push({
                    range,
                    post,
                    postId: getPostId(post)
                });

                startIndex =
                    matchIndex + Math.max(1, query.length);
            }
        }
    }

    function clearHighlights() {
        if (!window.CSS?.highlights) {
            return;
        }

        CSS.highlights.delete(CONFIG.allHighlightName);
        CSS.highlights.delete(CONFIG.activeHighlightName);
    }

    function applyAllHighlights() {
        if (!window.CSS?.highlights || !results.length) {
            return;
        }

        const ranges = results
            .map(result => result.range)
            .filter(isRangeConnected);

        if (!ranges.length) {
            return;
        }

        CSS.highlights.set(
            CONFIG.allHighlightName,
            new Highlight(...ranges)
        );
    }

    function applyActiveHighlight() {
        if (!window.CSS?.highlights) {
            return;
        }

        CSS.highlights.delete(
            CONFIG.activeHighlightName
        );

        const result = results[currentResultIndex];

        if (
            !result ||
            !isRangeConnected(result.range)
        ) {
            return;
        }

        CSS.highlights.set(
            CONFIG.activeHighlightName,
            new Highlight(result.range)
        );
    }

    function isRangeConnected(range) {
        return Boolean(
            range?.startContainer?.isConnected &&
            range?.endContainer?.isConnected
        );
    }

    /* =========================================================
       ניווט
    ========================================================= */

    function nextResult() {
        prepareResults();

        if (!results.length) {
            return;
        }

        currentResultIndex =
            (currentResultIndex + 1) % results.length;

        applyActiveHighlight();
        updateInterface();
        scrollToCurrentResult(true);
    }

    function previousResult() {
        prepareResults();

        if (!results.length) {
            return;
        }

        currentResultIndex =
            (currentResultIndex - 1 + results.length) %
            results.length;

        applyActiveHighlight();
        updateInterface();
        scrollToCurrentResult(true);
    }

    function prepareResults() {
        const input =
            document.getElementById(CONFIG.inputId);

        if (input) {
            currentQuery = input.value;
        }

        if (!normalizeText(currentQuery)) {
            results = [];
            currentResultIndex = -1;
            clearHighlights();
            updateInterface();
            return;
        }

        const stale =
            !results.length ||
            results.some(result =>
                !isRangeConnected(result.range)
            );

        if (stale) {
            rebuildResultsSilently();
        }
    }

    function scrollToCurrentResult(smooth = true) {
        clearCurrentPostClass();

        let result = results[currentResultIndex];

        if (
            !result ||
            !isRangeConnected(result.range)
        ) {
            rebuildResultsSilently();
            result = results[currentResultIndex];
        }

        if (
            !result ||
            !isRangeConnected(result.range)
        ) {
            updateInterface();
            return;
        }

        const post = result.post;

        if (post?.isConnected) {
            void post.offsetWidth;

            post.classList.add(
                'prozy-topic-search-current-post'
            );
        }

        const rangeRect =
            result.range.getBoundingClientRect();

        const postRect =
            post?.getBoundingClientRect();

        const rect =
            rangeRect.width || rangeRect.height
                ? rangeRect
                : postRect;

        if (!rect) {
            return;
        }

        const targetTop =
            window.scrollY +
            rect.top -
            Math.max(
                120,
                window.innerHeight * 0.25
            );

        isNavigating = true;

        window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: smooth ? 'smooth' : 'auto'
        });

        setTimeout(() => {
            isNavigating = false;
            restoreLiveInput();
            updateInterface();
        }, smooth ? 850 : 80);
    }

    function clearCurrentPostClass() {
        document.querySelectorAll(
            '.prozy-topic-search-current-post'
        ).forEach(post => {
            post.classList.remove(
                'prozy-topic-search-current-post'
            );
        });
    }

    /* =========================================================
       בנייה שקטה מחדש
    ========================================================= */

    function rebuildResultsSilently() {
        const query = normalizeText(currentQuery);

        if (!query) {
            results = [];
            currentResultIndex = -1;
            clearHighlights();
            updateInterface();
            return;
        }

        const previousIndex = currentResultIndex;

        const previousPostId =
            results[previousIndex]?.postId || '';

        isBuildingResults = true;

        try {
            clearHighlights();

            results = collectMatches(query);

            if (!results.length) {
                currentResultIndex = -1;
            } else {
                const samePostIndex =
                    results.findIndex(result => {
                        return (
                            previousPostId &&
                            result.postId === previousPostId
                        );
                    });

                currentResultIndex =
                    samePostIndex >= 0
                        ? samePostIndex
                        : Math.min(
                            Math.max(previousIndex, 0),
                            results.length - 1
                        );
            }

            applyAllHighlights();
            applyActiveHighlight();
            restoreLiveInput();
            updateInterface();
        } finally {
            isBuildingResults = false;
        }
    }

    /* =========================================================
       ממשק
    ========================================================= */

    function restoreLiveInput() {
        const input =
            document.getElementById(CONFIG.inputId);

        if (
            input &&
            input.value !== currentQuery
        ) {
            input.value = currentQuery;
        }
    }

    function updateInterface() {
        const root =
            document.getElementById(CONFIG.rootId);

        const count =
            document.getElementById(CONFIG.countId);

        if (!root || !count) {
            return;
        }

        restoreLiveInput();

        const hasQuery =
            Boolean(normalizeText(currentQuery));

        const hasResults =
            results.length > 0;

        root.classList.toggle(
            'has-query',
            hasQuery
        );

        root.classList.toggle(
            'no-results',
            hasQuery && !hasResults
        );

        const previousButton =
            root.querySelector(
                '[data-search-action="previous"]'
            );

        const nextButton =
            root.querySelector(
                '[data-search-action="next"]'
            );

        if (!hasQuery) {
            count.textContent = '0 תוצאות';

            if (previousButton) {
                previousButton.disabled = true;
            }

            if (nextButton) {
                nextButton.disabled = true;
            }

            return;
        }

        if (!hasResults) {
            count.textContent = 'לא נמצא';

            if (previousButton) {
                previousButton.disabled = true;
            }

            if (nextButton) {
                nextButton.disabled = true;
            }

            return;
        }

        count.textContent =
            `${currentResultIndex + 1} / ${results.length}`;

        if (previousButton) {
            previousButton.disabled = false;
        }

        if (nextButton) {
            nextButton.disabled = false;
        }
    }

    function clearSearch(focusInput = false) {
        clearTimeout(searchTimer);
        clearTimeout(rebuildTimer);

        currentQuery = '';
        currentResultIndex = -1;
        results = [];

        clearHighlights();
        clearCurrentPostClass();

        const input =
            document.getElementById(CONFIG.inputId);

        if (input) {
            input.value = '';

            if (focusInput) {
                input.focus();
            }
        }

        updateInterface();
    }

    /* =========================================================
       שינויי NodeBB
    ========================================================= */

    function checkForTopicChange() {
        const newTopicId = getTopicId();

        if (newTopicId === currentTopicId) {
            scheduleInjection(30);
            scheduleResultsRefresh();
            return;
        }

        currentTopicId = newTopicId;

        clearSearch(false);

        lastPostsSignature = '';

        document
            .getElementById(CONFIG.rootId)
            ?.remove();

        if (newTopicId) {
            setTimeout(
                () => injectSearchBar(),
                100
            );

            setTimeout(
                () => injectSearchBar(),
                500
            );

            setTimeout(
                () => injectSearchBar(),
                1200
            );
        }
    }

    function scheduleResultsRefresh() {
        if (
            isBuildingResults ||
            isNavigating ||
            !normalizeText(currentQuery)
        ) {
            return;
        }

        const signature = getPostsSignature();

        if (!lastPostsSignature) {
            lastPostsSignature = signature;
            return;
        }

        if (signature === lastPostsSignature) {
            return;
        }

        lastPostsSignature = signature;

        clearTimeout(rebuildTimer);

        rebuildTimer = setTimeout(() => {
            if (!normalizeText(currentQuery)) {
                return;
            }

            rebuildResultsSilently();
        }, CONFIG.rebuildDelay);
    }

    function patchHistoryMethod(methodName) {
        const original = history[methodName];

        if (typeof original !== 'function') {
            return;
        }

        history[methodName] = function patchedHistory(
            ...args
        ) {
            const result =
                original.apply(this, args);

            setTimeout(
                checkForTopicChange,
                0
            );

            return result;
        };
    }

    const observer = new MutationObserver(mutations => {
        let toolbarPossiblyChanged = false;
        let postsPossiblyChanged = false;

        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }

            if (
                mutation.addedNodes.length === 0 &&
                mutation.removedNodes.length === 0
            ) {
                continue;
            }

            for (const node of mutation.addedNodes) {
                if (!(node instanceof HTMLElement)) {
                    continue;
                }

                if (
                    node.id === CONFIG.rootId ||
                    node.closest?.(`#${CONFIG.rootId}`)
                ) {
                    continue;
                }

                if (
                    node.matches?.(
                        CONFIG.selectors.posts.join(',')
                    ) ||
                    node.querySelector?.(
                        CONFIG.selectors.posts.join(',')
                    )
                ) {
                    postsPossiblyChanged = true;
                }

                if (
                    node.matches?.(
                        '.btn-toolbar, .toolbar, [component="topic/toolbar"], .topic-main-buttons'
                    ) ||
                    node.querySelector?.(
                        '[component="topic/reply"], .topic-main-buttons'
                    )
                ) {
                    toolbarPossiblyChanged = true;
                }
            }

            if (
                mutation.removedNodes.length > 0 &&
                !document.getElementById(CONFIG.rootId)
            ) {
                toolbarPossiblyChanged = true;
            }
        }

        if (
            toolbarPossiblyChanged ||
            !document.getElementById(CONFIG.rootId)
        ) {
            scheduleInjection(20);
        }

        if (postsPossiblyChanged) {
            scheduleResultsRefresh();
        }
    });

    /* =========================================================
       הפעלה
    ========================================================= */

    function init() {
        if (
            !window.CSS?.highlights ||
            typeof Highlight === 'undefined'
        ) {
            console.warn(
                '[Topic Search] הדפדפן אינו תומך ב-CSS Highlight API'
            );
        }

        patchHistoryMethod('pushState');
        patchHistoryMethod('replaceState');

        window.addEventListener(
            'popstate',
            checkForTopicChange
        );

        /*
         * שינוי hash בזמן גלילה אינו מעבר לנושא.
         */
        window.addEventListener(
            'hashchange',
            () => {
                restoreLiveInput();
            }
        );

        document.addEventListener(
            'ajaxify.end',
            checkForTopicChange
        );

        document.addEventListener(
            'action:ajaxify.end',
            checkForTopicChange
        );

        window.addEventListener(
            'action:ajaxify.end',
            checkForTopicChange
        );

        observer.observe(
            document.documentElement,
            {
                childList: true,
                subtree: true
            }
        );

        lastPostsSignature =
            getPostsSignature();

        injectSearchBar();

        setTimeout(
            injectSearchBar,
            400
        );

        setTimeout(
            injectSearchBar,
            1200
        );

        /*
         * בדיקת ביטחון בלבד.
         * אין כאן חישובי מיקום בזמן גלילה.
         */
        setInterval(() => {
            checkForTopicChange();

            if (
                isTopicPage() &&
                !document.getElementById(CONFIG.rootId)
            ) {
                injectSearchBar();
            }
        }, 1800);
    }

    if (document.readyState === 'loading') {
        document.addEventListener(
            'DOMContentLoaded',
            init,
            { once: true }
        );
    } else {
        init();
    }
})();
/* SOURCE_END: חיפוש מושלם בתוך נושא.txt */
        }
    },

    {
        id: "search-sort-by-post-time",
        name: "מתמחים טופ - חיפוש לפי זמן הפוסט",
        description: "משנה אוטומטית את ברירת המחדל בחיפוש לזמן הפוסט בסדר יורד",
        category: "ניווט וחיפוש",
        originalFile: "חיפוש לפי זמן הפוסט.txt",
        version: "1.0.0",
        author: "Moishy",
        runAt: "document-start",
        matches: ["https://mitmachim.top/*","https://www.mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "08ec9b8ad042561fa70a214b37e0c767608f63d3d0a629acc38356576aa96f02",
        originalBodySha256: "a6056a954c4a112b61038921ec716a38f4df747f3c0eed3fc8af13bb4e0617c8",
        embeddedBodySha256: "a6056a954c4a112b61038921ec716a38f4df747f3c0eed3fc8af13bb4e0617c8",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: חיפוש לפי זמן הפוסט.txt */
(function () {
    'use strict';

    const TARGET_SORT_BY = 'timestamp';
    const TARGET_DIRECTION = 'desc';

    /**
     * בודק האם הכתובת היא של עמוד החיפוש.
     */
    function isSearchUrl(url) {
        return url.pathname === '/search' ||
               url.pathname.startsWith('/search/');
    }

    /**
     * משנה את פרמטרי המיון לזמן הפוסט בסדר יורד.
     */
    function applyPreferredSorting(url) {
        if (!isSearchUrl(url)) {
            return false;
        }

        const currentSortBy = url.searchParams.get('sortBy');
        const currentDirection = url.searchParams.get('sortDirection');

        /*
         * משנים כאשר:
         * 1. לא הוגדר בכלל מיון.
         * 2. המיון הוא ברירת המחדל של כותרת הנושא.
         *
         * כך הסקריפט אינו דורס אפשרויות מיון אחרות
         * שהמשתמש בחר באופן ידני.
         */
        const isDefaultSorting =
            !currentSortBy ||
            currentSortBy === 'topic.title';

        if (!isDefaultSorting) {
            return false;
        }

        let changed = false;

        if (currentSortBy !== TARGET_SORT_BY) {
            url.searchParams.set('sortBy', TARGET_SORT_BY);
            changed = true;
        }

        if (currentDirection !== TARGET_DIRECTION) {
            url.searchParams.set('sortDirection', TARGET_DIRECTION);
            changed = true;
        }

        return changed;
    }

    /**
     * מתקן את כתובת עמוד החיפוש הנוכחי.
     */
    function fixCurrentSearchPage() {
        const url = new URL(window.location.href);

        if (!applyPreferredSorting(url)) {
            return;
        }

        window.location.replace(url.toString());
    }

    /**
     * מוסיף או מעדכן שדה נסתר בטופס.
     */
    function setHiddenInput(form, name, value) {
        let input = form.querySelector(
            `input[name="${CSS.escape(name)}"]`
        );

        if (!input) {
            input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            form.appendChild(input);
        }

        input.value = value;
    }

    /**
     * משנה את פרמטרי המיון עוד לפני שליחת טופס החיפוש.
     */
    function prepareSearchForm(form) {
        const actionUrl = new URL(
            form.getAttribute('action') || window.location.href,
            window.location.origin
        );

        if (!isSearchUrl(actionUrl)) {
            return;
        }

        const sortField = form.querySelector(
            '[name="sortBy"]'
        );

        const directionField = form.querySelector(
            '[name="sortDirection"]'
        );

        const currentSortBy =
            sortField?.value ||
            actionUrl.searchParams.get('sortBy');

        /*
         * לא דורסים מיון אחר שהמשתמש כבר בחר,
         * אלא רק את ברירת המחדל או מצב ללא מיון.
         */
        if (currentSortBy && currentSortBy !== 'topic.title') {
            return;
        }

        if (sortField) {
            sortField.value = TARGET_SORT_BY;
        } else {
            setHiddenInput(form, 'sortBy', TARGET_SORT_BY);
        }

        if (directionField) {
            directionField.value = TARGET_DIRECTION;
        } else {
            setHiddenInput(
                form,
                'sortDirection',
                TARGET_DIRECTION
            );
        }
    }

    /**
     * טיפול בכל שליחת טופס באתר.
     */
    document.addEventListener('submit', function (event) {
        const form = event.target;

        if (!(form instanceof HTMLFormElement)) {
            return;
        }

        prepareSearchForm(form);
    }, true);

    /**
     * טיפול בקישורים שמובילים לחיפוש עם מיון ברירת המחדל.
     */
    document.addEventListener('click', function (event) {
        const link = event.target.closest('a[href]');

        if (!link) {
            return;
        }

        const url = new URL(link.href, window.location.origin);

        if (!applyPreferredSorting(url)) {
            return;
        }

        link.href = url.toString();
    }, true);

    /**
     * טיפול בניווט פנימי של NodeBB ללא רענון מלא.
     */
    function watchHistoryMethod(methodName) {
        const originalMethod = history[methodName];

        history[methodName] = function (...args) {
            const result = originalMethod.apply(this, args);

            setTimeout(fixCurrentSearchPage, 0);

            return result;
        };
    }

    watchHistoryMethod('pushState');
    watchHistoryMethod('replaceState');

    window.addEventListener(
        'popstate',
        fixCurrentSearchPage
    );

    /*
     * בדיקה ראשונית מיד עם טעינת העמוד.
     */
    fixCurrentSearchPage();

    /*
     * בדיקה נוספת לאחר שהעמוד והסקריפטים של NodeBB נטענו.
     */
    document.addEventListener(
        'DOMContentLoaded',
        fixCurrentSearchPage
    );

    window.addEventListener(
        'load',
        fixCurrentSearchPage
    );
})();
/* SOURCE_END: חיפוש לפי זמן הפוסט.txt */
        }
    },

    {
        id: "copy-post-link-content",
        name: "מתמחים טופ - העתקת קישור ותוכן הפוסט",
        description: "מוסיף לכל פוסט אייקונים להעתקת קישור ישיר ולהעתקת תוכן הפוסט",
        category: "תוכן ופוסטים",
        originalFile: "העתקת קישור ותוכן הפוסט.txt",
        version: "1.2.1",
        author: "משה",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "16072089d245d6453803353363a5c1d712285ae022b6a1c48e5b43b3132d2a93",
        originalBodySha256: "1471a2a37a46b68e1f3374a7154cce29627fb74d02f37b7eca37a3673cb93954",
        embeddedBodySha256: "1471a2a37a46b68e1f3374a7154cce29627fb74d02f37b7eca37a3673cb93954",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: העתקת קישור ותוכן הפוסט.txt */
(function () {
    'use strict';

    const CONTAINER_CLASS = 'mt-copy-post-actions';
    const PROCESSED_ATTRIBUTE = 'data-mt-copy-buttons-added';
    const STYLE_ID = 'mt-copy-post-actions-style';

    /* =========================================================
       עיצוב
    ========================================================= */

    function addStyles() {
        if (document.getElementById(STYLE_ID)) {
            return;
        }

        const style = document.createElement('style');

        style.id = STYLE_ID;

        style.textContent = `
            .${CONTAINER_CLASS} {
                display: inline-flex !important;
                align-items: center !important;
                gap: 12px !important;

                order: -100 !important;

                margin: 0 0 0 12px !important;
                padding: 0 !important;

                direction: rtl !important;
                vertical-align: middle !important;
            }

            .mt-copy-icon-button {
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;

                width: 18px !important;
                height: 24px !important;

                margin: 0 !important;
                padding: 0 !important;

                border: 0 !important;
                border-radius: 0 !important;
                outline: none !important;

                background: transparent !important;
                box-shadow: none !important;

                color: #0d6efd !important;

                font-family: inherit !important;
                font-size: 14px !important;
                line-height: 1 !important;

                cursor: pointer !important;
                user-select: none !important;

                opacity: 1 !important;

                transition:
                    color 0.15s ease,
                    opacity 0.15s ease,
                    transform 0.1s ease !important;
            }

            .mt-copy-icon-button:hover {
                color: #0056d6 !important;
                opacity: 0.8 !important;
                background: transparent !important;
            }

            .mt-copy-icon-button:active {
                transform: scale(0.86) !important;
            }

            .mt-copy-icon-button:focus,
            .mt-copy-icon-button:focus-visible {
                outline: none !important;
                box-shadow: none !important;
            }

            .mt-copy-icon-button svg {
                display: block !important;

                width: 14px !important;
                height: 14px !important;

                fill: none !important;
                stroke: currentColor !important;
                stroke-width: 2 !important;
                stroke-linecap: round !important;
                stroke-linejoin: round !important;

                pointer-events: none !important;
            }

            .mt-copy-icon-button.mt-copy-success {
                color: #198754 !important;
            }

            .mt-copy-icon-button.mt-copy-error {
                color: #dc3545 !important;
            }

            [component="post/actions"],
            .post-tools,
            .post-actions,
            .topic-post-tools {
                align-items: center !important;
            }
        `;

        document.head.appendChild(style);
    }

    addStyles();

    /* =========================================================
       אייקונים
    ========================================================= */

    const icons = {
        link: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
        `,

        copy: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
        `,

        check: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 6 9 17l-5-5"></path>
            </svg>
        `,

        error: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M15 9 9 15"></path>
                <path d="m9 9 6 6"></path>
            </svg>
        `
    };

    /* =========================================================
       העתקה ללוח
    ========================================================= */

    async function copyToClipboard(text) {
        if (!text) {
            throw new Error('לא נמצא תוכן להעתקה');
        }

        if (typeof GM_setClipboard === 'function') {
            GM_setClipboard(text, 'text');
            return;
        }

        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return;
        }

        const textarea = document.createElement('textarea');

        textarea.value = text;
        textarea.setAttribute('readonly', '');

        Object.assign(textarea.style, {
            position: 'fixed',
            top: '-9999px',
            left: '-9999px',
            opacity: '0',
            pointerEvents: 'none'
        });

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);

        const succeeded = document.execCommand('copy');

        textarea.remove();

        if (!succeeded) {
            throw new Error('ההעתקה נכשלה');
        }
    }

    /* =========================================================
       יצירת כפתור
    ========================================================= */

    function createIconButton({ icon, title, onClick }) {
        const button = document.createElement('button');

        button.type = 'button';
        button.className = 'mt-copy-icon-button';
        button.title = title;
        button.setAttribute('aria-label', title);

        button.innerHTML = icon;
        button.dataset.originalIcon = icon;

        button.addEventListener('click', async event => {
            event.preventDefault();
            event.stopPropagation();

            if (button.disabled) {
                return;
            }

            button.disabled = true;

            try {
                await onClick();

                button.classList.remove('mt-copy-error');
                button.classList.add('mt-copy-success');
                button.innerHTML = icons.check;
            } catch (error) {
                console.error('[מתמחים טופ – העתקת פוסט]', error);

                button.classList.remove('mt-copy-success');
                button.classList.add('mt-copy-error');
                button.innerHTML = icons.error;
            }

            clearTimeout(button._mtRestoreTimeout);

            button._mtRestoreTimeout = setTimeout(() => {
                button.classList.remove(
                    'mt-copy-success',
                    'mt-copy-error'
                );

                button.innerHTML = button.dataset.originalIcon;
                button.disabled = false;
            }, 1300);
        });

        return button;
    }

    /* =========================================================
       איתור פוסט
    ========================================================= */

    const POST_SELECTOR = `
        [component="post"],
        .topic-post,
        li.posts-list-item,
        .posts-list-item,
        [data-pid]
    `;

    function findPostElement(element) {
        if (!(element instanceof Element)) {
            return null;
        }

        return element.closest(POST_SELECTOR);
    }

    function getPostId(postElement) {
        const possibleValues = [
            postElement.dataset?.pid,
            postElement.getAttribute('data-pid'),
            postElement.getAttribute('data-post-id'),
            postElement.id
        ];

        for (const value of possibleValues) {
            if (!value) {
                continue;
            }

            const match = String(value).match(/\d+/);

            if (match) {
                return match[0];
            }
        }

        const postLink = postElement.querySelector(`
            a[href*="/post/"],
            [component="post/anchor"][href],
            a[href*="#post-"]
        `);

        if (postLink) {
            const href = postLink.getAttribute('href') || '';
            const match = href.match(/(?:\/post\/|#(?:post-)?)(\d+)/);

            if (match) {
                return match[1];
            }
        }

        return null;
    }

    function getPostUrl(postElement) {
        const postId = getPostId(postElement);

        if (postId) {
            return `${location.origin}/post/${postId}`;
        }

        const directLink = postElement.querySelector(`
            a[href*="/post/"],
            a[component="post/anchor"],
            .post-index a[href]
        `);

        if (directLink?.href) {
            return directLink.href;
        }

        if (postElement.id) {
            return `${location.href.split('#')[0]}#${postElement.id}`;
        }

        return location.href;
    }

    /* =========================================================
       חילוץ תוכן הפוסט
    ========================================================= */

    function findPostContent(postElement) {
        const selectors = [
            '[component="post/content"]',
            '.post-content',
            '.topic-post-content',
            '.user-post-content',
            '.post-body',
            '.content'
        ];

        for (const selector of selectors) {
            const content = postElement.querySelector(selector);

            if (content) {
                return content;
            }
        }

        return null;
    }

    function getPostText(postElement) {
        const contentElement = findPostContent(postElement);

        if (!contentElement) {
            return '';
        }

        const clone = contentElement.cloneNode(true);

        clone.querySelectorAll(`
            script,
            style,
            noscript,
            button,
            textarea,
            input,
            select,
            .${CONTAINER_CLASS},
            .topic-thumbs,
            .post-tools,
            .post-actions,
            .reactions,
            .emoji-picker,
            [data-nosnippet]
        `).forEach(element => {
            element.remove();
        });

        clone.querySelectorAll('br').forEach(br => {
            br.replaceWith('\n');
        });

        clone.querySelectorAll(`
            p,
            div,
            blockquote,
            pre,
            li,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6
        `).forEach(element => {
            element.insertAdjacentText('afterend', '\n');
        });

        const text = clone.innerText || clone.textContent || '';

        return text
            .replace(/\u00A0/g, ' ')
            .replace(/[ \t]+\n/g, '\n')
            .replace(/\n[ \t]+/g, '\n')
            .replace(/\n{3,}/g, '\n\n')
            .trim();
    }

    /* =========================================================
       איתור שורת הפעולות
    ========================================================= */

    function findActionsArea(postElement) {
        const selectors = [
            '[component="post/actions"]',
            '.post-tools',
            '.post-actions',
            '.topic-post-tools',
            '.post-footer'
        ];

        for (const selector of selectors) {
            const area = postElement.querySelector(selector);

            if (area) {
                return area;
            }
        }

        const knownAction = postElement.querySelector(`
            [component="post/reply"],
            [component="post/reactions"],
            [data-action="react"],
            [data-action="reply"],
            .fa-reply,
            .fa-smile,
            .fa-face-smile
        `);

        if (knownAction) {
            return knownAction.closest(`
                ul,
                .btn-group,
                .post-tools,
                .post-actions,
                div
            `);
        }

        return null;
    }

    /* =========================================================
       מיקום האייקונים
    ========================================================= */

    function placeButtonsContainer(actionsArea, container) {
        const emojiOrReply = actionsArea.querySelector(`
            [component="post/reactions"],
            [component="post/reply"],
            [data-action="react"],
            [data-action="reply"],
            .fa-smile,
            .fa-face-smile,
            .fa-reply
        `);

        if (emojiOrReply) {
            const actionItem = emojiOrReply.closest(
                'li, a, button, .btn, span'
            );

            if (actionItem?.parentElement) {
                actionItem.parentElement.insertBefore(
                    container,
                    actionItem
                );

                return;
            }
        }

        actionsArea.prepend(container);
    }

    /* =========================================================
       הוספת הכפתורים
    ========================================================= */

    function buttonsExist(postElement) {
        const container = postElement.querySelector(
            `.${CONTAINER_CLASS}`
        );

        return Boolean(
            container &&
            container.isConnected &&
            container.querySelectorAll('.mt-copy-icon-button').length === 2
        );
    }

    function addButtonsToPost(postElement) {
        if (!postElement || !postElement.isConnected) {
            return;
        }

        /*
         * הכפתורים עדיין קיימים — אין צורך להוסיף שוב.
         */
        if (buttonsExist(postElement)) {
            postElement.setAttribute(PROCESSED_ATTRIBUTE, 'true');
            return;
        }

        /*
         * NodeBB עשוי למחוק את הכפתורים במעבר דף,
         * אך להשאיר את הפוסט או את הסימון הישן.
         */
        postElement.removeAttribute(PROCESSED_ATTRIBUTE);

        /*
         * מסיר רק מכלים חלקיים או מנותקים שנשארו.
         */
        postElement.querySelectorAll(
            `.${CONTAINER_CLASS}`
        ).forEach(container => {
            container.remove();
        });

        const contentElement = findPostContent(postElement);
        const actionsArea = findActionsArea(postElement);

        if (!contentElement || !actionsArea) {
            return;
        }

        const container = document.createElement('span');
        container.className = CONTAINER_CLASS;

        const copyLinkButton = createIconButton({
            icon: icons.link,
            title: 'העתקת קישור ישיר לפוסט',

            onClick: async () => {
                const postUrl = getPostUrl(postElement);
                await copyToClipboard(postUrl);
            }
        });

        const copyContentButton = createIconButton({
            icon: icons.copy,
            title: 'העתקת תוכן הפוסט',

            onClick: async () => {
                const postText = getPostText(postElement);

                if (!postText) {
                    throw new Error('לא נמצא תוכן בפוסט');
                }

                await copyToClipboard(postText);
            }
        });

        container.append(
            copyContentButton,
            copyLinkButton
        );

        placeButtonsContainer(actionsArea, container);

        if (container.isConnected) {
            postElement.setAttribute(PROCESSED_ATTRIBUTE, 'true');
        }
    }

    /* =========================================================
       עיבוד הפוסטים
    ========================================================= */

    function processAllPosts(root = document) {
        if (root instanceof Element && root.matches(POST_SELECTOR)) {
            addButtonsToPost(root);
        }

        if (root.querySelectorAll) {
            root.querySelectorAll(POST_SELECTOR).forEach(
                addButtonsToPost
            );
        }

        if (root instanceof Element) {
            const parentPost = findPostElement(root);

            if (parentPost) {
                addButtonsToPost(parentPost);
            }
        }
    }

    /* =========================================================
       הרצות חוזרות בזמן טעינת דף
    ========================================================= */

    const scheduledRuns = new Set();

    function scheduleFullProcessing(delay = 0) {
        const timeout = setTimeout(() => {
            scheduledRuns.delete(timeout);
            processAllPosts(document);
        }, delay);

        scheduledRuns.add(timeout);
    }

    function processAfterNavigation() {
        [
            0,
            100,
            250,
            500,
            1000,
            1800,
            3000
        ].forEach(scheduleFullProcessing);
    }

    /* =========================================================
       מעקב אחר שינויים בדף
    ========================================================= */

    let observerTimeout;

    const observer = new MutationObserver(mutations => {
        clearTimeout(observerTimeout);

        observerTimeout = setTimeout(() => {
            const affectedPosts = new Set();

            mutations.forEach(mutation => {
                if (mutation.target instanceof Element) {
                    const post = findPostElement(mutation.target);

                    if (post) {
                        affectedPosts.add(post);
                    }
                }

                mutation.addedNodes.forEach(node => {
                    if (!(node instanceof Element)) {
                        return;
                    }

                    const post = findPostElement(node);

                    if (post) {
                        affectedPosts.add(post);
                    }

                    node.querySelectorAll?.(POST_SELECTOR).forEach(
                        foundPost => affectedPosts.add(foundPost)
                    );
                });
            });

            if (affectedPosts.size) {
                affectedPosts.forEach(addButtonsToPost);
            } else {
                processAllPosts(document);
            }
        }, 80);
    });

    function startObserver() {
        if (!document.body) {
            setTimeout(startObserver, 100);
            return;
        }

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    startObserver();

    /* =========================================================
       אירועי מעבר פנימי של NodeBB
    ========================================================= */

    function handleNavigation() {
        processAfterNavigation();
    }

    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('pageshow', handleNavigation);

    /*
     * אירועי NodeBB דרך jQuery.
     * הבדיקה נעשית שוב מעט מאוחר יותר, מכיוון שלפעמים
     * jQuery נטען רק לאחר הפעלת הסקריפט.
     */
    function connectNodeBBEvents() {
        if (!window.jQuery) {
            return false;
        }

        const $ = window.jQuery;

        $(window)
            .off('.mtCopyPostButtons')
            .on(
                'action:ajaxify.end.mtCopyPostButtons',
                handleNavigation
            )
            .on(
                'action:topic.loaded.mtCopyPostButtons',
                handleNavigation
            )
            .on(
                'action:posts.loaded.mtCopyPostButtons',
                handleNavigation
            )
            .on(
                'action:posts.edited.mtCopyPostButtons',
                handleNavigation
            );

        return true;
    }

    connectNodeBBEvents();

    let eventConnectionAttempts = 0;

    const eventConnectionInterval = setInterval(() => {
        eventConnectionAttempts++;

        if (
            connectNodeBBEvents() ||
            eventConnectionAttempts >= 20
        ) {
            clearInterval(eventConnectionInterval);
        }
    }, 500);

    /* =========================================================
       זיהוי שינוי כתובת

       NodeBB לעיתים משנה כתובת בלי להפעיל popstate.
    ========================================================= */

    let lastUrl = location.href;

    setInterval(() => {
        if (location.href === lastUrl) {
            return;
        }

        lastUrl = location.href;
        handleNavigation();
    }, 250);

    /* =========================================================
       הרצה ראשונית
    ========================================================= */

    processAfterNavigation();
})();
/* SOURCE_END: העתקת קישור ותוכן הפוסט.txt */
        }
    },

    {
        id: "last-read-sidebar-link",
        name: "מתמחים טופ - הודעות אחרונות שנקראו בצד שמאל",
        description: "מוסיף כפתור להודעות האחרונות שנקראו בסרגל שנמצא פיזית בצד שמאל",
        category: "ניווט וחיפוש",
        originalFile: "הודעות אחרונות שנקראו.txt",
        version: "2.1.0",
        author: "פרוזי",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "cb4a14e7b9ed6efaa0c9ba0e275f1c7694137f27b9c87622196d50e6cd70482a",
        originalBodySha256: "7891ced4742a9687dc9e3fd601d8af3c9ae02883a47b38e1f416e2a4689a68c7",
        embeddedBodySha256: "7891ced4742a9687dc9e3fd601d8af3c9ae02883a47b38e1f416e2a4689a68c7",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: הודעות אחרונות שנקראו.txt */
(function () {
    'use strict';

    const CONFIG = {
        itemId: 'prozi-last-read-item',
        linkId: 'prozi-last-read-link',
        url: '/me/read',
        text: 'הודעות אחרונות שנקראו',
        tooltip: 'הודעות אחרונות שנקראו'
    };

    let observer = null;
    let insertTimer = null;

    GM_addStyle(`
        #${CONFIG.itemId} {
            position: relative !important;
        }

        #${CONFIG.linkId} {
            position: relative !important;
            display: flex !important;
            align-items: center !important;
            width: 100% !important;
            min-height: 38px !important;
            padding: 8px 12px !important;
            gap: 10px !important;
            text-decoration: none !important;
            cursor: pointer !important;
        }

        #${CONFIG.linkId} .prozi-read-icon {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex: 0 0 auto !important;
            width: 22px !important;
            height: 22px !important;
            margin: 0 !important;
        }

        #${CONFIG.linkId} .prozi-read-icon i {
            width: 20px !important;
            margin: 0 !important;
            text-align: center !important;
            font-size: 15px !important;
        }

        #${CONFIG.linkId} .prozi-read-text {
            overflow: hidden !important;
            white-space: nowrap !important;
            text-overflow: ellipsis !important;
        }

        /*
         * בועה שמופיעה מימין לכפתור,
         * מפני שהכפתור עצמו נמצא בצד שמאל.
         */
        #prozi-last-read-tooltip {
            position: fixed !important;
            z-index: 2147483647 !important;
            display: none;
            padding: 7px 11px !important;
            border-radius: 6px !important;
            background: rgba(25, 25, 25, 0.96) !important;
            color: #fff !important;
            font-size: 12px !important;
            line-height: 1.3 !important;
            white-space: nowrap !important;
            pointer-events: none !important;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25) !important;
            opacity: 0;
            transform: translateY(-50%) translateX(-5px);
            transition:
                opacity 120ms ease,
                transform 120ms ease !important;
        }

        #prozi-last-read-tooltip.prozi-visible {
            display: block !important;
            opacity: 1 !important;
            transform: translateY(-50%) translateX(0);
        }

        #prozi-last-read-tooltip::before {
            content: "";
            position: absolute;
            top: 50%;
            right: 100%;
            transform: translateY(-50%);
            border: 5px solid transparent;
            border-right-color: rgba(25, 25, 25, 0.96);
        }

        @media (max-width: 767px) {
            #prozi-last-read-tooltip {
                display: none !important;
            }
        }
    `);

    function isVisible(element) {
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);

        return (
            rect.width > 0 &&
            rect.height > 0 &&
            style.display !== 'none' &&
            style.visibility !== 'hidden'
        );
    }

    /*
     * מאתר את כל רשימות הניווט האפשריות,
     * ובוחר את זו שנמצאת פיזית הכי שמאלה במסך.
     */
    function findPhysicalLeftSidebarList() {
        const selectors = [
            'nav.sidebar-left ul',
            'nav.sidebar-right ul',
            '.sidebar-left ul',
            '.sidebar-right ul',
            '[component="sidebar"] ul',
            '[component="sidebar-left"] ul',
            '[component="sidebar-right"] ul',
            'aside ul.nav',
            'aside ul',
            '#main-nav'
        ];

        const candidates = [];

        for (const selector of selectors) {
            document.querySelectorAll(selector).forEach((element) => {
                if (
                    isVisible(element) &&
                    !candidates.includes(element)
                ) {
                    candidates.push(element);
                }
            });
        }

        if (!candidates.length) {
            return null;
        }

        candidates.sort((a, b) => {
            const rectA = a.getBoundingClientRect();
            const rectB = b.getBoundingClientRect();

            return rectA.left - rectB.left;
        });

        /*
         * לא מכניס לתפריט עליון רחב.
         */
        const sidebarCandidate = candidates.find((element) => {
            const rect = element.getBoundingClientRect();

            return (
                rect.width < window.innerWidth * 0.55 &&
                rect.left < window.innerWidth / 2
            );
        });

        return sidebarCandidate || null;
    }

    function createTooltip() {
        let tooltip = document.getElementById(
            'prozi-last-read-tooltip'
        );

        if (tooltip) {
            return tooltip;
        }

        tooltip = document.createElement('div');
        tooltip.id = 'prozi-last-read-tooltip';
        tooltip.textContent = CONFIG.tooltip;
        tooltip.setAttribute('role', 'tooltip');
        tooltip.setAttribute('aria-hidden', 'true');

        document.body.appendChild(tooltip);

        return tooltip;
    }

    function positionTooltip(link, tooltip) {
        if (!link?.isConnected || !tooltip?.isConnected) {
            return;
        }

        const rect = link.getBoundingClientRect();
        const tooltipWidth = tooltip.offsetWidth || 170;
        const tooltipHeight = tooltip.offsetHeight || 30;
        const gap = 10;

        let left = rect.right + gap;
        let top = rect.top + rect.height / 2;

        /*
         * במקרה שאין מקום מימין, מציג משמאל.
         */
        if (left + tooltipWidth > window.innerWidth - 8) {
            left = rect.left - tooltipWidth - gap;
        }

        top = Math.max(
            tooltipHeight / 2 + 8,
            Math.min(
                top,
                window.innerHeight - tooltipHeight / 2 - 8
            )
        );

        tooltip.style.left = `${Math.round(left)}px`;
        tooltip.style.top = `${Math.round(top)}px`;
    }

    function showTooltip(link) {
        const tooltip = createTooltip();

        tooltip.style.display = 'block';
        tooltip.setAttribute('aria-hidden', 'false');

        requestAnimationFrame(() => {
            positionTooltip(link, tooltip);
            tooltip.classList.add('prozi-visible');
        });
    }

    function hideTooltip() {
        const tooltip = document.getElementById(
            'prozi-last-read-tooltip'
        );

        if (!tooltip) return;

        tooltip.classList.remove('prozi-visible');
        tooltip.setAttribute('aria-hidden', 'true');

        setTimeout(() => {
            if (!tooltip.classList.contains('prozi-visible')) {
                tooltip.style.display = 'none';
            }
        }, 130);
    }

    function createItem() {
        const item = document.createElement('li');

        item.id = CONFIG.itemId;
        item.className = 'nav-item';
        item.dataset.proziFeature = 'last-read';

        const link = document.createElement('a');

        link.id = CONFIG.linkId;
        link.href = CONFIG.url;
        link.className =
            'nav-link navigation-link d-flex align-items-center';

        link.setAttribute('aria-label', CONFIG.tooltip);

        const iconWrapper = document.createElement('span');

        iconWrapper.className = 'prozi-read-icon';

        const icon = document.createElement('i');

        /*
         * fa-history קיים ביותר גרסאות Font Awesome,
         * ולכן יציב יותר מאייקונים חדשים.
         */
        icon.className = 'fa fa-fw fa-history';
        icon.setAttribute('aria-hidden', 'true');

        const text = document.createElement('span');

        text.className =
            'prozi-read-text nav-text small visible-open fw-semibold';

        text.textContent = CONFIG.text;

        iconWrapper.appendChild(icon);
        link.appendChild(iconWrapper);
        link.appendChild(text);
        item.appendChild(link);

        link.addEventListener('mouseenter', () => {
            showTooltip(link);
        });

        link.addEventListener('mouseleave', hideTooltip);

        link.addEventListener('focus', () => {
            showTooltip(link);
        });

        link.addEventListener('blur', hideTooltip);
        link.addEventListener('click', hideTooltip);

        return item;
    }

    function removeOldAndDuplicateItems() {
        const selectors = [
            `#${CONFIG.itemId}`,
            `#${CONFIG.linkId}`,
            '#custom-mitmachim-link',
            '#prozi-last-read-posts-item',
            '#prozi-last-read-posts-link'
        ];

        const foundItems = new Set();

        for (const selector of selectors) {
            document.querySelectorAll(selector).forEach((element) => {
                const item = element.closest('li') || element;
                foundItems.add(item);
            });
        }

        foundItems.forEach((item) => {
            item.remove();
        });
    }

    function insertItem() {
        clearTimeout(insertTimer);

        insertTimer = setTimeout(() => {
            const leftSidebarList =
                findPhysicalLeftSidebarList();

            if (!leftSidebarList) {
                return;
            }

            removeOldAndDuplicateItems();

            const item = createItem();

            /*
             * הכפתור נכנס לסוף הסרגל שנמצא פיזית בשמאל.
             */
            leftSidebarList.appendChild(item);
        }, 80);
    }

    function handleNavigation() {
        hideTooltip();
        insertItem();

        setTimeout(insertItem, 250);
        setTimeout(insertItem, 800);
    }

    function installNavigationHooks() {
        if (window.jQuery) {
            window.jQuery(window).on(
                'action:ajaxify.end.proziLastReadLeft action:ajaxify.contentLoaded.proziLastReadLeft',
                handleNavigation
            );
        }

        for (const methodName of [
            'pushState',
            'replaceState'
        ]) {
            const original = history[methodName];

            if (
                typeof original !== 'function' ||
                original.__proziLastReadLeft
            ) {
                continue;
            }

            const wrapped = function (...args) {
                const result = original.apply(this, args);

                setTimeout(handleNavigation, 0);

                return result;
            };

            wrapped.__proziLastReadLeft = true;
            history[methodName] = wrapped;
        }

        window.addEventListener(
            'popstate',
            handleNavigation
        );

        window.addEventListener(
            'hashchange',
            handleNavigation
        );
    }

    function startObserver() {
        if (observer || !document.body) {
            return;
        }

        observer = new MutationObserver((mutations) => {
            const item = document.getElementById(
                CONFIG.itemId
            );

            /*
             * אם הכפתור עדיין קיים, אין צורך לעבוד.
             */
            if (item?.isConnected) {
                return;
            }

            let relevantChange = false;

            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (!(node instanceof Element)) {
                        continue;
                    }

                    if (
                        node.matches?.(
                            'nav, aside, ul, [component*="sidebar"]'
                        ) ||
                        node.querySelector?.(
                            'nav, aside, ul, [component*="sidebar"]'
                        )
                    ) {
                        relevantChange = true;
                        break;
                    }
                }

                if (relevantChange) {
                    break;
                }
            }

            if (relevantChange) {
                insertItem();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function updateTooltipPosition() {
        const link = document.getElementById(
            CONFIG.linkId
        );

        const tooltip = document.getElementById(
            'prozi-last-read-tooltip'
        );

        if (
            link &&
            tooltip?.classList.contains('prozi-visible')
        ) {
            positionTooltip(link, tooltip);
        }
    }

    function initialize() {
        installNavigationHooks();
        startObserver();
        insertItem();

        [300, 800, 1600, 3000].forEach((delay) => {
            setTimeout(insertItem, delay);
        });
    }

    window.addEventListener(
        'resize',
        updateTooltipPosition,
        { passive: true }
    );

    window.addEventListener(
        'scroll',
        updateTooltipPosition,
        {
            passive: true,
            capture: true
        }
    );

    if (document.readyState === 'loading') {
        document.addEventListener(
            'DOMContentLoaded',
            initialize,
            { once: true }
        );
    } else {
        initialize();
    }
})();
/* SOURCE_END: הודעות אחרונות שנקראו.txt */
        }
    },

    {
        id: "voice-chat-messages",
        name: "מתמחים טופ - הודעות קוליות בצ'אט",
        description: "הקלטה, עצירה, האזנה, המרה ל-WAV והעלאת הודעות קוליות בצ'אט של מתמחים טופ",
        category: "צ'אט",
        originalFile: "הודעות קוליות בצ'אט.txt",
        version: "5.0.0",
        author: "Moishy",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*","https://www.mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: ["mitmachim_voice_chat_enabled_v5"],
        sourceSha256: "2f72eb640c76e6ae8b7ca071ae556e28a83e5033c180fda581e330bb9a2c87c7",
        originalBodySha256: "1cffab4a57740de201b41b730bb711eedb4fd3a41b108fcfa01cc4e951dd5191",
        embeddedBodySha256: "1cffab4a57740de201b41b730bb711eedb4fd3a41b108fcfa01cc4e951dd5191",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: הודעות קוליות בצ'אט.txt */
(function () {
    'use strict';

    const CONFIG = {
        enabledKey: 'mitmachim_voice_chat_enabled_v5',

        recordButtonClass: 'mt-voice-record-button-v5',
        textareaHandledAttribute: 'data-mt-voice-button-added-v5',
        textareaButtonIdAttribute: 'data-mt-voice-button-id-v5',

        panelId: 'mt-voice-panel-v5',
        backdropId: 'mt-voice-backdrop-v5',
        toastClass: 'mt-voice-toast-v5',
        playerClass: 'mt-voice-player-v5',

        maxRecordingSeconds: 10 * 60,

        textareaSelectors: [
            'textarea[component="chat/input"]',
            '[component="chat/input"] textarea',
            '.chat-input textarea',
            '.chat-composer textarea',
            '.chat-message-input textarea',
            'textarea[placeholder*="הודעה"]',
            'textarea[placeholder*="צ׳אט"]',
            'textarea[placeholder*="צ\'אט"]'
        ],

        composerSelectors: [
            '[component="chat/message-window"]',
            '[component="chat/room"]',
            '[component="chat/main-wrapper"]',
            '.chat-modal',
            '.chat-window',
            '.chat-input',
            '.chat-composer',
            '.chat-message-input'
        ],

        sendButtonSelectors: [
            '[component="chat/send"]',
            'button[data-action="send"]',
            '.chat-input button[type="submit"]',
            '.chat-composer button[type="submit"]',
            '.chat-message-input button[type="submit"]'
        ],

        uploadInputSelectors: [
            'input[type="file"][component*="upload"]',
            '.chat-input input[type="file"]',
            '.chat-composer input[type="file"]',
            '.chat-message-input input[type="file"]',
            'input[type="file"]'
        ],

        messageSelectors: [
            '[component="chat/message"]',
            '.chat-message',
            '.message-body',
            '.chat-content'
        ],

        debug: false
    };

    let enabled = GM_getValue(CONFIG.enabledKey, true);

    let mediaRecorder = null;
    let mediaStream = null;
    let audioChunks = [];

    let recordingBlob = null;
    let recordingUrl = null;
    let recordingStartedAt = 0;
    let recordingTimer = null;

    let activeComposer = null;
    let activeTextarea = null;
    let activeRecordButton = null;

    let cancelling = false;
    let scanTimer = null;
    let observer = null;
    let buttonCounter = 0;

    function log(...args) {
        if (CONFIG.debug) {
            console.log('[Mitmachim Voice]', ...args);
        }
    }

    GM_addStyle(`
        .${CONFIG.recordButtonClass} {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;

            width: 36px !important;
            height: 36px !important;
            min-width: 36px !important;
            min-height: 36px !important;

            margin: 0 5px !important;
            padding: 0 !important;

            border: 0 !important;
            border-radius: 50% !important;

            background: #0d6efd !important;
            color: #ffffff !important;

            cursor: pointer !important;
            pointer-events: auto !important;

            font-family: Arial, sans-serif !important;
            font-size: 18px !important;
            line-height: 1 !important;

            position: relative !important;
            z-index: 1000 !important;

            box-shadow:
                0 2px 8px rgba(0, 0, 0, 0.18) !important;

            transition:
                transform 0.15s ease,
                background 0.15s ease,
                opacity 0.15s ease !important;
        }

        .${CONFIG.recordButtonClass}:hover {
            background: #0b5ed7 !important;
            transform: scale(1.05) !important;
        }

        .${CONFIG.recordButtonClass}:active {
            transform: scale(0.96) !important;
        }

        .${CONFIG.recordButtonClass}.recording {
            background: #dc3545 !important;
            animation: mtVoiceButtonPulseV5 1s infinite alternate !important;
        }

        .${CONFIG.recordButtonClass}.disabled {
            background: #6c757d !important;
            opacity: 0.65 !important;
        }

        #${CONFIG.backdropId} {
            position: fixed !important;
            inset: 0 !important;

            z-index: 2147483645 !important;

            background: rgba(0, 0, 0, 0.18) !important;
        }

        #${CONFIG.backdropId}[hidden] {
            display: none !important;
        }

        #${CONFIG.panelId} {
            position: fixed !important;

            top: 50% !important;
            left: 50% !important;

            transform: translate(-50%, -50%) !important;

            z-index: 2147483646 !important;

            width: 340px !important;
            max-width: calc(100vw - 30px) !important;

            padding: 15px !important;

            direction: rtl !important;
            text-align: right !important;

            border: 1px solid #d8dee5 !important;
            border-radius: 15px !important;

            background: #ffffff !important;
            color: #222222 !important;

            font-family: Arial, sans-serif !important;

            box-shadow:
                0 18px 50px rgba(0, 0, 0, 0.34) !important;

            pointer-events: auto !important;
        }

        #${CONFIG.panelId}[hidden] {
            display: none !important;
        }

        #${CONFIG.panelId},
        #${CONFIG.panelId} * {
            box-sizing: border-box !important;
        }

        #${CONFIG.panelId} .mt-voice-header {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 12px !important;

            margin-bottom: 8px !important;
        }

        #${CONFIG.panelId} .mt-voice-title {
            font-size: 15px !important;
            font-weight: 700 !important;
        }

        #${CONFIG.panelId} .mt-voice-timer {
            direction: ltr !important;

            font-family: monospace !important;
            font-size: 16px !important;
            font-weight: 700 !important;

            color: #dc3545 !important;
        }

        #${CONFIG.panelId} .mt-voice-status {
            margin-bottom: 9px !important;

            text-align: center !important;
            font-size: 12px !important;
            color: #66717d !important;
        }

        #${CONFIG.panelId} .mt-voice-wave {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 4px !important;

            height: 48px !important;
            margin-bottom: 11px !important;

            border-radius: 9px !important;

            background: #f4f6f9 !important;
        }

        #${CONFIG.panelId} .mt-voice-wave span {
            width: 4px !important;
            height: 8px !important;

            border-radius: 4px !important;

            background: #5b9cff !important;
        }

        #${CONFIG.panelId}.recording .mt-voice-wave span {
            animation:
                mtVoiceWaveV5
                0.7s ease-in-out infinite alternate !important;
        }

        #${CONFIG.panelId}.recording
        .mt-voice-wave span:nth-child(2) {
            animation-delay: 0.08s !important;
        }

        #${CONFIG.panelId}.recording
        .mt-voice-wave span:nth-child(3) {
            animation-delay: 0.16s !important;
        }

        #${CONFIG.panelId}.recording
        .mt-voice-wave span:nth-child(4) {
            animation-delay: 0.24s !important;
        }

        #${CONFIG.panelId}.recording
        .mt-voice-wave span:nth-child(5) {
            animation-delay: 0.32s !important;
        }

        #${CONFIG.panelId}.recording
        .mt-voice-wave span:nth-child(6) {
            animation-delay: 0.40s !important;
        }

        #${CONFIG.panelId}.recording
        .mt-voice-wave span:nth-child(7) {
            animation-delay: 0.48s !important;
        }

        #${CONFIG.panelId} audio {
            display: block !important;

            width: 100% !important;
            height: 42px !important;

            margin: 6px 0 12px !important;
        }

        #${CONFIG.panelId} audio[hidden] {
            display: none !important;
        }

        #${CONFIG.panelId} .mt-voice-actions {
            display: flex !important;
            gap: 7px !important;

            position: relative !important;
            z-index: 10 !important;
        }

        #${CONFIG.panelId} .mt-voice-actions button {
            flex: 1 1 0 !important;

            min-height: 40px !important;
            padding: 8px 10px !important;

            border: 0 !important;
            border-radius: 8px !important;

            font-family: Arial, sans-serif !important;
            font-size: 12px !important;
            font-weight: 700 !important;

            cursor: pointer !important;
            pointer-events: auto !important;
            touch-action: manipulation !important;
        }

        #${CONFIG.panelId} .mt-voice-stop {
            background: #dc3545 !important;
            color: #ffffff !important;
        }

        #${CONFIG.panelId} .mt-voice-send {
            background: #198754 !important;
            color: #ffffff !important;
        }

        #${CONFIG.panelId} .mt-voice-cancel {
            background: #e9ecef !important;
            color: #333333 !important;
        }

        #${CONFIG.panelId} .mt-voice-actions button:hover {
            filter: brightness(0.96) !important;
        }

        #${CONFIG.panelId} .mt-voice-actions button:active {
            transform: scale(0.97) !important;
        }

        #${CONFIG.panelId} .mt-voice-actions button:disabled {
            opacity: 0.45 !important;
            cursor: not-allowed !important;
            transform: none !important;
        }

        .${CONFIG.toastClass} {
            position: fixed !important;
            left: 50% !important;
            bottom: 35px !important;

            transform: translateX(-50%) !important;

            z-index: 2147483647 !important;

            max-width: min(460px, calc(100vw - 30px)) !important;
            padding: 11px 17px !important;

            border-radius: 10px !important;

            background: #343a40 !important;
            color: #ffffff !important;

            font-family: Arial, sans-serif !important;
            font-size: 13px !important;
            font-weight: 600 !important;
            text-align: center !important;

            box-shadow:
                0 5px 20px rgba(0, 0, 0, 0.3) !important;
        }

        .${CONFIG.playerClass} {
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;

            width: min(340px, 100%) !important;
            margin: 5px 0 !important;
            padding: 8px 10px !important;

            border: 1px solid #d8dee6 !important;
            border-radius: 13px !important;

            background: #f7f9fc !important;

            direction: ltr !important;
        }

        .${CONFIG.playerClass} audio {
            flex: 1 1 auto !important;
            width: 100% !important;
            min-width: 0 !important;
        }

        .${CONFIG.playerClass} button {
            flex: 0 0 auto !important;

            min-width: 42px !important;
            height: 31px !important;

            border: 0 !important;
            border-radius: 7px !important;

            background: #0d6efd !important;
            color: #ffffff !important;

            cursor: pointer !important;
            font-size: 11px !important;
            font-weight: 700 !important;
        }

        @keyframes mtVoiceWaveV5 {
            from {
                height: 7px;
                opacity: 0.45;
            }

            to {
                height: 34px;
                opacity: 1;
            }
        }

        @keyframes mtVoiceButtonPulseV5 {
            from {
                box-shadow:
                    0 0 0 0
                    rgba(220, 53, 69, 0.38) !important;
            }

            to {
                box-shadow:
                    0 0 0 9px
                    rgba(220, 53, 69, 0) !important;
            }
        }
    `);

    function showToast(message, duration = 5000) {
        document
            .querySelectorAll(`.${CONFIG.toastClass}`)
            .forEach(element => element.remove());

        const toast = document.createElement('div');

        toast.className = CONFIG.toastClass;
        toast.textContent = message;

        document.body.appendChild(toast);

        window.setTimeout(() => {
            toast.remove();
        }, duration);
    }

    function formatTime(seconds) {
        seconds = Math.max(0, Math.floor(seconds));

        const minutes = Math.floor(seconds / 60);
        const remainder = seconds % 60;

        return (
            String(minutes).padStart(2, '0') +
            ':' +
            String(remainder).padStart(2, '0')
        );
    }

    function findFirst(root, selectors) {
        if (!root?.querySelector) {
            return null;
        }

        for (const selector of selectors) {
            try {
                const result = root.querySelector(selector);

                if (result) {
                    return result;
                }
            } catch (error) {
                log('סלקטור לא תקין:', selector, error);
            }
        }

        return null;
    }

    function matchesAny(element, selectors) {
        if (!element?.matches) {
            return false;
        }

        return selectors.some(selector => {
            try {
                return element.matches(selector);
            } catch (_) {
                return false;
            }
        });
    }

    function findComposer(textarea) {
        if (!textarea) {
            return null;
        }

        for (const selector of CONFIG.composerSelectors) {
            try {
                const composer = textarea.closest(selector);

                if (composer) {
                    return composer;
                }
            } catch (_) {
                // ממשיכים.
            }
        }

        return textarea.parentElement;
    }

    function findSendButton(composer) {
        return findFirst(
            composer,
            CONFIG.sendButtonSelectors
        );
    }

    function getSupportedMimeType() {
        if (!window.MediaRecorder) {
            return '';
        }

        const mimeTypes = [
            'audio/webm;codecs=opus',
            'audio/webm',
            'audio/ogg;codecs=opus',
            'audio/ogg'
        ];

        for (const mimeType of mimeTypes) {
            if (MediaRecorder.isTypeSupported(mimeType)) {
                return mimeType;
            }
        }

        return '';
    }

    function ensurePanel() {
        let backdrop = document.getElementById(
            CONFIG.backdropId
        );

        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.id = CONFIG.backdropId;
            backdrop.hidden = true;

            document.body.appendChild(backdrop);
        }

        let panel = document.getElementById(
            CONFIG.panelId
        );

        if (panel) {
            return panel;
        }

        panel = document.createElement('div');
        panel.id = CONFIG.panelId;
        panel.hidden = true;

        panel.innerHTML = `
            <div class="mt-voice-header">
                <div class="mt-voice-title">
                    הודעה קולית
                </div>

                <div class="mt-voice-timer">
                    00:00
                </div>
            </div>

            <div class="mt-voice-status">
                מוכן להקלטה
            </div>

            <div class="mt-voice-wave">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <audio
                class="mt-voice-preview"
                controls
                preload="metadata"
                hidden
            ></audio>

            <div class="mt-voice-actions">
                <button
                    type="button"
                    class="mt-voice-stop"
                >
                    עצירה
                </button>

                <button
                    type="button"
                    class="mt-voice-send"
                    disabled
                >
                    שליחה
                </button>

                <button
                    type="button"
                    class="mt-voice-cancel"
                >
                    ביטול
                </button>
            </div>
        `;

        document.body.appendChild(panel);

        const stopButton =
            panel.querySelector('.mt-voice-stop');

        const sendButton =
            panel.querySelector('.mt-voice-send');

        const cancelButton =
            panel.querySelector('.mt-voice-cancel');

        stopButton.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();

            stopRecording();
        });

        sendButton.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();

            sendRecording();
        });

        cancelButton.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();

            cancelRecording();
        });

        panel.addEventListener('click', event => {
            event.stopPropagation();
        });

        panel.addEventListener('mousedown', event => {
            event.stopPropagation();
        });

        return panel;
    }

    function showPanel() {
        const panel = ensurePanel();

        const backdrop = document.getElementById(
            CONFIG.backdropId
        );

        panel.hidden = false;

        if (backdrop) {
            backdrop.hidden = false;
        }
    }

    function hidePanel() {
        const panel = document.getElementById(
            CONFIG.panelId
        );

        const backdrop = document.getElementById(
            CONFIG.backdropId
        );

        if (panel) {
            panel.hidden = true;
            panel.classList.remove('recording');
        }

        if (backdrop) {
            backdrop.hidden = true;
        }
    }

    function setStatus(text) {
        const panel = ensurePanel();

        panel.querySelector(
            '.mt-voice-status'
        ).textContent = text;
    }

    function setTimer(seconds) {
        const panel = ensurePanel();

        panel.querySelector(
            '.mt-voice-timer'
        ).textContent = formatTime(seconds);
    }

    function stopStream() {
        if (!mediaStream) {
            return;
        }

        mediaStream.getTracks().forEach(track => {
            try {
                track.stop();
            } catch (error) {
                log(error);
            }
        });

        mediaStream = null;
    }

    function clearRecordingUrl() {
        if (!recordingUrl) {
            return;
        }

        URL.revokeObjectURL(recordingUrl);
        recordingUrl = null;
    }

    function preparePanelForRecording() {
        const panel = ensurePanel();

        const preview =
            panel.querySelector('.mt-voice-preview');

        preview.pause();
        preview.hidden = true;
        preview.removeAttribute('src');

        panel
            .querySelector('.mt-voice-stop')
            .disabled = false;

        const sendButton =
            panel.querySelector('.mt-voice-send');

        sendButton.disabled = true;
        sendButton.textContent = 'שליחה';

        panel.classList.add('recording');

        setTimer(0);
        setStatus('מקליט עכשיו...');
    }

    async function startRecording(
        composer,
        textarea,
        recordButton
    ) {
        if (!enabled) {
            showToast('סקריפט ההודעות הקוליות כבוי.');
            return;
        }

        if (
            mediaRecorder &&
            mediaRecorder.state === 'recording'
        ) {
            showToast('כבר מתבצעת הקלטה.');
            return;
        }

        if (!window.isSecureContext) {
            showToast(
                'יש לפתוח את הפורום דרך HTTPS כדי להשתמש במיקרופון.'
            );
            return;
        }

        if (!navigator.mediaDevices?.getUserMedia) {
            showToast(
                'הדפדפן אינו תומך בגישה למיקרופון.'
            );
            return;
        }

        if (!window.MediaRecorder) {
            showToast(
                'הדפדפן אינו תומך בהקלטת שמע.'
            );
            return;
        }

        activeComposer = composer;
        activeTextarea = textarea;
        activeRecordButton = recordButton;

        cancelling = false;
        audioChunks = [];
        recordingBlob = null;

        clearRecordingUrl();

        showPanel();
        setStatus('מתחבר למיקרופון...');

        try {
            mediaStream =
                await navigator.mediaDevices.getUserMedia({
                    audio: {
                        echoCancellation: true,
                        noiseSuppression: true,
                        autoGainControl: true
                    },
                    video: false
                });
        } catch (error) {
            console.error(
                '[Mitmachim Voice] Microphone error:',
                error
            );

            hidePanel();

            let message =
                'לא ניתן להפעיל את המיקרופון.';

            switch (error?.name) {
                case 'NotFoundError':
                case 'DevicesNotFoundError':
                    message =
                        'לא נמצא מיקרופון מחובר למחשב.';
                    break;

                case 'NotAllowedError':
                case 'PermissionDeniedError':
                    message =
                        'הרשאת המיקרופון חסומה בדפדפן.';
                    break;

                case 'NotReadableError':
                case 'TrackStartError':
                    message =
                        'המיקרופון מחובר, אך אינו זמין. ייתכן שהוא בשימוש בתוכנה אחרת.';
                    break;

                case 'SecurityError':
                    message =
                        'הדפדפן חסם את השימוש במיקרופון מטעמי אבטחה.';
                    break;
            }

            showToast(message, 8000);
            return;
        }

        const mimeType = getSupportedMimeType();

        try {
            mediaRecorder = mimeType
                ? new MediaRecorder(
                    mediaStream,
                    { mimeType }
                )
                : new MediaRecorder(mediaStream);
        } catch (error) {
            console.error(
                '[Mitmachim Voice] MediaRecorder error:',
                error
            );

            stopStream();
            hidePanel();

            showToast(
                'המיקרופון הופעל, אבל לא ניתן ליצור הקלטה.'
            );

            return;
        }

        preparePanelForRecording();

        recordingStartedAt = Date.now();

        activeRecordButton?.classList.add(
            'recording'
        );

        recordingTimer = window.setInterval(() => {
            const elapsed =
                (Date.now() - recordingStartedAt) / 1000;

            setTimer(elapsed);

            if (
                elapsed >= CONFIG.maxRecordingSeconds
            ) {
                stopRecording();
            }
        }, 250);

        mediaRecorder.addEventListener(
            'dataavailable',
            event => {
                if (
                    event.data &&
                    event.data.size > 0
                ) {
                    audioChunks.push(event.data);
                }
            }
        );

        mediaRecorder.addEventListener(
            'stop',
            handleRecorderStopped,
            { once: true }
        );

        mediaRecorder.addEventListener(
            'error',
            event => {
                console.error(
                    '[Mitmachim Voice] Recording error:',
                    event.error || event
                );

                showToast(
                    'אירעה שגיאה במהלך ההקלטה.'
                );
            }
        );

        try {
            mediaRecorder.start(250);
        } catch (error) {
            console.error(
                '[Mitmachim Voice] Recorder start error:',
                error
            );

            clearInterval(recordingTimer);
            recordingTimer = null;

            stopStream();
            hidePanel();

            showToast(
                'לא ניתן להתחיל את ההקלטה.'
            );
        }
    }

    function stopRecording() {
        if (
            !mediaRecorder ||
            mediaRecorder.state !== 'recording'
        ) {
            showToast('אין כרגע הקלטה פעילה.');
            return;
        }

        const panel = ensurePanel();

        panel
            .querySelector('.mt-voice-stop')
            .disabled = true;

        setStatus('מסיים את ההקלטה...');

        try {
            mediaRecorder.requestData();
        } catch (_) {
            // לא חובה.
        }

        try {
            mediaRecorder.stop();
        } catch (error) {
            console.error(
                '[Mitmachim Voice] Stop error:',
                error
            );

            showToast(
                'לא ניתן לעצור את ההקלטה.'
            );
        }
    }

    function handleRecorderStopped() {
        clearInterval(recordingTimer);
        recordingTimer = null;

        stopStream();

        activeRecordButton?.classList.remove(
            'recording'
        );

        const panel = ensurePanel();

        panel.classList.remove('recording');

        if (cancelling) {
            return;
        }

        if (!audioChunks.length) {
            setStatus('לא התקבל שמע בהקלטה.');

            panel
                .querySelector('.mt-voice-stop')
                .disabled = true;

            panel
                .querySelector('.mt-voice-send')
                .disabled = true;

            showToast(
                'ההקלטה הסתיימה ללא תוכן.'
            );

            return;
        }

        const mimeType =
            mediaRecorder?.mimeType ||
            'audio/webm';

        recordingBlob = new Blob(
            audioChunks,
            { type: mimeType }
        );

        recordingUrl =
            URL.createObjectURL(recordingBlob);

        const preview =
            panel.querySelector('.mt-voice-preview');

        preview.src = recordingUrl;
        preview.hidden = false;

        panel
            .querySelector('.mt-voice-stop')
            .disabled = true;

        panel
            .querySelector('.mt-voice-send')
            .disabled = false;

        setStatus(
            'ההקלטה מוכנה. אפשר להאזין ואז לשלוח.'
        );
    }

    function cancelRecording() {
        cancelling = true;

        clearInterval(recordingTimer);
        recordingTimer = null;

        if (
            mediaRecorder &&
            mediaRecorder.state === 'recording'
        ) {
            try {
                mediaRecorder.stop();
            } catch (_) {
                // כבר נעצר.
            }
        }

        stopStream();

        audioChunks = [];
        recordingBlob = null;

        clearRecordingUrl();

        activeRecordButton?.classList.remove(
            'recording'
        );

        hidePanel();

        mediaRecorder = null;
        activeComposer = null;
        activeTextarea = null;
        activeRecordButton = null;

        showToast('ההקלטה בוטלה.');
    }

    async function convertRecordingToWav(sourceBlob) {
        const AudioContextClass =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContextClass) {
            throw new Error(
                'הדפדפן אינו תומך בהמרת שמע.'
            );
        }

        const arrayBuffer =
            await sourceBlob.arrayBuffer();

        const audioContext =
            new AudioContextClass();

        try {
            const decodedAudio =
                await audioContext.decodeAudioData(
                    arrayBuffer.slice(0)
                );

            return audioBufferToWavBlob(
                decodedAudio
            );
        } finally {
            try {
                await audioContext.close();
            } catch (_) {
                // אין צורך.
            }
        }
    }

    function audioBufferToWavBlob(audioBuffer) {
        const numberOfChannels =
            Math.min(
                audioBuffer.numberOfChannels,
                2
            );

        const sampleRate =
            audioBuffer.sampleRate;

        const numberOfFrames =
            audioBuffer.length;

        const bytesPerSample = 2;

        const blockAlign =
            numberOfChannels *
            bytesPerSample;

        const dataSize =
            numberOfFrames *
            blockAlign;

        const buffer =
            new ArrayBuffer(
                44 + dataSize
            );

        const view =
            new DataView(buffer);

        function writeAscii(offset, text) {
            for (
                let index = 0;
                index < text.length;
                index++
            ) {
                view.setUint8(
                    offset + index,
                    text.charCodeAt(index)
                );
            }
        }

        writeAscii(0, 'RIFF');

        view.setUint32(
            4,
            36 + dataSize,
            true
        );

        writeAscii(8, 'WAVE');
        writeAscii(12, 'fmt ');

        view.setUint32(
            16,
            16,
            true
        );

        view.setUint16(
            20,
            1,
            true
        );

        view.setUint16(
            22,
            numberOfChannels,
            true
        );

        view.setUint32(
            24,
            sampleRate,
            true
        );

        view.setUint32(
            28,
            sampleRate * blockAlign,
            true
        );

        view.setUint16(
            32,
            blockAlign,
            true
        );

        view.setUint16(
            34,
            16,
            true
        );

        writeAscii(36, 'data');

        view.setUint32(
            40,
            dataSize,
            true
        );

        const channelData = [];

        for (
            let channel = 0;
            channel < numberOfChannels;
            channel++
        ) {
            channelData.push(
                audioBuffer.getChannelData(channel)
            );
        }

        let offset = 44;

        for (
            let frame = 0;
            frame < numberOfFrames;
            frame++
        ) {
            for (
                let channel = 0;
                channel < numberOfChannels;
                channel++
            ) {
                let sample =
                    channelData[channel][frame];

                sample = Math.max(
                    -1,
                    Math.min(1, sample)
                );

                const pcmValue =
                    sample < 0
                        ? sample * 0x8000
                        : sample * 0x7fff;

                view.setInt16(
                    offset,
                    pcmValue,
                    true
                );

                offset += bytesPerSample;
            }
        }

        return new Blob(
            [buffer],
            {
                type: 'audio/wav'
            }
        );
    }

    function makeWavFilename() {
        const now = new Date();

        const stamp = [
            now.getFullYear(),

            String(
                now.getMonth() + 1
            ).padStart(2, '0'),

            String(
                now.getDate()
            ).padStart(2, '0'),

            '-',

            String(
                now.getHours()
            ).padStart(2, '0'),

            String(
                now.getMinutes()
            ).padStart(2, '0'),

            String(
                now.getSeconds()
            ).padStart(2, '0')
        ].join('');

        return (
            'voice-message-' +
            stamp +
            '.wav'
        );
    }

    function findUploadInput() {
        const localInput = findFirst(
            activeComposer,
            CONFIG.uploadInputSelectors
        );

        if (localInput) {
            return localInput;
        }

        return findFirst(
            document,
            CONFIG.uploadInputSelectors
        );
    }

    async function sendRecording() {
        if (!recordingBlob) {
            showToast(
                'צריך לעצור את ההקלטה לפני השליחה.'
            );
            return;
        }

        if (!activeComposer) {
            showToast(
                'חלון הצ׳אט המקורי לא נמצא.'
            );
            return;
        }

        const panel = ensurePanel();

        const sendButton =
            panel.querySelector('.mt-voice-send');

        const stopButton =
            panel.querySelector('.mt-voice-stop');

        sendButton.disabled = true;
        sendButton.textContent = 'ממיר...';

        if (stopButton) {
            stopButton.disabled = true;
        }

        setStatus(
            'ממיר את ההקלטה לקובץ WAV...'
        );

        let wavBlob;

        try {
            wavBlob =
                await convertRecordingToWav(
                    recordingBlob
                );
        } catch (error) {
            console.error(
                '[Mitmachim Voice] WAV conversion error:',
                error
            );

            sendButton.disabled = false;
            sendButton.textContent = 'שליחה';

            setStatus(
                'המרת ההקלטה נכשלה.'
            );

            showToast(
                'לא ניתן להמיר את ההקלטה ל־WAV: ' +
                (
                    error?.message ||
                    'שגיאה לא ידועה'
                ),
                9000
            );

            return;
        }

        if (!wavBlob || wavBlob.size === 0) {
            sendButton.disabled = false;
            sendButton.textContent = 'שליחה';

            setStatus(
                'לא נוצר קובץ שמע תקין.'
            );

            showToast(
                'ההמרה הסתיימה ללא קובץ שמע.'
            );

            return;
        }

        setStatus(
            'מעביר את קובץ ה־WAV להעלאה...'
        );

        sendButton.textContent = 'מעלה...';

        const uploadInput =
            findUploadInput();

        if (!uploadInput) {
            sendButton.disabled = false;
            sendButton.textContent = 'שליחה';

            setStatus(
                'לא נמצא מנגנון העלאת הקבצים.'
            );

            showToast(
                'לא נמצא שדה העלאת קבצים בצ׳אט. לחץ פעם אחת על כפתור צירוף הקובץ בצ׳אט ונסה שוב.',
                9000
            );

            return;
        }

        const wavFile = new File(
            [wavBlob],
            makeWavFilename(),
            {
                type: 'audio/wav',
                lastModified: Date.now()
            }
        );

        try {
            const transfer =
                new DataTransfer();

            transfer.items.add(wavFile);

            uploadInput.files =
                transfer.files;

            uploadInput.dispatchEvent(
                new Event(
                    'input',
                    {
                        bubbles: true,
                        composed: true
                    }
                )
            );

            uploadInput.dispatchEvent(
                new Event(
                    'change',
                    {
                        bubbles: true,
                        composed: true
                    }
                )
            );
        } catch (error) {
            console.error(
                '[Mitmachim Voice] Upload transfer error:',
                error
            );

            sendButton.disabled = false;
            sendButton.textContent = 'שליחה';

            setStatus(
                'העברת הקובץ נכשלה.'
            );

            showToast(
                'לא ניתן להעביר את קובץ ה־WAV למנגנון ההעלאה.',
                9000
            );

            return;
        }

        setStatus(
            'הקובץ הועבר להעלאה. המתן שיופיע בתיבת הצ׳אט.'
        );

        showToast(
            'ההקלטה הומרה ל־WAV והועברה להעלאה. המתן שהקישור יופיע בתיבת הצ׳אט ואז שלח את ההודעה.',
            9000
        );

        window.setTimeout(() => {
            cleanupAfterUpload();
        }, 1800);
    }

    function cleanupAfterUpload() {
        clearInterval(recordingTimer);
        recordingTimer = null;

        audioChunks = [];
        recordingBlob = null;

        clearRecordingUrl();
        stopStream();

        activeRecordButton?.classList.remove(
            'recording'
        );

        hidePanel();

        mediaRecorder = null;
        activeComposer = null;
        activeTextarea = null;
        activeRecordButton = null;
        cancelling = false;

        const sendButton =
            document.querySelector(
                `#${CONFIG.panelId} .mt-voice-send`
            );

        if (sendButton) {
            sendButton.textContent = 'שליחה';
            sendButton.disabled = true;
        }
    }

    function createUniqueButtonId() {
        buttonCounter += 1;

        return (
            'mt-voice-record-button-v5-' +
            Date.now() +
            '-' +
            buttonCounter
        );
    }

    function getLinkedButton(textarea) {
        if (!textarea) {
            return null;
        }

        const buttonId =
            textarea.getAttribute(
                CONFIG.textareaButtonIdAttribute
            );

        if (!buttonId) {
            return null;
        }

        const button =
            document.getElementById(buttonId);

        if (
            button &&
            button.classList.contains(
                CONFIG.recordButtonClass
            )
        ) {
            return button;
        }

        return null;
    }

    function markTextareaHandled(
        textarea,
        button
    ) {
        textarea.setAttribute(
            CONFIG.textareaHandledAttribute,
            '1'
        );

        if (button?.id) {
            textarea.setAttribute(
                CONFIG.textareaButtonIdAttribute,
                button.id
            );
        }
    }

    function clearTextareaMarker(textarea) {
        if (!textarea) {
            return;
        }

        textarea.removeAttribute(
            CONFIG.textareaHandledAttribute
        );

        textarea.removeAttribute(
            CONFIG.textareaButtonIdAttribute
        );
    }

    function findExistingButtonForTextarea(
        textarea,
        composer
    ) {
        const linkedButton =
            getLinkedButton(textarea);

        if (linkedButton?.isConnected) {
            return linkedButton;
        }

        const localButtons = [
            ...composer.querySelectorAll(
                `.${CONFIG.recordButtonClass}`
            )
        ].filter(button => button.isConnected);

        if (localButtons.length > 0) {
            return localButtons[0];
        }

        const textareaId =
            textarea.id ||
            textarea.getAttribute('name') ||
            '';

        if (textareaId) {
            const escapedId =
                CSS.escape(textareaId);

            const explicitButton =
                document.querySelector(
                    `.${CONFIG.recordButtonClass}[data-mt-voice-textarea="${escapedId}"]`
                );

            if (explicitButton) {
                return explicitButton;
            }
        }

        return null;
    }

    function addRecordButton(textarea) {
        if (
            !textarea ||
            !textarea.isConnected
        ) {
            return;
        }

        const composer =
            findComposer(textarea);

        if (
            !composer ||
            !composer.isConnected
        ) {
            return;
        }

        const linkedButton =
            getLinkedButton(textarea);

        if (
            textarea.getAttribute(
                CONFIG.textareaHandledAttribute
            ) === '1' &&
            linkedButton?.isConnected
        ) {
            return;
        }

        const existingButton =
            findExistingButtonForTextarea(
                textarea,
                composer
            );

        if (existingButton) {
            markTextareaHandled(
                textarea,
                existingButton
            );

            return;
        }

        clearTextareaMarker(textarea);

        const button =
            document.createElement('button');

        button.id = createUniqueButtonId();
        button.type = 'button';
        button.className =
            CONFIG.recordButtonClass;

        button.textContent = '🎙️';

        button.title = enabled
            ? 'הקלטת הודעה קולית'
            : 'הודעות קוליות כבויות';

        button.classList.toggle(
            'disabled',
            !enabled
        );

        if (textarea.id) {
            button.dataset.mtVoiceTextarea =
                textarea.id;
        }

        button.addEventListener(
            'click',
            event => {
                event.preventDefault();
                event.stopPropagation();

                startRecording(
                    composer,
                    textarea,
                    button
                );
            }
        );

        const forumSendButton =
            findSendButton(composer);

        if (
            forumSendButton?.parentElement
        ) {
            forumSendButton
                .parentElement
                .insertBefore(
                    button,
                    forumSendButton
                );
        } else {
            textarea.insertAdjacentElement(
                'afterend',
                button
            );
        }

        markTextareaHandled(
            textarea,
            button
        );
    }

    function removeDuplicateRecordButtons() {
        const allTextareas =
            collectTextareas(document);

        allTextareas.forEach(textarea => {
            const composer =
                findComposer(textarea);

            if (!composer) {
                return;
            }

            const buttons = [
                ...composer.querySelectorAll(
                    `.${CONFIG.recordButtonClass}`
                )
            ].filter(button => button.isConnected);

            if (!buttons.length) {
                clearTextareaMarker(textarea);
                return;
            }

            const linkedButton =
                getLinkedButton(textarea);

            const keepButton =
                linkedButton &&
                buttons.includes(linkedButton)
                    ? linkedButton
                    : buttons[0];

            buttons.forEach(button => {
                if (button !== keepButton) {
                    button.remove();
                }
            });

            markTextareaHandled(
                textarea,
                keepButton
            );
        });

        /*
         * מסיר כפתורים יתומים שאינם משויכים לשום תיבת כתיבה.
         */
        document
            .querySelectorAll(
                `.${CONFIG.recordButtonClass}`
            )
            .forEach(button => {
                const relatedTextarea =
                    allTextareas.find(textarea => {
                        const linked =
                            getLinkedButton(textarea);

                        if (linked === button) {
                            return true;
                        }

                        const composer =
                            findComposer(textarea);

                        return Boolean(
                            composer &&
                            composer.contains(button)
                        );
                    });

                if (!relatedTextarea) {
                    button.remove();
                }
            });
    }

    function collectTextareas(root = document) {
        const textareas = new Set();

        if (
            root instanceof Element &&
            matchesAny(
                root,
                CONFIG.textareaSelectors
            )
        ) {
            textareas.add(root);
        }

        for (
            const selector
            of CONFIG.textareaSelectors
        ) {
            try {
                root
                    .querySelectorAll?.(selector)
                    .forEach(textarea => {
                        if (
                            textarea instanceof
                            HTMLTextAreaElement
                        ) {
                            textareas.add(textarea);
                        }
                    });
            } catch (error) {
                log(error);
            }
        }

        return [...textareas];
    }

    function isAudioUrl(url) {
        return /\.(wav|mp3|webm|ogg|oga|m4a|opus)(?:[?#].*)?$/i.test(
            String(url || '')
        );
    }

    function enhanceAudioLinks(root = document) {
        if (
            !enabled ||
            !root?.querySelectorAll
        ) {
            return;
        }

        root.querySelectorAll('a[href]').forEach(link => {
            if (
                link.dataset.mtVoiceEnhanced === '1' ||
                !isAudioUrl(link.href)
            ) {
                return;
            }

            const message = link.closest(
                CONFIG.messageSelectors.join(',')
            );

            if (!message) {
                return;
            }

            link.dataset.mtVoiceEnhanced = '1';

            const wrapper =
                document.createElement('div');

            wrapper.className =
                CONFIG.playerClass;

            const audio =
                document.createElement('audio');

            audio.controls = true;
            audio.preload = 'metadata';
            audio.src = link.href;

            const speedButton =
                document.createElement('button');

            speedButton.type = 'button';
            speedButton.textContent = '1×';

            const speeds = [1, 1.5, 2];
            let speedIndex = 0;

            speedButton.addEventListener(
                'click',
                event => {
                    event.preventDefault();
                    event.stopPropagation();

                    speedIndex =
                        (speedIndex + 1) %
                        speeds.length;

                    audio.playbackRate =
                        speeds[speedIndex];

                    speedButton.textContent =
                        speeds[speedIndex] +
                        '×';
                }
            );

            wrapper.append(
                audio,
                speedButton
            );

            link.insertAdjacentElement(
                'afterend',
                wrapper
            );

            link.style.display = 'none';
        });
    }

    function scan(root = document) {
        if (!enabled || !root) {
            return;
        }

        const textareas =
            collectTextareas(root);

        textareas.forEach(textarea => {
            if (textarea.isConnected) {
                addRecordButton(textarea);
            }
        });

        enhanceAudioLinks(root);
    }

    function scheduleScan(delay = 120) {
        clearTimeout(scanTimer);

        scanTimer = window.setTimeout(() => {
            removeDuplicateRecordButtons();
            scan(document);
        }, delay);
    }

    function updateEnabledUi() {
        document
            .querySelectorAll(
                `.${CONFIG.recordButtonClass}`
            )
            .forEach(button => {
                button.classList.toggle(
                    'disabled',
                    !enabled
                );

                button.title = enabled
                    ? 'הקלטת הודעה קולית'
                    : 'הודעות קוליות כבויות';
            });
    }

    function setEnabled(value) {
        enabled = Boolean(value);

        GM_setValue(
            CONFIG.enabledKey,
            enabled
        );

        if (!enabled) {
            cancelRecording();
        } else {
            scheduleScan(0);
        }

        updateEnabledUi();

        showToast(
            enabled
                ? 'הודעות קוליות הופעלו.'
                : 'הודעות קוליות כובו.'
        );
    }

    GM_registerMenuCommand(
        'הפעל או כבה הודעות קוליות',
        () => {
            setEnabled(!enabled);
        }
    );

    function startObserver() {
        if (
            observer ||
            !document.documentElement
        ) {
            return;
        }

        observer = new MutationObserver(
            mutations => {
                if (!enabled) {
                    return;
                }

                let relevantChange = false;

                for (const mutation of mutations) {
                    for (
                        const node
                        of mutation.addedNodes
                    ) {
                        if (
                            node.nodeType !==
                            Node.ELEMENT_NODE
                        ) {
                            continue;
                        }

                        /*
                         * מתעלמים מכפתור שהסקריפט עצמו הוסיף,
                         * כדי שלא ליצור לולאת סריקות אינסופית.
                         */
                        if (
                            node.classList?.contains(
                                CONFIG.recordButtonClass
                            )
                        ) {
                            continue;
                        }

                        if (
                            node.id === CONFIG.panelId ||
                            node.id === CONFIG.backdropId
                        ) {
                            continue;
                        }

                        relevantChange = true;
                        scan(node);
                    }

                    for (
                        const node
                        of mutation.removedNodes
                    ) {
                        if (
                            node.nodeType ===
                            Node.ELEMENT_NODE
                        ) {
                            relevantChange = true;
                        }
                    }
                }

                if (relevantChange) {
                    scheduleScan(180);
                }
            }
        );

        observer.observe(
            document.documentElement,
            {
                childList: true,
                subtree: true
            }
        );
    }

    function initialize() {
        ensurePanel();
        hidePanel();

        /*
         * מסיר את כל הכפתורים שנוצרו על ידי גרסאות קודמות.
         */
        document
            .querySelectorAll(
                [
                    '.mt-voice-record-button-v3',
                    '.mt-voice-record-button-v4',
                    `.${CONFIG.recordButtonClass}`
                ].join(',')
            )
            .forEach(button => button.remove());

        collectTextareas(document)
            .forEach(clearTextareaMarker);

        removeDuplicateRecordButtons();
        scan(document);
        startObserver();

        window.setTimeout(
            () => scheduleScan(0),
            300
        );

        window.setTimeout(
            () => scheduleScan(0),
            1000
        );

        window.setTimeout(
            () => scheduleScan(0),
            2500
        );
    }

    if (
        document.readyState === 'loading'
    ) {
        document.addEventListener(
            'DOMContentLoaded',
            initialize,
            { once: true }
        );
    } else {
        initialize();
    }

    document.addEventListener(
        'visibilitychange',
        () => {
            if (!document.hidden) {
                scheduleScan(100);
            }
        }
    );

    window.addEventListener(
        'popstate',
        () => scheduleScan(250)
    );

    window.addEventListener(
        'hashchange',
        () => scheduleScan(250)
    );
})();
/* SOURCE_END: הודעות קוליות בצ'אט.txt */
        }
    },

    {
        id: "reputation-ranking",
        name: "מתמחים טופ – דירוג מוניטין בפוסטים ובפרופילים",
        description: "מציג את מקום המשתמש בדירוג המוניטין מתחת לאווטאר בפוסטים ובכרטיס מעוצב בעמוד הפרופיל",
        category: "משתמשים ופרופיל",
        originalFile: "דירוג מוניטין בפוסטים ובפרופילים.txt",
        version: "3.2.0",
        author: "Moishy",
        runAt: "document-start",
        matches: ["https://mitmachim.top/*","https://www.mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: ["mitmachim_reputation_rankings_v3","mitmachim_reputation_updated_at_v3","mitmachim_reputation_enabled_v3","mitmachim_reputation_scoring_mode_v1"],
        sourceSha256: "5e46177bef763f3d1a12931946d1f2dc8815614cd3f2e3ac6c8748cf8865da04",
        originalBodySha256: "05d2dce413380541e7ff69ca091a7b664c1a9f39601a32f8174c5fab5aa588a6",
        embeddedBodySha256: "05d2dce413380541e7ff69ca091a7b664c1a9f39601a32f8174c5fab5aa588a6",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: דירוג מוניטין בפוסטים ובפרופילים.txt */
(function () {
    'use strict';

    /* =========================================================
       הגדרות
       ========================================================= */

    const CONFIG = {
        // כל כמה זמן לרענן את רשימת הדירוג
        cacheDuration: 12 * 60 * 60 * 1000,

        // ניסיונות לאיתור כותרת הפרופיל לאחר מעבר ללא רענון
        profileRetryDelay: 180,
        profileRetryAttempts: 30,

        // הגנה במקרה של תקלה במספר העמודים
        maxPages: 700,

        // מספר בקשות מקבילות בזמן רענון הדירוג
        concurrentRequests: 3,

        // מספר המקומות שיקבלו עיצוב מודגש
        highlightedRanks: 10,

        // הצגת חלונית מידע במעבר עכבר
        enableTooltip: true,

        // דירוג משוכלל: יחס מוניטין/פוסטים בלבד, בריכוך בייסיאני (R + C·m)/(P + C).
        // הנוסחה משוכפלת ב-test/ranking.test.js - לעדכן את שניהם יחד.
        scoring: {
            // הדירוג המשוכלל = יחס מוניטין/פוסטים (כמו שקובע באתר), בריכוך בייסיאני
            // כדי שמשתמש עם מעט פוסטים לא יקפוץ לראש על סמך יחס גבוה מקרי.
            enabled: false,         // ברירת מחדל = דירוג רגיל (מוניטין גולמי); true = משוכללת (יחס R/P)
            bayesConfidence: 20,    // C: כמה פוסטים "וירטואליים" בממוצע-האתר ממתנים משתמש חדש (0 = R/P טהור)
        },

        debug: false,
    };

    const STORAGE = {
        rankings: 'mitmachim_reputation_rankings_v3',
        updatedAt: 'mitmachim_reputation_updated_at_v3',
        enabled: 'mitmachim_reputation_enabled_v3',
        scoringMode: 'mitmachim_reputation_scoring_mode_v1', // true=משוכללת (קומפוזיט), false=רגילה (מוניטין גולמי)
    };

    const CLASS_NAMES = {
        badge: 'mt-reputation-rank',
        host: 'mt-reputation-avatar-host',
        processedPost: 'mt-reputation-post-processed',
        tooltip: 'mt-reputation-tooltip',
        notification: 'mt-reputation-notification',
        profileRank: 'mt-profile-reputation-rank',
        profileHost: 'mt-profile-rank-host',
    };

    let rankings = {};
    let enabled = GM_getValue(STORAGE.enabled, true);
    // בורר שיטת-הניקוד נשמר בין הפעלות (ברירת-מחדל = הערך שב-CONFIG)
    CONFIG.scoring.enabled = GM_getValue(STORAGE.scoringMode, CONFIG.scoring.enabled);

    let updatePromise = null;
    let observer = null;
    let scanFrame = null;
    let profileRetryTimer = null;
    let profileRetryCounter = 0;
    let lastKnownUrl = location.href;
    let initialized = false;

    /* =========================================================
       כלי עזר
       ========================================================= */

    function log(...args) {
        if (CONFIG.debug) {
            console.log('[Mitmachim Reputation]', ...args);
        }
    }

    function sleep(milliseconds) {
        return new Promise(resolve => {
            window.setTimeout(resolve, milliseconds);
        });
    }

    function normalizeUserSlug(value) {
        if (!value) {
            return '';
        }

        let normalized = String(value).trim();

        try {
            normalized = decodeURIComponent(normalized);
        } catch {
            // אין צורך בפעולה
        }

        return normalized
            .replace(/^@/, '')
            .replace(/^\/+|\/+$/g, '')
            .toLowerCase();
    }

    function formatNumber(value) {
        const number = Number(value);

        if (!Number.isFinite(number)) {
            return String(value ?? '');
        }

        return new Intl.NumberFormat('he-IL').format(number);
    }

    function escapeHtml(value) {
        return String(value ?? '')
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');
    }

    function formatUpdateTime(timestamp) {
        if (!timestamp) {
            return 'לא ידוע';
        }

        const difference = Date.now() - timestamp;
        const minutes = Math.floor(difference / 60000);
        const hours = Math.floor(difference / 3600000);
        const days = Math.floor(difference / 86400000);

        if (minutes < 1) {
            return 'עכשיו';
        }

        if (minutes < 60) {
            return `לפני ${minutes} דקות`;
        }

        if (hours < 24) {
            return hours === 1
                ? 'לפני שעה'
                : `לפני ${hours} שעות`;
        }

        return days === 1
            ? 'אתמול'
            : `לפני ${days} ימים`;
    }

    function isCacheValid() {
        const updatedAt = Number(
            GM_getValue(STORAGE.updatedAt, 0)
        );

        const savedRankings = GM_getValue(
            STORAGE.rankings,
            {}
        );

        return Boolean(
            updatedAt &&
            Date.now() - updatedAt < CONFIG.cacheDuration &&
            savedRankings &&
            typeof savedRankings === 'object' &&
            Object.keys(savedRankings).length > 0
        );
    }

    function getApiUrl(page = 1) {
        const url = new URL('/api/users', location.origin);

        url.searchParams.set(
            'section',
            'sort-reputation'
        );

        url.searchParams.set(
            'page',
            String(page)
        );

        return url.toString();
    }

    function getHtmlUrl(page = 1) {
        const url = new URL('/users', location.origin);

        url.searchParams.set(
            'section',
            'sort-reputation'
        );

        url.searchParams.set(
            'page',
            String(page)
        );

        return url.toString();
    }

    /* =========================================================
       עיצוב
       ========================================================= */

    function injectStyles() {
        if (
            document.getElementById(
                'mt-reputation-styles-v3'
            )
        ) {
            return;
        }

        const style = document.createElement('style');
        style.id = 'mt-reputation-styles-v3';

        style.textContent = `
            /* ==========================
               דירוג מתחת לאווטאר בפוסט
               ========================== */

            .${CLASS_NAMES.host} {
                position: relative !important;
                overflow: visible !important;
                isolation: isolate !important;
            }

            .${CLASS_NAMES.badge} {
                position: absolute !important;
                top: calc(100% + 4px) !important;
                left: 50% !important;
                right: auto !important;

                transform:
                    translateX(-50%) !important;

                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 3px !important;

                min-width: 37px !important;
                min-height: 21px !important;

                padding: 2px 8px !important;
                margin: 0 !important;

                border:
                    1px solid #91afd0 !important;

                border-radius: 999px !important;

                background: #edf5fd !important;
                background-image: none !important;

                color: #124d88 !important;

                opacity: 1 !important;
                visibility: visible !important;

                font-family: Arial, sans-serif !important;
                font-size: 11px !important;
                font-weight: 800 !important;
                line-height: 1.35 !important;
                letter-spacing: 0 !important;

                direction: ltr !important;
                unicode-bidi: isolate !important;

                text-decoration: none !important;
                text-shadow: none !important;
                white-space: nowrap !important;

                box-sizing: border-box !important;

                cursor: default !important;
                user-select: none !important;

                box-shadow:
                    0 1px 4px rgba(0, 0, 0, 0.14),
                    inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;

                z-index: 25 !important;

                transition:
                    transform 130ms ease,
                    background-color 130ms ease,
                    border-color 130ms ease,
                    box-shadow 130ms ease !important;
            }

            .${CLASS_NAMES.badge} *,
            .${CLASS_NAMES.badge}
            .mt-rank-number,
            .${CLASS_NAMES.badge}
            .mt-rank-symbol {
                color: inherit !important;
                opacity: 1 !important;
                visibility: visible !important;

                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;

                text-shadow: none !important;
            }

            .${CLASS_NAMES.badge}:hover {
                transform:
                    translateX(-50%)
                    translateY(-1px) !important;

                background: #dcecff !important;
                border-color: #5f91c8 !important;
                color: #0b3d70 !important;

                box-shadow:
                    0 4px 10px rgba(0, 0, 0, 0.17),
                    inset 0 1px 0 rgba(255, 255, 255, 0.95) !important;

                z-index: 1002 !important;
            }

            .${CLASS_NAMES.badge}[data-rank="1"] {
                min-width: 51px !important;

                background: #ffe58a !important;
                border-color: #d4a817 !important;
                color: #5c4200 !important;
            }

            .${CLASS_NAMES.badge}[data-rank="2"] {
                min-width: 51px !important;

                background: #e5e9ee !important;
                border-color: #98a4b0 !important;
                color: #34424f !important;
            }

            .${CLASS_NAMES.badge}[data-rank="3"] {
                min-width: 51px !important;

                background: #ecc49b !important;
                border-color: #b9763e !important;
                color: #583014 !important;
            }

            .${CLASS_NAMES.badge}.mt-rank-top-10:not(
                [data-rank="1"]
            ):not(
                [data-rank="2"]
            ):not(
                [data-rank="3"]
            ) {
                background: #dcecff !important;
                border-color: #78a2d1 !important;
                color: #12487e !important;
            }

            .${CLASS_NAMES.badge}
            .mt-rank-symbol {
                display: inline-block !important;
                font-size: 9px !important;
            }

            .${CLASS_NAMES.badge}
            .mt-rank-number {
                display: inline-block !important;

                direction: ltr !important;
                unicode-bidi: isolate !important;
            }

            /* ==========================
               כרטיס דירוג בעמוד פרופיל
               ========================== */

            .${CLASS_NAMES.profileHost} {
                overflow: visible !important;
            }

            .${CLASS_NAMES.profileRank} {
                display: inline-flex !important;
                align-items: center !important;
                justify-content: flex-start !important;
                gap: 11px !important;

                width: max-content !important;
                max-width: 100% !important;

                margin-top: 10px !important;
                padding: 8px 14px !important;

                border:
                    1px solid #9bb8d8 !important;

                border-radius: 12px !important;

                background:
                    linear-gradient(
                        135deg,
                        #f7fbff 0%,
                        #e9f3ff 100%
                    ) !important;

                color: #164d84 !important;

                font-family:
                    Arial,
                    sans-serif !important;

                box-shadow:
                    0 3px 10px rgba(42, 91, 145, 0.12),
                    inset 0 1px 0 rgba(255, 255, 255, 0.95) !important;

                direction: rtl !important;

                cursor: default !important;
                user-select: none !important;

                opacity: 1 !important;
                visibility: visible !important;

                box-sizing: border-box !important;

                transition:
                    border-color 140ms ease,
                    box-shadow 140ms ease !important;
            }

            .${CLASS_NAMES.profileRank}:hover {
                border-color: #739bc7 !important;

                box-shadow:
                    0 5px 16px rgba(42, 91, 145, 0.18),
                    inset 0 1px 0 rgba(255, 255, 255, 0.95) !important;
            }

            .${CLASS_NAMES.profileRank}
            .mt-profile-rank-icon {
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;

                flex: 0 0 auto !important;

                min-width: 42px !important;
                width: auto !important;
                height: 36px !important;

                padding: 0 9px !important;

                box-sizing: border-box !important;

                border-radius: 10px !important;

                background: #1769b0 !important;
                color: #ffffff !important;

                font-size: 16px !important;
                font-weight: 800 !important;
                line-height: 1 !important;

                direction: ltr !important;
                unicode-bidi: isolate !important;

                white-space: nowrap !important;

                box-shadow:
                    0 2px 6px rgba(23, 105, 176, 0.24) !important;
            }

            .${CLASS_NAMES.profileRank}
            .mt-profile-rank-content {
                display: flex !important;
                flex-direction: column !important;
                align-items: flex-start !important;
                justify-content: center !important;
                gap: 1px !important;

                min-width: 0 !important;
            }

            .${CLASS_NAMES.profileRank}
            .mt-profile-rank-title {
                color: #5d7187 !important;

                font-size: 11px !important;
                font-weight: 600 !important;
                line-height: 1.3 !important;

                white-space: nowrap !important;
            }

            .${CLASS_NAMES.profileRank}
            .mt-profile-rank-value {
                color: #164d84 !important;

                font-size: 17px !important;
                font-weight: 800 !important;
                line-height: 1.25 !important;

                white-space: nowrap !important;
            }

            .${CLASS_NAMES.profileRank}
            .mt-profile-rank-reputation {
                padding-inline-start: 11px !important;

                border-inline-start:
                    1px solid
                    rgba(22, 77, 132, 0.17) !important;

                color: #536b83 !important;

                font-size: 11px !important;
                line-height: 1.45 !important;

                white-space: nowrap !important;
            }

            .${CLASS_NAMES.profileRank}
            .mt-profile-rank-reputation strong {
                display: block !important;

                color: #164d84 !important;

                font-size: 14px !important;
                font-weight: 800 !important;

                direction: ltr !important;
                unicode-bidi: isolate !important;
            }

            .${CLASS_NAMES.profileRank}[data-rank="1"] {
                border-color: #d4aa20 !important;

                background:
                    linear-gradient(
                        135deg,
                        #fffbea 0%,
                        #ffe99b 100%
                    ) !important;
            }

            .${CLASS_NAMES.profileRank}[data-rank="1"]
            .mt-profile-rank-icon {
                background: #c79500 !important;
            }

            .${CLASS_NAMES.profileRank}[data-rank="2"] {
                border-color: #9da8b3 !important;

                background:
                    linear-gradient(
                        135deg,
                        #fafbfc 0%,
                        #e2e7ec 100%
                    ) !important;
            }

            .${CLASS_NAMES.profileRank}[data-rank="2"]
            .mt-profile-rank-icon {
                background: #707e8b !important;
            }

            .${CLASS_NAMES.profileRank}[data-rank="3"] {
                border-color: #b97843 !important;

                background:
                    linear-gradient(
                        135deg,
                        #fff7f0 0%,
                        #ecc39c 100%
                    ) !important;
            }

            .${CLASS_NAMES.profileRank}[data-rank="3"]
            .mt-profile-rank-icon {
                background: #a86532 !important;
            }

            /* ==========================
               חלונית מידע
               ========================== */

            .${CLASS_NAMES.tooltip} {
                position: fixed !important;
                z-index: 2147483646 !important;

                width: max-content !important;

                max-width:
                    min(
                        280px,
                        calc(100vw - 24px)
                    ) !important;

                padding: 10px 12px !important;

                border:
                    1px solid
                    rgba(255, 255, 255, 0.08) !important;

                border-radius: 9px !important;

                background:
                    rgba(30, 33, 38, 0.97) !important;

                color: #ffffff !important;

                direction: rtl !important;
                text-align: right !important;

                font-family:
                    Arial,
                    sans-serif !important;

                font-size: 12px !important;
                line-height: 1.65 !important;

                box-shadow:
                    0 9px 28px
                    rgba(0, 0, 0, 0.24) !important;

                pointer-events: none !important;

                opacity: 0 !important;
                visibility: hidden !important;

                transform:
                    translateY(3px) !important;

                transition:
                    opacity 100ms ease,
                    visibility 100ms ease,
                    transform 100ms ease !important;
            }

            .${CLASS_NAMES.tooltip}.is-visible {
                opacity: 1 !important;
                visibility: visible !important;

                transform:
                    translateY(0) !important;
            }

            .${CLASS_NAMES.tooltip}
            .mt-tooltip-title {
                margin-bottom: 3px !important;

                color: #ffffff !important;

                font-size: 12.5px !important;
                font-weight: 700 !important;
            }

            .${CLASS_NAMES.tooltip}
            .mt-tooltip-row {
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;

                gap: 18px !important;
            }

            .${CLASS_NAMES.tooltip}
            .mt-tooltip-label {
                color:
                    rgba(
                        255,
                        255,
                        255,
                        0.67
                    ) !important;
            }

            .${CLASS_NAMES.tooltip}
            .mt-tooltip-value {
                color: #ffffff !important;

                direction: ltr !important;
                unicode-bidi: isolate !important;

                font-weight: 700 !important;
            }

            /* ==========================
               הודעות הסקריפט
               ========================== */

            .${CLASS_NAMES.notification} {
                position: fixed !important;

                inset-inline-start: 20px !important;
                bottom: 20px !important;

                z-index: 2147483647 !important;

                max-width:
                    min(
                        360px,
                        calc(100vw - 40px)
                    ) !important;

                padding: 11px 15px !important;

                border:
                    1px solid
                    rgba(0, 0, 0, 0.09) !important;

                border-radius: 10px !important;

                background:
                    rgba(32, 36, 42, 0.97) !important;

                color: #ffffff !important;

                direction: rtl !important;
                text-align: right !important;

                font-family:
                    Arial,
                    sans-serif !important;

                font-size: 13px !important;
                line-height: 1.5 !important;

                box-shadow:
                    0 8px 26px
                    rgba(0, 0, 0, 0.2) !important;

                opacity: 0 !important;

                transform:
                    translateY(10px) !important;

                transition:
                    opacity 180ms ease,
                    transform 180ms ease !important;
            }

            .${CLASS_NAMES.notification}.is-visible {
                opacity: 1 !important;

                transform:
                    translateY(0) !important;
            }

            .${CLASS_NAMES.notification}.is-success {
                border-inline-start:
                    4px solid #55a96c !important;
            }

            .${CLASS_NAMES.notification}.is-error {
                border-inline-start:
                    4px solid #d85c5c !important;
            }

            .${CLASS_NAMES.notification}.is-info {
                border-inline-start:
                    4px solid #5795d9 !important;
            }

            /* ==========================
               התאמה למסכים קטנים
               ========================== */

            @media (max-width: 767px) {
                .${CLASS_NAMES.badge} {
                    top:
                        calc(100% + 3px) !important;

                    min-width: 33px !important;
                    min-height: 19px !important;

                    padding:
                        1px 6px !important;

                    font-size: 10px !important;
                }

                .${CLASS_NAMES.profileRank} {
                    gap: 8px !important;

                    padding:
                        7px 10px !important;
                }

                .${CLASS_NAMES.profileRank}
                .mt-profile-rank-icon {
                    min-width: 36px !important;
                    width: auto !important;
                    height: 32px !important;

                    padding:
                        0 7px !important;

                    font-size: 13px !important;

                    white-space: nowrap !important;
                }

                .${CLASS_NAMES.profileRank}
                .mt-profile-rank-value {
                    font-size: 15px !important;
                }
            }
        `;

        (
            document.head ||
            document.documentElement
        ).appendChild(style);
    }

    function showNotification(
        message,
        type = 'info',
        duration = 3500
    ) {
        document
            .querySelectorAll(
                `.${CLASS_NAMES.notification}`
            )
            .forEach(element => element.remove());

        const notification =
            document.createElement('div');

        notification.className =
            `${CLASS_NAMES.notification} is-${type}`;

        notification.textContent = message;

        document.body.appendChild(notification);

        requestAnimationFrame(() => {
            notification.classList.add(
                'is-visible'
            );
        });

        window.setTimeout(() => {
            notification.classList.remove(
                'is-visible'
            );

            window.setTimeout(() => {
                notification.remove();
            }, 220);
        }, duration);
    }

    /* =========================================================
       חלונית מידע
       ========================================================= */

    function getTooltip() {
        let tooltip = document.querySelector(
            `.${CLASS_NAMES.tooltip}`
        );

        if (!tooltip) {
            tooltip =
                document.createElement('div');

            tooltip.className =
                CLASS_NAMES.tooltip;

            tooltip.setAttribute(
                'role',
                'tooltip'
            );

            document.body.appendChild(tooltip);
        }

        return tooltip;
    }

    function positionTooltip(target, tooltip) {
        const targetRect =
            target.getBoundingClientRect();

        const tooltipRect =
            tooltip.getBoundingClientRect();

        const margin = 8;

        let left =
            targetRect.left +
            targetRect.width / 2 -
            tooltipRect.width / 2;

        left = Math.max(
            8,
            Math.min(
                left,
                window.innerWidth -
                tooltipRect.width -
                8
            )
        );

        let top =
            targetRect.top -
            tooltipRect.height -
            margin;

        if (top < 8) {
            top =
                targetRect.bottom +
                margin;
        }

        tooltip.style.left =
            `${Math.round(left)}px`;

        tooltip.style.top =
            `${Math.round(top)}px`;
    }

    function showTooltip(target) {
        if (!CONFIG.enableTooltip) {
            return;
        }

        const userslug =
            target.dataset.userslug;

        const userData =
            rankings[userslug];

        if (!userData) {
            return;
        }

        const tooltip = getTooltip();

        const updatedAt = Number(
            GM_getValue(
                STORAGE.updatedAt,
                0
            )
        );

        tooltip.innerHTML = `
            <div class="mt-tooltip-title">
                ${escapeHtml(
                    userData.username ||
                    userslug
                )}
            </div>

            <div class="mt-tooltip-row">
                <span class="mt-tooltip-label">
                    מיקום בדירוג
                </span>

                <span class="mt-tooltip-value">
                    ${escapeHtml(
                        formatNumber(
                            userData.rank
                        )
                    )}
                </span>
            </div>

            <div class="mt-tooltip-row">
                <span class="mt-tooltip-label">
                    מוניטין
                </span>

                <span class="mt-tooltip-value">
                    ${escapeHtml(
                        formatNumber(
                            userData.reputation
                        )
                    )}
                </span>
            </div>

            <div class="mt-tooltip-row">
                <span class="mt-tooltip-label">
                    עדכון אחרון
                </span>

                <span>
                    ${escapeHtml(
                        formatUpdateTime(
                            updatedAt
                        )
                    )}
                </span>
            </div>
        `;

        tooltip.classList.add(
            'is-visible'
        );

        positionTooltip(
            target,
            tooltip
        );
    }

    function hideTooltip() {
        const tooltip = document.querySelector(
            `.${CLASS_NAMES.tooltip}`
        );

        if (tooltip) {
            tooltip.classList.remove(
                'is-visible'
            );
        }
    }

    /* =========================================================
       טעינת דירוג
       ========================================================= */

    async function fetchJsonPage(page) {
        const response = await fetch(
            getApiUrl(page),
            {
                method: 'GET',
                credentials: 'same-origin',

                headers: {
                    Accept: 'application/json',
                    'X-Requested-With':
                        'XMLHttpRequest',
                },

                cache: 'no-store',
            }
        );

        if (!response.ok) {
            throw new Error(
                `בקשת API נכשלה בעמוד ${page}: ${response.status}`
            );
        }

        const contentType =
            response.headers.get(
                'content-type'
            ) || '';

        if (
            !contentType.includes(
                'application/json'
            )
        ) {
            throw new Error(
                'השרת לא החזיר JSON'
            );
        }

        return response.json();
    }

    function extractUsersFromJson(data) {
        const possibleArrays = [
            data?.users,
            data?.userData,
            data?.members,
            data?.data?.users,
            data?.data?.members,
        ];

        return (
            possibleArrays.find(
                Array.isArray
            ) || []
        );
    }

    function extractPageCount(data) {
        const possibleValues = [
            data?.pagination?.pageCount,
            data?.pagination?.pages,
            data?.pagination?.lastPage,
            data?.pageCount,
            data?.data?.pagination?.pageCount,
        ];

        for (const value of possibleValues) {
            const numericValue =
                Number(value);

            if (
                Number.isFinite(
                    numericValue
                ) &&
                numericValue > 0
            ) {
                return Math.min(
                    Math.ceil(
                        numericValue
                    ),
                    CONFIG.maxPages
                );
            }
        }

        return 1;
    }

    function parseApiUser(user) {
        if (
            !user ||
            typeof user !== 'object'
        ) {
            return null;
        }

        const userslug =
            normalizeUserSlug(
                user.userslug ||
                user.slug ||
                user.userSlug
            );

        if (!userslug) {
            return null;
        }

        const username = String(
            user.username ||
            user.displayname ||
            user.displayName ||
            userslug
        ).trim();

        const reputation = Number(
            user.reputation ??
            user.reputationScore ??
            user.score ??
            0
        );

        const num = value => {
            const parsed = Number(value);
            return Number.isFinite(parsed) ? parsed : 0;
        };

        return {
            userslug,
            username,

            reputation:
                Number.isFinite(reputation)
                    ? reputation
                    : 0,

            uid:
                user.uid ??
                null,

            // שדות לדירוג החכם (computeSmartScores). חלקם לא תמיד קיימים
            // בתשובת רשימת המשתמשים (רק בפרופיל המלא) - אז נופלים ל-0 ומטופלים כ-neutral.
            postcount: num(user.postcount ?? user.postCount),
            topiccount: num(user.topiccount ?? user.topicCount),
            joindate: num(user.joindate ?? (user.joindateISO && Date.parse(user.joindateISO))),
            lastonline: num(user.lastonline ?? (user.lastonlineISO && Date.parse(user.lastonlineISO))),
            profileviews: num(user.profileviews),
            followerCount: num(user.followerCount ?? user.followercount),
            banned: !!user.banned,
            deleted: !!user.deleted,
            muted: !!(user.muted || (user.mutedUntil && Number(user.mutedUntil) > Date.now())),
        };
    }

    async function fetchHtmlPage(page) {
        const response = await fetch(
            getHtmlUrl(page),
            {
                credentials: 'same-origin',
                cache: 'no-store',
            }
        );

        if (!response.ok) {
            throw new Error(
                `טעינת עמוד הדירוג נכשלה: ${response.status}`
            );
        }

        return response.text();
    }

    function extractHtmlPageCount(
        parsedDocument
    ) {
        let highestPage = 1;

        parsedDocument
            .querySelectorAll(
                'a[href*="page="], [data-page]'
            )
            .forEach(element => {
                let page = Number(
                    element.dataset?.page
                );

                if (
                    !Number.isFinite(page)
                ) {
                    try {
                        const url =
                            new URL(
                                element.getAttribute(
                                    'href'
                                ),
                                location.origin
                            );

                        page = Number(
                            url.searchParams.get(
                                'page'
                            )
                        );
                    } catch {
                        page = 0;
                    }
                }

                if (
                    Number.isFinite(page) &&
                    page > highestPage
                ) {
                    highestPage = page;
                }
            });

        return Math.min(
            highestPage,
            CONFIG.maxPages
        );
    }

    function parseUsersFromHtml(html) {
        const parsedDocument =
            new DOMParser()
                .parseFromString(
                    html,
                    'text/html'
                );

        const users = [];
        const seenSlugs = new Set();

        parsedDocument
            .querySelectorAll(
                '[data-userslug], ' +
                'a[href*="/user/"]'
            )
            .forEach(element => {
                let userslug =
                    element.dataset?.userslug ||
                    element.getAttribute(
                        'data-userslug'
                    ) ||
                    '';

                if (
                    !userslug &&
                    element.matches(
                        'a[href*="/user/"]'
                    )
                ) {
                    try {
                        const url =
                            new URL(
                                element.getAttribute(
                                    'href'
                                ),
                                location.origin
                            );

                        const match =
                            url.pathname.match(
                                /\/user\/([^/?#]+)/i
                            );

                        userslug =
                            match?.[1] || '';
                    } catch {
                        return;
                    }
                }

                userslug =
                    normalizeUserSlug(
                        userslug
                    );

                if (
                    !userslug ||
                    seenSlugs.has(
                        userslug
                    )
                ) {
                    return;
                }

                const container =
                    element.closest(
                        '[data-uid], ' +
                        '.users-box, ' +
                        '.user-row, ' +
                        'li, tr'
                    ) ||
                    element.parentElement;

                const reputationElement =
                    container?.querySelector(
                        '[component="user/reputation"], ' +
                        '.reputation, ' +
                        '[data-reputation]'
                    );

                let reputation =
                    reputationElement
                        ?.dataset
                        ?.reputation ||
                    reputationElement
                        ?.textContent ||
                    container
                        ?.dataset
                        ?.reputation ||
                    '0';

                reputation = Number(
                    String(reputation)
                        .replace(
                            /[^\d.-]/g,
                            ''
                        )
                );

                users.push({
                    userslug,

                    username:
                        element.dataset
                            ?.username ||
                        element.textContent
                            .trim() ||
                        userslug,

                    reputation:
                        Number.isFinite(
                            reputation
                        )
                            ? reputation
                            : 0,

                    uid:
                        element.dataset
                            ?.uid ||
                        container
                            ?.dataset
                            ?.uid ||
                        null,
                });

                seenSlugs.add(
                    userslug
                );
            });

        return {
            users,

            pageCount:
                extractHtmlPageCount(
                    parsedDocument
                ),
        };
    }

    async function mapWithConcurrency(
        items,
        limit,
        callback
    ) {
        const results =
            new Array(items.length);

        let currentIndex = 0;

        async function worker() {
            while (true) {
                const index =
                    currentIndex++;

                if (
                    index >= items.length
                ) {
                    return;
                }

                results[index] =
                    await callback(
                        items[index],
                        index
                    );
            }
        }

        const workers = Array.from(
            {
                length: Math.min(
                    limit,
                    items.length
                ),
            },
            () => worker()
        );

        await Promise.all(workers);

        return results;
    }

    /* =========================================================
       דירוג חכם: ניקוד מורכב במקום reputation גולמי
       הנוסחה משוכפלת ב-test/ranking.test.js - לעדכן את שניהם יחד.
       ========================================================= */

    // לכל ערך: אחוזון באוכלוסייה (midrank לתיקו). O(n log n).
    // כל הערכים שווים => כולם 0.5 (neutral).
    function computeSmartScores(users) {
        const cfg = CONFIG.scoring;

        const pool = users.filter(
            u => u?.userslug && !u.banned && !u.deleted && !u.muted
        );
        if (!pool.length) {
            return [];
        }

        // ממוצע-אתר של מוניטין-לפוסט (m), לריכוך בייסיאני של מי שיש לו מעט פוסטים
        // (מונע חריג כמו 1 פוסט / 5 לייקים שיקפוץ לראש). C=bayesConfidence "פוסטים וירטואליים".
        let sumR = 0;
        let sumP = 0;
        for (const u of pool) {
            sumR += Math.max(0, u.reputation);
            sumP += Math.max(0, u.postcount);
        }
        const m = sumP > 0 ? sumR / sumP : 0;

        // הדירוג = יחס מוניטין/פוסטים בלבד (כמו באתר), בייסיאני. C=0 => R/P טהור.
        const scored = pool.map(u => {
            const R = Math.max(0, u.reputation);
            const P = Math.max(0, u.postcount);
            return { ...u, smartScore: (R + cfg.bayesConfidence * m) / (P + cfg.bayesConfidence) };
        });

        scored.sort((a, b) => b.smartScore - a.smartScore);
        return scored;
    }

    function createRankingsMap(users) {
        const result = {};

        // דירוג חכם ממיין מחדש; אחרת נשמר סדר ה-API (reputation גולמי)
        const ordered = CONFIG.scoring.enabled
            ? computeSmartScores(users)
            : users;

        let rank = 0;

        ordered.forEach(user => {
            if (
                !user?.userslug ||
                result[user.userslug]
            ) {
                return;
            }

            rank += 1;

            result[user.userslug] = {
                rank,
                username: user.username,
                reputation: user.reputation,
                uid: user.uid,
                score: Number.isFinite(user.smartScore)
                    ? Math.round(user.smartScore * 1000) / 1000
                    : undefined,
            };
        });

        return result;
    }

    async function collectRankingsFromApi() {
        const firstPageData =
            await fetchJsonPage(1);

        const firstPageUsers =
            extractUsersFromJson(
                firstPageData
            )
                .map(parseApiUser)
                .filter(Boolean);

        if (!firstPageUsers.length) {
            throw new Error(
                'לא נמצאו משתמשים בתשובת ה־API'
            );
        }

        const pageCount =
            extractPageCount(
                firstPageData
            );

        const allUsers = [
            ...firstPageUsers,
        ];

        if (pageCount > 1) {
            const remainingPages =
                Array.from(
                    {
                        length:
                            pageCount - 1,
                    },
                    (_, index) =>
                        index + 2
                );

            const responses =
                await mapWithConcurrency(
                    remainingPages,
                    CONFIG.concurrentRequests,
                    async page => {
                        await sleep(70);

                        const data =
                            await fetchJsonPage(
                                page
                            );

                        return extractUsersFromJson(
                            data
                        )
                            .map(
                                parseApiUser
                            )
                            .filter(
                                Boolean
                            );
                    }
                );

            responses.forEach(users => {
                allUsers.push(
                    ...users
                );
            });
        }

        return createRankingsMap(
            allUsers
        );
    }

    async function collectRankingsFromHtml() {
        const firstPageHtml =
            await fetchHtmlPage(1);

        const firstPage =
            parseUsersFromHtml(
                firstPageHtml
            );

        if (!firstPage.users.length) {
            throw new Error(
                'לא נמצאו משתמשים בעמוד הדירוג'
            );
        }

        const allUsers = [
            ...firstPage.users,
        ];

        if (
            firstPage.pageCount > 1
        ) {
            const remainingPages =
                Array.from(
                    {
                        length:
                            firstPage
                                .pageCount -
                            1,
                    },
                    (_, index) =>
                        index + 2
                );

            const responses =
                await mapWithConcurrency(
                    remainingPages,
                    CONFIG.concurrentRequests,
                    async page => {
                        await sleep(90);

                        const html =
                            await fetchHtmlPage(
                                page
                            );

                        return parseUsersFromHtml(
                            html
                        ).users;
                    }
                );

            responses.forEach(users => {
                allUsers.push(
                    ...users
                );
            });
        }

        return createRankingsMap(
            allUsers
        );
    }

    async function updateRankings({
        force = false,
        notify = false,
    } = {}) {
        if (updatePromise) {
            return updatePromise;
        }

        if (
            !force &&
            isCacheValid()
        ) {
            rankings = GM_getValue(
                STORAGE.rankings,
                {}
            );

            return rankings;
        }

        updatePromise = (async () => {
            if (notify) {
                showNotification(
                    'מעדכן את דירוג המוניטין…',
                    'info',
                    2500
                );
            }

            try {
                let newRankings;

                try {
                    newRankings =
                        await collectRankingsFromApi();
                } catch (apiError) {
                    log(
                        'טעינת API נכשלה, עובר ל־HTML',
                        apiError
                    );

                    newRankings =
                        await collectRankingsFromHtml();
                }

                const userCount =
                    Object.keys(
                        newRankings
                    ).length;

                if (!userCount) {
                    throw new Error(
                        'רשימת הדירוג שהתקבלה ריקה'
                    );
                }

                rankings =
                    newRankings;

                GM_setValue(
                    STORAGE.rankings,
                    rankings
                );

                GM_setValue(
                    STORAGE.updatedAt,
                    Date.now()
                );

                refreshAllVisibleRanks();

                if (notify) {
                    showNotification(
                        `הדירוג עודכן: ${formatNumber(
                            userCount
                        )} משתמשים`,
                        'success',
                        4000
                    );
                }

                return rankings;
            } catch (error) {
                console.error(
                    '[Mitmachim Reputation] Update failed:',
                    error
                );

                rankings =
                    GM_getValue(
                        STORAGE.rankings,
                        {}
                    );

                if (notify) {
                    showNotification(
                        Object.keys(
                            rankings
                        ).length
                            ? 'העדכון נכשל. נעשה שימוש בדירוג השמור.'
                            : 'לא ניתן היה לטעון את דירוג המוניטין.',
                        'error',
                        5000
                    );
                }

                return rankings;
            } finally {
                updatePromise = null;
            }
        })();

        return updatePromise;
    }

    /* =========================================================
       דירוג מתחת לאווטאר בפוסטים
       ========================================================= */

    function getPostSelector() {
        return [
            '[component="post"]',
            'li[data-pid].posts-list-item',
            '.posts-list > li[data-pid]',
            'article[data-pid]',
        ].join(', ');
    }

    function getPostContainers(
        root = document
    ) {
        if (
            !(
                root instanceof Document ||
                root instanceof Element
            )
        ) {
            return [];
        }

        const posts = new Set();
        const selector =
            getPostSelector();

        if (
            root instanceof Element &&
            root.matches(selector)
        ) {
            posts.add(root);
        }

        root
            .querySelectorAll(selector)
            .forEach(post => {
                posts.add(post);
            });

        return [...posts];
    }

    function extractSlugFromProfileLink(
        link
    ) {
        if (
            !(link instanceof Element)
        ) {
            return '';
        }

        const directSlug =
            link.dataset?.userslug ||
            link.getAttribute(
                'data-userslug'
            );

        if (directSlug) {
            return normalizeUserSlug(
                directSlug
            );
        }

        const href =
            link.getAttribute('href');

        if (!href) {
            return '';
        }

        try {
            const url =
                new URL(
                    href,
                    location.origin
                );

            const match =
                url.pathname.match(
                    /\/user\/([^/?#]+)/i
                );

            return normalizeUserSlug(
                match?.[1] || ''
            );
        } catch {
            return '';
        }
    }

    function getPostUserSlug(post) {
        const directSlug =
            post.dataset?.userslug ||
            post.getAttribute(
                'data-userslug'
            );

        if (directSlug) {
            return normalizeUserSlug(
                directSlug
            );
        }

        const preferredSelectors = [
            '[component="post/username"][data-userslug]',
            '[component="user/username"][data-userslug]',
            '[component="post/header"] a[href*="/user/"]',
            '.post-header a[href*="/user/"]',
            '.icon a[href*="/user/"]',
            '[component="user/picture"]',
        ];

        for (
            const selector
            of preferredSelectors
        ) {
            const element =
                post.querySelector(
                    selector
                );

            if (!element) {
                continue;
            }

            const elementWithSlug =
                element.matches(
                    '[data-userslug]'
                )
                    ? element
                    : element.closest(
                        '[data-userslug]'
                    );

            if (
                elementWithSlug
                    ?.dataset
                    ?.userslug
            ) {
                return normalizeUserSlug(
                    elementWithSlug
                        .dataset
                        .userslug
                );
            }

            const profileLink =
                element.matches(
                    'a[href*="/user/"]'
                )
                    ? element
                    : element.closest(
                        'a[href*="/user/"]'
                    );

            const slug =
                extractSlugFromProfileLink(
                    profileLink
                );

            if (slug) {
                return slug;
            }
        }

        const content =
            post.querySelector(
                '[component="post/content"], ' +
                '.content, ' +
                '.post-content'
            );

        const profileLinks =
            post.querySelectorAll(
                'a[href*="/user/"]'
            );

        for (
            const link
            of profileLinks
        ) {
            if (
                content &&
                content.contains(link)
            ) {
                continue;
            }

            const slug =
                extractSlugFromProfileLink(
                    link
                );

            if (slug) {
                return slug;
            }
        }

        return '';
    }

    function getAvatarHost(post) {
        const hostSelectors = [
            '.post-header > .icon',
            '.post-header .icon',
            '[component="post/header"] .icon',
            '[component="post/avatar"]',
            '.post-avatar',
            '.avatar-container',
            '.posts-list-item > .icon',
        ];

        for (
            const selector
            of hostSelectors
        ) {
            const host =
                post.querySelector(
                    selector
                );

            if (host) {
                return host;
            }
        }

        const pictureSelectors = [
            '[component="user/picture"]',
            'img.avatar',
            'span.avatar',
            '.avatar',
        ];

        for (
            const selector
            of pictureSelectors
        ) {
            const picture =
                post.querySelector(
                    selector
                );

            if (!picture) {
                continue;
            }

            const postContent =
                post.querySelector(
                    '[component="post/content"], ' +
                    '.content, ' +
                    '.post-content'
                );

            if (
                postContent &&
                postContent.contains(
                    picture
                )
            ) {
                continue;
            }

            return (
                picture.closest(
                    '.icon, ' +
                    '.post-avatar, ' +
                    '.avatar-container'
                ) ||
                picture.closest(
                    'a[href*="/user/"]'
                ) ||
                picture.parentElement
            );
        }

        return null;
    }

    function getBadgeLabel(rank) {
        if (rank === 1) {
            return {
                symbol: '◆',
                text: 'מקום 1',
            };
        }

        if (rank === 2) {
            return {
                symbol: '◆',
                text: 'מקום 2',
            };
        }

        if (rank === 3) {
            return {
                symbol: '◆',
                text: 'מקום 3',
            };
        }

        return {
            symbol: '',
            text:
                `#${formatNumber(rank)}`,
        };
    }

    function createPostBadge(
        userslug,
        userData
    ) {
        const badge =
            document.createElement('span');

        const label =
            getBadgeLabel(
                userData.rank
            );

        badge.className =
            CLASS_NAMES.badge;

        badge.dataset.rank =
            String(userData.rank);

        badge.dataset.userslug =
            userslug;

        badge.setAttribute(
            'aria-label',
            `מקום ${formatNumber(
                userData.rank
            )} בדירוג המוניטין`
        );

        if (
            userData.rank <=
            CONFIG.highlightedRanks
        ) {
            badge.classList.add(
                'mt-rank-top-10'
            );
        }

        if (label.symbol) {
            const symbol =
                document.createElement(
                    'span'
                );

            symbol.className =
                'mt-rank-symbol';

            symbol.textContent =
                label.symbol;

            badge.appendChild(
                symbol
            );
        }

        const number =
            document.createElement(
                'span'
            );

        number.className =
            'mt-rank-number';

        number.textContent =
            label.text;

        badge.appendChild(number);

        badge.addEventListener(
            'mouseenter',
            () => showTooltip(
                badge
            )
        );

        badge.addEventListener(
            'mouseleave',
            hideTooltip
        );

        return badge;
    }

    function processPost(post) {
        if (
            !enabled ||
            !rankings ||
            !Object.keys(
                rankings
            ).length ||
            !(post instanceof Element) ||
            !post.isConnected
        ) {
            return;
        }

        const userslug =
            getPostUserSlug(post);

        if (!userslug) {
            return;
        }

        const userData =
            rankings[userslug];

        if (!userData) {
            return;
        }

        const avatarHost =
            getAvatarHost(post);

        if (!avatarHost) {
            return;
        }

        /*
         * אם התג כבר קיים במקום הנכון,
         * לא מוחקים ולא בונים אותו מחדש.
         * זה מונע הבהוב וריקוד בגלילה.
         */
        const existingBadge =
            avatarHost.querySelector(
                `:scope > .${CLASS_NAMES.badge}`
            );

        if (
            existingBadge &&
            existingBadge.dataset
                .userslug === userslug &&
            Number(
                existingBadge.dataset
                    .rank
            ) === userData.rank
        ) {
            post.classList.add(
                CLASS_NAMES.processedPost
            );

            avatarHost.classList.add(
                CLASS_NAMES.host
            );

            return;
        }

        /*
         * מסירים רק תג שגוי או ישן
         * מתוך מעטפת האווטאר הזאת בלבד.
         */
        avatarHost
            .querySelectorAll(
                `:scope > .${CLASS_NAMES.badge}`
            )
            .forEach(element => {
                element.remove();
            });

        avatarHost.classList.add(
            CLASS_NAMES.host
        );

        avatarHost.appendChild(
            createPostBadge(
                userslug,
                userData
            )
        );

        post.classList.add(
            CLASS_NAMES.processedPost
        );
    }

    function scanPosts(
        root = document
    ) {
        if (
            !enabled ||
            !rankings ||
            !Object.keys(
                rankings
            ).length
        ) {
            return;
        }

        getPostContainers(root)
            .forEach(processPost);
    }

    /* =========================================================
       דירוג בעמוד פרופיל
       ========================================================= */

    function getProfilePageSlug() {
        const match =
            location.pathname.match(
                /^\/user\/([^/?#]+)(?:\/.*)?$/i
            );

        if (!match) {
            return '';
        }

        return normalizeUserSlug(
            match[1]
        );
    }

    function isProfilePage() {
        return Boolean(
            getProfilePageSlug()
        );
    }

    function findProfileUsernameElement() {
        const selectors = [
            '[component="account/username"]',
            '[component="user/username"]',
            '.account-username',
            '.account .username',
            '.account-header .username',
            '.account .cover h1',
            '.account .cover h2',
            '.account .cover h3',
            '.account h1',
            '.account h2',
            '.profile h1',
            '.profile h2',
            '[component="account/header"] h1',
            '[component="account/header"] h2',
            '[component="account/header"] h3',
        ];

        for (
            const selector
            of selectors
        ) {
            const elements =
                document.querySelectorAll(
                    selector
                );

            for (
                const element
                of elements
            ) {
                if (
                    element instanceof
                        HTMLElement &&
                    element.isConnected &&
                    element
                        .getClientRects()
                        .length
                ) {
                    return element;
                }
            }
        }

        return null;
    }

    function findProfileHeaderContainer() {
        const selectors = [
            '[component="account/header"]',
            '.account-header',
            '.account .cover',
            '.account .profile',
            '.account',
        ];

        for (
            const selector
            of selectors
        ) {
            const element =
                document.querySelector(
                    selector
                );

            if (
                element instanceof
                    HTMLElement &&
                element.isConnected
            ) {
                return element;
            }
        }

        return null;
    }

    function createProfileRankCard(
        userslug,
        userData
    ) {
        const card =
            document.createElement('div');

        card.className =
            CLASS_NAMES.profileRank;

        card.dataset.userslug =
            userslug;

        card.dataset.rank =
            String(userData.rank);

        let iconText =
            `#${formatNumber(
                userData.rank
            )}`;

        if (userData.rank === 1) {
            iconText = '1';
        } else if (
            userData.rank === 2
        ) {
            iconText = '2';
        } else if (
            userData.rank === 3
        ) {
            iconText = '3';
        }

        card.innerHTML = `
            <span class="mt-profile-rank-icon">
                ${escapeHtml(iconText)}
            </span>

            <span class="mt-profile-rank-content">
                <span class="mt-profile-rank-title">
                    דירוג מוניטין בפורום
                </span>

                <span class="mt-profile-rank-value">
                    מקום ${escapeHtml(
                        formatNumber(
                            userData.rank
                        )
                    )}
                </span>
            </span>

            <span class="mt-profile-rank-reputation">
                מוניטין

                <strong>
                    ${escapeHtml(
                        formatNumber(
                            userData.reputation
                        )
                    )}
                </strong>
            </span>
        `;

        card.addEventListener(
            'mouseenter',
            () => showTooltip(card)
        );

        card.addEventListener(
            'mouseleave',
            hideTooltip
        );

        return card;
    }

    function removeProfileRankCards() {
        document
            .querySelectorAll(
                `.${CLASS_NAMES.profileRank}`
            )
            .forEach(element => {
                element.remove();
            });

        document
            .querySelectorAll(
                `.${CLASS_NAMES.profileHost}`
            )
            .forEach(element => {
                element.classList.remove(
                    CLASS_NAMES.profileHost
                );
            });
    }

    function renderProfileRank() {
        if (!enabled) {
            return false;
        }

        const userslug =
            getProfilePageSlug();

        if (!userslug) {
            removeProfileRankCards();
            return false;
        }

        const userData =
            rankings[userslug];

        if (!userData) {
            return false;
        }

        const existingCards =
            document.querySelectorAll(
                `.${CLASS_NAMES.profileRank}`
            );

        let validExistingCard =
            null;

        existingCards.forEach(card => {
            const isCorrect =
                card.dataset
                    .userslug ===
                    userslug &&
                Number(
                    card.dataset.rank
                ) === userData.rank &&
                card.isConnected;

            if (isCorrect) {
                validExistingCard =
                    card;
            } else {
                card.remove();
            }
        });

        if (validExistingCard) {
            return true;
        }

        const usernameElement =
            findProfileUsernameElement();

        if (usernameElement) {
            usernameElement
                .parentElement
                ?.classList
                .add(
                    CLASS_NAMES
                        .profileHost
                );

            const card =
                createProfileRankCard(
                    userslug,
                    userData
                );

            usernameElement
                .insertAdjacentElement(
                    'afterend',
                    card
                );

            return true;
        }

        const headerContainer =
            findProfileHeaderContainer();

        if (headerContainer) {
            headerContainer.classList.add(
                CLASS_NAMES.profileHost
            );

            headerContainer.appendChild(
                createProfileRankCard(
                    userslug,
                    userData
                )
            );

            return true;
        }

        return false;
    }

    function startProfileRetry() {
        window.clearTimeout(
            profileRetryTimer
        );

        profileRetryCounter = 0;

        function attempt() {
            if (!isProfilePage()) {
                return;
            }

            const success =
                renderProfileRank();

            if (success) {
                profileRetryCounter = 0;
                return;
            }

            profileRetryCounter += 1;

            if (
                profileRetryCounter <
                CONFIG.profileRetryAttempts
            ) {
                profileRetryTimer =
                    window.setTimeout(
                        attempt,
                        CONFIG.profileRetryDelay
                    );
            }
        }

        attempt();
    }

    /* =========================================================
       סריקה יציבה ללא הבהוב
       ========================================================= */

    function scanPage() {
        if (
            !enabled ||
            !rankings ||
            !Object.keys(
                rankings
            ).length
        ) {
            return;
        }

        scanPosts(document);

        if (isProfilePage()) {
            renderProfileRank();
        } else {
            removeProfileRankCards();
        }
    }

    function scheduleFullScan() {
        if (scanFrame) {
            cancelAnimationFrame(
                scanFrame
            );
        }

        scanFrame =
            requestAnimationFrame(() => {
                scanFrame = null;

                scanPage();

                if (isProfilePage()) {
                    startProfileRetry();
                }
            });
    }

    function refreshAllVisibleRanks() {
        /*
         * לאחר עדכון אמיתי של רשימת הדירוג,
         * מעדכנים רק את התגים שנדרשים.
         */
        document
            .querySelectorAll(
                `.${CLASS_NAMES.processedPost}`
            )
            .forEach(element => {
                element.classList.remove(
                    CLASS_NAMES.processedPost
                );
            });

        document
            .querySelectorAll(
                `.${CLASS_NAMES.badge}`
            )
            .forEach(badge => {
                const userslug =
                    badge.dataset
                        .userslug;

                const userData =
                    rankings[userslug];

                if (
                    !userData ||
                    Number(
                        badge.dataset.rank
                    ) !== userData.rank
                ) {
                    badge.remove();
                }
            });

        removeProfileRankCards();
        scheduleFullScan();
    }

    function removeAllRankElements() {
        document
            .querySelectorAll(
                `.${CLASS_NAMES.badge}`
            )
            .forEach(element => {
                element.remove();
            });

        removeProfileRankCards();

        document
            .querySelectorAll(
                `.${CLASS_NAMES.host}`
            )
            .forEach(element => {
                element.classList.remove(
                    CLASS_NAMES.host
                );
            });

        document
            .querySelectorAll(
                `.${CLASS_NAMES.processedPost}`
            )
            .forEach(element => {
                element.classList.remove(
                    CLASS_NAMES.processedPost
                );
            });

        hideTooltip();
    }

    function removeLegacyElements() {
        document
            .querySelectorAll(
                '.mt-reputation-rank, ' +
                '.mt-reputation-tooltip, ' +
                '.mt-rank-notification, ' +
                '.mt-profile-reputation-rank'
            )
            .forEach(element => {
                element.remove();
            });

        document
            .querySelectorAll(
                '.mt-reputation-processed'
            )
            .forEach(element => {
                element.classList.remove(
                    'mt-reputation-processed'
                );
            });
    }

    /* =========================================================
       MutationObserver – טיפול מיידי בפוסטים חדשים
       ========================================================= */

    function startMutationObserver() {
        if (observer) {
            observer.disconnect();
        }

        observer =
            new MutationObserver(
                mutations => {
                    if (
                        !enabled ||
                        !rankings ||
                        !Object.keys(
                            rankings
                        ).length
                    ) {
                        return;
                    }

                    let needsFullScan =
                        false;

                    const postSelector =
                        getPostSelector();

                    for (
                        const mutation
                        of mutations
                    ) {
                        for (
                            const node
                            of mutation
                                .addedNodes
                        ) {
                            if (
                                !(
                                    node instanceof
                                    Element
                                )
                            ) {
                                continue;
                            }

                            if (
                                node.classList.contains(
                                    CLASS_NAMES
                                        .badge
                                ) ||
                                node.classList.contains(
                                    CLASS_NAMES
                                        .profileRank
                                ) ||
                                node.classList.contains(
                                    CLASS_NAMES
                                        .tooltip
                                ) ||
                                node.classList.contains(
                                    CLASS_NAMES
                                        .notification
                                )
                            ) {
                                continue;
                            }

                            /*
                             * id: "hide-deleted-posts",
                             * אם נוסף פוסט שלם,
                             * מטפלים בו מיד.
                             */
                            if (
                                node.matches(
                                    postSelector
                                )
                            ) {
                                processPost(
                                    node
                                );

                                continue;
                            }

                            /*
                             * אם בתוך האלמנט שנוסף
                             * יש פוסטים, מטפלים בהם מיד.
                             */
                            const addedPosts =
                                node.querySelectorAll?.(
                                    postSelector
                                );

                            if (
                                addedPosts
                                    ?.length
                            ) {
                                addedPosts
                                    .forEach(
                                        processPost
                                    );

                                continue;
                            }

                            /*
                             * שינוי אחר עשוי להיות
                             * טעינת עמוד פרופיל.
                             */
                            needsFullScan =
                                true;
                        }
                    }

                    if (needsFullScan) {
                        scheduleFullScan();
                    }
                }
            );

        observer.observe(
            document.body,
            {
                childList: true,
                subtree: true,
                attributes: false,
            }
        );
    }

    /* =========================================================
       זיהוי מעבר עמוד
       ========================================================= */

    function handleNavigationChange() {
        const currentUrl =
            location.href;

        if (
            currentUrl ===
            lastKnownUrl
        ) {
            scheduleFullScan();
            return;
        }

        lastKnownUrl =
            currentUrl;

        window.clearTimeout(
            profileRetryTimer
        );

        profileRetryCounter = 0;

        /*
         * במעבר אמיתי לעמוד חדש אפשר לנקות את
         * רכיבי העמוד הקודם, כי התוכן עצמו מוחלף.
         */
        removeProfileRankCards();

        scheduleFullScan();

        window.setTimeout(
            scheduleFullScan,
            250
        );

        window.setTimeout(
            scheduleFullScan,
            700
        );

        window.setTimeout(
            scheduleFullScan,
            1400
        );
    }

    function patchHistoryNavigation() {
        const originalPushState =
            history.pushState;

        const originalReplaceState =
            history.replaceState;

        history.pushState =
            function (...args) {
                const result =
                    originalPushState.apply(
                        this,
                        args
                    );

                window.dispatchEvent(
                    new CustomEvent(
                        'mt-reputation-location-change'
                    )
                );

                return result;
            };

        history.replaceState =
            function (...args) {
                const result =
                    originalReplaceState.apply(
                        this,
                        args
                    );

                window.dispatchEvent(
                    new CustomEvent(
                        'mt-reputation-location-change'
                    )
                );

                return result;
            };

        window.addEventListener(
            'popstate',
            handleNavigationChange
        );

        window.addEventListener(
            'hashchange',
            handleNavigationChange
        );

        window.addEventListener(
            'mt-reputation-location-change',
            handleNavigationChange
        );
    }

    function listenForNodeBBNavigation() {
        function attachJQueryEvents() {
            if (!window.jQuery) {
                return false;
            }

            const $window =
                window.jQuery(window);

            $window.off(
                '.mtReputation'
            );

            /*
             * מעבר אמיתי לעמוד אחר.
             */
            $window.on(
                'action:ajaxify.end.mtReputation ' +
                'action:account.loaded.mtReputation',
                () => {
                    handleNavigationChange();
                }
            );

            /*
             * טעינת פוסטים נוספים באותו עמוד.
             * לא מוחקים את התגים הקיימים.
             */
            $window.on(
                'action:posts.loaded.mtReputation ' +
                'action:topics.loaded.mtReputation',
                () => {
                    requestAnimationFrame(
                        () => {
                            scanPosts(
                                document
                            );

                            if (
                                isProfilePage()
                            ) {
                                renderProfileRank();
                            }
                        }
                    );
                }
            );

            return true;
        }

        if (!attachJQueryEvents()) {
            let attempts = 0;

            const interval =
                window.setInterval(
                    () => {
                        attempts += 1;

                        if (
                            attachJQueryEvents() ||
                            attempts >= 30
                        ) {
                            window.clearInterval(
                                interval
                            );
                        }
                    },
                    300
                );
        }
    }

    /* =========================================================
       תפריט Tampermonkey
       ========================================================= */

    function registerMenuCommands() {
        GM_registerMenuCommand(
            'עדכן עכשיו את דירוג המוניטין',
            async () => {
                await updateRankings({
                    force: true,
                    notify: true,
                });
            }
        );

        GM_registerMenuCommand(
            enabled
                ? 'כבה את הצגת הדירוג'
                : 'הפעל את הצגת הדירוג',
            () => {
                enabled = !enabled;

                GM_setValue(
                    STORAGE.enabled,
                    enabled
                );

                if (enabled) {
                    scheduleFullScan();

                    showNotification(
                        'הצגת דירוג המוניטין הופעלה',
                        'success'
                    );
                } else {
                    removeAllRankElements();

                    showNotification(
                        'הצגת דירוג המוניטין כובתה',
                        'info'
                    );
                }
            }
        );

        GM_registerMenuCommand(
            CONFIG.scoring.enabled
                ? 'שיטת דירוג: משוכללת ← לחץ למעבר לרגילה (מוניטין)'
                : 'שיטת דירוג: רגילה (מוניטין) ← לחץ למעבר למשוכללת',
            async () => {
                CONFIG.scoring.enabled = !CONFIG.scoring.enabled;

                GM_setValue(
                    STORAGE.scoringMode,
                    CONFIG.scoring.enabled
                );

                await updateRankings({
                    force: true,
                    notify: true,
                });

                showNotification(
                    CONFIG.scoring.enabled
                        ? 'שיטת דירוג: משוכללת (קומפוזיט)'
                        : 'שיטת דירוג: רגילה (מוניטין גולמי)',
                    'info'
                );
            }
        );

        GM_registerMenuCommand(
            'מחק מטמון וטען מחדש',
            async () => {
                GM_deleteValue(
                    STORAGE.rankings
                );

                GM_deleteValue(
                    STORAGE.updatedAt
                );

                rankings = {};

                removeAllRankElements();

                await updateRankings({
                    force: true,
                    notify: true,
                });
            }
        );

        GM_registerMenuCommand(
            'מידע על הדירוג השמור',
            () => {
                const savedRankings =
                    GM_getValue(
                        STORAGE.rankings,
                        {}
                    );

                const updatedAt =
                    Number(
                        GM_getValue(
                            STORAGE.updatedAt,
                            0
                        )
                    );

                const count =
                    Object.keys(
                        savedRankings
                    ).length;

                showNotification(
                    count
                        ? `${formatNumber(
                            count
                        )} משתמשים שמורים. עודכן ${formatUpdateTime(
                            updatedAt
                        )}.`
                        : 'עדיין לא נשמר דירוג מקומי.',
                    'info',
                    5000
                );
            }
        );
    }

    /* =========================================================
       הפעלה
       ========================================================= */

    async function initialize() {
        if (initialized) {
            return;
        }

        initialized = true;

        injectStyles();
        removeLegacyElements();

        registerMenuCommands();
        patchHistoryNavigation();
        listenForNodeBBNavigation();

        rankings = GM_getValue(
            STORAGE.rankings,
            {}
        );

        if (
            enabled &&
            Object.keys(
                rankings
            ).length
        ) {
            scheduleFullScan();
        }

        if (!isCacheValid()) {
            await updateRankings({
                force: true,

                notify:
                    !Object.keys(
                        rankings
                    ).length,
            });
        }

        if (enabled) {
            scheduleFullScan();
        }

        startMutationObserver();

        document.addEventListener(
            'visibilitychange',
            () => {
                if (!document.hidden) {
                    scheduleFullScan();
                }
            }
        );

        window.addEventListener(
            'focus',
            () => {
                scheduleFullScan();
            }
        );

        window.addEventListener(
            'resize',
            hideTooltip,
            {
                passive: true,
            }
        );

        window.addEventListener(
            'scroll',
            hideTooltip,
            {
                passive: true,
            }
        );

        /*
         * בדיקה קלה לכתובת ולעדכון מטמון.
         * לא מוחקת תגים ולא גורמת להבהוב.
         */
        window.setInterval(() => {
            if (
                location.href !==
                lastKnownUrl
            ) {
                handleNavigationChange();
            }

            if (!isCacheValid()) {
                updateRankings({
                    force: true,
                    notify: false,
                });
            }
        }, 2000);
    }

    function waitForDocument() {
        injectStyles();

        if (!document.body) {
            window.setTimeout(
                waitForDocument,
                50
            );

            return;
        }

        initialize();
    }

    waitForDocument();
})();
/* SOURCE_END: דירוג מוניטין בפוסטים ובפרופילים.txt */
        }
    },

    {
        id: "hide-last-read-toast",
        name: "מתמחים טופ – ביטול התראת \"חזרה לפוסט האחרון\"",
        description: "מסתיר את ההתראה הצפה \"לחצו כאן כדי לחזור לפוסט האחרון שקראתם בנושא זה\" ב-mitmachim.top. שאר ההתראות לא מושפעות.",
        category: "ממשק ותצוגה",
        originalFile: "ביטול התראה חזור לפוסט אחרון.txt",
        version: "1.2.0",
        author: "Avraham Glasser",
        runAt: "document-start",
        matches: ["*://mitmachim.top/*","*://www.mitmachim.top/*","*://*.mitmachim.top/*"],
        noframes: true,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "e8cc29d5b7109f81717b56dd5917db49afa36f4a0c8b5858c1d211fe8c23a331",
        originalBodySha256: "15f312e197a527f22e0a027edee2378dcec8e239190c31357884b577fb4befde",
        embeddedBodySha256: "15f312e197a527f22e0a027edee2378dcec8e239190c31357884b577fb4befde",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: ביטול התראה חזור לפוסט אחרון.txt */
(function () {
	'use strict';

	// סימון טעינה מיידי – אם רואים את זה ב-Console, הקוד נטען ורץ על הדף.
	try { console.info('[mitmachim] hide-bookmark-alert v1.2 loaded'); } catch (e) {}

	// ── מה בדיוק מסתירים ────────────────────────────────────────────────────
	// הפורום mitmachim.top בנוי על NodeBB. בכניסה לנושא, NodeBB יוצר התראה צפה דרך
	//   alerts.alert({ alert_id: 'bookmark', message: '[[topic:bookmark-instructions]]', ... })
	// NodeBB מוסיף ל-id קידומת קבועה, ולכן ה-id הסופי בפועל הוא 'alert_button_bookmark',
	// והאלמנט הוא  <div id="alert_button_bookmark" component="toaster/toast" ...>  עם הטקסט
	// בתוך <p>. אנחנו מסתירים בדיוק את ההתראה הזאת ותו לא.

	var BOOKMARK_TEXT = 'לחזור לפוסט האחרון שקראתם בנושא זה';
	var BOOKMARK_ID = 'alert_button_bookmark'; // NodeBB בונה: 'alert_button_' + 'bookmark'
	var HIDDEN_CLASS = 'mitmachim-bookmark-blocker-hidden';

	// הסתרה דרך גיליון סגנון (לא מחיקת אלמנט) – בטוח יותר: לא שובר את מחזור החיים
	// של Bootstrap/NodeBB, ועמיד גם מול jQuery fadeIn שמגדיר display אינליין.
	function injectStyle() {
		if (document.getElementById('mitmachim-bookmark-blocker-style')) return;
		var style = document.createElement('style');
		style.id = 'mitmachim-bookmark-blocker-style';
		style.textContent = '#' + BOOKMARK_ID + ', .' + HIDDEN_CLASS + ' { display: none !important; }';
		(document.head || document.documentElement).appendChild(style);
	}

	function isToast(el) {
		return el && el.nodeType === 1 && typeof el.matches === 'function' &&
			el.matches('[component="toaster/toast"]');
	}

	// גיבוי לפי טקסט, אם ה-id ישתנה בעתיד: אך ורק toast אמיתי של NodeBB בתוך מגש
	// ההתראות (component="toaster/tray") שמכיל את הטקסט הספציפי. כך פוסט רגיל, או
	// קופסת הודעה בתוך פוסט, שמצטטים את המשפט – לא ייעלמו.
	function isBookmarkByText(el) {
		if (!isToast(el)) return false;
		if ((el.textContent || '').indexOf(BOOKMARK_TEXT) === -1) return false;
		if (typeof el.closest === 'function' && !el.closest('[component="toaster/tray"]')) return false;
		return true;
	}

	function hide(el) {
		if (el && el.classList) el.classList.add(HIDDEN_CLASS);
	}

	function scan(root) {
		if (!root || root.nodeType !== 1) return;
		if (root.id === BOOKMARK_ID || isBookmarkByText(root)) hide(root);
		if (typeof root.querySelectorAll === 'function') {
			var list = root.querySelectorAll('#' + BOOKMARK_ID + ', [component="toaster/toast"]');
			for (var i = 0; i < list.length; i++) {
				if (list[i].id === BOOKMARK_ID || isBookmarkByText(list[i])) hide(list[i]);
			}
		}
	}

	injectStyle();

	// מעקב אחרי הזרקה עתידית – כך NodeBB מוסיף את ההתראה בזמן אמת (גם בטעינה ראשונה
	// וגם במעבר בין נושאים ללא רענון דף).
	var observer = new MutationObserver(function (muts) {
		for (var m = 0; m < muts.length; m++) {
			var added = muts[m].addedNodes;
			for (var n = 0; n < added.length; n++) scan(added[n]);
		}
	});
	observer.observe(document.documentElement, { childList: true, subtree: true });
	scan(document.documentElement); // מסתיר גם התראה שכבר קיימת ברגע הטעינה.
})();

/* SOURCE_END: ביטול התראה חזור לפוסט אחרון.txt */
        }
    },

    {
        id: "confirm-downvote",
        name: "מתמחים טופ - אישור דיסלייק",
        description: "מוסיף חלון אישור לפני מתן דיסלייק באתר מתמחים טופ",
        category: "תוכן ופוסטים",
        originalFile: "אישור דיסלייק.txt",
        version: "1.0.0",
        author: "שלמה רביב וGemini 3.1 Pro Preview",
        runAt: "document-idle",
        matches: ["*://*.mitmachim.top/*","*://mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: [],
        sourceSha256: "7206ad59b37d02af5df9234b37e69117afd3c4cd18c1a6e17cb4e9cdd7d3a59a",
        originalBodySha256: "4d082d7f4f06ba866f056c551a6b539df0c78d709f60177decc844fe003b591d",
        embeddedBodySha256: "4d082d7f4f06ba866f056c551a6b539df0c78d709f60177decc844fe003b591d",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: אישור דיסלייק.txt */
(function () {
  "use strict";

  const DISLIKE_SELECTORS =[
    '[component="post/downvote"]',
    '[data-component="post/downvote"]',
    '[class*="downvote"]',
    '[class*="dislike"]',
    '[id*="dislike"]',
    'i.fa-thumbs-down',
  ];
  const SEL = DISLIKE_SELECTORS.join(", ");

  let _confirming = false;
  let _pendingTarget = null;
  let _dialog = null;

  function buildDialog() {
    if (_dialog) return;

    _dialog = document.createElement("dialog");
    _dialog.id = "mtop-dialog";
    _dialog.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&display=swap');

        #mtop-dialog {
          border: none;
          border-radius: 18px;
          padding: 36px 40px 32px;
          width: min(440px, 90vw);
          box-shadow: 0 24px 60px rgba(0,0,0,0.25);
          text-align: center;
          font-family: 'Heebo', Arial, sans-serif;
          direction: rtl;
        }
        #mtop-dialog::backdrop {
          background: rgba(10,15,30,0.55);
          backdrop-filter: blur(6px);
        }
        #mtop-icon {
          width: 68px; height: 68px;
          background: linear-gradient(135deg,#fff1f1,#ffd6d6);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 22px;
          color: #e53e3e;
          box-shadow: 0 0 0 8px rgba(229,62,62,0.08);
        }
        #mtop-dialog h2 { font-size:1.3rem; font-weight:700; color:#1a202c; margin:0 0 10px; }
        #mtop-dialog p  { font-size:1rem; color:#4a5568; margin:0 0 28px; }
        #mtop-btns { display:flex; gap:12px; justify-content:center; flex-direction:row-reverse; }
        #mtop-btns button {
          flex:1; max-width:180px; padding:13px 20px;
          border-radius:12px; font-size:0.95rem; font-weight:600;
          font-family:inherit; cursor:pointer; border:none; transition: background 0.15s, transform 0.12s;
        }
        #mtop-cancel  { background:#f0f4f8; color:#4a5568; }
        #mtop-cancel:hover { background:#e2e8f0; transform:translateY(-1px); }
        #mtop-confirm {
          background: linear-gradient(135deg,#e53e3e,#c53030);
          color: #fff;
          box-shadow: 0 4px 14px rgba(229,62,62,.35);
        }
        #mtop-confirm:hover { background: linear-gradient(135deg,#fc5c5c,#e53e3e); transform:translateY(-1px); }

        /* תמיכה במצב כהה */
        @media (prefers-color-scheme: dark) {
          #mtop-dialog { background:#1e2535; }
          #mtop-dialog h2 { color:#e2e8f0; }
          #mtop-dialog p { color:#94a3b8; }
          #mtop-cancel { background:#2d3748; color:#cbd5e0; }
          #mtop-cancel:hover { background:#4a5568; }
        }
      </style>
      <div id="mtop-icon">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10Z"/>
          <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
        </svg>
      </div>
      <h2>אישור דיסלייק</h2>
      <p>האם אתה בטוח שברצונך לתת דיסלייק?</p>
      <div id="mtop-btns">
        <button id="mtop-cancel">ביטול</button>
        <button id="mtop-confirm">כן, תן דיסלייק</button>
      </div>
    `;

    document.body.appendChild(_dialog);

    _dialog.querySelector("#mtop-confirm").addEventListener("click", () => {
      _dialog.close();
      if (_pendingTarget) {
        _confirming = true;
        _pendingTarget.click();
        setTimeout(() => { _confirming = false; }, 600);
      }
      _pendingTarget = null;
    });

    _dialog.querySelector("#mtop-cancel").addEventListener("click", () => {
      _dialog.close();
      _pendingTarget = null;
    });
  }

  // ============================================================
  // יירוט דיסלייק
  // ============================================================
  document.addEventListener("click", (e) => {
    if (_confirming) return;
    const el = e.target?.closest?.(SEL);
    if (!el) return;

    const isAlreadyDownvoted = el.classList.contains("downvoted") || el.classList.contains("active") || el.closest(".downvoted");

    if (isAlreadyDownvoted) {
      // ביטול דיסלייק: הסרת ההתראה וביצוע ישיר ללא דיאלוג אישור
      document.querySelectorAll(".toast, [component='toaster/toast'], .alert-dismissible").forEach(toast => {
        if (toast.textContent.includes("דיסלייק") || toast.textContent.includes("הצבעה")) {
          toast.remove();
        }
      });
      _confirming = true;
      el.click();
      setTimeout(() => { _confirming = false; }, 600);
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();

    _pendingTarget = el;
    buildDialog();
    _dialog.showModal();
  }, true);

  console.log("[מתמחים טופ] v5 dialog ✓ (Tampermonkey Version)");
})();
/* SOURCE_END: אישור דיסלייק.txt */
        }
    },

    {
        id: "hide-deleted-posts",
        name: "מתמחים טופ - הסתרת פוסטים מחוקים",
        description: "מסתיר אוטומטית פוסטים ותגובות שנמחקו בפורום מתמחים טופ",
        category: "תוכן ופוסטים",
        originalFile: "הסתרת פוסטים מחוקים.txt",
        version: "1.0.0",
        author: "Amlaach & Moishy",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*","https://www.mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: ["mitmachim_hide_deleted_posts_enabled_v1"],
        sourceSha256: "",
        originalBodySha256: "",
        embeddedBodySha256: "",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: הסתרת פוסטים מחוקים.txt */
(function () {
    'use strict';

    const enabledKey = 'mitmachim_hide_deleted_posts_enabled_v1';
    let enabled = GM_getValue(enabledKey, true);
    if (!enabled) return;

    GM_addStyle(`
        [component="post"].deleted,
        li.deleted,
        .post-row.deleted {
            display: none !important;
        }
    `);

    function hideDeletedPosts() {
        if (typeof $ !== 'undefined') {
            try {
                $('li.deleted .content:contains("פוסט זה נמחק"), [component="post"].deleted').closest('li.deleted, [component="post"]').hide();
            } catch (_) {}
        }

        document.querySelectorAll('[component="post"].deleted, li.deleted, .post-row.deleted').forEach(el => {
            el.style.setProperty('display', 'none', 'important');
        });
    }

    hideDeletedPosts();

    if (typeof $ !== 'undefined') {
        $(window).on('action:posts.loaded action:topic.loaded action:ajaxify.end', hideDeletedPosts);
    }

    const observer = new MutationObserver(hideDeletedPosts);
    observer.observe(document.body || document.documentElement, {
        childList: true,
        subtree: true
    });
})();
/* SOURCE_END: הסתרת פוסטים מחוקים.txt */
        }
    },
    {
        id: "peer-detection",
        name: "מתמחים טופ - זיהוי הדדי בין משתמשי הסקריפט",
        description: "מזהה ומציג אינדיקטור על משתמשים אחרים בפורום שמתקינים ומשתמשים בסקריפט NodeBB Unified",
        category: "קהילה ואינטראקציה",
        originalFile: "זיהוי הדדי בין משתמשים.txt",
        version: "1.0.0",
        author: "Amlaach & Moishy",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*","https://www.mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: ["mitmachim_peer_detection_enabled_v1"],
        sourceSha256: "",
        originalBodySha256: "",
        embeddedBodySha256: "",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: זיהוי הדדי בין משתמשים.txt */
(function () {
    'use strict';

    const CONFIG = {
        enabledKey: 'mitmachim_peer_detection_enabled_v1',
        fingerprint: '\u200B\uFEFF\u200B\u200C\u200B',
        badgeClass: 'mt-peer-badge-v1',
        handledAttribute: 'data-mt-peer-checked-v1'
    };

    let enabled = GM_getValue(CONFIG.enabledKey, true);
    if (!enabled) return;

    GM_addStyle(`
        .${CONFIG.badgeClass} {
            display: inline-flex;
            align-items: center;
            gap: 3px;
            font-size: 0.72rem;
            font-weight: 600;
            padding: 2px 6px;
            border-radius: 4px;
            background-color: rgba(13, 202, 240, 0.12);
            color: #0dcaf0;
            border: 1px solid rgba(13, 202, 240, 0.3);
            margin-right: 6px;
            margin-left: 6px;
            vertical-align: middle;
            user-select: none;
        }
        [data-bs-theme="dark"] .${CONFIG.badgeClass},
        .dark .${CONFIG.badgeClass} {
            background-color: rgba(13, 202, 240, 0.2);
            color: #6edff6;
            border-color: rgba(110, 223, 246, 0.4);
        }
    `);

    const detectedUids = new Set();

    function attachFingerprintListeners() {
        document.addEventListener('submit', function (event) {
            const form = event.target;
            if (!(form instanceof HTMLElement)) return;

            const textareas = form.querySelectorAll('textarea');
            textareas.forEach(textarea => {
                if (textarea.value && !textarea.value.includes(CONFIG.fingerprint)) {
                    textarea.value = textarea.value + CONFIG.fingerprint;
                }
            });
        }, true);

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                const textarea = event.target;
                if (textarea instanceof HTMLTextAreaElement && textarea.matches('[component="chat/input"], .chat-input textarea')) {
                    if (textarea.value && !textarea.value.includes(CONFIG.fingerprint)) {
                        textarea.value = textarea.value + CONFIG.fingerprint;
                    }
                }
            }
        }, true);
    }

    function getCleanPostText(element) {
        const clone = element.cloneNode(true);
        clone.querySelectorAll('blockquote').forEach(bq => bq.remove());
        return clone.textContent || '';
    }

    function scanAndRenderBadges() {
        const posts = document.querySelectorAll('[component="post"]:not([' + CONFIG.handledAttribute + '])');
        posts.forEach(post => {
            post.setAttribute(CONFIG.handledAttribute, 'true');

            const uid = post.getAttribute('data-uid');
            const contentEl = post.querySelector('[component="post/content"]');

            let hasSignature = false;

            if (uid && detectedUids.has(uid)) {
                hasSignature = true;
            } else if (contentEl) {
                const cleanText = getCleanPostText(contentEl);
                if (cleanText.includes(CONFIG.fingerprint)) {
                    hasSignature = true;
                    if (uid) detectedUids.add(uid);
                }
            }

            if (hasSignature) {
                injectBadgeIntoPost(post);
            }
        });

        const chatMessages = document.querySelectorAll('[component="chat/message"]:not([' + CONFIG.handledAttribute + '])');
        chatMessages.forEach(msg => {
            msg.setAttribute(CONFIG.handledAttribute, 'true');

            const uid = msg.getAttribute('data-uid');
            const bodyEl = msg.querySelector('.message-body, [component="chat/message/body"]');

            let hasSignature = false;

            if (uid && detectedUids.has(uid)) {
                hasSignature = true;
            } else if (bodyEl) {
                const cleanText = getCleanPostText(bodyEl);
                if (cleanText.includes(CONFIG.fingerprint)) {
                    hasSignature = true;
                    if (uid) detectedUids.add(uid);
                }
            }

            if (hasSignature) {
                injectBadgeIntoChat(msg);
            }
        });
    }

    function injectBadgeIntoPost(post) {
        if (post.querySelector('.' + CONFIG.badgeClass)) return;

        const target = post.querySelector('[component="post/header"], .post-header, .author-info');
        if (!target) return;

        const badge = document.createElement('span');
        badge.className = CONFIG.badgeClass;
        badge.title = 'משתמש ב-NodeBB Unified';
        badge.innerHTML = '<i class="fa fa-bolt" aria-hidden="true"></i> Unified';

        target.appendChild(badge);
    }

    function injectBadgeIntoChat(msg) {
        if (msg.querySelector('.' + CONFIG.badgeClass)) return;

        const target = msg.querySelector('.chat-user, .message-meta, [component="chat/message/user"]');
        if (!target) return;

        const badge = document.createElement('span');
        badge.className = CONFIG.badgeClass;
        badge.title = 'משתמש ב-NodeBB Unified';
        badge.innerHTML = '<i class="fa fa-bolt" aria-hidden="true"></i> Unified';

        target.appendChild(badge);
    }

    attachFingerprintListeners();
    scanAndRenderBadges();

    const observer = new MutationObserver(() => {
        scanAndRenderBadges();
    });

    observer.observe(document.body || document.documentElement, {
        childList: true,
        subtree: true
    });
})();
/* SOURCE_END: זיהוי הדדי בין משתמשים.txt */
        }
    }    ,
    {
        id: "last-post-preview",
        name: "מתמחים טופ - תצוגה מקדימה לפוסטים אחרונים",
        description: "מציג חלונית תצוגה מקדימה עם תוכן הפוסט האחרון בעת רחיפה על הקישור לפוסט האחרון ברשימת הנושאים",
        category: "תוכן ופוסטים",
        originalFile: "תצוגה מקדימה פוסט אחרון.txt",
        version: "1.0.0",
        author: "Amlaach & Moishy",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*","https://www.mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: ["mitmachim_last_post_preview_enabled_v1"],
        sourceSha256: "",
        originalBodySha256: "",
        embeddedBodySha256: "",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: תצוגה מקדימה פוסט אחרון.txt */
(function () {
    'use strict';

    const enabledKey = 'mitmachim_last_post_preview_enabled_v1';
    let enabled = GM_getValue(enabledKey, true);
    if (!enabled) return;

    let popoverEl = null;

    function createPopover() {
        if (popoverEl) return popoverEl;
        popoverEl = document.createElement('div');
        popoverEl.className = 'mt-last-post-popover';
        popoverEl.style.cssText = `
            position: absolute;
            z-index: 99999;
            width: min(360px, 90vw);
            padding: 12px 14px;
            background: #ffffff;
            color: #1e293b;
            border: 1px solid #cbd5e1;
            border-radius: 12px;
            box-shadow: 0 12px 30px rgba(15, 23, 42, 0.2);
            font-size: 13px;
            direction: rtl;
            pointer-events: none;
            display: none;
            transition: opacity 0.15s ease;
        `;
        document.body.appendChild(popoverEl);
        return popoverEl;
    }

    function showPopover(anchor, text, author) {
        const pop = createPopover();
        pop.innerHTML = `
            <div style="font-weight: 700; color: #0f172a; margin-bottom: 4px; display: flex; justify-content: space-between;">
                <span>תצוגה מקדימה לפוסט האחרון</span>
                ${author ? `<span style="color:#0d6efd; font-weight: 600;">${author}</span>` : ''}
            </div>
            <div style="color: #475569; line-height: 1.45; max-height: 120px; overflow: hidden;">${text}</div>
        `;

        const rect = anchor.getBoundingClientRect();
        pop.style.display = 'block';
        pop.style.top = (window.scrollY + rect.bottom + 8) + 'px';
        pop.style.left = Math.max(10, window.scrollX + rect.left) + 'px';
    }

    function hidePopover() {
        if (popoverEl) popoverEl.style.display = 'none';
    }

    document.addEventListener('mouseover', function (event) {
        const target = event.target?.closest?.('[component="topic/teaser"], .teaser, a[href*="/post/"], [component="category/posts"] a');
        if (!target) return;

        const previewText = target.textContent?.trim() || '';
        if (previewText.length > 5) {
            showPopover(target, previewText, '');
        }
    });

    document.addEventListener('mouseout', function (event) {
        if (event.target?.closest?.('[component="topic/teaser"], .teaser, a[href*="/post/"], [component="category/posts"] a')) {
            hidePopover();
        }
    });
})();
/* SOURCE_END: תצוגה מקדימה פוסט אחרון.txt */
        }
    },

    {
        id: "profile-last-seen",
        name: "מתמחים טופ - זמן חיבור אחרון בפרופיל",
        description: "מציג את תאריך וזמן החיבור האחרון של המשתמש בחלונית הפרופיל ובכרטיסי משתמש",
        category: "ממשק ותצוגה",
        originalFile: "זמן חיבור אחרון בפרופיל.txt",
        version: "1.0.0",
        author: "Amlaach & Moishy",
        runAt: "document-idle",
        matches: ["https://mitmachim.top/*","https://www.mitmachim.top/*"],
        noframes: false,
        enabledByDefault: true,
        requiresReload: true,
        storageKeys: ["mitmachim_profile_last_seen_enabled_v1"],
        sourceSha256: "",
        originalBodySha256: "",
        embeddedBodySha256: "",
        mergeChanges: [],
        factory: function (
            GM_getValue,
            GM_setValue,
            GM_deleteValue,
            GM_listValues,
            GM_addStyle,
            GM_registerMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            unsafeWindow,
            window,
            $,
            jQuery
        ) {
/* SOURCE_START: זמן חיבור אחרון בפרופיל.txt */
(function () {
    'use strict';

    const enabledKey = 'mitmachim_profile_last_seen_enabled_v1';
    let enabled = GM_getValue(enabledKey, true);
    if (!enabled) return;

    const cache = new Map();

    function formatTimeAgo(timestamp) {
        if (!timestamp) return 'לא ידוע';
        const date = new Date(timestamp);
        if (isNaN(date.getTime())) return 'לא ידוע';

        const diffSeconds = Math.floor((Date.now() - date.getTime()) / 1000);
        if (diffSeconds < 60) return 'מחובר כעת';
        const diffMinutes = Math.floor(diffSeconds / 60);
        if (diffMinutes < 60) return `לפני ${diffMinutes} דקות`;
        const diffHours = Math.floor(diffMinutes / 60);
        if (diffHours < 24) return `לפני ${diffHours} שעות`;
        const diffDays = Math.floor(diffHours / 24);
        if (diffDays < 30) return `לפני ${diffDays} ימים`;

        return date.toLocaleDateString('he-IL');
    }

    async function fetchLastSeen(uid, userslug) {
        const cacheKey = uid || userslug;
        if (cache.has(cacheKey)) return cache.get(cacheKey);

        try {
            const url = uid ? `${location.origin}/api/user/uid/${uid}` : `${location.origin}/api/user/${userslug}`;
            const res = await fetch(url);
            if (!res.ok) return null;
            const data = await res.json();
            const timeStr = formatTimeAgo(data.lastonlineISO || data.lastonline);
            cache.set(cacheKey, timeStr);
            return timeStr;
        } catch (_) {
            return null;
        }
    }

    async function enhanceUserPopover(popover) {
        if (popover.hasAttribute('data-mt-lastseen-processed')) return;
        popover.setAttribute('data-mt-lastseen-processed', 'true');

        let uid = popover.getAttribute('data-uid');
        let userslug = '';

        if (!uid) {
            const userLink = popover.querySelector('a[href*="/user/"]');
            if (userLink) {
                const href = userLink.getAttribute('href') || '';
                const match = href.match(/\/user\/([^/?#]+)/);
                if (match) userslug = match[1];
            }
        }

        if (!uid && !userslug) return;

        const targetContainer = popover.querySelector('.user-card-body, .popover-body, .profile-card, .status, [component="user/card"]') || popover;
        if (targetContainer.querySelector('.mt-popover-lastseen')) return;

        const lastSeenText = await fetchLastSeen(uid, userslug);
        if (!lastSeenText) return;

        const el = document.createElement('div');
        el.className = 'mt-popover-lastseen';
        el.style.cssText = 'font-size:0.8rem; color:#64748b; margin-top:6px; padding-top:6px; border-top:1px dashed #e2e8f0; direction:rtl; text-align:start;';
        el.innerHTML = `🕒 נראה לאחרונה: <span style="font-weight:600; color:#0f172a;">${lastSeenText}</span>`;

        targetContainer.appendChild(el);
    }

    function scanPopovers() {
        const popovers = document.querySelectorAll('[component="user/card"], .user-card, .popover');
        popovers.forEach(enhanceUserPopover);
    }

    scanPopovers();

    const observer = new MutationObserver(scanPopovers);
    observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
/* SOURCE_END: זמן חיבור אחרון בפרופיל.txt */
        }
    }
    ];

    const UNIFIED_VERSION = '2.0.0';
    const MANAGER_STATE_KEY = 'nodebb-unified:manager-state:v1';
    const AUTOMATIC_BACKUP_KEY = 'nodebb-unified:automatic-backup:v1';
    const PANEL_HOST_ID = 'nodebb-unified-manager-host-v1';
    const SIDEBAR_STYLE_ID = 'nodebb-unified-sidebar-style-v1';
    const SIDEBAR_BOTTOM_ID = 'nodebb-unified-sidebar-bottom-v1';
    const SIDEBAR_SETTINGS_ITEM_ID = 'nodebb-unified-sidebar-settings-item-v1';
    const SIDEBAR_SETTINGS_BUTTON_ID = 'nodebb-unified-sidebar-settings-button-v1';
    const SIDEBAR_LABEL_CLASS = 'nodebb-unified-sidebar-label-v1';
    const PORTABLE_RECENT_TOPICS_ITEM_ID = 'nodebb-unified-recent-topics-item-v1';
    const PORTABLE_TOPIC_FILTER_PANEL_ID = 'nodebb-unified-topic-filter-panel-v1';
    const PORTABLE_TOPIC_FILTER_STYLE_ID = 'nodebb-unified-topic-filter-style-v1';
    const SITE_STORAGE_PREFIX = 'nodebb-unified:site-storage:v1:';
    const PRIMARY_NODEBB_HOSTS = new Set([
        'mitmachim.top',
        'www.mitmachim.top'
    ]);
    const PORTABLE_NODEBB_UI_MODULE_IDS = new Set([
        'smart-shortcuts-random-topic',
        'marked-users-display-fixes',
        'chat-formatting-window',
        'topic-tag-filter',
        'keyword-alerts',
        'reading-list',
        'quick-chat-post-link',
        'recent-topics-button',
        'private-user-notes',
        'topic-search',
        'search-sort-by-post-time',
        'copy-post-link-content',
        'last-read-sidebar-link',
        'voice-chat-messages',
        'confirm-downvote',
        'peer-detection',
        'last-post-preview',
        'profile-last-seen'
    ]);
    const GLOBAL_MODULE_STORAGE_KEYS = new Set([
        'nodebb_dashboard_sites_v03',
        'nodebb_dashboard_ignored_v03'
    ]);
    const LOCAL_STORAGE_KEYS = ['moishy-random-topic-settings-v41'];
    const INDEXED_DB_NAMES = ['mitmachim-random-topic-index-v1'];
    const BLOCKED_IMPORT_KEYS = new Set([
        '__proto__',
        'prototype',
        'constructor'
    ]);
    const KNOWN_GM_KEYS = new Set([
        MANAGER_STATE_KEY,
        ...modules.flatMap(module => module.storageKeys || [])
    ]);
    const SITE_SCOPABLE_GM_KEYS = new Set(
        [...KNOWN_GM_KEYS].filter(key =>
            key !== MANAGER_STATE_KEY &&
            !GLOBAL_MODULE_STORAGE_KEYS.has(key)
        )
    );

    const runtime = new Map(
        modules.map(module => [
            module.id,
            {
                started: false,
                scheduled: false,
                failed: false,
                error: null,
                commands: [],
                storageKeys: new Set(module.storageKeys || []),
                initialEnabled: true,
                pendingReload: false
            }
        ])
    );

    let managerState = loadManagerState();
    let managerStarted = false;
    let centralMenuRegistered = false;
    let navigationListenersInstalled = false;
    let sidebarObserver = null;
    let sidebarRefreshTimer = 0;
    let portableTopicFilterObserver = null;
    let portableTopicFilterRefreshTimer = 0;
    let portableTopicFilterRoute = '';
    let portableTopicFilterPanel = null;
    let portableTopicFilterRows = [];
    let portableTopicFilterTags = new Map();
    let portableTopicFilterSelected = new Set();

    for (const module of modules) {
        runtime.get(module.id).initialEnabled = isModuleEnabled(module);
    }

    function createDefaultManagerState() {
        const enabled = Object.create(null);

        for (const module of modules) {
            enabled[module.id] = module.enabledByDefault !== false;
        }

        return {
            schemaVersion: 1,
            scriptVersion: UNIFIED_VERSION,
            enabled,
            panel: {
                search: '',
                category: 'הכול',
                diagnostic: false
            }
        };
    }

    function loadManagerState() {
        const defaults = createDefaultManagerState();

        try {
            const stored = GM_getValue(MANAGER_STATE_KEY, null);

            if (!stored) {
                return defaults;
            }

            const parsed = typeof stored === 'string' ? JSON.parse(stored) : stored;

            if (!isPlainRecord(parsed)) {
                return defaults;
            }

            const enabled = Object.create(null);

            for (const module of modules) {
                enabled[module.id] =
                    typeof parsed.enabled?.[module.id] === 'boolean'
                        ? parsed.enabled[module.id]
                        : module.enabledByDefault !== false;
            }

            return {
                schemaVersion: 1,
                scriptVersion: UNIFIED_VERSION,
                enabled,
                panel: {
                    search:
                        typeof parsed.panel?.search === 'string'
                            ? parsed.panel.search
                            : '',
                    category:
                        typeof parsed.panel?.category === 'string'
                            ? parsed.panel.category
                            : 'הכול',
                    diagnostic: Boolean(parsed.panel?.diagnostic)
                }
            };
        } catch (error) {
            console.error('[NodeBB Unified] Failed to load manager state once.', error);
            return defaults;
        }
    }

    function saveManagerState() {
        managerState.scriptVersion = UNIFIED_VERSION;
        GM_setValue(MANAGER_STATE_KEY, managerState);
    }

    function isPlainRecord(value) {
        return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
    }

    function isModuleEnabled(module) {
        return typeof managerState.enabled[module.id] === 'boolean'
            ? managerState.enabled[module.id]
            : module.enabledByDefault !== false;
    }

    function pageWindow() {
        return typeof unsafeWindow === 'undefined' ? window : unsafeWindow;
    }

    function detectNodeBB() {
        try {
            const rawWindow = pageWindow();
            const generator = document.querySelector('meta[name="generator"]');
            const generatorValue = generator?.getAttribute('content') || '';

            if (/nodebb/i.test(generatorValue)) {
                return true;
            }

            if (
                (rawWindow.config && rawWindow.ajaxify) ||
                (rawWindow.app && rawWindow.ajaxify)
            ) {
                return true;
            }

            if (
                document.querySelector(
                    'script[src*="/assets/nodebb.min.js"], script[src*="/assets/nodebb.js"]'
                )
            ) {
                return true;
            }

            const body = document.body;

            if (!body) {
                return false;
            }

            const hasTemplateClass = Array.from(body.classList).some(className =>
                className.startsWith('template-')
            );
            const hasPageStatus = Array.from(body.classList).some(className =>
                className.startsWith('page-status-')
            );
            const clientAsset = document.querySelector(
                'link[href*="/assets/client.css"], link[href*="/assets/client-rtl.css"]'
            );
            const hasStructuralSignal =
                (hasTemplateClass && hasPageStatus) || Boolean(clientAsset);

            if (!hasStructuralSignal) {
                return false;
            }

            const slashComponents = document.querySelectorAll(
                '[component*="/"]'
            ).length;

            return slashComponents >= 10;
        } catch (_) {
            return false;
        }
    }

    function isVerifiedMitmachimHost() {
        const host = location.hostname.toLowerCase();
        return PRIMARY_NODEBB_HOSTS.has(host);
    }

    function waitForNodeBB() {
        if (detectNodeBB()) {
            return Promise.resolve(true);
        }

        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            if (!detectNodeBB()) {
                return Promise.resolve(false);
            }
        }

        return new Promise(resolve => {
            let finished = false;
            let observer = null;
            let checkTimer = 0;

            const finish = result => {
                if (finished) {
                    return;
                }

                finished = true;
                observer?.disconnect();
                window.clearTimeout(checkTimer);
                window.clearTimeout(timeout);
                document.removeEventListener('DOMContentLoaded', check);
                resolve(result);
            };

            const check = () => {
                if (detectNodeBB()) {
                    finish(true);
                }
            };

            const scheduleCheck = () => {
                if (finished || checkTimer) {
                    return;
                }

                checkTimer = window.setTimeout(() => {
                    checkTimer = 0;
                    check();
                }, 250);
            };

            const timeout = window.setTimeout(() => finish(detectNodeBB()), 2500);

            document.addEventListener('DOMContentLoaded', check, { once: true });

            if (document.documentElement) {
                observer = new MutationObserver(scheduleCheck);
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true
                });
            }
        });
    }

    function wildcardToRegExp(value) {
        return new RegExp(
            '^' +
                value
                    .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
                    .replace(/\*/g, '.*') +
                '$'
        );
    }

    function matchesOriginalPattern(pattern, href = location.href) {
        try {
            if (pattern === '*://*/*') {
                return /^https?:/i.test(href);
            }

            const parsedPattern = pattern.match(/^(\*|https?|http):\/\/([^/]+)(\/.*)$/i);

            if (!parsedPattern) {
                return false;
            }

            const url = new URL(href);
            const [, scheme, hostPattern, pathPattern] = parsedPattern;

            if (scheme !== '*' && url.protocol !== `${scheme.toLowerCase()}:`) {
                return false;
            }

            const host = url.hostname.toLowerCase();
            const wantedHost = hostPattern.toLowerCase();
            let hostMatches = false;

            if (wantedHost === '*') {
                hostMatches = true;
            } else if (wantedHost.startsWith('*.')) {
                const base = wantedHost.slice(2);
                hostMatches = host === base || host.endsWith(`.${base}`);
            } else {
                hostMatches = host === wantedHost;
            }

            if (!hostMatches) {
                return false;
            }

            return wildcardToRegExp(pathPattern).test(
                `${url.pathname}${url.search}`
            );
        } catch (_) {
            return false;
        }
    }

    function matchesPortableNodeBBPattern(pattern, href = location.href) {
        try {
            const parsedPattern = pattern.match(
                /^(\*|https?|http):\/\/([^/]+)(\/.*)$/i
            );

            if (!parsedPattern) {
                return false;
            }

            const url = new URL(href);

            if (!/^https?:$/i.test(url.protocol)) {
                return false;
            }

            const [, , rawHostPattern, pathPattern] = parsedPattern;
            const hostPattern = rawHostPattern
                .toLowerCase()
                .replace(/^\*\./, '');

            if (
                hostPattern !== 'mitmachim.top' &&
                hostPattern !== 'www.mitmachim.top'
            ) {
                return false;
            }

            return wildcardToRegExp(pathPattern).test(
                `${url.pathname}${url.search}`
            );
        } catch (_) {
            return false;
        }
    }

    function isModuleAvailable(module) {
        if (module.noframes && !isTopFrame()) {
            return false;
        }

        return (
            module.matches.some(pattern => matchesOriginalPattern(pattern)) ||
            (
                PORTABLE_NODEBB_UI_MODULE_IDS.has(module.id) &&
                module.matches.some(pattern =>
                    matchesPortableNodeBBPattern(pattern)
                )
            )
        );
    }

    function isTopFrame() {
        try {
            return window.top === window.self;
        } catch (_) {
            return false;
        }
    }

    function onDomReady(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback, { once: true });
        } else {
            callback();
        }
    }

    function createJQueryFallback() {
        return target => ({
            on(events, selectorOrHandler, possibleHandler) {
                const eventNames = String(events)
                    .split(/\s+/)
                    .map(name => name.split('.')[0])
                    .filter(Boolean);
                const delegated = typeof selectorOrHandler === 'string';
                const handler = delegated ? possibleHandler : selectorOrHandler;

                if (typeof handler !== 'function' || !target?.addEventListener) {
                    return this;
                }

                for (const eventName of eventNames) {
                    target.addEventListener(eventName, event => {
                        if (!delegated) {
                            handler.call(target, event);
                            return;
                        }

                        const origin =
                            event.target instanceof Element
                                ? event.target.closest(selectorOrHandler)
                                : null;

                        if (
                            origin &&
                            (target === document || target === window || target.contains?.(origin))
                        ) {
                            handler.call(origin, event);
                        }
                    });
                }

                return this;
            }
        });
    }

    const jqueryFallback = createJQueryFallback();

    function createSiteStorageKey(key, origin = location.origin) {
        return (
            SITE_STORAGE_PREFIX +
            encodeURIComponent(origin) +
            ':' +
            encodeURIComponent(key)
        );
    }

    function parseSiteStorageKey(storageKey) {
        if (
            typeof storageKey !== 'string' ||
            !storageKey.startsWith(SITE_STORAGE_PREFIX)
        ) {
            return null;
        }

        try {
            const encoded = storageKey.slice(SITE_STORAGE_PREFIX.length);
            const separatorIndex = encoded.indexOf(':');

            if (separatorIndex <= 0 || separatorIndex === encoded.length - 1) {
                return null;
            }

            const origin = decodeURIComponent(encoded.slice(0, separatorIndex));
            const key = decodeURIComponent(encoded.slice(separatorIndex + 1));
            const parsedOrigin = new URL(origin);

            if (
                !/^https?:$/i.test(parsedOrigin.protocol) ||
                parsedOrigin.username ||
                parsedOrigin.password ||
                parsedOrigin.origin !== origin ||
                !SITE_SCOPABLE_GM_KEYS.has(key)
            ) {
                return null;
            }

            return { origin, key };
        } catch (_) {
            return null;
        }
    }

    function moduleStorageKey(key) {
        if (
            typeof key !== 'string' ||
            isVerifiedMitmachimHost() ||
            GLOBAL_MODULE_STORAGE_KEYS.has(key)
        ) {
            return key;
        }

        return createSiteStorageKey(key);
    }

    function listLogicalModuleStorageKeys() {
        const logicalKeys = [];

        for (const storageKey of GM_listValues()) {
            if (isVerifiedMitmachimHost()) {
                if (!String(storageKey).startsWith(SITE_STORAGE_PREFIX)) {
                    logicalKeys.push(storageKey);
                }

                continue;
            }

            if (GLOBAL_MODULE_STORAGE_KEYS.has(storageKey)) {
                logicalKeys.push(storageKey);
                continue;
            }

            const parsed = parseSiteStorageKey(storageKey);

            if (parsed?.origin === location.origin) {
                logicalKeys.push(parsed.key);
            }
        }

        return [...new Set(logicalKeys)];
    }

    function createModuleApis(module) {
        const moduleRuntime = runtime.get(module.id);
        const rawWindow = pageWindow();

        const rememberKey = key => {
            if (typeof key === 'string') {
                moduleRuntime.storageKeys.add(key);
            }
        };

        const wrappedGetValue = (key, defaultValue) => {
            rememberKey(key);
            return GM_getValue(moduleStorageKey(key), defaultValue);
        };

        const wrappedSetValue = (key, value) => {
            rememberKey(key);
            return GM_setValue(moduleStorageKey(key), value);
        };

        const wrappedDeleteValue = key => {
            rememberKey(key);
            return GM_deleteValue(moduleStorageKey(key));
        };

        const wrappedRegisterMenuCommand = (...args) => {
            const [label, callback] = args;

            if (typeof callback === 'function') {
                moduleRuntime.commands.push({
                    label: String(label || 'פקודה מקורית'),
                    callback
                });
            }

            return GM_registerMenuCommand(...args);
        };

        return [
            wrappedGetValue,
            wrappedSetValue,
            wrappedDeleteValue,
            listLogicalModuleStorageKeys,
            GM_addStyle,
            wrappedRegisterMenuCommand,
            GM_notification,
            GM_xmlhttpRequest,
            GM_setClipboard,
            rawWindow,
            rawWindow,
            rawWindow.$ || jqueryFallback,
            rawWindow.jQuery || rawWindow.$ || jqueryFallback
        ];
    }

    function startPortableModuleReplacement(module) {
        if (isVerifiedMitmachimHost()) {
            return false;
        }

        if (module.id === 'recent-topics-button') {
            scheduleSidebarEnhancements();
            return true;
        }

        if (module.id === 'topic-tag-filter') {
            installPortableTopicTagFilter();
            return true;
        }

        return false;
    }

    function runModule(module) {
        const moduleRuntime = runtime.get(module.id);

        if (
            moduleRuntime.started ||
            moduleRuntime.failed ||
            !moduleRuntime.initialEnabled ||
            !isModuleAvailable(module)
        ) {
            moduleRuntime.scheduled = false;
            return;
        }

        moduleRuntime.started = true;
        moduleRuntime.scheduled = false;

        try {
            if (startPortableModuleReplacement(module)) {
                return;
            }

            const result = module.factory(...createModuleApis(module));

            if (result && typeof result.then === 'function') {
                result.catch(error => markModuleFailed(module, error));
            }
        } catch (error) {
            markModuleFailed(module, error);
        }
    }

    function markModuleFailed(module, error) {
        const moduleRuntime = runtime.get(module.id);

        if (moduleRuntime.failed) {
            return;
        }

        moduleRuntime.failed = true;
        moduleRuntime.error = error instanceof Error ? error : new Error(String(error));
        console.error(`[NodeBB Unified] Module "${module.name}" failed once.`, error);
        refreshOpenPanel();
    }

    function scheduleModule(module) {
        const moduleRuntime = runtime.get(module.id);

        if (
            moduleRuntime.started ||
            moduleRuntime.scheduled ||
            moduleRuntime.failed ||
            !moduleRuntime.initialEnabled ||
            !isModuleAvailable(module)
        ) {
            return;
        }

        moduleRuntime.scheduled = true;

        if (module.runAt === 'document-start') {
            runModule(module);
            return;
        }

        if (module.runAt === 'document-end') {
            onDomReady(() => runModule(module));
            return;
        }

        onDomReady(() => window.setTimeout(() => runModule(module), 0));
    }

    function scheduleEligibleModules() {
        for (const module of modules) {
            scheduleModule(module);
        }

        refreshOpenPanel();
    }

    function installNavigationListeners() {
        if (navigationListenersInstalled) {
            return;
        }

        navigationListenersInstalled = true;
        const scheduleAfterNavigation = () => {
            window.setTimeout(scheduleEligibleModules, 100);
            window.setTimeout(scheduleSidebarEnhancements, 140);
            window.setTimeout(refreshPortableTopicTagFilter, 170);
            window.setTimeout(refreshOpenPanel, 350);
        };

        window.addEventListener('popstate', scheduleAfterNavigation);
        window.addEventListener('hashchange', scheduleAfterNavigation);
        window.addEventListener('action:ajaxify.end', scheduleAfterNavigation);
        document.addEventListener('action:ajaxify.end', scheduleAfterNavigation);
        document.addEventListener('ajaxify.end', scheduleAfterNavigation);

        for (const methodName of ['pushState', 'replaceState']) {
            try {
                const original = window.history?.[methodName];

                if (typeof original !== 'function') {
                    continue;
                }

                window.history[methodName] = function (...args) {
                    const result = original.apply(this, args);
                    scheduleAfterNavigation();
                    return result;
                };
            } catch (error) {
                console.debug(
                    `[NodeBB Unified] Unable to observe history.${methodName}.`,
                    error
                );
            }
        }
        document.addEventListener(
            'click',
            event => {
                if (event.target instanceof Element && event.target.closest('a[href]')) {
                    window.setTimeout(scheduleAfterNavigation, 250);
                }
            },
            true
        );
    }

    function registerCentralMenu() {
        if (centralMenuRegistered || !isTopFrame()) {
            return;
        }

        centralMenuRegistered = true;
        GM_registerMenuCommand('פתח את פאנל NodeBB Unified', openPanel);
    }

    function startManager() {
        if (managerStarted) {
            return;
        }

        managerStarted = true;
        registerCentralMenu();
        installNavigationListeners();
        installSidebarEnhancements();
        scheduleEligibleModules();
    }

    function escapeHtml(value) {
        return String(value ?? '').replace(/[&<>"']/g, character => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[character]);
    }

    function moduleStatus(module) {
        const moduleRuntime = runtime.get(module.id);

        if (!isModuleAvailable(module)) {
            return { key: 'unavailable', text: 'לא זמין באתר הנוכחי' };
        }

        if (moduleRuntime.failed) {
            return { key: 'failed', text: 'נכשל בטעינה' };
        }

        if (moduleRuntime.pendingReload) {
            return { key: 'reload', text: 'נדרש רענון' };
        }

        if (!isModuleEnabled(module)) {
            return { key: 'disabled', text: 'כבוי' };
        }

        if (moduleRuntime.started) {
            return { key: 'active', text: 'פעיל' };
        }

        if (moduleRuntime.scheduled) {
            return { key: 'waiting', text: 'ממתין לטעינה' };
        }

        return { key: 'waiting', text: 'ממתין לעמוד מתאים' };
    }

    function getFilteredModules() {
        const search = managerState.panel.search.trim().toLocaleLowerCase('he');
        const category = managerState.panel.category;

        return modules.filter(module => {
            const matchesCategory = category === 'הכול' || module.category === category;
            const haystack = `${module.name} ${module.description} ${module.originalFile}`
                .toLocaleLowerCase('he');

            return matchesCategory && (!search || haystack.includes(search));
        });
    }

    function renderModuleCard(module) {
        const moduleRuntime = runtime.get(module.id);
        const status = moduleStatus(module);
        const enabled = isModuleEnabled(module);
        const available = isModuleAvailable(module);
        const diagnostic = managerState.panel.diagnostic;
        const commands = moduleRuntime.commands
            .map(
                (command, index) => `
                    <button
                        type="button"
                        class="original-command"
                        data-module-id="${escapeHtml(module.id)}"
                        data-command-index="${index}"
                    >${escapeHtml(command.label)}</button>
                `
            )
            .join('');

        const diagnosticDetails = diagnostic
            ? `
                <dl class="diagnostic-details">
                    <div><dt>קובץ מקור</dt><dd>${escapeHtml(module.originalFile)}</dd></div>
                    <div><dt>גרסה</dt><dd>${escapeHtml(module.version)}</dd></div>
                    <div><dt>תזמון</dt><dd>${escapeHtml(module.runAt)}</dd></div>
                    <div><dt>מפתחות GM שנצפו</dt><dd>${escapeHtml(
                        Array.from(moduleRuntime.storageKeys).join(', ') || 'אין'
                    )}</dd></div>
                    ${
                        moduleRuntime.error
                            ? `<div><dt>שגיאה</dt><dd>${escapeHtml(
                                  moduleRuntime.error.stack || moduleRuntime.error.message
                              )}</dd></div>`
                            : ''
                    }
                </dl>
            `
            : '';

        return `
            <article class="module-card" data-module-card="${escapeHtml(module.id)}">
                <div class="module-main">
                    <div class="module-copy">
                        <div class="module-heading">
                            <h3>${escapeHtml(module.name)}</h3>
                            <span class="status ${status.key}">${escapeHtml(status.text)}</span>
                        </div>
                        <p>${escapeHtml(module.description)}</p>
                        <div class="module-meta">
                            <span>${escapeHtml(module.category)}</span>
                            <span>${escapeHtml(module.author || 'מחבר לא צוין')}</span>
                        </div>
                    </div>
                    <label class="switch" title="שינוי מצב המודול ייכנס לתוקף לאחר רענון">
                        <input
                            type="checkbox"
                            data-module-toggle="${escapeHtml(module.id)}"
                            ${enabled ? 'checked' : ''}
                        >
                        <span class="switch-track" aria-hidden="true"></span>
                        <span class="sr-only">הפעל או כבה את ${escapeHtml(module.name)}</span>
                    </label>
                </div>
                ${
                    commands
                        ? `<div class="original-commands"><span>פקודות מקוריות:</span>${commands}</div>`
                        : ''
                }
                ${diagnosticDetails}
            </article>
        `;
    }

    function renderPanel(shadow) {
        const categories = [
            'הכול',
            ...Array.from(new Set(modules.map(module => module.category)))
        ];
        const failedModules = modules.filter(module => runtime.get(module.id).failed);
        const filtered = getFilteredModules();

        const searchInput = shadow.querySelector('[data-role="search"]');
        const categorySelect = shadow.querySelector('[data-role="category"]');
        const diagnosticToggle = shadow.querySelector('[data-role="diagnostic"]');
        const moduleList = shadow.querySelector('[data-role="module-list"]');
        const failureBox = shadow.querySelector('[data-role="failures"]');
        const countBox = shadow.querySelector('[data-role="count"]');

        if (!searchInput || !categorySelect || !diagnosticToggle || !moduleList) {
            return;
        }

        if (searchInput.value !== managerState.panel.search) {
            searchInput.value = managerState.panel.search;
        }

        categorySelect.innerHTML = categories
            .map(
                category =>
                    `<option value="${escapeHtml(category)}" ${
                        category === managerState.panel.category ? 'selected' : ''
                    }>${escapeHtml(category)}</option>`
            )
            .join('');

        diagnosticToggle.checked = managerState.panel.diagnostic;
        moduleList.innerHTML = filtered.length
            ? filtered.map(renderModuleCard).join('')
            : '<div class="empty-state">לא נמצאו מודולים התואמים לחיפוש.</div>';

        countBox.textContent = `${filtered.length} מתוך ${modules.length} מודולים`;

        failureBox.hidden = failedModules.length === 0;
        failureBox.innerHTML = failedModules.length
            ? `<strong>מודולים שנכשלו:</strong> ${failedModules
                  .map(module => escapeHtml(module.name))
                  .join(' · ')}`
            : '';
    }

    function panelTemplate() {
        return `
            <style>
                :host {
                    all: initial;
                    color-scheme: light dark;
                }

                *, *::before, *::after {
                    box-sizing: border-box;
                }

                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border: 0;
                }

                .backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 2147483647;
                    display: grid;
                    place-items: center;
                    padding: 18px;
                    background: rgba(15, 23, 42, 0.58);
                    backdrop-filter: blur(3px);
                    direction: rtl;
                    font-family: Arial, "Noto Sans Hebrew", sans-serif;
                }

                .panel {
                    width: min(980px, 100%);
                    max-height: min(880px, calc(100vh - 36px));
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    color: #172033;
                    background: #f8fafc;
                    border: 1px solid rgba(148, 163, 184, 0.55);
                    border-radius: 18px;
                    box-shadow: 0 24px 70px rgba(15, 23, 42, 0.35);
                }

                .panel-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 20px 22px 16px;
                    color: #ffffff;
                    background: linear-gradient(135deg, #1d4ed8, #4338ca);
                }

                .panel-header h1 {
                    margin: 0 0 5px;
                    font-size: 24px;
                    line-height: 1.2;
                }

                .panel-header p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.84);
                    font-size: 14px;
                }

                button, input, select {
                    font: inherit;
                }

                button {
                    cursor: pointer;
                }

                .close-button {
                    flex: 0 0 auto;
                    width: 36px;
                    height: 36px;
                    padding: 0;
                    color: #ffffff;
                    background: rgba(255, 255, 255, 0.14);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 10px;
                    font-size: 22px;
                    line-height: 1;
                }

                .toolbar {
                    display: grid;
                    grid-template-columns: minmax(220px, 1fr) minmax(170px, 240px) auto;
                    gap: 10px;
                    align-items: center;
                    padding: 14px 18px;
                    background: #ffffff;
                    border-bottom: 1px solid #e2e8f0;
                }

                .toolbar input[type="search"], .toolbar select {
                    width: 100%;
                    min-height: 40px;
                    padding: 8px 11px;
                    color: #172033;
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    border-radius: 10px;
                    outline: none;
                }

                .diagnostic-control {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    white-space: nowrap;
                    font-size: 13px;
                }

                .action-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    align-items: center;
                    padding: 10px 18px;
                    background: #f8fafc;
                    border-bottom: 1px solid #e2e8f0;
                }

                .action-button, .original-command {
                    min-height: 34px;
                    padding: 7px 11px;
                    color: #1e3a8a;
                    background: #eff6ff;
                    border: 1px solid #bfdbfe;
                    border-radius: 9px;
                    font-size: 13px;
                    font-weight: 600;
                }

                .action-button.danger {
                    color: #991b1b;
                    background: #fef2f2;
                    border-color: #fecaca;
                }

                .module-count {
                    margin-inline-start: auto;
                    color: #64748b;
                    font-size: 13px;
                }

                .failure-box {
                    margin: 12px 18px 0;
                    padding: 10px 12px;
                    color: #991b1b;
                    background: #fef2f2;
                    border: 1px solid #fecaca;
                    border-radius: 10px;
                    font-size: 13px;
                }

                .module-list {
                    display: grid;
                    gap: 10px;
                    padding: 14px 18px 20px;
                    overflow: auto;
                }

                .module-card {
                    padding: 14px;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 13px;
                    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
                }

                .module-main {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .module-copy {
                    min-width: 0;
                    flex: 1;
                }

                .module-heading {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 8px;
                }

                .module-heading h3 {
                    margin: 0;
                    color: #0f172a;
                    font-size: 16px;
                }

                .module-copy p {
                    margin: 6px 0;
                    color: #475569;
                    font-size: 13px;
                    line-height: 1.45;
                }

                .module-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 5px 10px;
                    color: #64748b;
                    font-size: 11px;
                }

                .status {
                    padding: 3px 7px;
                    border-radius: 999px;
                    font-size: 11px;
                    font-weight: 700;
                }

                .status.active { color: #166534; background: #dcfce7; }
                .status.failed { color: #991b1b; background: #fee2e2; }
                .status.reload { color: #92400e; background: #fef3c7; }
                .status.unavailable { color: #475569; background: #e2e8f0; }
                .status.disabled { color: #64748b; background: #f1f5f9; }
                .status.waiting { color: #1e40af; background: #dbeafe; }

                .switch {
                    position: relative;
                    flex: 0 0 auto;
                    width: 46px;
                    height: 26px;
                }

                .switch input {
                    position: absolute;
                    opacity: 0;
                    pointer-events: none;
                }

                .switch-track {
                    position: absolute;
                    inset: 0;
                    background: #cbd5e1;
                    border-radius: 999px;
                    transition: 0.16s ease;
                }

                .switch-track::after {
                    content: '';
                    position: absolute;
                    top: 3px;
                    right: 3px;
                    width: 20px;
                    height: 20px;
                    background: #ffffff;
                    border-radius: 50%;
                    box-shadow: 0 1px 4px rgba(15, 23, 42, 0.3);
                    transition: 0.16s ease;
                }

                .switch input:checked + .switch-track {
                    background: #2563eb;
                }

                .switch input:checked + .switch-track::after {
                    transform: translateX(-20px);
                }

                .switch input:disabled + .switch-track {
                    opacity: 0.45;
                    cursor: not-allowed;
                }

                .original-commands {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 6px;
                    margin-top: 11px;
                    padding-top: 10px;
                    border-top: 1px dashed #cbd5e1;
                    color: #64748b;
                    font-size: 12px;
                }

                .original-command {
                    min-height: 30px;
                    padding: 5px 9px;
                    font-size: 12px;
                }

                .diagnostic-details {
                    margin: 11px 0 0;
                    padding: 10px;
                    background: #f8fafc;
                    border-radius: 9px;
                    font-size: 11px;
                    overflow-wrap: anywhere;
                }

                .diagnostic-details div {
                    display: grid;
                    grid-template-columns: 120px 1fr;
                    gap: 8px;
                    margin: 4px 0;
                }

                .diagnostic-details dt { font-weight: 700; }
                .diagnostic-details dd { margin: 0; white-space: pre-wrap; }

                .empty-state {
                    padding: 30px;
                    color: #64748b;
                    text-align: center;
                }

                @media (max-width: 720px) {
                    .backdrop { padding: 0; }
                    .panel {
                        width: 100%;
                        height: 100vh;
                        max-height: none;
                        border-radius: 0;
                    }
                    .toolbar { grid-template-columns: 1fr; }
                    .module-count { width: 100%; margin-inline-start: 0; }
                    .diagnostic-details div { grid-template-columns: 1fr; }
                }

                @media (prefers-color-scheme: dark) {
                    .panel { color: #e2e8f0; background: #0f172a; border-color: #334155; }
                    .toolbar, .module-card { background: #111827; border-color: #334155; }
                    .toolbar input[type="search"], .toolbar select {
                        color: #e2e8f0;
                        background: #0f172a;
                        border-color: #475569;
                    }
                    .action-row { background: #0f172a; border-color: #334155; }
                    .module-heading h3 { color: #f8fafc; }
                    .module-copy p, .module-meta, .module-count, .original-commands { color: #94a3b8; }
                    .diagnostic-details { background: #0f172a; }
                    .module-list { scrollbar-color: #475569 transparent; }
                }
            </style>

            <div class="backdrop" data-role="backdrop">
                <section class="panel" role="dialog" aria-modal="true" aria-labelledby="nodebb-unified-title">
                    <header class="panel-header">
                        <div>
                            <h1 id="nodebb-unified-title">NodeBB Unified</h1>
                            <p>ניהול מרכזי למודולים המקוריים · גרסה ${escapeHtml(UNIFIED_VERSION)}</p>
                        </div>
                        <button type="button" class="close-button" data-action="close" aria-label="סגור">×</button>
                    </header>

                    <div class="toolbar">
                        <input type="search" data-role="search" placeholder="חיפוש מודול..." aria-label="חיפוש מודול">
                        <select data-role="category" aria-label="קטגוריה"></select>
                        <label class="diagnostic-control">
                            <input type="checkbox" data-role="diagnostic">
                            מצב אבחון
                        </label>
                    </div>

                    <div class="action-row">
                        <button type="button" class="action-button" data-action="enable-all">הפעל הכול</button>
                        <button type="button" class="action-button danger" data-action="disable-all">כבה הכול</button>
                        <button type="button" class="action-button" data-action="reset">שחזר ברירות מחדל</button>
                        <button type="button" class="action-button" data-action="export">ייצוא הגדרות ונתונים</button>
                        <button type="button" class="action-button" data-action="import">ייבוא הגדרות ונתונים</button>
                        <span class="module-count" data-role="count"></span>
                    </div>

                    <div class="failure-box" data-role="failures" hidden></div>
                    <main class="module-list" data-role="module-list"></main>
                </section>
            </div>
        `;
    }

    function openPanel() {
        if (!managerStarted) {
            return;
        }

        const existing = document.getElementById(PANEL_HOST_ID);

        if (existing) {
            existing.shadowRoot?.querySelector('[data-role="search"]')?.focus();
            return;
        }

        onDomReady(() => {
            if (document.getElementById(PANEL_HOST_ID)) {
                return;
            }

            const host = document.createElement('div');
            host.id = PANEL_HOST_ID;
            const shadow = host.attachShadow({ mode: 'open' });
            shadow.innerHTML = panelTemplate();
            document.body.appendChild(host);

            bindPanelEvents(host, shadow);
            renderPanel(shadow);
            shadow.querySelector('[data-role="search"]')?.focus();
        });
    }

    function closePanel() {
        document.getElementById(PANEL_HOST_ID)?.remove();
    }

    function refreshOpenPanel() {
        const shadow = document.getElementById(PANEL_HOST_ID)?.shadowRoot;

        if (shadow) {
            renderPanel(shadow);
        }
    }

    function addSidebarEnhancementStyles() {
        if (document.getElementById(SIDEBAR_STYLE_ID)) {
            return;
        }

        const style = document.createElement('style');
        style.id = SIDEBAR_STYLE_ID;
        style.textContent = `
            #${SIDEBAR_BOTTOM_ID} {
                flex: 0 0 auto !important;
                width: 100% !important;
                padding: 0 !important;
                list-style: none !important;
            }
            #nodebb-dash-link .unread-count,
            #nodebb-dash-link .badge,
            #nodebb-dash-link .position-relative::after,
            #nodebb-unified-sidebar-bottom-v1 .unread-count,
            #nodebb-unified-sidebar-bottom-v1 .badge,
            #nodebb-unified-sidebar-settings-item-v1 .unread-count,
            #nodebb-unified-sidebar-settings-item-v1 .badge {
                display: none !important;
            }

            #${SIDEBAR_SETTINGS_ITEM_ID} {
                width: auto !important;
                list-style: none !important;
            }

            #${SIDEBAR_SETTINGS_BUTTON_ID} {
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                width: 100% !important;
                min-height: 40px !important;
                padding: 0.5rem !important;
                color: inherit !important;
                background: transparent !important;
                border: 0 !important;
                border-radius: 0.375rem !important;
                font: inherit !important;
                text-align: start !important;
                cursor: pointer !important;
            }

            #${SIDEBAR_SETTINGS_BUTTON_ID}:hover,
            #${SIDEBAR_SETTINGS_BUTTON_ID}:focus-visible {
                background: var(--bs-tertiary-bg, rgba(0, 0, 0, 0.055)) !important;
                outline: none !important;
            }

            nav.sidebar .${SIDEBAR_LABEL_CLASS},
            [component*="sidebar"] .${SIDEBAR_LABEL_CLASS},
            .sidebar-left .${SIDEBAR_LABEL_CLASS},
            .sidebar-right .${SIDEBAR_LABEL_CLASS} {
                display: none !important;
                min-width: 0 !important;
            }

            nav.sidebar[data-nodebb-unified-expanded="true"] .${SIDEBAR_LABEL_CLASS},
            [component*="sidebar"][data-nodebb-unified-expanded="true"] .${SIDEBAR_LABEL_CLASS},
            .sidebar-left[data-nodebb-unified-expanded="true"] .${SIDEBAR_LABEL_CLASS},
            .sidebar-right[data-nodebb-unified-expanded="true"] .${SIDEBAR_LABEL_CLASS} {
                display: inline-block !important;
            }

            nav.sidebar[data-nodebb-unified-expanded="true"] #${SIDEBAR_SETTINGS_BUTTON_ID},
            [component*="sidebar"][data-nodebb-unified-expanded="true"] #${SIDEBAR_SETTINGS_BUTTON_ID},
            .sidebar-left[data-nodebb-unified-expanded="true"] #${SIDEBAR_SETTINGS_BUTTON_ID},
            .sidebar-right[data-nodebb-unified-expanded="true"] #${SIDEBAR_SETTINGS_BUTTON_ID} {
                justify-content: flex-start !important;
                gap: 0.5rem !important;
            }

            nav.sidebar[data-nodebb-unified-expanded="true"] #mrl-sidebar-entry,
            [component*="sidebar"][data-nodebb-unified-expanded="true"] #mrl-sidebar-entry,
            .sidebar-left[data-nodebb-unified-expanded="true"] #mrl-sidebar-entry,
            .sidebar-right[data-nodebb-unified-expanded="true"] #mrl-sidebar-entry {
                justify-content: stretch !important;
                width: calc(100% - 1rem) !important;
                margin-inline: 0.5rem !important;
            }

            nav.sidebar[data-nodebb-unified-expanded="true"] #mrl-sidebar-button,
            [component*="sidebar"][data-nodebb-unified-expanded="true"] #mrl-sidebar-button,
            .sidebar-left[data-nodebb-unified-expanded="true"] #mrl-sidebar-button,
            .sidebar-right[data-nodebb-unified-expanded="true"] #mrl-sidebar-button {
                justify-content: flex-start !important;
                gap: 0.5rem !important;
                width: 100% !important;
                height: auto !important;
                min-height: 40px !important;
                padding: 0.5rem !important;
            }

            nav.sidebar[data-nodebb-unified-expanded="true"] #mitmachim-keyword-alerts-nav-item,
            [component*="sidebar"][data-nodebb-unified-expanded="true"] #mitmachim-keyword-alerts-nav-item,
            .sidebar-left[data-nodebb-unified-expanded="true"] #mitmachim-keyword-alerts-nav-item,
            .sidebar-right[data-nodebb-unified-expanded="true"] #mitmachim-keyword-alerts-nav-item {
                width: calc(100% - 1rem) !important;
                height: auto !important;
                margin-inline: 0.5rem !important;
            }

            nav.sidebar[data-nodebb-unified-expanded="true"] #mitmachim-keyword-alerts-nav-item .keyword-alerts-nav-link,
            [component*="sidebar"][data-nodebb-unified-expanded="true"] #mitmachim-keyword-alerts-nav-item .keyword-alerts-nav-link,
            .sidebar-left[data-nodebb-unified-expanded="true"] #mitmachim-keyword-alerts-nav-item .keyword-alerts-nav-link,
            .sidebar-right[data-nodebb-unified-expanded="true"] #mitmachim-keyword-alerts-nav-item .keyword-alerts-nav-link {
                justify-content: flex-start !important;
                gap: 0.5rem !important;
                height: auto !important;
                min-height: 40px !important;
                padding: 0.5rem !important;
            }

            nav.sidebar[data-nodebb-unified-expanded="true"] #mtpun-sidebar-manager-item,
            [component*="sidebar"][data-nodebb-unified-expanded="true"] #mtpun-sidebar-manager-item,
            .sidebar-left[data-nodebb-unified-expanded="true"] #mtpun-sidebar-manager-item,
            .sidebar-right[data-nodebb-unified-expanded="true"] #mtpun-sidebar-manager-item {
                justify-content: stretch !important;
                width: calc(100% - 1rem) !important;
                margin-inline: 0.5rem !important;
            }

            nav.sidebar[data-nodebb-unified-expanded="true"] #mtpun-sidebar-manager-item .mtpun-floating-button,
            [component*="sidebar"][data-nodebb-unified-expanded="true"] #mtpun-sidebar-manager-item .mtpun-floating-button,
            .sidebar-left[data-nodebb-unified-expanded="true"] #mtpun-sidebar-manager-item .mtpun-floating-button,
            .sidebar-right[data-nodebb-unified-expanded="true"] #mtpun-sidebar-manager-item .mtpun-floating-button {
                justify-content: flex-start !important;
                gap: 0.5rem !important;
                width: 100% !important;
                height: auto !important;
                min-height: 40px !important;
                margin: 0 !important;
                padding: 0.5rem !important;
            }
        `;

        (document.head || document.documentElement).appendChild(style);
    }

    function getSidebarElements() {
        return [...new Set(document.querySelectorAll([
            'nav[component="sidebar/left"]',
            'nav[component="sidebar/right"]',
            'nav.sidebar-left',
            'nav.sidebar-right',
            '.sidebar-left',
            '.sidebar-right'
        ].join(',')))];
    }

    function isVisibleSidebar(element) {
        if (!(element instanceof HTMLElement)) {
            return false;
        }

        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);

        return (
            rect.width >= 40 &&
            rect.height > 120 &&
            style.display !== 'none' &&
            style.visibility !== 'hidden'
        );
    }

    function updateSidebarExpansionState() {
        for (const sidebar of getSidebarElements()) {
            const rect = sidebar.getBoundingClientRect();
            const usesHarmonyOpenState = sidebar.matches(
                'nav.sidebar, nav[component="sidebar/left"], nav[component="sidebar/right"]'
            );
            const expanded = usesHarmonyOpenState
                ? sidebar.classList.contains('open')
                : rect.width >= 110;

            sidebar.dataset.nodebbUnifiedExpanded = String(expanded);
        }
    }

    function getVisualLeftSidebar() {
        const candidates = getSidebarElements()
            .filter(isVisibleSidebar)
            .sort((first, second) =>
                first.getBoundingClientRect().left -
                second.getBoundingClientRect().left
            );

        return (
            candidates.find(sidebar =>
                sidebar.getBoundingClientRect().left < window.innerWidth / 2
            ) ||
            candidates[0] ||
            null
        );
    }

    function ensureSidebarBottom(sidebar) {
        let list = document.getElementById(SIDEBAR_BOTTOM_ID);

        if (!list) {
            list = document.createElement('ul');
            list.id = SIDEBAR_BOTTOM_ID;
            list.className = 'list-unstyled d-flex flex-column w-100 gap-2 mb-2';
        }

        if (list.parentElement !== sidebar || sidebar.lastElementChild !== list) {
            sidebar.appendChild(list);
        }

        const precedingAutoSpacer = Array.from(sidebar.children)
            .slice(0, -1)
            .some(element => element.classList?.contains('mt-auto'));

        list.classList.toggle('mt-auto', !precedingAutoSpacer);
        return list;
    }

    function ensureSettingsSidebarItem() {
        let item = document.getElementById(SIDEBAR_SETTINGS_ITEM_ID);

        if (item) {
            return item;
        }

        item = document.createElement('li');
        item.id = SIDEBAR_SETTINGS_ITEM_ID;
        item.className = 'nav-item mx-2';
        item.innerHTML = `
            <button
                type="button"
                id="${SIDEBAR_SETTINGS_BUTTON_ID}"
                class="nav-link navigation-link"
                title="הגדרות NodeBB Unified"
                aria-label="הגדרות NodeBB Unified"
            >
                <span class="d-flex gap-2 align-items-center text-nowrap truncate-open">
                    <span class="position-relative">
                        <i class="fa fa-fw fa-gear" aria-hidden="true"></i>
                    </span>
                    <span class="nav-text small visible-open fw-semibold text-truncate ${SIDEBAR_LABEL_CLASS}">
                        הגדרות הסקריפטים
                    </span>
                </span>
            </button>
        `;

        item.querySelector('button')?.addEventListener('click', openPanel);
        return item;
    }

    function ensureSidebarControlLabel(control, label) {
        if (
            !(control instanceof HTMLElement) ||
            !control.closest('nav.sidebar, [component*="sidebar"], .sidebar-left, .sidebar-right')
        ) {
            return;
        }

        control.dataset.nodebbUnifiedSidebarControl = 'true';

        if (control.querySelector(`.${SIDEBAR_LABEL_CLASS}`)) {
            return;
        }

        const text = document.createElement('span');
        text.className =
            `nav-text small visible-open fw-semibold text-truncate ${SIDEBAR_LABEL_CLASS}`;
        text.textContent = label;
        control.appendChild(text);
    }

    function ensureCustomSidebarLabels() {
        const controls = [
            {
                selector: '#mitmachim-keyword-alerts-nav-button',
                label: 'מעקב מילות מפתח'
            },
            {
                selector: '#mrl-sidebar-button',
                label: 'רשימת קריאה'
            },
            {
                selector: '#mtpun-sidebar-manager-item .mtpun-floating-button',
                label: 'המשתמשים המסומנים שלי'
            }
        ];

        for (const { selector, label } of controls) {
            document.querySelectorAll(selector).forEach(control =>
                ensureSidebarControlLabel(control, label)
            );
        }
    }

    function shortcutIdentity(link) {
        if (link.querySelector('i.fa-random')) {
            return 'random';
        }

        try {
            const path = new URL(link.getAttribute('href') || '', location.origin).pathname;

            if (['/top', '/groups', '/tags'].includes(path)) {
                return path.slice(1);
            }
        } catch (_) {
            // The completeness check below will rebuild malformed shortcuts.
        }

        return '';
    }

    function reconcileNativeShortcuts(bottomList) {
        const links = [
            ...document.querySelectorAll('.moishy-native-shortcut-link-v41')
        ];

        if (!links.length) {
            return;
        }

        const records = links.map(link => ({
            link,
            identity: shortcutIdentity(link),
            item: link.closest('.moishy-native-shortcut-item-v41')
        }));
        const expected = new Set(['top', 'groups', 'tags', 'random']);
        const identities = new Set(records.map(record => record.identity).filter(Boolean));
        const items = [...new Set(records.map(record => record.item).filter(Boolean))];

        if (
            links.length !== 4 ||
            items.length !== 4 ||
            identities.size !== expected.size ||
            [...expected].some(identity => !identities.has(identity))
        ) {
            items.forEach(item => item.remove());
            window.setTimeout(scheduleSidebarEnhancements, 120);
            return;
        }

        const randomItem = records.find(record => record.identity === 'random')?.item;

        if (randomItem && randomItem.parentElement !== bottomList) {
            bottomList.appendChild(randomItem);
        }
    }

    function portableModuleIsInitiallyEnabled(moduleId) {
        const module = modules.find(candidate => candidate.id === moduleId);

        return Boolean(
            module &&
            runtime.get(moduleId)?.initialEnabled &&
            isModuleAvailable(module)
        );
    }

    function ensurePortableRecentTopicsButton() {
        const existing = document.getElementById(PORTABLE_RECENT_TOPICS_ITEM_ID);

        if (
            isVerifiedMitmachimHost() ||
            !portableModuleIsInitiallyEnabled('recent-topics-button')
        ) {
            existing?.remove();
            return;
        }

        const mainNav = document.querySelector('#main-nav');

        if (!(mainNav instanceof HTMLElement)) {
            return;
        }

        let item = existing;

        if (!item) {
            item = document.createElement('li');
            item.id = PORTABLE_RECENT_TOPICS_ITEM_ID;
            item.className = 'nav-item mx-2';
            item.innerHTML = `
                <a
                    class="nav-link navigation-link d-flex gap-2 justify-content-between align-items-center"
                    href="${location.origin}/search?in=titles&term=&matchWords=all&by=&categories=&searchChildren=false&hasTags=&replies=&repliesFilter=atleast&timeFilter=newer&timeRange=&sortBy=topic.timestamp&sortDirection=desc&showAs=topics"
                    aria-label="נושאים אחרונים"
                    title="נושאים אחרונים"
                >
                    <span class="d-flex gap-2 align-items-center text-nowrap truncate-open">
                        <i class="fa fa-fw fa-hourglass-half" aria-hidden="true"></i>
                        <span class="nav-text small visible-open fw-semibold text-truncate">נושאים אחרונים</span>
                    </span>
                </a>
            `;

            item.querySelector('a')?.addEventListener(
                'click',
                event => {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    window.location.assign(event.currentTarget.href);
                },
                true
            );
        }

        const recentReference = [...mainNav.querySelectorAll('a[href]')]
            .find(link => {
                try {
                    return new URL(link.href, location.origin).pathname === '/recent';
                } catch (_) {
                    return false;
                }
            })
            ?.closest('li');

        if (recentReference) {
            if (recentReference.nextElementSibling !== item) {
                recentReference.insertAdjacentElement('afterend', item);
            }
        } else if (item.parentElement !== mainNav) {
            mainNav.appendChild(item);
        }
    }

    function portableTopicTagFromRow(row) {
        const link = row.querySelector(
            'h3[component="topic/header"] a.text-reset, [component="topic/header"] a'
        );
        const span = link?.querySelector('span');

        if (!span) {
            return '';
        }

        const clone = span.cloneNode(true);
        clone.querySelectorAll?.('i, svg').forEach(element => element.remove());
        return String(clone.textContent || '').replace(/\s+/g, ' ').trim();
    }

    function portableTopicTagSlug(tag) {
        return String(tag)
            .replace(/\s+/g, '-')
            .replace(/[^\w\u0590-\u05FF-]/g, '');
    }

    function cleanupPortableTopicTagFilter(resetSelection = false) {
        document.body?.classList.remove('has-nodebb-unified-topic-filter');
        document.getElementById(PORTABLE_TOPIC_FILTER_STYLE_ID)?.remove();
        portableTopicFilterPanel?.remove();
        portableTopicFilterPanel = null;

        for (const row of portableTopicFilterRows) {
            row.classList.remove('nodebb-unified-topic-tag-selected');

            for (const className of [...row.classList]) {
                if (className.startsWith('nodebb-unified-topic-tag-')) {
                    row.classList.remove(className);
                }
            }
        }

        portableTopicFilterRows = [];
        portableTopicFilterTags.clear();

        if (resetSelection) {
            portableTopicFilterSelected.clear();
        }
    }

    function ensurePortableTopicFilterStyle() {
        if (document.getElementById(PORTABLE_TOPIC_FILTER_STYLE_ID)) {
            return;
        }

        const style = document.createElement('style');
        style.id = PORTABLE_TOPIC_FILTER_STYLE_ID;
        style.textContent = `
            body.has-nodebb-unified-topic-filter li.category-item[component="category/topic"] {
                display: none !important;
            }

            body.has-nodebb-unified-topic-filter li.category-item[component="category/topic"].nodebb-unified-topic-tag-selected {
                display: flex !important;
            }
        `;
        (document.head || document.documentElement).appendChild(style);
    }

    function applyPortableTopicTagFilter() {
        const selected = portableTopicFilterSelected;

        document.body?.classList.toggle(
            'has-nodebb-unified-topic-filter',
            selected.size > 0
        );

        for (const row of portableTopicFilterRows) {
            const matches = [...selected].some(slug =>
                row.classList.contains(`nodebb-unified-topic-tag-${slug}`)
            );

            row.classList.toggle(
                'nodebb-unified-topic-tag-selected',
                selected.size > 0 && matches
            );
        }
    }

    function ensurePortableTopicFilterPanel(list) {
        if (!(list instanceof HTMLElement) || !(list.parentElement instanceof HTMLElement)) {
            return;
        }

        if (!portableTopicFilterPanel?.isConnected) {
            const panel = document.createElement('div');
            panel.id = PORTABLE_TOPIC_FILTER_PANEL_ID;
            Object.assign(panel.style, {
                margin: '10px 0',
                padding: '10px',
                border: '1px solid #ccc',
                background: '#f9f9f9',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '8px',
                direction: 'rtl'
            });

            const title = document.createElement('span');
            title.textContent = 'סינון לפי תגיות נושא:';
            title.style.fontWeight = 'bold';
            panel.appendChild(title);

            const clearButton = document.createElement('button');
            clearButton.type = 'button';
            clearButton.textContent = 'הכול';
            clearButton.style.marginInlineStart = '8px';
            clearButton.style.padding = '2px 6px';
            clearButton.style.fontSize = '12px';
            clearButton.addEventListener('click', () => {
                portableTopicFilterSelected.clear();
                panel.querySelectorAll('input[type="checkbox"]').forEach(input => {
                    input.checked = false;
                });
                applyPortableTopicTagFilter();
            });
            panel.appendChild(clearButton);

            const tags = document.createElement('div');
            tags.dataset.role = 'tags';
            Object.assign(tags.style, {
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                alignItems: 'center'
            });
            panel.appendChild(tags);

            const note = document.createElement('span');
            note.textContent = ' (אפשר לבחור כמה תגיות; מוצגים נושאים שיש להם לפחות אחת מהן)';
            note.style.fontSize = '11px';
            note.style.color = '#666';
            note.style.width = '100%';
            panel.appendChild(note);

            panel.addEventListener('change', event => {
                if (!(event.target instanceof HTMLInputElement)) {
                    return;
                }

                portableTopicFilterSelected = new Set(
                    [...panel.querySelectorAll('input[type="checkbox"]:checked')]
                        .map(input => input.value)
                );
                applyPortableTopicTagFilter();
            });
            portableTopicFilterPanel = panel;
        }

        if (
            list.parentElement &&
            (
                portableTopicFilterPanel.parentElement !== list.parentElement ||
                portableTopicFilterPanel.nextElementSibling !== list
            )
        ) {
            list.parentElement.insertBefore(portableTopicFilterPanel, list);
        }

        const tagsContainer = portableTopicFilterPanel.querySelector('[data-role="tags"]');

        if (!(tagsContainer instanceof HTMLElement)) {
            return;
        }

        const existing = new Set(
            [...tagsContainer.querySelectorAll('input[type="checkbox"]')]
                .map(input => input.value)
        );

        for (const [slug, tag] of portableTopicFilterTags) {
            if (existing.has(slug)) {
                continue;
            }

            const label = document.createElement('label');
            Object.assign(label.style, {
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '12px'
            });

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = slug;
            checkbox.checked = portableTopicFilterSelected.has(slug);

            const text = document.createElement('span');
            text.textContent = tag;
            label.append(checkbox, text);
            tagsContainer.appendChild(label);
        }
    }

    function refreshPortableTopicTagFilter() {
        portableTopicFilterRefreshTimer = 0;

        if (isVerifiedMitmachimHost()) {
            if (portableTopicFilterRoute || portableTopicFilterPanel) {
                cleanupPortableTopicTagFilter(true);
                portableTopicFilterRoute = '';
            }
            return;
        }

        if (!portableModuleIsInitiallyEnabled('topic-tag-filter')) {
            if (portableTopicFilterRoute || portableTopicFilterPanel) {
                cleanupPortableTopicTagFilter(true);
                portableTopicFilterRoute = '';
            }
            return;
        }

        const route = location.pathname;

        if (portableTopicFilterRoute !== route) {
            cleanupPortableTopicTagFilter(true);
            portableTopicFilterRoute = route;
        }

        const root =
            document.querySelector('#ajaxify') ||
            document.querySelector('#content') ||
            document.body;
        const rows = [...(root?.querySelectorAll(
            'li.category-item[component="category/topic"]'
        ) || [])];

        if (!rows.length) {
            return;
        }

        portableTopicFilterRows = rows;

        for (const row of rows) {
            const tag = portableTopicTagFromRow(row);
            const slug = portableTopicTagSlug(tag);

            if (!tag || !slug) {
                continue;
            }

            row.classList.add(`nodebb-unified-topic-tag-${slug}`);
            portableTopicFilterTags.set(slug, tag);
        }

        ensurePortableTopicFilterStyle();
        ensurePortableTopicFilterPanel(rows[0].parentElement);
        applyPortableTopicTagFilter();
    }

    function schedulePortableTopicTagFilterRefresh() {
        if (portableTopicFilterRefreshTimer) {
            return;
        }

        portableTopicFilterRefreshTimer = window.setTimeout(
            refreshPortableTopicTagFilter,
            80
        );
    }

    function installPortableTopicTagFilter() {
        if (portableTopicFilterObserver) {
            schedulePortableTopicTagFilterRefresh();
            return;
        }

        onDomReady(() => {
            refreshPortableTopicTagFilter();
            portableTopicFilterObserver = new MutationObserver(mutations => {
                if (
                    (portableTopicFilterRoute ||
                        portableModuleIsInitiallyEnabled('topic-tag-filter')) &&
                    mutations.some(mutation =>
                        mutation.type === 'childList' &&
                        (mutation.addedNodes.length || mutation.removedNodes.length)
                    )
                ) {
                    schedulePortableTopicTagFilterRefresh();
                }
            });
            portableTopicFilterObserver.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    function reconcileSidebarEnhancements() {
        sidebarRefreshTimer = 0;
        addSidebarEnhancementStyles();
        updateSidebarExpansionState();
        ensureCustomSidebarLabels();
        ensurePortableRecentTopicsButton();

        const leftSidebar = getVisualLeftSidebar();

        if (!leftSidebar) {
            return;
        }

        const bottomList = ensureSidebarBottom(leftSidebar);
        const settingsItem = ensureSettingsSidebarItem();
        reconcileNativeShortcuts(bottomList);

        if (
            settingsItem.parentElement !== bottomList ||
            bottomList.lastElementChild !== settingsItem
        ) {
            bottomList.appendChild(settingsItem);
        }
    }

    function scheduleSidebarEnhancements() {
        if (sidebarRefreshTimer) {
            return;
        }

        sidebarRefreshTimer = window.setTimeout(reconcileSidebarEnhancements, 60);
    }

    function sidebarMutationNeedsRefresh(mutations) {
        const sidebarSelector = [
            'nav[component="sidebar/left"]',
            'nav[component="sidebar/right"]',
            'nav.sidebar-left',
            'nav.sidebar-right',
            '.sidebar-left',
            '.sidebar-right'
        ].join(',');
        const relevantSelector = [
            sidebarSelector,
            '.moishy-native-shortcut-item-v41',
            '#mitmachim-keyword-alerts-nav-item',
            '#mrl-sidebar-entry',
            '#mtpun-sidebar-manager-item',
            `#${PORTABLE_RECENT_TOPICS_ITEM_ID}`
        ].join(',');

        return mutations.some(mutation => {
            const target = mutation.target instanceof Element
                ? mutation.target
                : mutation.target.parentElement;

            if (mutation.type === 'attributes') {
                return Boolean(target?.matches(sidebarSelector));
            }

            if (target?.closest(sidebarSelector)) {
                return true;
            }

            return [...mutation.addedNodes, ...mutation.removedNodes].some(node =>
                node instanceof Element &&
                (
                    node.matches(relevantSelector) ||
                    Boolean(node.querySelector(relevantSelector))
                )
            );
        });
    }

    function installSidebarEnhancements() {
        if (sidebarObserver) {
            scheduleSidebarEnhancements();
            return;
        }

        onDomReady(() => {
            addSidebarEnhancementStyles();
            reconcileSidebarEnhancements();

            sidebarObserver = new MutationObserver(mutations => {
                if (sidebarMutationNeedsRefresh(mutations)) {
                    scheduleSidebarEnhancements();
                }
            });
            sidebarObserver.observe(document.documentElement, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['class', 'style']
            });

            window.addEventListener('resize', scheduleSidebarEnhancements);
        });
    }

    function markAllModules(enabled) {
        for (const module of modules) {
            managerState.enabled[module.id] = enabled;
            const moduleRuntime = runtime.get(module.id);
            moduleRuntime.pendingReload = moduleRuntime.initialEnabled !== enabled;
        }

        saveManagerState();
        refreshOpenPanel();
    }

    function resetDefaults() {
        const defaults = createDefaultManagerState();
        managerState = defaults;

        for (const module of modules) {
            const moduleRuntime = runtime.get(module.id);
            moduleRuntime.pendingReload =
                moduleRuntime.initialEnabled !== defaults.enabled[module.id];
        }

        saveManagerState();
        refreshOpenPanel();
    }

    function bindPanelEvents(host, shadow) {
        shadow.addEventListener('input', event => {
            const target = event.target;

            if (!(target instanceof HTMLInputElement)) {
                return;
            }

            if (target.matches('[data-role="search"]')) {
                managerState.panel.search = target.value;
                saveManagerState();
                renderPanel(shadow);
                shadow.querySelector('[data-role="search"]')?.focus();
                return;
            }

            if (target.matches('[data-role="diagnostic"]')) {
                managerState.panel.diagnostic = target.checked;
                saveManagerState();
                renderPanel(shadow);
            }
        });

        shadow.addEventListener('change', event => {
            const target = event.target;

            if (target instanceof HTMLSelectElement && target.matches('[data-role="category"]')) {
                managerState.panel.category = target.value;
                saveManagerState();
                renderPanel(shadow);
                return;
            }

            if (
                target instanceof HTMLInputElement &&
                target.matches('[data-module-toggle]')
            ) {
                const module = modules.find(item => item.id === target.dataset.moduleToggle);

                if (!module) {
                    return;
                }

                managerState.enabled[module.id] = target.checked;
                const moduleRuntime = runtime.get(module.id);
                moduleRuntime.pendingReload =
                    moduleRuntime.initialEnabled !== target.checked;
                saveManagerState();
                renderPanel(shadow);
            }
        });

        shadow.addEventListener('click', async event => {
            const target = event.target instanceof Element
                ? event.target.closest('button, [data-role="backdrop"]')
                : null;

            if (!target) {
                return;
            }

            if (target.matches('[data-role="backdrop"]') && event.target === target) {
                closePanel();
                return;
            }

            if (!(target instanceof HTMLButtonElement)) {
                return;
            }

            const action = target.dataset.action;

            if (action === 'close') {
                closePanel();
            } else if (action === 'enable-all') {
                markAllModules(true);
            } else if (action === 'disable-all') {
                markAllModules(false);
            } else if (action === 'reset') {
                if (window.confirm('לשחזר את כל מצבי המודולים לברירות המחדל?')) {
                    resetDefaults();
                }
            } else if (action === 'export') {
                await exportBackup();
            } else if (action === 'import') {
                chooseImportFile();
            } else if (target.matches('[data-command-index]')) {
                const module = modules.find(item => item.id === target.dataset.moduleId);
                const command = module
                    ? runtime.get(module.id).commands[Number(target.dataset.commandIndex)]
                    : null;

                if (command) {
                    closePanel();
                    window.setTimeout(() => {
                        try {
                            const result = command.callback();

                            if (result && typeof result.catch === 'function') {
                                result.catch(error => markModuleFailed(module, error));
                            }
                        } catch (error) {
                            markModuleFailed(module, error);
                        }
                    }, 0);
                }
            }
        });

        shadow.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                event.stopPropagation();
                closePanel();
            }
        });

        host.addEventListener('keydown', event => event.stopPropagation());
    }

    function requestToPromise(request) {
        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error || new Error('IndexedDB request failed'));
        });
    }

    async function databaseExists(name) {
        if (typeof indexedDB.databases === 'function') {
            const databases = await indexedDB.databases();
            return databases.some(database => database.name === name);
        }

        return new Promise((resolve, reject) => {
            let createdForProbe = false;
            const request = indexedDB.open(name);

            request.onupgradeneeded = () => {
                createdForProbe = true;
                request.transaction?.abort();
            };
            request.onsuccess = () => {
                request.result.close();
                resolve(true);
            };
            request.onerror = () => {
                if (createdForProbe) {
                    resolve(false);
                } else {
                    reject(request.error || new Error('Unable to inspect IndexedDB'));
                }
            };
            request.onblocked = () => reject(new Error('IndexedDB inspection is blocked'));
        });
    }

    function openKnownDatabase(name) {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(name, 1);

            request.onupgradeneeded = () => {
                const database = request.result;

                if (name === 'mitmachim-random-topic-index-v1') {
                    if (!database.objectStoreNames.contains('topics')) {
                        const topics = database.createObjectStore('topics', {
                            keyPath: 'tid'
                        });
                        topics.createIndex('cid', 'cid', { unique: false });
                        topics.createIndex('cidType', ['cid', 'type'], { unique: false });
                        topics.createIndex('type', 'type', { unique: false });
                    }

                    if (!database.objectStoreNames.contains('meta')) {
                        database.createObjectStore('meta', { keyPath: 'cid' });
                    }
                }
            };

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error || new Error('Unable to open IndexedDB'));
            request.onblocked = () => reject(new Error('IndexedDB is blocked by another tab'));
        });
    }

    async function dumpIndexedDatabase(name) {
        if (!(await databaseExists(name))) {
            return null;
        }

        const database = await openKnownDatabase(name);

        try {
            const stores = Object.create(null);

            for (const storeName of Array.from(database.objectStoreNames)) {
                const transaction = database.transaction(storeName, 'readonly');
                stores[storeName] = await requestToPromise(
                    transaction.objectStore(storeName).getAll()
                );
            }

            return {
                version: database.version,
                stores
            };
        } finally {
            database.close();
        }
    }

    async function restoreIndexedDatabase(name, backup, fullRestore = false) {
        if (!isPlainRecord(backup) || !isPlainRecord(backup.stores)) {
            return;
        }

        const database = await openKnownDatabase(name);

        try {
            for (const storeName of Array.from(database.objectStoreNames)) {
                const values = backup.stores[storeName];

                if (
                    !Object.prototype.hasOwnProperty.call(backup.stores, storeName) &&
                    !fullRestore
                ) {
                    continue;
                }

                if (
                    Object.prototype.hasOwnProperty.call(backup.stores, storeName) &&
                    !Array.isArray(values)
                ) {
                    continue;
                }

                await new Promise((resolve, reject) => {
                    const transaction = database.transaction(storeName, 'readwrite');
                    const store = transaction.objectStore(storeName);

                    if (fullRestore) {
                        store.clear();
                    }

                    for (const value of values || []) {
                        store.put(value);
                    }

                    transaction.oncomplete = () => resolve();
                    transaction.onerror = () => reject(
                        transaction.error || new Error('IndexedDB restore failed')
                    );
                    transaction.onabort = () => reject(
                        transaction.error || new Error('IndexedDB restore aborted')
                    );
                });
            }
        } finally {
            database.close();
        }
    }

    async function createBackupPayload() {
        const gmValues = Object.create(null);

        for (const key of GM_listValues()) {
            if (key !== AUTOMATIC_BACKUP_KEY) {
                gmValues[key] = GM_getValue(key, null);
            }
        }

        const localStorageValues = Object.create(null);

        for (const key of LOCAL_STORAGE_KEYS) {
            const value = localStorage.getItem(key);

            if (value !== null) {
                localStorageValues[key] = value;
            }
        }

        const indexedDbValues = Object.create(null);

        for (const name of INDEXED_DB_NAMES) {
            const backup = await dumpIndexedDatabase(name);

            if (backup) {
                indexedDbValues[name] = backup;
            }
        }

        return {
            format: 'nodebb-unified-backup',
            schemaVersion: 1,
            scriptVersion: UNIFIED_VERSION,
            createdAt: new Date().toISOString(),
            origin: location.origin,
            managerState,
            gmValues,
            localStorage: localStorageValues,
            indexedDB: indexedDbValues
        };
    }

    function downloadJson(payload) {
        const date = new Date().toISOString().slice(0, 10);
        const blob = new Blob([JSON.stringify(payload, null, 2)], {
            type: 'application/json;charset=utf-8'
        });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `nodebb-unified-backup-${date}.json`;
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    async function exportBackup() {
        try {
            const payload = await createBackupPayload();
            downloadJson(payload);
        } catch (error) {
            window.alert(`הייצוא נכשל: ${error?.message || error}`);
        }
    }

    function containsBlockedImportKey(value) {
        if (!value || typeof value !== 'object') {
            return false;
        }

        const stack = [value];
        const seen = new Set();

        while (stack.length) {
            const current = stack.pop();

            if (!current || typeof current !== 'object' || seen.has(current)) {
                continue;
            }

            seen.add(current);

            for (const key of Object.keys(current)) {
                if (BLOCKED_IMPORT_KEYS.has(key)) {
                    return true;
                }

                const child = current[key];

                if (child && typeof child === 'object') {
                    stack.push(child);
                }
            }
        }

        return false;
    }

    function isImportedUrlField(key) {
        return /(?:^|_)(?:urls?|hrefs?)$/i.test(String(key)) || /url$/i.test(String(key));
    }

    function isSafeImportedUrl(value) {
        if (typeof value !== 'string') {
            return false;
        }

        const trimmed = value.trim();

        if (!trimmed) {
            return true;
        }

        try {
            const parsed = new URL(trimmed, location.origin);
            return (
                (parsed.protocol === 'https:' || parsed.protocol === 'http:') &&
                !parsed.username &&
                !parsed.password
            );
        } catch (_) {
            return false;
        }
    }

    function isSafeBackupOrigin(value) {
        if (typeof value !== 'string' || value.length > 2048) {
            return false;
        }

        try {
            const parsed = new URL(value);

            return (
                (parsed.protocol === 'https:' || parsed.protocol === 'http:') &&
                !parsed.username &&
                !parsed.password &&
                parsed.origin === value
            );
        } catch (_) {
            return false;
        }
    }

    function containsUnsafeImportUrl(value, parentKey = '', seen = new Set()) {
        if (typeof value === 'string') {
            return isImportedUrlField(parentKey) && !isSafeImportedUrl(value);
        }

        if (!value || typeof value !== 'object' || seen.has(value)) {
            return false;
        }

        seen.add(value);

        if (Array.isArray(value)) {
            return value.some(item => containsUnsafeImportUrl(item, parentKey, seen));
        }

        for (const [key, child] of Object.entries(value)) {
            if (isImportedUrlField(key)) {
                if (Array.isArray(child)) {
                    if (child.some(item => !isSafeImportedUrl(item))) {
                        return true;
                    }
                } else if (!isSafeImportedUrl(child)) {
                    return true;
                }
            }

            if (containsUnsafeImportUrl(child, key, seen)) {
                return true;
            }
        }

        return false;
    }

    function parseStoredJson(value) {
        if (typeof value !== 'string') {
            return { ok: true, value };
        }

        try {
            return { ok: true, value: JSON.parse(value) };
        } catch (_) {
            return { ok: false, value: null };
        }
    }

    function isBoundedArray(value, maximum, predicate = () => true) {
        return (
            Array.isArray(value) &&
            value.length <= maximum &&
            value.every(predicate)
        );
    }

    function isBoundedRecord(value, maximum = 100000) {
        return isPlainRecord(value) && Object.keys(value).length <= maximum;
    }

    function isFiniteNonNegative(value) {
        const number = Number(value);
        return Number.isFinite(number) && number >= 0;
    }

    function isLimitedString(value, maximum, allowEmpty = true) {
        return (
            typeof value === 'string' &&
            value.length <= maximum &&
            (allowEmpty || value.trim().length > 0)
        );
    }

    function isLimitedStringList(value, maximumItems, maximumLength) {
        return isBoundedArray(
            value,
            maximumItems,
            item => isLimitedString(item, maximumLength)
        );
    }

    function hasUniqueValues(items, getValue) {
        const seen = new Set();

        for (const item of items) {
            const value = getValue(item);

            if (value === undefined || value === null || value === '') {
                continue;
            }

            if (seen.has(value)) {
                return false;
            }

            seen.add(value);
        }

        return true;
    }

    function containsOversizedImportValue(value) {
        if (typeof value === 'string') {
            return value.length > 100000;
        }

        if (!value || typeof value !== 'object') {
            return false;
        }

        const stack = [{ value, depth: 0 }];
        const seen = new Set();
        let visited = 0;

        while (stack.length) {
            const current = stack.pop();

            if (
                !current.value ||
                typeof current.value !== 'object' ||
                seen.has(current.value)
            ) {
                continue;
            }

            if (current.depth > 40 || ++visited > 500000) {
                return true;
            }

            seen.add(current.value);

            for (const [key, child] of Object.entries(current.value)) {
                if (key.length > 500 || (typeof child === 'string' && child.length > 100000)) {
                    return true;
                }

                if (child && typeof child === 'object') {
                    stack.push({ value: child, depth: current.depth + 1 });
                }
            }
        }

        return false;
    }

    function structuredValueIsSafe(value) {
        return (
            !containsBlockedImportKey(value) &&
            !containsUnsafeImportUrl(value) &&
            !containsOversizedImportValue(value)
        );
    }

    function validateKeywordRule(rule) {
        if (!isBoundedRecord(rule, 30)) {
            return false;
        }

        for (const key of ['keywords', 'exactPhrases', 'excludedWords']) {
            const value = rule[key];

            if (
                value !== undefined &&
                !(isLimitedString(value, 20000) || isLimitedStringList(value, 500, 500))
            ) {
                return false;
            }
        }

        return (
            (rule.id === undefined || isLimitedString(rule.id, 200, false)) &&
            (rule.name === undefined || isLimitedString(rule.name, 500)) &&
            (rule.matchMode === undefined || ['all', 'any'].includes(rule.matchMode)) &&
            (rule.scope === undefined || ['topics', 'posts', 'both'].includes(rule.scope))
        );
    }

    function validateKeywordAlert(alert) {
        if (
            !isBoundedRecord(alert, 40) ||
            !isLimitedString(alert.id, 200, false) ||
            !isLimitedString(alert.uniqueKey, 500, false) ||
            !isSafeImportedUrl(alert.url)
        ) {
            return false;
        }

        for (const [key, maximum] of Object.entries({
            title: 5000,
            author: 1000,
            categoryName: 1000,
            excerpt: 20000,
            ruleId: 200,
            ruleName: 1000
        })) {
            if (alert[key] !== undefined && !isLimitedString(alert[key], maximum)) {
                return false;
            }
        }

        return (
            (alert.matchedTerms === undefined ||
                isLimitedStringList(alert.matchedTerms, 500, 500)) &&
            (alert.timestamp === undefined || isFiniteNonNegative(alert.timestamp)) &&
            (alert.detectedAt === undefined || isFiniteNonNegative(alert.detectedAt)) &&
            (alert.read === undefined || typeof alert.read === 'boolean')
        );
    }

    function validatePrivateDatabase(database) {
        if (
            !isBoundedRecord(database, 20) ||
            !isBoundedRecord(database.users, 50000)
        ) {
            return false;
        }

        return Object.entries(database.users).every(([uid, record]) =>
            isLimitedString(uid, 200, false) &&
            isBoundedRecord(record, 40) &&
            (record.profileUrl === undefined || isSafeImportedUrl(record.profileUrl)) &&
            (record.note === undefined || isLimitedString(String(record.note), 100000)) &&
            (record.label === undefined || isLimitedString(String(record.label), 1000)) &&
            (record.username === undefined || isLimitedString(String(record.username), 1000)) &&
            (record.userslug === undefined || isLimitedString(String(record.userslug), 1000))
        );
    }

    function validateReadingListItem(item) {
        return (
            isBoundedRecord(item, 40) &&
            (typeof item.id === 'string' || typeof item.id === 'number') &&
            isLimitedString(String(item.id), 500, false) &&
            isSafeImportedUrl(item.url) &&
            (item.title === undefined || isLimitedString(String(item.title), 5000)) &&
            (item.preview === undefined || isLimitedString(String(item.preview), 20000)) &&
            (item.note === undefined || isLimitedString(String(item.note), 100000))
        );
    }

    function validateIndexedTopic(topic) {
        if (!isBoundedRecord(topic, 80)) {
            return false;
        }

        const hasKey = Number.isInteger(topic.tid) && topic.tid > 0;
        const hasCategory = Number.isInteger(topic.cid) && topic.cid >= 0;

        if (
            !hasKey ||
            !hasCategory ||
            !isLimitedString(topic.slug, 4096) ||
            (topic.title !== undefined && !isLimitedString(topic.title, 10000)) ||
            (topic.type !== undefined && !isLimitedString(topic.type, 200)) ||
            (topic.typeDisplay !== undefined && !isLimitedString(topic.typeDisplay, 200))
        ) {
            return false;
        }

        if (/^https?:\/\//i.test(topic.slug)) {
            return isSafeImportedUrl(topic.slug);
        }

        return !/^[a-z][a-z\d+.-]*:/i.test(topic.slug) && !/[\u0000-\u001f]/.test(topic.slug);
    }

    function validateIndexedMeta(meta) {
        return (
            isBoundedRecord(meta, 40) &&
            Number.isInteger(meta.cid) &&
            meta.cid >= 0 &&
            (meta.complete === undefined || typeof meta.complete === 'boolean') &&
            (meta.scannedAt === undefined || isFiniteNonNegative(meta.scannedAt)) &&
            (meta.pageCount === undefined ||
                (Number.isInteger(meta.pageCount) && meta.pageCount >= 0)) &&
            (meta.nextPage === undefined ||
                (Number.isInteger(meta.nextPage) && meta.nextPage >= 0))
        );
    }

    function validateManagerState(value, allowJsonString = false) {
        if (value === undefined) {
            return true;
        }

        if (typeof value === 'string' && !allowJsonString) {
            return false;
        }

        const parsed = parseStoredJson(value);

        if (!parsed.ok || !isPlainRecord(parsed.value)) {
            return false;
        }

        const state = parsed.value;

        if (
            state.enabled !== undefined &&
            (!isBoundedRecord(state.enabled, modules.length) ||
                !Object.values(state.enabled).every(item => typeof item === 'boolean'))
        ) {
            return false;
        }

        if (state.panel !== undefined) {
            if (!isPlainRecord(state.panel)) {
                return false;
            }

            if (
                (state.panel.search !== undefined && typeof state.panel.search !== 'string') ||
                (state.panel.category !== undefined && typeof state.panel.category !== 'string') ||
                (state.panel.diagnostic !== undefined && typeof state.panel.diagnostic !== 'boolean')
            ) {
                return false;
            }

            if (
                (state.panel.search !== undefined && state.panel.search.length > 500) ||
                (state.panel.category !== undefined && state.panel.category.length > 100)
            ) {
                return false;
            }
        }

        return structuredValueIsSafe(state);
    }

    function logicalKnownGmKey(storageKey) {
        if (KNOWN_GM_KEYS.has(storageKey)) {
            return storageKey;
        }

        return parseSiteStorageKey(storageKey)?.key || null;
    }

    function validateKnownGmValue(storageKey, rawValue) {
        const key = logicalKnownGmKey(storageKey);

        if (!key) {
            return false;
        }

        const parsed = parseStoredJson(rawValue);
        let value = parsed.value;
        let schemaIsValid = true;

        if (key === 'nodebb_dashboard_sites_v03') {
            schemaIsValid =
                typeof rawValue === 'string' &&
                parsed.ok &&
                isBoundedArray(value, 1000, item =>
                    isPlainRecord(item) &&
                    typeof item.name === 'string' &&
                    item.name.length <= 500 &&
                    isSafeImportedUrl(item.url)
                );
        } else if (key === 'nodebb_dashboard_ignored_v03') {
            schemaIsValid =
                typeof rawValue === 'string' &&
                parsed.ok &&
                isBoundedArray(value, 100000, item => isSafeImportedUrl(item));
        } else if (key === 'mitmachim-keyword-alerts:settings') {
            schemaIsValid =
                parsed.ok &&
                isBoundedRecord(value, 100) &&
                (value.rules === undefined ||
                    (isBoundedArray(value.rules, 1000, validateKeywordRule) &&
                        hasUniqueValues(value.rules, rule => rule.id))) &&
                (value.includeCategoryIds === undefined ||
                    isLimitedString(value.includeCategoryIds, 20000) ||
                    isBoundedArray(value.includeCategoryIds, 1000)) &&
                (value.excludeCategoryIds === undefined ||
                    isLimitedString(value.excludeCategoryIds, 20000) ||
                    isBoundedArray(value.excludeCategoryIds, 1000));
        } else if (key === 'mitmachim-keyword-alerts:alerts') {
            schemaIsValid =
                parsed.ok &&
                isBoundedArray(value, 250, validateKeywordAlert) &&
                hasUniqueValues(value, alert => alert.id) &&
                hasUniqueValues(value, alert => alert.uniqueKey);
        } else if (key === 'mitmachim-keyword-alerts:seen') {
            schemaIsValid =
                parsed.ok &&
                isBoundedArray(
                    value,
                    3000,
                    item =>
                        (typeof item === 'string' || typeof item === 'number') &&
                        isLimitedString(String(item), 500)
                );
        } else if (key === 'mitmachim-keyword-alerts:last-check') {
            schemaIsValid = isFiniteNonNegative(rawValue);
            value = rawValue;
        } else if (key === 'mitmachim-keyword-alerts:initialized') {
            schemaIsValid = typeof rawValue === 'boolean';
            value = rawValue;
        } else if (key === 'mitmachim_reading_list_v1') {
            value = rawValue;
            schemaIsValid =
                isBoundedArray(value, 10000, validateReadingListItem) &&
                hasUniqueValues(value, item => String(item.id));
        } else if (key === 'mitmachim_reading_list_settings_v1') {
            value = rawValue;
            schemaIsValid = isBoundedRecord(value, 100);
        } else if (key === 'mt-private-user-notes:database') {
            schemaIsValid =
                parsed.ok &&
                validatePrivateDatabase(value);
        } else if (key === 'mt-private-user-notes:settings') {
            schemaIsValid = parsed.ok && isBoundedRecord(value, 100);
        } else if (key === 'mt-private-user-notes:automatic-backup') {
            schemaIsValid =
                parsed.ok &&
                isBoundedRecord(value, 20) &&
                (value.database === undefined || validatePrivateDatabase(value.database)) &&
                (value.settings === undefined || isBoundedRecord(value.settings, 100));
        } else if (key === 'mitmachim_voice_chat_enabled_v5') {
            schemaIsValid = typeof rawValue === 'boolean';
            value = rawValue;
        } else if (key === 'mitmachim_reputation_rankings_v3') {
            value = rawValue;
            schemaIsValid =
                isBoundedRecord(value, 100000) &&
                Object.values(value).every(item => isPlainRecord(item));
        } else if (key === 'mitmachim_reputation_updated_at_v3') {
            schemaIsValid = isFiniteNonNegative(rawValue);
            value = rawValue;
        } else if (key === 'mitmachim_reputation_enabled_v3') {
            schemaIsValid = typeof rawValue === 'boolean';
            value = rawValue;
        } else if (key === MANAGER_STATE_KEY) {
            return validateManagerState(rawValue, true);
        } else if (typeof rawValue === 'string') {
            const trimmed = rawValue.trim();

            if (
                (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
                (trimmed.startsWith('[') && trimmed.endsWith(']'))
            ) {
                value = parsed.ok ? parsed.value : rawValue;
            } else {
                value = rawValue;
            }
        } else {
            value = rawValue;
        }

        return schemaIsValid && structuredValueIsSafe(value);
    }

    function validateLocalStorageValues(values) {
        if (!Object.keys(values).every(key => LOCAL_STORAGE_KEYS.includes(key))) {
            return false;
        }

        for (const [key, rawValue] of Object.entries(values)) {
            if (key !== 'moishy-random-topic-settings-v41' || typeof rawValue !== 'string') {
                return false;
            }

            const parsed = parseStoredJson(rawValue);

            if (!parsed.ok || !isBoundedRecord(parsed.value, 100) || !structuredValueIsSafe(parsed.value)) {
                return false;
            }
        }

        return true;
    }

    function validateIndexedDbValues(values) {
        if (!Object.keys(values).every(name => INDEXED_DB_NAMES.includes(name))) {
            return false;
        }

        for (const [name, backup] of Object.entries(values)) {
            if (
                name !== 'mitmachim-random-topic-index-v1' ||
                !isBoundedRecord(backup, 20) ||
                !isBoundedRecord(backup.stores, 10) ||
                !Object.keys(backup.stores).every(store => ['topics', 'meta'].includes(store))
            ) {
                return false;
            }

            if (
                backup.stores.topics !== undefined &&
                (!isBoundedArray(backup.stores.topics, 250000, validateIndexedTopic) ||
                    !hasUniqueValues(backup.stores.topics, topic => topic.tid))
            ) {
                return false;
            }

            if (
                backup.stores.meta !== undefined &&
                (!isBoundedArray(backup.stores.meta, 10000, validateIndexedMeta) ||
                    !hasUniqueValues(backup.stores.meta, meta => meta.cid))
            ) {
                return false;
            }

            if (!structuredValueIsSafe(backup)) {
                return false;
            }
        }

        return true;
    }

    function validateImportPayload(payload) {
        return (
            isPlainRecord(payload) &&
            payload.format === 'nodebb-unified-backup' &&
            payload.schemaVersion === 1 &&
            isSafeBackupOrigin(payload.origin) &&
            isPlainRecord(payload.gmValues) &&
            isBoundedRecord(payload.gmValues, 10000) &&
            Object.keys(payload.gmValues).every(key =>
                Boolean(logicalKnownGmKey(key)) && key.length <= 1000
            ) &&
            isPlainRecord(payload.localStorage) &&
            isPlainRecord(payload.indexedDB) &&
            validateManagerState(payload.managerState) &&
            Object.entries(payload.gmValues).every(([key, value]) =>
                validateKnownGmValue(key, value)
            ) &&
            validateLocalStorageValues(payload.localStorage) &&
            validateIndexedDbValues(payload.indexedDB) &&
            !containsBlockedImportKey(payload) &&
            !containsUnsafeImportUrl(payload)
        );
    }

    function chooseImportFile() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json,.json';
        input.style.display = 'none';

        input.addEventListener(
            'change',
            async () => {
                const file = input.files?.[0];
                input.remove();

                if (!file) {
                    return;
                }

                if (file.size > 10 * 1024 * 1024) {
                    window.alert('קובץ הייבוא גדול מ־10MB ולכן לא ייטען.');
                    return;
                }

                try {
                    const payload = JSON.parse(await file.text());

                    if (!validateImportPayload(payload)) {
                        throw new Error('מבנה הקובץ אינו תקין או שהוא מכיל מפתחות חסומים');
                    }

                    if (payload.origin !== location.origin) {
                        throw new Error(
                            `הגיבוי שייך ל־${payload.origin}. יש לפתוח את פורום המקור ולייבא אותו שם.`
                        );
                    }

                    const fullRestore = window.confirm(
                        'לבצע שחזור מלא?\n\nאישור = מחיקת מפתחות קיימים שאינם בקובץ.\nביטול = מיזוג בטוח ללא מחיקת נתונים חסרים.'
                    );

                    if (!window.confirm('הייבוא ידרוס ערכים שנכללו בקובץ וייצור גיבוי אוטומטי. להמשיך?')) {
                        return;
                    }

                    await importBackup(payload, fullRestore);
                    window.alert('הייבוא הושלם. הדף יתרענן כדי להחיל את המצבים החדשים.');
                    location.reload();
                } catch (error) {
                    window.alert(`הייבוא נכשל: ${error?.message || error}`);
                }
            },
            { once: true }
        );

        document.body.appendChild(input);
        input.click();

        window.addEventListener(
            'focus',
            () => window.setTimeout(() => {
                if (!input.files?.length) {
                    input.remove();
                }
            }, 0),
            { once: true }
        );
    }

    async function applyBackupPayload(payload, fullRestore) {
        for (const name of INDEXED_DB_NAMES) {
            if (Object.prototype.hasOwnProperty.call(payload.indexedDB, name)) {
                await restoreIndexedDatabase(name, payload.indexedDB[name], fullRestore);
            } else if (fullRestore && (await databaseExists(name))) {
                await restoreIndexedDatabase(
                    name,
                    { stores: Object.create(null) },
                    true
                );
            }
        }

        if (fullRestore) {
            for (const key of GM_listValues()) {
                if (
                    key !== AUTOMATIC_BACKUP_KEY &&
                    !Object.prototype.hasOwnProperty.call(payload.gmValues, key)
                ) {
                    GM_deleteValue(key);
                }
            }
        }

        for (const [key, value] of Object.entries(payload.gmValues)) {
            if (!BLOCKED_IMPORT_KEYS.has(key) && key !== AUTOMATIC_BACKUP_KEY) {
                GM_setValue(key, value);
            }
        }

        if (isPlainRecord(payload.managerState)) {
            GM_setValue(MANAGER_STATE_KEY, payload.managerState);
        }

        for (const key of LOCAL_STORAGE_KEYS) {
            if (Object.prototype.hasOwnProperty.call(payload.localStorage, key)) {
                const value = payload.localStorage[key];

                if (typeof value === 'string') {
                    localStorage.setItem(key, value);
                }
            } else if (fullRestore) {
                localStorage.removeItem(key);
            }
        }
    }

    async function importBackup(payload, fullRestore) {
        const currentBackup = await createBackupPayload();
        GM_setValue(AUTOMATIC_BACKUP_KEY, JSON.stringify(currentBackup));

        try {
            await applyBackupPayload(payload, fullRestore);
        } catch (importError) {
            try {
                await applyBackupPayload(currentBackup, true);
            } catch (rollbackError) {
                throw new Error(
                    `Import failed and automatic rollback also failed: ${rollbackError?.message || rollbackError}`,
                    { cause: importError }
                );
            }

            throw importError;
        }
    }

    if (isVerifiedMitmachimHost()) {
        startManager();
    } else {
        waitForNodeBB().then(isNodeBB => {
            if (isNodeBB) {
                startManager();
            }
        });
    }
})();

/* =========================================================
   חיווי נוכחות "משתמש ב-NodeBB Unified" (presence)
   מודול עצמאי: מזריק סימן נסתר (בלוק TAG של יוניקוד) לכל פוסט/הודעה
   יוצאים, מזהה אותו בפוסטים/צ'אט נכנסים, ומוסיף תג-מאומת סגול לאווטאר.
   ponytail: מודול top-level נפרד במקום שילוב במנהל-המודולים - נגיעה מינימלית בקוד הקיים.
   ========================================================= */
(function nodebbUnifiedPresence() {
    'use strict';

    // גישה לחלון-העמוד האמיתי (לא דרך unsafeWindow.prop - נאסר ע"י בדיקת האבטחה)
    const W = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;

    // רץ רק על mitmachim (ה-@match רחב; לא נוגעים ב-fetch של אתרים אחרים)
    if (!/(^|\.)mitmachim\.top$/i.test(location.hostname)) {
        return;
    }

    const MAGIC = 'nbbu';
    const VERSION = 1;

    const ENABLED_KEY = 'nbbu_presence_enabled_v1';
    const CACHE_KEY = 'nbbu_presence_cache_v2'; // { uid: { isUser, key } }  key=pid/mid אחרון שנראה (v2: איפוס מטמון ישן)
    const USERS_FILTER_KEY = 'nbbu_presence_users_filter'; // בדף /users: הצג רק משתמשי הסקריפט
    const PANEL_HOST_ID = 'nodebb-unified-manager-host-v1'; // חייב להתאים ל-host של המנהל המרכזי

    let enabled = GM_getValue(ENABLED_KEY, true);
    let usersFilterOn = GM_getValue(USERS_FILTER_KEY, false);

    // לוגים לאבחון (ניתן לכבות: GM_setValue('nbbu_presence_debug', false))
    const DEBUG = GM_getValue('nbbu_presence_debug', true);
    const log = (...a) => { if (DEBUG) console.log('%c[NBBU presence]', 'color:#8b5cf6;font-weight:700', ...a); };

    /* ---------- קידוד/פענוח הסימן ---------- */
    // נשא = רצף תווי רוחב-אפס: ZWSP=0, ZWNJ=1. שניהם נראים "כלום" בכל דפדפן/פונט,
    // בניגוד לבלוק ה-TAG (U+E00xx) שהוצג כריבוע-tofu אצל חלק מהמשתמשים.
    // מקודד חתימה קבועה (8 ביט, נדירה בטבע) + גרסה (4 ביט).
    const BIT0 = String.fromCharCode(0x200B); // ZWSP
    const BIT1 = String.fromCharCode(0x200C); // ZWNJ
    const MAGIC_BITS = '10110100';
    const LEGACY_RE = /[\u{E0000}-\u{E007F}]/gu; // סימני TAG ישנים - לניקוי

    function buildMarker() {
        const bits = MAGIC_BITS + VERSION.toString(2).padStart(4, '0'); // 12 ביט
        return bits.replace(/0/g, BIT0).replace(/1/g, BIT1);
    }
    const MARKER = buildMarker();

    function decodeMarker(text) {
        if (!text) return null;
        // תווי רוחב-אפס -> ביטים; כל תו אחר מנתק את הרצף
        let bits = '';
        for (const ch of text) {
            bits += ch === BIT0 ? '0' : ch === BIT1 ? '1' : ' ';
        }
        const i = bits.indexOf(MAGIC_BITS);
        if (i < 0) return null;
        const v = bits.slice(i + 8, i + 12);
        return { version: /^[01]{4}$/.test(v) ? parseInt(v, 2) : 0 };
    }
    const hasMarker = text => !!decodeMarker(text);

    const stripLegacy = str => (typeof str === 'string' ? str.replace(LEGACY_RE, '') : str);

    // מזריק את הסימן מיד אחרי רצף-האותיות/ספרות הראשון שאינו חלק מקישור/מוזכר.
    // כך הוא תמיד בין תווי-תוכן ולעולם לא נוגע בתוחם מרקדאון (ספוילר ||..|| גם כשהוא כל
    // ההודעה, הדגשות, כותרות) ולא נבלע לתוך URL. אם אין מקום בטוח (הודעה שהיא רק קישור) -
    // לא מסמנים בכלל (עדיף בלי חיווי מאשר לשבור קישור). גם מנקה TAG ישן.
    // טווחים "לא בטוחים": URL, www, קישור-מרקדאון [..](..), מוזכר @.., האשטאג #..
    const UNSAFE_RE = /(https?:\/\/\S+|www\.\S+|\[[^\]]*\]\([^)]*\)|[@#][^\s@#]+)/gi;
    const RUN_RE = /[\p{L}\p{N}]+/gu;
    function insertMarkerInto(str) {
        if (typeof str !== 'string' || !str) return str;
        const cleaned = stripLegacy(str);
        if (hasMarker(cleaned)) return cleaned; // idempotent

        const unsafe = [];
        UNSAFE_RE.lastIndex = 0;
        for (let u; (u = UNSAFE_RE.exec(cleaned));) unsafe.push([u.index, u.index + u[0].length]);
        const inUnsafe = i => unsafe.some(([a, b]) => i > a && i <= b);

        RUN_RE.lastIndex = 0;
        for (let m; (m = RUN_RE.exec(cleaned));) {
            const end = m.index + m[0].length;
            if (!inUnsafe(m.index) && !inUnsafe(end)) {
                return cleaned.slice(0, end) + MARKER + cleaned.slice(end);
            }
        }
        return cleaned; // אין מקום בטוח (הכל קישור/סמלים) - לא מסמנים
    }

    /* ---------- הזרקה לתוכן יוצא (fetch + XHR) ---------- */
    // עורך רק את גוף ה-write-API של NodeBB: content (פוסט/נושא/עריכה) או message (צ'אט).
    const WRITE_RE = /\/api\/v3\/(topics(\/\d+)?|posts\/\d+|chats\/\d+)\/?(\?.*)?$/;

    function injectIntoBody(bodyStr) {
        if (typeof bodyStr !== 'string' || !bodyStr) return bodyStr;
        let data;
        try {
            data = JSON.parse(bodyStr);
        } catch {
            return bodyStr; // גוף לא-JSON (למשל FormData) - לא נוגעים. ponytail
        }
        if (!data || typeof data !== 'object') return bodyStr;

        const field = typeof data.content === 'string'
            ? 'content'
            : (typeof data.message === 'string' ? 'message' : null);
        if (!field) return bodyStr;

        const after = insertMarkerInto(data[field]);
        if (after === data[field]) return bodyStr; // כבר מסומן / לא השתנה
        data[field] = after;
        log('הוזרק סימן ל-' + field + ' (fetch/XHR)');
        try {
            return JSON.stringify(data);
        } catch {
            return bodyStr;
        }
    }

    // NodeBB שולח פוסטים/עריכות/צ'אט דרך socket.io, לא REST - חייבים לעטוף גם את socket.emit
    // ponytail: לא עוטפים XHR/socket.emit - זה עבר בנתיב של כל בקשות ה-polling של socket.io
    // ושבר את החיבור (400/xhr poll error). מזריקים רק דרך fetch (מסלול נפרד מ-socket.io).
    function wrapNetwork() {
        const origFetch = W.fetch;
        if (typeof origFetch === 'function' && !origFetch.__nbbuWrapped) {
            const wrapped = function (input, init) {
                try {
                    if (enabled && init && typeof init.body === 'string') {
                        const url = typeof input === 'string' ? input : (input && input.url) || '';
                        if (WRITE_RE.test(url)) {
                            init = Object.assign({}, init, { body: injectIntoBody(init.body) });
                        }
                    }
                } catch { /* fail-open: לא חוסמים שליחה */ }
                return origFetch.call(this, input, init);
            };
            wrapped.__nbbuWrapped = true;
            W.fetch = wrapped;
        }
    }

    /* ---------- מטמון נוכחות (uid -> {isUser, key}) ---------- */
    let cache = {};
    try {
        cache = GM_getValue(CACHE_KEY, {}) || {};
    } catch { cache = {}; }

    let flushTimer = null;
    function scheduleFlush() {
        if (flushTimer) return;
        flushTimer = setTimeout(() => {
            flushTimer = null;
            try { GM_setValue(CACHE_KEY, cache); } catch { /* מלא? מתעלמים */ }
        }, 3000);
    }

    // אמת: הסימן הוא בלוק-TAG => הוכחה חיובית עם אפס false-positive. ברירת מחדל "sticky":
    // ברגע שנראה פוסט/הודעה מסומנים מ-uid, נועלים אותו כמשתמש. הכלל המתכלה-מעצמו
    // (הפוסט-האחרון-קובע) פחות אמין בהטמעה - ההזרקה לא רצה על פוסטים ישנים/נתיב-socket,
    // אז "החדש-ביותר-בלי-סימן" נותן בעיקר false-negative. למי שרוצה אותו:
    // GM_setValue('nbbu_presence_strict_latest', true).
    const STRICT_LATEST = GM_getValue('nbbu_presence_strict_latest', false);
    function recordPresence(uid, key, isUser) {
        uid = String(uid || '');
        key = Number(key);
        if (!uid || !Number.isFinite(key)) return;
        const prev = cache[uid];
        if (!STRICT_LATEST) {
            if (prev && prev.isUser) return;      // כבר הוכח כמשתמש - נעול
            if (!isUser && prev) return;          // אין שינוי (נשאר לא-משתמש)
            cache[uid] = { isUser: !!isUser, key };
            scheduleFlush();
            return;
        }
        // strict: הפוסט/הודעה הכי חדשים קובעים (key מונוטוני; אין TTL - מתכלה מעצמו)
        if (prev && Number(prev.key) > key) return; // ראינו כבר משהו חדש יותר
        if (prev && Number(prev.key) === key && prev.isUser === isUser) return;
        cache[uid] = { isUser: !!isUser, key };
        scheduleFlush();
    }

    /* ---------- סריקת פוסטים/צ'אט לזיהוי הסימן ---------- */
    // מנתח תוכן מרונדר: האם יש סימן, והאם ההודעה היא "רק-קישור" (לא יכולה לשאת סימן).
    // - מסיר ציטוטים (blockquote): סימן בתוך ציטוט שייך למצוטט, לא לכותב.
    // - link-only: אחרי הסרת הקישורים לא נשאר טקסט => היעדר-סימן חסר-משמעות (לא רושמים שלילה).
    function analyzeContent(el) {
        if (!el) return { marked: false, linkOnly: false };
        if (!el.querySelector('blockquote') && !el.querySelector('a')) {
            return { marked: hasMarker(el.textContent), linkOnly: false };
        }
        const clone = el.cloneNode(true);
        clone.querySelectorAll('blockquote').forEach(b => b.remove());
        const marked = hasMarker(clone.textContent);
        let linkOnly = false;
        const links = clone.querySelectorAll('a');
        if (links.length) {
            links.forEach(a => a.remove());
            linkOnly = clone.textContent.trim() === '';
        }
        return { marked, linkOnly };
    }

    // רושם נוכחות רק כשיש מסקנה: סימן => משתמש; אין סימן אך היה יכול לשאת => לא-משתמש;
    // רק-קישור (לא יכול לשאת סימן) => לא מכריעים, כדי שפוסט/הודעה אחרונים שהם קישור לא ישברו.
    function recordFrom(uid, key, el) {
        if (!uid || uid === '0') return;
        const { marked, linkOnly } = analyzeContent(el);
        if (marked) recordPresence(uid, key, true);
        else if (!linkOnly) recordPresence(uid, key, false);
    }

    function scanContainer(root) {
        if (!(root instanceof Element) && root !== document) return;
        const scope = root === document ? document : root;

        // פוסטים
        scope.querySelectorAll('[component="post"][data-pid]').forEach(post => {
            const uid = post.getAttribute('data-uid');
            const body = post.querySelector('[component="post/content"]') || post;
            recordFrom(uid, post.getAttribute('data-pid'), body);
        });

        // הודעות צ'אט
        scope.querySelectorAll('[component="chat/message"][data-mid]').forEach(msg => {
            const host = msg.closest('[data-uid]') || msg.querySelector('[data-uid]');
            const uid = (host && host.getAttribute('data-uid')) || msg.getAttribute('data-uid');
            const bodyEl = msg.querySelector('[component="chat/message/body"]') || msg;
            recordFrom(uid, msg.getAttribute('data-mid'), bodyEl);
        });
    }

    /* ---------- תג-מאומת סגול ---------- */
    const BADGE_CLASS = 'nbbu-presence-badge';
    const BADGE_HOST_CLASS = 'nbbu-presence-host';
    const CHAT_MARK_CLASS = 'nbbu-presence-chatmark';
    const TOOLTIP = 'משתמש ב-NodeBB Unified';

    function addStyles() {
        if (document.getElementById('nbbu-presence-style')) return;
        const style = document.createElement('style');
        style.id = 'nbbu-presence-style';
        style.textContent = `
            .${BADGE_HOST_CLASS} { position: relative !important; overflow: visible !important; isolation: isolate !important; }
            .${BADGE_CLASS} {
                position: absolute !important;
                right: -2px !important; bottom: -2px !important;  /* פינה ימנית-תחתונה (פיזי, גם ב-RTL) */
                width: 14px !important; height: 14px !important;
                border-radius: 50% !important;
                background: #8b5cf6 !important;
                border: 2px solid #fff !important;
                box-sizing: border-box !important;
                display: flex !important; align-items: center !important; justify-content: center !important;
                z-index: 10000 !important; pointer-events: auto !important;
                box-shadow: 0 1px 3px rgba(0,0,0,.35) !important;
            }
            .${BADGE_CLASS} svg { width: 9px !important; height: 9px !important; display: block !important; }
            /* בצ'אט: וי אינליין כהמשך טבעי לשורת הכותרת */
            .${CHAT_MARK_CLASS} {
                display: inline-flex !important; align-items: center !important; justify-content: center !important;
                width: 1em !important; height: 1em !important; margin-inline-start: .25em !important;
                border-radius: 50% !important; background: #8b5cf6 !important;
                vertical-align: -0.12em !important;
            }
            .${CHAT_MARK_CLASS} svg { width: .66em !important; height: .66em !important; display: block !important; }

            /* מודעת ההסכמה לניקוי */
            #nbbu-cleanup-consent {
                position: fixed !important; z-index: 2147483000 !important;
                inset-inline-end: 18px !important; bottom: 18px !important;
                max-width: 380px !important; font-family: inherit !important;
            }
            #nbbu-cleanup-consent .nbbu-cc-card {
                background: var(--bs-body-bg, #fff) !important; color: var(--bs-body-color, #111) !important;
                border: 1px solid rgba(139,92,246,.5) !important; border-top: 4px solid #8b5cf6 !important;
                border-radius: 12px !important; box-shadow: 0 8px 30px rgba(0,0,0,.28) !important;
                padding: 16px 18px !important;
            }
            #nbbu-cleanup-consent .nbbu-cc-title { font-weight: 800; font-size: 15px; margin-bottom: 8px; color: #8b5cf6; }
            #nbbu-cleanup-consent .nbbu-cc-body { font-size: 13px; line-height: 1.6; }
            #nbbu-cleanup-consent .nbbu-cc-btns { display: flex; gap: 8px; margin-top: 14px; flex-wrap: wrap; }
            #nbbu-cleanup-consent button { border: 0; border-radius: 8px; padding: 8px 14px; font-weight: 700; cursor: pointer; font-size: 13px; }
            #nbbu-cleanup-consent .nbbu-cc-yes { background: #8b5cf6; color: #fff; }
            #nbbu-cleanup-consent .nbbu-cc-maybe { background: rgba(127,127,127,.15); color: inherit; }
            #nbbu-cleanup-consent .nbbu-cc-no { background: transparent; color: inherit; opacity: .65; }
        `;
        (document.head || document.documentElement).appendChild(style);
    }

    const CHECK_SVG = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M20 6L9 17l-5-5" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    const myUid = () => String((W.app && W.app.user && W.app.user.uid) || '');

    // האווטארים באתר הם <img> פשוט בתוך .rounded-circle / .avatar-wrapper (לא img.avatar
    // ולא [component="user/picture"]). לכן ניגשים context-first: מאתרים את אווטאר-המחבר
    // בתוך הפוסט, ואת אווטאר-הכותרת בדף-המשתמש, ומצמידים לעטיפה העגולה.
    function attachBadgeToAvatar(img, preferredHost) {
        if (!img) return;
        // preferredHost (עוטף ה-<a> של הפוסט) לא חותך; ה-.avatar עצמו כן (overflow:hidden+border-radius)
        const host = preferredHost
            || img.closest('.rounded-circle, .avatar-wrapper, [component="user/picture"]')
            || img.parentElement;
        if (!host || host.querySelector(':scope > .' + BADGE_CLASS)) return;
        host.classList.add(BADGE_HOST_CLASS);
        const badge = document.createElement('span');
        badge.className = BADGE_CLASS;
        badge.title = TOOLTIP;
        badge.innerHTML = CHECK_SVG;
        host.appendChild(badge);
    }

    function badgeAvatars() {
        // הדדיות: מי שביטל את הסימון של עצמו (opt-out) לא רואה אף מסומן. ברירת המחדל אוכפת הוגנות.
        if (!enabled) return;
        // אווטאר מחבר בכל פוסט (ה-uid מהפוסט; האווטאר הוא ה-img בקישור-המשתמש בכותרת)
        document.querySelectorAll('[component="post"]').forEach(post => {
            const uid = post.getAttribute('data-uid');
            if (!uid || uid === '0' || !cache[uid] || !cache[uid].isUser) return;
            try {
                // אווטאר-המחבר הראשי הוא component="user/picture" (מקושר לפרופיל). avatar/picture
                // הוא משני (ציטוט/מענה) - אסור לתייג אותו. מעדיפים ראשי גלוי; בפוסט-המשך (אין ראשי)
                // לוקחים avatar/picture שבכותרת (לא בתוך ציטוט). offsetParent מסנן כפילות רספונסיב (d-none).
                const img = [...post.querySelectorAll('img[component="user/picture"]')].find(el => el.offsetParent)
                    || [...post.querySelectorAll('img[component="avatar/picture"]')]
                        .find(el => el.offsetParent && !el.closest('[component="post/content"]'))
                    || post.querySelector('a[href*="/user/"] img');
                if (!img) return;
                const host = img.closest('a[href*="/user/"]')
                    || img.closest('.rounded-circle, .avatar-wrapper')
                    || img.parentElement;
                attachBadgeToAvatar(img, host);
            } catch { /* דילוג */ }
        });

        // אווטאר בכותרת דף-המשתמש (ה-uid מ-ajaxify)
        if (/^\/user\//i.test(location.pathname)) {
            const uid = String((W.ajaxify && W.ajaxify.data && W.ajaxify.data.uid) || '');
            if (uid && cache[uid] && cache[uid].isUser) {
                try {
                    attachBadgeToAvatar(
                        document.querySelector('.border-bottom .avatar-wrapper > img')
                        || document.querySelector('.avatar-wrapper > img')
                    );
                } catch { /* דילוג */ }
            }
        }
    }

    // בצ'אט: וי כהמשך לשורת הכותרת #chat-room-title-<roomId>, אם הצד-השני משתמש בסקריפט
    function badgeChatTitles() {
        if (!enabled) return; // הדדיות: opt-out לא רואה אף מסומן
        document.querySelectorAll('[id^="chat-room-title-"]').forEach(title => {
            if (title.querySelector(':scope > .' + CHAT_MARK_CLASS)) return;
            const win = title.closest(
                '[component="chat/message-window"], .chat-modal, .expanded-chat, .chats-full'
            ) || document;
            const me = myUid();
            // הצד-השני: uid בחלון הצ'אט ששונה ממני (1:1). ponytail: בקבוצה ייבחר הראשון
            let otherUid = '';
            win.querySelectorAll('[data-uid]').forEach(el => {
                const u = el.getAttribute('data-uid');
                if (u && u !== '0' && u !== me && !otherUid) otherUid = u;
            });
            if (!otherUid || !cache[otherUid] || !cache[otherUid].isUser) return;
            const mark = document.createElement('span');
            mark.className = CHAT_MARK_CLASS;
            mark.title = TOOLTIP;
            mark.innerHTML = CHECK_SVG;
            title.appendChild(mark);
        });
    }

    /* ---------- ניקוי פוסטים מלא (בהסכמה) + מעבר לסימן החדש ---------- */
    // חד-פעמי-פר-התקנה: מודעה צפה מסבירה; ב"כן" רץ בשקט מוחלט ברקע על *כל* הפוסטים
    // (מנקה תווי-TAG ישנים + מוסיף את הסימן החדש). מתחדש לבד אחרי רענון/נפילת-רשת.
    const CHOICE_KEY = 'nbbu_cleanup_choice_v1';   // 'yes' | 'no' (ריק = לשאול)
    const DONE_KEY = 'nbbu_cleanup_done_v1';        // הסריקה הושלמה
    const PAGE_KEY = 'nbbu_cleanup_page_v1';        // עמוד הבא לעיבוד (נקודת-חידוש)
    const EDIT_DELAY = 1500;                        // ms בין עריכות (הגנה מ-rate-limit)
    let sweepRunning = false;
    let snoozed = false;                            // "אולי אחר כך" - עד הטעינה הבאה

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    async function getCsrf() {
        try {
            const cfg = await W.fetch('/api/config', {
                headers: { Accept: 'application/json' }, credentials: 'same-origin',
            }).then(r => r.json());
            return cfg && cfg.csrf_token;
        } catch { return null; }
    }

    async function editPost(pid, content, csrf) {
        return W.fetch('/api/v3/posts/' + pid, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'x-csrf-token': csrf, Accept: 'application/json' },
            credentials: 'same-origin',
            body: JSON.stringify({ content }),
        }).catch(() => null);
    }

    // סריקה עמוד-אחר-עמוד (חדש->ישן) על כל פוסטי המשתמש; עורכת רק מה שצריך שינוי.
    // כל עמוד נשמר ב-GM, אז רענון/נפילת-רשת ממשיכים בדיוק מאותה נקודה.
    async function runCleanupSweep() {
        if (sweepRunning || !enabled) return;
        if (GM_getValue(CHOICE_KEY, '') !== 'yes' || GM_getValue(DONE_KEY, false)) return;
        const user = W.app && W.app.user;
        if (!user || !user.uid || !user.userslug) return;
        const csrf = await getCsrf();
        if (!csrf) return; // ננסה שוב בטיק הבא
        sweepRunning = true;
        let edited = 0;
        try {
            let page = Number(GM_getValue(PAGE_KEY, 1)) || 1;
            for (;;) {
                const resp = await W.fetch(
                    '/api/user/' + encodeURIComponent(user.userslug) + '/posts?page=' + page,
                    { headers: { Accept: 'application/json' }, credentials: 'same-origin' }
                ).then(r => r.json()).catch(() => null);
                if (!resp) break; // רשת נפלה - עוצרים; page שמור, נמשיך אחר כך
                const list = resp.posts || [];
                const pageCount = (resp.pagination && resp.pagination.pageCount) || page;
                for (const p of list) {
                    const pid = p && p.pid;
                    if (!pid) continue;
                    const rawResp = await W.fetch('/api/v3/posts/' + pid + '/raw', {
                        headers: { Accept: 'application/json' }, credentials: 'same-origin',
                    }).then(r => r.json()).catch(() => null);
                    const raw = rawResp && rawResp.response && rawResp.response.content;
                    if (typeof raw !== 'string') continue;
                    const fixed = insertMarkerInto(raw);
                    if (fixed === raw) continue; // כבר תקין / רק-קישור - לא נוגעים
                    const put = await editPost(pid, fixed, csrf);
                    if (put && put.ok) edited += 1;
                    await sleep(EDIT_DELAY);
                }
                if (page >= pageCount) { GM_setValue(DONE_KEY, true); log('ניקוי מלא: הושלם (' + edited + ' נערכו)'); break; }
                page += 1;
                GM_setValue(PAGE_KEY, page);
            }
        } catch (e) { log('ניקוי מלא: שגיאה', e); }
        finally { sweepRunning = false; }
    }

    function showCleanupConsent() {
        if (document.getElementById('nbbu-cleanup-consent')) return;
        const box = document.createElement('div');
        box.id = 'nbbu-cleanup-consent';
        box.dir = 'rtl';
        box.innerHTML =
            '<div class="nbbu-cc-card">'
          + '<div class="nbbu-cc-title">ניקוי הפוסטים שלך - NodeBB Unified</div>'
          + '<div class="nbbu-cc-body">'
          + 'גרסאות קודמות של הסקריפט הוסיפו סימן נסתר לפוסטים שלך (לזיהוי מי מפעיל את הסקריפט). '
          + 'אצל חלק מהקוראים שאין להם הסקריפט זה הופיע כריבוע קטן, או שבר ספוילר בסוף הודעה.<br><br>'
          + 'הגרסה החדשה משתמשת בסימן משופר, בלתי-נראה לגמרי. אפשר לעבור על <b>כל הפוסטים שלך</b>, '
          + 'לנקות את הסימן הישן ולהחליף בחדש.<br><br>'
          + '<b>שים לב:</b> הפעולה מוסיפה תגית "נערך" לכל פוסט. היא רצה בשקט ברקע וממשיכה מאליה '
          + 'גם אחרי רענון או ניתוק-רשת.'
          + '</div>'
          + '<div class="nbbu-cc-btns">'
          + '<button class="nbbu-cc-yes">כן, נקה</button>'
          + '<button class="nbbu-cc-maybe">אולי אחר כך</button>'
          + '<button class="nbbu-cc-no">לא</button>'
          + '</div></div>';
        const close = () => box.remove();
        box.querySelector('.nbbu-cc-yes').addEventListener('click', () => {
            GM_setValue(CHOICE_KEY, 'yes'); close(); runCleanupSweep();
        });
        box.querySelector('.nbbu-cc-no').addEventListener('click', () => {
            GM_setValue(CHOICE_KEY, 'no'); close();
        });
        box.querySelector('.nbbu-cc-maybe').addEventListener('click', () => {
            snoozed = true; close(); // נשאל שוב בטעינה הבאה
        });
        document.body.appendChild(box);
    }

    function maybeAskCleanup() {
        if (!enabled || snoozed) return;
        if (GM_getValue(CHOICE_KEY, '') === 'no' || GM_getValue(DONE_KEY, false)) return;
        if (GM_getValue(CHOICE_KEY, '') === 'yes') { runCleanupSweep(); return; } // אושר - להמשיך
        const user = W.app && W.app.user;
        if (!user || !user.uid) return;
        if (Number(user.postcount) === 0) { GM_setValue(DONE_KEY, true); return; } // אין מה לנקות
        showCleanupConsent();
    }

    function whenAppReady(cb, tries = 40) {
        if (W.app && W.app.user && W.app.user.uid) return cb();
        if (tries <= 0) return;
        setTimeout(() => whenAppReady(cb, tries - 1), 500);
    }

    /* ---------- דף /users: סינון "רק משתמשי הסקריפט" ---------- */
    // הזיהוי הרגיל בונה מטמון רק ממי שראינו את הפוסטים שלו בשרשורים. בדף /users רובם לא במטמון,
    // אז כשהסינון פעיל בודקים אקטיבית כל כרטיס פעם אחת (מושכים פוסטים אחרונים, מחפשים סימן).
    const checkedSlugs = new Set(); // slug שכבר נבדק (מונע פטיש-API)
    let checkingCount = 0;

    function onUsersPage() {
        return /^\/users\b/i.test(location.pathname);
    }
    function usersContainer() {
        return document.querySelector('[component="users/container"]')
            || document.querySelector('.users-container, #users-container');
    }
    function userCards() {
        const c = usersContainer();
        if (!c) return [];
        const seen = new Set();
        const cards = [];
        // כל כרטיס = צאצא-ישיר של הקונטיינר; ה-uid על [data-uid] בתוכו (avatar/icon או avatar/picture)
        [...c.children].forEach(card => {
            const link = card.querySelector('a[href*="/user/"]');
            const uidEl = card.querySelector('[data-uid]');
            const uid = uidEl && uidEl.getAttribute('data-uid');
            if (!link || !uid || uid === '0' || seen.has(uid)) return;
            seen.add(uid);
            const slug = (link.getAttribute('href').match(/\/user\/([^/?#]+)/) || [])[1];
            cards.push({ card, uid, slug });
        });
        return cards;
    }
    async function checkHasScript(slug) {
        try {
            const r = await W.fetch('/api/user/' + encodeURIComponent(slug) + '/posts',
                { headers: { Accept: 'application/json' }, credentials: 'same-origin' }).then(r => r.json());
            const posts = (r && r.posts) || [];
            return posts.some(p => hasMarker(p && (p.content || ''))); // סימן שורד גם ב-content המרונדר
        } catch { return null; }
    }
    function applyUsersFilter() {
        if (!onUsersPage() || !usersContainer()) return;
        const active = usersFilterOn && enabled; // הדדיות: opt-out לא מסנן/רואה
        const cards = userCards();
        if (active) {
            for (const { slug, uid } of cards) {
                if (!slug || checkedSlugs.has(slug) || (cache[uid] && cache[uid].isUser)) continue;
                if (checkingCount >= 3) break; // ponytail: תקרת קונקורנטיות פשוטה (3), מספיק לדף
                checkedSlugs.add(slug);
                checkingCount += 1;
                checkHasScript(slug).then(is => {
                    checkingCount -= 1;
                    if (is) recordPresence(uid, Date.now(), true); // sticky: ננעל כמשתמש
                    scheduleScan();
                });
            }
        }
        cards.forEach(({ card, uid }) => {
            const isUser = !!(cache[uid] && cache[uid].isUser);
            card.style.display = (active && !isUser) ? 'none' : '';
        });
    }

    // תג-V על אווטאר הכרטיס ב-/users למי שזוהה (אווטאר = [data-uid], span-אותיות או img-תמונה)
    function badgeUsersCards() {
        if (!enabled || !onUsersPage() || !usersContainer()) return;
        userCards().forEach(({ card, uid }) => {
            if (!(cache[uid] && cache[uid].isUser)) return;
            const av = card.querySelector('[data-uid]');
            if (!av) return;
            const host = av.matches('img')
                ? (av.closest('.avatar-wrapper, .rounded-circle') || av.parentElement)
                : av; // avatar/icon: ה-span עצמו ה-host; nbbu-presence-host מכריח overflow:visible
            attachBadgeToAvatar(av, host);
        });
    }

    /* ---------- עמוד מרוכז: כל משתמשי הסקריפט במקום אחד ----------
       הפילטר ב-/users רק מסתיר לא-משתמשים בתוך העמוד המעומד של NodeBB, אז אי אפשר
       לספור/לראות את כולם בלי לדפדף את כל הפורום. כאן אוספים לרשימה אחת: seed מהמטמון
       (מי שנראה בגלישה) + קציר פעילים (מקוונים + נושאים אחרונים) + סריקה-עמוקה אופציונלית. */
    const META_KEY = 'nbbu_presence_meta_v1'; // uid -> {name, slug, pic, it, ib}
    let meta = {};
    try { meta = GM_getValue(META_KEY, {}) || {}; } catch { meta = {}; }
    let metaFlush = null;
    function scheduleMetaFlush() {
        if (metaFlush) return;
        metaFlush = setTimeout(() => {
            metaFlush = null;
            try { GM_setValue(META_KEY, meta); } catch { /* מלא? מתעלמים */ }
        }, 3000);
    }
    function escHtml(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, c =>
            ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }
    function rememberUser(u) {
        if (!u || !u.uid) return;
        const uid = String(u.uid);
        const slug = u.userslug || u.slug || '';
        const prev = meta[uid] || {};
        meta[uid] = {
            name: u.username || prev.name || slug || ('uid ' + uid),
            slug: slug || prev.slug || '',
            pic: (u.picture != null ? u.picture : prev.pic) || '',
            it: (u['icon:text'] != null ? u['icon:text'] : prev.it) || '',
            ib: (u['icon:bgColor'] != null ? u['icon:bgColor'] : prev.ib) || '#888'
        };
        scheduleMetaFlush();
    }
    async function apiGet(path) {
        try {
            const r = await W.fetch(path, { headers: { Accept: 'application/json' }, credentials: 'same-origin' });
            return JSON.parse(await r.text());
        } catch { return null; }
    }
    // בודק משתמש בודד: מושך פוסטים, מחפש סימן, ותופס מטא אגב-אורחא
    async function probeUser(uid, slug) {
        if (!slug) return false;
        if (cache[uid] && cache[uid].isUser) return true;
        const r = await apiGet('/api/user/' + encodeURIComponent(slug) + '/posts');
        const posts = (r && r.posts) || [];
        if (posts[0] && posts[0].user) rememberUser(posts[0].user);
        const is = posts.some(p => hasMarker(p && (p.content || '')));
        if (is) { rememberUser({ uid, userslug: slug, username: posts[0] && posts[0].user && posts[0].user.username }); recordPresence(uid, Date.now(), true); }
        return is;
    }
    // השלמת מטא לפי uid: מי שזוהה תוך גלישה נכנס למטמון בלי שם (הסריקה קוראת רק uid+סימן).
    // /api/user/uid/<uid> מחזיר שם/סלאג/אווטאר. רץ עצמאית (לא מושפע מעצירת הסריקה), עם דה-דופ.
    const metaFetching = new Set();
    function needsMeta(uid) {
        const m = meta[uid];
        return !m || !m.name || /^uid /.test(m.name) || !m.slug;
    }
    async function backfillMeta(uids) {
        const need = [...new Set(uids)].filter(uid => !metaFetching.has(uid) && needsMeta(uid));
        if (!need.length) return;
        need.forEach(uid => metaFetching.add(uid));
        let i = 0;
        const worker = async () => {
            while (i < need.length) {
                const uid = need[i++];
                const d = await apiGet('/api/user/uid/' + encodeURIComponent(uid));
                if (d && (d.username || d.userslug)) {
                    rememberUser({ uid, username: d.username, userslug: d.userslug, picture: d.picture, 'icon:text': d['icon:text'], 'icon:bgColor': d['icon:bgColor'] });
                }
                metaFetching.delete(uid);
                refreshUI();
            }
        };
        await Promise.all([worker(), worker(), worker()]);
    }

    let scanBusy = false, scanStop = false, scanProgress = '';
    // ריצה חסומת-קונקורנטיות (3) עם אפשרות-עצירה
    async function runPool(items, worker, onTick) {
        let i = 0, active = 0, done = 0;
        return new Promise(resolve => {
            const pump = () => {
                if (scanStop) { if (active === 0) resolve(); return; }
                while (active < 3 && i < items.length) {
                    const it = items[i++]; active += 1;
                    Promise.resolve(worker(it)).catch(() => {}).then(() => {
                        active -= 1; done += 1;
                        if (onTick) onTick(done, items.length);
                        pump();
                    });
                }
                if (active === 0 && i >= items.length) resolve();
            };
            pump();
        });
    }
    function setProgress(t) { scanProgress = t; const el = document.getElementById('nbbu-up-progress'); if (el) el.textContent = t; }
    // קציר פעילים: מקוונים + N עמודי נושאים-אחרונים -> בדיקת סימן למי שעוד לא ידוע
    async function harvestActive(pages = 5) {
        const cands = new Map(); // slug -> uid
        const online = await apiGet('/api/users?section=online');
        ((online && online.users) || []).forEach(u => { if (u.userslug) { cands.set(u.userslug, u.uid); rememberUser(u); } });
        for (let p = 1; p <= pages && !scanStop; p += 1) {
            const rec = await apiGet('/api/recent?page=' + p);
            ((rec && rec.topics) || []).forEach(t => {
                [t.user, t.teaser && t.teaser.user].forEach(u => { if (u && u.userslug) { cands.set(u.userslug, u.uid); rememberUser(u); } });
            });
        }
        const list = [...cands].map(([slug, uid]) => ({ slug, uid })).filter(x => !(cache[x.uid] && cache[x.uid].isUser));
        let n = 0;
        await runPool(list, x => probeUser(x.uid, x.slug), (d, tot) => { n = d; setProgress('קציר פעילים: ' + d + '/' + tot + ' נבדקו, ' + scriptUsers().length + ' נמצאו'); refreshUI(); });
        setProgress('קציר הסתיים: ' + scriptUsers().length + ' משתמשים');
    }
    // ponytail: סריקה מלאה = בקשה לכל משתמש בפורום (מתמחים ~30k => ~612 עמודים). אופציונלי, ניתן-לעצירה,
    // ומצטבר (מי שכבר נעול במטמון מדולג), אז ריצה חוזרת מתקדמת. לא רץ אוטומטית - רק בלחיצה.
    async function deepScan() {
        const first = await apiGet('/api/users?section=joindate&page=1');
        const pageCount = (first && first.pagination && first.pagination.pageCount) || 1;
        const total = (first && first.userCount) || pageCount * 50;
        let checked = 0;
        for (let p = 1; p <= pageCount && !scanStop; p += 1) {
            const data = p === 1 ? first : await apiGet('/api/users?section=joindate&page=' + p);
            const users = (data && data.users) || [];
            users.forEach(rememberUser);
            const list = users.filter(u => u.userslug && !(cache[u.uid] && cache[u.uid].isUser));
            await runPool(list, u => probeUser(u.uid, u.userslug), () => { checked += 1; setProgress('סריקה עמוקה: ' + checked + '/' + total + ' נבדקו, ' + scriptUsers().length + ' נמצאו'); refreshUI(); });
        }
        setProgress((scanStop ? 'נעצר: ' : 'הסתיים: ') + scriptUsers().length + ' משתמשים');
    }
    async function runScan(fn) {
        if (scanBusy) { scanStop = true; return; } // לחיצה שנייה = עצור
        scanBusy = true; scanStop = false; refreshUI();
        try { await fn(); } finally { scanBusy = false; scanStop = false; refreshUI(); }
    }
    function scriptUsers() {
        return Object.keys(cache)
            .filter(uid => cache[uid] && cache[uid].isUser)
            .map(uid => ({ uid, name: (meta[uid] && meta[uid].name) || ('uid ' + uid), slug: (meta[uid] && meta[uid].slug) || '', pic: meta[uid] && meta[uid].pic, it: meta[uid] && meta[uid].it, ib: (meta[uid] && meta[uid].ib) || '#888' }));
    }
    function avatarHtml(u) {
        if (u.pic) return '<img src="' + escHtml(u.pic) + '" style="width:34px;height:34px;border-radius:50%;object-fit:cover;flex:0 0 auto;">';
        return '<span style="width:34px;height:34px;border-radius:50%;background:' + escHtml(u.ib) + ';color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;flex:0 0 auto;">' + escHtml(u.it || (u.name || '?').slice(0, 1)) + '</span>';
    }
    const UP_ID = 'nbbu-users-panel';
    let modalOpen = false;
    function ensureButton() {
        if (!onUsersPage()) { const b = document.getElementById(UP_ID + '-btn'); if (b) b.remove(); return; }
        let b = document.getElementById(UP_ID + '-btn');
        if (!b) {
            b = document.createElement('button');
            b.id = UP_ID + '-btn'; b.type = 'button';
            b.style.cssText = 'position:fixed;inset-inline-start:16px;bottom:16px;z-index:99990;display:flex;align-items:center;gap:8px;'
                + 'padding:10px 15px;border:none;border-radius:999px;background:#8b5cf6;color:#fff;font:700 14px/1 inherit;cursor:pointer;'
                + 'box-shadow:0 3px 12px rgba(0,0,0,.3);';
            b.addEventListener('click', openModal);
            document.body.appendChild(b);
        }
        b.innerHTML = '<span style="display:inline-flex;width:18px;height:18px;border-radius:50%;background:#fff;color:#8b5cf6;'
            + 'align-items:center;justify-content:center;font-weight:900;font-size:12px;">✓</span> משתמשי הסקריפט (' + scriptUsers().length + ')';
    }
    function openModal() {
        if (document.getElementById(UP_ID)) return;
        modalOpen = true;
        const host = document.createElement('div');
        host.id = UP_ID;
        host.style.cssText = 'position:fixed;inset:0;z-index:99991;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;direction:rtl;';
        host.innerHTML =
            '<div style="background:var(--bs-body-bg,#fff);color:var(--bs-body-color,#212529);width:min(560px,94vw);max-height:88vh;display:flex;flex-direction:column;border-radius:14px;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,.4);font:14px/1.4 inherit;">'
            + '<div style="display:flex;align-items:center;gap:8px;padding:14px 16px;background:#8b5cf6;color:#fff;font-weight:800;">'
            + '<span style="flex:1;">משתמשי הסקריפט (<span id="nbbu-up-count">0</span>)</span>'
            + '<button id="nbbu-up-close" type="button" style="border:none;background:transparent;color:#fff;font-size:22px;line-height:1;cursor:pointer;">×</button></div>'
            + '<div style="padding:10px 16px;"><input id="nbbu-up-search" type="search" placeholder="חיפוש לפי שם..." style="width:100%;padding:8px 12px;border:1px solid #ccc;border-radius:8px;font:inherit;box-sizing:border-box;"></div>'
            + '<div id="nbbu-up-list" style="flex:1;overflow:auto;padding:0 10px 6px;"></div>'
            + '<div style="padding:10px 16px;border-top:1px solid rgba(0,0,0,.1);">'
            + '<div id="nbbu-up-progress" style="font-size:12px;opacity:.75;min-height:16px;margin-bottom:8px;"></div>'
            + '<div style="display:flex;gap:8px;flex-wrap:wrap;">'
            + '<button id="nbbu-up-harvest" type="button" style="flex:1;padding:9px;border:none;border-radius:8px;background:#8b5cf6;color:#fff;font-weight:700;cursor:pointer;">רענון פעילים</button>'
            + '<button id="nbbu-up-deep" type="button" style="flex:1;padding:9px;border:1px solid #8b5cf6;border-radius:8px;background:transparent;color:#8b5cf6;font-weight:700;cursor:pointer;">סריקה עמוקה</button>'
            + '</div></div></div>';
        document.body.appendChild(host);
        host.addEventListener('click', e => { if (e.target === host) closeModal(); });
        host.querySelector('#nbbu-up-close').addEventListener('click', closeModal);
        host.querySelector('#nbbu-up-search').addEventListener('input', updateList);
        host.querySelector('#nbbu-up-harvest').addEventListener('click', () => runScan(() => harvestActive(5)));
        host.querySelector('#nbbu-up-deep').addEventListener('click', () => runScan(deepScan));
        setProgress(scanProgress);
        refreshUI();
    }
    function closeModal() { modalOpen = false; const h = document.getElementById(UP_ID); if (h) h.remove(); }
    function updateList() {
        const host = document.getElementById(UP_ID);
        if (!host) return;
        const q = (host.querySelector('#nbbu-up-search').value || '').trim();
        let users = scriptUsers();
        if (q) users = users.filter(u => (u.name || '').includes(q) || (u.slug || '').includes(q));
        users.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'he'));
        host.querySelector('#nbbu-up-count').textContent = scriptUsers().length;
        const label = u => /^uid /.test(u.name || '') ? 'טוען שם…' : u.name;
        host.querySelector('#nbbu-up-list').innerHTML = users.length
            ? users.map(u => '<a href="/user/' + encodeURIComponent(u.slug || '') + '" target="_blank" '
                + 'style="display:flex;align-items:center;gap:10px;padding:7px 10px;border-radius:8px;color:inherit;text-decoration:none;">'
                + avatarHtml(u) + '<span style="font-weight:600;">' + escHtml(label(u)) + '</span></a>').join('')
            : '<div style="padding:20px;text-align:center;opacity:.6;">אין עדיין. הרץ "רענון פעילים" או "סריקה עמוקה".</div>';
        // מי שאין לו שם - נמשך אוטומטית ומתעדכן חי (בלי חסימה)
        backfillMeta(scriptUsers().filter(u => needsMeta(u.uid)).map(u => u.uid));
    }
    function refreshUI() {
        ensureButton();
        const host = document.getElementById(UP_ID);
        if (!host) return;
        updateList();
        const h = host.querySelector('#nbbu-up-harvest'), d = host.querySelector('#nbbu-up-deep');
        if (h && d) {
            h.textContent = scanBusy ? 'עצור' : 'רענון פעילים';
            d.textContent = scanBusy ? 'עצור' : 'סריקה עמוקה';
        }
    }

    /* ---------- טוגלים גרפיים בפאנל ההגדרות המרכזי (Shadow DOM פתוח) ---------- */
    const CHECK_MINI = '<svg viewBox="0 0 24 24" width="10" height="10" fill="none">'
        + '<path d="M20 6L9 17l-5-5" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    function syncPanelToggles(root) {
        const sec = root.getElementById('nbbu-presence-settings');
        if (!sec) return;
        sec.querySelector('[data-nbbu="enabled"]').checked = enabled;
        sec.querySelector('[data-nbbu="usersFilter"]').checked = usersFilterOn;
    }
    function ensurePanelSettings() {
        const host = document.getElementById(PANEL_HOST_ID);
        const root = host && host.shadowRoot;
        if (!root) return;
        const panel = root.querySelector('.panel');
        const moduleList = root.querySelector('[data-role="module-list"]');
        if (!panel || !moduleList) return;
        if (root.getElementById('nbbu-presence-settings')) { syncPanelToggles(root); return; }
        const sec = document.createElement('section');
        sec.id = 'nbbu-presence-settings';
        sec.style.cssText = 'margin:0 16px 10px;padding:12px 14px;border:1px solid rgba(139,92,246,.35);'
            + 'border-radius:10px;background:rgba(139,92,246,.06);font:inherit;';
        sec.innerHTML = '<div style="display:flex;align-items:center;gap:8px;font-weight:800;color:#7c3aed;margin-bottom:8px;">'
            + '<span style="display:inline-flex;width:16px;height:16px;border-radius:50%;background:#8b5cf6;align-items:center;justify-content:center;">'
            + CHECK_MINI + '</span> חיווי נוכחות "משתמש בסקריפט"</div>'
            + '<label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin:6px 0;">'
            + '<input type="checkbox" data-nbbu="enabled"><span>סמן אותי כמשתמש הסקריפט '
            + '<small style="opacity:.7">(כבוי = מוסתר, וגם לא רואה אף מסומן)</small></span></label>'
            + '<label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin:6px 0;">'
            + '<input type="checkbox" data-nbbu="usersFilter"><span>בדף /users: הצג רק משתמשי הסקריפט</span></label>';
        panel.insertBefore(sec, moduleList);
        sec.querySelector('[data-nbbu="enabled"]').addEventListener('change', e => {
            enabled = e.target.checked;
            GM_setValue(ENABLED_KEY, enabled);
            location.reload(); // כמו טוגל התפריט - מצב הרשת/סריקה נקבע בטעינה
        });
        sec.querySelector('[data-nbbu="usersFilter"]').addEventListener('change', e => {
            usersFilterOn = e.target.checked;
            GM_setValue(USERS_FILTER_KEY, usersFilterOn);
            scheduleScan();
        });
        syncPanelToggles(root);
    }

    /* ---------- observer ---------- */
    let scanScheduled = false;
    let lastVerifiedCount = -1;
    function verifiedCount() {
        let n = 0;
        for (const uid in cache) { if (cache[uid] && cache[uid].isUser) n += 1; }
        return n;
    }
    function scheduleScan() {
        if (scanScheduled) return;
        scanScheduled = true;
        requestAnimationFrame(() => {
            scanScheduled = false;
            scanContainer(document);
            badgeAvatars();
            badgeChatTitles();
            applyUsersFilter();
            badgeUsersCards();
            ensureButton();
            ensurePanelSettings();
            const vc = verifiedCount();
            if (vc !== lastVerifiedCount) {
                lastVerifiedCount = vc;
                log('משתמשים מאומתים במטמון: ' + vc, Object.keys(cache).filter(u => cache[u].isUser));
            }
        });
    }

    function start() {
        log('התחיל. סימן=' + [...MARKER].length + ' תווי רוחב-אפס, מאומתים במטמון=' + verifiedCount());
        addStyles();
        scheduleScan();
        const obs = new MutationObserver(() => scheduleScan());
        obs.observe(document.body || document.documentElement, { childList: true, subtree: true });
        whenAppReady(() => {
            maybeAskCleanup();
            setInterval(runCleanupSweep, 60000); // חידוש-עצמי אחרי נפילת-רשת, בלי צורך ברענון
        });
    }

    // עוטפים את הרשת מיד (document-start) כדי לא לפספס שליחות מוקדמות
    wrapNetwork();

    // opt-out דרך תפריט הסקריפט (ברירת מחדל: פעיל). כשמכובה - הפוסטים/הודעות שלי
    // לא מסומנים ולא נערכת ריצה-ראשונה; עדיין רואים את מי שכן משתמש (סריקה/תגים ממשיכים).
    try {
        GM_registerMenuCommand(
            enabled
                ? '✓ סימון הנוכחות שלי פעיל (לחץ כדי לא להיות מסומן)'
                : '✗ הנוכחות שלי מוסתרת (לחץ כדי לסמן אותי שוב)',
            () => {
                enabled = !enabled;
                GM_setValue(ENABLED_KEY, enabled);
                location.reload();
            }
        );
    } catch { /* אין תמיכה בתפריט - לא קריטי */ }

    if (document.body) {
        start();
    } else {
        document.addEventListener('DOMContentLoaded', start, { once: true });
    }
})();
