FROM python:3.11-slim

# Configuraciones para que Python no se guarde nada y suelte los errores rápido
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Dependencias para que Python pueda hablar con PostgreSQL
RUN apt-get update && apt-get install -y libpq-dev gcc && rm -rf /var/lib/apt/lists/*

# Instalación de librerías
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copiamos el resto del código
COPY . /app/