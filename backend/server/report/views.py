from rest_framework.views import APIView
from .models import ReportModel
from .serializers import ReportSerializer, BlockReportSerializer, ReportSerializerCreate
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from identity.models import *
from django.shortcuts import get_object_or_404
from django.shortcuts import render, redirect
import os
from django.conf import settings
from django.http import HttpResponse
from django.http import FileResponse
from wsgiref.util import FileWrapper


# Create report model
class ReportView(APIView):
    # permission_classes = [IsAuthenticated]

    def post(self, request):

        data = request.data

        serializer = ReportSerializerCreate(data=data)

        if serializer.is_valid():

            # Save report
            serializer.save()

            # Add reporters
            report_id = serializer.data.get('id')
            report = ReportModel.objects.get(id=report_id)

            email = data['reporters']
            user = UserAccount.objects.get(email=email)
            report.reporters.add(user)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        reports = ReportModel.objects.all()
        serializer = ReportSerializer(reports, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


# Update profile
class BlockReport(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = ReportModel.objects.all()
    serializer_class = BlockReportSerializer

    def post(self, request, *args, **kwargs):
        report_id = request.data['id']
        data = request.data

        user = ReportModel.objects.get(id=report_id)
        serializer = BlockReportSerializer(instance=user, data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FileDetail(APIView):
    queryset = ReportModel.objects.all()
    """
    Get or delete a file instance.
    """

    def get(self, request, pk, format=None):
        instance = ReportModel.objects.get(id=pk)
        file_handle = instance.image.open()

        # response = FileResponse(file_handle, content_type='image/*')
        response = HttpResponse(FileWrapper(file_handle), content_type='image/*')
        response['Content-Length'] = instance.image.size
        response['Content-Disposition'] = 'attachment; filename="%s"' % instance.image

        return response
