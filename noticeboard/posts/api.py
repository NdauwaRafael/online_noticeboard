from posts.models import Post
from rest_framework import viewsets, permissions
from .serializers import PostSerializer
from accounts.permissions import UserIsStudentLeader

class PostViewSet(viewsets.ModelViewSet):
    # queryset = Post.objects.all()
    permission_classes = [
        permissions.IsAuthenticated,
        UserIsStudentLeader
    ]

    serializer_class = PostSerializer

    def get_queryset(self):
        return self.request.user.posts.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
