# Commande d'initialisation de session - Le Jardinier Sarthois

Tu es Claude Code, assistant de développement expert. Une nouvelle session de développement démarre.

**Ton rôle** : Analyser l'état complet du projet et fournir un contexte synthétique pour être opérationnel immédiatement.

---

## 📋 ÉTAPE 1 : Lecture de la documentation prioritaire

Lis les fichiers suivants dans cet ordre :

1. **`.claude.md`** - Contexte complet du projet et directives
2. **`README.md`** - Vue d'ensemble et statut
3. **`.dev/project-todo.md`** - État d'avancement et prochaines tâches
4. **`.dev/architecture.md`** - Architecture technique détaillée
5. **`.dev/requirements.md`** - Cahier des charges et spécifications

---

## 📋 ÉTAPE 2 : Analyse de l'état Git

Exécute les commandes Git suivantes (en parallèle) :

```bash
git status
git log --since="72 hours ago" --oneline --all
git diff --stat
git branch -a
```

---

## 📋 ÉTAPE 3 : Analyse de la structure du projet

Identifie :
- Les pages HTML existantes dans `src/pages/`
- Les images dans `public/images/`
- Les fichiers JavaScript dans `src/js/`
- Les fichiers CSS dans `src/css/`

---

## 📋 ÉTAPE 4 : Rapport de session

Génère un rapport structuré au format suivant :

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 INITIALISATION SESSION - Le Jardinier Sarthois
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 INFORMATIONS PROJET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Nom : Le Jardinier Sarthois
• Section : Aubigné-Racan / Vaas
• Version actuelle : [extraire du README]
• Phase en cours : [extraire de project-todo.md]
• Stack technique : HTML5 + Tailwind CSS + JavaScript Vanilla
• Hébergement : GitHub Pages

🔗 LIENS ESSENTIELS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Production : https://frekar72.github.io/LeJardinierSarthois_SectionAubigne-Racan_Vaas/
• Repository : https://github.com/Frekar72/LeJardinierSarthois_SectionAubigne-Racan_Vaas
• Local dev : http://localhost:8000

📁 ÉTAT DU REPOSITORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Branche active : [git branch]
• Fichiers modifiés : [git status]
• Fichiers non trackés : [git status]
• Commits en avance/retard : [git status]

📜 HISTORIQUE GIT (72 dernières heures)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Lister les commits des 72 dernières heures avec hash et message]

✅ PHASES COMPLÉTÉES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Extraire de project-todo.md les phases marquées comme terminées]

🎯 PHASE ACTUELLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Extraire de project-todo.md la phase en cours et ses tâches]

📋 PROCHAINES TÂCHES PRIORITAIRES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Lister les 5 prochaines tâches de project-todo.md]

🏗️ STRUCTURE ACTUELLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pages HTML :
[Lister les fichiers .html dans src/]

Scripts JS :
[Lister les fichiers .js dans src/js/]

Styles CSS :
[Lister les fichiers .css dans src/css/]

Images optimisées :
[Nombre total d'images dans public/images/]

⚙️ WORKFLOW DE DÉVELOPPEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Développement local :
   → Double-clic sur "Serveur - Le Jardinier Sarthois.bat" (Bureau)
   → Serveur démarre sur http://localhost:8000
   → Chrome s'ouvre automatiquement

2. Modification des fichiers :
   → Éditer dans src/ (PAS dans la racine !)
   → Rafraîchir le navigateur pour voir les changements

3. Déploiement en production :
   → Tester en local d'abord !
   → git add . && git commit -m "message"
   → git push origin main
   → Attendre 1-2 min → vérifier sur GitHub Pages

⚠️ RÈGLES IMPORTANTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• TOUJOURS optimiser les images avant ajout (tools/optimize_images.py)
• NE JAMAIS modifier index.html à la racine (fichier généré pour GitHub Pages)
• TOUJOURS modifier src/index.html (fichier source)
• JAMAIS pousser sur GitHub sans test local
• Respecter la palette de couleurs jardin (voir .claude.md)
• Mobile-first : toujours penser responsive
• Accessibilité : alt sur images, contraste, etc.

💡 PRÊT À DÉVELOPPER !
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Contexte chargé avec succès. Je suis prêt à travailler sur ce projet.

Quelle est la prochaine fonctionnalité à développer ?
```

---

## 📋 ÉTAPE 5 : Être prêt pour la suite

Une fois le rapport affiché :
- Garde en mémoire tout le contexte des fichiers lus
- Sois prêt à répondre aux questions
- Propose des next steps si pertinent
- Reste focus sur la qualité et les bonnes pratiques du projet

---

**IMPORTANT** : Exécute toutes ces étapes de manière efficace. Lis tous les fichiers mentionnés, exécute toutes les commandes Git, et génère un rapport complet et structuré. Ne saute aucune étape.
