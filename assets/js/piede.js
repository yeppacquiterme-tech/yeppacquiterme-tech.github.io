/* ==========================================================
   PIÈ DI PAGINA UNICO
   Questo file disegna il footer di TUTTE le pagine.
   Per cambiare qualcosa nel footer basta modificare qui.

   I testi tra parentesi quadre sono segnaposto: sul sito
   compaiono evidenziati in giallo finché non li sostituite.
   ========================================================== */

const PIEDE = {
  associazione: Yepp Acqui Terme, //[nome dell'associazione]

  // Indirizzo mostrato sotto la mappa
  indirizzo: 'Piazza Don Dolermo 24, 15011 Acqui Terme (AL)',

  // Cosa cercare su Google Maps: basta l'indirizzo completo
  ricercaMappa: 'Piazza Don Dolermo 24, 15011 Acqui Terme AL',

  instagram: 'https://www.instagram.com/yepp_acquiterme/',

  pagine: [
    ['Home', 'index.html'],
    ['Jungle', 'jungle.html'],
    ['Love Therapy', 'love-therapy.html'],
    ['EcoLogica', 'ecologica.html'],
    ['Contatti', 'contatti.html'],
  ],
};

(function () {
  // un testo tra [ ] diventa un segnaposto evidenziato
  function testo(t) {
    return t.replace(/\[[^\]]*\]/g, (m) => '<span class="da-completare">' + m + '</span>');
  }

  const q = encodeURIComponent(PIEDE.ricercaMappa);
  const link = PIEDE.pagine
    .map(([nome, href]) => '<li><a href="' + href + '">' + nome + '</a></li>')
    .join('');

  const html = `
  <footer class="piede">
    <img class="foglia foglia--lenta" src="assets/img/foglie/palma-verde.svg" alt="" style="--r:-20deg; left:-3%; bottom:-22%; width:220px; opacity:.3">
    <img class="foglia" src="assets/img/foglie/felce-arancio.svg" alt="" style="--r:-24deg; left:12%; bottom:-26%; width:140px; opacity:.3">
    <div class="contenitore">
      <div class="piede__griglia">
        <div class="piede__info">
          <img class="piede__logo" src="assets/img/logo-yepp.svg" alt="YEPP Acqui Terme" loading="lazy">
          <p>Un progetto di ${testo(PIEDE.associazione)}.</p>
          <nav aria-label="Pagine del sito">
            <h3>Pagine</h3>
            <ul class="piede__pagine">${link}</ul>
          </nav>
          <a class="bottone-instagram" href="${PIEDE.instagram}" target="_blank" rel="noopener">Seguici su Instagram</a>
        </div>
        <div class="piede__dove">
          <h3>Dove siamo</h3>
          <p>La Jungle, aula studio<br>${testo(PIEDE.indirizzo)}</p>
          <div class="mappa">
            <iframe
              src="https://www.google.com/maps?q=${q}&output=embed"
              title="Mappa di Google con la posizione della Jungle"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen></iframe>
          </div>
          <a class="piede__apri" href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener">Apri in Google Maps ↗</a>
        </div>
      </div>
      <p class="piede__fondo">© ${new Date().getFullYear()} YEPP Acqui Terme · <a href="contatti.html">Contatti</a></p>
    </div>
  </footer>`;

  document.currentScript.insertAdjacentHTML('beforebegin', html);
})();
