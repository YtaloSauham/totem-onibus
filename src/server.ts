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
    const local = request.body.local;

    const connection= pgp()(`postgres://postgres:postgres://postgres:3124@localhost:5432/postgres`)
    const consultBairroResult = await connection.query(" select item_de_itinerario.nome, tipo_sentido.descricao, tipo_item_itinerario.descricao, terminal_linhas.plataforma,linhas_de_onibus.codigo,linhas_de_onibus.nome,linhas_de_onibus.caracteristica,itinerario.ordem from itinerario inner join linhas_de_onibus on  itinerario.fk_idlinhas= linhas_de_onibus.idlinhas inner join item_de_itinerario on itinerario.fk_iditem = item_de_itinerario.iditem inner join tipo_item_itinerario on item_de_itinerario.fk_idtipo= tipo_item_itinerario.idtipo inner join terminal_linhas on terminal_linhas.fk_idlinhas = linhas_de_onibus.idlinhas inner join tipo_sentido on terminal_linhas.fk_idtipo_sentido = tipo_sentido.idtipo_sentido where tipo_item_itinerario.descricao = $1 and terminal_linhas.fk_idterminal = $2 and item_de_itinerario.nome = $3",[sentido,terminalId,local]);
    await connection.$pool.end();
    
    response.json(consultBairroResult);
  

})

app.get(`/terminal/:id/linha`, async function (request, response){

    const linhaRequest= request.body.linha;
    const terminalId= request.params.id;
    console.log(linhaRequest);
    const connection= pgp()(`postgres://postgres:postgres://postgres:3124@localhost:5432/postgres`)
    const consultLinhaResult = await connection.query(" select item_de_itinerario.nome, tipo_sentido.descricao, tipo_item_itinerario.descricao, terminal_linhas.plataforma,linhas_de_onibus.codigo,linhas_de_onibus.nome,linhas_de_onibus.caracteristica,itinerario.ordem from itinerario inner join linhas_de_onibus on  itinerario.fk_idlinhas= linhas_de_onibus.idlinhas inner join item_de_itinerario on itinerario.fk_iditem = item_de_itinerario.iditem inner join tipo_item_itinerario on item_de_itinerario.fk_idtipo= tipo_item_itinerario.idtipo inner join terminal_linhas on terminal_linhas.fk_idlinhas = linhas_de_onibus.idlinhas inner join tipo_sentido on terminal_linhas.fk_idtipo_sentido = tipo_sentido.idtipo_sentido where linhas_de_onibus.codigo =  $1 and terminal_linhas.fk_idterminal = $2",[linhaRequest,terminalId]);
    await connection.$pool.end();
    console.log(consultLinhaResult)
    response.json(consultLinhaResult);
  

})
app.listen(3010)
console.log("Backend Executando...")