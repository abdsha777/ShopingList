from django.urls import path

from . import views

urlpatterns = [
    path("", views.ListCreateSList.as_view()),
    path("<int:pk>/", views.DetailSList.as_view()),
    path("<int:pk>/update/", views.UpdateSList.as_view()),
    path("<int:pk>/delete/", views.DeleteSList.as_view()),
]
