/* ════════════════════════════════════════════════════════════════
   KEYDIR.in — Shared JavaScript
   ════════════════════════════════════════════════════════════════
   This file is the SINGLE SOURCE OF TRUTH for all site data.
   Edit the arrays below to add/update/remove any entry.
   Changes here automatically reflect across all pages.
   ════════════════════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════════════════
   COMMUNITY_LINKS
   Shown on: guide.html (Community section)
   ══════════════════════════════════════════════════════════════
   Fields:
     label  {string}  Display name of the community platform
     url    {string}  Full URL to the community page
     icon   {string}  Emoji shown on the card
     desc   {string}  One-line description shown under the label
   ══════════════════════════════════════════════════════════════ */
const COMMUNITY_LINKS = [
  { label: "Discord",           url: "https://discord.com/invite/SgHsHbqqPY",  icon: "🎧", desc: "Indian keeb community Discord server" },
  { label: "Reddit (MK India)", url: "https://www.reddit.com/r/mkindia/",      icon: "💬", desc: "r/mkindia — India mechanical keyboard subreddit" },
  // { label: "Telegram",       url: "https://t.me/yourgroup",                 icon: "📢", desc: "Telegram group for India keeb enthusiasts" },
];


/* ══════════════════════════════════════════════════════════════
   TYPING_PRACTICE_LINKS
   Shown on: guide.html (Typing Practice section)
   ══════════════════════════════════════════════════════════════
   Fields:
     label  {string}  Display name of the typing site
     url    {string}  Full URL to the site
     icon   {string}  Emoji shown on the card
     desc   {string}  One-line description of what the site offers
   ══════════════════════════════════════════════════════════════ */
const TYPING_PRACTICE_LINKS = [
  { label: "10FastFingers",   url: "https://10fastfingers.com/",       icon: "⚡", desc: "Classic typing speed test with competitions" },
  { label: "Typings.gg",      url: "https://typings.gg/",              icon: "🎨", desc: "Beautifully designed typing test" },
  { label: "MonkeyType",      url: "https://monkeytype.com/",          icon: "🐒", desc: "Minimalist, highly customizable typing test" },
  { label: "TypingClub",      url: "https://www.typingclub.com/",      icon: "🏫", desc: "Structured typing lessons for beginners" },
  { label: "Typing.works",    url: "https://typing.works/",            icon: "🔤", desc: "Clean and simple typing practice" },
  { label: "Colemak Academy", url: "https://www.colemak.academy/",     icon: "🗝", desc: "Learn the Colemak keyboard layout" },
  { label: "TypeLit.io",      url: "https://www.typelit.io/",          icon: "📚", desc: "Practice typing with classic literature" },
  { label: "Keybr",           url: "https://www.keybr.com/",           icon: "📊", desc: "Adaptive typing practice with statistics" },
  { label: "Ztype",           url: "https://zty.pe/",                  icon: "🚀", desc: "Space-shooter typing game" },
  // { label: "Typeracer",    url: "https://play.typeracer.com/",       icon: "🏎", desc: "Race others in real-time typing races" },
];


/* ══════════════════════════════════════════════════════════════
   MARKETPLACE_LINKS
   Shown on: brands.html (Marketplace section)
   ══════════════════════════════════════════════════════════════
   Fields:
     label      {string}  Display name of the marketplace
     url        {string}  Full search URL (can pre-fill a keyboard search)
     icon       {string}  Emoji shown in the icon box
     desc       {string}  One-line description of the platform
     color      {string}  CSS background color of the card.
                          Use CSS vars: var(--yellow), var(--blue), var(--green),
                          var(--pink), var(--orange), var(--cyan), var(--red),
                          var(--purple), var(--teal), or any hex like "#FF6B00"
     textColor  {string}  Text color — "#111" for dark bg, "#fff" for dark bg
   ══════════════════════════════════════════════════════════════ */
const MARKETPLACE_LINKS = [
  { label: "Amazon India", url: "https://www.amazon.in/s?k=mechanical+keyboard",          icon: "📦", desc: "Fast delivery · Official brand stores · Easy returns",          color: "var(--yellow)", textColor: "#111" },
  { label: "Flipkart",     url: "https://www.flipkart.com/search?q=mechanical+keyboard",  icon: "🛒", desc: "Big Billion Days deals · Broad selection · Buyer protection",   color: "var(--blue)",   textColor: "#fff" },
  // { label: "Meesho",    url: "https://meesho.com/...",                                  icon: "🛍", desc: "Budget finds",                                                  color: "var(--pink)",   textColor: "#fff" },
];


