from pyexpat import model
from statistics import mode
from django.db import models

# Create your models here.

class Employee(models.Model):
    FullName= models.CharField(max_length=100)
    Email= models.CharField(max_length=50)
    contect= models.CharField(max_length=15)
    Address= models.CharField(max_length=200)

    def __str__(self):
        return self.FullName
