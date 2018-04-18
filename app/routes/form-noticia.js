/* Agora o express pode fazer uso do método render() do EJS
organizando melhor os arquivos em um padrão MVC */
module.exports = express => {
  express.get('/form-noticia', (req, resp) => {
    resp.render("admin/form_add_noticia");
  });
}; 