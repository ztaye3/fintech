from django.urls import path
from django.conf.urls import include

# Identity URLS
urlpatterns = [
    path('v1/', include('djoser.urls')),
    path('v1/', include('djoser.urls.authtoken')),
]
