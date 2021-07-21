from rest_framework.generics import ListAPIView
from .models import UserAccount
from .serializers import UpdateUserProfileSerializer
from rest_framework.response import Response
from rest_framework import status


# Update profile
class UpdateUserProfile(ListAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UpdateUserProfileSerializer

    def post(self, request, *args, **kwargs):
        email = request.data['email']
        data = request.data

        user = UserAccount.objects.get(email=email)
        serializer = UpdateUserProfileSerializer(instance=user, data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





