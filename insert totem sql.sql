
insert into public.terminal (nome) values ('Terminal Praia Grande');
insert into public.terminal (nome) values ('Terminal Distrito Industrial');
insert into public.terminal (nome) values ('Terminal Cohab-Cohatracterminal');
insert into public.terminal (nome) values ('Terminal São Cristóvão');
insert into public.terminal (nome) values ('Terminal Cohama-Vinhais');

/*SELECT * FROM terminal;*/

/*INSERÇÃO DOS SENTIDOS*/
insert into public.tipo_sentido (descricao) values ('BAIRRO');
insert into public.tipo_sentido (descricao) values ('CENTRO');

/*select * from tipo_sentido;*/

/*INSERÇÃO DAS LINHAS DE ÔNIBUS*/
insert into public.linhas_de_onibus (codigo,nome,caracteristica) values ('A252','Cohama','Vermelho');
insert into public.linhas_de_onibus (codigo,nome,caracteristica) values ('T070','UEMA-IPASE','Amarelo');
insert into public.linhas_de_onibus (codigo,nome,caracteristica) values ('T076','São Raimundo/São Francisco','Amarelo');
insert into public.linhas_de_onibus (codigo,nome,caracteristica) values ('T084','Cohatrac IV','Verde');

/*select * from linhas_de_onibus;*/

/*INSERÇÃO DOS TIPOS DE ITENS DE ITINERÁRIO*/
insert into public.tipo_item_itinerario (descricao) values ('BAIRRO');
insert into public.tipo_item_itinerario (descricao) values ('PONTO TURÍSTICO');
insert into public.tipo_item_itinerario (descricao) values ('HOSPITAL');
insert into public.tipo_item_itinerario (descricao) values ('ESCOLA');
insert into public.tipo_item_itinerario (descricao) values ('SHOPPING CENTER');
insert into public.tipo_item_itinerario (descricao) values ('PRAIA');

/*select * from tipo_item_itinerario;*/

/*INSERÇÃO DOS ITENS DE ITINERÁRIO*/
insert into public.item_de_itinerario (nome) values ('IFMA/Monte Castelo');
insert into public.item_de_itinerario (nome) values ('Escola Adventista/Maranhão Novo');
insert into public.item_de_itinerario (nome) values ('Escola Adventista/Cidade Operária');
insert into public.item_de_itinerario (nome) values ('Educalis/Angelim');

insert into public.item_de_itinerario (nome) values ('Rio Anil Shopping');
insert into public.item_de_itinerario (nome) values ('Pop Center');
insert into public.item_de_itinerario (nome) values ('Pátio Norte');
insert into public.item_de_itinerario (nome) values ('Shopping São Luís');
insert into public.item_de_itinerario (nome) values ('Shopping da Ilha');

insert into public.item_de_itinerario (nome) values ('Hospital São Domingos');
insert into public.item_de_itinerario (nome) values ('Socorrão/Centro');
insert into public.item_de_itinerario (nome) values ('UDI');
insert into public.item_de_itinerario (nome) values ('Natus Lumine');

insert into public.item_de_itinerario (nome) values ('Cohab');
insert into public.item_de_itinerario (nome) values ('Monte Castelo');
insert into public.item_de_itinerario (nome) values ('Centro');
insert into public.item_de_itinerario (nome) values ('Angelim');
insert into public.item_de_itinerario (nome) values ('Cidade Operária');
insert into public.item_de_itinerario (nome) values ('Maranhão Novo');
insert into public.item_de_itinerario (nome) values ('Renascença');
insert into public.item_de_itinerario (nome) values ('João Paulo');

/*select * from item_de_itinerario;*/

/*INSERÇÃO DOS ITINERÁRIOS*/
insert into public.itinerario (fk_idtipo_sentido,ordem,fk_idlinhas,fk_iditem) values (1,1,2,18);
insert into public.itinerario (fk_idtipo_sentido,ordem,fk_idlinhas,fk_iditem) values (1,2,2,14);
insert into public.itinerario (fk_idtipo_sentido,ordem,fk_idlinhas,fk_iditem) values (1,3,2,5);
insert into public.itinerario (fk_idtipo_sentido,ordem,fk_idlinhas,fk_iditem) values (1,4,2,17);
insert into public.itinerario (fk_idtipo_sentido,ordem,fk_idlinhas,fk_iditem) values (1,5,2,19);
insert into public.itinerario (fk_idtipo_sentido,ordem,fk_idlinhas,fk_iditem) values (1,6,2,1);
insert into public.itinerario (fk_idtipo_sentido,ordem,fk_idlinhas,fk_iditem) values (1,7,2,16);
