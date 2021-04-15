from django.shortcuts import render


def gallery(request):
    return render(request, 'gallery/gallery.html', {})


def add(request):
    return render(request, 'gallery/gallery.html', {})


def photo(request):
    return render(request, 'gallery/gallery.html', {})
