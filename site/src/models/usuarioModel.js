var database = require("../database/config")

function entrar(email, senha) {
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// function pegarInformacoes(idUsuario) {
//     var instrucao = `
//         SELECT * FROM usuario WHERE idUsuario = ${idUsuario};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// function editar(idUsuario, username, email, pais, senha) {
//     var instrucao = `
//         UPDATE usuario SET username = '${username}', email = '${email}', pais = '${pais}', senha = '${senha}' WHERE idUsuario = ${idUsuario};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

module.exports = {
    // pegarInformacoes,
    // editar,
    entrar
};