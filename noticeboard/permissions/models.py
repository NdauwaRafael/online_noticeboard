from django.db import models


# Create your models here.
class Permission(models.Model):
    permission = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
