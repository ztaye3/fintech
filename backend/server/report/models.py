from django.db import models
from .enums import ReportTypeEnum, ReportStatusEnum
import os
import sys
from django.utils import timezone
from enumchoicefield import ChoiceEnum, EnumChoiceField
from identity.models import UserAccount


# Image upload
def upload_to(instance, filename):
    now = timezone.now()
    base, extension = os.path.splitext(filename.lower())
    milliseconds = now.microsecond // 1000
    return f"reports/{instance.id}/{now:%Y%m%d%H%M%S}{milliseconds}{extension}"


# Report model
class ReportModel(models.Model):
    headline = models.CharField(max_length=100, blank=True, null=True, default="")
    audio = models.FileField(upload_to=upload_to, blank=True, null=True, default="")
    video = models.FileField(upload_to=upload_to, blank=True, null=True, default="")
    image = models.ImageField(upload_to=upload_to, blank=True, null=True, default="")
    body = models.CharField(default='', max_length=1000)
    updated_by = models.CharField(max_length=200, default='System', null=True)
    updated_date = models.DateTimeField(auto_now=True, null=True)
    created_by = models.CharField(default='System', null=True, max_length=280)
    created_date = models.DateTimeField(auto_now_add=True, null=True)
    report_type = EnumChoiceField(enum_class=ReportTypeEnum, default=ReportTypeEnum.UNKNOWN)
    report_status = EnumChoiceField(enum_class=ReportStatusEnum, default=ReportStatusEnum.ALLOWED)
    reporters = models.ManyToManyField(UserAccount, related_name='reports', default='', blank=True)
