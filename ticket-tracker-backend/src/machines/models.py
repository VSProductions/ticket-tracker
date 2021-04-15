from django.db.models import (
    CharField,
    DateField,
    DateTimeField,
    URLField,
    Model,
    ManyToManyField,
    SlugField,
    TextField,
)
from django_extensions.db.fields import AutoSlugField


class Manufacturer(Model):

    name = CharField(max_length=31)
    slug = AutoSlugField(
        max_length=31,
        populate_from=["name"]
    )
    created_at = DateTimeField(auto_now_add=True)
    modified_at = DateTimeField(auto_now=True)
    description = TextField()

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Machine(Model):

    name = CharField(max_length=31)
    slug = AutoSlugField(
        max_length=31,
        populate_from=["name"]
    )
    date_created = DateTimeField(auto_now_add=True)
    date_modified = DateTimeField(auto_now=True)
    description = TextField()
    manufacturers = ManyToManyField(Manufacturer)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name
