from permissions.models import Permission
from rest_framework import viewsets, permissions
from .serializers import PermissionSerializer


# Permission View Set
class PermissionViewSet(viewsets.ModelViewSet):
    queryset = Permission.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PermissionSerializer
