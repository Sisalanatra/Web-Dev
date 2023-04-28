from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from api.models import Pin, User
from api.serializers import PinSerializer
from rest_framework.decorators import api_view

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, status
from rest_framework.response import Response


@api_view(['GET','PUT','DELETE','POST'])
def pin(request,id):
    try:
        pin_obj = Pin.objects.get(id=id)
    except Pin.DoesNotExist as e:
        return Response({'error':str(e)},status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        pin = PinSerializer(pin_obj)
        return Response(pin.data)
    elif request.method == 'POST':
        pin = PinSerializer(data=request.data)
        if pin.is_valid():
            pin.save()
            return Response(pin.data,status=status.HTTP_201_CREATED)
        return Response(pin.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PUT':
        pin = PinSerializer(pin_obj, data=request.data, context={"request":request})
        if pin.is_valid():
            pin.save()
            return Response(pin.data)
        return Response(pin.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        pin_obj.delete()
        return Response({'deleted':True})



class Pins(generics.ListCreateAPIView):
    queryset = Pin.objects.all()
    serializer_class = PinSerializer
@api_view(['GET'])
def get_pins_by_user(request,username):
    user_obj = User.objects.get(username=username)
    pins_obj = Pin.objects.filter(user=user_obj)
    pins = PinSerializer(pins_obj,many=True)
    return Response(pins.data)


