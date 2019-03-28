from rest_framework import viewsets, permissions
from .serializers import PostSerializer
from accounts.serializers import UserSerializer
from .models import Post
from accounts.permissions import UserIsStudentLeader, UserIsHOD, UserIsAdministrator, CanPublishPublic, \
    IsOwnerOrReadOnly


# Public posts
class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer

    def get_queryset(self):
        queryset = Post.objects.all()
        category = self.request.query_params.get('category')
        user_department = UserSerializer(self.request.user).data['department']
        if category == 'departmental':
            return queryset.filter(category=category, department=user_department)
        else:
            return queryset.filter(category='public')

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
            if self.request.data['category'] == 'public':
                permission_classes = [CanPublishPublic, IsOwnerOrReadOnly]
            else:
                permission_classes = [UserIsHOD, IsOwnerOrReadOnly]
        return [permission() for permission in permission_classes]

# # Departmental posts
# class DepartmentPostViewSet(viewsets.ModelViewSet):
#     serializer_class = PostSerializer
#
#     def get_queryset(self):
#         return Post.objects.filter(category='departmental')
#
#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)
#
#     def get_permissions(self):
#         if self.request.method == 'GET':
#             permission_classes = [permissions.IsAuthenticated]
#         else:
#             permission_classes = [UserIsHOD, IsOwnerOrReadOnly]
#         return [permission() for permission in permission_classes]
