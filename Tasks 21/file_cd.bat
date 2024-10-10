@echo off

REM This script creates three new folders with cool names.

REM Create the first folder
mkdir "CoolFolder1"

REM Create the second folder
mkdir "AwesomeDirectory"

REM Create the third folder
mkdir "EpicFolder2023"

REM Navigate inside the first folder
cd "CoolFolder1"

REM Create three new folders inside the first folder
mkdir "SubFolder1"
mkdir "SubFolder2"
mkdir "SubFolder3"

REM Navigate back to the parent directory
cd ..

REM Remove two of the directories
rmdir /s /q "AwesomeDirectory"
rmdir /s /q "EpicFolder2023"
