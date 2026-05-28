@echo off
setlocal

cd /d "%~dp0"
if not defined PORT set "PORT=8000"

where py >nul 2>nul
if %errorlevel%==0 (
    set "PYTHON=py -3"
    goto :serve
)

where python >nul 2>nul
if %errorlevel%==0 (
    set "PYTHON=python"
    goto :serve
)

echo Python was not found.
echo Please install Python 3, then run this file again:
echo https://www.python.org/downloads/
pause
exit /b 1

:serve
set "START_PORT=%PORT%"
set "PORT="
for /f %%P in ('powershell -NoProfile -Command "$start=[int]$env:START_PORT; $end=$start+100; for ($p=$start; $p -le $end; $p++) { $busy=Get-NetTCPConnection -LocalPort $p -State Listen -ErrorAction SilentlyContinue; if (-not $busy) { $p; break } }"') do set "PORT=%%P"

if not defined PORT (
    echo No available port found.
    pause
    exit /b 1
)

set "URL=http://localhost:%PORT%/"
echo Starting local preview at %URL%
echo Close this window to stop the server.
start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Milliseconds 700; Start-Process '%URL%'"
%PYTHON% -m http.server %PORT%

echo.
echo Server stopped.
pause