/* ══════════════════════════════════════════════════════════════
   THIRD_PARTY_SELLERS
   Shown on: brands.html (3rd-Party Sellers section)
   ══════════════════════════════════════════════════════════════
   Fields:
     name            {string}   Store/seller display name
     url             {string}   Full URL to their storefront
     spec            {string}   Short one-line description of what they sell
     risk            {boolean}  true = show "Enter at own risk" warning badge
     warning_message {string}   Warning text shown under badge (only if risk:true)
                                Leave "" if risk is false

   Use this for resellers stocking multiple brands (not the manufacturer itself).
   ══════════════════════════════════════════════════════════════ */
const THIRD_PARTY_SELLERS = [
  { name: "Clarion Computers", url: "https://clarioncomputers.in/", spec: "PC hardware & peripherals", risk: false, warning_message: "" },
  { name: "Computech Store", url: "https://computechstore.in/", spec: "PC components & electronics", risk: false, warning_message: "" },
  { name: "EasyShoppi", url: "https://easyshoppi.com/", spec: "PC components & electronics", risk: false, warning_message: "" },
  { name: "EliteHubs", url: "https://elitehubs.com/", spec: "Gaming peripherals & components", risk: false, warning_message: "" },
  { name: "GamesnComps", url: "https://gamesncomps.com/", spec: "Gaming PCs & components", risk: false, warning_message: "" },
  { name: "MDComputers", url: "https://mdcomputers.in/", spec: "PC hardware & gaming gear", risk: false, warning_message: "" },
  { name: "PCShop", url: "https://pcshop.in/", spec: "PC hardware & accessories", risk: false, warning_message: "" },
  { name: "PCStudio (Ankit Infotech)", url: "https://pcstudio.in/", spec: "PC components & gaming hardware", risk: false, warning_message: "" },
  { name: "PrimeABGB", url: "https://primeabgb.com/", spec: "High-end PC components & builds", risk: false, warning_message: "" },
  { name: "Quickin Computers", url: "https://quickincomputers.com/", spec: "Cosmic Byte Authorized Sellers", risk: false, warning_message: "" },
  { name: "The ITDepot", url: "https://theitdepot.com/", spec: "PC hardware & networking gear", risk: false, warning_message: "" },
  { name: "TLG Gaming", url: "https://tlggaming.com/", spec: "Custom PCs & gaming hardware", risk: false, warning_message: "" },
  { name: "TPS Tech", url: "https://tpstech.in/", spec: "PC hardware & enterprise IT gear", risk: false, warning_message: "" },
  { name: "Vedant Computers", url: "https://vedantcomputers.com/", spec: "PC components & accessories", risk: false, warning_message: "" },
  { name: "Vishal Peripherals", url: "https://vishalperipherals.com/", spec: "PC components & peripherals", risk: false, warning_message: "" }

  // { name: "SketchySeller", url: "https://sketchyseller.in/",  spec: "Budget gear",           risk: true,  warning_message: "Community-reported shipping delays." },
];


/* ══════════════════════════════════════════════════════════════
   VENDORS
   Shown on: vendors.html (filterable directory) + index.html (counts)
   ══════════════════════════════════════════════════════════════
   Fields:
     name            {string}    Store display name
     url             {string}    Full URL to the vendor website
     cats            {string[]}  Array of category IDs this vendor stocks.
                                 Must use exact IDs from CAT_META:
                                   "Pre-built"   – assembled keyboards
                                   "Barebone"    – kits without switches/keycaps
                                   "Switches"    – individual switches
                                   "Keycaps"     – keycap sets
                                   "Parts/Tools" – stabs, lube, films, openers
                                   "Accessories" – cables, wrist rests, cases
                                   "Mouse"       – mice and accessories
                                   "Mousepad"	   – A mouse pad is typically 200 mm to 450 mm wide, specifically for the mouse
                                   "Deskpad"     – desk mats are from 800 mm to 1200 mm in width to accommodate both a keyboard and mouse
                                   "Glass-pad"	 – specialized glass gaming surfaces
                                   "PC Parts"    – RAM, GPUs, general PC hardware
                                   "Hall Effect" – Hall Effect switch keyboards
                                   "Alice"       – Alice/ergonomic angled layouts
                                   "Split"       – split keyboard kits
                                   "Low-Profile" – low-profile switches/keyboards
     warning         {boolean}   (optional) true = show warning badge
     warning_message {string}    (optional) Warning text. Only shown if warning:true
   ══════════════════════════════════════════════════════════════ */
