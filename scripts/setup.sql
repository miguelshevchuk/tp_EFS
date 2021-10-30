
insert into public."SEXOS" (sexo_id, descripcion)
values ('M', 'Masculino');
insert into public."SEXOS" (sexo_id, descripcion)
values ('F', 'Femenino');
insert into public."SEXOS" (sexo_id, descripcion)
values ('NB', 'No Binario');

insert into public."PERFILES" (perfil_id, descripcion)
values (1, 'Conservador');
insert into public."PERFILES" (perfil_id, descripcion)
values (2, 'Moderado');
insert into public."PERFILES" (perfil_id, descripcion)
values (3, 'Agresivo');

insert into public."CLASIFICACIONES" (clasificacion_id, descripcion, monedas)
values (1, 'Facil', 25);
insert into public."CLASIFICACIONES" (clasificacion_id, descripcion, monedas)
values (2, 'Medio', 35);
insert into public."CLASIFICACIONES" (clasificacion_id, descripcion, monedas)
values (3, 'Avanzado', 50);

insert into public."OBJETIVOS"(objetivo_id, descripcion, imagen)
values(1, 'Vacaciones', 'Palmera.jpg');
insert into public."OBJETIVOS"(objetivo_id, descripcion, imagen)
values(2, 'Ahorro', 'Palmera.jpg');
insert into public."OBJETIVOS"(objetivo_id, descripcion, imagen)
values(3, 'Comprar un auto', 'Palmera.jpg');
insert into public."OBJETIVOS"(objetivo_id, descripcion, imagen)
values(4, 'Mudarme', 'Palmera.jpg');
insert into public."OBJETIVOS"(objetivo_id, descripcion, imagen)
values(5, 'Emigrar', 'Palmera.jpg');
insert into public."OBJETIVOS"(objetivo_id, descripcion, imagen)
values(6, 'Montar un negocio propio', 'Palmera.jpg');
insert into public."OBJETIVOS"(objetivo_id, descripcion, imagen)
values(7, 'Compra de muebles', 'Palmera.jpg');
insert into public."OBJETIVOS"(objetivo_id, descripcion, imagen)
values(8, 'Personalizado', 'Palmera.jpg');

insert into public."GRUPOS" (grupo_id, titulo, perfil_id, precio)
values (1, 'Principiantes', 1, 5000);
insert into public."GRUPOS" (grupo_id, titulo, perfil_id, precio)
values (2, 'FCI', 3, 5000);
insert into public."GRUPOS" (grupo_id, titulo, perfil_id, precio)
values (3, 'Acciones', 2, 5000);


insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (1, 'Subseccion 1', 1);
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (2, 'Subseccion 2', 1);
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (3, 'Subseccion 3', 2);
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (4, 'Subseccion 4', 3);

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id)
values('Video 1', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 1, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 1);
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id)
values('Video 2', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 1, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 2);
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id)
values('Video 3', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 1, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 1);
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id)
values('Video 4', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 2, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 3);
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id)
values('Video 5', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 2, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 3);
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id)
values('Video 6', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 2, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 1);
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id)
values('Video 7', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 3, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 2);
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id)
values('Video 8', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 3, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 3);
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id)
values('Video 9', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 3, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 1);
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id)
values('Video 10', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 4, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 2);
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id)
values('Video 11', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 4, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 1);
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id)
values('Video 12', 'https://www.youtube.com/watch?v=Ahv1v1xQaLo', 4, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 1);
