FROM node:20-slim

WORKDIR /app

# Copiamos solo los archivos de paquetes para aprovechar la caché de Docker
COPY package*.json ./

RUN npm install

# Copiamos el resto de la app
COPY . .

# Exponemos el puerto de Vite
EXPOSE 5173

CMD ["npm", "run", "dev"]