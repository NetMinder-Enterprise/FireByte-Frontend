var dashboardModel = require("../models/dashboardModel");

//Registros de RAM***
function buscarUltimosRegistros(req, res) {
    const limite_linhas = 7;
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);
    dashboardModel.buscarUltimosRegistros(limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos registros da RAM***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRegistrosEmTempoReal(req, res) {
    console.log(`Recuperando medidas em tempo real`);
    dashboardModel.buscarRegistrosEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos registros da RAM***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

//Registros de REDE***
function buscarUltimosRegistrosRede(req, res) {
    const limite_linhas = 7;
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);
    dashboardModel.buscarUltimosRegistrosRede(limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos registros da REDE***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRegistrosRedeEmTempoReal(req, res) {
    console.log(`Recuperando medidas em tempo real`);
    dashboardModel.buscarRegistrosRedeEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos registros da REDE***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

//Registros de CPU***
function buscarUltimosRegistrosCpu(req, res) {
    const limite_linhas = 7;
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);
    dashboardModel.buscarUltimosRegistrosCpu(limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos registros da CPU***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRegistrosCpuEmTempoReal(req, res) {
    console.log(`Recuperando medidas em tempo real`);
    dashboardModel.buscarRegistrosCpuEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos registros da CPU***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
//Registros de DISCO***
function buscarUltimosRegistrosDisco(req, res) {
    const limite_linhas = 7;
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);
    dashboardModel.buscarUltimosRegistrosDisco(limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos registros da CPU***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRegistrosDiscoEmTempoReal(req, res) {
    console.log(`Recuperando medidas em tempo real`);
    dashboardModel.buscarRegistrosDiscoEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos registros da CPU***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimosRegistros,
    buscarRegistrosEmTempoReal,
    buscarUltimosRegistrosRede,
    buscarRegistrosRedeEmTempoReal,
    buscarUltimosRegistrosCpu,
    buscarRegistrosCpuEmTempoReal,
    buscarUltimosRegistrosDisco,
    buscarRegistrosDiscoEmTempoReal
}