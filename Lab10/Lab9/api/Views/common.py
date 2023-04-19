from django.http.response import  HttpResponse, JsonResponse
from api.models import *
from django.db.models import Q

def companies(request):
    return JsonResponse(
        list(Company.objects.values()), safe=False, json_dumps_params={'indent': 2}
    )

def get_one_comp(request,cid):
    for company in Company.objects.values():
        if str(company["id"]) == str(cid):
            return JsonResponse(company, json_dumps_params={'indent': 2})

    return JsonResponse({'error': 'Product not found'})

def comp_vac(request, cid):
    tmp = []
    for vacancy in Vacancy.objects.values():
        if str(vacancy['company_id']) == str(cid):
            tmp.append(vacancy)

    return JsonResponse(tmp, safe=False, json_dumps_params={'indent': 2})

def vacancies(request):
    return JsonResponse(
        list(Vacancy.objects.values()), safe=False, json_dumps_params={'indent': 2}
    )

def get_one_vac(request,vid):
    for vacancy in Vacancy.objects.values():
        if str(vacancy["id"]) == str(vid):
            return JsonResponse(vacancy, json_dumps_params={'indent': 2})

    return JsonResponse({'error': 'Product not found'})
