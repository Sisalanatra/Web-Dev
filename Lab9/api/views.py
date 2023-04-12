from django.http.response import  HttpResponse, JsonResponse
from api.models import *
from django.db.models import Q

def _get_all_obj_json(where):
    return [p.to_json() for p in where.objects.all()]

def companies(request):
    return JsonResponse(_get_all_obj_json(Company), safe=False)

def get_one_comp(request,cid):
    for c in _get_all_obj_json(Company):
        if c['id'] == cid:
            return JsonResponse(c)
    return JsonResponse({'error': "Company doesn't exist"})

def comp_vac(request, cid):
    try:
        company = Company.objects.get(id=cid)
        vacancies_obj = Vacancy.objects.filter(company=company)
        vacancies_json = [vacancy.to_json() for vacancy in vacancies_obj]
        return JsonResponse(vacancies_json, safe=False)

    except Company.DoesNotExist:
        return JsonResponse({'error': "Company doesn't exist"})
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': "Vacancy doesn't exist"})

def vacancies(request):
    return JsonResponse(_get_all_obj_json(Vacancy), safe=False)

def get_one_vac(request,vid):
    for v in _get_all_obj_json(Vacancy):
        if v['id'] == vid:
            return JsonResponse(v)
    return JsonResponse({'error': "Vacancy doesn't exist"})

def top_ten(request):
    top_vacancies_obj = Vacancy.objects.filter(~Q(salary=None)).order_by('-salary')[:10]
    top_vac = [vac.to_json() for vac in top_vacancies_obj]

    return JsonResponse(top_vac, safe=False)