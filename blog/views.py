from django.shortcuts import render, get_object_or_404
from .models import Post
from django.core.paginator import (Paginator, EmptyPage, PageNotAnInteger)
from django.views.generic import CreateView
from .forms import PostForm


def post_list(request):
    object_list = Post.published.all()
    paginator = Paginator(object_list, 2)
    page = request.GET.get('page')
    try:
        posts = paginator.page(page)
    except PageNotAnInteger:  # If page is not an integer deliver the first page
        posts = paginator.page(1)
    except EmptyPage:  # If page is out of range deliver the last page of results
        posts = page.page(page.num_pages)
    return render(request, 'blog/post_list.html',
                  {'page': page,
                   'posts': posts})


def post_detail(request, year, month, day, post):
    post = get_object_or_404(Post, slug=post,
                             status='published',
                             publish__year=year,
                             publish__month=month,
                             publish__day=day)

    return render(request,
                  'blog/post_detail.html',
                  {'post': post})


class AddPostView(CreateView):
    model = Post
    form_class = PostForm
    template_name = 'blog/add_post.html'
