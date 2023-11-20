var database = require("../database/config")

function entrar(email, senha) {
    var instrucao = `
    SELECT tipo, email, nome, fkempresa, usuario.id FROM usuario inner join nivelAcesso on usuario.fkNivelAcesso = nivelAcesso.id
    WHERE email = '${email}' and senha = '${senha}';
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

function configuracao_dispo(nome, descricao, fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_funcionario():", fkEmpresa, nome, descricao);

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

function delete_dispositivo(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_funcionario():", id);

    var deleteDispo = `
    UPDATE firebytedb.dispositivo SET status = 0 where id = ${id}`;

    console.log("Executando a instrução SQL: \n" + deleteDispo);
    return database.executar(deleteDispo);
}


function salvar(idUsuario, imagem) {
    const instrucao = 
    `UPDATE firebytedb.usuario SET imagem_perfil = '${imagem}' where id = ${idUsuario}`;
   
    return database.executar(instrucao);
  }
  

  function ver_imagem(idUsuario){
    var instrucao = `
    SELECT imagem_perfil FROM usuario WHERE id = ${idUsuario};
    `;

    return database.executar(instrucao);
}


module.exports = {
    cadastrar_funcionario,
    verificar_email,
    entrar,
    configuracao_dispo,
    delete_dispositivo,
    salvar,
    ver_imagem
};