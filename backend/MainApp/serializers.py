from rest_framework import serializers
from .models import *
from taggit_serializer.serializers import (TagListSerializerField)

class PhotoCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotoCategoryModel
        fields = '__all__'

class PhotoSerializer(serializers.ModelSerializer):
    categoryName = serializers.SerializerMethodField('get_category_Name')
    categorySlug = serializers.SerializerMethodField('get_category_Slug')
    tags = TagListSerializerField()
    class Meta:
        model = PhotoModel
        fields = ['id', 'img', 'alt', 'date_created', 'tags', 'categoryId', 'categoryName', 'categorySlug']

    def get_category_Name(self, photo):
        return photo.categoryId.name

    def get_category_Slug(self, photo):
        return photo.categoryId.slug