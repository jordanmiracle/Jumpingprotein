from django import forms
from .models import Article


class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ["title", "content", "article_image"]

    widgets = {
        'title': forms.TextInput(attrs={'class': 'form-control'}),
        'body': forms.Textarea(attrs={'class': 'form-control'}),
        'author': forms.Select(choices=choice_list, attrs)

    }
