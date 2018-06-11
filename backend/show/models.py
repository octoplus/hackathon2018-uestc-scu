# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Picture(models.Model):
    content=models.TextField()
    url=models.URLField()
