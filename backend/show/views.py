# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import models

# Create your views here.
def main_page(request):
    data= models.Picture.objects.all()
    return render(request, "index.html",{"items":data})

@csrf_exempt
def upload_pic(request):
    content=request.POST.get("content")
    url=request.POST.get("url")
    models.Picture.objects.create(content=content,url=url)
    return HttpResponse()
