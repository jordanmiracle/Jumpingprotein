from django.contrib import admin
from django.urls import path
from . import views
from .feeds import LatestPostsFeed
from .views import AddPostView, UpdatePostView, DeletePostView

app_name = 'blog'

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('<int:year>/<int:month>/<int:day>/<slug:post>/',
         views.post_detail,
         name='post_detail'),
    path('feed/rss/', LatestPostsFeed(), name='post_feed'),
    path('add_post/', AddPostView.as_view(), name='add_post'),
    path('update_post/', UpdatePostView.as_view(), name='update_post'),
    path('delete_post/', DeletePostView.as_view(), name='delete_post'),

]
