var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function registrarResultado(certas, erradas, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarResultado():", certas, erradas, idUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Resultado (fkUsuario,fkQuiz,acertos,erros) VALUES ('${idUsuario}',1,'${certas}','${erradas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosKPI(idUsuario) {
    console.log("ACESSEI O DADOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDadosKPI(): ",idUsuario)
    var instrucaoSql = `SELECT MIN(acertos) as menorPontuacao, COUNT(idResultado) as totalResultado, MAX(acertos) as maiorPontuacao FROM Resultado WHERE fkUsuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosGrafico(idUsuario) {
    console.log("ACESSEI O DADOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDadosKPI(): ",idUsuario)
    var instrucaoSql = `SELECT acertos FROM Resultado WHERE fkUsuario = ${idUsuario} ORDER BY idResultado DESC limit 4;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarResultado,
    buscarDadosKPI,
    buscarDadosGrafico
};