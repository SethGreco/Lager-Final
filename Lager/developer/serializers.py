from rest_framework import serializers
from developer.models import UserProfile, ProjectStatus

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'user', 'team', 'email')


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectStatus
        fields = ('id', 'who', 'when', 'what', 'how')
