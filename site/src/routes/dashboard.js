var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/DashboardController");

router.get("/ultimas/", function (req, res) {
    dashboardController.buscarUltimosRegistros(req, res);
});

router.get("/tempo-real/", function (req, res) {
    dashboardController.buscarRegistrosEmTempoReal(req, res);
})

router.get("/ultimasRede/", function (req, res) {
    dashboardController.buscarUltimosRegistrosRede(req, res);
});

router.get("/tempo-real-rede/", function (req, res) {
    dashboardController.buscarRegistrosRedeEmTempoReal(req, res);
})

router.get("/ultimasCpu/", function (req, res) {
    dashboardController.buscarUltimosRegistrosCpu(req, res);
});

router.get("/tempo-real-cpu/", function (req, res) {
    dashboardController.buscarRegistrosCpuEmTempoReal(req, res);
})

router.get("/ultimasDisco/", function (req, res) {
    dashboardController.buscarUltimosRegistrosDisco(req, res);
});

router.get("/tempo-real-disco/", function (req, res) {
    dashboardController.buscarRegistrosDiscoEmTempoReal(req, res);
})



module.exports = router;