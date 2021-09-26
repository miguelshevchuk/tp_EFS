#!/bin/bash
# -*- ENCODING: UTF-8 -*-
echo "Descargando aplicacion"
git pull
echo "Generando nueva imagen"
sudo docker build . -t efs/node-web-app
echo "Eliminando contenedor viejo"
docker stop efs
docker rm efs
echo "Desplegando nuevo contenedor"
docker run --name efs -p 7680:7680 efs/node-web-app
exit