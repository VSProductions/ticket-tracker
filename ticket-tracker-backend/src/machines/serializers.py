from rest_framework.serializers import ModelSerializer
from .models import Machine, Manufacturer


class ManufacturerSerializer(ModelSerializer):

    class Meta:
        model = Manufacturer
        fields = "__all__"


class MachineSerializer(ModelSerializer):
    manufacturers = ManufacturerSerializer(many=True, read_only=True)

    class Meta:
        model = Machine
        fields = "__all__"
