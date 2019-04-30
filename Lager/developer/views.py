from django.shortcuts import render
from developer.models import UserProfile, ProjectStatus

from developer.serializers import UserSerializer, ProjectSerializer
from rest_framework import viewsets, generics
# Create your views here.

def home(request):
    return render(request, 'developer/login.html')


class UserListCreate (generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class =  UserSerializer

class ProjectListCreate(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = ProjectStatus.objects.all()

