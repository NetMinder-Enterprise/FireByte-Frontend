var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

/*Função para cadastrar os dispositivos*/
function cadastrar_dispositivo(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var bolsas = req.body.qtdBolsaServer;
    var tipoSangue = req.body.tipo_sangueServer;
    var validade = req.body.validadeServer;

    // Faça as validações dos valores
    if (bolsas == undefined) {
        res.status(400).send("Bolsas está undefined!");
    } else if (tipoSangue == undefined) {
        res.status(400).send("Tipo está undefined!");
    } else if (validade == undefined) {
        res.status(400).send("Validade está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar_dispositivo(bolsas, tipoSangue, validade)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



module.exports = {
    testar,
    cadastrar_dispositivo,
}