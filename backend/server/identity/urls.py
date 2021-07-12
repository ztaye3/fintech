from django.urls import path
from django.conf.urls import include, url
from . import views


# Identity URLS
urlpatterns = [
    url(r'^v1/update-profile/', views.UpdateUserProfile.as_view()),
    url(r'^v1/', include('djoser.urls')),
    url(r'^v1/', include('djoser.urls.jwt')),
]
