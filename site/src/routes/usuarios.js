var express = require("express");
var router = express.Router();
const upload = require('./configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
var usuarioController = require("../controllers/usuarioController");

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/cadastrar_funcionario", function (req, res) {
    usuarioController.cadastrar_funcionario(req, res);
});

router.post("/verificar_email", function (req, res) {
    usuarioController.verificar_email(req, res);
});

router.post("/configuracao_dispo", function (req, res) {
    usuarioController.configuracao_dispo(req, res);
});

router.put("/delete_dispositivo/:id", function (req, res) {
    usuarioController.delete_dispositivo(req, res);
});

router.put('/cadastro/:idUsuario', upload.single('foto'), (req, res) => {
    usuarioController.salvar(req, res);
});


router.get("/ver_imagem/:idUsuario", function (req, res) {
    usuarioController.ver_imagem(req, res);
});
module.exports = router;