/* Feito o encapsulamento da função get() do express
para o padrão de exportação do CommonJS para que
na hora em que esse módulo for exportado já executar
essa função de rota get(), sem este padrão de encapsulamento
esse metodo não seria executado e deixaria de responder a 
requisição. */
module.exports = express => {
  express.get('/noticias', (req, resp) => {
    const conexao = express.config.mysqlConnection();
    const noticiasModel = express.app.models.noticiasModel;
    noticiasModel.getNoticias(conexao, (error, result) => {
      // resp.send(result);
      resp.render("noticias/noticias", {
        noticias: result
      });
    })
    console.log(conexao);

  });
};