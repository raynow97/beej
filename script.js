// Beej — minimal site JS

document.addEventListener('DOMContentLoaded', function () {
  // ---- Mobile menu toggle ----
  const toggle = document.querySelector('.menu-toggle');
  const links  = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('is-open');
      toggle.textContent = links.classList.contains('is-open') ? 'Close' : 'Menu';
    });
  }

  // ---- Active nav link based on URL ----
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('is-active');
    }
  });

  // ---- Reveal on scroll ----
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
  }

  // ---- Product page interactions ----
  // Variant select
  document.querySelectorAll('[data-variant-group]').forEach(group => {
    group.querySelectorAll('.variant').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.variant').forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        const priceNow = document.querySelector('[data-price-now]');
        const priceWas = document.querySelector('[data-price-was]');
        const priceSave = document.querySelector('[data-price-save]');
        if (priceNow && btn.dataset.priceNow) priceNow.textContent = btn.dataset.priceNow;
        if (priceWas && btn.dataset.priceWas) priceWas.textContent = btn.dataset.priceWas;
        if (priceSave && btn.dataset.priceSave) priceSave.textContent = btn.dataset.priceSave;
      });
    });
  });

  // Size select
  document.querySelectorAll('[data-size-group] .size').forEach(s => {
    s.addEventListener('click', (e) => {
      if (s.classList.contains('is-out')) return;
      s.parentElement.querySelectorAll('.size').forEach(o => o.classList.remove('is-selected'));
      s.classList.add('is-selected');
    });
  });

  // Quantity
  document.querySelectorAll('.qty').forEach(q => {
    const input = q.querySelector('input');
    q.querySelector('[data-qty="-"]')?.addEventListener('click', () => {
      const v = Math.max(1, parseInt(input.value || '1', 10) - 1);
      input.value = v;
    });
    q.querySelector('[data-qty="+"]')?.addEventListener('click', () => {
      const v = Math.min(99, parseInt(input.value || '1', 10) + 1);
      input.value = v;
    });
  });

  // Tabs
  document.querySelectorAll('[data-tabs]').forEach(tabs => {
    const heads = tabs.querySelectorAll('[data-tab]');
    const panels = tabs.querySelectorAll('[data-panel]');
    heads.forEach(h => {
      h.addEventListener('click', () => {
        const target = h.dataset.tab;
        heads.forEach(x => x.classList.toggle('is-active', x === h));
        panels.forEach(p => p.classList.toggle('is-active', p.dataset.panel === target));
      });
    });
  });

  // Product thumbs
  const heroImg = document.querySelector('[data-hero-img]');
  document.querySelectorAll('[data-thumb]').forEach(t => {
    t.addEventListener('click', () => {
      document.querySelectorAll('[data-thumb]').forEach(x => x.classList.remove('is-active'));
      t.classList.add('is-active');
      if (heroImg && t.dataset.thumb) heroImg.src = t.dataset.thumb;
    });
  });

  // Add to cart (placeholder)
  document.querySelectorAll('[data-add-to-cart]').forEach(b => {
    b.addEventListener('click', () => {
      const original = b.textContent;
      b.textContent = 'Added to cart ✓';
      b.disabled = true;
      setTimeout(() => { b.textContent = original; b.disabled = false; }, 1800);
    });
  });

  // Newsletter (placeholder)
  document.querySelectorAll('.newsletter__form').forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = f.querySelector('input');
      const btn = f.querySelector('button');
      if (input.value.trim()) {
        btn.textContent = 'Subscribed';
        input.value = '';
        setTimeout(() => { btn.textContent = 'Subscribe'; }, 2400);
      }
    });
  });

  // Blog category filter
  document.querySelectorAll('[data-filter-group] button').forEach(b => {
    b.addEventListener('click', () => {
      const cat = b.dataset.filter;
      b.parentElement.querySelectorAll('button').forEach(x => x.classList.toggle('is-active', x === b));
      document.querySelectorAll('[data-post]').forEach(p => {
        p.style.display = (cat === 'all' || p.dataset.post === cat) ? '' : 'none';
      });
    });
  });
});
