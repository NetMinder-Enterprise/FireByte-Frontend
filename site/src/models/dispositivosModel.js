var database = require("../database/config")

function configuracao_dispositivo(nome, descricao, fkEmpresa) {
    console.log("ACESSEI O DISPOSITIVOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function configuracao_dispositivo():", fkEmpresa, nome, descricao);

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

function cadastrar_componente(componente, dispositivo) {
    console.log("ACESSEI O DISPOSITIVOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_componente():", componente, dispositivo);
    //Para esta query funcionar precisamos saber qual dispositivo estamos configurando para isso será necessário obter o endereço MAC ou ID da máquina cadastrada.
    var queryCadastroComponente = `
    INSERT INTO  firebytedb.componentesDispositivos (fkTipoComponente, fkDispositivo)
    VALUES ('${componente}','${dispositivo}')`;

    console.log("Executando a instrução SQL: \n" + queryCadastroComponente);
    return database.executar(queryCadastroComponente);
}

function cadastrar_parametro(limiteMin, limiteMax, componente, fkEmpresa) {
    console.log("ACESSEI O DISPOSITIVOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_parametro():", componente, limiteMin, limiteMax);
    var queryCadastroParametro = `
    INSERT INTO firebytedb.parametro (fkEmpresa, limiteMin, limiteMax, fkComponente, metricaParametro)
    VALUES (${fkEmpresa}, ${limiteMin}, ${limiteMax}, (
        SELECT tipoComponente.id
        FROM firebytedb.tipoComponente
        WHERE tipoComponente.nome = '${componente}'
    ), '%')`;
  
    console.log("Executando a instrução SQL: \n" + queryCadastroParametro);
    return database.executar(queryCadastroParametro);
}

module.exports = {
    configuracao_dispositivo,
    cadastrar_componente,
    cadastrar_parametro
};