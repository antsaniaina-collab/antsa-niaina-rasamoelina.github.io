# Guide de personnalisation de votre Portfolio

Votre portfolio est conçu pour être **100 % autonome** (aucune installation requise) et **très simple à mettre à jour**.  
Toute votre identité, vos 4 projets, votre parcours et vos témoignages sont regroupés dans un seul fichier : `js/portfolio-data.js`.

---

## 1. Remplacer vos images de projets

Placez vos propres visuels (format recommandé **4:3** ou **16:10**, JPG ou WebP compressé, idéalement entre `1400px` et `1800px` de large) dans le dossier `assets/` :

- `assets/project-1.jpg` → Visuel du Projet 01
- `assets/project-2.jpg` → Visuel du Projet 02
- `assets/project-3.jpg` → Visuel du Projet 03
- `assets/project-4.jpg` → Visuel du Projet 04

> **Astuce recruteur :** privilégiez des mockups en situation (papeterie, packaging, affichage urbain, vue écran) plutôt qu'un logo seul sur fond blanc.

---

## 2. Modifier votre nom, bio, email et réseaux

Ouvrez `js/portfolio-data.js` et modifiez la section `profile` tout en haut du fichier :

- `monogram` : vos initiales dans le header (`"CL"` → vos initiales).
- `fullName` : votre prénom et nom.
- `roleTitle` : votre intitulé exact pour les clients et recruteurs (ex. *"Graphiste Freelance · Identité Visuelle & Print"*).
- `availability` : votre statut (`"Disponible immédiatement · CDI ou Freelance"`).
- `email`, `phone`, `location` : vos coordonnées (elles mettent aussi automatiquement à jour le **CV imprimable**).
- `socials` : remplacez les URLs LinkedIn, Behance, Instagram, Dribbble par les vôtres (ou supprimez les lignes inutiles).

---

## 3. Personnaliser vos 4 études de cas

Dans `js/portfolio-data.js`, le tableau `projects` contient vos 4 projets. Pour chacun, vous pouvez modifier :

- `title`, `client`, `year`, `duration`, `role`, `team`
- `category` (`"branding"`, `"architecture"` ou `"culture"` — ou adaptez les filtres dans `index.html`)
- `impactHighlight` & `kpis` : **très important pour les recruteurs !** Indiquez des chiffres ou effets concrets (notoriété, ventes, fréquentation, gain de temps, nombre de points de vente).
- `context`, `approach`, `execution` : le récit structuré en 3 temps (problème → idée → réalisation).
- `palette` : les 4 codes HEX du projet (les recruteurs peuvent cliquer dessus pour copier la couleur).
- `logoSvg` : vous pouvez coller directement le code `<svg>...</svg>` exporté depuis Illustrator pour afficher votre vrai logotype sur fond clair et fond sombre.

---

## 4. Adapter votre CV intégré & vos expériences

Dans `js/portfolio-data.js`, mettez à jour :
- `experiences` : vos postes en agence, studio ou freelance.
- `education` : vos diplômes et prix.
- `testimonials` : vos engagements qualité ou citations de clients/collaborateurs.

Lorsque les recruteurs cliquent sur **"Aperçu CV"** puis **"Imprimer / Enregistrer en PDF"**, le navigateur génère une mise en page A4 épurée prête à être sauvegardée en PDF.

---

## 5. Mettre le site en ligne gratuitement

Ce site étant 100 % statique (`HTML / CSS / JS`), vous pouvez l'héberger gratuitement en moins de 2 minutes sur :
- **Netlify Drop** (glissez-déposez simplement le dossier `portfolio`),
- **Vercel**, **Cloudflare Pages**, ou **GitHub Pages**.

> Pour activer l'envoi réel du formulaire sans client mail, vous pouvez connecter l'attribut `action` du `<form>` dans `index.html` à un service gratuit comme **Formspree** ou **Web3Forms**.
