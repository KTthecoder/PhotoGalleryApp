from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from .models import *

class PhotoCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotoCategoryModel
        fields = '__all__'

class PhotoSerializer(serializers.ModelSerializer):
    categoryName = serializers.SerializerMethodField('get_category_Name')
    categorySlug = serializers.SerializerMethodField('get_category_Slug')
    class Meta:
        model = PhotoModel
        fields = ['id', 'img', 'alt', 'date_created', 'categoryId', 'categoryName', 'categorySlug']

    def get_category_Name(self, quiz):
        return quiz.categoryId.name

    def get_category_Slug(self, quiz):
        return quiz.categoryId.slug