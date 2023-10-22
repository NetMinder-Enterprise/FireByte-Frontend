var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar_dispositivo", function (req, res){
    usuarioController.cadastrar_dispositivo(req, res);
});