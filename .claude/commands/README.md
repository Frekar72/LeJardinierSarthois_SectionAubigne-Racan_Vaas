# Commandes Claude personnalisées

Ce dossier contient les commandes slash personnalisées pour le projet Le Jardinier Sarthois.

## 📋 Commandes disponibles

### `/init-session` - Initialisation de session de développement

**Utilisation** : `/init-session`

**Description** : Analyse complète du projet pour démarrer une nouvelle session de développement. Cette commande lit toute la documentation, analyse l'historique Git des 72 dernières heures, et génère un rapport synthétique de l'état du projet.

**Quand l'utiliser** :
- ✅ Au début d'une nouvelle session de développement
- ✅ Après une pause prolongée (plusieurs jours)
- ✅ Avant de commencer une nouvelle fonctionnalité
- ✅ Pour se re-contextualiser rapidement sur le projet
- ✅ Quand un nouveau développeur rejoint le projet

**Ce qu'elle fait** :
1. Lit la documentation complète (.claude.md, README.md, project-todo.md, etc.)
2. Analyse l'historique Git des 72 dernières heures
3. Identifie l'état actuel du projet (branche, fichiers modifiés, etc.)
4. Liste la structure du projet (pages, scripts, images)
5. Génère un rapport structuré avec :
   - Informations du projet
   - État du repository
   - Historique récent
   - Phases complétées et en cours
   - Prochaines tâches prioritaires
   - Workflow de développement
   - Règles importantes

**Exemple de sortie** :
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 INITIALISATION SESSION - Le Jardinier Sarthois
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 INFORMATIONS PROJET
Version : 0.2.0
Phase : Phase 3 terminée - Environnement de développement

[... rapport complet ...]

💡 PRÊT À DÉVELOPPER !
```

**Temps d'exécution** : ~5-10 secondes

---

## 🔧 Comment créer une nouvelle commande

1. Créer un fichier `.md` dans `.claude/commands/`
2. Le nom du fichier détermine le nom de la commande (ex: `ma-commande.md` → `/ma-commande`)
3. Écrire les instructions pour Claude dans le fichier
4. La commande sera automatiquement disponible via `/nom-de-la-commande`

**Exemple** :
```markdown
# Ma commande personnalisée

Instructions pour Claude...

Fais ceci, puis cela...
```

Ensuite, dans Claude Code : `/ma-commande`

---

## 📚 Documentation

- [Documentation Claude Code](https://docs.anthropic.com/claude/docs/claude-code)
- [Guide des slash commands](https://docs.anthropic.com/claude/docs/claude-code#custom-commands)

---

**Dernière mise à jour** : 2025-11-30
