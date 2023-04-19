from django.urls import path, re_path
from api.Views import  fbv, cbv, common
from api.Views.cbv import *

urlpatterns = [
    path('companies/', common.companies),
    path('companies/<int:cid>/', common.get_one_comp),
    path('companies/<int:cid>/vacancies/', common.comp_vac),
    path('vacancies/', common.vacancies),
    path('vacancies/<int:vid>/', common.get_one_vac),


    path('companies_fbv/', fbv.companies_list),
    path('vacancies_fbv/', fbv.vacancies_list),


    path('companies_cbv/', CompanyListApiView.as_view()),
    path('vacancies_cbv/', VacancyListApiView.as_view()),
]