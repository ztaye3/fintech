from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer

# Get user model
User = get_user_model()


# User serializer
class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'password', 'is_reporter', 'is_moderator', 'username')


# Update profile serializer
class UpdateUserProfileSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'is_reporter', 'is_moderator',  'profile_picture')
