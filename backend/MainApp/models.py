from django.db import models
from taggit.managers import TaggableManager

# Create your models here.
class PhotoCategoryModel(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name
    
class PhotoModel(models.Model):
    img = models.ImageField(upload_to="Images")
    alt = models.CharField(max_length=100)
    categoryId = models.ForeignKey(PhotoCategoryModel, related_name='photoCategory', on_delete=models.CASCADE)
    date_created = models.DateField(auto_now_add=True)
    tags = TaggableManager()

    def __str__(self):
        return self.img.url