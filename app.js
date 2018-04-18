const express = require('./config/server.js');

/* 
Importo a rota noticias que tem a lógica para encaminhar
a requisição http para o devido arquivo que vai renderizar
a rota. Note que o arquivo noticias.js tem um objeto express
responsavel por inicializar e tratar as requisições http do
servidor, então na linha 11 executo a função e passo esse
objeto de dependência ao modulo.
*/
const routeNoticias = require('./app/routes/noticias.js');
routeNoticias(express);

const routeHome = require('./app/routes/home.js');
routeHome(express);

const routeformNoticias = require('./app/routes/form-noticia.js');
routeformNoticias(express);

express.listen(4200, () => {
  console.log('Servidor rodando com Express');
});
