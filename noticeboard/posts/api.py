from rest_framework import viewsets, permissions
from .serializers import PostSerializer
from .models import Post
from accounts.permissions import UserIsStudentLeader, UserIsHOD, UserIsAdministrator


class PostViewSet(viewsets.ModelViewSet):
    # queryset = Post.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.filter(category='public')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class DepartmentPostViewSet(viewsets.ModelViewSet):

    permission_classes_by_action = {'get_queryset': [UserIsStudentLeader],
                                    'perform_create': [UserIsHOD]}
    serializer_class = PostSerializer

    def get_queryset(self):
        # return Purchase.objects.filter(purchaser=user)
        return self.request.user.posts.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        if self.request.method == 'GET':
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [UserIsHOD]
        return [permission() for permission in permission_classes]
