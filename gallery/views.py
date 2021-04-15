from django.shortcuts import render


def gallery(request):
    return render(request, 'gallery/gallery.html', {})


def add(request):
    return render(request, 'gallery/add.html', {})


def viewPhoto(request):
    return render(request, 'gallery/photo.html', {})
