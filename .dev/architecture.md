# Architecture technique - Le Jardinier Sarthois

> Documentation de l'architecture technique du site web

---

## 1. Vue d'ensemble

### Stack technique
- **Frontend** : HTML5 + Tailwind CSS + JavaScript Vanilla
- **Contenu** : Fichiers Markdown
- **Versioning** : Git (local + GitHub)
- **Hébergement** : GitHub Pages (gratuit)
- **Build** : Aucun (site statique pur)

### Dépôt GitHub
- **URL** : https://github.com/Frekar72/LeJardinierSarthois_SectionAubigne-Racan_Vaas
- **Propriétaire** : Frekar72
- **Branche principale** : main
- **GitHub Pages** : https://frekar72.github.io/LeJardinierSarthois_SectionAubigne-Racan_Vaas/

### Schéma de l'architecture

```
┌─────────────────────────────────────────────────────────┐
│                  Utilisateur (Navigateur)                │
└──────────────────────┬──────────────────────────────────┘
                       │
                       │ HTTPS
                       ▼
┌─────────────────────────────────────────────────────────┐
│              GitHub Pages (CDN Global)                   │
│  ┌──────────────────────────────────────────────────┐  │
│  │            Fichiers statiques HTML/CSS/JS         │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                       ▲
                       │ git push
                       │
┌─────────────────────────────────────────────────────────┐
│              Repository GitHub (origin)                  │
│  github.com/Frekar72/LeJardinier...SectionAubigne...   │
│  ┌──────────────────────────────────────────────────┐  │
│  │         Code source + fichiers Markdown           │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                       ▲
                       │ git push
                       │
┌─────────────────────────────────────────────────────────┐
│            Dépôt Git Local (développement)               │
│  src/ + public/ + .dev/ + tools/                        │
└─────────────────────────────────────────────────────────┘
```

---

## 2. Structure des fichiers

### Arborescence complète

```
le_jardinier_sarthois/
│
├── .dev/                           # Documentation (ignoré par .gitignore en prod)
│   ├── requirements.md
│   ├── architecture.md             # Ce fichier
│   └── todo.md
│
├── src/                            # Code source du site
│   ├── index.html                  # Landing page
│   │
│   ├── pages/                      # Pages du site
│   │   ├── actualites.html
│   │   ├── agenda.html
│   │   ├── galerie.html
│   │   ├── contact.html
│   │   └── a-propos.html
│   │
│   ├── css/                        # Feuilles de style
│   │   ├── tailwind.css            # Configuration Tailwind
│   │   └── custom.css              # Styles personnalisés (si besoin)
│   │
│   ├── js/                         # Scripts JavaScript
│   │   ├── main.js                 # Script principal (nav, etc.)
│   │   ├── markdown-loader.js      # Chargement fichiers Markdown
│   │   ├── gallery.js              # Galerie photos
│   │   └── utils.js                # Fonctions utilitaires
│   │
│   └── content/                    # Contenu Markdown
│       ├── news/                   # Articles actualités
│       │   ├── 2025-11-30-exemple-article.md
│       │   └── 2025-12-01-autre-article.md
│       └── events/                 # Événements
│           ├── 2025-12-15-atelier-jardinage.md
│           └── 2026-01-10-fete-des-legumes.md
│
├── public/                         # Fichiers publics
│   ├── images/                     # Images optimisées
│   │   ├── hero-bg.jpg
│   │   ├── legumes-1.jpg
│   │   ├── events/
│   │   ├── gallery/
│   │   └── originals/              # Backup (ignoré en prod)
│   │
│   ├── downloads/                  # Fichiers téléchargeables
│   │   ├── tarifs.pdf
│   │   └── plantes-ta-graine.pdf
│   │
│   └── favicon/                    # Favicons
│       ├── favicon.ico
│       └── apple-touch-icon.png
│
├── Documents/                      # Documents métier (ignoré par Git)
│   └── (fichiers administratifs)
│
├── tools/                          # Scripts utilitaires
│   ├── README.md
│   ├── optimize_images.py
│   └── markdown-to-json.js         # Convertir MD en JSON (optionnel)
│
├── .gitignore                      # Fichiers à ignorer par Git
├── .claude.md                      # Contexte pour Claude Code
├── README.md                       # Documentation principale
└── tailwind.config.js              # Configuration Tailwind
```

