@echo off
echo ========================================
echo   Le Jardinier Sarthois - Serveur Local
echo ========================================
echo.
echo [DEBUG] Etape 1 : Verification du repertoire...
cd /d "%~dp0"
echo [DEBUG] Repertoire actuel : %cd%
echo.

echo [DEBUG] Etape 2 : Verification de Python...
where python
"C:\Users\frede\AppData\Local\Programs\Python\Python312\python.exe" --version
echo.

echo [DEBUG] Etape 3 : Verification du port 8000...
netstat -ano | findstr :8000
if errorlevel 1 (
    echo [DEBUG] Port 8000 LIBRE - OK
) else (
    echo [ATTENTION] Port 8000 DEJA UTILISE !
    echo [ACTION] Fermeture des processus sur le port 8000...
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :8000 ^| findstr LISTENING') do taskkill /F /PID %%a 2>nul
    timeout /t 2 /nobreak >nul
)
echo.

echo [DEBUG] Etape 4 : Verification du fichier index.html...
if exist "src\index.html" (
    echo [DEBUG] src\index.html EXISTE - OK
) else (
    echo [ERREUR] src\index.html INTROUVABLE !
    pause
    exit
)
echo.

echo [DEBUG] Etape 5 : Demarrage du serveur Python...
echo [INFO] Commande : python -m http.server 8000
echo.
echo ========================================
echo   SERVEUR EN COURS DE DEMARRAGE...
echo ========================================
echo.
echo Attendez 3 secondes puis Chrome s'ouvrira automatiquement
echo.

REM Demarrer le serveur en arriere-plan
start /B "" "C:\Users\frede\AppData\Local\Programs\Python\Python312\python.exe" -m http.server 8000

REM Attendre 3 secondes que le serveur soit pret
timeout /t 3 /nobreak >nul

echo [DEBUG] Etape 6 : Verification que le serveur repond...
netstat -ano | findstr :8000 | findstr LISTENING
if errorlevel 1 (
    echo [ERREUR] Le serveur n'a pas demarre correctement !
    pause
    exit
) else (
    echo [DEBUG] Serveur ACTIF sur le port 8000 - OK
)
echo.

echo [DEBUG] Etape 7 : Ouverture de Chrome...
start "" "chrome.exe" --new-window "http://localhost:8000/src/index.html"
echo [DEBUG] Chrome lance avec URL : http://localhost:8000/src/index.html
echo.

echo ========================================
echo   SERVEUR DEMARRE AVEC SUCCES !
echo ========================================
echo.
echo Site accessible sur : http://localhost:8000/src/index.html
echo.
echo Pour tester la page Contact : http://localhost:8000/src/pages/contact.html
echo.
echo Pour arreter : CTRL+C ou fermez cette fenetre
echo ========================================
echo.
echo [LOGS DU SERVEUR - Les requetes apparaitront ci-dessous]
echo.

REM Garder la fenetre ouverte pour voir les logs
pause
