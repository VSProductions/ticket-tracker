from rest_framework.routers import SimpleRouter
from .viewsets import ManufacturerViewSet, MachineViewSet


api_router = SimpleRouter()
api_router.register("machine", MachineViewSet, basename="machine-api")
api_router.register("manufacturer", ManufacturerViewSet, basename="manufacturer-api")


api_routes = api_router.urls

urlpatterns = api_routes
