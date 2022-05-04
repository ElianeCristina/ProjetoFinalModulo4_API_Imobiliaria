const db = require('../infra/sqliteDb')

const vendasSchemas = `
    CREATE TABLE IF NOT EXISTS "VENDAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TIPO" VARCHAR(64),
    "VALOR" VARCHAR(64),
    "ENDEREÇO" VARCHAR(64),
    "QUARTOS" INT,
    "BANHEIROS" INT,
    "GARAGEM" INT,
    "TAMANHO" VARCHAR(64)
);`;

function criaTabelaVendas () {
    db.run(vendasSchemas, (error) => {
        if (error) console.log('Erro ao criar tabela vendas.');
    })
}

criaTabelaVendas();

db.run(`INSERT INTO VENDAS(ID, TIPO, VALOR, ENDEREÇO, QUARTOS, BANHEIROS, GARAGEM, TAMANHO) VALUES(0, 'CASA', 'R$150000,00', 'RUA MAESTRO LISBOA, 465, FORTALEZA, CE', 2, 1, 1, '48M²')`, (error) => {
    if(error) console.log('Error ao popular tabela vendas.');
})
