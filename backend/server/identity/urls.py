from django.urls import path
from django.conf.urls import include, url

# Identity URLS
urlpatterns = [
    url(r'^v1/', include('djoser.urls')),
    url(r'^v1/', include('djoser.urls.jwt')),
]
