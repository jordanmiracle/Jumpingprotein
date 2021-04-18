from django.shortcuts import render
from compression_middleware.decorators import compress_page


@compress_page
def index(request):
    return render(request, 'webapp/index.html', {})


@compress_page
def about(request):
    return render(request, 'webapp/about.html', {})


