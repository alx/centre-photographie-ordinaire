# centre de la photographie ordinaire — site (Hugo)

Premier jet statique, conforme à la charte graphique web.

## Lancer en local

```
hugo server
```

→ http://127.0.0.1:1313 (recalage automatique à la sauvegarde des fichiers)

## Générer la version finale

```
hugo --minify
```

Le site prêt à publier est dans `public/` — il suffit de copier ce dossier
sur l'hébergement (Ikoula/OVH/autre). Aucun serveur PHP/Node requis.

## Arborescence

```
content/            ← tout le texte est ici (Markdown, modifier librement)
  _index.md         accueil (grille de photos)
  actualite/        ← une fiche par article d'actualité
  histoire.md       « la collection, son histoire »
  le-centre.md
  series/           ← une sous-dossier par série
    serie-le-mariage/index.md   front matter : images: [10 chemins]
    ...
  expositions-passees/
  soutenir.md  collecte.md  recherche-et-edition.md
  contact/_index.md           formulaire avec champ piégé (honeypot)
data/photos.json  ← liste des photos de l'accueil (100 entrées)
static/collection/ ← 100 images SVG « à remplacer » par les vraies photos
layouts/          ← les gabarits (ne toucher qu'en connaissance de cause)
assets/css/main.css  ← charte graphique (couleurs, polices)
```

## Charte graphique

- fond `#2A2E33`, texte `#F5EFE4`, accents jaune `#FAB617` / orange `#F37120`
- titres : DINdong (propriétaire — utilisée si installée, sinon substitut
  condensé) ; corps : Spectral (Google Fonts)
- À trancher (cf. charte p.4) : cadre des photos (ici : cadre fin clair),
  légendes (italique vs petites capitales)

## Ajouter du contenu

- **Nouvelle page d'actualité** : `content/actualite/mon-article.md` avec
  front matter `title:`, `date:`, éventuellement `image:`.
- **Nouvelle série** : créer `content/series/serie-mon-theme/index.md` avec
  `images: ["/collection/a.svg", ...]` (10 chemins). Les vignettes sont
  éparpillées automatiquement (positions stables par série, calculées en JS).
- **Nouvelle exposition passée** : `content/expositions-passees/ma-expo.md`
  avec `date:`, `lieu:`, `image:`.

## Remplacer les photos provisoires

Les 100 images de `static/collection/` sont des SVG de remplissage.
Remplacer par les vraies photos (`.jpg`/`.webp`) en gardant les noms
`p001.svg` → `p001.webp` et mettre à jour `data/photos.json`
(champs `src` et `alt`) ainsi que les front matter `images:` des séries.
Quand les photos seront fournies, un script de génération de
`data/photos.json` et des front matter sera fourni.

## À faire avant la mise en ligne (TODO)

1. Textes provisoires → rédiger les contenus (repérer les
   `<!-- TEXTE PROVISOIRE -->`).
2. Logo officiel en SVG dans `static/` (remplacer le mot-logotexte si souhaité).
3. Formulaire de contact : brancher sur un endpoint (petit script serveur
   ou Formspree/Getform) + test anti-spam.
4. Réseaux sociaux : liens dans `layouts/partials/footer.html`.
5. Statistiques conformes RGPD : Plausible ou Matomo (pas de cookie).
6. Domaine `centredelaphotographieordinaire.fr` (Ikoula) → pointer vers
   le dossier `public/` (ou le sous-domaine de test d'abord).
7. Quand l'ensemble des 400 séries sera prêt : vérifier le poids total
   (viser < 100 Ko par page, images en webp avec dimensions).
