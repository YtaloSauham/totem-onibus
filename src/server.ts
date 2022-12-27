import express from 'express';
import pgp from 'pg-promise';
require('dotenv')
/*

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '3124',
    port:5432,
})
*/


const app = express();

/*
const pool = new Pool({
    connectionString,
  })

const client = new Client({
    connectionString,
  })
*/
app.use(express.json());

app.get(`/terminal/:id/sentido`, async function (request, response){

    const terminalId = request.params.id;
    const sentido = request.body.sentido;
    const localParams = request.body.local;
    console.log(sentido,localParams);
    const connection= pgp()(`postgres://postgres:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_USER}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DATA}`)
    const terminal = await connection.query(" select item_de_itinerario.nome, tipo_item_itinerario.descricao, terminal_linhas.plataforma,linhas_de_onibus.codigo,linhas_de_onibus.nome,linhas_de_onibus.caracteristica,itinerario.ordem from itinerario inner join linhas_de_onibus on  itinerario.fk_idlinhas= linhas_de_onibus.idlinhas inner join item_de_itinerario on itinerario.fk_iditem = item_de_itinerario.iditem inner join tipo_item_itinerario on item_de_itinerario.fk_idtipo= tipo_item_itinerario.idtipo inner join terminal_linhas on terminal_linhas.fk_idlinhas = linhas_de_onibus.idlinhas where tipo_item_itinerario.descricao = $1 and terminal_linhas.fk_idterminal = $2 and item_de_itinerario.nome = $3",[sentido,terminalId,localParams]);
    await connection.$pool.end();
    console.log(terminal)
    response.json(terminal);
  

})

app.get(`/terminal/:id/linha`, async function (request, response){

    const linhaRequest= request.body.linha;
    const terminalId= request.params.id;
    console.log(linhaRequest);
    const connection= pgp()(`postgres://postgres:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_USER}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DATA}`)
    const terminal = await connection.query(" select item_de_itinerario.nome, tipo_item_itinerario.descricao, terminal_linhas.plataforma,linhas_de_onibus.codigo,linhas_de_onibus.nome,linhas_de_onibus.caracteristica,itinerario.ordem from itinerario inner join linhas_de_onibus on  itinerario.fk_idlinhas= linhas_de_onibus.idlinhas inner join item_de_itinerario on itinerario.fk_iditem = item_de_itinerario.iditem inner join tipo_item_itinerario on item_de_itinerario.fk_idtipo= tipo_item_itinerario.idtipo inner join terminal_linhas on terminal_linhas.fk_idlinhas = linhas_de_onibus.idlinhas where linhas_de_onibus.codigo =  $1 and terminal_linhas.fk_idterminal = $2",[linhaRequest,terminalId]);
    await connection.$pool.end();
    console.log(terminal)
    response.json(terminal);
  

})
app.listen(3000)
console.log("Backend Executando...")