from django.shortcuts import render

def home(request):
    return render(request, 'scientific/home.html')
