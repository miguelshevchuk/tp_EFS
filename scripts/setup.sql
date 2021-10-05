CREATE TABLE EFS.SEXOS (
  `sexo_id` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`sexo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EFS.USUARIOS (
  `usuario_id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `edad` int NOT NULL,
  `sexo_id` varchar(255) NOT NULL,
  PRIMARY KEY (`usuario_id`),
  KEY `FK_USUARIOS_01` (`sexo_id`),
  CONSTRAINT `FK_USUARIOS_01` FOREIGN KEY (`sexo_id`) REFERENCES `SEXOS` (`sexo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EFS.OBJETIVOS (
  `objetivo_id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`objetivo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EFS.USUARIOS_OBJETIVO (
  `usuario_objetivo_id` int NOT NULL AUTO_INCREMENT,
  `objetivo_id` int NOT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`usuario_objetivo_id`),
  UNIQUE KEY `UQ_USUARIO_OBJETIVO` (`usuario_id`, `objetivo_id`),
  CONSTRAINT `FK_USUARIOS_OBJETIVO_01` FOREIGN KEY (`objetivo_id`) REFERENCES `OBJETIVOS` (`objetivo_id`),
  CONSTRAINT `FK_USUARIOS_OBJETIVO_02` FOREIGN KEY (`usuario_id`) REFERENCES `USUARIOS` (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


insert into EFS.SEXOS (sexo_id, descripcion)
values ('M', 'Masculino');
insert into EFS.SEXOS (sexo_id, descripcion)
values ('F', 'Femenino');

insert into EFS.OBJETIVOS(descripcion, imagen)
values('Vacaciones', 'Palmera.jpg');
insert into EFS.OBJETIVOS(descripcion, imagen)
values('Ahorro', 'Palmera.jpg');
insert into EFS.OBJETIVOS(descripcion, imagen)
values('Comprar un auto', 'Palmera.jpg');
insert into EFS.OBJETIVOS(descripcion, imagen)
values('Mudarme', 'Palmera.jpg');
insert into EFS.OBJETIVOS(descripcion, imagen)
values('Emigrar', 'Palmera.jpg');
insert into EFS.OBJETIVOS(descripcion, imagen)
values('Montar un negocio propio', 'Palmera.jpg');
insert into EFS.OBJETIVOS(descripcion, imagen)
values('Compra de muebles', 'Palmera.jpg');
insert into EFS.OBJETIVOS(descripcion, imagen)
values('Personalizado', 'Palmera.jpg');