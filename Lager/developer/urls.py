from django.urls import path, include;
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'project', views.ProjectListCreate, 'ProjectStatus')

urlpatterns = [
    path('login/', views.home),
    path('api/user', views.UserListCreate.as_view() ),
    path('api/', include(router.urls)),


]