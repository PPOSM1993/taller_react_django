from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.TodosAPIView.as_view(), name='todos'),
    path('todo/<int:pk>/', views.TodoAPIView.as_view(), name='todo'),
]
