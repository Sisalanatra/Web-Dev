from django.db import models

class Company(models.Model):
    id= models.AutoField(primary_key= True)
    name= models.CharField(max_length = 200)
    description= models.TextField(default="")
    city= models.CharField(max_length= 50)
    address= models.TextField(default="")

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self) -> str:
        return self.name

class Vacancy(models.Model):
    id= models.AutoField(primary_key=True)
    name= models.CharField(max_length= 255)
    description= models.TextField(default="")
    salary= models.FloatField(default=0)
    company= models.ForeignKey(Company, on_delete= models.CASCADE)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self) -> str:
        return self.name
