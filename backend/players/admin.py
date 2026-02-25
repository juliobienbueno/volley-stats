from django.contrib import admin
from .models import Player

# Register your models here.
@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    # Esto es para que en la lista veas más columnas y no solo el __str__
    list_display = ('number', 'first_name', 'last_name', 'position')
    # Permite buscar por nombre o número
    search_fields = ('first_name', 'last_name', 'number')