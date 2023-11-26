var express = require("express");
var router = express.Router();

var alertaController = require("../controllers/alertaController.js");

router.get("/ultimosParametros/:fkEmpresa", function (req, res) {
    alertaController.buscarParametros(req, res);
});

module.exports = router;