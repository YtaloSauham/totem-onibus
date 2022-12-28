import express from 'express';
import pgp from 'pg-promise';
import Bus from './entities/Bus';
require('dotenv').config()



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

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
});

/*
const pool = new Pool({
    connectionString,
  })

const client = new Client({
    connectionString,
  })
*/
app.use(express.json());

app.get(`/terminal/:id/sentido/:sentido/:local`, async function (request, response){
   
    const terminalId = request.params.id;
    const sentido = request.params.sentido;
    const local = request.params.local;
    const bus = new Bus();
    const busResult = await bus.getByBairroAndLocation({terminalId,local,sentido})
    response.json(busResult);
  

})

app.get(`/terminal/:id/:linha`, async function (request, response){
    const linha= request.params.linha;
    const terminalId= request.params.id;
    const bus = new Bus();
    const busResult = await bus.getLinha({linha,terminalId})
    response.json(busResult);
    
  

})
app.listen(4000)
console.log("Backend Executando...")