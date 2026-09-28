@echo off
title Legal Metrology SIH 26036 Launcher
echo ================================================================
echo   GOVERNMENT OF INDIA - DEPARTMENT OF LEGAL METROLOGY (SIH 26036)
echo   Launching Backend API and Frontend Portal...
echo ================================================================
start "Legal Metrology Backend (Port 5000)" cmd /k "%~dp0run_backend.bat"
timeout /t 3 /nobreak >nul
start "Legal Metrology Frontend (Port 5173)" cmd /k "%~dp0run_frontend.bat"
timeout /t 2 /nobreak >nul
start http://localhost:5173
echo Both servers have been launched.
