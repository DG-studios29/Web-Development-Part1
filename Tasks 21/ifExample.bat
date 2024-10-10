@echo off

REM This script demonstrates conditional statements using if and if-else.

REM Check if 'newFolder' exists and create 'ifFolder' if it does
if exist "newFolder" (
    mkdir "ifFolder"
)

REM Check if 'ifFolder' exists and create 'hyperiondev' if it does, else create 'reactProjects'
if exist "ifFolder" (
    mkdir "hyperiondev"
) else (
    mkdir "reactProjects"
)
