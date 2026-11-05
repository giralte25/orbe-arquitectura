(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Cabecera: fondo al pasar la portada
  const top = document.querySelector('.top');
  const sentinel = document.querySelector('.hero-sentinel');
  if (top && sentinel && 'IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => {
      top.classList.toggle('is-scrolled', !e.isIntersecting);
    }, { rootMargin: `-${top.offsetHeight}px 0px 0px 0px` }).observe(sentinel);
  }

  // Aparición al hacer scroll
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach((el) => io.observe(el));
  }

  // Acordeón de servicios: uno abierto cada vez
  const accBtns = document.querySelectorAll('.acc__btn');
  const setAcc = (btn, open) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.closest('.acc').classList.toggle('is-open', open);
  };
  accBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      accBtns.forEach((b) => { if (b !== btn && b.getAttribute('aria-expanded') === 'true') setAcc(b, false); });
      setAcc(btn, !open);
    });
  });

  // Menú móvil
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    const label = toggle.querySelector('.menu-toggle__label');
    const setMenu = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
      if (label) label.textContent = open ? label.dataset.close : label.dataset.open;
    };
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('menu-open')) { setMenu(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 881px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });
  }

  // Sección actual en la navegación
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    const current = new Map();
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => current.set(en.target.id, en.intersectionRatio));
      let best = null, ratio = 0;
      current.forEach((r, id) => { if (r > ratio) { ratio = r; best = id; } });
      navLinks.forEach((a) => a.classList.toggle('is-current', ratio > 0 && a.getAttribute('href') === `#${best}`));
    }, { threshold: [0, 0.2, 0.4, 0.6, 0.8], rootMargin: '-30% 0px -40% 0px' });
    sections.forEach((s) => spy.observe(s));
  }

  // Galería de proyectos: índice activo y saltos entre hojas
  const gal = document.getElementById('galeria');
  const galIndex = document.querySelector('.gal__index');
  if (gal && galIndex) {
    const slides = [...gal.querySelectorAll('.gal__slide')];
    const items = [...galIndex.querySelectorAll('li')];
    const pinned = () => CSS.supports('animation-timeline: view()') && !reduce && getComputedStyle(gal.querySelector('.gal__stage')).position === 'sticky';
    // centro de cada hoja dentro del rango "contain" (coincide con --a/--b de styles.css)
    const centers = [0.07, 0.30, 0.52, 0.74, 0.95];
    const setActive = (k) => items.forEach((li, i) => li.classList.toggle('is-active', i === k));
    const contain = () => {
      const top = gal.getBoundingClientRect().top + window.scrollY;
      return { top, len: gal.offsetHeight - window.innerHeight };
    };
    galIndex.addEventListener('click', (e) => {
      const a = e.target.closest('a[data-slot]');
      if (!a) return;
      e.preventDefault();
      const k = Number(a.dataset.slot);
      if (pinned()) {
        const { top, len } = contain();
        window.scrollTo({ top: top + centers[k] * len, behavior: reduce ? 'auto' : 'smooth' });
      } else {
        slides[k].scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      }
    });
    if ('IntersectionObserver' in window) {
      // centinelas en el carril: uno por hoja, observados en la banda central del viewport
      const sentinels = slides.map((_, i) => {
        const s = document.createElement('div');
        s.className = 'gal__sent'; s.setAttribute('aria-hidden', 'true'); s.dataset.k = String(i);
        gal.appendChild(s); return s;
      });
      const place = () => {
        if (pinned()) {
          const { len } = contain();
          const vh = window.innerHeight;
          sentinels.forEach((s, i) => {
            const a = i === 0 ? 0 : (centers[i - 1] + centers[i]) / 2;
            const b = i === slides.length - 1 ? 1 : (centers[i] + centers[i + 1]) / 2;
            s.style.top = `${a * len + vh / 2}px`;
            s.style.height = `${(b - a) * len}px`;
          });
        } else {
          sentinels.forEach((s, i) => {
            s.style.top = `${slides[i].offsetTop}px`;
            s.style.height = `${slides[i].offsetHeight}px`;
          });
        }
      };
      place();
      window.addEventListener('resize', place);
      const spyGal = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) setActive(Number(en.target.dataset.k)); });
      }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });
      sentinels.forEach((s) => spyGal.observe(s));
    }
  }

  // Formulario: validación en línea y envío
  const form = document.querySelector('.form');
  if (form) {
    const note = form.querySelector('.form__note');
    const submit = form.querySelector('button[type="submit"]');
    const fields = {
      nombre: { el: form.elements.nombre, ok: (v) => v.trim().length > 1 },
      correo: { el: form.elements.correo, ok: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) },
      mensaje: { el: form.elements.mensaje, ok: (v) => v.trim().length > 5 },
    };
    const mark = (name, valid) => {
      const { el } = fields[name];
      const wrap = el.closest('.field');
      const err = document.getElementById(`${el.id}-error`);
      wrap.classList.toggle('is-invalid', !valid);
      if (err) err.hidden = valid;
      el.setAttribute('aria-invalid', String(!valid));
    };
    Object.keys(fields).forEach((name) => {
      fields[name].el.addEventListener('input', () => {
        if (fields[name].el.closest('.field').classList.contains('is-invalid')) mark(name, fields[name].ok(fields[name].el.value));
      });
    });
    const say = (text, isError) => {
      note.textContent = text;
      note.classList.toggle('is-error', Boolean(isError));
    };
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let firstBad = null;
      Object.keys(fields).forEach((name) => {
        const valid = fields[name].ok(fields[name].el.value);
        mark(name, valid);
        if (!valid && !firstBad) firstBad = fields[name].el;
      });
      if (firstBad) { firstBad.focus(); say('Revisa los campos marcados.', true); return; }
      const endpoint = form.dataset.endpoint;
      if (!endpoint) {
        say('El formulario se activará cuando esté conectado al correo del estudio. Mientras tanto, escríbenos directamente.', false);
        return;
      }
      submit.disabled = true;
      submit.querySelector('.btn__text').textContent = 'Enviando';
      say('', false);
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        say('Mensaje enviado. Te responderemos en breve.', false);
      } catch (err) {
        say('No se ha podido enviar. Prueba de nuevo o escríbenos por correo.', true);
      } finally {
        submit.disabled = false;
        submit.querySelector('.btn__text').textContent = 'Enviar mensaje';
      }
    });
  }
})();