---

## 3. Détail des composants

### 3.1 Pages HTML

#### Structure type d'une page

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Description SEO de la page">
    <meta name="keywords" content="jardinage, sarthe, aubigné-racan">

    <!-- Open Graph -->
    <meta property="og:title" content="Titre de la page">
    <meta property="og:description" content="Description">
    <meta property="og:image" content="/public/images/og-image.jpg">

    <title>Titre de la page - Le Jardinier Sarthois</title>

    <!-- Tailwind CSS -->
    <link href="/src/css/tailwind.css" rel="stylesheet">
    <link href="/src/css/custom.css" rel="stylesheet">

    <!-- Favicon -->
    <link rel="icon" href="/public/favicon/favicon.ico">
</head>
<body class="font-sans antialiased">

    <!-- Header/Navigation -->
    <header class="bg-jardin-vert-fonce text-white">
        <nav id="mainNav">
            <!-- Navigation incluse via JS ou inline -->
        </nav>
    </header>

    <!-- Contenu principal -->
    <main class="min-h-screen">
        <article>
            <!-- Contenu spécifique de la page -->
        </article>
    </main>

    <!-- Footer -->
    <footer class="bg-jardin-vert-fonce text-white">
        <!-- Footer inclus via JS ou inline -->
    </footer>

    <!-- Scripts -->
    <script src="/src/js/main.js" defer></script>
    <script src="/src/js/page-specific.js" defer></script>
</body>
</html>
```

#### Pages et leurs rôles

| Page | Fichier | Description |
|------|---------|-------------|
| **Accueil** | `index.html` | Landing page avec hero, présentation, aperçus |
| **Actualités** | `pages/actualites.html` | Liste des articles (chargés depuis Markdown) |
| **Agenda** | `pages/agenda.html` | Événements à venir et passés |
| **Galerie** | `pages/galerie.html` | Galerie photos avec lightbox |
| **Contact** | `pages/contact.html` | Infos contact + formulaire |
| **À propos** | `pages/a-propos.html` | Présentation association |

---

### 3.2 CSS / Tailwind

#### Configuration Tailwind (`tailwind.config.js`)

```javascript
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'jardin-vert': {
          light: '#4a7c2f',
          DEFAULT: '#2d5016',
          dark: '#1a300d',
        },
        'jardin-orange': {
          light: '#f59e0b',
          DEFAULT: '#ea580c',
        },
        'jardin-violet': '#a855f7',
        'jardin-rose': '#ec4899',
        'jardin-beige': '#fef3c7',
        'jardin-creme': '#fef5e7',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

#### Organisation des styles

1. **Tailwind utilities** : 90% des styles
2. **Custom CSS** (`custom.css`) : Uniquement pour cas spéciaux
   - Animations personnalisées
   - Styles complexes non réalisables avec Tailwind
   - Surcharges très spécifiques

```css
/* custom.css - Exemple */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Animations personnalisées */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

/* Composants custom si nécessaire */
.card-hover {
  @apply transition-transform duration-300 hover:scale-105 hover:shadow-xl;
}
```

---

### 3.3 JavaScript

#### Architecture modulaire

```
src/js/
├── main.js             # Point d'entrée principal
├── markdown-loader.js  # Chargement contenu Markdown
├── gallery.js          # Galerie photos
├── navigation.js       # Navigation responsive
└── utils.js            # Fonctions utilitaires
```

#### Exemple : `main.js`

```javascript
// main.js - Point d'entrée principal

document.addEventListener('DOMContentLoaded', () => {
    // Initialiser la navigation
    initNavigation();

    // Charger le contenu dynamique si nécessaire
    const page = document.body.dataset.page;

    switch(page) {
        case 'actualites':
            loadNews();
            break;
        case 'agenda':
            loadEvents();
            break;
        case 'galerie':
            initGallery();
            break;
    }
});

// Gestion du menu mobile
function initNavigation() {
    const menuButton = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuButton?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}
```

#### Exemple : `markdown-loader.js`

