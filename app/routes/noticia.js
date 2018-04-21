/* Feito o encapsulamento da função get() do express
para o padrão de exportação do CommonJS para que
na hora em que esse módulo for exportado já executar
essa função de rota get(), sem este padrão de encapsulamento
esse metodo não seria executado e deixaria de responder a 
requisição. */
module.exports = express => {
  express.get('/noticia', (req, resp) => {
    const conexao = express.config.mysqlConnection();
    // Importo o modulo que representa o model noticiasModel
    const noticiasModel = express.app.models.noticiasModel;
    console.log(conexao);
    // Cria um query SQL e a executa
    noticiasModel.getNoticia(conexao, (error, result) => {
      // resp.send(result);
      resp.render("noticias/noticia", {
        noticia: result
      });
    });

  });
};