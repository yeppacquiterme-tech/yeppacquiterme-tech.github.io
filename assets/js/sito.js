// Menu per telefono e anno nel piè di pagina
document.addEventListener('DOMContentLoaded', () => {
  const bottone = document.querySelector('.menu-bottone');
  const menu = document.getElementById('menu');
  if (bottone && menu) {
    bottone.addEventListener('click', () => {
      const aperto = menu.classList.toggle('aperto');
      bottone.setAttribute('aria-expanded', aperto ? 'true' : 'false');
    });
    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        menu.classList.remove('aperto');
        bottone.setAttribute('aria-expanded', 'false');
      }
    });
  }
  // Animaletti dei progetti: col mouse compaiono al passaggio (solo CSS).
  // Sui dispositivi touch sbucano quando la tessera è ben visibile.
  const tessere = document.querySelectorAll('.progetto');
  let osservatore = null;
  function attivaTouch() {
    if (osservatore || !('IntersectionObserver' in window) || !tessere.length) return;
    osservatore = new IntersectionObserver((voci) => {
      voci.forEach((v) => v.target.classList.toggle('visibile', v.isIntersecting));
    }, { threshold: 0.6 });
    tessere.forEach((t) => osservatore.observe(t));
  }
  if (window.matchMedia('(hover: none)').matches) attivaTouch();
  window.addEventListener('touchstart', attivaTouch, { once: true, passive: true });

  document.querySelectorAll('[data-anno]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
