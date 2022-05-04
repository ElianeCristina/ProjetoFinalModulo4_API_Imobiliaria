/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

//==== Aluguel
const ALUGUEL_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ALUGUEL" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "ENDERECO" varchar(64),
    "VALOR" real,
    "CORRETORID" integer,
    "ALUGUELTIPO" varchar(64),
    "PROPRIETARIOID" integer,
    "INQUILINOID" integer
  );`;

const ADD_ALUGUEL_DATA = `
INSERT INTO ALUGUEL (ID, ENDERECO, VALOR, CORRETORID, ALUGUELTIPO, PROPRIETARIOID, INQUILINOID )
VALUES
    (1, 'AMOROSO COSTA,349',2300, 048, 'CASA', 450, 570),
    (2, 'MANUEL BASTOS,289',700, 049, 'SALA COMERCIAL', 200, 572),
    (3, 'BARATA RIBEIRO,408',3200, 021, 'APARTAMENTO', 500, 300),
    (4, 'GENERAL OSORIO,1500',4000, 020, 'APARTAMENTO', 455, 550),
    (5, 'GENERAL ESPIRITO SANTO CARDOSO,80',1300, 001, 'CASA', 470, 490),
    (6, 'GETULIO VARGAS,400',1600, 004, 'LOFT', 150, 580);
`

function criaTabelaAlg() {
    db.run(ALUGUEL_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de aluguel");
    });
}


function populaTabelaAlg() {
    db.run(ADD_ALUGUEL_DATA, (error) => {
        if (error) console.log(error);
    });
}


db.serialize(() => {
    criaTabelaAlg();
    populaTabelaAlg();
});