const VENDORS = [
  {name:"AceKBD",         url:"https://acekbd.com/",                           cats:["Barebone","Accessories","Deskpad"]},
  {name:"AltF4Gear",      url:"https://altf4gear.com/",                        cats:["Pre-built","Hall Effect","Mouse"]},
  {name:"Arcadex",        url:"https://www.arcadex.in/",                       cats:["Hall Effect", "Mouse", "Mousepad"]},
  {name:"Conceptkart",    url:"https://conceptkart.com/pages/keyboard-mouse",  cats:["Pre-built","Hall Effect","Mouse","Accessories"]},
  {name:"Credkeys",       url:"https://credkeys.com/",                         cats:["Pre-built","Switches","Keycaps","Parts/Tools","Accessories"]},
  {name:"CtrlShiftStore", url:"https://ctrlshiftstore.com/",                   cats:["Pre-built","Low-Profile","Barebone","Alice","Hall Effect", "Keycaps","Switches","Accessories","Mouse","Mousepad","Glass-pad"]},
  {name:"Curiosity Caps", url:"https://curiositycaps.in/",                     cats:["Keycaps","Accessories","Mousepad","Deskpad","Glass-pad","PC Parts"]},
  {name:"Cybeart",        url:"https://cybeart.in/",                           cats:["Pre-built","Mouse","Mousepad"]},
  {name:"GenesisPC",      url:"https://www.genesispc.in/",                     cats:["Pre-built","Hall Effect","Keycaps","Switches","Parts/Tools","Accessories","Mouse","Mousepad","Deskpad","Glass-pad"]},
  {name:"HardwareCorpus", url:"https://hardwarecorpus.in/",                    cats:["Pre-built","Hall Effect","Barebone","Alice","Keycaps","Accessories","Mouse","Deskpad","PC Parts"],warning:true,warning_message:"Community reports mention delays and slow shipping."},
  {name:"KeebsMod",       url:"https://www.keebsmod.com/",                     cats:["Pre-built","Barebone","Keycaps","Switches","Parts/Tools","Accessories"]},
  {name:"Keychron India", url:"https://keychron.in/",                          cats:["Pre-built","Barebone","Keycaps","Switches","Parts/Tools","Accessories"]},
  {name:"Keyora",         url:"https://keyora.store/",                         cats:["Keycaps","Switches","Parts/Tools","Accessories","Deskpad"]},
  {name:"Keysync",        url:"https://www.keysync.co/",                    cats:["Keycaps"]},
  {name:"Loadout",        url:"https://www.loadout.co.in/",                    cats:["Pre-built","Hall Effect","Barebone","Keycaps","Switches","Accessories","Mouse","Mousepad","Deskpad"]},
  {name:"Meckeys",        url:"https://www.meckeys.com/",                      cats:["Pre-built","Hall Effect","Barebone","Keycaps","Switches","Parts/Tools","Accessories","Mouse","Mousepad","Deskpad"]},
  {name:"Moskeys",        url:"https://moskeys.com/",                          cats:["Pre-built","Switches","Mouse"]},
  {name:"NeoMacro",       url:"https://neomacro.in/",                          cats:["Pre-built","Hall Effect","Barebone","Split","Keycaps","Switches","Parts/Tools","Accessories","Mouse","Deskpad","Glass-pad","Mousepad"]},
  {name:"NMPC",           url:"https://nmpc.in/",                              cats:["Pre-built","Hall Effect","Mouse","Deskpad"]},
  {name:"RyuGear",        url:"https://ryugear.in/",                           cats:["Pre-built","Hall Effect","Keycaps","Accessories","Mouse","Mousepad","Glass-pad"]},
  {name:"StacksKB",       url:"https://stackskb.com/",                         cats:["Pre-built","Barebone","Split","Keycaps","Switches","Parts/Tools","Accessories"]},
  {name:"Thock Shop",     url:"https://thethockshop.com/",                     cats:["Pre-built","Alice","Switches","Accessories","Mouse"]},
  {name:"URX",            url:"https://urx.co.in/",                            cats:["Pre-built","Hall Effect","Mouse"]},
  {name:"VRKAA",          url:"https://vrkaa.com/",                            cats:["Pre-built","Hall Effect","Mouse"]},
  {name:"Waimers",        url:"https://waimers.in/",                           cats:["Hall Effect","Accessories","Switches","Mouse","Glass-pad"]},
  {name:"Xtro",           url:"https://xtro.gg/",                              cats:["Pre-built","Barebone","Hall Effect","Accessories","Mouse","PC Parts","Glass-pad"]},
  // {name:"NewVendor",   url:"https://newvendor.in/",                         cats:["Pre-built","Switches"], warning:true, warning_message:"Reports of slow shipping."},
];


