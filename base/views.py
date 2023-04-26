from django.shortcuts import render

calculators = [
    {'id':'graph', 'name':'GraphingCalculator'},
    {'id':'matrix', 'name':'MatrixCalculator'},
    {'id':'scientific', 'name':'ScientificCalculator'},
    {'id':'statistics', 'name':'StatisticsCalculator'},
]

def home(request):
    return render(request, 'base/home.html')
