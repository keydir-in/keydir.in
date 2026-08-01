/* KEYDIR.in — Theme Manager */
(function () {
  var KEY = 'keydir-theme';

  function getTheme() {
    var s = localStorage.getItem(KEY);
    if (s === 'dark' || s === 'light') return s;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    updateButtons(theme);
  }

  function updateButtons(theme) {
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      var icon  = btn.querySelector('.tt-icon');
      var label = btn.querySelector('.tt-label');
      if (icon)  icon.textContent  = (theme === 'dark') ? '☀' : '◑';
      if (label) label.textContent = (theme === 'dark') ? 'LIGHT MODE' : 'DARK MODE';
    });
  }

  window.toggleTheme = function () {
    var cur = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  };

  /* Apply before first paint */
  applyTheme(getTheme());

  /* Wire buttons after DOM ready */
  document.addEventListener('DOMContentLoaded', function () {
    updateButtons(getTheme());
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      /* Remove any duplicate onclick attr, use addEventListener only */
      btn.removeAttribute('onclick');
      btn.addEventListener('click', window.toggleTheme);
    });
  });

  /* Keep in sync if OS pref changes and user hasn't overridden */
  try {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem(KEY)) applyTheme(e.matches ? 'dark' : 'light');
    });
  } catch (e) {}
})();
