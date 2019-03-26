from django.db import models
# from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=500)
    category = models.CharField(max_length=100, unique=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="posts", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
