#!/bin/bash

# delete lyx's backup file
find ./ -name "*.lyx~" -exec rm {} \;
