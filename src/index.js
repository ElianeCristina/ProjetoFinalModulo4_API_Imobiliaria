const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

app.use(express.json());

//importando
const vendas = require('./controller/vendasController');
const db = require('./infra/sqliteDb');

//chamando
vendas(app,db);

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("rodando na port 3000 || TA ON")
})