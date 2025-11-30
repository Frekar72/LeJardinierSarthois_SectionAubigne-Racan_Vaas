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

- **Python 3.12+** (pour le serveur local et l'optimisation d'images)
- **Pillow** : `pip install Pillow`
- **Git** pour le versioning

### Cloner le projet

```bash
git clone https://github.com/Frekar72/LeJardinierSarthois_SectionAubigne-Racan_Vaas.git
cd LeJardinierSarthois_SectionAubigne-Racan_Vaas
```

### Visualiser le site en local

**Méthode recommandée : Serveur de développement automatique**

1. Double-cliquez sur [start-server.bat](start-server.bat)
2. Le serveur démarre automatiquement sur http://localhost:8000
3. Chrome s'ouvre automatiquement avec le site
4. Les images et tous les fichiers sont correctement chargés

**Raccourci Bureau (Windows)**

Un raccourci "Serveur - Le Jardinier Sarthois.bat" a été créé sur le Bureau pour un accès rapide.

**Alternative manuelle :**

```bash
# Avec Python
python -m http.server 8000

# Puis ouvrir manuellement : http://localhost:8000
```

**⚠️ Important** : Toujours tester avec un serveur local (pas en ouvrant directement le fichier HTML) pour que les chemins d'images fonctionnent correctement.

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

### Workflow de développement complet

```bash
# 1. Tester en local AVANT de pousser
#    Double-cliquer sur start-server.bat (ou le raccourci Bureau)
#    Vérifier que tout fonctionne sur http://localhost:8000

# 2. Faire vos modifications dans src/
#    Modifier les fichiers dans src/index.html, src/css/, src/js/, etc.

# 3. Commit et push (UNIQUEMENT après tests locaux réussis)
git add .
git commit -m "feat: description des changements"
git push origin main

# 4. GitHub Pages se met à jour automatiquement (1-2 min)
#    Vérifier sur : https://frekar72.github.io/LeJardinierSarthois_SectionAubigne-Racan_Vaas/
```

**⚠️ Règle d'or** : Ne JAMAIS pousser sur GitHub sans avoir testé en local d'abord !

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

**Version actuelle** : 0.2.0 (Phase 3 - Environnement de développement)

**Phase 1 : Fondations** ✅
- ✅ Structure de dossiers
- ✅ Documentation complète
- ✅ Git initialisé
- ✅ Landing page créée
- ✅ Optimisation des images (13 images, réduction ~85%)

**Phase 2 : Déploiement** ✅
- ✅ Dépôt GitHub configuré
- ✅ GitHub Pages déployé et fonctionnel
- ✅ Correction des chemins pour production
- ✅ Site accessible en ligne

**Phase 3 : Environnement de développement** ✅
- ✅ Serveur local Python HTTP configuré
- ✅ Script de démarrage automatique (start-server.bat)
- ✅ Ouverture automatique de Chrome avec le site
- ✅ Raccourci Bureau pour accès rapide
- ✅ Documentation du workflow local/production

**Phase 4 : Pages principales** (À venir)
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
