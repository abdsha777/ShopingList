from django.db import models

# Create your models here.
class SList(models.Model):
    name=models.CharField(max_length=50)
    quantity = models.CharField(max_length=50)
    