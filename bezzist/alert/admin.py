from django import forms
from django.contrib import admin

from .models import Alert


class AlertModelForm(forms.ModelForm):

    content = forms.CharField(widget=forms.Textarea)

    class Meta:
        model = Alert
        exclude = ['displayed']


class AlertAdmin(admin.ModelAdmin):
    form = AlertModelForm
    ordering = ['-created']

admin.site.register(Alert, AlertAdmin)

