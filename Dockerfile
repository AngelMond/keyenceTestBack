# # Utiliza la imagen base de Node.js
# FROM node:14

# # Establece el directorio de trabajo
# WORKDIR /app

# # Copia los archivos del proyecto a la imagen
# COPY . .

# # Instala las dependencias
# RUN npm install

# # Expone el puerto en el que se ejecuta tu aplicación Express
# #EXPOSE 8080

# # Comando para iniciar la aplicación cuando se ejecute el contenedor
# CMD ["npm", "start"]
# Etapa de construcción
FROM node:14 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM node:14-alpine
WORKDIR /app
COPY --from=build-stage /app ./
EXPOSE 8080
CMD ["npm", "start"]