from rest_framework import serializers
from .models import login,register,product

class loginserializers(serializers.ModelSerializer):
    class Meta:
        model=login
        fields='__all__'

class registerserializers(serializers.ModelSerializer):
    class Meta:
        model=register
        fields='__all__'

class productserializers(serializers.ModelSerializer):
    class Meta:
        model=product
        fields='__all__'