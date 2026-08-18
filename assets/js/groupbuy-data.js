/* ════════════════════════════════════════════════════════════════
   KEYDIR.in — Group Buy Data
   ════════════════════════════════════════════════════════════════
   Single source of truth for the /groupbuy/ page.
   Drop this file in /assets/js/ and load it BEFORE shared.js on
   the group buy page:

     <script src="/assets/js/groupbuy-data.js"></script>
     <script src="/assets/js/shared.js"></script>

   Edit the GROUP_BUYS array below to add / update / close a GB.
   Everything else on the page (counts, tabs, cards, sorting) is
   generated automatically from this array.
   ════════════════════════════════════════════════════════════════
   Fields:
     id              {string}   Unique slug, used as a DOM id (e.g. "gb-001")
     name            {string}   Group buy product name
     organizer       {string}   Vendor / builder / community member running it
     organizer_url   {string}   Link to organizer's store or profile
     icon            {string}   Emoji shown on the card
     category        {string}   One of: "Keyboard" | "Keycaps" | "Switches" |
                                "Artisan" | "Accessory" | "Deskpad/Mousepad"
     status          {string}   "active" | "upcoming" | "closed"
     desc            {string}   1–2 sentence description of the product
     price           {string}   Display price string, e.g. "₹8,500" or "₹4,200 – ₹6,800"
     moq             {string}   Minimum order qty / interest check status, e.g. "MOQ: 50 reached"
     start_date      {string}   "DD Mon YYYY" — when the GB opened
     end_date        {string}   "DD Mon YYYY" — interest check / payment deadline
                                (for closed GBs this is when it closed)
     est_delivery    {string}   Estimated delivery window, e.g. "Q3 2026"
     join_url        {string}   Link to join/pay (Discord, Google Form, store page).
                                Leave "" if closed and link no longer needed.
     discord         {string}   Discord invite/channel link. "" if none.
     warning         {boolean}  true = show a caution badge on the card
     warning_message {string}   Caution text (only shown if warning:true). "" otherwise.
     outcome         {string}   ONLY for status:"closed" — what happened, e.g.
                                "Delivered on time, Mar 2026" / "Refunded — MOQ not met"
   ══════════════════════════════════════════════════════════════ */

