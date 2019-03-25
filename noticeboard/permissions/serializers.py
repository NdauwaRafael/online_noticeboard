from rest_framework import serializers
from permissions.models import Permission


# Permission Serializers
class PermissionSerializer(serializers.ModelSerializer):
    model = Permission
    fields = '__all__'
