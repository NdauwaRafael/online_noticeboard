from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
# from posts.serializers import PostSerializer


# User Serializer
class UserSerializer(serializers.HyperlinkedModelSerializer):
    department = serializers.RelatedField(source='department_id', read_only=True)
    role = serializers.ReadOnlyField(source='role_id.role')
    # posts = PostSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = (
            'id', 'username', 'email', 'first_name', 'last_name',
            'registration_no', 'bio', 'owner', 'department', 'role')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name',
                  'registration_no', 'department_id', 'role_id', 'bio', 'owner', 'password')
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
