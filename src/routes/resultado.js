var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/registrarResultado", function (req, res) {
    resultadoController.registrarResultado(req, res);
})

router.get("/buscarDadosKPI/:idUsuario", function (req, res) {
    resultadoController.buscarDadosKPI(req, res);
})

router.get("/buscarDadosGrafico/:idUsuario", function (req, res) {
    resultadoController.buscarDadosGrafico(req, res);
})


module.exports = router;