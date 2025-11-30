# Cahier des charges - Le Jardinier Sarthois

## Contexte du projet
Site web pour "Le Jardinier Sarthois" - Association de jardiniers.

---

## Historique des spécifications

### 2025-11-30

#### ✅ Optimisation des images
**Problème identifié :**
- Erreur "Image was too large. Double press esc to go back and try again with a smaller image"
- Images originales trop volumineuses (entre 2 Mo et 7 Mo)

**Solution mise en œuvre :**
- Création d'un script Python d'optimisation des images
- Redimensionnement automatique à 1920px maximum
- Compression JPEG à 85% de qualité
- Sauvegarde automatique des originaux dans `public/images/originals/`
- Résultat : réduction de ~85% de la taille (images maintenant < 1 Mo)

**Statut :** ✅ Terminé

---

## Spécifications du site web

### 1. Objectif général
Créer un site web moderne, user-friendly et facile à maintenir pour l'association "Le Jardinier Sarthois" (section Aubigné-Racan / Vaas).

### 2. Public cible
- Membres de l'association
- Futurs membres potentiels
- Grand public intéressé par le jardinage
- Habitants de la région Sarthe

### 3. Fonctionnalités demandées

#### Pages principales
1. **Landing Page (Accueil)**
   - Présentation de l'association
   - Images attractives du jardin et des légumes
   - Texte de bienvenue
   - Appels à l'action (Nous rejoindre, Voir les événements)

2. **Actualités / News**
   - Articles et annonces
   - Gestion par fichiers Markdown
   - Affichage chronologique (plus récent en premier)
   - Vignettes avec images

3. **Agenda / Événements**
   - Liste des événements à venir
   - Date, heure, lieu, description
   - Gestion par fichiers Markdown
   - Affichage calendrier ou liste

4. **Galerie Photos**
   - Présentation des réalisations
   - Photos de légumes, jardins, événements
   - Mise en page en grille responsive
   - Lightbox pour agrandissement

5. **Contact**
   - Formulaire de contact (ou simplement email/téléphone)
   - Informations de l'association
   - Localisation (carte optionnelle)

6. **À propos**
   - Histoire de l'association
   - Membres du bureau
   - Valeurs et objectifs

### 4. Design et identité visuelle

#### Palette de couleurs (inspirée des images)
- **Vert** : Couleur principale (nature, jardinage) - #2d5016, #4a7c2f
- **Jaune/Orange** : Couleurs secondaires (courges, soleil) - #f59e0b, #ea580c
- **Violet/Rose** : Accents (fleurs) - #a855f7, #ec4899
- **Beige/Crème** : Fond neutre - #fef3c7, #fef5e7
- **Vert foncé/Blanc** : Rayures de la tente sur les photos

#### Style visuel
- Design moderne et épuré
- Inspiré par la nature et le jardinage
- Images de haute qualité mises en avant
- Typographie lisible et accessible
- Responsive (mobile, tablette, desktop)

#### Éléments visuels
- Photos de légumes colorés (courges, tomates, aubergines)
- Photos de fleurs
- Photos de l'équipe de l'association
- Icônes nature/jardinage
- Illustrations végétales subtiles

### 5. Choix techniques

#### Stack technique
- **HTML5** : Structure sémantique
- **Tailwind CSS** : Framework CSS utilitaire moderne
- **JavaScript Vanilla** : Interactions légères (pas de framework lourd)
- **Fichiers Markdown** : Gestion du contenu (articles, événements)
- **Pas de base de données** : Simplicité et hébergement gratuit

#### Hébergement
Options gratuites à explorer :
- **GitHub Pages** (recommandé pour démarrer)
- **Netlify** (gratuit avec domaine custom)
- **Vercel** (gratuit pour sites statiques)
- **Cloudflare Pages**

#### Versioning
- **Git** : Versioning local et remote
- **GitHub/GitLab** : Hébergement du code source

### 6. Accessibilité et performance
- Site accessible (WCAG 2.1 niveau AA)
- Performance optimale (Lighthouse score > 90)
- Images optimisées (déjà fait)
- Compatibilité navigateurs modernes
- SEO basique (meta tags, sitemap)

### 7. Maintenance
- Ajout de contenu facile via fichiers Markdown
- Pas besoin de compétences techniques avancées
- Documentation claire pour les futurs administrateurs
- Processus de déploiement simple

### 8. Contraintes
- Pas d'authentification requise (site public)
- Pas de base de données
- Budget : gratuit (hébergement et outils)
- Maintenance : simple et accessible aux non-développeurs

---

## Notes importantes
- Toutes les modifications doivent respecter les bonnes pratiques de développement
- Organisation du projet : structure professionnelle avec `.dev/`, `public/`, `src/`, `tools/`
- Garder une documentation à jour

---

## Structure du projet

```
le_jardinier_sarthois/
├── .dev/                       # Documentation et gestion de projet (caché)
│   ├── requirements.md         # Ce fichier
│   └── todo.md                 # Suivi des tâches
├── src/                        # Code source du site (futur)
├── public/                     # Fichiers publics du site
│   ├── images/                 # Images optimisées
│   │   └── originals/          # Backup des images originales
│   └── downloads/              # Fichiers téléchargeables (PDFs, etc.)
├── Documents/                  # Documents métier/administratifs
├── tools/                      # Scripts utilitaires de développement
└── nul                         # À nettoyer
```
