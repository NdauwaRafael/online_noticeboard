from .models import Department
from rest_framework import viewsets, permissions
from .serializers import DepartmentSerializer
from accounts.permissions import  UserIsAdministrator, IsOwnerOrReadOnly

# Role View Set
class DepartmentViewSet(viewsets.ModelViewSet):
    # queryset = Department.objects.all()
    # permission_classes = [
    #     permissions.AllowAny
    # ]
    serializer_class = DepartmentSerializer

    def get_queryset(self):
        return Department.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer, **kwargs):
        serializer.save()

    def perform_destroy(self, instance):
        instance.delete()

    def get_permissions(self):
        if self.request.method == 'GET':
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [UserIsAdministrator, IsOwnerOrReadOnly]

        return [permission() for permission in permission_classes]
