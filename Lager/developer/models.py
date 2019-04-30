import datetime
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.db.models.signals import post_save
# Create your models here.

# create the models of the db table for user and creating a user
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    team = models.CharField(max_length=20, default='')
    email = models.EmailField()

    def __str__(self):
        return str(self.user)

    def create_profile(sender, **kawrgs):
        if kawrgs['created']:
            user_profile = UserProfile.objects.create(user=kawrgs['instance'])

    post_save.connect(create_profile, sender=User)


# create the model of the fields the users will need to be editing for there project
#Who, What, How is it, When



class ProjectStatus(models.Model):
    who = models.CharField(max_length=20, default='')
    when = models.DateTimeField(auto_now_add=True)
    what = models.CharField(max_length=200, default='')
    how = models.CharField(max_length=200, default='')

    def __str__(self):
        return self.who