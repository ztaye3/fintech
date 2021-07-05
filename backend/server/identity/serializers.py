from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

# Get user model
User = get_user_model()


# User serializer
class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'password', 'is_reporter', 'is_moderator', 'username')


