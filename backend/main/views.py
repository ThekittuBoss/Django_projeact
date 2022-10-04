from django.shortcuts import render
from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework import viewsets

# Create your views here.


class EmployeeviewSet(viewsets.ModelViewSet):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()
    