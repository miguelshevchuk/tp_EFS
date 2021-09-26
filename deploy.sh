#!/bin/bash
# -*- ENCODING: UTF-8 -*-
echo "Descargando aplicacion"
git pull
echo "Generando nueva imagen"
docker build -t EFS/node:latest .
echo "Eliminando contenedor viejo"
docker stop EFS
docker rm EFS
echo "Desplegando nuevo contenedor"
docker run -p 7680:7680 EFS/node --name EFS
exit