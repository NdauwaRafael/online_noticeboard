from django.db import models


# Create your models here.
class Role(models.Model):
    role = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)