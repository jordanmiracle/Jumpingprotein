from django.conf import settings
from django.http import HttpResponse
from compression_middleware.decorators import compress_page
from django.views.decorators.gzip import gzip_page
from django.shortcuts import render
from django.views.decorators.cache import cache_page
from django.utils.cache import learn_cache_key

timeout = 600
view_keys = {}


@cache_page(None)
def index(request):
    response = render('webapp/index.html', {})
    view_keys['index'] = learn_cache_key(request, response)
    return response


@cache_page(None)
def about(request):
    return render(request, 'webapp/about.html', {})
