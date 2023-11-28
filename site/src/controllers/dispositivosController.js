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
                    "\nHouve um erro ao configurar dispositivo! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function editar_dispositivo(req, res) {
    var nome = req.body.nomeServer;
    var descricao = req.body.descricaoServer;  
    var idDispositivo = req.body.id;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (descricao == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (idDispositivo == undefined) {
        res.status(400).send("Dispositivo não encontrado!"); 
    } else {
        dispositivosModel.editar_dispositivo(nome, descricao, idDispositivo)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao editar dispositivo! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function cadastrar_parametro(req, res) {
    var limiteAlerta = req.body.limiteAlertServer;
    var limiteCritico = req.body.limiteCriticoServer;  
    var componente = req.body.componente;

    dispositivosModel.cadastrar_parametro(limiteAlerta, limiteCritico, componente)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao cadastrar parametro! Erro: ",
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

function buscarDispositivosNovos(req, res) {
    var fkEmpresa = req.params.fkEmpresa;
    console.log(`Buscando Dispositivos Novos...`);
    dispositivosModel.buscarDispositivosNovos(fkEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dispositivos novos***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarDispositivo(req, res) {
    var id = req.params.id
    console.log(`Buscando Dispositivo...`);
    dispositivosModel.buscarDispositivo(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o dispositivo***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrarParametroAoDispositivo(req, res) {
    var dispositivo = req.body.dispositivo;
    var componente = req.body.componente;

    console.log(`Buscando Dispositivo...`);
    dispositivosModel.cadastrar_componenteAoDispositivo(componente, dispositivo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao cadastrar componente e parametro ao dispositivo***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function ativarDispositivo(req, res) {
    var idDispositivo = req.params.id;

    console.log(`Ativando Dispositivo...`);
    dispositivosModel.ativarDispositivo(idDispositivo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao ativar o dispositivo***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    ativarDispositivo,
    cadastrarParametroAoDispositivo,
    buscarDispositivo,
    editar_dispositivo,
    buscarDispositivosNovos,
    configuracao_dispositivo,
    cadastrar_parametro,
    buscarDispositivos
}