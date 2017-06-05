#!/bin/bash

# delete lyx's backup file
find ./ -name "*.lyx~" -exec rm {} \;
find ./ -name "*474.lyx" -exec rm {} \;
find ./ -name "#*.*#" -exec rm {} \;
find ./ -name "*.log" -exec rm {} \;
find ./ -name "*.aux" -exec rm {} \;
find ./ -name "*.dvi" -exec rm {} \;
