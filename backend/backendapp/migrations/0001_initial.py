# Generated by Django 4.2.4 on 2023-09-17 17:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='login',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=30)),
                ('role', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='register',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('contact', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=30)),
                ('user_status', models.CharField(max_length=30)),
                ('log_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backendapp.login')),
            ],
        ),
    ]