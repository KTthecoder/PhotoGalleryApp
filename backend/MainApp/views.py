from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.exceptions import ObjectDoesNotExist
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
    
@api_view(['GET'])
def AllPhotos(request):
    data = {}
    try:
        photos = PhotoModel.objects.all()
        if photos.exists():
            serializer = PhotoSerializer(photos, many = True)
            return Response(serializer.data)
        else:
            data['response'] = "There is not any photos in database"
            return Response(data)
    except:
        data['response'] = "Error While Getting Action"
        return Response(data)

@api_view(['GET'])
def DataCount(request):
    data = {}
    try:
        photos = PhotoModel.objects.all()
        if photos.exists():
            count = photos.count()
            return Response(count)
        else:
            data['response'] = "Model is empty"
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

# Search for photos
@api_view(['GET'])
def SearchPhotos(request, search):
    data = {}
    try:
        photos = PhotoModel.objects.filter(tags__name__icontains=search).distinct()
        if photos.exists(): 
            for photo in photos:
                if photo.id == photo.id: 
                    serializer = PhotoSerializer(photos, many = True)
                    return Response(serializer.data)
        else:
            data['response'] = "There is no photos with this tags"
            return Response(data)
    except:
        data['response'] = "Error While Getting Action"
        return Response(data)

# Send Message From Customer
@api_view(['POST'])
def SendMessage(request):   
    data = {}
    try:
        serializer = MessageSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    except:
        data['response'] = "Error While Getting Action"
        return Response(data)

# Photo Details
@api_view(['GET'])
def PhotoDetails(request, id):   
    data = {}
    try:
        photo = PhotoModel.objects.get(id = id)
        serializer = PhotoSerializer(photo, many = False)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        data['response'] = 'This photo does not exists'
        return Response(data)