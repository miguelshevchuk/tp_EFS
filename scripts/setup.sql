
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
values (2, 'Medio', 250);
insert into public."CLASIFICACIONES" (clasificacion_id, descripcion, monedas)
values (3, 'Avanzado', 500);

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
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (3, 'Conceptos Financieros', 1);
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (4, 'Métodos de Ahorro e Inversión', 1);
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (5, 'Plazo Fijo', 1);
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (6, 'Conceptos Iniciales', 2);
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (7, 'A ponerse en Práctica', 2);
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (8, 'Ejemplos de FCI', 2);
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (9, 'Conceptos iniciales', 3);
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (10, 'Introducción a la Bolsa Nivel I', 3);
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (11, 'Introducción a la Bolsa Nivel II', 3);
insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
values (12, 'Introducción a la Bolsa Nivel III', 3);



--insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
--values (3, 'Subseccion 3', 2);
--insert into public."SECCIONES" (seccion_id, titulo, grupo_id)
--values (4, 'Subseccion 4', 3);

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Presupuesto Personal', 'https://res.cloudinary.com/efscloud/video/upload/v1636176944/beginner/Financial%20Concepts/1._Presupuesto_Personal_A_bpnxt1.mp4',	3, 'https://res.cloudinary.com/efscloud/image/upload/v1636223130/beginner/Financial%20Concepts/1._Presupuesto_Personal_A_siy4rd.jpg',	1, '0:00:54');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Endeudamiento Responsable', 'https://res.cloudinary.com/efscloud/video/upload/v1636176946/beginner/Financial%20Concepts/2._Endeudamiento_Responsable_A_ptvhyt.mp4',	3, 'https://res.cloudinary.com/efscloud/image/upload/v1636223289/beginner/Financial%20Concepts/2._Endeudamiento_Responsable_eagpo8.jpg',	1, '0:00:53');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Salario Nominal vs Real', 'https://res.cloudinary.com/efscloud/video/upload/v1636176885/beginner/Financial%20Concepts/3._SALARIO_Nominal_vs._Real_A_tdbqnv.mp4',	3, 'https://res.cloudinary.com/efscloud/image/upload/v1636223288/beginner/Financial%20Concepts/3._SALARIO_Nominal_vs._Real_pvsys7.jpg',	1, '0:01:00');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Cómo se produce la inflación?', 'https://res.cloudinary.com/efscloud/video/upload/v1636176885/beginner/Financial%20Concepts/4._Como_se_produce_la_inflaci%C3%B3n_A_uaymhx.mp4',	3, 'https://res.cloudinary.com/efscloud/image/upload/v1636223130/beginner/Financial%20Concepts/4._Como_se_produce_la_inflaci%C3%B3n_A_dtcwtr.jpg',	1, '0:03:48');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué es UVA?', 'https://res.cloudinary.com/efscloud/video/upload/v1636176943/beginner/Financial%20Concepts/5._UVA_A_gfgtik.mp4',	3, 'https://res.cloudinary.com/efscloud/image/upload/v1636255938/beginner/Financial%20Concepts/5._UVA_odluvj.jpg',	1, '0:02:53');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('La ley de la oferta y la demanda', 'https://res.cloudinary.com/efscloud/video/upload/v1636176918/beginner/Financial%20Concepts/6._La_ley_de_la_oferta_y_la_demanda_A_os5kgo.mp4',	3, 'https://res.cloudinary.com/efscloud/image/upload/v1636223127/beginner/Financial%20Concepts/6._La_ley_de_la_oferta_y_la_demanda_A_mvyq3o.jpg',	1, '0:01:37');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué es el mercado primario?', 'https://res.cloudinary.com/efscloud/video/upload/v1636176936/beginner/Financial%20Concepts/7._Que_es_el_mercado_primario_A_nojxvk.mp4',	3, 'https://res.cloudinary.com/efscloud/image/upload/v1636913785/beginner/Financial%20Concepts/7._Que_es_el_mercado_primario_cpmgku.jpg',	1, '0:02:10');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué es el mercado secundario?', 'https://res.cloudinary.com/efscloud/image/upload/v1636223127/beginner/Financial%20Concepts/6._La_ley_de_la_oferta_y_la_demanda_A_mvyq3o.jpg',	3, 'https://res.cloudinary.com/efscloud/image/upload/v1636913785/beginner/Financial%20Concepts/8._Que_es_el_mercado_secundario_A_jgjvts.jpg',	1, '0:01:30');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué es la tasa de interés?', 'https://res.cloudinary.com/efscloud/video/upload/v1634491388/beginner/Financial_Cost/Que_es_la_tasa_de_interes_mxgkwe.mp4',	2, 'https://res.cloudinary.com/efscloud/image/upload/v1635908119/beginner/Financial_Cost/Que_es_la_tasa_de_interes_s1vofi.jpg',	1, '0:05:45');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('CFT - ¿Qué es el Costo Financiero Total?', 'https://res.cloudinary.com/efscloud/video/upload/v1634491465/beginner/Financial_Cost/CFT-Que_es_el_Costo_Financiero_Total_nyw4ls.mp4',	2, 'https://res.cloudinary.com/efscloud/image/upload/v1635908489/beginner/Financial_Cost/CFT_-_Que_es_el_costo_financiero_lwgciy.jpg',	1, '0:02:31');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué es el interés bancario?', 'https://res.cloudinary.com/efscloud/video/upload/v1634503636/beginner/Financial_Cost/Que_es_el_interes_bancario_qtkeji.mp4',	2, 'https://res.cloudinary.com/efscloud/image/upload/v1636221531/beginner/Financial_Cost/3._Que_es_el_interes_bancario_u4damd.jpg',	1, '0:03:30');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('TNA vs TEA en un plazo fijo', 'https://res.cloudinary.com/efscloud/video/upload/v1634491420/beginner/Financial_Cost/TNA_vs_TEA_en_plazo_fijo_2_arxj9e.mp4',	2, 'https://res.cloudinary.com/efscloud/image/upload/v1636221532/beginner/Financial_Cost/4._TNA_vs_TEA_q4dlso.jpg',	1, '0:04:57');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Interés simple y compuesto', 'https://res.cloudinary.com/efscloud/video/upload/v1635908930/beginner/Financial_Cost/2._Interes_simple_y_compuesto__vx0i8s.mp4',	2, 'https://res.cloudinary.com/efscloud/image/upload/v1636221531/beginner/Financial_Cost/2._Interes_simple_y_compuesto__xqsigt.jpg',	1, '0:04:46');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Medios de Pago', 'https://res.cloudinary.com/efscloud/video/upload/v1636176348/beginner/Banking_tools/1._Medios_de_Pago__jn6tdd.mp4',	1, 'https://res.cloudinary.com/efscloud/image/upload/v1636215521/beginner/Banking_tools/1._Medios_de_Pago_jqqual.jpg',	1, '0:01:33');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Cómo crear una cuenta bancaria?', 'https://res.cloudinary.com/efscloud/video/upload/v1634510050/beginner/Banking_tools/como_crear_una_cuenta_bancaria_c8bgfa.mp4',	1, 'https://res.cloudinary.com/efscloud/image/upload/v1636215519/beginner/Banking_tools/2._Como_crear_una_cuenta_bancaria_czi3t2.jpg',	1, '0:08:02');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Caja de Ahorro vs Cuenta Corriente', 'https://res.cloudinary.com/efscloud/video/upload/v1636176365/beginner/Banking_tools/3._Caja_de_Ahorro_VS_Cuenta_Corriente_fe2htg.mp4',	1, 'https://res.cloudinary.com/efscloud/image/upload/v1636215517/beginner/Banking_tools/3._Caja_de_Ahorro_VS_Cuenta_Corriente_z5obsk.jpg',	1, '0:00:53');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Tarjeta de Crédito vs Tarjeta de Débito', 'https://res.cloudinary.com/efscloud/video/upload/v1634510052/beginner/Banking_tools/Que_son_TD_y_TC_zyfw5m.mp4',	1, 'https://res.cloudinary.com/efscloud/image/upload/v1636215516/beginner/Banking_tools/4._Tarjeta_de_Credito_VS_Debito_h0ub9p.jpg',	1, '0:01:35');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Cómo usar una Tarjeta de Crédito?', 'https://res.cloudinary.com/efscloud/video/upload/v1634510034/beginner/Banking_tools/como_usar_una_tarjeta_de_credito_zyhqj3.mp4',	1, 'https://res.cloudinary.com/efscloud/image/upload/v1636215516/beginner/Banking_tools/5._Como_usar_una_Tarjeta_de_Credito_jn8zur.jpg',	1, '0:09:15');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Cómo leer el resumen de tu tarjeta?', 'https://res.cloudinary.com/efscloud/video/upload/v1636176353/beginner/Banking_tools/6._Como_leer_el_resumen_de_tu_tarjeta_w10tqs.mp4',	1, 'https://res.cloudinary.com/efscloud/image/upload/v1636215518/beginner/Banking_tools/6._Como_leer_el_resumen_de_tu_tarjeta_dojhbu.jpg',	1, '0:03:08');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Billeteras Virtuales', 'https://res.cloudinary.com/efscloud/video/upload/v1634510045/beginner/Banking_tools/Billeteras_virtuales_que_son_nq5u8s.mp4',	1, 'https://res.cloudinary.com/efscloud/image/upload/v1636215512/beginner/Banking_tools/7._Billeteras_Virtuales_haayyu.jpg',	1, '0:01:10');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Billeteras Digitales en Argentina', 'https://res.cloudinary.com/efscloud/video/upload/v1634510034/beginner/Banking_tools/billeteras_digitales_en_Argentina_cxhy7f.mp4',	1, 'https://res.cloudinary.com/efscloud/image/upload/v1636215515/beginner/Banking_tools/8._Billeteras_Digitales_en_Argentina_jgmi3q.jpg',	1, '0:07:18');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Cheques de pago diferido', 'https://res.cloudinary.com/efscloud/video/upload/v1636176345/beginner/Banking_tools/9._Cheques_de_pagos_diferidos__kkd4iq.mp4',	1, 'https://res.cloudinary.com/efscloud/image/upload/v1636216451/beginner/Banking_tools/9._Cheques_de_pagos_diferidos__yxoc3l.jpg',	1, '0:01:50');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Tipos de dólar en Argentina', 'https://res.cloudinary.com/efscloud/video/upload/v1636176359/beginner/Banking_tools/10._Tipos_de_dolar_en_Argentina_an6tib.mp4',	1, 'https://res.cloudinary.com/efscloud/image/upload/v1636216451/beginner/Banking_tools/10._Tipos_de_dolar_en_Argentina_g9sawg.jpg',	1, '0:03:31');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué son los ahorros?', 'https://res.cloudinary.com/efscloud/video/upload/v1636176521/beginner/Saving_and_investment_methods/1._Que_son_los_ahorros_kyegg0.mp4',	4, 'https://res.cloudinary.com/efscloud/image/upload/v1636915407/beginner/Saving_and_investment_methods/1._Que_son_los_ahorros_y9slyt.jpg',	1, '0:00:41');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué son las inversiones?', 'https://res.cloudinary.com/efscloud/video/upload/v1636915991/beginner/Saving_and_investment_methods/2._Que_son_las_inversiones_dzziaz.mp4',	4, 'https://res.cloudinary.com/efscloud/image/upload/v1636915636/beginner/Saving_and_investment_methods/2._Que_son_las_inversiones_hxtyxw.jpg',	1, '0:00:48');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué es un plazo fijo?', 'https://res.cloudinary.com/efscloud/video/upload/v1634499535/beginner/Saving_and_investment_methods/Que_es_un_plazo_fijo__coyzvz.mp4',	4, 'https://res.cloudinary.com/efscloud/image/upload/v1636915409/beginner/Saving_and_investment_methods/3._Que_es_un_plazo_fijo__drxt8a.jpg',	1, '0:01:08');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Inversiones en divisas', 'https://res.cloudinary.com/efscloud/video/upload/v1634499510/beginner/Saving_and_investment_methods/inversiones_en_divisas__prcowe.mp4',	4, 'https://res.cloudinary.com/efscloud/image/upload/v1636915820/beginner/Saving_and_investment_methods/4._Inversiones_en_divisas__bykiyc.jpg',	1, '0:01:54');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Renta Fija', 'https://res.cloudinary.com/efscloud/video/upload/v1636176578/beginner/Saving_and_investment_methods/5._Renta_Fija_dkowhx.mp4',	4, 'https://res.cloudinary.com/efscloud/image/upload/v1636915404/beginner/Saving_and_investment_methods/5._Renta_Fija_b64bbq.jpg',	1, '0:02:37');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Renta Variable', 'https://res.cloudinary.com/efscloud/video/upload/v1636176570/beginner/Saving_and_investment_methods/6._Renta_Variable_rscszq.mp4',	4, 'https://res.cloudinary.com/efscloud/image/upload/v1636915406/beginner/Saving_and_investment_methods/6._Renta_Variable_t3agzo.jpg',	1, '0:01:51');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué es un FCI?', 'https://res.cloudinary.com/efscloud/video/upload/v1636176605/beginner/Saving_and_investment_methods/7._Que_es_fci_p92lmw.mp4',	4, 'https://res.cloudinary.com/efscloud/image/upload/v1636915637/beginner/Saving_and_investment_methods/7._Que_es_fci_yznvwe.jpg',	1, '0:00:52');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué son las acciones?', 'https://res.cloudinary.com/efscloud/video/upload/v1634499520/beginner/Saving_and_investment_methods/Que_son_las_acciones_itootl.mp4',	4, 'https://res.cloudinary.com/efscloud/image/upload/v1636915637/beginner/Saving_and_investment_methods/7._Que_son_las_acciones_wh22va.jpg',	1, '0:01:19');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué son las criptomonedas?', 'https://res.cloudinary.com/efscloud/video/upload/v1634499525/beginner/Saving_and_investment_methods/Criptomonedas_-_Qu%C3%A9_son_egaa5w.mp4',	4, 'https://res.cloudinary.com/efscloud/image/upload/v1636915405/beginner/Saving_and_investment_methods/8._Que_son_las_Criptomonedas_qadzc8.jpg',	1, '0:02:22');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué son los bonos?', 'https://res.cloudinary.com/efscloud/video/upload/v1636915267/beginner/Saving_and_investment_methods/9._Que_son_los_bonos_gnsds5.mp4',	4, 'https://res.cloudinary.com/efscloud/image/upload/v1636915406/beginner/Saving_and_investment_methods/9._Que_son_los_bonos_kit9ea.jpg',	1, '0:03:03');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué es un Plazo Fijo?', 'https://res.cloudinary.com/efscloud/video/upload/v1636177032/beginner/Plazo%20Fijo/1._Que_es_un_plazo_fijo_frhlh0.mp4',	5, 'https://res.cloudinary.com/efscloud/image/upload/v1636343899/beginner/Plazo%20Fijo/1._Que_es_un_plazo_fijo_je1qzw.jpg',	1, '0:00:54');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Tipos de Plazos Fijos en Argentina', 'https://res.cloudinary.com/efscloud/video/upload/v1636176992/beginner/Plazo%20Fijo/2._Tipos_de_Plazo_Fijo_en_Argentina_bbyuvq.mp4',	5, 'https://res.cloudinary.com/efscloud/image/upload/v1636343897/beginner/Plazo%20Fijo/2._Tipos_de_Plazo_Fijo_en_Argentina_blialt.jpg',	1, '0:02:03');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Plazo Fijo UVA', 'https://res.cloudinary.com/efscloud/video/upload/v1636176990/beginner/Plazo%20Fijo/3.Plazo_Fijo_UVA_pd98dd.mp4',	5, 'https://res.cloudinary.com/efscloud/image/upload/v1636343895/beginner/Plazo%20Fijo/3.Plazo_Fijo_UVA_plxo6l.jpg',	1, '0:02:52');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Plazo Fijo Tradicional vs UVA', 'https://res.cloudinary.com/efscloud/video/upload/v1636177001/beginner/Plazo%20Fijo/4._Plazo_Fijo_Tradicional_VS_UVA_tklafn.mp4',	5, 'https://res.cloudinary.com/efscloud/image/upload/v1636343895/beginner/Plazo%20Fijo/4._Plazo_Fijo_Tradicional_VS_UVA_trp323.jpg',	1, '0:01:58');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Plazo Fijo en Dolares', 'https://res.cloudinary.com/efscloud/video/upload/v1636177019/beginner/Plazo%20Fijo/5._Plazo_fijo_en_dolares_m6276a.mp4',	5, 'https://res.cloudinary.com/efscloud/image/upload/v1636343895/beginner/Plazo%20Fijo/5._Plazo_fijo_en_dolares_t7fcwk.jpg',	1, '0:02:26');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Comparador de Plazo Fijo', 'https://res.cloudinary.com/efscloud/video/upload/v1636176987/beginner/Plazo%20Fijo/6.Comparador_de_plazos_fijos_wu9fza.mp4',	5, 'https://res.cloudinary.com/efscloud/image/upload/v1636343895/beginner/Plazo%20Fijo/6.Comparador_de_plazos_fijos_gbvvef.jpg',	1, '0:01:28');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Plazo Fijo Online, sin ser cliente', 'https://res.cloudinary.com/efscloud/video/upload/v1636177028/beginner/Plazo%20Fijo/7._Plazo_Fijo_Online_sin_ser_cliente_vgcfze.mp4',	5, 'https://res.cloudinary.com/efscloud/image/upload/v1636343895/beginner/Plazo%20Fijo/7._Plazo_Fijo_Online_sin_ser_cliente_ramsfy.jpg',	1, '0:07:26');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué es un FCI?', 'https://res.cloudinary.com/efscloud/video/upload/v1636177099/conservative/FCI/1.%20Conceptos%20Iniciales/4._Abiertos_o_Cerrados_a8qdwa.mp4',	6, 'https://res.cloudinary.com/efscloud/image/upload/v1636926173/conservative/FCI/1.%20Conceptos%20Iniciales/1._Que_es_un_FCI_yrqsbq.jpg',	1, '0:03:20');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Ventajas y Desventajas de un FCI', 'https://res.cloudinary.com/efscloud/video/upload/v1636177119/conservative/FCI/1.%20Conceptos%20Iniciales/2._Ventajas_y_desventajas_xglien.mp4',	6, 'https://res.cloudinary.com/efscloud/image/upload/v1636926179/conservative/FCI/1.%20Conceptos%20Iniciales/2._Ventajas_y_desventajas_rdr8tc.jpg',	1, '0:03:18');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Tipos de FCI', 'https://res.cloudinary.com/efscloud/video/upload/v1636177141/conservative/FCI/1.%20Conceptos%20Iniciales/3._Tipos_de_FCI_smocvw.mp4',	6, 'https://res.cloudinary.com/efscloud/image/upload/v1636926175/conservative/FCI/1.%20Conceptos%20Iniciales/3._Tipos_de_FCI_tkwtni.jpg',	1, '0:04:40');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('FCI Abiertos y Cerrados', 'https://res.cloudinary.com/efscloud/video/upload/v1636177099/conservative/FCI/1.%20Conceptos%20Iniciales/4._Abiertos_o_Cerrados_a8qdwa.mp4',	6, 'https://res.cloudinary.com/efscloud/image/upload/v1636926172/conservative/FCI/1.%20Conceptos%20Iniciales/4._Abiertos_o_Cerrados_d0d8mg.jpg',	1, '0:02:05');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('FCI Información Oficial', 'https://res.cloudinary.com/efscloud/video/upload/v1636177138/conservative/FCI/1.%20Conceptos%20Iniciales/5._Informacion_Oficial_jmiag8.mp4',	6, 'https://res.cloudinary.com/efscloud/image/upload/v1636926185/conservative/FCI/1.%20Conceptos%20Iniciales/5._Informacion_Oficial_yjxzdv.jpg',	1, '0:04:09');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('FCI Marco Legal', 'https://res.cloudinary.com/efscloud/video/upload/v1636177138/conservative/FCI/1.%20Conceptos%20Iniciales/6._Marco_Legal_rggggl.mp4',	6, 'https://res.cloudinary.com/efscloud/image/upload/v1636926178/conservative/FCI/1.%20Conceptos%20Iniciales/6._Marco_Legal_roqkrf.jpg',	1, '0:00:57');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('FCI Inversión Mínima', 'https://res.cloudinary.com/efscloud/video/upload/v1636177128/conservative/FCI/1.%20Conceptos%20Iniciales/7._Inversion_Minima_aq1kbj.mp4',	6, 'https://res.cloudinary.com/efscloud/image/upload/v1636926173/conservative/FCI/1.%20Conceptos%20Iniciales/7._Inversion_Minima_bfqllc.jpg',	1, '0:01:13');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Dónde y cómo se adquieren?', 'https://res.cloudinary.com/efscloud/video/upload/v1636177175/conservative/FCI/2.%20A%20ponerse%20en%20practica/1._Donde_y_como_se_adquieren_A_g9qblf.mp4',	7, 'https://res.cloudinary.com/efscloud/image/upload/v1636927224/conservative/FCI/2.%20A%20ponerse%20en%20practica/1._Donde_y_como_se_adquieren_A_r9q5ig.jpg',	1, '0:02:23');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Evaluación Práctica', 'https://res.cloudinary.com/efscloud/video/upload/v1636177207/conservative/FCI/2.%20A%20ponerse%20en%20practica/2._Evaluacion_Practica_A_c7m9ko.mp4',	7, 'https://res.cloudinary.com/efscloud/image/upload/v1636926215/conservative/FCI/2.%20A%20ponerse%20en%20practica/2._Evaluacion_Practica_A_ivqlby.jpg',	1, '0:06:10');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('CAFCI- Cámara Argentina de FCI', 'https://res.cloudinary.com/efscloud/video/upload/v1636177193/conservative/FCI/2.%20A%20ponerse%20en%20practica/3._CAFCI-_camara_arg_de_fci_A_tazigk.mp4',	7, 'https://res.cloudinary.com/efscloud/image/upload/v1636927191/conservative/FCI/2.%20A%20ponerse%20en%20practica/3._CAFCI-_camara_arg_de_fci_A_qdgmsf.jpg',	2, '0:09:18');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Cómo invertir desde Home Banking?', 'https://res.cloudinary.com/efscloud/video/upload/v1636177245/conservative/FCI/2.%20A%20ponerse%20en%20practica/4._Como_invertir_desde_Home_Banking_B_ydryey.mp4',	7, 'https://res.cloudinary.com/efscloud/image/upload/v1636926233/conservative/FCI/2.%20A%20ponerse%20en%20practica/4._Como_invertir_desde_Home_Banking_B_jdjhym.jpg',	2, '0:06:03');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Cómo invertir desde un Agente?', 'https://res.cloudinary.com/efscloud/video/upload/v1636177238/conservative/FCI/2.%20A%20ponerse%20en%20practica/5._Como_invertir_desde_un_Agente_B_ad3izq.mp4',	7, 'https://res.cloudinary.com/efscloud/image/upload/v1636926229/conservative/FCI/2.%20A%20ponerse%20en%20practica/5._Como_invertir_desde_un_Agente_B_xasiql.jpg',	2, '0:05:27');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Cómo rescatar un FCI?', 'https://res.cloudinary.com/efscloud/video/upload/v1636177240/conservative/FCI/2.%20A%20ponerse%20en%20practica/6._Como_rescatar_un_FCI_B_e3wczg.mp4',	7, 'https://res.cloudinary.com/efscloud/image/upload/v1636926229/conservative/FCI/2.%20A%20ponerse%20en%20practica/6._Como_rescatar_un_FCI_B_pxgnz8.jpg',	2, '0:05:52');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Fondos de baja inversión inicial', 'https://res.cloudinary.com/efscloud/video/upload/v1636177360/conservative/FCI/3.%20Ejemplos%20de%20FCI/1._Fondos_de_baja_inversi%C3%B3n_inicial_B_mjrl27.mp4',	8, 'https://res.cloudinary.com/efscloud/image/upload/v1636927467/conservative/FCI/3.%20Ejemplos%20de%20FCI/1._Fondos_de_baja_inversi%C3%B3n_inicial_B_xiuamg.jpg',	2, '0:08:02');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Fondos en Dolares para invertir', 'https://res.cloudinary.com/efscloud/video/upload/v1636177358/conservative/FCI/3.%20Ejemplos%20de%20FCI/2._Fondos_en_Dolares_para_invertir_B_wakxyk.mp4',	8, 'https://res.cloudinary.com/efscloud/image/upload/v1636926251/conservative/FCI/3.%20Ejemplos%20de%20FCI/2._Fondos_en_Dolares_para_invertir_B_todvjy.jpg',	2, '0:08:46');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Fondos para invertir en el extranjero', 'https://res.cloudinary.com/efscloud/video/upload/v1636180906/conservative/FCI/3.%20Ejemplos%20de%20FCI/3._Fondos_para_invertir_en_el_extranjero_sxxakj.mp4',	8, 'https://res.cloudinary.com/efscloud/image/upload/v1636926240/conservative/FCI/3.%20Ejemplos%20de%20FCI/3._Fondos_para_invertir_en_el_extranjero_az85iy.jpg',	2, '0:14:51');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué son las acciones?', 'https://res.cloudinary.com/efscloud/video/upload/v1636177367/conservative/Acciones/1.%20Conceptos%20Iniciales/1._Qu%C3%A9_son_las_acciones_kpteo8.mp4',	9, 'https://res.cloudinary.com/efscloud/image/upload/v1636860463/conservative/Acciones/1.%20Conceptos%20Iniciales/1._Qu%C3%A9_son_las_acciones_vw17t8.jpg',	2, '0:14:51');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Acciones Ordinarias vs Acciones Preferidas', 'https://res.cloudinary.com/efscloud/video/upload/v1636177383/conservative/Acciones/1.%20Conceptos%20Iniciales/2._Acciones_Ordinarias_VS_Acciones_Preferidas_yk7eih.mp4',	9, 'https://res.cloudinary.com/efscloud/image/upload/v1636860464/conservative/Acciones/1.%20Conceptos%20Iniciales/2._Acciones_Ordinarias_VS_Acciones_Preferidas_v9jqv4.jpg',	2, '0:14:51');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Acciones de Crecimiento vs Acciones de Valor', 'https://res.cloudinary.com/efscloud/video/upload/v1636177387/conservative/Acciones/1.%20Conceptos%20Iniciales/3._Acciones_de_Cricimiento_VS_Acciones_de_Valor_hegbcd.mp4',	9, 'https://res.cloudinary.com/efscloud/image/upload/v1636860464/conservative/Acciones/1.%20Conceptos%20Iniciales/3._Acciones_de_Cricimiento_VS_Acciones_de_Valor_aj3sbf.jpg',	2, '0:14:51');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Acciones Nominativas y al Portador', 'https://res.cloudinary.com/efscloud/video/upload/v1636177396/conservative/Acciones/1.%20Conceptos%20Iniciales/4._Acciones_Nominativas_y_al_Portador_vowetp.mp4',	9, 'https://res.cloudinary.com/efscloud/image/upload/v1636860878/conservative/Acciones/1.%20Conceptos%20Iniciales/4._Acciones_Nominativas_y_al_Portador_mkivnt.jpg',	2, '0:14:51');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Análisis Fundamental', 'https://res.cloudinary.com/efscloud/video/upload/v1636177373/conservative/Acciones/1.%20Conceptos%20Iniciales/5._An%C3%A1lisis_Fundamental_yvqc12.mp4',	9, 'https://res.cloudinary.com/efscloud/image/upload/v1636860878/conservative/Acciones/1.%20Conceptos%20Iniciales/5._An%C3%A1lisis_Fundamental_ylpr7n.jpg',	2, '0:14:51');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Introducción a la Bolsa', 'https://res.cloudinary.com/efscloud/video/upload/v1636177493/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/1._Introducci%C3%B3n_a_la_Bolsa_evsaht.mp4',	10, 'https://res.cloudinary.com/efscloud/image/upload/v1636905158/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/1._Introducci%C3%B3n_a_la_Bolsa_misl0b.jpg',	2, '0:14:06');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué es el análisis técnico?', 'https://res.cloudinary.com/efscloud/video/upload/v1636228874/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/2._Qu%C3%A9_es_el_an%C3%A1lisis_t%C3%A9cnico_gecpfw.mp4',	10, 'https://res.cloudinary.com/efscloud/image/upload/v1636905193/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/2._Qu%C3%A9_es_el_an%C3%A1lisis_t%C3%A9cnico_deyhrw.jpg',	2, '0:15:19');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('El cuento del bosque', 'https://res.cloudinary.com/efscloud/video/upload/v1636177490/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/3._El_cuento_del_bosque_r9w5b8.mp4',	10, 'https://res.cloudinary.com/efscloud/image/upload/v1636904844/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/3._El_cuento_del_bosque_qukm9n.jpg',	2, '0:10:18');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Siguiendo la tendencia', 'https://res.cloudinary.com/efscloud/video/upload/v1636177501/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/4._Siguiendo_la_tendencia_i6mhrl.mp4',	10, 'https://res.cloudinary.com/efscloud/image/upload/v1636905574/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/4._Siguiendo_la_tendencia_kk0y69.jpg',	2, '0:14:47');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Soportes y resistencias', 'https://res.cloudinary.com/efscloud/video/upload/v1636228889/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/5._Soportes_y_resistencias_m4z8fy.mp4',	10, 'https://res.cloudinary.com/efscloud/image/upload/v1636904845/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/5._Soportes_y_resistencias_rhfual.jpg',	2, '0:21:49');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Velas, barras y líneas', 'https://res.cloudinary.com/efscloud/video/upload/v1636228842/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/6._Velas_barras_y_l%C3%ADneas_lah2rp.mp4',	10, 'https://res.cloudinary.com/efscloud/image/upload/v1636905313/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/6._Velas_barras_y_l%C3%ADneas_l4km6g.jpg',	3, '0:17:36');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Medias móviles', 'https://res.cloudinary.com/efscloud/video/upload/v1636228836/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/7._Medias_m%C3%B3viles_gtknth.mp4',	10, 'https://res.cloudinary.com/efscloud/image/upload/v1636905313/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/7._Medias_m%C3%B3viles_bkc8u5.jpg',	3, '0:29:09');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Plataformas gráficas', 'https://res.cloudinary.com/efscloud/video/upload/v1636228813/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/8._Plataformas_gr%C3%A1ficas_cb3mkq.mp4',	10, 'https://res.cloudinary.com/efscloud/image/upload/v1636905313/conservative/Acciones/2.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20I/8._Plataformas_gr%C3%A1ficas_vy3jdg.jpg',	3, '0:22:27');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('El momento de iniciar un trade Caro o Barato', 'https://res.cloudinary.com/efscloud/video/upload/v1636179606/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/9._El_momento_de_iniciar_un_trade_Caro_o_Barato_xwv5ao.mp4',	11, 'https://res.cloudinary.com/efscloud/image/upload/v1636907123/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/9._El_momento_de_iniciar_un_trade_Caro_o_Barato_tscyjt.jpg',	2, '0:24:34');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Hombro Cabeza Hombro', 'https://res.cloudinary.com/efscloud/video/upload/v1636179598/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/10._Hombro_Cabeza_Hombro_gb3xlb.mp4',	11, 'https://res.cloudinary.com/efscloud/image/upload/v1636907123/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/10._Hombro_Cabeza_Hombro_bpht1x.jpg',	2, '0:34:28');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Trailing Stops ¿Dónde poner stops en máximos?', 'https://res.cloudinary.com/efscloud/video/upload/v1636179624/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/11._Trailing_Stops_-_D%C3%B3nde_poner_stops_en_m%C3%A1ximos_ifdivj.mp4',	11, 'https://res.cloudinary.com/efscloud/image/upload/v1636907124/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/11._Trailing_Stops_-_D%C3%B3nde_poner_stops_en_m%C3%A1ximos_hyxnma.jpg',	2, '0:22:45');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Qué es shortearse?', 'https://res.cloudinary.com/efscloud/video/upload/v1636179627/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/12._Qu%C3%A9_es_shortearse_y_primeros_pasos_con_un_gr%C3%A1fico_ez3kr9.mp4',	11, 'https://res.cloudinary.com/efscloud/image/upload/v1636907128/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/12._Qu%C3%A9_es_shortearse_y_primeros_pasos_con_un_gr%C3%A1fico_fdqrny.jpg',	2, '0:27:29');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Banderas y banderines', 'https://res.cloudinary.com/efscloud/video/upload/v1636179686/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/13._Banderas_y_Banderines_umnt7o.mp4',	11, 'https://res.cloudinary.com/efscloud/image/upload/v1636907110/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/13._Banderas_y_Banderines_uvlerb.jpg',	3, '0:26:14');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Los retorcesos de Fibonacci', 'https://res.cloudinary.com/efscloud/video/upload/v1636179700/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/14_Los_retrocesos_de_Fibonacci_ase6sv.mp4',	11, 'https://res.cloudinary.com/efscloud/image/upload/v1636907110/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/14_Los_retrocesos_de_Fibonacci_j3p1m7.jpg',	3, '0:36:15');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Extenciones de Fibonacci', 'https://res.cloudinary.com/efscloud/video/upload/v1636179692/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/15._Extensiones_de_Fibonacci_s85wfm.mp4',	11, 'https://res.cloudinary.com/efscloud/image/upload/v1636907110/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/15._Extensiones_de_Fibonacci_l3614j.jpg',	3, '0:26:57');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Condiciones para iniciar una posición', 'https://res.cloudinary.com/efscloud/video/upload/v1636179688/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/16._Condiciones_para_iniciar_una_posici%C3%B3n_zvgvkl.mp4',	11, 'https://res.cloudinary.com/efscloud/image/upload/v1636907177/conservative/Acciones/3.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20II/16._Condiciones_para_iniciar_una_posici%C3%B3n_icyuza.jpg',	3, '0:25:17');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Inicio de un Trade', 'https://res.cloudinary.com/efscloud/video/upload/v1636179765/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/17._Inicio_de_un_trade_en_vivo_wllv55.mp4',	12, 'https://res.cloudinary.com/efscloud/image/upload/v1636907810/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/17._Inicio_de_un_trade_en_vivo_lnf93z.jpg',	2, '0:31:46');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Convergencias de Fibonacci', 'https://res.cloudinary.com/efscloud/video/upload/v1636179762/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/18._Convergencias_de_Fibonacci_pvh2bz.mp4',	12, 'https://res.cloudinary.com/efscloud/image/upload/v1636907808/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/18._Convergencias_de_Fibonacci_kyeh2d.jpg',	2, '0:17:10');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('La tendencia es tu amiga', 'https://res.cloudinary.com/efscloud/video/upload/v1636179768/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/19._La_tendencia_es_tu_amiga_x6xplv.mp4',	12, 'https://res.cloudinary.com/efscloud/image/upload/v1636907897/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/19._La_tendencia_es_tu_amiga_sl9zqb.jpg',	2, '0:44:14');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Stop Loss', 'https://res.cloudinary.com/efscloud/video/upload/v1636179762/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/20.El_stop_loss_zrrwfp.mp4',	12, 'https://res.cloudinary.com/efscloud/image/upload/v1636907809/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/20.El_stop_loss_z7e3wx.jpg',	2, '0:34:03');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Consejos para ser un inversor inteligente', 'https://res.cloudinary.com/efscloud/video/upload/v1636229015/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/21._Consejos_para_ser_un_inversor_inteligente_m1zcog.mp4',	12, 'https://res.cloudinary.com/efscloud/image/upload/v1636907781/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/21._Consejos_para_ser_un_inversor_inteligente_cn7pbc.jpg',	3, '0:34:13');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('¿Cómo elegir acciones para invertir?', 'https://res.cloudinary.com/efscloud/video/upload/v1636229004/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/22._C%C3%B3mo_elegir_acciones_para_invertir_e_iniciar_un_trade_ccuqzs.mp4',	12, 'https://res.cloudinary.com/efscloud/image/upload/v1636907782/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/22._C%C3%B3mo_elegir_acciones_para_invertir_e_iniciar_un_trade_arhj68.jpg',	3, '0:40:25');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Trading Intradiario', 'https://res.cloudinary.com/efscloud/video/upload/v1636229023/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/23._Trading_intradiario_vdn62g.mp4',	12, 'https://res.cloudinary.com/efscloud/image/upload/v1636907791/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/23._Trading_intradiario_tfq1ul.jpg',	3, '0:39:36');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('Comprá en Rojo, Vendé en verde', 'https://res.cloudinary.com/efscloud/video/upload/v1636229029/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/24._COMPR%C3%81_EN_ROJO_VEND%C3%89_EN_VERDE_mczvnb.mp4',	12, 'https://res.cloudinary.com/efscloud/image/upload/v1636907781/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/24._COMPR%C3%81_EN_ROJO_VEND%C3%89_EN_VERDE_qgpibv.jpg',	3, '0:21:53');

insert into public."REELS"(titulo, url, seccion_id, imagen, clasificacion_id, duracion)
VALUES('El momento justo para comprar y vender', 'https://res.cloudinary.com/efscloud/video/upload/v1636229023/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/25._EL_MOMENTO_JUSTO_PARA_COMPRAR_Y_VENDER_ypiziq.mp4',	12, 'https://res.cloudinary.com/efscloud/image/upload/v1636907782/conservative/Acciones/4.%20Introducci%C3%B3n%20a%20la%20Bolsa%20NIVEL%20III/25._EL_MOMENTO_JUSTO_PARA_COMPRAR_Y_VENDER_jket61.jpg',	3, '0:27:47');


