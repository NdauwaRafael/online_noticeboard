# Generated by Django 2.1.7 on 2019-03-28 23:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0005_auto_20190328_2308'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='category',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
