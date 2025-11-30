# Tools - Scripts utilitaires

Ce dossier contient tous les scripts et outils de développement pour le projet Le Jardinier Sarthois.

## Scripts disponibles

### optimize_images.py
Script Python pour optimiser les images du projet.

**Fonctionnalités :**
- Redimensionne les images à une largeur maximale de 1920px
- Compresse les images JPEG à 85% de qualité
- Sauvegarde automatique des originaux dans `images/originals/`
- Support des formats JPG, JPEG et PNG

**Utilisation :**
```bash
python tools/optimize_images.py
```

**Prérequis :**
- Python 3.12+
- Bibliothèque Pillow : `pip install Pillow`

**Configuration :**
Les paramètres peuvent être modifiés dans le script :
- `MAX_WIDTH` : largeur maximale (défaut: 1920px)
- `MAX_HEIGHT` : hauteur maximale (défaut: 1920px)
- `JPEG_QUALITY` : qualité de compression (défaut: 85)
- `IMAGE_DIR` : dossier des images (défaut: "public/images")

---

### optimize_images.ps1
Version PowerShell du script d'optimisation (alternative pour Windows sans Python).

**Utilisation :**
```powershell
powershell -ExecutionPolicy Bypass -File "tools/optimize_images.ps1"
```

---

## Bonnes pratiques

- Toujours tester les scripts sur une copie avant utilisation en production
- Les backups sont créés automatiquement, mais vérifier leur présence
- Consulter la documentation dans `.dev/` pour plus d'informations
