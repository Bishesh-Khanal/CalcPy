from django.shortcuts import render

def home(request):
    return render(request, 'vector/home.html')
