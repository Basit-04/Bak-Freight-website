(function () {
  if (window.__bakFreightScriptLoaded) return;
  window.__bakFreightScriptLoaded = true;

  window.tailwind = window.tailwind || {};
  window.tailwind.config = {
    theme: {
      extend: {
        colors: {
          navy: '#071A33',
          navy2: '#0C2A52',
          blue: '#FF7A00',
          orange: '#FF7A00',
          bg: '#F8FAFC',
          dark: '#020617',
          ink: '#111827',
        },
        fontFamily: {
          display: ['"Plus Jakarta Sans"', 'sans-serif'],
          body: ['"Inter"', 'sans-serif'],
          mono: ['"JetBrains Mono"', 'monospace'],
        },
      },
    },
  };

  function init() {
    if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
      lucide.createIcons();
    }

    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    const navbar = document.getElementById('navbar');
    const navInner = document.getElementById('navInner');

    if (navbar && navInner) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          navbar.classList.add('shrink');
          navInner.classList.add('py-3');
          navInner.classList.remove('py-5');
        } else {
          navbar.classList.remove('shrink');
          navInner.classList.remove('py-3');
          navInner.classList.add('py-5');
        }
      });
    }

    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('hidden') === false;
        menuBtn.setAttribute('aria-expanded', open);
        menuBtn.innerHTML = open
          ? '<i data-lucide="x" class="h-7 w-7"></i>'
          : '<i data-lucide="menu" class="h-7 w-7"></i>';

        if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
          lucide.createIcons();
        }
      });

      document.querySelectorAll('#mobileMenu a').forEach((a) => {
        a.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          menuBtn.innerHTML = '<i data-lucide="menu" class="h-7 w-7"></i>';
          if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
            lucide.createIcons();
          }
        });
      });
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    const counters = document.querySelectorAll('[data-counter]');
    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          const dur = 1400;
          const start = performance.now();

          function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * target).toLocaleString() + suffix;

            if (p < 1) {
              requestAnimationFrame(tick);
            }
          }

          requestAnimationFrame(tick);
          counterIO.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => counterIO.observe(counter));

    const calcBtn = document.getElementById('calcBtn');
    const quoteForm = document.getElementById('quoteForm');
    const formMsg = document.getElementById('formMsg');
    const weightInput = document.getElementById('weightInput')
      || quoteForm?.querySelector('input[placeholder^="Weight"]');
    const freightType = document.getElementById('freightType')
      || quoteForm?.querySelector('select');
    let estimateBox = document.getElementById('estimateBox');
    let estimateValue = document.getElementById('estimateValue');

    if (calcBtn && !estimateBox) {
      estimateBox = document.createElement('div');
      estimateBox.className = 'hidden rounded-lg border border-orange/30 bg-orange/10 px-4 py-4 text-center text-navy';
      estimateBox.innerHTML = '<span class="block text-sm font-semibold">Estimated range:</span><span class="block mt-1 font-mono text-lg font-bold text-orange"></span>';
      calcBtn.closest('div')?.after(estimateBox);
      estimateValue = estimateBox.querySelector('span:last-child');
    }

    if (calcBtn && weightInput && freightType) {
      calcBtn.addEventListener('click', () => {
        const w = parseFloat(weightInput.value) || 24000;
        const mult = parseFloat(freightType.value) || 1;
        const base = 850 + (w / 1000) * 38;
        const low = Math.round((base * mult * 0.92) / 5) * 5;
        const high = Math.round((base * mult * 1.18) / 5) * 5;

        if (estimateValue) {
          estimateValue.textContent = `$${low.toLocaleString()} – $${high.toLocaleString()} CAD`;
        }

        if (estimateBox) {
          estimateBox.classList.remove('hidden');
        }
      });
    }

    if (quoteForm) {
      quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (formMsg) {
          formMsg.classList.remove('hidden');
        }
      });
    }

    const lastMileForm = document.getElementById('lastMileForm');
    const lastMileFormMsg = document.getElementById('lastMileFormMsg');

    if (lastMileForm) {
      lastMileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (lastMileFormMsg) {
          lastMileFormMsg.classList.remove('hidden');
        }
      });
    }

    const trackForm = document.getElementById('trackForm');
    const trackInput = document.getElementById('trackInput');
    const trackWaybill = document.getElementById('trackWaybill');
    const trackResult = document.getElementById('trackResult');

    if (trackForm && trackInput && trackWaybill && trackResult) {
      trackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = trackInput.value.trim() || 'BAK-48213-DV';
        trackWaybill.textContent = 'WAYBILL # ' + val.toUpperCase();
        trackResult.classList.remove('hidden');
      });
    }

    const newsForm = document.getElementById('newsForm');
    const newsMsg = document.getElementById('newsMsg');

    if (newsForm) {
      newsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (newsMsg) {
          newsMsg.classList.remove('hidden');
        }
      });
    }

    const coverageMapEl = document.getElementById('coverageMap');
    if (coverageMapEl && typeof window.L !== 'undefined') {
      const map = window.L.map('coverageMap', {
        zoomControl: true,
        scrollWheelZoom: false,
        dragging: true,
        attributionControl: true,
        preferCanvas: true,
      }).setView([49.5, -97.5], 3.5);

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      const cities = [
        { name: 'Toronto, ON', coords: [43.6532, -79.3832] },
        { name: 'Mississauga, ON', coords: [43.5890, -79.6441] },
        { name: 'Montreal, QC', coords: [45.5017, -73.5673] },
        { name: 'Halifax, NS', coords: [44.6488, -63.5752] },
        { name: 'Detroit, MI', coords: [42.3314, -83.0458] },
        { name: 'Chicago, IL', coords: [41.8781, -87.6298] },
        { name: 'Cleveland, OH', coords: [41.4993, -81.6944] },
        { name: 'New York, NY', coords: [40.7128, -74.0060] },
        { name: 'Philadelphia, PA', coords: [39.9526, -75.1652] },
        { name: 'Dallas, TX', coords: [32.7767, -96.7970] },
        { name: 'Atlanta, GA', coords: [33.7490, -84.3880] },
        { name: 'Memphis, TN', coords: [35.1495, -90.0490] },
        { name: 'Denver, CO', coords: [39.7392, -104.9903] },
        { name: 'Los Angeles, CA', coords: [34.0522, -118.2437] },
        { name: 'Phoenix, AZ', coords: [33.4484, -112.0740] },
        { name: 'Vancouver, BC', coords: [49.2827, -123.1207] },
        { name: 'Seattle, WA', coords: [47.6062, -122.3321] },
        { name: 'Calgary, AB', coords: [51.0447, -114.0719] },
        { name: 'Edmonton, AB', coords: [53.5444, -113.4909] },
      ];

      const routes = [
        { coords: [[43.6532, -79.3832], [43.5890, -79.6441]], color: '#FF7A00' },
        { coords: [[43.6532, -79.3832], [45.5017, -73.5673]], color: '#FF7A00' },
        { coords: [[43.6532, -79.3832], [44.6488, -63.5752]], color: '#FF7A00' },
        { coords: [[43.6532, -79.3832], [42.3314, -83.0458], [41.8781, -87.6298]], color: '#FF7A00' },
        { coords: [[42.3314, -83.0458], [41.4993, -81.6944]], color: '#FF7A00' },
        { coords: [[43.6532, -79.3832], [40.7128, -74.0060], [39.9526, -75.1652]], color: '#FF7A00' },
        { coords: [[41.8781, -87.6298], [32.7767, -96.7970]], color: '#FF7A00' },
        { coords: [[32.7767, -96.7970], [33.7490, -84.3880]], color: '#FF7A00' },
        { coords: [[33.7490, -84.3880], [35.1495, -90.0490]], color: '#FF7A00' },
        { coords: [[35.1495, -90.0490], [39.7392, -104.9903]], color: '#FF7A00' },
        { coords: [[39.7392, -104.9903], [34.0522, -118.2437]], color: '#FF7A00' },
        { coords: [[34.0522, -118.2437], [33.4484, -112.0740]], color: '#FF7A00' },
        { coords: [[49.2827, -123.1207], [47.6062, -122.3321]], color: '#FF7A00' },
        { coords: [[51.0447, -114.0719], [53.5444, -113.4909]], color: '#FF7A00' },
        { coords: [[51.0447, -114.0719], [43.6532, -79.3832]], color: '#FF7A00' },
      ];

      routes.forEach((route) => {
        window.L.polyline(route.coords, {
          color: route.color,
          weight: 2.2,
          opacity: 0.75,
          lineCap: 'round',
          lineJoin: 'round',
        }).addTo(map);
      });

      cities.forEach((city) => {
        window.L.circleMarker(city.coords, {
          radius: 4.2,
          color: 'rgba(255,255,255,0.72)',
          weight: 1,
          fillColor: '#FF7A00',
          fillOpacity: 0.95,
        }).addTo(map);
      });

      const bounds = window.L.latLngBounds(cities.map((city) => city.coords));
      map.fitBounds(bounds.pad(0.18));
    }

  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
