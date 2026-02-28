# 🏐 Volley Stats API

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

Este proyecto es el backend para una aplicación de gestión de equipos de voleibol, desarrollado utilizando **Django** y **Django REST Framework**. Utiliza **PostgreSQL** como base de datos y todo el entorno está containerizado con **Docker** para facilitar su despliegue y desarrollo.

## 🛠️ Tecnologías

* **Python 3.x**
* **Django 5.x**
* **Django REST Framework**
* **Docker & Docker Compose**
* **PostgreSQL**

## 🚀 Requisitos previos

Para poder ejecutar este proyecto, necesitas tener instalado:

* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

## 🔧 Instalación y Configuración

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/juliobienbueno/volley-stats.git
    cd volley-stats
    ```

2.  **Construir y levantar los contenedores:**

    Este comando descargará las imágenes necesarias y levantará el backend (Django) y la base de datos (PostgreSQL).

    ```bash
    docker-compose up -d --build
    ```

3.  **Ejecutar Migraciones:**

    Es necesario crear las tablas en la base de datos antes de usar la API.

    ```bash
    docker-compose exec backend python manage.py migrate
    ```

4.  **Crear superusuario (Opcional):**

    Para acceder al panel de administración de Django (`/admin`) y gestionar los datos desde una interfaz gráfica.

    ```bash
    docker-compose exec backend python manage.py createsuperuser
    ```

## 📡 API Endpoints

Una vez ejecutándose, la API estará disponible en `http://localhost:8000/`.

| Endpoint | Método | Descripción |
| :--- | :--- | :--- |
| `/api/players/` | GET | Listar todos los jugadores |
| `/api/players/` | POST | Crear un nuevo jugador |
| `/api/players/{id}/` | GET | Ver detalle de un jugador |
| `/api/players/{id}/` | PUT/PATCH| Actualizar un jugador |
| `/api/players/{id}/` | DELETE | Eliminar un jugador |

## 🎨 Frontend (Próximamente)

Esta API está preparada para ser consumida por un frontend en React o cualquier otro framework.

---
Creado con 🔥 por Julio Bueno
