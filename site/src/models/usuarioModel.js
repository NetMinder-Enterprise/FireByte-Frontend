var database = require("../database/config")

function entrar(email, senha) {
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrar_funcionario(nome, email, senha, tipo, fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_funcionario():", nome, email, senha, tipo);

    var instrucao = `
    INSERT INTO  firebytedb.usuario (fkNivelAcesso, fkEmpresa, nome, email, senha)
    VALUES (
        (SELECT id FROM NivelAcesso WHERE tipo = '${tipo}'),
        '${fkEmpresa}',
        '${nome}',
        '${email}',
        '${senha}'
    )`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function verificar_email(email) {
    var instrucao = `SELECT * FROM usuario WHERE email = '${email}'`;
    console.log("Executando verificação de e-mail: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar_funcionario,
    verificar_email,
    entrar
};