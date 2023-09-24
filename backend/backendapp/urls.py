from django.urls import path
from . import views

urlpatterns = [
    path('getregister',views.getregister.as_view(),name='getregister'),
    path('registerdata',views.registerdata.as_view(),name='registerdata'),
    path('LoginUserAPIView',views.LoginUserAPIView.as_view(),name='LoginUserAPIView'),
    path('profileEdit/<int:id>',views.profileEdit.as_view(),name='profileEdit'),
    path('profileView/<int:id>',views.profileView.as_view(),name='profileView'),
    path('addproduct',views.addproduct.as_view(),name='addproduct'),
    path('getallproduct',views.getallproduct.as_view(),name='getallproduct'),
    path('deleteproduct/<int:id>',views.deleteproduct.as_view(),name='deleteproduct'),
    path('updateproduct/<int:id>',views.updateproduct.as_view(),name='updateproduct'),
    path('Filterproducts/<char>',views.Filterproducts.as_view(),name='Filterproducts'),
    path('GetsingleProduct/<int:id>',views.GetsingleProduct.as_view(),name='GetsingleProduct'),
    

    
]