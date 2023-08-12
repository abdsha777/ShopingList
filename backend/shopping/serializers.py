from rest_framework import serializers

from .models import SList

class SListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SList
        fields = '__all__'