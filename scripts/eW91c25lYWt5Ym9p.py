#!/bin/python3

# crontab script
# 0 1 * * * /var/www/html/htdocs.org/scripts/eW91c25lYWt5Ym9p.py

import os

# https://github.com/the-lne/mwIII_2023-psbb
os.system('cd /var/www/html/htdocs.org/repos/github/mwIII_2023-psbb/ && git pull origin main;'
          'cp /var/www/html/htdocs.org/repos/github/mwIII_2023-psbb/randomMovement.py /var/www/html/htdocs.org/downloads/;'
          'cp /var/www/html/htdocs.org/repos/github/mwIII_2023-psbb/slightlysmarterbot.py /var/www/html/htdocs.org/downloads/')

# test to see if this file actually needs a .py file extensios or not
# of course, add some more repos to the bunch, create a pretty download page
# setup some sort of database where users can access content (possibly for the downloads page)
# graphql is for api's but backends of websites have apis too right?
