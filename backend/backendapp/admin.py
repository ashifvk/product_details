from django.contrib import admin
from .models import login
from .models import register,product


admin.site.register(login)
admin.site.register(register)
admin.site.register(product)