# Script PowerShell pour optimiser les images
# Redimensionne les images à 1920px max et réduit la qualité

Add-Type -AssemblyName System.Drawing

$imageDir = ".\images"
$backupDir = ".\images\originals"
$maxWidth = 1920
$maxHeight = 1920
$quality = 85L

# Créer le dossier de backup
if (!(Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
    Write-Host "Dossier de backup créé: $backupDir`n" -ForegroundColor Green
}

# Fonction pour obtenir l'encodeur JPEG
function Get-EncoderInfo {
    param([string]$mimeType)
    $encoders = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
    foreach ($encoder in $encoders) {
        if ($encoder.MimeType -eq $mimeType) {
            return $encoder
        }
    }
    return $null
}

# Lister toutes les images
$images = Get-ChildItem -Path $imageDir -Include *.jpg,*.jpeg,*.png -File

Write-Host "Optimisation de $($images.Count) images...`n" -ForegroundColor Cyan

$successCount = 0

foreach ($image in $images) {
    try {
        $originalSize = [math]::Round($image.Length / 1MB, 2)
        Write-Host "📸 $($image.Name) (Taille originale: $originalSize Mo)" -ForegroundColor Yellow

        # Créer le backup si nécessaire
        $backupPath = Join-Path $backupDir $image.Name
        if (!(Test-Path $backupPath)) {
            Copy-Item $image.FullName -Destination $backupPath
            Write-Host "  ✓ Backup créé" -ForegroundColor Gray
        }

        # Charger l'image
        $bitmap = [System.Drawing.Image]::FromFile($image.FullName)
        $width = $bitmap.Width
        $height = $bitmap.Height

        Write-Host "  Dimensions originales: ${width}x${height}" -ForegroundColor Gray

        # Calculer les nouvelles dimensions
        if ($width -gt $maxWidth -or $height -gt $maxHeight) {
            $ratio = [math]::Min($maxWidth / $width, $maxHeight / $height)
            $newWidth = [int]($width * $ratio)
            $newHeight = [int]($height * $ratio)

            Write-Host "  Nouvelles dimensions: ${newWidth}x${newHeight}" -ForegroundColor Gray

            # Créer une nouvelle image redimensionnée
            $newBitmap = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
            $graphics = [System.Drawing.Graphics]::FromImage($newBitmap)
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $graphics.DrawImage($bitmap, 0, 0, $newWidth, $newHeight)

            # Fermer l'image originale
            $bitmap.Dispose()

            # Configurer l'encodeur JPEG avec la qualité
            $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
                [System.Drawing.Imaging.Encoder]::Quality, $quality
            )
            $jpegEncoder = Get-EncoderInfo -mimeType "image/jpeg"

            # Sauvegarder
            $newBitmap.Save($image.FullName, $jpegEncoder, $encoderParams)
            $newBitmap.Dispose()
            $graphics.Dispose()
        } else {
            Write-Host "  Image déjà aux bonnes dimensions, compression uniquement" -ForegroundColor Gray

            # Configurer l'encodeur JPEG avec la qualité
            $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
                [System.Drawing.Imaging.Encoder]::Quality, $quality
            )
            $jpegEncoder = Get-EncoderInfo -mimeType "image/jpeg"

            # Créer une copie temporaire
            $tempBitmap = $bitmap.Clone()
            $bitmap.Dispose()

            # Sauvegarder avec compression
            $tempBitmap.Save($image.FullName, $jpegEncoder, $encoderParams)
            $tempBitmap.Dispose()
        }

        # Afficher la nouvelle taille
        $newImage = Get-Item $image.FullName
        $newSize = [math]::Round($newImage.Length / 1MB, 2)
        $reduction = [math]::Round((($originalSize - $newSize) / $originalSize) * 100, 1)

        Write-Host "  Nouvelle taille: $newSize Mo (réduction de $reduction%)" -ForegroundColor Green
        Write-Host "  ✓ Optimisée avec succès`n" -ForegroundColor Green

        $successCount++
    }
    catch {
        Write-Host "  ✗ Erreur: $_`n" -ForegroundColor Red
        # Nettoyer en cas d'erreur
        if ($bitmap) { $bitmap.Dispose() }
        if ($newBitmap) { $newBitmap.Dispose() }
        if ($graphics) { $graphics.Dispose() }
    }
}

Write-Host "`n$('='*50)" -ForegroundColor Cyan
Write-Host "Résumé: $successCount/$($images.Count) images optimisées avec succès" -ForegroundColor Green
Write-Host "Les images originales sont sauvegardées dans: $backupDir" -ForegroundColor Yellow
Write-Host "$('='*50)" -ForegroundColor Cyan
