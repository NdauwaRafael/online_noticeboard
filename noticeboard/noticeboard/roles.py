from rolepermissions.roles import AbstractUserRole


# HOD
class DepartmentHead(AbstractUserRole):
    available_permissions = {
        'create_departmental_notices': True,
    }
