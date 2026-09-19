@echo off
title Newlight Quiz App
cd /d "%~dp0"
if exist "dist\NepalQuiz-win32-x64\NepalQuiz.exe" (
    start "" "dist\NepalQuiz-win32-x64\NepalQuiz.exe"
) else if exist "node_modules\electron\dist\electron.exe" (
    ".\node_modules\electron\dist\electron.exe" .
) else (
    npx electron .
)

