from rest_framework import permissions
from roles.serializers import RoleSerializer
from accounts.serializers import UserSerializer


class UserIsStudentLeader(permissions.BasePermission):
    """
    Global permission check for user role.
    """
    serializer_class = RoleSerializer

    def has_permission(self, request, view):
        user = UserSerializer(request.user)
        role = user.data['role']

        if role == 'student_leader':
            return True
        else:
            return False


class UserIsAdministrator(permissions.BasePermission):
    """
    Global permission check for user role.
    """
    serializer_class = RoleSerializer

    def has_permission(self, request, view):
        user = UserSerializer(request.user)
        role = user.data['role']
        id = user.data['id']
        print('user id is: ' + id)
        if role == 'Administrator' or id == 1:
            return True
        else:
            return False


class UserIsHOD(permissions.BasePermission):
    """
    Global permission check for user role.
    """
    serializer_class = RoleSerializer

    def has_permission(self, request, view):
        user = UserSerializer(request.user)
        role = user.data['role']

        if role == 'HOD':
            return True
        else:
            return False


class CanPublishPublic(permissions.BasePermission):
    serializer_class = RoleSerializer

    def has_permission(self, request, view):
        user = UserSerializer(request.user)
        role = user.data['role']

        if role == 'HOD' or role == 'student_leader' or role == 'Administrator':
            return True
        else:
            return False


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.owner == request.user
