var dashboardModel = require("../models/dashboardModel");

function buscarUltimosRegistros(req, res) {
    const fkDispositivo = req.params.fkDispositivo;
    const componente = req.params.componente;
    const limite_linhas = 7;
        
    console.log(`Recuperando as ultimas ${limite_linhas} medidas de: ${componente} do dispositivo: ${fkDispositivo}`);
    dashboardModel.buscarUltimosRegistros(fkDispositivo, componente, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos registros***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRegistrosEmTempoReal(req, res) {
    const fkDispositivo = req.params.fkDispositivo;
    const componente = req.params.componente;

    console.log(`Recuperando medidas em tempo real de: ${componente} do dispositivo: ${fkDispositivo}`);
    dashboardModel.buscarRegistrosEmTempoReal(fkDispositivo, componente).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos registros***.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarUltimosRegistros,
    buscarRegistrosEmTempoReal
}