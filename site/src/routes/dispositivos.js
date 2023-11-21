var express = require("express");
var router = express.Router();

var dispositivosController = require("../controllers/dispositivosController");

router.post("/configurar_dispositivo", function (req, res){
    dispositivosController.configuracao_dispositivo(req, res);
});

router.post("/cadastrar_parametro_cpu", function (req, res){
    dispositivosController.cadastrar_parametro_cpu(req, res);
});

router.post("/cadastrar_parametro_ram", function (req, res){
    dispositivosController.cadastrar_parametro_ram(req, res);
});

router.post("/cadastrar_parametro_disco", function (req, res){
    dispositivosController.cadastrar_parametro_disco(req, res);
});

router.post("/cadastrar_parametro_rede", function (req, res){
    dispositivosController.cadastrar_parametro_rede(req, res);
});

router.get("/buscarDispositivos/:fkEmpresa", function (req, res){
    dispositivosController.buscarDispositivos(req, res);
});

module.exports = router;