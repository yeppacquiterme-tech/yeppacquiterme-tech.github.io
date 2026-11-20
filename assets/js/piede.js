/* ==========================================================
   PIÈ DI PAGINA UNICO
   Questo file disegna il footer di TUTTE le pagine.
   Per cambiare qualcosa nel footer basta modificare qui.

   I testi tra parentesi quadre sono segnaposto: sul sito
   compaiono evidenziati in giallo finché non li sostituite.
   ========================================================== */

const PIEDE = {
   // fondazione che ci ha voluti
  associazione: 'Fondazione Aurora', 

  // Indirizzo mostrato sotto la mappa
  indirizzo: 'Piazza Don Dolermo 24, 15011 Acqui Terme (AL)',

  // Cosa cercare su Google Maps: basta l'indirizzo completo
  ricercaMappa: 'Piazza Don Dolermo 24, 15011 Acqui Terme AL',

  instagram: 'https://www.instagram.com/yepp_acquiterme/',

  // Link d'invito della community WhatsApp, del tipo
  // 'https://chat.whatsapp.com/...'. Finché è vuoto, sul sito
  // compare un segnaposto giallo al posto del pulsante.
  whatsapp: 'https://chat.whatsapp.com/DrVZSq2NGnF6IJlPnNe8wJ',

  // Chi ci sostiene: loghi in home (grandi) e nel footer (piccoli).
  // File in assets/img/loghi/web/. "sito" è facoltativo: se c'è,
  // il logo diventa un link.
  sostenitori: [
    { nome: 'Fondazione Aurora', logo: 'fondazione-aurora.png', sito: '' },
    { nome: 'YEPP Italia', logo: 'yepp-italia.png', sito: '' },
    { nome: 'Fondazione Compagnia di San Paolo', logo: 'compagnia-di-san-paolo.png', sito: '' },
    { nome: 'Fondazione Cassa di Risparmio di Alessandria', logo: 'fondazione-cr-alessandria.png', sito: '' },
    { nome: 'Città di Acqui Terme', logo: 'citta-di-acqui-terme.png', sito: '' },
    { nome: "ASCA, Associazione Socio-Assistenziale dei Comuni dell'Acquese", logo: 'asca.png', sito: '' },
    // Impulsi non è uno sponsor diretto: il suo logo sta solo nella pagina Love Therapy
  ],

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

  // pulsante WhatsApp, oppure segnaposto se il link manca
  function bottoneWhatsapp(testoBottone) {
    if (!PIEDE.whatsapp) return '<span class="da-completare">[link della community WhatsApp]</span>';
    return '<a class="bottone-whatsapp" href="' + PIEDE.whatsapp + '" target="_blank" rel="noopener">'
      + '<img src="assets/img/icone/whatsapp.svg" alt="">' + testoBottone + '</a>';
  }

  // un logo, con o senza link
  function logo(s, classe) {
    const img = '<img src="assets/img/loghi/web/' + s.logo + '" alt="' + s.nome + '" title="' + s.nome + '" loading="lazy">';
    return s.sito
      ? '<a class="' + classe + '" href="' + s.sito + '" target="_blank" rel="noopener">' + img + '</a>'
      : '<span class="' + classe + '">' + img + '</span>';
  }
  const loghiPiccoli = PIEDE.sostenitori.map((s) => '<li>' + logo(s, 'piede__logo-sostenitore') + '</li>').join('');

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
          <div class="piede__social">
            <a class="bottone-instagram" href="${PIEDE.instagram}" target="_blank" rel="noopener">Seguici su Instagram</a>
            ${bottoneWhatsapp('Community WhatsApp')}
          </div>
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
      <div class="piede__sostenitori">
        <h3>Con il sostegno di</h3>
        <ul>${loghiPiccoli}</ul>
      </div>
      <p class="piede__fondo">© ${new Date().getFullYear()} YEPP Acqui Terme · <a href="contatti.html">Contatti</a></p>
    </div>
  </footer>`;

  document.currentScript.insertAdjacentHTML('beforebegin', html);

  // Le altre pagine usano gli stessi dati:
  // <div data-sostenitori></div> diventa la griglia dei loghi grandi (home)
  document.querySelectorAll('[data-sostenitori]').forEach((el) => {
    el.innerHTML = PIEDE.sostenitori.map((s) => logo(s, 'logo-tessera')).join('');
  });
  // <span data-whatsapp="testo"></span> diventa il pulsante WhatsApp (contatti)
  document.querySelectorAll('[data-whatsapp]').forEach((el) => {
    el.outerHTML = bottoneWhatsapp(el.dataset.whatsapp || 'Entra nella community');
  });
})();
