/* ════════════════════════════════════════════════════════════════
   KEYDIR.in — Announcement Popup Panel
   ════════════════════════════════════════════════════════════════
   Drop this file in /assets/js/ and add this to every page's <head>:
     <script src="/assets/js/keydir-popup.js" defer></script>

   Or paste the entire contents at the bottom of shared.js
   ════════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════════
   POPUP DATA — edit this section to update announcements
   ══════════════════════════════════════════════════════════════ */
const POPUP_DATA = {

  /* Version string — increment this to force re-show to ALL visitors */
  version: "31-08-2026",

  /* ── NEW VENDORS ── */
  new_vendors: [
    {
      name: "Moddest",
      url: "https://www.moddest.in/",
      cats: ["Keycaps","Split","Accessories"],
      added: "August 2026"
    },
    {
      name: "LethalBlack",
      url: "https://www.lethalblack.com/",
      cats: ["Prebuild"],
      added: "August 2026"
    },
    {
      name: "Keysync",
      url: "https://www.keysync.co/",
      cats: ["Keycaps"],
      added: "August 2026"
    },
    {
      name: "VRKAA",
      url: "https://vrkaa.com/",
      cats: ["Pre-built","Hall Effect","Mouse"],
      added: "August 2026"
    },    
  ],

  /* ── UPDATES / CHANGELOG ── */
  updates: [
    { icon: "⌨", text: "App.Keydir.in is under active development!" },
    { icon: "⌨", text: "Launched a dedicated Group Buys page." },
    { icon: "📱", text: "Introduced a Contact page for community submissions and inquiries." },
    { icon: "🛠", text: "Expanded the Builders section with 9 new listings." },
    { icon: "⬛", text: "Created separate Mousepad and Glass Pad pages under Surfaces." },
    { icon: "🏪", text: "Vendor count increased from 19 to 24." },
  ],

};

/* ══════════════════════════════════════════════════════════════
   SINGLE STORAGE KEY — replaces the old two-key system
   Stores: { version: string, timestamp: number }
   ══════════════════════════════════════════════════════════════ */
const KD_POPUP_KEY = "kd-popup-state";
const RE_SHOW_DAYS = 30;
const RE_SHOW_MS = RE_SHOW_DAYS * 24 * 60 * 60 * 1000;

function getPopupState() {
  try { return JSON.parse(localStorage.getItem(KD_POPUP_KEY)); }
  catch { return null; }
}

function shouldShowPopup() {
  const state = getPopupState();
  if (!state) return true;                              // new visitor — never seen
  if (state.version !== POPUP_DATA.version) return true; // content updated
  return (Date.now() - state.timestamp) > RE_SHOW_MS;   // 30 days elapsed
}

function markPopupSeen() {
  localStorage.setItem(KD_POPUP_KEY, JSON.stringify({
    version: POPUP_DATA.version,
    timestamp: Date.now()
  }));
}

/* Migration: remove old keys left by previous versions */
try {
  localStorage.removeItem("kd-popup-seen");
  localStorage.removeItem("keydir_popup_last_seen");
} catch {}

/* ══════════════════════════════════════════════════════════════
   POPUP STYLES
   ══════════════════════════════════════════════════════════════ */
