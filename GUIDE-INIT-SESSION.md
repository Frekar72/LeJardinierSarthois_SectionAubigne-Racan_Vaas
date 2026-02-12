# 🚀 Guide d'utilisation de la commande /init-session

## Qu'est-ce que c'est ?

`/init-session` est une commande magique qui analyse automatiquement l'ensemble du projet et vous donne un contexte complet en quelques secondes.

**En résumé** : C'est comme si vous demandiez à Claude "Dis-moi tout ce qui s'est passé depuis ma dernière session et où on en est !"

---

## 📋 Quand l'utiliser ?

### ✅ Utilisez /init-session dans ces cas :

1. **Début de journée de travail**
   - Vous revenez après une nuit/weekend
   - Vous voulez savoir ce qui a changé

2. **Nouvelle session Claude Code**
   - Vous avez fermé et rouvert Claude Code
   - Le contexte précédent est perdu

3. **Après une longue pause**
   - Plusieurs jours sans toucher au projet
   - Vous ne vous souvenez plus où vous en étiez

4. **Avant de développer une nouvelle feature**
   - Vous voulez être sûr d'avoir le contexte complet
   - Vous voulez vérifier qu'il n'y a pas de conflits

5. **Quand quelqu'un d'autre a travaillé sur le projet**
   - Vous voulez voir les derniers commits
   - Vous voulez comprendre ce qui a été fait

### ❌ NE PAS utiliser /init-session si :

- Vous êtes déjà en pleine session de travail
- Vous venez juste de l'utiliser (< 1 heure)
- Claude a déjà le contexte complet du projet

---

## 🎯 Comment l'utiliser ?

### Dans Claude Code (VSCode Extension)

1. Ouvrez le projet dans VSCode
2. Ouvrez le panneau Claude Code (Ctrl+Shift+P → "Claude Code")
3. Tapez simplement : `/init-session`
4. Appuyez sur Entrée
5. Attendez 5-10 secondes

**C'est tout !** 🎉

### Exemple d'utilisation

```
Vous : /init-session

Claude :
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 INITIALISATION SESSION - Le Jardinier Sarthois
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 INFORMATIONS PROJET
• Version : 0.2.0
• Phase actuelle : Phase 3 terminée
• Prochaine phase : Phase 4 - Pages secondaires

📁 ÉTAT DU REPOSITORY
• Branche : main
• Fichiers modifiés : 0
• Commits en avance : 0

📜 HISTORIQUE GIT (72 dernières heures)
• 0602d0e - feat(tools): ajouter commande /init-session
• fa58d9d - feat(dev): configurer environnement de développement local
• 05198d5 - fix: ajouter index.html à la racine pour GitHub Pages

[... reste du rapport ...]

💡 PRÊT À DÉVELOPPER !
Contexte chargé. Quelle fonctionnalité voulez-vous développer ?
```

---

## 🔍 Ce que la commande analyse

### Documentation lue automatiquement :
- ✅ `.claude.md` - Contexte complet du projet
- ✅ `README.md` - Vue d'ensemble
- ✅ `.dev/project-todo.md` - Tâches et avancement
- ✅ `.dev/architecture.md` - Architecture technique
- ✅ `.dev/requirements.md` - Cahier des charges

### Informations Git analysées :
- ✅ Commits des 72 dernières heures
- ✅ Branche active
- ✅ Fichiers modifiés/non trackés
- ✅ État de synchronisation avec origin

### Structure du projet :
- ✅ Pages HTML existantes
- ✅ Scripts JavaScript
- ✅ Fichiers CSS
- ✅ Images optimisées

---

## 📊 Format du rapport

Le rapport généré contient les sections suivantes :

### 1. **Informations projet**
- Nom, version, phase actuelle
- Stack technique
- Liens essentiels (prod, repo, local)

### 2. **État du repository**
- Branche active
- Fichiers modifiés
- État de synchronisation

### 3. **Historique Git**
- Commits des 72 dernières heures
- Avec hash et message

### 4. **Phases complétées**
- Liste des phases terminées
- Tâches accomplies

### 5. **Phase actuelle**
- Tâches en cours
- Objectifs de la phase

### 6. **Prochaines tâches**
- 5 prochaines tâches prioritaires
- Issues à traiter

### 7. **Structure actuelle**
- Fichiers du projet
- Assets disponibles

### 8. **Workflow de développement**
- Rappel du processus
- Commandes importantes

### 9. **Règles importantes**
- Best practices
- Points d'attention

---

## 💡 Cas d'usage réels

### Scénario 1 : Reprise après le weekend

