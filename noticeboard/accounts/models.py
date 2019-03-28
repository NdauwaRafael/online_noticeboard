from django.db import models
from django.contrib.auth.models import AbstractUser
from departments.models import Department
from roles.models import Role
from django.conf import settings


# Create your models here.
class User(AbstractUser):
    registration_no = models.CharField(max_length=100, unique=True)
    department_id = models.ForeignKey(Department, on_delete=models.CASCADE, null=True)
    role_id = models.ForeignKey(Role, on_delete=models.CASCADE, related_name='user_role', null=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="user_owner", on_delete=models.CASCADE, null=True)
    bio = models.CharField(max_length=400, null=True, blank=True)
