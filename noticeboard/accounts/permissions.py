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
        role_id = user.data['role_id']
        role = Role.objects.filter(id=role_id)
        # print(role.role)
        return True
        # if role.data['role'] is not 'Administrator':
        #     return False
        # else:
        #     return True

