from rest_framework import serializers
from roles.models import Role


# Role Serializers
class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'
