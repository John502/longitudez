---
title: 'GeoDjango Notes'
date: 'December 28 2021'
excerpt: 'GeoDjango Utilizations'
cover_image: 'images/posts/005_GeoDjango.png'
---

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

