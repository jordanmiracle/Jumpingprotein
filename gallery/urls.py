from django.urls import path
from . import views
from django.shortcuts import render, redirect


urlpatterns = [
    path('', views.gallery, name='gallery',),
    path('photo/<str:pk>/', views.viewphoto, name='photo', ),
    path('add/', views.addphoto, name='add', ),

]