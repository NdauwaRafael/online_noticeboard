from django.db import models
from django.conf import settings


# Create your models here.
class Department(models.Model):
    title = models.CharField(max_length=100, unique=True)
    description = models.TextField(max_length=400, null=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="departments", on_delete=models.CASCADE, null=True,
                              blank=True)
    hod_id = models.OneToOneField(settings.AUTH_USER_MODEL, related_name="hod_departments", on_delete=models.CASCADE,
                                  null=True, blank=True)
