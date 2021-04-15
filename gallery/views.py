from django.shortcuts import render


def gallery(request):
    return render(request, 'gallery/gallery.html', {})


def addphoto(request):
    return render(request, 'gallery/add.html', {})


def viewphoto(request, pk):
    return render(request, 'gallery/photo.html', {})
