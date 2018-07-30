#!/bin/bash
# delete and recreate the virtualenv "reda"

rmvirtualenv reda
mkvirtualenv --python /usr/bin/python3 reda
pip install -r requirements.txt
pip install -r doc/requirements_doc.txt
python setup.py develop
