from django.db import models
from django.conf import settings


# Create your models here.
class Department(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=400, null=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="posts", on_delete=models.CASCADE, null=True, blank=True)
