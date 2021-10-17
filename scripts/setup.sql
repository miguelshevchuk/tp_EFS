CREATE TABLE EFS.SEXOS (
  `sexo_id` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`sexo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EFS.PERFILES (
  `perfil_id` int NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`perfil_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EFS.USUARIOS (
  `usuario_id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `edad` int NOT NULL,
  `nombre_apellido` varchar(255) NOT NULL,
  `sexo_id` varchar(255) NOT NULL,
  `perfil_id` int DEFAULT NULL,
  PRIMARY KEY (`usuario_id`),
  UNIQUE KEY `IDX_54ede225bf0cacf048225bb3e8` (`email`),
  KEY `FK_a9b1b7fe498de367334d36b6bb9` (`sexo_id`),
  KEY `FK_a8fb8a1dd56a92943871f3dd05e` (`perfil_id`),
  CONSTRAINT `FK_a8fb8a1dd56a92943871f3dd05e` FOREIGN KEY (`perfil_id`) REFERENCES `PERFILES` (`perfil_id`),
  CONSTRAINT `FK_a9b1b7fe498de367334d36b6bb9` FOREIGN KEY (`sexo_id`) REFERENCES `SEXOS` (`sexo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EFS.OBJETIVOS (
  `objetivo_id` int NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`objetivo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EFS.USUARIOS_OBJETIVO (
  `usuario_objetivo_id` int NOT NULL AUTO_INCREMENT,
  `objetivo_id` int DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  PRIMARY KEY (`usuario_objetivo_id`),
  UNIQUE KEY `REL_67c9392e3a827fbf1d8908b58a` (`objetivo_id`),
  UNIQUE KEY `REL_f85ff5d94f099922680af31ab0` (`usuario_id`),
  CONSTRAINT `FK_67c9392e3a827fbf1d8908b58a1` FOREIGN KEY (`objetivo_id`) REFERENCES `OBJETIVOS` (`objetivo_id`),
  CONSTRAINT `FK_f85ff5d94f099922680af31ab09` FOREIGN KEY (`usuario_id`) REFERENCES `USUARIOS` (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EFS.GRUPOS (
  `grupo_id` int NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `perfil_id` int NOT NULL,
  PRIMARY KEY (`grupo_id`),
  KEY `FK_e3daeb8082dc8cd438fc5560fd9` (`perfil_id`),
  CONSTRAINT `FK_e3daeb8082dc8cd438fc5560fd9` FOREIGN KEY (`perfil_id`) REFERENCES `PERFILES` (`perfil_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EFS.SECCIONES (
  `seccion_id` int NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `grupo_id` int NOT NULL,
  PRIMARY KEY (`seccion_id`),
  KEY `FK_ed88b08d24665b8168eed64c4dd` (`grupo_id`),
  CONSTRAINT `FK_ed88b08d24665b8168eed64c4dd` FOREIGN KEY (`grupo_id`) REFERENCES `GRUPOS` (`grupo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EFS.REELS (
  `reel_id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `nombre_archivo` varchar(255) NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `seccion_id` int NOT NULL,
  PRIMARY KEY (`reel_id`),
  KEY `FK_6caa3fcaec9675161a75eaa4dc4` (`seccion_id`),
  CONSTRAINT `FK_6caa3fcaec9675161a75eaa4dc4` FOREIGN KEY (`seccion_id`) REFERENCES `SECCIONES` (`seccion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EFS.FAVORITOS (
  `favorito_id` int NOT NULL AUTO_INCREMENT,
  `reel_id` int NOT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`favorito_id`),
  UNIQUE KEY `IDX_4b0bca875bdf1e96639abe1f1a` (`reel_id`,`usuario_id`),
  KEY `FK_8ae3fa3a39d8c5f3b65fa6bc458` (`usuario_id`),
  CONSTRAINT `FK_8ae3fa3a39d8c5f3b65fa6bc458` FOREIGN KEY (`usuario_id`) REFERENCES `USUARIOS` (`usuario_id`),
  CONSTRAINT `FK_ef3acb9683476b4878e59abd5b8` FOREIGN KEY (`reel_id`) REFERENCES `REELS` (`reel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EFS.LIKES (
  `like_id` int NOT NULL AUTO_INCREMENT,
  `reel_id` int NOT NULL,
  `usuario_id` int NOT NULL,
  `like` tinyint NOT NULL,
  PRIMARY KEY (`like_id`),
  UNIQUE KEY `IDX_63310615ca626358d0dbb45fef` (`reel_id`,`usuario_id`),
  KEY `FK_c5c60affb8b4a9c207f03176bc9` (`usuario_id`),
  CONSTRAINT `FK_c5c60affb8b4a9c207f03176bc9` FOREIGN KEY (`usuario_id`) REFERENCES `USUARIOS` (`usuario_id`),
  CONSTRAINT `FK_fb045d50a23c841e0b47d9fa1e8` FOREIGN KEY (`reel_id`) REFERENCES `REELS` (`reel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `EFS`.`VW_POPULAR_REELS` AS 
select `r`.`reel_id` AS `reelId`,`r`.`titulo` AS `titulo`,`g`.`grupo_id` AS `grupoId`,count(1) AS `cantidadLikes` 
from (((`EFS`.`LIKES` `l` 
join `EFS`.`REELS` `r` on((`r`.`reel_id` = `l`.`reel_id`))) 
join `EFS`.`SECCIONES` `s` on((`s`.`seccion_id` = `r`.`seccion_id`))) 
join `EFS`.`GRUPOS` `g` on((`g`.`grupo_id` = `s`.`grupo_id`))) 
where (`l`.`like` = 1) 
group by `r`.`reel_id` 
order by `cantidadLikes` desc;



insert into EFS.SEXOS (sexo_id, descripcion)
values ('M', 'Masculino');
insert into EFS.SEXOS (sexo_id, descripcion)
values ('F', 'Femenino');

insert into EFS.PERFILES (perfil_id, descripcion)
values (1, 'Conservador');
insert into EFS.PERFILES (perfil_id, descripcion)
values (2, 'Moderado');
insert into EFS.PERFILES (perfil_id, descripcion)
values (3, 'Agresivo');

insert into EFS.OBJETIVOS(objetivo_id, descripcion, imagen)
values(1, 'Vacaciones', 'Palmera.jpg');
insert into EFS.OBJETIVOS(objetivo_id, descripcion, imagen)
values(2, 'Ahorro', 'Palmera.jpg');
insert into EFS.OBJETIVOS(objetivo_id, descripcion, imagen)
values(3, 'Comprar un auto', 'Palmera.jpg');
insert into EFS.OBJETIVOS(objetivo_id, descripcion, imagen)
values(4, 'Mudarme', 'Palmera.jpg');
insert into EFS.OBJETIVOS(objetivo_id, descripcion, imagen)
values(5, 'Emigrar', 'Palmera.jpg');
insert into EFS.OBJETIVOS(objetivo_id, descripcion, imagen)
values(6, 'Montar un negocio propio', 'Palmera.jpg');
insert into EFS.OBJETIVOS(objetivo_id, descripcion, imagen)
values(7, 'Compra de muebles', 'Palmera.jpg');
insert into EFS.OBJETIVOS(objetivo_id, descripcion, imagen)
values(8, 'Personalizado', 'Palmera.jpg');

insert into EFS.GRUPOS (grupo_id, titulo, perfil_id)
values (1, 'Principiantes', 1);
insert into EFS.GRUPOS (grupo_id, titulo, perfil_id)
values (2, 'FCI', 3);
insert into EFS.GRUPOS (grupo_id, titulo, perfil_id)
values (3, 'Acciones', 2);


insert into EFS.SECCIONES (seccion_id, titulo, grupo_id)
values (1, 'Subseccion 1', 1);
insert into EFS.SECCIONES (seccion_id, titulo, grupo_id)
values (2, 'Subseccion 2', 1);
insert into EFS.SECCIONES (seccion_id, titulo, grupo_id)
values (3, 'Subseccion 3', 2);
insert into EFS.SECCIONES (seccion_id, titulo, grupo_id)
values (4, 'Subseccion 4', 3);

insert into EFS.REELS(titulo, ubicacion, nombre_archivo, seccion_id)
values('Video 1', 'beginner/financial_cost/', 'images.png', 1);
insert into EFS.REELS(titulo, ubicacion, nombre_archivo, seccion_id)
values('Video 2', 'beginner/financial_cost/', 'images.png', 1);
insert into EFS.REELS(titulo, ubicacion, nombre_archivo, seccion_id)
values('Video 3', 'beginner/financial_cost/', 'images.png', 1);
insert into EFS.REELS(titulo, ubicacion, nombre_archivo, seccion_id)
values('Video 4', 'beginner/financial_cost/', 'images.png', 2);
insert into EFS.REELS(titulo, ubicacion, nombre_archivo, seccion_id)
values('Video 5', 'beginner/financial_cost/', 'images.png', 2);
insert into EFS.REELS(titulo, ubicacion, nombre_archivo, seccion_id)
values('Video 6', 'beginner/financial_cost/', 'images.png', 2);
insert into EFS.REELS(titulo, ubicacion, nombre_archivo, seccion_id)
values('Video 7', 'beginner/financial_cost/', 'images.png', 3);
insert into EFS.REELS(titulo, ubicacion, nombre_archivo, seccion_id)
values('Video 8', 'beginner/financial_cost/', 'images.png', 3);
insert into EFS.REELS(titulo, ubicacion, nombre_archivo, seccion_id)
values('Video 9', 'beginner/financial_cost/', 'images.png', 3);
insert into EFS.REELS(titulo, ubicacion, nombre_archivo, seccion_id)
values('Video 10', 'beginner/financial_cost/', 'images.png', 4);
insert into EFS.REELS(titulo, ubicacion, nombre_archivo, seccion_id)
values('Video 11', 'beginner/financial_cost/', 'images.png', 4);
insert into EFS.REELS(titulo, ubicacion, nombre_archivo, seccion_id)
values('Video 12', 'beginner/financial_cost/', 'images.png', 4);
