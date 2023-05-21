#imagen base a usar
FROM node:18

#establecer directorio
WORKDIR /usr/src/app

#copiar archivos y directorios
COPY package*.json ./

#ejecutar comando
RUN npm install

#copiar archivos y directorios
COPY . . 

#especificar puerto
EXPOSE 4001

#comando a ejecutar
CMD ["node", "server.js"]