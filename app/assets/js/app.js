/* KEYDIR — Documentation & Legal Center
   Shared chrome: topbar, search, mobile nav, footer.
   Vanilla JS. No dependencies.
   ponytail: full chrome injected from JS to avoid duplicating nav/footer
   across 18 static pages. Add a build step only if this becomes painful. */
(function () {
  'use strict';

  var SITE = 'https://keydir.in';

  /* Client-side search index — keep in sync with the real pages */
  var DOCS = [
    { url: '/app/',            title: 'Documentation & Legal Center', section: 'Start', kw: 'home start index documentation center' },
    { url: '/app/terms/',      title: 'Terms of Service',             section: 'Legal', kw: 'terms service agreement use tos contract binding' },
    { url: '/app/privacy/',    title: 'Privacy Policy',               section: 'Legal', kw: 'privacy personal data information collection rights' },
    { url: '/app/cookies/',    title: 'Cookie Policy',                section: 'Legal', kw: 'cookies analytics preferences storage browser' },
    { url: '/app/disclaimer/', title: 'Disclaimer',                   section: 'Legal', kw: 'disclaimer warranty liability no endorsement advice' },
    { url: '/app/dmca/',       title: 'DMCA / Copyright',             section: 'Legal', kw: 'dmca copyright takedown counter notice infringement' },
    { url: '/app/licenses/',   title: 'Licenses',                     section: 'Legal', kw: 'license open source community use attribution rights' },
    { url: '/app/community-guidelines/', title: 'Community Guidelines', section: 'Community', kw: 'community guidelines conduct rules be kind moderation' },
    { url: '/app/acceptable-use/', title: 'Acceptable Use Policy',    section: 'Community', kw: 'acceptable use prohibited conduct abuse scraping spam' },
    { url: '/app/voting-policy/', title: 'Voting Policy',             section: 'Community', kw: 'voting votes ratings reviews integrity duplicate' },
    { url: '/app/listing-policy/', title: 'Listing Policy',           section: 'Community', kw: 'listing directory vendor builder brand submit eligibility' },
    { url: '/app/vendor-policy/', title: 'Vendor Policy',             section: 'Community', kw: 'vendor policy seller storefront data accuracy' },
    { url: '/app/builder-policy/', title: 'Builder Policy',           section: 'Community', kw: 'builder custom keyboard diy portfolio service' },
    { url: '/app/brand-policy/', title: 'Brand Policy',               section: 'Community', kw: 'brand trademark storefront authorized seller ip' },
    { url: '/app/price-policy/', title: 'Price Tracking Policy',      section: 'Platform', kw: 'price tracking pricing inr cost accuracy listing' },
    { url: '/app/security/',    title: 'Security',                    section: 'Platform', kw: 'security vulnerability responsible disclosure report' },
    { url: '/app/contact/',     title: 'Contact',                     section: 'Support', kw: 'contact email github support help feedback' }
  ];

  /* ── Build shared chrome ── */
  var path = location.pathname.replace(/\/+$/, '') + '/';

  var footer = [
    '<footer>',
    '<div class="footer-inner">',
      '<div>',
        '<div class="f-logo">⌨ KEYDIR.in</div>',
        '<div class="f-desc">Community-maintained directory of Indian mechanical keyboard vendors, builders and brands. No affiliate links. No ads. This is the official documentation and legal center.</div>',
        '<div class="f-social">',
          '<a href="https://github.com/SHADOW269/Keydir.in" target="_blank" rel="noopener">GitHub ↗</a>',
          '<a href="https://discord.gg/keydir" target="_blank" rel="noopener">Discord ↗</a>',
          '<a href="mailto:officialkeydir.in@gmail.com">Email</a>',
        '</div>',
      '</div>',
      '<div class="f-col">',
        '<h4>Legal</h4>',
        '<ul>',
          '<li><a href="/app/terms/">Terms of Service</a></li>',
          '<li><a href="/app/privacy/">Privacy Policy</a></li>',
          '<li><a href="/app/cookies/">Cookie Policy</a></li>',
          '<li><a href="/app/disclaimer/">Disclaimer</a></li>',
          '<li><a href="/app/dmca/">DMCA</a></li>',
          '<li><a href="/app/licenses/">Licenses</a></li>',
        '</ul>',
      '</div>',
      '<div class="f-col">',
        '<h4>Community</h4>',
        '<ul>',
          '<li><a href="/app/community-guidelines/">Community Guidelines</a></li>',
          '<li><a href="/app/acceptable-use/">Acceptable Use</a></li>',
          '<li><a href="/app/voting-policy/">Voting Policy</a></li>',
          '<li><a href="/app/listing-policy/">Listing Policy</a></li>',
          '<li><a href="/app/vendor-policy/">Vendor Policy</a></li>',
          '<li><a href="/app/builder-policy/">Builder Policy</a></li>',
          '<li><a href="/app/brand-policy/">Brand Policy</a></li>',
        '</ul>',
      '</div>',
      '<div class="f-col">',
        '<h4>Platform</h4>',
        '<ul>',
          '<li><a href="/app/security/">Security</a></li>',
          '<li><a href="/app/price-policy/">Price Tracking</a></li>',
          '<li><a href="https://keydir.in/guide/" target="_blank" rel="noopener">How KeyDir Works</a></li>',
          '<li><a href="https://keydir.in/" target="_blank" rel="noopener">Directory Home</a></li>',
          '<li><a href="https://app.keydir.in" target="_blank" rel="noopener">The App</a></li>',
        '</ul>',
      '</div>',
      '<div class="f-col">',
        '<h4>Support</h4>',
        '<ul>',
          '<li><a href="/app/contact/">Contact</a></li>',
          '<li><a href="/app/contact/#report-abuse">Report Abuse</a></li>',
          '<li><a href="/app/contact/#data-removal">Request Data Removal</a></li>',
          '<li><a href="https://github.com/SHADOW269/Keydir.in/issues" target="_blank" rel="noopener">GitHub Issues</a></li>',
        '</ul>',
      '</div>',
    '</div>',
    '<div class="f-bottom">',
      '<div class="f-copy">© 2026 KEYDIR.in // COMMUNITY PROJECT // NOT AFFILIATED WITH ANY VENDOR // DOCS v1.0</div>',
      '<div class="f-meta">',
        '<span>Version v1.0</span>',
        '<span>Last updated 2026-07-31</span>',
      '</div>',
    '</div>',
    '<div class="f-watermark">KEYDIR</div>',
    '</footer>'
  ].join('\n');

  var navActive = function (url) {
    return url === '/app/' ? (path === '/app/') : path.indexOf(url) === 0;
  };

  var topbar = [
    '<a class="skip-link" href="#main">Skip to content</a>',
    '<header class="topbar">',
    '<div class="topbar-inner">',
      '<a class="brand" href="/app/"><span>⌨</span> KEYDIR<span class="brand-doc">DOCS</span></a>',
      '<nav class="topnav" aria-label="Primary">',
        '<a href="' + SITE + '/" ' + '>_Back to Home</a>',
        '<a href="https://app.keydir.in" target="_blank" rel="noopener">_Back to App</a>',
        '<a href="/app/" ' + (path === '/app/' ? 'class="active"' : '') + '>_Documentation</a>',
      '</nav>',
      '<div class="search" role="search">',
        '<input type="search" id="search-input" placeholder="Search documentation…" aria-label="Search documentation" autocomplete="off" aria-controls="search-results">',
        '<div class="search-results" id="search-results" hidden></div>',
      '</div>',
      '<button class="nav-ham" id="ham" aria-label="Open menu" aria-expanded="false" aria-controls="mob-nav"><span></span><span></span><span></span></button>',
    '</div>',
    '</header>'
  ].join('\n');

  var mobGroups = function () {
    var order = [['Start', '/app/', 'Documentation'], ['Legal', ['terms','privacy','cookies','disclaimer','dmca','licenses']], ['Community', ['community-guidelines','acceptable-use','voting-policy','listing-policy','vendor-policy','builder-policy','brand-policy']], ['Platform & Support', ['price-policy','security','contact']]];
    var html = '';
    order.forEach(function (g) {
      html += '<div class="mob-group">// ' + g[0] + '</div>';
      if (typeof g[1] === 'string') {
        html += '<a href="' + g[1] + '">_Home</a>';
      } else {
        g[1].forEach(function (slug) {
          var d = DOCS.filter(function (x) { return x.url.indexOf('/' + slug + '/') !== -1; })[0];
          html += '<a href="' + d.url + '">_' + d.title + '</a>';
        });
      }
    });
    html += '<div class="mob-group">// Elsewhere</div>';
    html += '<a href="https://keydir.in/">_Back to Home</a>';
    html += '<a href="https://app.keydir.in" target="_blank" rel="noopener">_Back to App</a>';
    return html;
  };

  var mobNav = '<div id="mob-nav" role="dialog" aria-modal="true" aria-label="Menu"><button id="mob-close">[ X ]</button>' + mobGroups() + '</div>';

  document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('afterbegin', topbar + mobNav);
    document.body.insertAdjacentHTML('beforeend', footer);

    /* ── Mobile menu ── */
    var ham = document.getElementById('ham');
    var mob = document.getElementById('mob-nav');
    var close = document.getElementById('mob-close');
    function setMenu(open) {
      mob.classList.toggle('open', open);
      ham.classList.toggle('open', open);
      ham.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) close.focus();
    }
    ham.addEventListener('click', function () { setMenu(!mob.classList.contains('open')); });
    close.addEventListener('click', function () { setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mob.classList.contains('open')) setMenu(false);
    });
    mob.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setMenu(false);
    });

    /* ── Search ── */
    var input = document.getElementById('search-input');
    var resultsBox = document.getElementById('search-results');
    if (input) {
      var selected = -1;
      var render = function (items) {
        if (!items.length) {
          resultsBox.innerHTML = '<div class="search-empty">No results — try "privacy" or "vendor".</div>';
          return;
        }
        resultsBox.innerHTML = '';
        items.forEach(function (d, i) {
          var a = document.createElement('a');
          a.href = d.url;
          a.innerHTML = '<span class="sr-t">' + d.title + '</span><span class="sr-s">' + d.section + ' // ' + d.url.replace(/\/app/g, '/docs') + '</span>';
          a.addEventListener('mouseenter', function () { selected = i; paint(); });
          resultsBox.appendChild(a);
        });
        resultsBox.querySelectorAll('a')[selected] && resultsBox.querySelectorAll('a')[selected].focus();
      };
      var paint = function () {
        var links = resultsBox.querySelectorAll('a');
        links.forEach(function (a, i) { a.classList.toggle('hl', i === selected); });
      };
      input.addEventListener('input', function () {
        var q = input.value.trim().toLowerCase();
        if (!q) { resultsBox.hidden = true; return; }
        selected = -1;
        var items = DOCS
          .filter(function (d) {
            return (d.title + ' ' + d.section + ' ' + d.kw).toLowerCase().indexOf(q) !== -1;
          })
          .slice(0, 8);
        render(items);
        resultsBox.hidden = false;
      });
      input.addEventListener('keydown', function (e) {
        var links = resultsBox.querySelectorAll('a');
        if (e.key === 'ArrowDown' && links.length) { e.preventDefault(); selected = (selected + 1) % links.length; paint(); links[selected].focus(); }
        if (e.key === 'ArrowUp' && links.length) { e.preventDefault(); selected = (selected - 1 + links.length) % links.length; paint(); links[selected].focus(); }
        if (e.key === 'Escape') { resultsBox.hidden = true; input.blur(); }
      });
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.search')) resultsBox.hidden = true;
      });
    }

    /* ── TOC active state ── */
    var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.toc-list a'));
    if (tocLinks.length && 'IntersectionObserver' in window) {
      var heads = tocLinks.map(function (a) {
        return document.querySelector(a.getAttribute('href'));
      }).filter(Boolean);
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          tocLinks.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id); });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      heads.forEach(function (h) { io.observe(h); });
    }
  });
})();
