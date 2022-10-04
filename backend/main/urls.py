#from rest_framework.routers import DefaultRouter
from django.urls import path, include
from rest_framework import routers
from .views import EmployeeviewSet
router=routers.DefaultRouter()
router.register(r'employee', EmployeeviewSet)

urlpatterns = [ 
    path('',include(router.urls)),
]

