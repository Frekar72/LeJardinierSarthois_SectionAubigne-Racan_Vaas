@echo off
echo ========================================
echo   Le Jardinier Sarthois - Serveur Local
echo ========================================
echo.
echo Demarrage du serveur HTTP local...
echo.
echo Votre site sera accessible sur :
echo   http://localhost:8000
echo.
echo Ouverture automatique de Chrome dans 3 secondes...
echo.
echo Appuyez sur CTRL+C pour arreter le serveur
echo ========================================
echo.

cd /d "%~dp0"

REM Demarrer le serveur en arriere-plan
start /B "" "C:\Users\frede\AppData\Local\Programs\Python\Python312\python.exe" -m http.server 8000

REM Attendre 3 secondes que le serveur demarre
timeout /t 3 /nobreak >nul

REM Ouvrir Chrome avec l'URL du site
start "" "chrome.exe" "http://localhost:8000"

REM Afficher les logs du serveur
echo.
echo Chrome a ete lance avec http://localhost:8000
echo.
echo Le serveur tourne en arriere-plan...
echo Pour arreter le serveur, fermez cette fenetre.
echo ========================================
echo.

REM Garder la fenetre ouverte
pause
