@echo off
title Newlight Quiz App
cd /d "%~dp0"
if exist "node_modules\electron\dist\electron.exe" (
    ".\node_modules\electron\dist\electron.exe" .
) else (
    npx electron .
)

