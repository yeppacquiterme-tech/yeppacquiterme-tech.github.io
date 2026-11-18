# Sito YEPP Acqui Terme

Il sito del gruppo YEPP di Acqui Terme, con i tre progetti: **Jungle** (aula studio), **Love Therapy** ed **EcoLogica**.

È un sito statico: solo HTML, CSS e un po' di JavaScript. Niente da installare, niente da compilare. Si pubblica gratis con GitHub Pages.

## Com'è fatto

```
index.html          home: logo, i tre progetti, chi siamo
jungle.html         pagina di Jungle
love-therapy.html   pagina di Love Therapy
ecologica.html      pagina di EcoLogica
contatti.html       pagina dei contatti
assets/
  css/stile.css     colori, caratteri e impaginazione di tutto il sito
  js/sito.js        apertura del menu sul telefono e animaletti sui dispositivi touch
  js/testata.js     il menu in alto di TUTTE le pagine
  js/piede.js       il piè di pagina di TUTTE le pagine, con la mappa
  img/
    logo-yepp.svg   il logo
    animali/        tigre, inseparabili e rana dei progetti, tucano dei contatti, geco
    foglie/         le foglie in stile murale usate come decorazione
    illustrazioni/  i tre murales del centro giovani ridisegnati in stile cartoon
```

## Cosa c'è da completare

Tutti i testi ancora da scrivere sono tra parentesi quadre e nel sito si vedono **evidenziati a strisce gialle**, per esempio `[nome dell'associazione]` o `[indirizzo email]`. Basta cercare `da-completare` nei file HTML e sostituire il segnaposto con il testo vero, togliendo anche lo `<span class="da-completare">` che lo circonda.

## Menu e piè di pagina

Menu in alto e piè di pagina sono uno solo per tutto il sito. Ogni pagina li richiama con due righe, una subito dopo `<body>` e una subito prima di `</body>`:

```html
<body>
  <script src="assets/js/testata.js"></script>
  ...contenuto della pagina...
  <script src="assets/js/piede.js"></script>
</body>
```

- **`testata.js`**: in cima c'è l'elenco delle voci del menu. Per aggiungere una pagina al menu basta aggiungere una riga lì. La voce della pagina in cui ci si trova si evidenzia da sola.
- **`piede.js`**: in cima ci sono nome dell'associazione, indirizzo, cosa cercare su Google Maps (`ricercaMappa`, basta l'indirizzo completo) e link Instagram.

Una modifica in uno di questi due file cambia tutte le pagine. Una pagina nuova deve solo includere le due righe.

I contatti veri (email, social, orari) stanno nella pagina `contatti.html`.

## Aggiungere un progetto passato

In fondo a ogni pagina progetto c'è la sezione dell'archivio con un blocco di esempio commentato (tra `<!--` e `-->`). Per aggiungere un evento:

1. metti la foto in `assets/img/progetti/` (meglio se larga al massimo 1600 pixel);
2. copia il blocco `<article class="scheda">…</article>` sopra la scheda "Presto qui";
3. cambia data, titolo, testo e nome della foto;
4. quando c'è almeno un evento vero, cancella la scheda "Presto qui".

## I colori

| Nome | Codice | Dove |
|---|---|---|
| Verde | `#61ab30` | logo |
| Magenta | `#b05275` | logo, Love Therapy |
| Blu | `#3b8aca` | logo, EcoLogica |
| Viola | `#786d9f` | logo |
| Verde foglia | `#2f6e4a` | Jungle |
| Arancio | `#f07f3c` | murales |
| Giallo | `#f6d23e` | murales |
| Crema | `#fbf6ea` | sfondo |

Sono tutti definiti all'inizio di `assets/css/stile.css`.

## Vedere il sito sul proprio computer

Si può aprire `index.html` con un doppio clic. Per una prova identica al sito pubblicato conviene un piccolo server locale, per esempio con Python:

```
py -m http.server 5500
```

e poi aprire `http://localhost:5500`.
