@echo off
title Legal Metrology Backend Server (Port 5000)
cd /d "%~dp0backend"
echo ================================================================
echo   Starting Legal Metrology Backend API (Port 5000)
echo ================================================================
node src/server.js
pause
