var express = require("express");
var router = express.Router();

var dispositivosController = require("../controllers/dispositivosController");

router.post("/configurar_dispositivo", function (req, res){
    dispositivosController.configuracao_dispositivo(req, res);
});

router.put("/configurar_dispositivo/edit/:id", function (req, res){
    dispositivosController.editar_dispositivo(req, res);
});

router.get("/buscarDispositivo/:id", function (req, res){
    dispositivosController.buscarDispositivo(req, res);
});

router.post("/cadastrar_parametro", function (req, res){
    dispositivosController.cadastrar_parametro(req, res);
});

router.post("/cadastrar_parametroAoDispositivo", function (req, res){
    dispositivosController.cadastrarParametroAoDispositivo(req, res);
});

router.put("/ativarDispositivo/activate/:id", function (req, res){
    dispositivosController.ativarDispositivo(req, res);
});

router.get("/buscarDispositivos/:fkEmpresa", function (req, res){
    dispositivosController.buscarDispositivos(req, res);
});

router.get("/buscarNovosDispositivos/:fkEmpresa", function (req, res){
    dispositivosController.buscarDispositivosNovos(req, res);
});
module.exports = router;