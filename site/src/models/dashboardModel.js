var database = require("../database/config");

function buscarUltimosRegistros(fkDispositivo, componente, limite_linhas) {
  var instrucaoSql = "";
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
    instrucaoSql = `SELECT
        l.captura,
        l.dataHora,
        FORMAT(l.dataHora, 'HH:mm:ss') AS momento_grafico
        FROM log l
        LEFT JOIN componentesDispositivos cd ON l.fkComponenteDispositivo = cd.id
        LEFT JOIN tipoComponente tc ON cd.fktipoComponente = tc.id
        WHERE cd.fkDispositivo = ${fkDispositivo}
        AND tc.nome = '${componente}'
        ORDER BY l.id DESC
        OFFSET 0 ROWS FETCH NEXT ${limite_linhas} ROWS ONLY;`;
  }
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarRegistrosEmTempoReal(fkDispositivo, componente) {
  var instrucaoSql = "";
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
    instrucaoSql = `SELECT
        l.captura,
        l.dataHora,
        FORMAT(l.dataHora, 'HH:mm:ss') AS momento_grafico
        FROM log l
        LEFT JOIN componentesDispositivos cd ON l.fkComponenteDispositivo = cd.id
        LEFT JOIN tipoComponente tc ON cd.fktipoComponente = tc.id
        WHERE cd.fkDispositivo = ${fkDispositivo}
        AND tc.nome = '${componente}'
        ORDER BY l.id DESC
        OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY;`;
  }
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarUltimosRegistros,
  buscarRegistrosEmTempoReal,
};
