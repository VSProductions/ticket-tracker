from django.contrib import admin
from .models import Manufacturer
from .models import Machine


@admin.register(Manufacturer)
class ManufacturerAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")


@admin.register(Machine)
class MachineAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
