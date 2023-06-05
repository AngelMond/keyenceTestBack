# Copiamos el archivo package.json y el package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos todo el código fuente al directorio de trabajo
COPY . .

# Exponemos el puerto en el que se ejecutará el servidor
EXPOSE 3000

# Establecemos las variables de entorno para la conexión a la base de datos de Atlas
ENV MONGO_URI

# Comando para ejecutar el servidor
CMD ["npm", "start"]

# Construir la imagen Docker
docker build -t backend-express .

# Ejecutar el contenedor a partir de la imagen
docker run -p 3000:3000 backend-express