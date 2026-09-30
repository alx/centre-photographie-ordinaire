/* centre de la photographie ordinaire — interactions légères */

/* ---------- menu hamburger (mobile) ---------- */
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  const nav = document.querySelector('.nav');
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

/* ---------- accueil : mélanger la grille à chaque visite ---------- */
/* la visionneuse est assurée par GLightbox (vendor/glightbox), chargé en
   baseof.html ; il se branche sur les liens .glightbox (data-gallery regroupe
   les photos de la même galerie : précédent/suivant, clavier, légendes). */
(function () {
  const grid = document.querySelector('.home-grid');
  if (!grid) return;
  const tiles = Array.from(grid.children);
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  tiles.forEach((t) => grid.appendChild(t));
})();

/* ---------- vignettes éparpillées (page série) ---------- */
function hashSeed(str) {
  let h = 1779033703;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

document.querySelectorAll('.scatter').forEach((box) => {
  const rnd = mulberry32(hashSeed(box.dataset.seed || 'centre'));
  box.querySelectorAll('.scatter-tile').forEach((tile) => {
    const x = 2 + rnd() * 66;                 // % de la largeur
    const y = 4 + rnd() * 55;                 // % de la hauteur
    const rot = (rnd() - 0.5) * 14;           // degrés
    const scale = 0.85 + rnd() * 0.45;
    tile.style.left = x + '%';
    tile.style.top = y + '%';
    tile.style.transform = `rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(2)})`;
    tile.style.zIndex = String(10 + Math.floor(rnd() * 10));
    // l'ouverture en grand est assurée par GLightbox (lien .glightbox)
  });
});
