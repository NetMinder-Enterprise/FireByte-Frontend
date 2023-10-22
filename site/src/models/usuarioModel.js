var database = require("../database/config")

function cadastrar_dispositivo(bolsas, tipoSangue, validade){
   
    return database.executar(instrucao);
}

module.exports = {
    cadastrar_dispositivo,
};