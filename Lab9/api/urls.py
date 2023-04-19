from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.companies),
    path('companies/<int:cid>/', views.get_one_comp),
    path('companies/<int:cid>/vacancies/', views.comp_vac),
    path('vacancies/', views.vacancies),
    path('vacancies/<int:vid>/', views.get_one_vac),
    path('vacancies/top_ten/', views.top_ten),
]