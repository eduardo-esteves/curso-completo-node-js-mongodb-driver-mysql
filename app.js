const express = require('./config/server.js');

express.get('/', (req, resp) => {
  resp.render('home/index');
}); 
// Agora o express pode fazer uso do método render() do EJS
// organizando melhor os arquivos em um padrão MVC
express.get('/form-noticia', (req, resp) => {
  resp.render("admin/form_add_noticia");
}); 

express.get('/noticias', (req, resp) => {
  resp.render("noticias/noticias");
});

express.listen(4200, () => {
  console.log('Servidor rodando com Express');
});
