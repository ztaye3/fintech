from django.urls import path
from django.conf.urls import include, url
from . import views


# Report URLS
urlpatterns = [
    path('v1/download/<str:pk>', views.FileDetail.as_view()),
    url(r'^v1/', views.ReportView.as_view()),
    url(r'^v1/block-report/', views.BlockReport.as_view()),

]
