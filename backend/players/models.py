from django.db import models

# Create your models here.
class Player(models.Model):

    POSITIONS = [
        ('armador','Armador'),
        ('punta','Punta'),
        ('central','Central'),
        ('opuesto','Opuesto'),
        ('libero','Libero'),
        ('universal','Universal / Sin posición')
    ]


    first_name = models.CharField(max_length=100 , verbose_name='Nombre del Jugador')
    last_name = models.CharField(max_length=100 , verbose_name='Apellido del Jugador')
    number = models.PositiveIntegerField(verbose_name='Número de Camiseta')

    position = models.CharField(
        max_length = 20,
        choices = POSITIONS,
        default='universal',
        verbose_name="Posición"
    )

    #Devuelve el número el nombre y el apellido con el metodo str
    def __str__(self):
        return f"{self.number} - {self.first_name} {self.last_name}"
    
    class Meta:
        verbose_name= "Jugador"
        verbose_name_plural= "Jugadores" 
