/* Agora o express pode fazer uso do método render() do EJS
organizando melhor os arquivos em um padrão MVC */
module.exports = express => {
  express.get('/form-noticia', (req, resp) => {
    resp.render("admin/form_add_noticia");
  });
  // Adicionado a rota da action do form add
  express.post('/noticias/salvar', (req, resp) => {
    //Quando enviamos dados o express popula a propriedade body do request
    const noticia = req.body;
    //resp.send(noticia);
    req.checkBody('titulo', 'Titulo é obrigatório').notEmpty();
    req.checkBody('resumo', 'Resumo é obrigatório e deve ter entre 10 ou 100 caracteres').len(10,100);
    req.checkBody('autor', 'Autor é obrigatório').notEmpty();
    //req.checkBody('data_noticia', 'Data é obrigatório').notEmpty().isDate({format:'YYYY-MM-DD'});
    req.checkBody('noticia', 'Noticia é obrigatório').notEmpty();
    
    const erros = req.validationErrors();

    if(erros){
      resp.render('admin/form_add_noticia');
      return;
    }

    const conexao = express.config.mysqlConnection();
    const noticiasModel = new express.app.models.noticiasModel(conexao);
    noticiasModel.salvarNoticia(noticia, (error, result) => {
      // resp.send(result);
      resp.redirect("/noticias");
    });
  }); 
}; 