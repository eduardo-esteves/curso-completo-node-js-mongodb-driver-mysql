// Exporta o objeto express já executando-a
const express = require('express')();
/**
 * Informando ao módulo Express que agora a engine
 * de views será fornecida pelo módulo EJS sempre
 * que necessitamos configurar um módulo para trabalhar
 * em conjunto com o express, isso se dará pela propriedade set
 */
express.set('view engine', 'ejs');

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
