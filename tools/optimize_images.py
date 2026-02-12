#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script pour optimiser les images du dossier images/
- Redimensionne les images à une largeur maximale de 1920px
- Compresse la qualité JPEG à 85%
- Sauvegarde les originaux dans images/originals/
"""

import os
import sys
from PIL import Image
import shutil

# Forcer l'encodage UTF-8 pour Windows
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Configuration
IMAGE_DIR = "public/images"
BACKUP_DIR = os.path.join(IMAGE_DIR, "originals")
MAX_WIDTH = 1920
MAX_HEIGHT = 1920
JPEG_QUALITY = 85

def optimize_image(image_path):
    """Optimise une image en la redimensionnant et compressant"""
    try:
        # Retirer l'attribut lecture seule si nécessaire
        if os.path.exists(image_path):
            os.chmod(image_path, 0o666)

        # Ouvrir l'image
        img = Image.open(image_path)

        # Récupérer les dimensions originales
        width, height = img.size
        print(f"  Dimensions originales: {width}x{height}")

        # Calculer les nouvelles dimensions en gardant le ratio
        if width > MAX_WIDTH or height > MAX_HEIGHT:
            ratio = min(MAX_WIDTH / width, MAX_HEIGHT / height)
            new_width = int(width * ratio)
            new_height = int(height * ratio)

            # Redimensionner l'image
            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            print(f"  Nouvelles dimensions: {new_width}x{new_height}")
        else:
            print(f"  Image déjà aux bonnes dimensions")

        # Convertir en RGB si nécessaire (pour les PNG avec transparence)
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background

        # Fermer l'image avant de sauvegarder pour libérer le fichier
        img_copy = img.copy()
        img.close()

        # Sauvegarder l'image optimisée
        img_copy.save(image_path, 'JPEG', quality=JPEG_QUALITY, optimize=True)
        img_copy.close()

        # Afficher la nouvelle taille
        new_size = os.path.getsize(image_path) / (1024 * 1024)
        print(f"  Nouvelle taille: {new_size:.2f} Mo")

        return True
    except Exception as e:
        print(f"  Erreur: {e}")
        return False

def main():
    # Créer le dossier de backup s'il n'existe pas
    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)
        print(f"Dossier de backup créé: {BACKUP_DIR}\n")

    # Lister toutes les images
    image_files = [f for f in os.listdir(IMAGE_DIR)
                   if f.lower().endswith(('.jpg', '.jpeg', '.png'))
                   and os.path.isfile(os.path.join(IMAGE_DIR, f))]

    if not image_files:
        print("Aucune image trouvée dans le dossier images/")
        return

    print(f"Optimisation de {len(image_files)} images...\n")

    success_count = 0
    for filename in image_files:
        image_path = os.path.join(IMAGE_DIR, filename)
        backup_path = os.path.join(BACKUP_DIR, filename)

        # Afficher la taille originale
        original_size = os.path.getsize(image_path) / (1024 * 1024)
        print(f"📸 {filename} (Taille originale: {original_size:.2f} Mo)")

        # Sauvegarder l'original
        if not os.path.exists(backup_path):
            shutil.copy2(image_path, backup_path)
            print(f"  ✓ Backup créé")

        # Optimiser l'image
        if optimize_image(image_path):
            success_count += 1
            print(f"  ✓ Optimisée avec succès\n")
        else:
            print(f"  ✗ Échec de l'optimisation\n")

    print(f"\n{'='*50}")
    print(f"Résumé: {success_count}/{len(image_files)} images optimisées avec succès")
    print(f"Les images originales sont sauvegardées dans: {BACKUP_DIR}")
    print(f"{'='*50}")

if __name__ == "__main__":
    main()
