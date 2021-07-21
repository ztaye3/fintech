from rest_framework import serializers
from .models import ReportModel
from .enums import ReportTypeEnum, ReportStatusEnum
from identity.serializers import *
from enumchoicefield import ChoiceEnum, EnumChoiceField
from identity.models import UserAccount


# User serializer for report model
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = '__all__'


# Report serializer for readonly
class ReportSerializer(serializers.ModelSerializer):
    reporters = UserSerializer(many=True)

    class Meta:
        model = ReportModel

        fields = ('id', 'headline', 'audio', 'video', 'image', 'body', 'reporters', 'updated_by', 'created_by',
                  'report_type', 'report_status', 'created_date')
        report_type = EnumChoiceField(enum_class=ReportTypeEnum)
        report_status = EnumChoiceField(enum_class=ReportStatusEnum)
        extra_kwargs = {'reporters': {"required": False, "allow_null": True}}
        depth = 1


# Report serializer for create
class ReportSerializerCreate(serializers.ModelSerializer):
    class Meta:
        model = ReportModel

        fields = ('id', 'headline', 'audio', 'video', 'image', 'body', 'reporters', 'updated_by', 'created_by',
                  'report_type', 'report_status')
        report_type = EnumChoiceField(enum_class=ReportTypeEnum)
        report_status = EnumChoiceField(enum_class=ReportStatusEnum)
        extra_kwargs = {'reporters': {"required": True}}
        depth = 1


# Block report serializer
class BlockReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportModel
        fields = 'report_status'
