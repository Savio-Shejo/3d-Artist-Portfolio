@echo off
echo Starting Auto-Sync for Kova3D Portfolio...
echo Press Ctrl+C to stop.

:loop
git add .
git diff-index --quiet HEAD || (
    echo Changes detected. Committing and pushing...
    git commit -m "Auto-save: %date% %time%"
    git push origin main
    echo Sync complete.
)
timeout /t 10 >nul
goto loop
