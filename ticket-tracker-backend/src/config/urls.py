from django.contrib import admin
from django.urls import path, include

from machines.routers import urlpatterns as machines_api_urls

api_urls = machines_api_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(api_urls)),
]
