// ArqSoft — interações compartilhadas entre as páginas.

// Alterna os textos entre português e inglês e mantém a preferência local.
function setLang(lang) {
  const elements = document.querySelectorAll('[data-pt][data-en]');

  elements.forEach((el) => {
    const text = el.getAttribute(`data-${lang}`);
    if (text !== null) {
      // Mantém elementos decorativos internos, como a seta dos links.
      const arrow = el.querySelector('.arrow');
      el.innerHTML = text;
      if (arrow) el.appendChild(arrow);
    }
  });

  // Atualiza também o texto alternativo das imagens conforme o idioma escolhido.
  document.querySelectorAll('[data-alt-pt][data-alt-en]').forEach((img) => {
    img.alt = img.getAttribute(lang === 'pt' ? 'data-alt-pt' : 'data-alt-en');
  });

  const btnPt = document.getElementById('btnPt');
  const btnEn = document.getElementById('btnEn');
  if (btnPt && btnEn) {
    btnPt.classList.toggle('active', lang === 'pt');
    btnEn.classList.toggle('active', lang === 'en');
  }

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  try {
    localStorage.setItem('arqsoft-lang', lang);
  } catch (error) {
    // O site continua utilizável mesmo se o navegador bloquear armazenamento local.
  }
}

// Recupera o idioma escolhido, sem impedir o carregamento se o armazenamento estiver bloqueado.
(function initLang() {
  try {
    const saved = localStorage.getItem('arqsoft-lang');
    if (saved === 'pt' || saved === 'en') setLang(saved);
  } catch (error) {
    // Português é o idioma padrão definido no HTML.
  }
})();

// Navbar compacta ao rolar a página.
(function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const updateNavbar = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 24);
  };

  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });
})();

// Menu mobile acessível por teclado e leitor de tela.
(function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  const closeMenu = () => {
    links.classList.remove('open');
    toggle.textContent = '≡';
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.textContent = '≡';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'navLinks');

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.textContent = isOpen ? '×' : '≡';
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 680) closeMenu();
  });
})();

// Revela elementos gradualmente quando entram na área visível.
(function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });

  reveals.forEach((element) => observer.observe(element));
})();

// A navegação por links continua funcional sem depender de efeitos de mouse.
