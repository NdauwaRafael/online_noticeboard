from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField
from roles.models import Role
from departments.models import Department
from .models import User
from django.contrib.auth import authenticate


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    department_id = PrimaryKeyRelatedField(queryset=Department.objects.all())
    role_id = PrimaryKeyRelatedField(queryset=Role.objects.all())

    class Meta:
        model = User
        fields = (
            'id', 'username', 'email', 'first_name', 'last_name', 'registration_no', 'bio', 'department_id', 'role_id')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name',
                  'registration_no', 'department_id', 'role_id', 'bio', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], email=validated_data['email'],
                                        first_name=validated_data['first_name'], last_name=validated_data['last_name'],
                                        registration_no=validated_data['registration_no'],
                                        department_id=validated_data['department_id'],
                                        role_id=validated_data['role_id'],
                                        bio=validated_data['bio'],
                                        password=validated_data['password'])

        return user


# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
