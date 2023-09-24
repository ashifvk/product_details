from django.db import models

class login (models.Model):
    username=models.CharField(max_length=30)
    password=models.CharField(max_length=30)
    role=models.CharField(max_length=30)

class register (models.Model):
    name=models.CharField(max_length=30)
    contact=models.CharField(max_length=30)
    email=models.CharField(max_length=30)
    user_status=models.CharField(max_length=30)
    log_id=models.ForeignKey(login,on_delete=models.CASCADE)


class product (models.Model):
    name=models.CharField(max_length=30)
    price=models.CharField(max_length=30)
    quantity=models.CharField(max_length=30)
    category=models.CharField(max_length=30)
