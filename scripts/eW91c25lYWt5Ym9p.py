#!/bin/python3

# crontab script

import os

# https://github.com/the-lne/mwIII_2023-psbb
os.system('cd /var/www/html/htdocs.org/repos/github/mwIII_2023-psbb/ && git pull origin main;'
          'cp /var/www/html/htdocs.org/repos/github/mwIII_2023-psbb/randomMovement.py /var/www/html/htdocs.org/downloads/;'
          'cp /var/www/html/htdocs.org/repos/github/mwIII_2023-psbb/slightlysmarterbot.py /var/www/html/htdocs.org/downloads/')