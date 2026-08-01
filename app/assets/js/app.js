/* KEYDIR — KeyDir Application Documentation Portal
   Shared chrome: topbar, search, mobile nav, footer.
   Vanilla JS. No dependencies.
   ponytail: full chrome injected from JS to avoid duplicating nav/footer
   across static pages. Add a build step only if this becomes painful. */
(function () {
  'use strict';

  var SITE = 'https://keydir.in';
  var APP = 'https://app.keydir.in';

  /* Client-side search index — keep in sync with the real pages */
  var DOCS = [
    { url: '/app/',            title: 'Documentation Portal',           section: 'Start',     kw: 'home start index documentation portal app' },
    { url: '/app/terms/',      title: 'Terms of Service',               section: 'Legal',     kw: 'terms service agreement use tos contract binding' },
    { url: '/app/privacy/',    title: 'Privacy Policy',                 section: 'Legal',     kw: 'privacy personal data information collection rights' },
    { url: '/app/cookies/',    title: 'Cookie Policy',                  section: 'Legal',     kw: 'cookies analytics preferences storage browser' },
    { url: '/app/disclaimer/', title: 'Disclaimer',                     section: 'Legal',     kw: 'disclaimer warranty liability no endorsement advice' },
    { url: '/app/dmca/',       title: 'DMCA / Copyright',               section: 'Legal',     kw: 'dmca copyright takedown counter notice infringement' },
    { url: '/app/acceptable-use/', title: 'Acceptable Use Policy',      section: 'Legal',     kw: 'acceptable use prohibited conduct abuse scraping spam' },
    { url: '/app/user-content/', title: 'User Content Policy',          section: 'Legal',     kw: 'user content submissions reviews votes license rights' },
    { url: '/app/data-removal/', title: 'Data Removal Request',         section: 'Legal',     kw: 'data removal delete erasure privacy request personal' },
    { url: '/app/licenses/',   title: 'Licenses',                       section: 'Legal',     kw: 'license application content attribution rights reuse' },
    { url: '/app/account/',    title: 'Account Policy',                 section: 'Account',   kw: 'account sign up credentials security password profile' },
    { url: '/app/account-suspension/', title: 'Account Suspension Policy', section: 'Account', kw: 'account suspension ban termination appeal restore' },
    { url: '/app/community-guidelines/', title: 'Community Guidelines', section: 'Community', kw: 'community guidelines conduct rules be kind moderation' },
    { url: '/app/review-policy/', title: 'Voting & Review Policy',      section: 'Community', kw: 'voting votes ratings reviews integrity duplicate' },
    { url: '/app/listing-policy/', title: 'Listing Policy',             section: 'Vendors',   kw: 'listing directory vendor builder brand submit eligibility' },
    { url: '/app/vendor-policy/', title: 'Vendor Policy',               section: 'Vendors',   kw: 'vendor policy seller storefront data accuracy' },
    { url: '/app/builder-policy/', title: 'Builder Policy',             section: 'Vendors',   kw: 'builder custom keyboard diy portfolio service' },
    { url: '/app/brand-policy/', title: 'Brand Policy',                 section: 'Vendors',   kw: 'brand trademark storefront authorized seller ip' },
    { url: '/app/sponsored-listings/', title: 'Sponsored Listings Policy', section: 'Vendors', kw: 'sponsored listing paid placement identified disclosure' },
    { url: '/app/advertising/', title: 'Advertising Policy',            section: 'Vendors',   kw: 'advertising ads display never affects ranking placement' },
    { url: '/app/price-policy/', title: 'Price Policy',                 section: 'Platform',  kw: 'price tracking pricing inr cost accuracy listing' },
    { url: '/app/price-accuracy/', title: 'Price Accuracy Policy',      section: 'Platform',  kw: 'price accuracy freshness real-time stale verify' },
    { url: '/app/product-info/', title: 'Product Information Disclaimer', section: 'Platform', kw: 'product specifications specs sourcing community vendor' },
    { url: '/app/marketplace/', title: 'Marketplace Disclaimer',        section: 'Platform',  kw: 'marketplace not a marketplace transactions vendor third party' },
    { url: '/app/affiliate-disclosure/', title: 'Affiliate Disclosure', section: 'Platform',  kw: 'affiliate links commission disclosure earnings' },
    { url: '/app/api-terms/',   title: 'API Terms',                     section: 'Platform',  kw: 'api developer access integration terms placeholder' },
    { url: '/app/premium-services/', title: 'Future Premium Services Policy', section: 'Platform', kw: 'premium paid features future subscription plan' },
    { url: '/app/security/',    title: 'Security Policy',               section: 'Security',  kw: 'security vulnerability platform protection account' },
    { url: '/app/responsible-disclosure/', title: 'Responsible Disclosure', section: 'Security', kw: 'responsible disclosure vulnerability report bug bounty' },
    { url: '/app/report-abuse/',title: 'Report Abuse',                   section: 'Security',  kw: 'report abuse scam fraud vendor violation report' },
    { url: '/app/contact/',     title: 'Contact',                       section: 'Support',   kw: 'contact email support help feedback' },
    { url: '/app/data-removal/',title: 'Data Removal Request',           section: 'Support',  kw: 'data removal delete erasure privacy request personal' },
    { url: '/app/account-suspension/', title: 'Account Suspension Policy', section: 'Support', kw: 'account suspension ban termination appeal restore' }
  ];

  /* ── Build shared chrome ── */
  var path = location.pathname.replace(/\/+$/, '') + '/';

  var footer = [
    '<footer>',
    '<div class="footer-inner">',
      '<div>',
        '<div class="f-logo">⌨ KEYDIR<span style="color:var(--yellow)"> APP DOCS</span></div>',
        '<div class="f-desc">Official documentation, legal policies, platform rules, and support resources for the KeyDir Application at app.keydir.in. Operated by KeyDir.</div>',
        '<div class="f-social">',
          '<a href="https://app.keydir.in" target="_blank" rel="noopener">App ↗</a>',
          '<a href="https://keydir.in/" target="_blank" rel="noopener">Community Site ↗</a>',
          '<a href="mailto:officialkeydir.in@gmail.com">Email</a>',
        '</div>',
      '</div>',
      '<div class="f-col">',
        '<h4>Legal</h4>',
        '<ul>',
          '<li><a href="/app/terms/">Terms of Service</a></li>',
          '<li><a href="/app/privacy/">Privacy Policy</a></li>',
          '<li><a href="/app/cookies/">Cookie Policy</a></li>',
          '<li><a href="/app/dmca/">DMCA</a></li>',
          '<li><a href="/app/acceptable-use/">Acceptable Use</a></li>',
          '<li><a href="/app/data-removal/">Data Removal</a></li>',
          '<li><a href="/app/licenses/">Licenses</a></li>',
        '</ul>',
      '</div>',
      '<div class="f-col">',
        '<h4>Security &amp; Support</h4>',
        '<ul>',
          '<li><a href="/app/security/">Security Policy</a></li>',
          '<li><a href="/app/responsible-disclosure/">Responsible Disclosure</a></li>',
          '<li><a href="/app/report-abuse/">Report Abuse</a></li>',
          '<li><a href="/app/contact/">Contact</a></li>',
        '</ul>',
      '</div>',
      '<div class="f-col">',
        '<h4>Platform</h4>',
        '<ul>',
          '<li><a href="/app/affiliate-disclosure/">Affiliate Disclosure</a></li>',
          '<li><a href="/app/advertising/">Advertising Policy</a></li>',
          '<li><a href="/app/sponsored-listings/">Sponsored Listings</a></li>',
          '<li><a href="/app/price-policy/">Price Policy</a></li>',
          '<li><a href="/app/price-accuracy/">Price Accuracy</a></li>',
          '<li><a href="/app/marketplace/">Marketplace Disclaimer</a></li>',
        '</ul>',
      '</div>',
      '<div class="f-col">',
        '<h4>Vendors &amp; Accounts</h4>',
        '<ul>',
          '<li><a href="/app/listing-policy/">Listing Policy</a></li>',
          '<li><a href="/app/vendor-policy/">Vendor Policy</a></li>',
          '<li><a href="/app/account/">Account Policy</a></li>',
          '<li><a href="/app/account-suspension/">Account Suspension</a></li>',
          '<li><a href="/app/user-content/">User Content</a></li>',
          '<li><a href="/app/premium-services/">Premium Services</a></li>',
        '</ul>',
      '</div>',
    '</div>',
    '<div class="f-bottom">',
      '<div class="f-copy">© 2026 KEYDIR // OFFICIAL APPLICATION DOCUMENTATION // app.keydir.in // DOCS v2.0</div>',
      '<div class="f-meta">',
        '<span>Version v2.0</span>',
        '<span>Last updated 2026-08-01</span>',
      '</div>',
      '<button class="theme-toggle"><span class="tt-icon">◑</span><span class="tt-label">DARK MODE</span></button>',
    '</div>',
    '<div class="f-watermark">KEYDIR APP</div>',
    '</footer>'
  ].join('\n');

  var navActive = function (url) {
    return url === '/app/' ? (path === '/app/') : path.indexOf(url) === 0;
  };

  var topbar = [
    '<div id="cursor" aria-hidden="true"></div>',
    '<div class="scroll-progress" id="progress" aria-hidden="true"></div>',
    '<a class="skip-link" href="#main">Skip to content</a>',
    '<header class="topbar">',
    '<div class="topbar-inner">',
      '<a class="brand" href="/app/"><span>⌨</span> KEYDIR<span class="brand-doc">APP</span></a>',
      '<nav class="topnav" aria-label="Primary">',
        '<a href="https://app.keydir.in" target="_blank" rel="noopener">_Back to App</a>',
        '<a href="' + SITE + '/" ' + '>_Community Site</a>',
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

  var groups = [
    ['Start', '/app/'],
    ['Legal', ['terms','privacy','cookies','disclaimer','dmca','acceptable-use','user-content','data-removal','licenses']],
    ['Account', ['account','account-suspension']],
    ['Community', ['community-guidelines','review-policy']],
    ['Vendors', ['listing-policy','vendor-policy','builder-policy','brand-policy','sponsored-listings','advertising']],
    ['Platform', ['price-policy','price-accuracy','product-info','marketplace','affiliate-disclosure','api-terms','premium-services']],
    ['Security', ['security','responsible-disclosure','report-abuse']],
    ['Support', ['contact','data-removal','account-suspension']]
  ];

  var mobGroups = function () {
    var html = '';
    groups.forEach(function (g) {
      html += '<div class="mob-group">// ' + g[0] + '</div>';
      if (typeof g[1] === 'string') {
        html += '<a href="' + g[1] + '">_Home</a>';
      } else {
        g[1].forEach(function (slug) {
          var d = DOCS.filter(function (x) { return x.url.indexOf('/' + slug + '/') !== -1; })[0];
          if (d) html += '<a href="' + d.url + '">_' + d.title + '</a>';
        });
      }
    });
    html += '<div class="mob-group">// Elsewhere</div>';
    html += '<a href="https://app.keydir.in" target="_blank" rel="noopener">_Back to App</a>';
    html += '<a href="https://keydir.in/">_Community Site</a>';
    return html;
  };

  var mobNav = '<div id="mob-nav" role="dialog" aria-modal="true" aria-label="Menu"><button id="mob-close">[ X ]</button>' + mobGroups() + '</div>';

  document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('afterbegin', topbar + mobNav);
    document.body.insertAdjacentHTML('beforeend', footer + '<button class="back-top" id="back-top" aria-label="Back to top">↑</button>');

    /* ── Custom cursor — same as keydir.in ── */
    var cur = document.getElementById('cursor');
    if (cur && window.matchMedia('(pointer:fine)').matches) {
      document.addEventListener('mousemove', function (e) {
        cur.style.left = e.clientX + 'px';
        cur.style.top  = e.clientY + 'px';
      });
      document.addEventListener('mouseleave', function () { cur.classList.add('off'); });
      document.addEventListener('mouseenter', function () { cur.classList.remove('off'); });
      document.querySelectorAll('a,button,input,textarea').forEach(function (el) {
        el.addEventListener('mouseenter', function () { cur.classList.add('big'); });
        el.addEventListener('mouseleave', function () { cur.classList.remove('big'); });
      });
    }

    /* ── Theme toggle — footer is injected here, so wire it after theme.js's DOMContentLoaded ── */
    var theme = document.documentElement.getAttribute('data-theme');
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.removeAttribute('onclick');
      btn.addEventListener('click', window.toggleTheme);
      var ic = btn.querySelector('.tt-icon');
      var lb = btn.querySelector('.tt-label');
      if (ic) ic.textContent = (theme === 'dark') ? '☀' : '◑';
      if (lb) lb.textContent = (theme === 'dark') ? 'LIGHT MODE' : 'DARK MODE';
    });

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

    /* ── Search (one or more boxes: topbar + homepage) ── */
    document.querySelectorAll('.search').forEach(function (searchBox) {
      var input = searchBox.querySelector('input[type="search"]');
      var resultsBox = searchBox.querySelector('.search-results');
      if (!input || !resultsBox) return;
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
    });

    /* ── Scroll progress bar + back to top ── */
    var progress = document.getElementById('progress');
    var backTop = document.getElementById('back-top');
    if (progress && backTop) {
      function onScroll() {
        var h = document.documentElement;
        var max = h.scrollHeight - h.clientHeight;
        progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
        backTop.classList.toggle('show', h.scrollTop > 400);
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      backTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
