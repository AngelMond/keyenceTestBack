# Utiliza la imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto a la imagen
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que se ejecuta tu aplicación Express
#EXPOSE 8080

# Comando para iniciar la aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]