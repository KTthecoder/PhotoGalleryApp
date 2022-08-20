from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers

from .models import *
from .serializers import *

# Create your views here.
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