```javascript
// markdown-loader.js - Chargement fichiers Markdown

/**
 * Charge et parse un fichier Markdown
 * @param {string} filepath - Chemin vers le fichier MD
 * @returns {Promise<Object>} Objet avec frontmatter et contenu
 */
async function loadMarkdownFile(filepath) {
    try {
        const response = await fetch(filepath);
        const text = await response.text();

        // Parser frontmatter (YAML) et contenu
        const { frontmatter, content } = parseMarkdown(text);

        return { frontmatter, content };
    } catch (error) {
        console.error(`Erreur chargement ${filepath}:`, error);
        return null;
    }
}

/**
 * Parse un contenu Markdown avec frontmatter
 */
function parseMarkdown(text) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = text.match(frontmatterRegex);

    if (!match) {
        return { frontmatter: {}, content: text };
    }

    const frontmatter = parseYAML(match[1]);
    const content = match[2];

    return { frontmatter, content };
}

/**
 * Parse simple du YAML frontmatter
 */
function parseYAML(yamlString) {
    const lines = yamlString.split('\n');
    const result = {};

    lines.forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
            const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
            result[key.trim()] = value;
        }
    });

    return result;
}

/**
 * Charge tous les articles d'actualités
 */
async function loadAllNews() {
    // Liste des fichiers (à générer côté build ou hardcoder)
    const newsFiles = [
        '/src/content/news/2025-11-30-exemple.md',
        '/src/content/news/2025-12-01-autre.md',
    ];

    const articles = await Promise.all(
        newsFiles.map(file => loadMarkdownFile(file))
    );

    return articles.filter(a => a !== null);
}
```

---

### 3.4 Gestion du contenu Markdown

#### Format standardisé

**Articles (News) :**
```markdown
---
title: "Titre de l'article"
date: 2025-11-30
author: "Jean Dupont"
image: "/public/images/article-photo.jpg"
excerpt: "Résumé court de 150 caractères maximum pour les vignettes"
tags: ["jardinage", "événement", "atelier"]
---

# Titre de l'article

Contenu de l'article en Markdown...

## Sous-titre

Paragraphe avec **gras**, *italique*, [liens](https://example.com).

![Photo](/ public/images/photo.jpg)

### Liste
- Item 1
- Item 2
```

**Événements (Events) :**
```markdown
---
title: "Atelier jardinage bio"
date: 2025-12-15
time: "14:00"
location: "Salle des fêtes, Aubigné-Racan"
image: "/public/images/events/atelier.jpg"
excerpt: "Venez découvrir les techniques de jardinage biologique"
registration: true
contact: "jardinier.sarthois@example.com"
---

# Atelier jardinage bio

Description complète de l'événement...
```

#### Workflow de publication

```
1. Rédaction           → Créer fichier MD dans src/content/news/
2. Ajout image         → Placer dans public/images/
3. Optimisation        → python tools/optimize_images.py
4. Test local          → Ouvrir le site en local
5. Commit              → git commit -m "feat(content): ajouter article X"
6. Push                → git push origin main
7. Déploiement auto    → GitHub Pages se met à jour
```

---

## 4. Flux de données

### 4.1 Chargement d'une page

```
1. Utilisateur accède à /pages/actualites.html
                ↓
2. Navigateur charge HTML + CSS + JS
                ↓
3. JavaScript détecte page="actualites"
                ↓
4. markdown-loader.js charge les fichiers MD
                ↓
5. Parsing frontmatter + contenu
                ↓
6. Conversion Markdown → HTML (bibliothèque ou simple)
                ↓
7. Injection dans le DOM
                ↓
8. Affichage à l'utilisateur
```

### 4.2 Ajout d'un nouvel article

```
Développeur/Éditeur
        ↓
1. Crée fichier MD dans src/content/news/
        ↓
2. Ajoute image dans public/images/
        ↓
3. Optimise image (script Python)
        ↓
4. Git commit + push
        ↓
GitHub Actions (ou manuel)
        ↓
5. Déploiement GitHub Pages
        ↓
Site mis à jour automatiquement
```

---

## 5. Hébergement & Déploiement

### 5.1 GitHub Pages

**Avantages :**
- ✅ Gratuit
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Déploiement automatique
- ✅ Domaine custom possible

