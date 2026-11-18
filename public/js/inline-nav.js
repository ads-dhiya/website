/* Nav — extracted from the component's inline script. */
(function () {
  var nav = document.querySelector('[data-site-navigation]');
  if (!nav || nav.dataset.navReady === 'true') return;
  nav.dataset.navReady = 'true';
  var groups = Array.from(nav.querySelectorAll('.dd'));
  var burger = nav.querySelector('.burger');
  function updateSurface() {
    nav.classList.toggle('has-dropdown', groups.some(function (group) { return group.open; }));
  }
  function closeDropdowns(except) {
    groups.forEach(function (group) { if (group !== except) group.open = false; });
    updateSurface();
  }
  function setMobile(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (!open) closeDropdowns();
  }
  groups.forEach(function (group) {
    group.addEventListener('toggle', function () {
      if (group.open) closeDropdowns(group);
      updateSurface();
    });
  });
  burger.addEventListener('click', function () { setMobile(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMobile(false);
  });
  nav.addEventListener('focusout', function (event) {
    if (event.relatedTarget && !nav.contains(event.relatedTarget)) setMobile(false);
  });
  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target)) setMobile(false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    var openGroup = groups.find(function (group) { return group.open; });
    var mobileOpen = nav.classList.contains('open');
    if (!openGroup && !mobileOpen) return;
    event.preventDefault();
    setMobile(false);
    if (mobileOpen) burger.focus();
    else if (openGroup) openGroup.querySelector('summary').focus();
  });
  var mobileQuery = window.matchMedia('(max-width:760px)');
  function onViewportChange() { setMobile(false); }
  if (mobileQuery.addEventListener) mobileQuery.addEventListener('change', onViewportChange);
  else mobileQuery.addListener(onViewportChange);
})();
