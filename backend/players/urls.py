from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PlayerViewSet

# El Router genera automáticamente todas las URLs (GET, POST, etc.)
router = DefaultRouter()
router.register(r'', PlayerViewSet)

urlpatterns = [
    path('', include(router.urls)),
]