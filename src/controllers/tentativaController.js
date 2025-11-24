var tentativaModel = require("../models/tentativaModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var certas = req.body.certasServer;
    var erradas = req.body.erradasServer;
    var fkQuiz = req.body.quizServer;
    var fkUsuario = req.body.usuarioServer;
    

    // Faça as validações dos valores
    if (certas == undefined) {
        res.status(400).send("As respostas certas está undefined!");
    } else if (erradas == undefined) {
        res.status(400).send("As respostas erradas está undefined!");
    } else if (fkQuiz == undefined) {
        res.status(400).send("A fkQuiz está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("A fkUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, fkQuiz, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}