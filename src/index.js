const express = require('express');
const app = express();

app.use(express.json())

const aluguelController = require('./controllers/aluguel-controller')

aluguelController(app)

app.listen(3000,()=>{
    console.log("rodando na localhost:3000")
})