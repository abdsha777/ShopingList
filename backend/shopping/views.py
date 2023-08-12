from django.shortcuts import render
from rest_framework import generics

from .serializers import SListSerializer
from .models import SList
# Create your views here.

class ListCreateSList(generics.ListCreateAPIView):
    queryset = SList.objects.all()
    serializer_class = SListSerializer

class DetailSList(generics.RetrieveAPIView):
    queryset = SList.objects.all()
    serializer_class = SListSerializer

class UpdateSList(generics.UpdateAPIView):
    queryset = SList.objects.all()
    serializer_class = SListSerializer

class DeleteSList(generics.DestroyAPIView):
    queryset = SList.objects.all()
    serializer_class = SListSerializer