from rest_framework import viewsets, generics, permissions, exceptions, status
from rest_framework.response import Response
from knox.models import AuthToken
from django.contrib.auth import get_user_model
from .permissions import UserIsAdministrator
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, UpdateSerializer


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })


# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })


# Get User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class UsersViewSet(viewsets.ModelViewSet):
    serializer_class = RegisterSerializer
    permission_classes = [UserIsAdministrator]

    def get_queryset(self):
        return get_user_model().objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer, **kwargs):
        serializer.save()

    def perform_destroy(self, instance):
        instance.delete()

    def get_serializer_class(self):
        serializer_class = self.serializer_class

        if self.request.method == 'PUT':
            serializer_class = UpdateSerializer

        return serializer_class