/* ══════════════════════════════════════════════════════════════
   DIY_BUILDERS
   Shown on: builders.html
   ══════════════════════════════════════════════════════════════
   Fields:
     name            {string}   Builder display name
     url             {string}   Website URL. Leave "" if no website.
     icon            {string}   Emoji for the icon box (e.g. "🔧", "⚗", "🛠")
     col             {string}   Accent color — CSS variable:
                                  var(--blue) | var(--orange) | var(--purple) |
                                  var(--green) | var(--pink) | var(--cyan) |
                                  var(--red) | var(--yellow) | var(--teal)
     desc            {string}   Short description of what this builder offers
     tag             {string}   Badge label (e.g. "CUSTOM_PARTS", "SPECIALIST",
                                "BUILD_SERVICE", "CABLES", "ARTISAN", "MODS")
     warning         {boolean}  true = show a warning box on the card
     warning_message {string}   Warning text (only shown if warning:true). "" otherwise.

     ── CONTACT FIELDS (alternatives/additions to url) ──
     phone           {string}   Phone with country code: "+919876543210"
                                Leave "" to hide the 📱 Call button.
     whatsapp        {string}   WhatsApp number, digits only, with country code:
                                "919876543210" (no +, no spaces, no dashes)
                                Leave "" to hide the 💬 WhatsApp button.
     discord         {string}   Full Discord invite URL: "https://discord.gg/abc123"
                                Leave "" to hide the 🎧 Discord button.

   All non-empty contact fields render as buttons automatically.
   ══════════════════════════════════════════════════════════════ */
