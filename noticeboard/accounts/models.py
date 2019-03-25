from django.db import models
from django.contrib.auth.models import AbstractUser
# from departments.models import Department
# from roles.models import Role


# Create your models here.
class User(AbstractUser):
    registration_no = models.CharField(max_length=100, unique=True)
    # department_id = models.ForeignKey(Department, on_delete=models.CASCADE)
    # role_id = models.ForeignKey(Role, on_delete=models.CASCADE)
    bio = models.CharField(max_length=400)