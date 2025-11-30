@echo off
set NODE_PATH=d:\TRAE\TRAE_1\node.js
set PATH=%NODE_PATH%;%PATH%
d:\TRAE\TRAE_1\node.js\node.exe d:\TRAE\TRAE_1\node.js\node_modules\npm\bin\npm-cli.js install terser --save-dev
d:\TRAE\TRAE_1\node.js\node.exe d:\TRAE\TRAE_1\node.js\node_modules\npm\bin\npm-cli.js run build