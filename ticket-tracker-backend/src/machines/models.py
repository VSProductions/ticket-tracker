from django.db.models import (
    CharField,
    DateField,
    URLField,
    Model,
    ManyToManyField,
    SlugField,
    TextField,

)


class Manufacturer(Model):

    name = CharField(max_length=31)
    slug = SlugField(max_length=31)
    created_at = DateField("date created")
    modified_at = DateField("modified_at")
    description = TextField()

    class Meta:
        get_latest_by = "founded_date"
        ordering = ["name"]

    def __str__(self):
        return self.name


class Machine(Model):

    name = CharField(max_length=31)
    slug = SlugField(max_length=31)
    date_created = DateField("machine created on")
    date_modified = DateField("machine modified on")
    description = TextField()
    manufacturers = ManyToManyField(Manufacturer)

    class Meta:
        get_latest_by = "founded_date"
        ordering = ["name"]

    def __str__(self):
        return self.name
