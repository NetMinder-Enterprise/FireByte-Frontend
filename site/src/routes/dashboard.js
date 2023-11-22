var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/ultimas/:fkDispositivo/:componente", function (req, res) {
    dashboardController.buscarUltimosRegistros(req, res);
});

router.get("/tempo-real/:fkDispositivo/:componente", function (req, res) {
    dashboardController.buscarRegistrosEmTempoReal(req, res);
})

module.exports = router;