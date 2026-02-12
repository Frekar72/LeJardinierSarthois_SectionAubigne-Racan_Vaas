# To-Do List - Le Jardinier Sarthois

> Dernière mise à jour : 2025-11-30

## ✅ Terminé

### Phase 0 : Configuration initiale
- [x] Installation de Python 3.12
- [x] Installation de la bibliothèque Pillow
- [x] Création de la structure de dossiers du projet (tools/, docs/)
- [x] Mise en place du cahier des charges (requirements.md)
- [x] Mise en place de la to-do list (project-todo.md)

### Phase 1 : Optimisation des images
- [x] Création du script d'optimisation des images (tools/optimize_images.py)
- [x] Optimisation de toutes les images existantes (13 images)
- [x] Sauvegarde des images originales dans images/originals/
- [x] Vérification des résultats (réduction ~85% de la taille)

### Phase 2 : Fondations du site web
- [x] Création de la structure src/ (pages/, css/, js/, content/)
- [x] Création du fichier .claude.md (contexte complet)
- [x] Création de requirements.md (spécifications)
- [x] Création de architecture.md (architecture technique)
- [x] Initialisation Git et premier commit
- [x] Création de la landing page (index.html)
- [x] Configuration Tailwind CSS (via CDN)
- [x] Création des styles custom (custom.css)
- [x] Création du JavaScript principal (main.js)

### Phase 3 : Déploiement et environnement de développement
- [x] Configuration du dépôt GitHub (https://github.com/Frekar72/LeJardinierSarthois_SectionAubigne-Racan_Vaas)
- [x] Déploiement sur GitHub Pages (https://frekar72.github.io/LeJardinierSarthois_SectionAubigne-Racan_Vaas/)
- [x] Correction des chemins pour GitHub Pages (index.html à la racine)
- [x] Configuration serveur local de développement (Python HTTP server)
- [x] Création du script de démarrage serveur (start-server.bat)
- [x] Automatisation de l'ouverture du navigateur (Chrome auto-launch)
- [x] Création du raccourci Bureau pour démarrage rapide
- [x] Documentation du workflow local/production (LANCEMENT-SERVEUR.txt)

---

## 🔄 En cours

_Aucune tâche en cours pour le moment._

---

## 📋 À faire

### Phase 4 : Pages secondaires
- [ ] Créer page Actualités (actualites.html)
- [ ] Créer page Agenda (agenda.html)
- [ ] Créer page Galerie (galerie.html)
- [ ] Créer page Contact (contact.html)
- [ ] Créer page À propos (a-propos.html)

### Phase 5 : Contenu dynamique
- [ ] Système de chargement Markdown pour les articles
- [ ] Galerie photos interactive avec lightbox
- [ ] Formulaire de contact fonctionnel
- [ ] Calendrier des événements

### Phase 6 : Optimisations et finitions
- [ ] Tests de performance (Lighthouse score > 90)
- [ ] Tests responsive (mobile, tablette, desktop)
- [ ] Tests navigateurs (Chrome, Firefox, Safari, Edge)
- [ ] Optimisation SEO avancée
- [ ] Configuration domaine personnalisé (optionnel)

---

## 💡 Idées / Questions en suspens

_Cette section contient les points à clarifier ou les idées à explorer._

---

## 📝 Notes

- **Organisation du code** : Structure professionnelle
  - `.dev/` : Documentation et gestion de projet
  - `src/` : Code source du site
  - `public/` : Fichiers publics (images, downloads)
  - `Documents/` : Documents métier/administratifs
  - `tools/` : Scripts utilitaires
- **Images** : Format optimisé = max 1920px, qualité JPEG 85%, < 1 Mo
- **Backup** : Les originaux sont toujours sauvegardés avant modification

## 🚀 Workflow de développement

### Développement local
1. Double-cliquer sur **"Serveur - Le Jardinier Sarthois.bat"** sur le Bureau
2. Le serveur démarre automatiquement sur http://localhost:8000
3. Chrome s'ouvre automatiquement avec le site
4. Faire les modifications dans les fichiers
5. Rafraîchir le navigateur pour voir les changements
6. Fermer la fenêtre du serveur quand terminé

### Déploiement en production
1. Tester en local avec le serveur de développement
2. Vérifier que tout fonctionne correctement
3. Ajouter les fichiers modifiés : `git add .`
4. Créer un commit : `git commit -m "description"`
5. Pousser sur GitHub : `git push origin main`
6. Attendre 1-2 minutes pour le déploiement automatique
7. Vérifier sur : https://frekar72.github.io/LeJardinierSarthois_SectionAubigne-Racan_Vaas/

### Fichiers importants
- **index.html** (racine) : Fichier pour GitHub Pages (ne pas modifier directement)
- **src/index.html** : Fichier source (à modifier pour les changements)
- **start-server.bat** : Script de démarrage du serveur local
- **LANCEMENT-SERVEUR.txt** : Documentation du serveur local
