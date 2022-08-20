from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers

from .models import *
from .serializers import *

# Newest 8 photos desplayed in Home Page
@api_view(['GET'])
def NewestPhotos(request):
    data = {}
    try:
        photos = PhotoModel.objects.all()[:8]
        if photos.exists():
            serializer = PhotoSerializer(photos, many = True)
            return Response(serializer.data)
        else:
            data['response'] = "There is not any photos in database"
            return Response(data)
    except:
        data['response'] = "Error While Getting Action"
        return Response(data)

# 12 Photos filtered by category
@api_view(['GET'])
def PhotosByCategorySnippet(request, slug):
    data = {}
    try:
        category = PhotoCategoryModel.objects.get(slug = slug)
        photos = PhotoModel.objects.filter(categoryId = category)[:12]
        if photos.exists():
            serializer = PhotoSerializer(photos, many = True)
            return Response(serializer.data)
        else:
            data['response'] = "There is not any photos in database"
            return Response(data)
    except:
        data['response'] = "Error While Getting Action"
        return Response(data)

# All existing categories
@api_view(['GET'])
def AllCategories(request):
    data = {}
    try:
        photos = PhotoCategoryModel.objects.all()
        if photos.exists():
            serializer = PhotoCategorySerializer(photos, many = True)
            return Response(serializer.data)
        else:
            data['response'] = "There is not any categories in database"
            return Response(data)
    except:
        data['response'] = "Error While Getting Action"
        return Response(data)