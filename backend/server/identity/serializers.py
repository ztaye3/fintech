from djoser.conf import settings
from djoser.serializers import TokenCreateSerializer
from django.contrib.auth import authenticate, get_user_model

# Get user model
User = get_user_model()


# Get token without activated account
class CustomTokenCreateSerializer(TokenCreateSerializer):

    def validate(self, attributes):

        password = attributes.get("password")
        params = {settings.LOGIN_FIELD: attributes.get(settings.LOGIN_FIELD)}

        self.user = authenticate(request=self.context.get("request"), **params, password=password)

        # If user doesn't exist with given parameters
        if not self.user:
            # Try to filer user with only give parameters
            self.user = User.objects.filter(**params).first()

            # If user user and password doesn't exist:
            if self.user and not self.user.check_password(password):
                self.fail("Invalid_credentials")

        # Else, if user exists:
        elif self.user:
            return attributes
        else:
            self.fail("Invalid credentials")