const DIY_BUILDERS = [
  { name:"defaultwiring", url:"https://www.instagram.com/defaultwiring", icon:"🔌",  col:"var(--text)",    desc:"Handcrafted cables with you having complete creative freedom.", tag:"CABLES", warning:false, warning_message:"", phone:"", whatsapp:"", discord:"" },
  { name:"erikaSKOOL",    url:"https://docs.google.com/document/d/1xcAW0eiM7f9JBxXdp6SL5fg15mM-IWZvxRduPwHza0M/edit?tab=t.0", icon:"🛠",  col:"var(--text)",    desc:"Keyboard repairs, soldering, desoldering, 3D design, CAD work, and 3D printing services by erikaSKOOL. Custom quotes available via Discord.", tag:"Build & Repair", warning:false, warning_message:"", phone:"", whatsapp:"", discord:"https://discord.com/users/854359832525275206"},
  { name:"Friction",      url:"https://docs.google.com/document/d/e/2PACX-1vQlbWhsI1WGu0wSb3qZKR7EIvoXzU4ZlMLlk3Xd4xf6R7GtLIC9vGeFDsoyMzWxa2y7p9L-60B5mtpP/pub",                   icon:"🛠",  col:"var(--orange)",  desc:"Work on PCBs, keyboards, and small electronics projects as a hobby.", tag:"Build & Repair",    warning:false, warning_message:"", phone:"", reddit:"https://www.reddit.com/user/_FrictioN_/submitted/", discord:"https://discord.com/users/427375238674644992", telegram:"https://t.me/squidward_07", github:"https://github.com/friction07"},
  { name:"Hawtkeys",      url:"https://hawtkeys.com/",                   icon:"🔧",  col:"var(--orange)",  desc:"Specialized Macropads components for your workspace with QMK/VIA compatibility.", tag:"Macropads",    warning:false, warning_message:"", phone:"", whatsapp:"", discord:"" },
  { name:"Keebforge",     url:"https://www.keebforge.in/",               icon:"🛠",  col:"var(--text)",    desc:"Electronics Engineer & Custom Keyboard Modder", tag:"Build & Repair", warning:false, warning_message:"", phone:"", whatsapp:"", discord:"" },
  { name:"LVL3",          url:"https://lvl3.diy/",                       icon:"⚗",   col:"var(--blue)",    desc:"split|58-columnar-key|wireless|made-to-order|preassembled keyboard kit.", tag:"SPLIT-BOARD",  warning:false, warning_message:"Currently not taking orders", phone:"", whatsapp:"", discord:"" },
  { name:"Parix",         url:"https://parix.in/",                       icon:"⚗",  col:"var(--purple)",  desc:"Hand-assembled split keyboards for developers. Built to order with open source firmware. ",    tag:"Split-Keybs", warning:false, warning_message:"", phone:"", whatsapp:"", discord:"" },
  { name:"MOOn",          url:"https://docs.google.com/document/d/e/2PACX-1vTgzL4WWdAgfIhWp30W5CC2cd7HodrE8Pbhl9rsO7SG3YdN6rYHc-2U0nX4amCVsrrW7sGc3XoDJWWP/pub",   icon:"🛠",  col:"var(--green)",   desc:"Hand-assembled split keyboards and build, repair, soldering, and 3D printing services! ", tag:"Build & Repair", warning:false, warning_message:"", phone:"", whatsapp:"9409513496", discord:"https://discord.com/users/294624472336564226" },
  { name:"MrSnek",        url:"https://mrsnek.com/",                     icon:"🌀",  col:"var(--green)",   desc:"Design, prototype, and craft our products in-house, with full creative control and attention to detail. From bold spacebars to expressive keycap sets.", tag:"KEYCAPS", warning:false, warning_message:"", phone:"", whatsapp:"", discord:"" },
  { name:"ThockFactory",  url:"https://thockfactory.com/in",            icon:"🌀",  col:"var(--green)",   desc:"Custom keycaps, designed by you and your own custom keycaps using our intuitive online configurator.", tag:"KEYCAPS", warning:false, warning_message:"", phone:"", whatsapp:"", discord:"" },
   // No-website example:
  // { name:"CablesByRaj", url:"", icon:"🌀", col:"var(--green)", desc:"Handcrafted coiled cables.", tag:"CABLES", warning:false, warning_message:"", phone:"", whatsapp:"919876543210", discord:"" },
];


/* ══════════════════════════════════════════════════════════════
   BRANDS
   Shown on: brands.html (All Brands section)
   ══════════════════════════════════════════════════════════════
   Fields:
     name            {string}   Brand display name
     url             {string}   Official India storefront URL
     spec            {string}   Short description of product line
     col             {string}   Accent color CSS variable (top card stripe):
                                  var(--blue) | var(--pink) | var(--red) |
                                  var(--cyan) | var(--orange) | var(--green) |
                                  var(--yellow) | var(--purple) | var(--teal)
     risk            {boolean}  true = shows "Enter at own risk" warning badge
     warning_message {string}   Warning text under badge (only if risk:true). "" otherwise.

   Official manufacturer storefronts only — resellers go in THIRD_PARTY_SELLERS.
   ══════════════════════════════════════════════════════════════ */
