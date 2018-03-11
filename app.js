// Exporta o objeto express já executando-a
const express = require('express')();

express.get('/', (req, resp) => {
  resp.send("<html><body><p>Noticias de Tecnologia!</p></body></html>");
}); 

express.get('/tecnologia', (req, resp) => {
  resp.send("<html><body><p>Bem vindo a página principal!</p></body></html>");
}); 

express.listen(4200, () => {
  console.log('Servidor rodando com Express');
});
