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
  `sexo_id` varchar(255) NOT NULL,
  `perfil_id` int DEFAULT NULL,
  PRIMARY KEY (`usuario_id`),
  UNIQUE KEY `IDX_54ede225bf0cacf048225bb3e8` (`email`),
  KEY `FK_a9b1b7fe498de367334d36b6bb9` (`sexo_id`),
  KEY `FK_a8fb8a1dd56a92943871f3dd05e` (`perfil_id`),
  CONSTRAINT `FK_a8fb8a1dd56a92943871f3dd05e` FOREIGN KEY (`perfil_id`) REFERENCES `PERFILES` (`perfil_id`),
  CONSTRAINT `FK_a9b1b7fe498de367334d36b6bb9` FOREIGN KEY (`sexo_id`) REFERENCES `SEXOS` (`sexo_id`)
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

CREATE TABLE EFS.SECCIONES (
  `seccion_id` int NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `seccion_padre_id` int DEFAULT NULL,
  PRIMARY KEY (`seccion_id`),
  KEY `FK_01975ee811711b681b8622161ca` (`seccion_padre_id`),
  CONSTRAINT `FK_01975ee811711b681b8622161ca` FOREIGN KEY (`seccion_padre_id`) REFERENCES `SECCIONES` (`seccion_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EFS.REELS (
  `reel_id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `seccion_id` int NOT NULL,
  `perfil_id` int NOT NULL,
  PRIMARY KEY (`reel_id`),
  KEY `FK_6caa3fcaec9675161a75eaa4dc4` (`seccion_id`),
  KEY `FK_3a342c75e6dcce6fe40fb19a3ce` (`perfil_id`),
  CONSTRAINT `FK_3a342c75e6dcce6fe40fb19a3ce` FOREIGN KEY (`perfil_id`) REFERENCES `PERFILES` (`perfil_id`),
  CONSTRAINT `FK_6caa3fcaec9675161a75eaa4dc4` FOREIGN KEY (`seccion_id`) REFERENCES `SECCIONES` (`seccion_id`)
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

insert into EFS.SECCIONES (seccion_id, titulo, seccion_padre_id)
values (1, 'Principiantes', null);
insert into EFS.SECCIONES (seccion_id, titulo, seccion_padre_id)
values (2, 'FCI', null);
insert into EFS.SECCIONES (seccion_id, titulo, seccion_padre_id)
values (3, 'Acciones', null);
insert into EFS.SECCIONES (seccion_id, titulo, seccion_padre_id)
values (4, 'Subseccion 1', 1);
insert into EFS.SECCIONES (seccion_id, titulo, seccion_padre_id)
values (5, 'Subseccion 2', 1);


insert into EFS.REELS(titulo, url, seccion_id, perfil_id)
values('Video 1', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 4, 1);
insert into EFS.REELS(titulo, url, seccion_id, perfil_id)
values('Video 2', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 4, 1);
insert into EFS.REELS(titulo, url, seccion_id, perfil_id)
values('Video 3', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 4, 1);
insert into EFS.REELS(titulo, url, seccion_id, perfil_id)
values('Video 4', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 5, 1);
insert into EFS.REELS(titulo, url, seccion_id, perfil_id)
values('Video 5', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 5, 1);
insert into EFS.REELS(titulo, url, seccion_id, perfil_id)
values('Video 6', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 5, 1);
insert into EFS.REELS(titulo, url, seccion_id, perfil_id)
values('Video 7', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 4, 2);
insert into EFS.REELS(titulo, url, seccion_id, perfil_id)
values('Video 8', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 4, 2);
insert into EFS.REELS(titulo, url, seccion_id, perfil_id)
values('Video 9', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 4, 3);
insert into EFS.REELS(titulo, url, seccion_id, perfil_id)
values('Video 10', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 5, 3);
insert into EFS.REELS(titulo, url, seccion_id, perfil_id)
values('Video 11', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 5, 3);
insert into EFS.REELS(titulo, url, seccion_id, perfil_id)
values('Video 12', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 5, 2);