const BRANDS = [
  {name:"Ajazz",           url:"https://www.ajazz.in/",                 spec:"Ajazz Official India Store",    col:"var(--purple)", risk:false, warning_message:""},
  {name:"Ant Esports",     url:"https://antesports.com/",               spec:"Budget PC Hardware",            col:"var(--green)",  risk:false, warning_message:""},
  {name:"AULA India",      url:"https://aulaindia.com/",                spec:"Mechanical Boards",             col:"var(--blue)",   risk:false, warning_message:""},
  {name:"Binepad",         url:"https://www.binepad.in/",               spec:"Macropads & Accessories",       col:"var(--pink)",   risk:false, warning_message:""},
  {name:"Cosmic Byte",     url:"https://www.thecosmicbyte.com/",        spec:"Entry-level Gear",              col:"var(--cyan)",   risk:false, warning_message:""},
  {name:"Cybeart",         url:"https://cybeart.in/",                   spec:"Mid+ range Gaming Accessories", col:"var(--green)",  risk:false, warning_message:""},
  {name:"Dawg",            url:"https://dawgflex.com/",                 spec:"Mid+ range Gaming Accessories", col:"var(--green)",  risk:false, warning_message:""},
  {name:"EvoFox",          url:"https://www.amkette.com/pages/evofox",  spec:"Gaming Accessories",            col:"var(--orange)", risk:false, warning_message:""},
  {name:"Fingers",         url:"https://www.fingers.co.in/",            spec:"Budget tech Accessories",       col:"var(--orange)", risk:false, warning_message:""},
  {name:"Kreo Tech",       url:"https://kreo-tech.com/",                spec:"Budget Peripherals",            col:"var(--red)",    risk:false, warning_message:""},
  {name:"Portronics",      url:"https://www.portronics.com/",           spec:"Portable Tech",                 col:"var(--red)",    risk:false, warning_message:""},
  {name:"Redragon",        url:"https://www.redragon.in/",              spec:"Budget Performance",            col:"var(--red)",    risk:false, warning_message:""},
  {name:"TVS Electronics", url:"https://www.tvselectronics.in/",        spec:"Classic Mechanicals",           col:"var(--yellow)", risk:false, warning_message:""},
  {name:"UnCtrl",          url:"https://www.gameunctrl.com/",           spec:"Gaming Accessories",            col:"var(--red)",    risk:false, warning_message:""},
  {name:"Varmilo",         url:"https://varmiloindia.com/",             spec:"Premium Mechanical Keyboards",  col:"var(--purple)", risk:false, warning_message:""},
  {name:"Xtro",            url:"https://xtro.gg/",                      spec:"Indian Brand That Cares",       col:"var(--purple)", risk:false, warning_message:""},
  /*{name:"Ant Esports",     url:"https://antesports.com/",               spec:"Budget PC Hardware",      col:"var(--green)",  risk:false, warning_message:""},*/
];

/* ══════════════════════════════════════════════════════════════
   PAD_ONLY_VENDORS
   Shown on: surfaces.html (Specialist section)
   ══════════════════════════════════════════════════════════════ */
const PAD_ONLY_VENDORS = [
  { name: "Claw Gears",       url: "https://clawgears.in/",               types: ["Glass-pad"],                               specialty: "Specialized glass track surfaces",          risk: false, warning_message: "" },
  { name: "FernTech",         url: "https://ferntechworld.com/",          types: ["Mousepad","Deskpad","Glass-pad"],          specialty: "Premium performance setup mats",            risk: false, warning_message: "" },
  { name: "Mopadz",           url: "https://mopadz.com/",                 types: ["Deskpad"],                                 specialty: "Bespoke large format layout deskmats",      risk: false, warning_message: "" },
  { name: "Senpaiarts",       url: "https://senpaiarts.com/",             types: ["Mousepad","Deskpad"],                      specialty: "Artistic aesthetic setup surfaces",         risk: false, warning_message: "" },
  { name: "Veroforza",        url: "https://veroforza.com/",              types: ["Mousepad","Deskpad"],                      specialty: "Minimalist corporate & gaming layout mats", risk: false, warning_message: "" },
];

/* ════════════════════════════════════════════════════════════════
   CAT_META  ← Only edit to add a brand new filter category
   ════════════════════════════════════════════════════════════════
   Fields:
     id    {string}  Must exactly match strings in VENDORS[].cats
     label {string}  Display label on the filter button
     icon  {string}  Emoji icon
     col   {string}  Color key: yellow|green|blue|pink|orange|cyan|red|purple|black|teal
     bcls  {string}  Badge CSS class — must exist in style.css as .b-{name}

   To add a new category:
     1. Add entry here with unique id
     2. Add .b-{name} class to style.css if it doesn't exist
     3. Use the exact id in VENDORS[].cats
   ════════════════════════════════════════════════════════════════ */
