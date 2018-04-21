/* Agora o express pode fazer uso do método render() do EJS
organizando melhor os arquivos em um padrão MVC */
module.exports = express => {
  express.get('/form-noticia', (req, resp) => {
    resp.render("admin/form_add_noticia");
  });
  // Adicionado a rota da action do form add
  express.post('/noticias/salvar', (req, resp) => {
    //Quando enviamos dados o express popula a propriedade body do request
    const noticias = req.body;
    resp.send(noticias);
  });
}; 