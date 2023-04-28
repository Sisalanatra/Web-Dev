from rest_framework import serializers
from django.db import models
from api.models import User,Tag,USER_STATUS_CHOICES

from api.models import Pin, UserProfile, Album


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','password','email',)

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id','name',)

        extra_kwargs = {
            'id': {'required': False}
        }


class PinSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=False,required=False)
    title = serializers.CharField()
    description = serializers.CharField()
    contentUrl = serializers.URLField()
    timeUploaded = serializers.DateTimeField()
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    tags = TagSerializer(many=True,required=False )
    destinationLink = serializers.URLField()

    def create(self, validated_data):
        user = self.context['request'].user
        tags_data = validated_data.pop('tags')

        pin = Pin.objects.create(**validated_data)
        pin.user = user
        for tag_data in tags_data:
            tag, _ = Tag.objects.get_or_create(name=tag_data['name'])
            pin.tags.add(tag)

        return pin

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.contentUrl = validated_data.get('contentUrl', instance.contentUrl)
        instance.timeUploaded = validated_data.get('timeUploaded', instance.timeUploaded)
        tags_data = validated_data.get('tags')
        if tags_data:
            instance.tags.clear()
            for tag_data in tags_data:
                tag, _ = Tag.objects.get_or_create(name=tag_data['name'])
                instance.tags.add(tag)
        instance.destinationLink = validated_data.get('destinationLink', instance.destinationLink)
        instance.save()
        return instance


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = '__all__'

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create_user(**user_data)

        profile = UserProfile.objects.create(user=user, **validated_data)
        return profile

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user')
        user = instance.user
        for key, value in user_data.items():
            setattr(user, key, value)
        user.save()
        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()
        return instance


class AlbumSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    pins = PinSerializer(read_only=True,many=True)
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    def create(self, validated_data):
        pins_data = validated_data.pop('pins', [])
        album = Album.objects.create(**validated_data)

        pins = Pin.objects.filter(pk__in=pins_data)
        album.pins.set(pins)

        return album

    def update(self, instance, validated_data):
        pins_data = validated_data.pop('pins', [])

        instance.name = validated_data.get('name', instance.name)
        instance.user = validated_data.get('user', instance.user)
        instance.save()

        for pin_data in pins_data:
            pin_id = pin_data.pop('id', None)

            if pin_id:
                pin = Pin.objects.get(id=pin_id)
                pin.title = pin_data.get('title', pin.title)
                pin.description = pin_data.get('description', pin.description)
                pin.contentUrl = pin_data.get('contentUrl', pin.contentUrl)
                pin.timeUploaded = pin_data.get('timeUploaded', pin.timeUploaded)
                pin.save()
            else:
                pin = Pin.objects.create(**pin_data)



            instance.pins.add(pin)

        return instance

