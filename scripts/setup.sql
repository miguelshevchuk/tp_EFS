CREATE DATABASE `EFS` 

-- EFS.usuarios definition
CREATE TABLE EFS.usuarios (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--user: EFS_APP
--pass:seminario123

--Dummy

insert into usuarios(usuario, password)
values ('chebostero', 'moristeEnMadrid');

insert into usuarios(usuario, password)
values ('migue', 'migue');