**Configuration :**
1. Repository GitHub : https://github.com/Frekar72/LeJardinierSarthois_SectionAubigne-Racan_Vaas
2. Settings → Pages
3. Source : Deploy from branch `main`
4. Folder : `/` (root)
5. URL : https://frekar72.github.io/LeJardinierSarthois_SectionAubigne-Racan_Vaas/

**Domaine personnalisé (optionnel) :**
- Acheter domaine (ex: `lejardinier-sarthois.fr`)
- Configurer DNS : CNAME vers `frekar72.github.io`
- Ajouter fichier `CNAME` à la racine du repo

### 5.2 Alternatives hébergement

| Service | Avantages | Limitations |
|---------|-----------|-------------|
| **GitHub Pages** | Simple, gratuit, Git intégré | Sites publics (sauf plan Pro) |
| **Netlify** | Build auto, fonctions serverless | Limite bande passante gratuite |
| **Vercel** | Performance optimale | Orienté frameworks JS |
| **Cloudflare Pages** | CDN ultra-rapide | Configuration plus technique |

**Recommandation :** GitHub Pages pour démarrer, migration vers Netlify si besoin de fonctionnalités avancées.

---

## 6. Performance & Optimisation

### 6.1 Stratégies de performance

**Images :**
- Lazy loading : `<img loading="lazy">`
- Format WebP (conversion optionnelle)
- Dimensions fixes pour éviter layout shift
- Sprites CSS pour icônes (ou SVG inline)

**CSS :**
- Tailwind en mode JIT (Just-In-Time)
- Purge des classes non utilisées en production
- Critical CSS inline pour above-the-fold

**JavaScript :**
- Scripts en `defer` ou `async`
- Code splitting si nécessaire
- Minification en production

**Caching :**
```
# Dans headers (GitHub Pages auto)
Cache-Control: public, max-age=31536000  # Images, CSS, JS
Cache-Control: no-cache                   # HTML
```

### 6.2 Métriques cibles

- **LCP (Largest Contentful Paint)** : < 2.5s
- **FID (First Input Delay)** : < 100ms
- **CLS (Cumulative Layout Shift)** : < 0.1
- **Lighthouse Score** : > 90 (toutes catégories)

---

## 7. Sécurité

### 7.1 Headers de sécurité

```
Content-Security-Policy: default-src 'self'; img-src 'self' https:; script-src 'self'
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### 7.2 Bonnes pratiques

- Pas de données sensibles dans le code
- HTTPS uniquement (forcé par GitHub Pages)
- Validation inputs formulaire côté client ET serveur (si form backend)
- Dépendances à jour (si npm)

---

## 8. Évolutions futures

### Améliorations possibles

**Court terme :**
- [ ] Système de recherche dans les articles
- [ ] Pagination des actualités
- [ ] Filtrage par tags
- [ ] Newsletter (intégration service email)

**Moyen terme :**
- [ ] PWA (Progressive Web App)
- [ ] Mode hors ligne
- [ ] Notifications événements
- [ ] Carte interactive des jardins

**Long terme :**
- [ ] Backend simple (Firebase, Supabase)
- [ ] Espace membre
- [ ] Forum/communauté
- [ ] Boutique en ligne (plants, graines)

---

## 9. Monitoring & Analytics

### Analytics (optionnel)

**Options respectueuses de la vie privée :**
- **Plausible Analytics** (payant mais éthique)
- **Matomo** (open-source, auto-hébergé)
- **Simple Analytics** (payant)

**À éviter :**
- Google Analytics (RGPD complexe)

### Monitoring uptime

- **UptimeRobot** (gratuit, 50 monitors)
- **StatusCake** (gratuit, limité)

---

## 10. Documentation technique

### Pour les développeurs

- `.claude.md` : Contexte complet
- `.dev/architecture.md` : Ce fichier
- `README.md` : Getting started
- Code commenté avec JSDoc

### Pour les éditeurs de contenu

- Guide Markdown (à créer)
- Tutoriel ajout article (à créer)
- Charte éditoriale (à créer)

---

**Dernière mise à jour :** 2025-11-30
**Version :** 0.1.0
