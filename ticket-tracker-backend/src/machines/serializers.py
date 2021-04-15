from rest_framework.serializers import (
    ModelSerializer,
    SlugRelatedField,
    HyperlinkedModelSerializer,
    HyperlinkedRelatedField,
    HyperlinkedIdentityField
)
from .models import Machine, Manufacturer


class ManufacturerSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Manufacturer
        fields = "__all__"
        extra_kwargs = {
            "url": {
                "lookup_field": "slug",
                "view_name": "manufacturer-api-detail"
            }
        }


class MachineSerializer(HyperlinkedModelSerializer):
    manufacturers = HyperlinkedRelatedField(
        lookup_field="slug",
        many=True,
        read_only=True,
        view_name="manufacturer-api-detail"
    )

    class Meta:
        model = Machine
        fields = "__all__"
        extra_kwargs = {
            "url": {
                "lookup_field": "slug",
                "view_name": "machine-api-detail"
            }
        }
