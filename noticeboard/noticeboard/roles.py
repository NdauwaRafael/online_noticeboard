from rolepermissions.roles import AbstractUserRole


# HOD
class DepartmentHead(AbstractUserRole):
    available_permissions = {
        'create_departmental_notices': True,
    }


# Student Leader
class StudentLeader(AbstractUserRole):
    available_permissions = {
        'create_student_notices': True,
    }


# Student Leader
class SuperAdmistrator(AbstractUserRole):
    available_permissions = {
        'create_student_notices': True,
        'create_departmental_notices': True,
        'create_public_notices': True
    }
