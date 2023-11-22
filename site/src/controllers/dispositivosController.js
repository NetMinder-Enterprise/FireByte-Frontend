var dispositivosModel = require("../models/dispositivosModel");

function configuracao_dispositivo(req, res) {
    var nome = req.body.nomeServer;
    var descricao = req.body.descricaoServer;  
    var fkEmpresa = req.body.fkEmpresaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");s
    } else if (descricao == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("Sua empresa está undefined!"); 
    } else {
        dispositivosModel.configuracao_dispositivo(nome, descricao, fkEmpresa)
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

function cadastrar_parametro_cpu(req, res) {
    var limiteAlerta = req.body.limiteAlertServer;
    var limiteCritico = req.body.limiteCriticoServer;  
    var componente = req.body.componenteServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    dispositivosModel.cadastrar_parametro(limiteAlerta, limiteCritico, componente, fkEmpresa)
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

function cadastrar_parametro_ram(req, res) {
    var limiteAlerta = req.body.limiteAlertServer;
    var limiteCritico = req.body.limiteCriticoServer;  
    var componente = req.body.componenteServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    dispositivosModel.cadastrar_parametro(limiteAlerta, limiteCritico, componente, fkEmpresa)
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

function cadastrar_parametro_disco(req, res) {

    var limiteAlerta = req.body.limiteAlertServer;
    var limiteCritico = req.body.limiteCriticoServer;  
    var componente = req.body.componenteServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    dispositivosModel.cadastrar_parametro(limiteAlerta, limiteCritico, componente, fkEmpresa)
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

function cadastrar_parametro_rede(req, res) {
    var limiteAlerta = req.body.limiteAlertServer;
    var limiteCritico = req.body.limiteCriticoServer;  
    var componente = req.body.componenteServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    dispositivosModel.cadastrar_parametro(limiteAlerta, limiteCritico, componente,fkEmpresa)
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

function buscarDispositivos(req, res) {
    var fkEmpresa = req.params.fkEmpresa;
    console.log(`Buscando Dispositivos...`);
    dispositivosModel.buscarTodosDispositivos(fkEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dispositivos***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    configuracao_dispositivo,
    cadastrar_parametro_cpu,
    cadastrar_parametro_ram,
    cadastrar_parametro_disco,
    cadastrar_parametro_rede,
    buscarDispositivos
}