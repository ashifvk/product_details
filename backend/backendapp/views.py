from django.shortcuts import render,redirect
from .serializers import loginserializers,registerserializers,productserializers
from .models import login,register,product
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status

    
class registerdata(GenericAPIView):
    serializer_class=registerserializers
    serializer_class_login=loginserializers

    def post(self,request):
        log_id=''
        username=request.data.get('username')
        password=request.data.get('password')
        name=request.data.get('name')
        contact=request.data.get('contact')
        email=request.data.get('email')
        user_status='0'
        role='user'
        if(login.objects.filter(username=username)):
            return Response({'message':'duplicate username found !'},status=status.HTTP_400_BAD_REQUEST)
        serializer_login=self.serializer_class_login(data={'username':username,'password':password,'role':role})
        print(serializer_login)
        if serializer_login.is_valid():
            log = serializer_login.save()
            log_id=log.id
            print(log_id)
        serializer_reg=self.serializer_class(data={'name':name,'contact':contact,'email':email,'user_status':user_status,'log_id':log_id})
        print(serializer_reg)
        
        if serializer_reg.is_valid():
            serializer_reg.save()
            return Response({'data':serializer_reg.data,'message':'Registerd successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer_reg.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)
    
class getregister(GenericAPIView):
    serializer_class=registerserializers
    def get(self,request):
        queryset=register.objects.all()
        if(queryset.count()>0):
            serializer=registerserializers(queryset,many=True)
            return Response({'data':serializer.data,'message':'all product set','success':True},status=status.HTTP_200_OK)
        return Response({'data':'no data available','success':False},status=status.HTTP_400_BAD_REQUEST)
        

class LoginUserAPIView(GenericAPIView):
   serializer_class=loginserializers
   def post(self,request):
    role=''
    username=request.data.get('username')
    password=request.data.get('password')
    logreg=login.objects.filter(username=username,password=password)
    if(logreg.count()>0):
        read_serializer=loginserializers(logreg,many=True)
        for i in read_serializer.data:
            id=i ['id']
            print(id)
            role= i['role']
        regdata=register.objects.all().filter(log_id=id).values()
        print(regdata)
        for i in regdata:
            user_status=i['user_status']
            user_id=i['id']
        return Response({'data':{'login_id':id,'user_id':user_id,'username':username,'password':password,'user_status':user_status,'role':role},'message':'login success','success':True},status=status.HTTP_200_OK)
    else:
        return Response({'data':'invalid credentials','success':False},status=status.HTTP_400_BAD_REQUEST)
        

class profileEdit(GenericAPIView):
    serializer_class=registerserializers
    def post(self,request,id): 
       queryset=register.objects.get(pk=id)
       print(queryset)
       serializer=registerserializers(instance=queryset,data=request.data,partial=True)
       print(serializer)
       if serializer.is_valid():
        serializer.save()
        return Response({'data':serializer.data,'message':'updated successfully','success':True},status=status.HTTP_201_CREATED)
       return Response({'data':serializer.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)
    
class profileView(GenericAPIView):
        def get(self,request,id):
            queryset=register.objects.filter(id=id).values()
            return Response({'data':queryset,'message':'single product data','success':True},status=status.HTTP_200_OK)
        

         
class addproduct(GenericAPIView):
    serializer_class=productserializers
    def post(self,request):
        name=request.data.get('name')
        price=request.data.get('price')
        quantity=request.data.get('quantity')
        category=request.data.get('category')
        serializer=self.serializer_class(data={'name':name,'price':price,'quantity':quantity,'category':category,})
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'product added successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)

class getallproduct(GenericAPIView):
    serializer_class=productserializers
    def get(self,request):
        queryset=product.objects.all()
        if(queryset.count()>0):
            serializer=productserializers(queryset,many=True)
            return Response({'data':serializer.data,'message':'all product set','success':True},status=status.HTTP_200_OK)
        return Response({'data':'no data available','success':False},status=status.HTTP_400_BAD_REQUEST)




class deleteproduct(GenericAPIView):
    def get(self,request,id):
        deldata=product.objects.get(pk=id)
        deldata.delete()
        return Response({'message':'deleted','success':True},status=status.HTTP_400_BAD_REQUEST)


class updateproduct(GenericAPIView):
    serializer_class=productserializers
    def post(self,request,id):
       queryset=product.objects.get(pk=id)
       print(queryset)
       serializer=productserializers(instance=queryset,data=request.data,partial=True)
       print(serializer)
       if serializer.is_valid():
        serializer.save()
        return Response({'data':serializer.data,'message':'updated successfully','success':True},status=status.HTTP_201_CREATED)
       return Response({'data':serializer.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)


class Filterproducts(GenericAPIView):
    def get(self,request,char, *args, **kwargs):
        queryset=product.objects.filter(category=char).values()
        return Response({'data':queryset,'message':'single product data','success':True},status=status.HTTP_200_OK)
    
class GetsingleProduct(GenericAPIView):
    def get(self,request,id):
        queryset=product.objects.filter(id=id).values()
        return Response({'data':queryset,'message':'single product data','success':True},status=status.HTTP_200_OK)