
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
values (1, 'Principiante', 100);
insert into public."CLASIFICACIONES" (clasificacion_id, descripcion, monedas)
values (2, 'Medio', 150);
insert into public."CLASIFICACIONES" (clasificacion_id, descripcion, monedas)
values (3, 'Avanzado', 300);

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
values (1, 'Instrumentos Bancarios', 1);
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (2, 'Costos Financieros', 1);
--insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
--values (3, 'Subseccion 3', 2);
--insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
--values (4, 'Subseccion 4', 3);

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
values('Tarjeta de crédito vs tarjeta de débito', 'https://res.cloudinary.com/efscloud/video/upload/v1634510052/beginner/Banking_tools/Que_son_TD_y_TC_zyfw5m.mp4', 1, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 1, '1:35');
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
values('Interes simple y compuesto', 'https://res.cloudinary.com/efscloud/video/upload/v1635908930/beginner/Financial_Cost/2._Interes_simple_y_compuesto__vx0i8s.mp4', 2, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 1, '4:46');
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
values('TNA vs TEA en un plazo fijo', 'https://res.cloudinary.com/efscloud/video/upload/v1634491420/beginner/Financial_Cost/TNA_vs_TEA_en_plazo_fijo_2_arxj9e.mp4', 2, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 1, '4:57');
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
values('¿Qué es el interes bancario?', 'https://res.cloudinary.com/efscloud/video/upload/v1634503636/beginner/Financial_Cost/Que_es_el_interes_bancario_qtkeji.mp4', 2, 'https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_River_Plate#/media/Archivo:CA_river_plate_logo.svg', 1, '3:30');
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
values('CFT - ¿Qué es el Costo Financiero Total?', 'https://res.cloudinary.com/efscloud/video/upload/v1634491465/beginner/Financial_Cost/CFT-Que_es_el_Costo_Financiero_Total_nyw4ls.mp4', 2, 'https://res.cloudinary.com/efscloud/image/upload/v1635908489/beginner/Financial_Cost/CFT_-_Que_es_el_costo_financiero_lwgciy.jpg', 1, '2:31');
insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
values('¿Qué es la tasa de interes?', 'https://res.cloudinary.com/efscloud/video/upload/v1634491388/beginner/Financial_Cost/Que_es_la_tasa_de_interes_mxgkwe.mp4', 2, 'https://res.cloudinary.com/efscloud/image/upload/v1635908119/beginner/Financial_Cost/Que_es_la_tasa_de_interes_s1vofi.jpg', 1, '5:45');


