import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) =>{
    return response.json({ message: 'World'})
})
app.listen(3000)
console.log("Backend Executando...")