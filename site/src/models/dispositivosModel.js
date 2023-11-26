var database = require("../database/config")

function buscarDispositivosNovos(fkEmpresa) {
    console.log("ACESSEI O DISPOSITIVOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect " + 
    "ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> " + 
    "e se o servidor de seu BD está rodando corretamente. \n\n function buscarDispositivosNovos:", fkEmpresa);

    var instrucao = `
    SELECT * FROM dispositivo WHERE fkEmpresa = ${fkEmpresa} AND ativo IS NULL`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function configuracao_dispositivo(nome, descricao, fkEmpresa) {
    console.log("ACESSEI O DISPOSITIVOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect" +  
    "ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >>" +  
    "e se o servidor de seu BD está rodando corretamente. \n\n function configuracao_dispositivo():", fkEmpresa, nome, descricao);

    var instrucao = `
    INSERT INTO  firebytedb.dispositivo (fkEmpresa, titulo, descricao)
    VALUES (
        ${fkEmpresa},
        '${nome}',
        '${descricao}'
    )`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar_dispositivo(nome, descricao, idDispositivo) {
    var instrucao = `
    UPDATE firebytedb.dispositivo SET titulo = '${nome}', descricao = '${descricao}' WHERE id = ${idDispositivo}`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_componenteAoDispositivo(componente, dispositivo, parametro) {
    console.log("ACESSEI O DISPOSITIVOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect" +  
    "ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >>" +  
    "e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_componenteAoDispositivo():", componente, dispositivo, parametro);
    
    var queryCadastroComponente = `
    INSERT INTO firebytedb.componentesDispositivos (fkTipoComponente, fkDispositivo, fkParametro)
    VALUES ((SELECT id FROM tipoComponente WHERE nome = '${componente}'), ${dispositivo}, ${parametro})`;

    console.log("Executando a instrução SQL: \n" + queryCadastroComponente);
    return database.executar(queryCadastroComponente);
}

function cadastrar_parametro(limiteMin, limiteMax, componente) {
    console.log("ACESSEI O DISPOSITIVOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect" + 
    "ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >>" +  
    "e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_parametro():", limiteMin, limiteMax, componente);
    var queryCadastroParametro = `
    INSERT INTO firebytedb.parametro (fkComponente, limiteMin, limiteMax, metricaParametro)
    VALUES ((SELECT id FROM tipoComponente WHERE nome = '${componente}'), ${limiteMin}, ${limiteMax}, '%')`;
  
    console.log("Executando a instrução SQL: \n" + queryCadastroParametro);
    return database.executar(queryCadastroParametro);
}

function buscarTodosDispositivos(fkEmpresa) {
    console.log("ACESSEI O DISPOSITIVOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect" + 
    "ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >>" + 
    "e se o servidor de seu BD está rodando corretamente. \n\n function buscarTodosDispositivos():", fkEmpresa);
    var query = `
    SELECT * FROM dispositivo WHERE fkEmpresa = ${fkEmpresa} AND ativo = 1
    `;
    
    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function buscarDispositivo(idDispositivo) {
    console.log("ACESSEI O DISPOSITIVOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect" + 
    "ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >>" + 
    "e se o servidor de seu BD está rodando corretamente. \n\n function buscarDispositivo():",idDispositivo);
    var query = `
    SELECT * FROM dispositivo WHERE id = ${idDispositivo}
    `;
    
    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function ativarDispositivo(idDispositivo) {
    console.log("ACESSEI O DISPOSITIVOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect" + 
    "ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >>" + 
    "e se o servidor de seu BD está rodando corretamente. \n\n function ativarDispositivo():",idDispositivo);
    var query = `
    UPDATE dispositivo SET ativo = 1, taxaAtualizacao = 2000 WHERE id = ${idDispositivo}
    `;
    
    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

module.exports = {
    ativarDispositivo,
    buscarDispositivo,
    editar_dispositivo,
    buscarDispositivosNovos,
    configuracao_dispositivo,
    cadastrar_componenteAoDispositivo,
    cadastrar_parametro,
    buscarTodosDispositivos
};