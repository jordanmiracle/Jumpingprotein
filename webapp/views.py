from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render
from compression_middleware.decorators import compress_page
from django.views.decorators.gzip import gzip_page


@compress_page
def index(request):
    return render(request, 'webapp/index.html', {})


@compress_page
def about(request):
    return render(request, 'webapp/about.html', {})
