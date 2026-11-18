/* ==========================================================
   INTESTAZIONE E MENU UNICI
   Questo file disegna il menu in alto di TUTTE le pagine.
   Per aggiungere, togliere o rinominare una voce basta
   modificare l'elenco qui sotto.

   Ogni voce: [testo, indirizzo, colore al passaggio del mouse]
   Il colore è facoltativo: 'jungle', 'love' oppure 'eco'.
   ========================================================== */

const MENU = [
  ['Home', 'index.html'],
  ['Jungle', 'jungle.html', 'jungle'],
  ['Love Therapy', 'love-therapy.html', 'love'],
  ['EcoLogica', 'ecologica.html', 'eco'],
  ['Chi siamo', 'index.html#chi-siamo'],
  ['Contatti', 'contatti.html'],
];

(function () {
  // la pagina in cui siamo, per evidenziare la voce giusta
  const pagina = location.pathname.split('/').pop() || 'index.html';

  const voci = MENU.map(([nome, href, colore]) => {
    const attuale = href === pagina ? ' aria-current="page"' : '';
    const col = colore ? ' data-colore="' + colore + '"' : '';
    return '<li><a href="' + href + '"' + col + attuale + '>' + nome + '</a></li>';
  }).join('');

  const html = `
  <a class="salta" href="#contenuto">Vai al contenuto</a>
  <header class="testata">
    <div class="contenitore testata__riga">
      <a class="testata__logo" href="index.html" aria-label="YEPP Acqui Terme, pagina iniziale">
        <img src="assets/img/logo-yepp.svg" alt="YEPP Acqui Terme" width="76" height="52">
      </a>
      <button class="menu-bottone" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
      <ul class="menu" id="menu">${voci}</ul>
    </div>
  </header>`;

  document.currentScript.insertAdjacentHTML('beforebegin', html);
})();
