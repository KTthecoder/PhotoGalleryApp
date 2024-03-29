"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from MainApp.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/photos/newest', NewestPhotos, name='NewestPhotos'),
    path('api/photos/all', AllPhotos, name='AllPhotos'),
    path('api/photos/count', DataCount, name='DataCount'),
    path('api/photos/categories/<slug:slug>', PhotosByCategorySnippet, name='PhotosByCategorySnippet'),
    path('api/photos/search/<str:search>', SearchPhotos, name='SearchPhotos'),
    path('api/photos/<int:id>', PhotoDetails, name='PhotoDetails'),

    path('api/categories/all', AllCategories, name='AllCategories'),

    path('api/message/send', SendMessage, name='SendMessage'),
    
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)