(function injectPopupStyles() {
  const style = document.createElement("style");
  style.id = "kd-popup-styles";
  style.textContent = `
    /* Overlay */
    #kd-overlay {
      position: fixed; inset: 0; z-index: 9000;
      background: rgba(0,0,0,.55);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: kd-fade-in .2s ease;
    }
    @keyframes kd-fade-in { from { opacity: 0 } to { opacity: 1 } }
    @keyframes kd-slide-up { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: none } }

    /* ── LIGHT MODE base variables ── */
    #kd-panel {
      --kd-bg:           #FFFCF0;
      --kd-bg-alt:       #F5F2E4;
      --kd-surface:      #FFFCF0;
      --kd-surface-hover:#F5F2E4;
      --kd-border:       #111111;
      --kd-shadow:       #111111;
      --kd-text:         #111111;
      --kd-text-muted:   #444444;
      --kd-text-dim:     #777777;
      --kd-yellow:       #FAFF00;
      --kd-green:        #00FF6A;
      --kd-badge-bg:     #FFFCF0;
      --kd-badge-text:   #111111;
      --kd-num-bg:       #111111;
      --kd-num-text:     #FFFCF0;
      --kd-btn-bg:       #111111;
      --kd-btn-text:     #FFFCF0;
      --kd-icon-box-bg:  #F5F2E4;
      --kd-footer-note:  #888888;
      --kd-tab-inactive-text: #555555;
      --kd-terms-border: #cccccc;
    }

    /* ── DARK MODE variable overrides ── */
    [data-theme="dark"] #kd-panel {
      --kd-bg:           #1A1A1A;
      --kd-bg-alt:       #242424;
      --kd-surface:      #1E1E1E;
      --kd-surface-hover:#2A2A2A;
      --kd-border:       #444444;
      --kd-shadow:       #000000;
      --kd-text:         #F0F0F0;
      --kd-text-muted:   #BBBBBB;
      --kd-text-dim:     #888888;
      --kd-yellow:       #FAFF00;
      --kd-green:        #00FF6A;
      --kd-badge-bg:     #2E2E2E;
      --kd-badge-text:   #E0E0E0;
      --kd-num-bg:       #FAFF00;
      --kd-num-text:     #111111;
      --kd-btn-bg:       #FAFF00;
      --kd-btn-text:     #111111;
      --kd-icon-box-bg:  #2A2A2A;
      --kd-footer-note:  #555555;
      --kd-tab-inactive-text: #AAAAAA;
      --kd-terms-border: #333333;
    }

    /* Panel */
    #kd-panel {
      background: var(--kd-bg);
      border: 3px solid var(--kd-border);
      box-shadow: 12px 12px 0 var(--kd-shadow);
      width: 100%; max-width: 580px;
      max-height: 88vh;
      display: flex; flex-direction: column;
      animation: kd-slide-up .28s ease;
      position: relative;
      overflow: hidden;
    }

    /* Header bar */
    #kd-header {
      background: #111111;
      color: var(--kd-yellow);
      padding: 14px 20px;
      display: flex; align-items: center; justify-content: space-between;
      border-bottom: 3px solid #111111;
      flex-shrink: 0;
    }
    [data-theme="dark"] #kd-header {
      background: #000000;
      border-bottom-color: #000000;
    }
    #kd-header-left {
      display: flex; align-items: center; gap: 10px;
    }
    #kd-header-dot {
      width: 9px; height: 9px; background: var(--kd-green);
      border-radius: 50%; animation: blink 1s step-end infinite; flex-shrink: 0;
    }
    @keyframes blink { 50% { opacity: 0; } }
    #kd-header-title {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .72rem; font-weight: 800; letter-spacing: .1em;
      text-transform: uppercase; color: var(--kd-yellow);
    }
    #kd-version-tag {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .62rem; color: #777; letter-spacing: .06em;
    }
    #kd-close {
      background: var(--kd-yellow); color: #111;
      border: 2px solid var(--kd-yellow);
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .72rem; font-weight: 800; padding: 4px 12px;
      cursor: pointer; text-transform: uppercase; letter-spacing: .06em;
      transition: all .12s; flex-shrink: 0;
    }
    #kd-close:hover { background: #fff; border-color: #fff; }

    /* Tab bar */
    #kd-tabs {
      display: flex;
      border-bottom: 2px solid var(--kd-border);
      background: var(--kd-bg);
      flex-shrink: 0;
    }
    .kd-tab {
      flex: 1; padding: 11px 10px;
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .7rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: .06em;
      color: var(--kd-tab-inactive-text);
      border: none; background: transparent; cursor: pointer;
      border-right: 2px solid var(--kd-border);
      transition: all .12s;
      display: flex; align-items: center; justify-content: center; gap: 6px;
    }
    .kd-tab:last-child { border-right: none; }
    .kd-tab:hover { background: var(--kd-bg-alt); }
    .kd-tab.active {
      background: var(--kd-yellow);
      color: #111111;
      border-bottom: 2px solid var(--kd-yellow);
    }
    .kd-tab-badge {
      background: var(--kd-green); color: #111;
      font-size: .58rem; font-weight: 800; padding: 2px 6px;
      border: 1px solid var(--kd-border);
      min-width: 18px; text-align: center;
    }
    .kd-tab.active .kd-tab-badge {
      background: #111; color: var(--kd-yellow);
      border-color: #111;
    }
    [data-theme="dark"] .kd-tab.active .kd-tab-badge {
      background: #111; color: var(--kd-yellow);
    }

    /* Body */
    #kd-body {
      overflow-y: auto; flex: 1; padding: 0;
      background: var(--kd-bg);
    }
    #kd-body::-webkit-scrollbar { width: 4px; }
    #kd-body::-webkit-scrollbar-track { background: var(--kd-bg-alt); }
    #kd-body::-webkit-scrollbar-thumb { background: var(--kd-border); }

    /* Panels */
    .kd-panel-content { display: none; }
    .kd-panel-content.active { display: block; }

    /* New vendor cards */
    .kd-vendor-card {
      border-bottom: 2px solid var(--kd-border);
      padding: 18px 20px;
      display: flex; align-items: flex-start; gap: 14px;
      background: var(--kd-surface);
      transition: background .1s;
    }
    .kd-vendor-card:hover { background: var(--kd-surface-hover); }
    .kd-vendor-card:last-child { border-bottom: none; }

    .kd-vendor-num {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .6rem; font-weight: 800;
      background: var(--kd-num-bg);
      color: var(--kd-num-text);
      padding: 2px 6px; flex-shrink: 0; margin-top: 2px; letter-spacing: .04em;
    }

    .kd-vendor-info { flex: 1; min-width: 0; }
    .kd-vendor-name {
      font-family: var(--f-d, 'Space Grotesk', sans-serif);
      font-size: 1.05rem; font-weight: 800; text-transform: uppercase;
      letter-spacing: -.03em;
      color: var(--kd-text);
      margin-bottom: 6px;
    }
    .kd-vendor-cats { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 8px; }
    .kd-cat-badge {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .6rem; font-weight: 700; text-transform: uppercase;
      padding: 2px 8px;
      border: 2px solid var(--kd-border);
      letter-spacing: .04em;
      background: var(--kd-badge-bg);
      color: var(--kd-badge-text);
    }
    .kd-vendor-meta {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .62rem; color: var(--kd-text-dim);
      display: flex; align-items: center; gap: 6px;
    }
    .kd-added-dot {
      width: 5px; height: 5px;
      background: var(--kd-green);
      border-radius: 50%;
    }

    .kd-visit-btn {
      display: inline-flex; align-items: center; gap: 5px;
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .68rem; font-weight: 700; text-transform: uppercase;
      padding: 6px 12px;
      background: var(--kd-btn-bg);
      color: var(--kd-btn-text);
      border: 2px solid var(--kd-border);
      text-decoration: none; flex-shrink: 0;
      box-shadow: 3px 3px 0 var(--kd-shadow);
      transition: all .12s; align-self: center;
    }
    .kd-visit-btn:hover {
      background: var(--kd-yellow); color: #111;
      box-shadow: 1px 1px 0 var(--kd-shadow);
      transform: translate(2px, 2px);
    }

    /* Updates list */
    .kd-update-item {
      display: flex; align-items: flex-start; gap: 14px;
      padding: 16px 20px;
      border-bottom: 2px solid var(--kd-border);
      background: var(--kd-surface);
      transition: background .1s;
    }
    .kd-update-item:hover { background: var(--kd-surface-hover); }
    .kd-update-item:last-child { border-bottom: none; }
    .kd-update-icon {
      font-size: 1.1rem; flex-shrink: 0;
      width: 36px; height: 36px;
      border: 2px solid var(--kd-border);
      display: flex; align-items: center; justify-content: center;
      background: var(--kd-icon-box-bg);
      box-shadow: 2px 2px 0 var(--kd-shadow);
    }
    .kd-update-text {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .78rem; line-height: 1.7;
      color: var(--kd-text-muted);
      padding-top: 6px;
    }

    /* Terms panel */
    #kd-terms-panel { padding: 24px 20px; }
    .kd-terms-intro {
      background: var(--kd-yellow);
      border: 2px solid var(--kd-border);
      padding: 14px 16px;
      box-shadow: 4px 4px 0 var(--kd-shadow);
      margin-bottom: 20px;
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .8rem; line-height: 1.8; color: #111;
    }
    [data-theme="dark"] .kd-terms-intro {
      background: #2A2800;
      color: var(--kd-yellow);
    }
    .kd-terms-intro strong { font-weight: 800; }
    .kd-terms-item {
      display: flex; align-items: flex-start; gap: 12px;
      padding: 12px 0;
      border-bottom: 1px solid var(--kd-terms-border);
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .78rem; line-height: 1.7;
      color: var(--kd-text-muted);
    }
    .kd-terms-item:last-of-type { border-bottom: none; margin-bottom: 20px; }
    .kd-terms-icon { font-size: .9rem; flex-shrink: 0; margin-top: 2px; }
    .kd-terms-full-btn {
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 18px;
      border: 2px solid var(--kd-border);
      background: var(--kd-btn-bg);
      color: var(--kd-btn-text);
      text-decoration: none;
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .78rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: .06em;
      box-shadow: 4px 4px 0 var(--kd-shadow);
      transition: all .12s;
    }
    .kd-terms-full-btn:hover {
      background: var(--kd-yellow); color: #111;
      box-shadow: 2px 2px 0 var(--kd-shadow);
      transform: translate(2px, 2px);
    }

    /* Footer */
    #kd-footer {
      background: #111111;
      padding: 10px 20px;
      display: flex; align-items: center; justify-content: space-between;
      flex-shrink: 0;
      border-top: 2px solid var(--kd-border);
    }
    [data-theme="dark"] #kd-footer {
      background: #000000;
    }
    #kd-footer-note {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .62rem;
      color: var(--kd-footer-note);
      letter-spacing: .06em;
    }
    #kd-dismiss-btn {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .68rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: .06em;
      background: transparent;
      color: var(--kd-green);
      border: 2px solid var(--kd-green);
      padding: 5px 14px; cursor: pointer; transition: all .12s;
    }
    #kd-dismiss-btn:hover {
      background: var(--kd-green); color: #111;
    }

    @media (max-width: 480px) {
      #kd-panel { max-width: 100%; margin: 0; }
      #kd-overlay { padding: 0; align-items: flex-end; }
      #kd-panel {
        border-left: none; border-right: none; border-bottom: none;
        box-shadow: 0 -6px 0 #111;
        max-height: 80vh;
      }
      .kd-tab { font-size: .6rem; padding: 9px 6px; }
    }
  `;
  document.head.appendChild(style);
})();


