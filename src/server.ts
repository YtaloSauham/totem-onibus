import express from 'express';
import pgp from 'pg-promise';

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

app.get('/', async function (request, response){

    
    const connection= pgp()("postgres://postgres:3124@localhost:5432/postgres")
    const itinerario = await connection.query("select * from public.terminal",[]);
    await connection.$pool.end();
    console.log(itinerario);
    response.end();
  

})
app.listen(3000)
console.log("Backend Executando...")