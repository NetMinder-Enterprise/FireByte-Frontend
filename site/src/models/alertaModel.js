var database = require("../database/config");

function buscarParametros(fkEmpresa) {
    instrucaoSql = ''
    // na query a seguir a clausúla 'where fkDispositivo = 3' pode ser o valor do endereço MAC e adicione uma variavel para isto no paramêtro
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT * FROM parametro p
        LEFT JOIN componentesDispositivos cd
        ON p.id = cd.fkParametro
        LEFT JOIN dispositivo d 
        ON cd.fkDispositivo = d.id
        WHERE fkEmpresa = ${fkEmpresa}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarParametros
}