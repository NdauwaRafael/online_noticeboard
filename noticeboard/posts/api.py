from rest_framework import viewsets, permissions
from .serializers import PostSerializer
from accounts.permissions import UserIsStudentLeader, UserIsHOD, UserIsAdministrator


class PostViewSet(viewsets.ModelViewSet):
    # queryset = Post.objects.all()
    permission_classes = [
        permissions.IsAuthenticated,
        # UserIsStudentLeader
    ]

    serializer_class = PostSerializer

    def get_queryset(self):
        return self.request.user.posts.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class DeparmentPost(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    #     UserIsStudentLeader
    # ]
    permission_classes_by_action = {'get_queryset': [permissions.IsAuthenticated],
                                    'perform_create': [UserIsHOD]}
    serializer_class = PostSerializer

    def get_queryset(self):
        return self.request.posts.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