/* ══════════════════════════════════════════════════════════════
   POPUP RENDERER
   ══════════════════════════════════════════════════════════════ */
function buildKeyDirPopup(force = false) {
  const { new_vendors, updates, version } = POPUP_DATA;

  /* ── Skip if already dismissed for this version (unless forced) ── */
  if (!force) {
    const state = getPopupState();
    if (state && state.version === version) return;
  }

  /* ── Prevent duplicate overlays ── */
  const existing = document.getElementById("kd-overlay");
  if (existing) return;

  /* ── Build HTML ── */
  const overlay = document.createElement("div");
  overlay.id = "kd-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "KEYDIR.in Announcements");

  overlay.innerHTML = `
    <div id="kd-panel">

      <!-- Header -->
      <div id="kd-header">
        <div id="kd-header-left">
          <div id="kd-header-dot"></div>
          <div id="kd-header-title">// KEYDIR_UPDATES</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <span id="kd-version-tag">v${version}</span>
          <button id="kd-close" aria-label="Close announcement">[ X ]</button>
        </div>
      </div>

      <!-- Tab bar -->
      <div id="kd-tabs" role="tablist">
        <button class="kd-tab active" data-panel="vendors" role="tab" aria-selected="true">
          🏪 New Vendors
          <span class="kd-tab-badge">${new_vendors.length}</span>
        </button>
        <button class="kd-tab" data-panel="updates" role="tab" aria-selected="false">
          📋 Updates
          <span class="kd-tab-badge">${updates.length}</span>
        </button>
        <button class="kd-tab" data-panel="terms" role="tab" aria-selected="false">
          📖 T&amp;C
        </button>
      </div>

      <!-- Body -->
      <div id="kd-body">

        <!-- Panel: New vendors -->
        <div class="kd-panel-content active" id="kd-panel-vendors">
          ${new_vendors.map((v, i) => `
            <div class="kd-vendor-card">
              <span class="kd-vendor-num">NEW_${String(i + 1).padStart(2, "0")}</span>
              <div class="kd-vendor-info">
                <div class="kd-vendor-name">${v.name}</div>
                <div class="kd-vendor-cats">
                  ${v.cats.map(c => `<span class="kd-cat-badge">${c}</span>`).join("")}
                </div>
                <div class="kd-vendor-meta">
                  <span class="kd-added-dot"></span>
                  Added ${v.added}
                </div>
              </div>
              <a href="${v.url}" target="_blank" rel="noopener" class="kd-visit-btn">
                VISIT ↗
              </a>
            </div>
          `).join("")}
        </div>

        <!-- Panel: Updates -->
        <div class="kd-panel-content" id="kd-panel-updates">
          ${updates.map(u => `
            <div class="kd-update-item">
              <div class="kd-update-icon">${u.icon}</div>
              <div class="kd-update-text">${u.text}</div>
            </div>
          `).join("")}
        </div>

        <!-- Panel: Terms -->
        <div class="kd-panel-content" id="kd-panel-terms">
          <div id="kd-terms-panel">
            <div class="kd-terms-intro">
              <strong>KEYDIR.in is a free, non-commercial, community-maintained directory.</strong><br/>
              No ads. No affiliate links. No sponsored placements. Ever.
            </div>

            <div class="kd-terms-item">
              <span class="kd-terms-icon">✓</span>
              <span>You may fork and adapt the project for non-commercial use with attribution.</span>
            </div>
            <div class="kd-terms-item">
              <span class="kd-terms-icon">✓</span>
              <span>Directory data may be used for personal research, education, and community discussion.</span>
            </div>
            <div class="kd-terms-item">
              <span class="kd-terms-icon">✗</span>
              <span>Commercial use, reselling data, or monetizing forks is strictly prohibited.</span>
            </div>
            <div class="kd-terms-item">
              <span class="kd-terms-icon">⚠</span>
              <span>Directory data may be incomplete or outdated. Always verify vendors independently before purchasing.</span>
            </div>
            <div class="kd-terms-item">
              <span class="kd-terms-icon">⚠</span>
              <span>KEYDIR.in and its maintainers are not responsible for purchase decisions, vendor reliability, or any financial loss.</span>
            </div>

            <a href="/terms-and-conditions/" class="kd-terms-full-btn">
              <span>Read Full Terms &amp; Conditions</span>
              <span>→</span>
            </a>
          </div>
        </div>

      </div><!-- /#kd-body -->

      <!-- Footer -->
      <div id="kd-footer">
        <span id="kd-footer-note">// NO_ADS · NO_AFFILIATES · COMMUNITY_POWERED</span>
        <button id="kd-dismiss-btn">GOT IT ✓</button>
      </div>

    </div><!-- /#kd-panel -->
  `;

  document.body.appendChild(overlay);

  /* ── Tab switching ── */
  const tabs = overlay.querySelectorAll(".kd-tab");
  const panels = overlay.querySelectorAll(".kd-panel-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
      panels.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      const target = overlay.querySelector(`#kd-panel-${tab.dataset.panel}`);
      if (target) target.classList.add("active");
    });
  });

  /* ── Close / dismiss ── */
  function closePopup() {
    overlay.style.animation = "kd-fade-in .18s ease reverse";
    setTimeout(() => overlay.remove(), 180);
    markPopupSeen();
  }

  overlay.querySelector("#kd-close").addEventListener("click", closePopup);
  overlay.querySelector("#kd-dismiss-btn").addEventListener("click", closePopup);

  /* Close on backdrop click */
  overlay.addEventListener("click", e => { if (e.target === overlay) closePopup(); });

  /* Close on Escape */
  document.addEventListener("keydown", function escHandler(e) {
    if (e.key === "Escape") { closePopup(); document.removeEventListener("keydown", escHandler); }
  });
}

/* ══════════════════════════════════════════════════════════════
   AUTO-SHOW on DOMContentLoaded
   ══════════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  if (shouldShowPopup()) {
    setTimeout(() => buildKeyDirPopup(), 600);
  }
});