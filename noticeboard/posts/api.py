from rest_framework import viewsets, permissions
from .serializers import PostSerializer
from .models import Post
from accounts.permissions import UserIsStudentLeader, UserIsHOD, UserIsAdministrator, CanPublishPublic


# Public posts
class PostViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = {'get_queryset': [UserIsStudentLeader],
                                    'perform_create': [UserIsHOD]}

    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.filter(category='public')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        if self.request.method == 'GET':
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [CanPublishPublic]
        return [permission() for permission in permission_classes]


# Departmental posts
class DepartmentPostViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = {'get_queryset': [permissions.IsAuthenticated],
                                    'perform_create': [UserIsHOD]}
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.filter(category='departmental')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        if self.request.method == 'GET':
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [UserIsHOD]
        return [permission() for permission in permission_classes]