const GROUP_BUYS = [

  /* ── ACTIVE GROUP BUYS ── */
  {
    id: "gb-kraze65",
    name: "[GB] Kraze65",
    organizer: "Neomacro",
    organizer_url: "https://neomacro.in",
    icon: "⌨",
    category: "Keyboard",
    status: "closed",
    desc: "“Kraze” comes from a blend of “Keyboard” and “Craze.” The name represents the passion and enthusiasm shared by keyboard lovers around the world.",
    price: "₹11,000",
    moq: "MOQ: NOT SET",
    start_date: "08 Jun 2026",
    end_date: "12 Jul 2026",
    est_delivery: "Q4 2026",
    join_url: "https://neomacro.in/search?q=Kraze",
    discord: "https://discord.com/invite/W4ZzfmC8Me",
    warning: false,
    warning_message: "",
    outcome: "GB Closed - waiting for delivery."
  },
  /* ── UPCOMING GROUP BUYS ── */
  {
    id: "ic-Mochi40",
    name: "[IC] Mochi40",
    organizer: "Keebforge.in",
    organizer_url: "https://keebforge.in/",
    icon: "⌨",
    category: "Keyboard",
    status: "closed",
    desc: "[IC] Mochi40 Compact 40% hotswap keyboard PCB with optional OLED, knob, and wireless support.",
    price: "₹4500",
    moq: "MOQ: NOT SET",
    start_date: "",
    end_date: "10 Jul 2026",
    est_delivery: "",
    join_url: "https://keebforge.in/",
    discord: "https://discord.com/users/843113968734437376",
    warning: false,
    warning_message: "",
    outcome: "MOQ not met, GB closed."
  },

  /* ── CLOSED GROUP BUYS ── */
  {
    id: "gb-gmk-prussian",
    name: "[GB] GMK Prussian Alert",
    organizer: "Neomacro",
    organizer_url: "https://neomacro.in",
    icon: "⌨",
    category: "Keycaps",
    status: "closed",
    desc: "Featuring OG Icon modifiers and a custom grey/white base in place of the usual Text+Icon and beige, the set perfectly complements the Prussian Blue tone.",
    price: "₹4,000 – ₹14,500",
    moq: "MOQ: NOT SET",
    start_date: "15 May 2026",
    end_date: "13 Jun 2026",
    est_delivery: "Q4 2026",
    join_url: "https://neomacro.in/products/group-buy-gmk-prussian-alert",
    discord: "https://discord.com/invite/W4ZzfmC8Me",
    warning: false,
    warning_message: "",
    outcome: ""
  },
  {
    id: "gb-gmk-cherry-love",
    name: "[GB] GMK Cherry Love",
    organizer: "Neomacro",
    organizer_url: "https://neomacro.in",
    icon: "⌨",
    category: "Keycaps",
    status: "closed",
    desc: "This is about a love for the hobby and the people who make it special. It also reflects a love for all things Cherry in the context of keyboards: the profile, legends, switches, and the iconic logo.",
    price: "₹1,900 – ₹12,900",
    moq: "MOQ: NOT SET",
    start_date: "21 Nov 2025",
    end_date: "21 Dec 2025",
    est_delivery: "Q2 2026",
    join_url: "https://neomacro.in/products/group-buy-gmk-cherry-love",
    discord: "https://discord.com/invite/W4ZzfmC8Me",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase on Neomacro store."
  },
  {
    id: "gb-is0GR2",
    name: "[GB] is0GR2",
    organizer: "Neomacro",
    organizer_url: "https://neomacro.in",
    icon: "⌨",
    category: "Keyboard",
    status: "closed",
    desc: "The is0GR by AKB is a one-key micropad keyboard that requires a singular ISO keycap. Inspired by Blacksimon's is0 with the design language of AKB's OGR.",
    price: "₹450 – ₹10,500",
    moq: "MOQ: NOT SET",
    start_date: "03 Oct 2025",
    end_date: "02 Nov 2025",
    est_delivery: "Q2 2026",
    join_url: "https://neomacro.in/search?q=is0GR2",
    discord: "https://discord.com/invite/W4ZzfmC8Me",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase on Neomacro store."
  },
  {
    id: "gb-petrichor-addons",
    name: "[GB] [Extras] Petrichor Add-Ons",
    organizer: "Neomacro",
    organizer_url: "https://neomacro.in",
    icon: "⌨",
    category: "Keyboard",
    status: "closed",
    desc: "The is0GR by AKB is a one-key micropad keyboard that requires a singular ISO keycap. Inspired by Blacksimon's is0 with the design language of AKB's OGR.",
    price: "₹350 – ₹4,500",
    moq: "MOQ: NOT SET",
    start_date: "14 Jun 2024",
    end_date: "15 Jul 2024",
    est_delivery: "Q1 2025",
    join_url: "https://neomacro.in/products/petrichor-addons",
    discord: "https://discord.com/invite/W4ZzfmC8Me",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase on Neomacro store."
  },
  {
    id: "gb-gmk-nimbus",
    name: "[GB] GMK Nimbus",
    organizer: "StacksKB",
    organizer_url: "https://stackskb.com",
    icon: "⌨",
    category: "Keycaps",
    status: "closed",
    desc: "Designed by Scott L, this keycap set is elegantly inspired by the soft colors and appearance of the clouds in the sky.",
    price: "₹15,999",
    moq: "MOQ: Met",
    start_date: "15 Jan 2022",
    end_date: "15 Feb 2022",
    est_delivery: "Q1 2023",
    join_url: "https://stackskb.com/store/gmk-nimbus/",
    discord: "https://discord.com/invite/kjmNeWCXZV",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase as In-Stock Extras on StacksKB."
  },
  {
    id: "gb-gmk-shashin",
    name: "[GB] GMK Shashin",
    organizer: "StacksKB",
    organizer_url: "https://stackskb.com",
    icon: "⌨",
    category: "Keycaps",
    status: "closed",
    desc: "Named after the Japanese word for Photograph, this gorgeous monochrome layout pays a direct color palette homage to all things photography.",
    price: "₹4,499",
    moq: "MOQ: Met",
    start_date: "01 Jul 2021",
    end_date: "01 Aug 2021",
    est_delivery: "Q3 2022",
    join_url: "https://stackskb.com/store/gmk-shashin/",
    discord: "https://discord.com/invite/kjmNeWCXZV",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase as In-Stock Extras on StacksKB."
  },
  {
    id: "gb-gmk-monochrome-r2",
    name: "[GB] GMK Monochrome R2",
    organizer: "StacksKB",
    organizer_url: "https://stackskb.com",
    icon: "⌨",
    category: "Keycaps",
    status: "closed",
    desc: "The timeless and popular clean black-and-white theme returns for its second highly-requested production run.",
    price: "₹10,010 – ₹13,999",
    moq: "MOQ: Met",
    start_date: "30 Jun 2021",
    end_date: "05 Aug 2021",
    est_delivery: "Q3 2022",
    join_url: "https://stackskb.com/store/gmk-monochrome-r2/",
    discord: "https://discord.com/invite/kjmNeWCXZV",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase as In-Stock Extras on StacksKB."
  },
  {
    id: "gb-gmk-shashin-deskmats",
    name: "[GB] GMK Shashin Poraroido Deskmat",
    organizer: "StacksKB",
    organizer_url: "https://stackskb.com",
    icon: "⌨",
    category: "Deskpad/Mousepad",
    status: "closed",
    desc: "Accompanying the GMK Shashin keycap set, featuring a non-slip rubber bottom and a smooth cloth top balanced for speed and control.",
    price: "₹3,245",
    moq: "MOQ: Met",
    start_date: "01 Jul 2021",
    end_date: "01 Aug 2021",
    est_delivery: "Q3 2022",
    join_url: "https://stackskb.com/store/gmk-shashin-deskmats/",
    discord: "https://discord.com/invite/kjmNeWCXZV",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase as In-Stock Extras on StacksKB."
  },
  {
    id: "gb-sa-fledgling",
    name: "[GB] SA Fledgling",
    organizer: "StacksKB",
    organizer_url: "https://stackskb.com",
    icon: "⌨",
    category: "Keycaps",
    status: "closed",
    desc: "Manufactured by Signature Plastics, this set is beautifully inspired by cheap red hair dye, washed-out Sacramento sunshine, and coming-of-age metaphors.",
    price: "₹15,999 – ₹19,999",
    moq: "MOQ: Met",
    start_date: "03 Sep 2021",
    end_date: "03 Oct 2021",
    est_delivery: "Q4 2022",
    join_url: "https://stackskb.com/store/sa-fledgling/",
    discord: "https://discord.com/invite/kjmNeWCXZV",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase as In-Stock Extras on StacksKB."
  },
  {
    id: "gb-epbt-kavala",
    name: "[GB] ePBT Kavala",
    organizer: "StacksKB",
    organizer_url: "https://stackskb.com",
    icon: "⌨",
    category: "Keycaps",
    status: "closed",
    desc: "Inspired by a beautiful picture of a sunset over the Greek town of Kavala, capturing stunning open sky gradients with dye-sub PBT legends.",
    price: "₹11,999",
    moq: "MOQ: Met",
    start_date: "01 Oct 2021",
    end_date: "02 Nov 2021",
    est_delivery: "Q4 2022",
    join_url: "https://stackskb.com/store/epbt-kavala/",
    discord: "https://discord.com/invite/kjmNeWCXZV",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase as In-Stock Extras on StacksKB."
  },
  {
    id: "gb-model-m-ssk",
    name: "[GB] Model M SSK DIY Keyboard Kit",
    organizer: "StacksKB",
    organizer_url: "https://stackskb.com",
    icon: "⌨",
    category: "Keyboard",
    status: "closed",
    desc: "A thoroughly modernized homage to the revered vintage Model M SSK layout, featuring a CNC'd anodized aluminum case, hotswap PCB, and structural gasket mounting.",
    price: "₹14,999",
    moq: "MOQ: Met",
    start_date: "14 Oct 2022",
    end_date: "14 Nov 2022",
    est_delivery: "Q2 2023",
    join_url: "https://stackskb.com/store/model-m-ssk-diy-keyboard-kit-in-stock/",
    discord: "https://discord.com/invite/kjmNeWCXZV",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase as In-Stock Extras on StacksKB."
  },
  {
    id: "gb-mw-art-nouveau",
    name: "[GB] MW Art Nouveau",
    organizer: "StacksKB",
    organizer_url: "https://stackskb.com",
    icon: "⌨",
    category: "Keycaps",
    status: "closed",
    desc: "Designed by SpikedSynapse and inspired by Alphonse Mucha's works, this set pairs cream alphas, sky blue modifiers, and deep red accents to bring the graphic beauty of Art Nouveau to your desktop.",
    price: "₹2,499 – ₹12,999",
    moq: "MOQ: Met",
    start_date: "14 Jun 2022",
    end_date: "15 Jul 2022",
    est_delivery: "Q1 2023",
    join_url: "https://stackskb.com/store/mw-art-nouveau/",
    discord: "https://discord.com/invite/kjmNeWCXZV",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase as In-Stock Extras on StacksKB."
  },
  {
    id: "gb-mw-pluto",
    name: "[GB] Milkyway Pluto Keycap Set",
    organizer: "StacksKB",
    organizer_url: "https://stackskb.com",
    icon: "⌨",
    category: "Keycaps",
    status: "closed",
    desc: "Designed by biscuit, this space-themed set features a distinct palette of deep blue modifiers, tannish-pink alphas, and striking red accents inspired by the surface and blue atmospheric haze of Pluto.",
    price: "₹2,999 – ₹10,999",
    moq: "MOQ: Met",
    start_date: "14 Feb 2022",
    end_date: "18 Mar 2022",
    est_delivery: "Q3 2022",
    join_url: "https://stackskb.com/store/milkyway-pluto-keycap-set/",
    discord: "https://discord.com/invite/kjmNeWCXZV",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase as In-Stock Extras on StacksKB."
  },
  {
    id: "gb-epbt-hellas",
    name: "[GB] ePBT Hellas",
    organizer: "StacksKB",
    organizer_url: "https://stackskb.com",
    icon: "⌨",
    category: "Keycaps",
    status: "closed",
    desc: "A keycap set inspired by the city of Athens in Greece, featuring beautiful blue, white, and golden tones alongside rare Greek sublegends.",
    price: "₹12,499",
    moq: "MOQ: Met",
    start_date: "20 Nov 2021",
    end_date: "20 Dec 2021",
    est_delivery: "Q4 2022",
    join_url: "https://stackskb.com/store/epbt-hellas/",
    discord: "https://discord.com/invite/kjmNeWCXZV",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase as In-Stock Extras on StacksKB."
  },
  {
    id: "gb-ikki68-aurora-r2-acc",
    name: "[GB] Ikki68 Aurora R2 Accessories Add-ons",
    organizer: "StacksKB",
    organizer_url: "https://stackskb.com",
    icon: "⌨",
    category: "Accessory",
    status: "closed",
    desc: "Official Poron dampeners, gaskets, and accessories designed for the Ikki68 Aurora R2 and backwards compatible with R1 kits to fine-tune acoustics and typing feel.",
    price: "₹1,399",
    moq: "MOQ: Met",
    start_date: "12 Nov 2021",
    end_date: "26 Nov 2021",
    est_delivery: "Apr 2022",
    join_url: "https://stackskb.com/store/ikki68-aurora-accessories-add-ons/",
    discord: "https://discord.com/invite/kjmNeWCXZV",
    warning: false,
    warning_message: "",
    outcome: "Still available for purchase as In-Stock Extras on StacksKB."
  }

];