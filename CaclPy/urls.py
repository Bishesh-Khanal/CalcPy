"""
URL configuration for CaclPy project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('base.urls')),
    path('scientific/', include('scientific.urls'), name='scientific'),
    path('graph/', include('graph.urls'), name='graph'),
    path('statistics/', include('vector.urls'), name='statistics'),
    path('matrix/', include('matrix.urls'), name='matrix'),
    path('equation/', include('equation.urls'), name='equation'),
    path('unit/', include('unit.urls'), name='unit'),
    path('graph3D/', include('graph3D.urls'), name='graph3D'),
    path('__debug__/', include('debug_toolbar.urls')),
]
