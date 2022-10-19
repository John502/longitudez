---
title: "GeoDjango Notes"
date: "December 28 2021"
excerpt: "GeoDjango Utilizations"
cover_image: "images/posts/005_GeoDjango.png"
tag: "dev:python:geospatial:django"
---

# Creating a TTD GeoDjango App

Install django and activate the shell

```bash
pipenv install django && pipenv shell
```

Create a new GeoDjango project

```bash
django-admin startproject longitudezGeoDjango
```

I'm using build in SQLite. In {project}/settings.py configure you database.

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.spatialite',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Also install a linux dependency

```bash
sudo apt-get install libsqlite3-mod-spatialite
```

## Install GDAL and OGR

Please see this other post about installing GDAL and OGR. I'm using Ubuntu 18.05

(https://www.longitudez.com/blogs/002_2021102_GDAL_Ubuntu)[https://www.longitudez.com/blogs/002_2021102_GDAL_Ubuntu]

# GeoDjango Tutororial Notes

This follows aspects of the GeoDjango Tutorial found here:

(https://docs.djangoproject.com/en/4.0/ref/contrib/gis/tutorial/)[https://docs.djangoproject.com/en/4.0/ref/contrib/gis/tutorial/]

### Ensure installed apps contain GeoDjango models

```bash
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'django.contrib.gis',
    ]
```

Set up environment variables for GeoDjango.

(https://alicecampkin.medium.com/how-to-set-up-environment-variables-in-django-f3c4db78c55f)[https://alicecampkin.medium.com/how-to-set-up-environment-variables-in-django-f3c4db78c55f]

# Pytest in DJANGO

Install pytest-django

```bash
pipenv install pytest-django
```

Create pytest.ini file in project root directory. Ensure .env is in the same directory as settings.py

```
[pytest]
DJANGO_SETTINGS_MODULE = longitudezGeoDjango.settings
python_files = tests.py test_*.py *_tests.py
```

https://djangostars.com/blog/django-pytest-testing/

### Create a database migration

```bash
python manage.py makemigrations
```

Preview SQL commands to be executed for migration

```bash
python manage.py sqlmigrate world 0001
```

If using spatial lite, modify your DATABASES in settings.py to

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.spatialite',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Install libsqlite3-mod-spatialite (I'm on Ubuntu)

```bash
sudo apt-get install libsqlite3-mod-spatialite
```

Perform the migration

```bash
python manage.py migrate
```
