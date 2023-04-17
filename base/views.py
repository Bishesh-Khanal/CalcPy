from django.shortcuts import render

calculators = [
    {'id':'graph', 'name':'GraphingCalculator'},
    {'id':'matrix', 'name':'MatrixCalculator'},
    {'id':'scientific', 'name':'ScientificCalculator'},
    {'id':'vector', 'name':'VectorCalculator'},
]

def home(request):
    context={'calculators':calculators}
    return render(request, 'base/home.html', context)
