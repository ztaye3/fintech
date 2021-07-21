from enum import Enum
from enumchoicefield import ChoiceEnum, EnumChoiceField

from django.utils.translation import ugettext_lazy as _


# Process status Enum
class ReportTypeEnum(ChoiceEnum):
    SPORT = 'SPORT'
    ENTERTAINMENT = 'ENTERTAINMENT'
    BREAKING = 'BREAKING'
    ENVIRONMENT = 'ENVIRONMENT'
    POLITICS = 'POLITICS'
    ELECTION = "ELECTION"
    TECHNOLOGY = 'TECHNOLOGY'
    BUSINESS = 'BUSINESS'
    UNKNOWN = 'UNKNOWN'

    # Method that returns all enum
    # @classmethod
    # def choices(cls):
    #     return ((item.name, item.value) for item in cls)


# Process status Enum
class ReportStatusEnum(ChoiceEnum):
    ALLOWED = 'ALLOWED'
    BLOCKED = 'BLOCKED'
    UPDATED = 'UPDATED'

    # Method that returns all enum
    # @classmethod
    # def choices(cls):
    #     return ((item.name, item.value) for item in cls)
