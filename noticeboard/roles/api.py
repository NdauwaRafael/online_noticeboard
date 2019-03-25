from roles.models import Role
from rest_framework import viewsets, permissions
from .serializers import RoleSerializer


# Role View Set
class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RoleSerializer
