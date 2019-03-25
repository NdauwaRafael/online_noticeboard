from django.db import models
from django.contrib.auth.models import AbstractUser
from departments.models import Department
from roles.models import Role


# Create your models here.
class User(AbstractUser):
    registration_no = models.CharField(max_length=100, unique=True)
    department_id = models.ForeignKey(Department, on_delete=models.CASCADE, null=True)
    role_id = models.ForeignKey(Role, on_delete=models.CASCADE, null=True)
    bio = models.CharField(max_length=400, null=True)


class Meta:
    permissions = (("can_go_in_non_ac_bus", "To provide non-AC Bus facility"),
                   ("can_go_in_ac_bus", "To provide AC-Bus facility"),
                   ("can_stay_ac-room", "To provide staying at AC room"),
                   ("can_stay_ac-room", "To provide staying at Non-AC room"),
                   ("can_go_dehradoon", "Trip to Dehradoon"),
                   ("can_go_mussoorie", "Trip to Mussoorie"),
                   ("can_go_haridwaar", "Trip to Haridwaar"),
                   ("can_go_rishikesh", "Trip to Rishikesh"))
