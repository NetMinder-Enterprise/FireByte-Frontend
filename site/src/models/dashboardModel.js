var database = require("../database/config");

function buscarUltimosRegistros(fkDispositivo, componente, limite_linhas ) {
    instrucaoSql = ''
    // na query a seguir a clausúla 'where fkDispositivo = 3' pode ser o valor do endereço MAC e adicione uma variavel para isto no paramêtro
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select
        l.captura,
        l.dataHora, 
        DATE_FORMAT(l.dataHora,'%H:%i:%s') as momento_grafico
        from log l
        LEFT JOIN componentesDispositivos cd 
        ON l.fkComponenteDispositivo = cd.id
        LEFT JOIN tipoComponente tc
        ON cd.fktipoComponente = tc.id
        where cd.fkDispositivo = ${fkDispositivo}
        AND tc.nome COLLATE utf8mb4_general_ci = '${componente}'
        order by l.id desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRegistrosEmTempoReal(fkDispositivo, componente) {
    instrucaoSql = ''
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select
                        l.captura, 
                        l.dataHora,
                        DATE_FORMAT(l.dataHora,'%H:%i:%s') as momento_grafico
                        from log l
                        LEFT JOIN componentesDispositivos cd 
                        ON l.fkComponenteDispositivo = cd.id
                        LEFT JOIN tipoComponente tc
                        ON cd.fktipoComponente = tc.id
                        where cd.fkDispositivo = ${fkDispositivo}
                        AND tc.nome COLLATE utf8mb4_general_ci = '${componente}'
                        order by l.id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimosRegistros,
    buscarRegistrosEmTempoReal
}