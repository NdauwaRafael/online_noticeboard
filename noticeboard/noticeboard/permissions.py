from rest_framework import permissions
from roles.models import Role


class UserIsStudentLeader(permissions.BasePermission):
    """
    Global permission check for user role.
    """

    def has_permission(self, request, view):
        role_id = request.user.role_id
        role = Role.objects.extra(where=['id=%s'], params=[role_id])
        print(role)
        return not role
