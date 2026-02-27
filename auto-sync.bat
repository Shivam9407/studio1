@echo off
echo Auto-syncing changes to GitHub...
git add .
git commit -m "Auto-sync update"
git push origin main
echo Done!
pause
