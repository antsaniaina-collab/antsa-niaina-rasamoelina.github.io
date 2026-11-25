/**
 * ==========================================================================
 * FICHIER DE PERSONNALISATION CENTRALISÉ DU PORTFOLIO
 * ==========================================================================
 * Modifiez uniquement ce fichier pour adapter vos coordonnées, vos textes,
 * vos 4 projets phares, votre parcours et vos engagements.
 * Consultez GUIDE-PERSONNALISATION.md pour les instructions pas à pas.
 */

window.PORTFOLIO_DATA = {
  profile: {
    monogram: "AR",
    fullName: "Antsaniaina Rasamoelina",
    roleTitle: "Graphiste Freelance · Affiches, Logos, Menus & Print",
    availability: "Disponible · Missions Freelance & Collaborations",
    location: "GRAPHISTE FREELANCE · REMOTE & SUR SITE",
    email: "antsagraphiste.mg@gmail.com",
    phone: "Disponible par email",
    website: "@antsagraphiste",
    heroTitleHtml:
      'Je crée des <em>affiches</em>, logos, menus et flyers simples, lisibles et <em>prêts à imprimer</em>.',
    heroLeadHtml:
      "<strong>Graphiste freelance avec 2 ans d'expérience</strong>. Je réalise des <strong>affiches événementielles, logos vectoriels, menus de restaurant, cartes de visite et flyers</strong> avec un travail soigné sur la lisibilité, les couleurs et les fichiers d'impression.",
    contactDesc:
      "Vous recherchez un graphiste freelance honnête, réactif et rigoureux pour créer votre affiche, votre logo, vos menus ou vos flyers ? Échangeons simplement sur votre besoin.",
    stats: [
      { value: "2 ans", label: "De pratique graphique intensive" },
      { value: "100 %", label: "Travaux graphiques sans artifice" },
      { value: "24h", label: "Réactivité & respect des délais" }
    ],
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/antsa-niaina-rasamoelina-graphiste" },
      { label: "Instagram", url: "https://www.instagram.com/antsagraphiste" }
    ]
  },

  /* ========================================================================
     LES 4 PROJETS SIMPLES ET AUTHENTIQUES (ZÉRO MOCKUP IA)
     ======================================================================== */
  projects: [
    {
      id: "affiche-live-passion",
      index: "01",
      category: "culture",
      categoryLabel: "Affiche Événementielle",
      isPoster: true,
      title: "Live Passion — Affiche Événementielle",
      client: "Réalisation Personnelle · Affiche Portrait",
      year: "2026",
      duration: "1 semaine",
      role: "Graphiste — Affiche, Détourage & Typographie",
      team: "Création personnelle (avec mon portrait)",
      image: "assets/project-affiche-passion.jpg",
      imageAlt:
        "Affiche événementielle Live Passion avec le portrait d'Antsaniaina Rasamoelina, typographie dorée et blanche sur fond sombre",
      shortSummary:
        "Ma réalisation réelle d'affiche événementielle intégrant mon propre portrait : détourage sous Photoshop, halo lumineux doré, texte passé derrière le sujet et hiérarchie claire de la date, l'heure et du lieu.",
      impactHighlight:
        "Montre concrètement ma maîtrise du détourage portrait, du jeu typographique et de la mise en page d'affiche contrastée.",
      deliverables: [
        "Affiche A3 / A2 Print",
        "Détourage & Retouche portrait",
        "Format Story Instagram",
        "Export PDF HD & PNG"
      ],
      context:
        "Créer une affiche événementielle percutante qui met un visage en avant tout en gardant la date, l'horaire, l'adresse et le contact immédiatement lisibles.",
      approach:
        "Superposition de plans entre le portrait détouré et le grand titre « PASSION » en jaune or, éclairé par un halo ambré sur fond noir pour faire ressortir le sujet.",
      execution:
        "Détourage propre du portrait sous Photoshop, réglage des ombres et lumières, ajout d'une trame de texte discrète en fond et alignement net des informations en bas et sur les côtés.",
      typography: {
        display: "Condensed Bold + Script",
        body: "Serif & Sans-Serif",
        sample: "LIVE PASSION · 25 DEC 2026 · 7PM"
      },
      palette: [
        { name: "Noir Scène", hex: "#121211" },
        { name: "Or Ambré", hex: "#E0A83A" },
        { name: "Blanc Pur", hex: "#FFFFFF" },
        { name: "Gris Charbon", hex: "#2A2927" }
      ],
      kpis: [
        { value: "Réelle", label: "Affiche 100 % créée par mes soins avec ma photo" },
        { value: "3", label: "Niveaux de lecture (Titre, Portrait, Infos)" },
        { value: "Print + Web", label: "Livrable en PDF d'impression et format Instagram" }
      ],
      logoSvg: `<svg viewBox="0 0 210 72" width="180" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Titre typographique Live Passion">
        <text x="16" y="30" fill="#E0A83A" font-family="Georgia, serif" font-style="italic" font-size="16">Live</text>
        <text x="16" y="51" fill="currentColor" font-family="Arial, sans-serif" font-weight="900" font-size="22" letter-spacing="2">PASSION</text>
        <line x1="16" y1="58" x2="188" y2="58" stroke="#E0A83A" stroke-width="1.5"/>
      </svg>`
    },
    {
      id: "logo-kora-cafe",
      index: "02",
      category: "branding",
      categoryLabel: "Création de Logo",
      title: "Kora Café — Planche de Logo",
      client: "Projet Concept · Logo Vectoriel",
      year: "2025",
      duration: "1 semaine",
      role: "Graphiste — Logo & Déclinaisons",
      team: "Planche vectorielle 100 % Illustrator",
      image: "assets/project-logo-kora.svg",
      imageAlt:
        "Planche de présentation vectorielle du logo Kora Café avec déclinaisons noir, fond sombre et palette 3 couleurs",
      shortSummary:
        "Création d'un logo simple, géométrique et facile à reconnaître pour un café : présentation sur planche vectorielle avec version noire, version blanche sur fond sombre et palette 3 couleurs.",
      impactHighlight:
        "Présentation nette de logotype telle qu'un graphiste la remet à un client : propre, vectorielle et utilisable partout (enseigne, tampon, réseaux).",
      deliverables: [
        "Logo vectoriel principal",
        "Version monochrome noir",
        "Version fond sombre",
        "Palette 3 couleurs HEX/CMJN"
      ],
      context:
        "Un commerce a d'abord besoin d'un logo simple qui reste lisible en tout petit (profil Instagram, tampon, étiquette) comme en grand (devanture).",
      approach:
        "Construction géométrique épurée associant une tasse stylisée et un demi-cercle soleil terracotta, accompagnée d'une typographie sans-serif bien espacée.",
      execution:
        "Dessin sous Adobe Illustrator sur grille simple, exportation en fichiers AI, EPS, SVG et PNG transparents sur fond clair et fond sombre.",
      typography: {
        display: "Sans-serif géométrique",
        body: "Monospace (Sous-titre)",
        sample: "KORA · CAFÉ & COMPTOIR"
      },
      palette: [
        { name: "Charbon", hex: "#1C1B19" },
        { name: "Terracotta", hex: "#B8502C" },
        { name: "Crème Doux", hex: "#F5EFE6" },
        { name: "Blanc Pur", hex: "#FFFFFF" }
      ],
      kpis: [
        { value: "3", label: "Versions prêtes (couleur, noir, fond sombre)" },
        { value: "100 %", label: "Vectoriel pur redimensionnable à l'infini" },
        { value: "4", label: "Formats livrés : AI, EPS, SVG et PNG" }
      ],
      logoSvg: `<svg viewBox="0 0 210 72" width="180" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Kora Café">
        <path d="M18 32 C18 20, 48 20, 48 32 Z" fill="#B8502C"/>
        <path d="M16 35 H50 C50 47, 43 54, 33 54 C23 54, 16 47, 16 35 Z" fill="currentColor"/>
        <path d="M50 38 H54 C58 38, 59 41, 59 44 C59 47, 57 49, 53 49 H48" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <text x="72" y="38" fill="currentColor" font-family="Arial, sans-serif" font-weight="800" font-size="18" letter-spacing="3">KORA</text>
        <text x="72" y="52" fill="#B8502C" font-family="monospace" font-size="9" letter-spacing="2">CAFÉ &amp; COMPTOIR</text>
      </svg>`
    },
    {
      id: "menu-le-petit-bistro",
      index: "03",
      category: "edition",
      categoryLabel: "Menu de Restaurant",
      title: "Le Petit Bistro — Menu A4 Recto/Verso",
      client: "Projet Concept · Mise en page Menu",
      year: "2025",
      duration: "1 semaine",
      role: "Graphiste — Mise en page & Typographie",
      team: "Maquette à plat prête à imprimer",
      image: "assets/project-menu-bistro.svg",
      imageAlt:
        "Maquette plate recto-verso du menu A4 Le Petit Bistro présentant entrées, plats, desserts, boissons et formule du midi",
      shortSummary:
        "Mise en page complète d'une carte de restaurant A4 recto-verso : hiérarchie claire entre entrées, plats, desserts, boissons et formule du midi, avec alignement net des prix.",
      impactHighlight:
        "Démontre mon sens de la lisibilité et de l'organisation de texte sous InDesign : un client trouve son plat et son prix instantanément.",
      deliverables: [
        "Menu A4 Recto (Entrées & Plats)",
        "Menu A4 Verso (Desserts & Boissons)",
        "Encadré Formule du Midi",
        "PDF Print avec fonds perdus"
      ],
      context:
        "Beaucoup de menus sont difficiles à lire à cause de polices trop petites ou de prix mal alignés. L'enjeu était de concevoir une carte simple, chaleureuse et parfaitement structurée.",
      approach:
        "Utilisation de deux couleurs principales (vert sauge foncé et terracotta sur papier crème) pour séparer visuellement la carte salée du recto et les desserts/boissons du verso.",
      execution:
        "Montage sous Adobe InDesign avec styles de paragraphes, tabulations propres pour aligner les prix à droite, et préparation du PDF haute définition prêt pour l'imprimeur.",
      typography: {
        display: "Serif classique",
        body: "Sans-serif + Monospace (Prix)",
        sample: "Entrée + Plat · 19,50 €"
      },
      palette: [
        { name: "Papier Crème", hex: "#FCF9F2" },
        { name: "Vert Bistro", hex: "#2D4A3E" },
        { name: "Terracotta", hex: "#B8502C" },
        { name: "Encre Foncée", hex: "#1D2B24" }
      ],
      kpis: [
        { value: "2 pages", label: "Recto-verso A4 clair et facile à plastifier" },
        { value: "100 %", label: "Prix et descriptions alignés sur grille InDesign" },
        { value: "CMJN", label: "Contraste élevé lisible même en éclairage doux" }
      ],
      logoSvg: `<svg viewBox="0 0 210 72" width="180" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="En-tête Le Petit Bistro">
        <rect x="14" y="14" width="182" height="44" stroke="currentColor" stroke-width="1.2"/>
        <text x="105" y="34" text-anchor="middle" fill="#B8502C" font-family="monospace" font-size="8" letter-spacing="2">RESTAURANT</text>
        <text x="105" y="49" text-anchor="middle" fill="currentColor" font-family="Georgia, serif" font-size="14" letter-spacing="1.2">LE PETIT BISTRO</text>
      </svg>`
    },
    {
      id: "flyer-carte-elan",
      index: "04",
      category: "edition",
      categoryLabel: "Flyer & Carte de Visite",
      title: "Élan Studio — Flyer A5 & Carte de Visite",
      client: "Projet Concept · Communication Locale",
      year: "2024",
      duration: "1 semaine",
      role: "Graphiste — Flyer, Carte & Logo simple",
      team: "Pack communication imprimée réaliste",
      image: "assets/project-flyer-carte.svg",
      imageAlt:
        "Présentation à plat du flyer A5 et de la carte de visite recto-verso 85x55 mm pour Élan Studio",
      shortSummary:
        "Création d'un flyer promotionnel A5 et d'une carte de visite recto-verso (85×55 mm) coordonnés pour une activité locale : message accrocheur, points clés lisibles et appel à l'action net.",
      impactHighlight:
        "Prouve ma capacité à concevoir les supports les plus demandés aux graphistes freelances : flyers efficaces et cartes de visite prêtes à imprimer.",
      deliverables: [
        "Flyer A5 (148×210 mm)",
        "Carte de visite Recto / Verso",
        "Emblème géométrique simple",
        "Export PDF Print 300 dpi"
      ],
      context:
        "Un indépendant ou une petite entreprise a besoin d'un flyer qui donne envie de lire en 3 secondes et d'une carte de visite claire à laisser à ses prospects.",
      approach:
        "Palette dynamique bleu marine et orange vif, gros titre d'accroche direct, liste à puces aérée et bouton d'offre bien visible en bas de flyer.",
      execution:
        "Création de l'emblème sous Illustrator, mise en page du flyer A5 et des cartes 85×55 mm avec marges de coupe 3 mm et vérification de la taille des polices de contact.",
      typography: {
        display: "Sans-serif Bold",
        body: "Sans-serif + Monospace",
        sample: "REPRENEZ LE RYTHME · 85×55 MM"
      },
      palette: [
        { name: "Bleu Marine", hex: "#16222F" },
        { name: "Orange Élan", hex: "#F08A24" },
        { name: "Blanc Pur", hex: "#FFFFFF" },
        { name: "Gris Ardoise", hex: "#475569" }
      ],
      kpis: [
        { value: "A5 + 85×55", label: "Formats standards prêts pour tout imprimeur" },
        { value: "3", label: "Zones claires : Accroche, Avantages, Offre" },
        { value: "300 dpi", label: "Fonds perdus 3 mm & texte vectorisé" }
      ],
      logoSvg: `<svg viewBox="0 0 210 72" width="180" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Élan Studio">
        <polygon points="18,36 32,26 46,36 32,46" fill="#F08A24"/>
        <text x="60" y="38" fill="currentColor" font-family="Arial, sans-serif" font-weight="800" font-size="16" letter-spacing="2.5">ÉLAN STUDIO</text>
        <text x="60" y="51" fill="#F08A24" font-family="monospace" font-size="8.5" letter-spacing="1.8">SPORT &amp; BIEN-ÊTRE</text>
      </svg>`
    }
  ],

  /* ========================================================================
     MÉTHODOLOGIE & COMPÉTENCES (100 % GRAPHISME, ZÉRO ARTIFICE)
     ======================================================================== */
  methodology: [
    {
      step: "01 / ÉCOUTE",
      title: "Compréhension du Brief",
      desc: "Analyse de votre demande, de votre public et du format final (affiche, logo, menu, flyer) pour partir sur une direction juste."
    },
    {
      step: "02 / PROPOSITION",
      title: "Recherche & Couleurs",
      desc: "Choix des typographies, de la palette de couleurs et d'une mise en scène claire adaptée à votre activité."
    },
    {
      step: "03 / RÉALISATION",
      title: "Montage & Précision",
      desc: "Détourage propre, dessin vectoriel net, alignement soigné des textes et vérification de la lisibilité à toutes les tailles."
    },
    {
      step: "04 / LIVRAISON",
      title: "Fichiers Prêts à l'Emploi",
      desc: "Remise des fichiers sources et exports propres (PDF HD pour impression, PNG/JPG pour écrans et réseaux sociaux)."
    }
  ],

  skills: {
    disciplines: [
      "Affiches événementielles & promo",
      "Création de logos simples & nets",
      "Menus & cartes de restaurant",
      "Flyers & dépliants",
      "Cartes de visite & papeterie",
      "Détourage & retouche photo",
      "Mise en page & typographie",
      "Visuels pour réseaux sociaux"
    ],
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Pré-presse (CMJN, fonds perdus 3 mm)",
      "Vectorisation de logos",
      "Exports Print HD & Réseaux sociaux"
    ],
    sectors: [
      "Événements & Soirées",
      "Restaurants, Cafés & Snacks",
      "Commerces & Artisans",
      "Coachs & Indépendants",
      "PME & Associations",
      "Communication locale"
    ]
  },

  /* ========================================================================
     PARCOURS (2 ANS D'EXPÉRIENCE), FORMATION & ENGAGEMENTS
     ======================================================================== */
  experiences: [
    {
      period: "2024 — Présent",
      role: "Graphiste Freelance — Affiches, Logos, Menus & Flyers",
      company: "Antsaniaina Rasamoelina · Indépendant",
      desc: "2 ans de pratique intensive et création de supports visuels réalistes : affiches avec photomontage portrait, logos vectoriels, menus de restaurant, cartes de visite et flyers prêts pour l'impression."
    },
    {
      period: "2023 — 2024",
      role: "Apprentissage & Pratique Suite Adobe",
      company: "Projets personnels & Exercices concrets",
      desc: "Maîtrise progressive de Photoshop, Illustrator et InDesign à travers la réalisation d'affiches, de détourages photo, de logos et de mises en page print."
    }
  ],

  education: [
    {
      title: "Pratique intensive en Design Graphique",
      school: "2 ans d'entraînement — Affiches, Logos, Menus & Print",
      year: "2024–2026"
    },
    {
      title: "Maîtrise Photoshop · Illustrator · InDesign",
      school: "Détourage, dessin vectoriel, mise en page & export CMJN",
      year: "Opérationnel"
    }
  ],

  testimonials: [
    {
      quote:
        "Des fichiers propres et directement utilisables : vous recevez vos logos en vectoriel (AI, SVG, PNG) et vos affiches, menus ou flyers en PDF haute définition prêts pour l'imprimeur.",
      author: "Rigueur technique & Pré-presse",
      title: "Engagement qualité n°1 · Prêt pour l'impression"
    },
    {
      quote:
        "Un travail honnête, lisible et sans fioritures inutiles : chaque visuel est conçu pour que vos clients comprennent immédiatement votre message.",
      author: "Clarté, Écoute & Réactivité",
      title: "Engagement qualité n°2 · Réponse sous 24h"
    }
  ],

  languages: ["Français (Courant)", "Anglais (Débutant)"]
};
