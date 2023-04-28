from django.contrib.auth import get_user_model
from django.db import models

USER_STATUS_CHOICES = [
        ("active","Active"),
        ("inactive","Inactive"),
        ("disabled","Disabled")
    ]

User = get_user_model()


class UserProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    phone = models.CharField(max_length=255,blank=True,null=True)
    email = models.EmailField()
    status = models.CharField(max_length=10,choices=USER_STATUS_CHOICES, default="active")
    avatar = models.ImageField(upload_to='avatars/')


    def __str__(self):
        return self.user.username

class Tag(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Pin(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True,null=True)
    contentUrl = models.URLField()
    timeUploaded = models.DateTimeField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag)
    destinationLink = models.URLField()

    def __str__(self):
        return self.title

    def to_json(self):
        return {
            "title": self.title,
            "description": self.description,
            "contentUrl": self.contentUrl,
            "timeUploaded": self.timeUploaded.strftime("%Y-%m-%d %H:%M:%S"),
            "user": [self.user.id, self.user.name],
            "tags": [tag.to_json() for tag in self.tags.all()],
            "destinationLink": self.destinationLink,
        }

class Album(models.Model):
    name = models.CharField(max_length=255)
    pins = models.ManyToManyField(Pin)
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=-1)

class Category(models.Model):
    name = models.CharField(max_length=255)
    pins = models.ManyToManyField(Pin,blank=True)

    def __str__(self):
        return self.name

class Message(models.Model):
    sender = models.ForeignKey(User,related_name='sent_messages',on_delete=models.CASCADE)
    recipient = models.ForeignKey(User, related_name='received_messages',on_delete=models.CASCADE)
    body = models.TextField()
    date_sent = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return self.recipient

class Notification(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    message = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return self.message