const CAT_META = [
  {id:"Pre-built",   label:"Pre-built",   icon:"⌨",  col:"yellow",  bcls:"b-yellow"},
  {id:"Barebone",    label:"Barebone",    icon:"🗜",  col:"orange",  bcls:"b-orange"},
  {id:"Low-Profile", label:"Low-Profile", icon:"📏",  col:"teal",    bcls:"b-teal"},
  {id:"Split",       label:"Split",       icon:"✂",  col:"purple",  bcls:"b-purple"},
  {id:"Alice",       label:"Alice",       icon:"🌀",  col:"pink",    bcls:"b-pink"},
  {id:"Hall Effect", label:"Hall Effect", icon:"🧲",  col:"cyan",    bcls:"b-cyan"},
  {id:"Switches",    label:"Switches",    icon:"🔘",  col:"red",     bcls:"b-red"},
  {id:"Keycaps",     label:"Keycaps",     icon:"⬛",  col:"green",   bcls:"b-green"},
  {id:"Parts/Tools", label:"Parts/Tools", icon:"🔧",  col:"purple",  bcls:"b-purple"},
  {id:"Accessories", label:"Accessories", icon:"🎛",  col:"pink",    bcls:"b-pink"},
  {id:"Mouse",       label:"Mouse",       icon:"🖱",  col:"blue",    bcls:"b-blue"},
  {id:"Mousepad",   label:"Mousepad",   icon:"🔲",  col:"blue",    bcls:"b-blue"},
  {id:"Deskpad",     label:"Deskpad",     icon:"📋",  col:"teal",    bcls:"b-teal"},
  {id:"Glass-pad",   label:"Glass-pad",   icon:"◻️",  col:"teal",    bcls:"b-teal"},
  {id:"PC Parts",    label:"PC Parts",    icon:"💻",  col:"black",   bcls:"b-black"},
];

const BADGE_CLS = Object.fromEntries(CAT_META.map(c => [c.id, c.bcls]));

const CAT_ACTIVE_STYLE = {
  yellow: "background:var(--yellow);color:#111;",
  green:  "background:var(--green);color:#111;",
  blue:   "background:var(--blue);color:#fff;",
  pink:   "background:var(--pink);color:#fff;",
  orange: "background:var(--orange);color:#fff;",
  cyan:   "background:var(--cyan);color:#111;",
  red:    "background:var(--red);color:#fff;",
  purple: "background:var(--purple);color:#fff;",
  black:  "background:#111;color:#fff;",
  teal:   "background:var(--teal);color:#fff;",
};


/* ════════════════════════════════════════════════════════════════
   INTERNAL SITE FUNCTIONS — Execution Engines
   ════════════════════════════════════════════════════════════════ */

function initCursor() {
  const cur = document.getElementById("cursor");
  if (!cur || !window.matchMedia("(pointer:fine)").matches) return;
  document.addEventListener("mousemove", e => {
    cur.style.left = e.clientX + "px";
    cur.style.top  = e.clientY + "px";
  });
  document.addEventListener("mouseleave", () => cur.classList.add("off"));
  document.addEventListener("mouseenter", () => cur.classList.remove("off"));
  document.querySelectorAll("a,button,input,textarea,.cat-btn").forEach(el => {
    el.addEventListener("mouseenter", () => cur.classList.add("big"));
    el.addEventListener("mouseleave", () => cur.classList.remove("big"));
  });
}

function initProgress() {
  const bar = document.getElementById("prog");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    bar.style.width = ((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100) + "%";
  }, { passive: true });
}

function initNav() {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });
  const ham = document.getElementById("ham");
  const mob = document.getElementById("mob-nav");
  const cls = document.getElementById("mob-close");
  ham?.addEventListener("click", () => { ham.classList.toggle("open"); mob.classList.toggle("open"); });
  cls?.addEventListener("click", () => { ham.classList.remove("open"); mob.classList.remove("open"); });
  document.querySelectorAll("#mob-nav a").forEach(a => a.addEventListener("click", () => {
    ham.classList.remove("open"); mob.classList.remove("open");
  }));
}

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .08 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

function animCount(el) {
  const target = parseInt(el.dataset.count);
  const dur = 1100; const start = performance.now();
  (function up(now) {
    const t = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.floor(ease * target) + (el.dataset.suffix || "");
    if (t < 1) requestAnimationFrame(up);
  })(start);
}

function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animCount(e.target); io.unobserve(e.target); } });
  }, { threshold: .3 });
  document.querySelectorAll("[data-count]").forEach(el => io.observe(el));
}

function updateStatCounts() {
  document.querySelectorAll("[data-stat='vendors']").forEach(el => el.textContent = VENDORS.length);
  document.querySelectorAll("[data-stat='builders']").forEach(el => el.textContent = DIY_BUILDERS.length);
  document.querySelectorAll("[data-stat='brands']").forEach(el => el.textContent = BRANDS.length);
}

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initProgress();
  initNav();
  initReveal();
  initCounters();
  updateStatCounts();
});