```
Lundi matin, vous ouvrez le projet.

Vous : /init-session

Claude :
📊 INFORMATIONS PROJET
• Version : 0.2.0
• Phase actuelle : Phase 3 terminée

📜 HISTORIQUE (72h)
• fa58d9d - feat(dev): environnement de développement local
  (vendredi dernier)

📋 PROCHAINES TÂCHES
1. [ ] Créer page Actualités
2. [ ] Créer page Agenda
3. [ ] Créer page Galerie

💡 PRÊT À DÉVELOPPER !

Vous : Ok super ! Je vais commencer par la page Actualités alors.
```

### Scénario 2 : Après un commit d'un collègue

```
Vous : /init-session

Claude :
📁 ÉTAT DU REPOSITORY
• Branche : main
• Fichiers modifiés : 0
• Commits en retard : 3 (pull requis !)

📜 HISTORIQUE (72h)
• abc1234 - feat(gallery): ajouter page galerie (Marie, il y a 2h)
• def5678 - fix(responsive): corriger menu mobile (Paul, hier)
• ghi9012 - feat(contact): formulaire de contact (Sarah, hier)

⚠️ ACTION REQUISE
Votre branche locale est en retard de 3 commits.
Exécutez : git pull origin main

Vous : Ah merci ! Je vais pull d'abord.
```

### Scénario 3 : Avant de commencer une grosse feature

```
Vous : /init-session

Claude :
📊 INFORMATIONS PROJET
• Phase actuelle : Phase 4 - Pages secondaires (40% complété)

✅ PHASES COMPLÉTÉES
✓ Phase 1 : Fondations
✓ Phase 2 : Déploiement
✓ Phase 3 : Environnement dev

🎯 PHASE ACTUELLE
Phase 4 : Pages secondaires (2/5 complétées)
• ✅ Page Actualités
• ✅ Page Agenda
• ⏳ Page Galerie (en cours)
• [ ] Page Contact
• [ ] Page À propos

Vous : Je vais finir la page Galerie avec la lightbox.
Claude : Parfait ! Voici comment on peut implémenter la lightbox...
```

---

## 🎓 Bonnes pratiques

### ✅ À FAIRE

1. **Utilisez /init-session au début de chaque session**
   - Vous aurez toujours le contexte complet
   - Vous éviterez les erreurs

2. **Vérifiez le rapport Git**
   - Assurez-vous d'être à jour
   - Tirez (pull) si nécessaire

3. **Lisez les prochaines tâches**
   - Vous saurez quoi faire
   - Vous suivrez le plan

4. **Respectez les règles rappelées**
   - Workflow de développement
   - Best practices

### ❌ À ÉVITER

1. **Ne pas lancer /init-session plusieurs fois de suite**
   - Inutile, le contexte est déjà chargé
   - Perte de temps

2. **Ne pas ignorer les avertissements Git**
   - Si des commits sont en retard → pull
   - Si des fichiers sont modifiés → commit ou stash

3. **Ne pas sauter les étapes du workflow**
   - Toujours tester en local d'abord
   - Puis commit, puis push

---

## 🔧 Personnalisation

Vous pouvez modifier la commande en éditant :
`.claude/commands/init-session.md`

Par exemple, pour ajouter d'autres fichiers à lire ou d'autres sections au rapport.

---

## 📚 En savoir plus

- [Documentation des commandes](.claude/commands/README.md)
- [Guide Claude Code](https://docs.anthropic.com/claude/docs/claude-code)
- [Workflow du projet](README.md#workflow-de-développement-complet)

---

## 🆘 Dépannage

### La commande ne s'affiche pas

**Problème** : `/init-session` n'apparaît pas dans l'autocomplétion

**Solutions** :
1. Vérifiez que le fichier existe : `.claude/commands/init-session.md`
2. Redémarrez Claude Code (Ctrl+Shift+P → "Reload Window")
3. Vérifiez que vous êtes dans le bon répertoire de travail

### La commande est lente

**Problème** : `/init-session` prend plus de 30 secondes

**Causes possibles** :
- Beaucoup de commits dans les 72h (normal, juste attendre)
- Connexion lente au repository Git
- Beaucoup de fichiers dans le projet

**Solutions** :
- C'est normal pour un gros projet
- La première fois est plus lente
- Les fois suivantes sont plus rapides (cache Git)

### Le rapport est incomplet

**Problème** : Certaines sections manquent

**Causes** :
- Fichiers de documentation manquants
- Erreur Git

**Solutions** :
1. Vérifiez que tous les fichiers .md existent
2. Exécutez `git status` manuellement pour vérifier Git
3. Relancez `/init-session`

---

**Créé le** : 2025-11-30
**Version** : 1.0
**Projet** : Le Jardinier Sarthois
