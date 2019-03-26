from rest_framework import permissions
from roles.models import Role
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
        print(role)
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
        print(role)
        if role == 'Administrator':
            return True
        else:
            return False
