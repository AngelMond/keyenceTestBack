# Usamos una imagen de Node.js como base
FROM node:14

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo package.json y el package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos todo el código fuente al directorio de trabajo
COPY . .

# Exponemos el puerto en el que se ejecutará el servidor
EXPOSE 8080

# Establecemos las variables de entorno para la conexión a la base de datos de Atlas
ENV MONGO_URI

# Comando para ejecutar el servidor
CMD ["npm", "start"]