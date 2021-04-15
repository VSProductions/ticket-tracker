from rest_framework.viewsets import ModelViewSet
from .models import Manufacturer, Machine
from .serializers import ManufacturerSerializer, MachineSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_201_CREATED
from django.shortcuts import get_object_or_404


class ManufacturerViewSet(ModelViewSet):

    queryset = Manufacturer.objects.all()
    serializer_class = ManufacturerSerializer
    lookup_field = "slug"


class MachineViewSet(ModelViewSet):

    queryset = Machine.objects.all()
    serializer_class = MachineSerializer
    lookup_field = "slug"

    @action(detail=True, methods=["HEAD", "GET", "POST"])
    def manufacturers(self, request, slug=None):
        machine = self.get_object()
        if request.method in ("HEAD", "GET"):
            m_manufacturer = ManufacturerSerializer(
                machine.manufacturers,
                many=True,
                context={"request": request}
            )
            return Response(m_manufacturer.data)
        manufacturer_slug = request.data.get("slug")
        if not manufacturer_slug:
            return Response(
                "slug must be specified",
                status=HTTP_400_BAD_REQUEST
            )
        manufacturer = get_object_or_404(Manufacturer, slug__iexact=manufacturer_slug)
        machine.manufacturers.add(manufacturer)
        return Response(
            status=HTTP_201_CREATED
        )

