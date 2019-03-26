from rest_framework import permissions
from roles.serializers import RoleSerializer
from accounts.serializers import UserSerializer
from departments.serializers import DepartmentSerializer


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

        if role == 'Administrator':
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


class BelongsToDepartment(permissions.BasePermission):
    serializer_class = DepartmentSerializer

    def has_permission(self, request, view):
        user = UserSerializer(request.user)
        department_id = user.data['department']
        print(department_id)
