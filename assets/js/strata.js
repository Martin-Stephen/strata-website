/* Strata — shared runtime (v2)
   Minimal. IntersectionObserver fade-up. Current-page highlight. Form defence. */

(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');

  // Tag sections/cards for reveal
  var candidates = document.querySelectorAll(
    '.section, .hero, .page-header, .role-card, .card, .stack-row, .phase, .stat'
  );
  candidates.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });

    // Reveal anything already visible on load
    requestAnimationFrame(function () {
      var vh = window.innerHeight;
      document.querySelectorAll('.reveal').forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) el.classList.add('in');
      });
    });

    // Safety net
    setTimeout(function () {
      document.querySelectorAll('.reveal:not(.in)').forEach(function (el) {
        el.classList.add('in');
      });
    }, 1800);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Smooth-scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id && id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (history.pushState) history.pushState(null, '', id);
        }
      }
    });
  });

  // Current-page highlight
  var path = window.location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.topnav a[data-path]').forEach(function (a) {
    var p = a.getAttribute('data-path');
    if (p === path || (p !== '/' && path.indexOf(p) === 0)) a.classList.add('current');
  });

  // Forms: honeypot + submit handling
  document.querySelectorAll('form[data-form]').forEach(function (form) {
    var statusEl = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      var hp = form.querySelector('input[name="website"]');
      if (hp && hp.value) {
        e.preventDefault();
        if (statusEl) statusEl.textContent = 'Submitted.';
        form.reset();
        return;
      }
      var action = form.getAttribute('action');
      if (!action || action.trim() === '' || action.indexOf('FORMSPARK_ID_HERE') !== -1) {
        e.preventDefault();
        if (statusEl) statusEl.textContent = 'Form endpoint not yet configured. Pre-launch build.';
        return;
      }
      if (statusEl) statusEl.textContent = 'Submitting…';
    });
  });
})();
