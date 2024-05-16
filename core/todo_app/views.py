from django.shortcuts import render
from rest_framework import generics
from .models import *
from core.todo_app import serializers

# Create your views here.

class TodosAPIView(generics.ListCreateAPIView):
    queryset = Todo.objects.all().order_by('-id')[:10]
    serializer_class = serializers.TodoSerializer

class TodoAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = serializers.TodoSerializer


