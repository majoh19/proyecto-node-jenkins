#imagen base a usar
FROM nginx:alpine

#copiar archivos y directorios
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#especificar puerto
EXPOSE 80

#comando a ejecutar
CMD ["nginx", "-g" , "daemon off;"]