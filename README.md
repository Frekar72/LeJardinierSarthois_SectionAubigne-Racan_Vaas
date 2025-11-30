# Le Jardinier Sarthois

> Site web de l'association "Le Jardinier Sarthois" - Section Aubigné-Racan / Vaas (Sarthe)

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success)](https://frekar72.github.io/LeJardinierSarthois_SectionAubigne-Racan_Vaas/)

## 🌱 À propos

Site web moderne, responsive et facile à maintenir pour l'association de jardinage locale.

- **URL du site** : https://frekar72.github.io/LeJardinierSarthois_SectionAubigne-Racan_Vaas/
- **Dépôt GitHub** : https://github.com/Frekar72/LeJardinierSarthois_SectionAubigne-Racan_Vaas
- **Stack technique** : HTML5 + Tailwind CSS + JavaScript Vanilla

---

## 📁 Structure du projet

```
le_jardinier_sarthois/
├── .dev/                       # Documentation et gestion de projet
│   ├── requirements.md         # Cahier des charges complet
│   ├── architecture.md         # Architecture technique détaillée
│   └── todo.md                 # Suivi des tâches
│
├── src/                        # Code source du site
│   ├── index.html              # Landing page
│   ├── pages/                  # Pages du site
│   │   ├── actualites.html
│   │   ├── agenda.html
│   │   ├── galerie.html
│   │   ├── contact.html
│   │   └── a-propos.html
│   ├── css/                    # Feuilles de style
│   │   ├── tailwind.css
│   │   └── custom.css
│   ├── js/                     # Scripts JavaScript
│   │   ├── main.js
│   │   ├── markdown-loader.js
│   │   └── gallery.js
│   └── content/                # Contenu Markdown
│       ├── news/               # Articles
│       └── events/             # Événements
│
├── public/                     # Fichiers publics du site
│   ├── images/                 # Images optimisées pour le web
│   │   └── originals/          # Backup des images originales
│   └── downloads/              # Fichiers téléchargeables (PDFs)
│
├── Documents/                  # Documents métier et administratifs
│
├── tools/                      # Scripts utilitaires de développement
│   ├── README.md               # Documentation des outils
│   └── optimize_images.py      # Script d'optimisation d'images
│
├── .gitignore                  # Fichiers ignorés par Git
├── .claude.md                  # Contexte pour Claude Code
└── README.md                   # Ce fichier
```

---

## 🚀 Installation et développement local

### Prérequis

- **Python 3.12+** (pour l'optimisation d'images)
- **Pillow** : `pip install Pillow`
- **Git** pour le versioning

### Cloner le projet

```bash
git clone https://github.com/Frekar72/LeJardinierSarthois_SectionAubigne-Racan_Vaas.git
cd LeJardinierSarthois_SectionAubigne-Racan_Vaas
```

### Visualiser le site en local

Ouvrir simplement le fichier [src/index.html](src/index.html) dans votre navigateur.

**Ou utiliser un serveur local (recommandé) :**

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (si installé)
npx serve

# Puis ouvrir : http://localhost:8000/src/
```

---

## 🛠️ Utilisation des outils

### Optimiser les images

**Important** : Toujours optimiser les images avant de les ajouter au site.

```bash
# 1. Placer les images dans public/images/
# 2. Exécuter le script d'optimisation
python tools/optimize_images.py

# Les images seront automatiquement :
# - Redimensionnées (max 1920px)
# - Compressées (qualité 85%)
# - Sauvegardées (backup dans public/images/originals/)
```

Voir [tools/README.md](tools/README.md) pour plus de détails.

---

## 📚 Documentation

- **[.claude.md](.claude.md)** : Contexte complet pour Claude Code (À LIRE EN PRIORITÉ)
- **[Cahier des charges](.dev/requirements.md)** : Spécifications et fonctionnalités
- **[Architecture technique](.dev/architecture.md)** : Documentation technique complète
- **[Suivi des tâches](.dev/todo.md)** : Planning et avancement
- **[Outils de développement](tools/README.md)** : Documentation des scripts

---

## 🌐 Déploiement

### GitHub Pages

Le site est déployé automatiquement via GitHub Pages.

**URL du site** : https://frekar72.github.io/LeJardinierSarthois_SectionAubigne-Racan_Vaas/

### Processus de déploiement

```bash
# 1. Faire vos modifications
# 2. Tester en local
# 3. Commit et push
git add .
git commit -m "feat: description des changements"
git push origin main

# 4. GitHub Pages se met à jour automatiquement (1-2 min)
```

### Configuration GitHub Pages

1. Aller sur https://github.com/Frekar72/LeJardinierSarthois_SectionAubigne-Racan_Vaas/settings/pages
2. Source : **Deploy from branch**
3. Branche : **main**
4. Dossier : **/ (root)**
5. Cliquer sur **Save**

---

## ✍️ Ajouter du contenu

### Ajouter un article

```bash
# 1. Créer un fichier Markdown
nano src/content/news/2025-12-01-mon-article.md

# 2. Ajouter le contenu avec frontmatter
---
title: "Titre de l'article"
date: 2025-12-01
author: "Nom de l'auteur"
image: "/public/images/mon-article.jpg"
excerpt: "Résumé court de l'article"
tags: ["jardinage", "atelier"]
---

# Titre de l'article

Contenu en Markdown...

# 3. Ajouter l'image et l'optimiser
cp ~/Downloads/photo.jpg public/images/mon-article.jpg
python tools/optimize_images.py

# 4. Commit et push
git add .
git commit -m "feat(content): ajouter article mon-article"
git push origin main
```

### Ajouter un événement

Même processus, mais dans `src/content/events/YYYY-MM-DD-nom-evenement.md`

---

## 🎨 Palette de couleurs

Le site utilise une identité visuelle basée sur les couleurs du jardinage :

```css
--jardin-vert-fonce: #2d5016;    /* Vert nature principal */
--jardin-vert-clair: #4a7c2f;    /* Vert plus clair */
--jardin-orange:     #ea580c;    /* Orange courges */
--jardin-jaune:      #f59e0b;    /* Jaune soleil */
--jardin-violet:     #a855f7;    /* Violet fleurs */
--jardin-rose:       #ec4899;    /* Rose fleurs */
--jardin-beige:      #fef3c7;    /* Beige fond neutre */
```

---

## 🤝 Contribuer

### Workflow Git

```bash
# 1. Créer une branche pour votre feature
git checkout -b feature/nom-de-la-feature

# 2. Faire vos modifications
# 3. Commits réguliers
git add .
git commit -m "feat(scope): description"

# 4. Pousser la branche
git push origin feature/nom-de-la-feature

# 5. Créer une Pull Request sur GitHub
```

### Format des commits

Convention : `type(scope): message`

**Types :**
- `feat` : Nouvelle fonctionnalité
- `fix` : Correction de bug
- `docs` : Documentation
- `style` : Formatage (pas de changement de code)
- `refactor` : Refactoring
- `perf` : Performance
- `chore` : Tâches diverses

**Exemples :**
```
feat(gallery): ajouter lightbox
fix(nav): corriger menu mobile responsive
docs(readme): mettre à jour instructions
```

---

## 📋 Bonnes pratiques

- ✅ Toujours optimiser les images avant de les ajouter
- ✅ Tester le site en local avant de pusher
- ✅ Écrire des messages de commit clairs
- ✅ Consulter `.claude.md` avant de modifier l'architecture
- ✅ Mettre à jour la documentation au fur et à mesure
- ✅ Vérifier l'accessibilité (alt sur images, contraste, etc.)
- ✅ Maintenir un score Lighthouse > 90

---

## 🔗 Liens utiles

- **Site en production** : https://frekar72.github.io/LeJardinierSarthois_SectionAubigne-Racan_Vaas/
- **Dépôt GitHub** : https://github.com/Frekar72/LeJardinierSarthois_SectionAubigne-Racan_Vaas
- **Tailwind CSS** : https://tailwindcss.com/docs
- **Markdown Guide** : https://www.markdownguide.org/
- **GitHub Pages** : https://pages.github.com/

---

## 📊 Statut du projet

**Version actuelle** : 0.1.0 (Phase 1 - Fondations)

**Phase 1 : Fondations** ✅
- ✅ Structure de dossiers
- ✅ Documentation complète
- ✅ Git initialisé
- ✅ Landing page créée
- ⏳ Déploiement GitHub Pages en cours

**Phase 2 : Pages principales** (À venir)
- Page Actualités
- Page Agenda
- Page Galerie
- Page Contact
- Page À propos

---

## 📝 Licence

Ce projet est destiné à l'association "Le Jardinier Sarthois".
Tous droits réservés.

---

## 👥 Contact

Pour toute question ou suggestion, contacter l'association :
- Email : [À compléter]
- Téléphone : [À compléter]
- Adresse : Section Aubigné-Racan / Vaas, Sarthe

---

**Projet démarré le :** 30 novembre 2025
**Dernière mise à jour :** 30 novembre 2025
