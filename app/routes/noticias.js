/* Feito o encapsulamento da função get() do express
para o padrão de exportação do CommonJS para que
na hora em que esse módulo for exportado já executar
essa função de rota get(), sem este padrão de encapsulamento
esse metodo não seria executado e deixaria de responder a 
requisição. */
module.exports = express => {
  express.get('/noticias', (req, resp) => {
    // feito importação do modulo mysql que está dentro de node_modules
    const mysql = require('mysql');
    // Após importamos o driver podemos criar a conexao
    const conexao = mysql.createConnection(
      {
        host: '127.0.0.1',
        user: 'root',
        password: '12345',
        database: 'portal_noticias'
      }
    );
    // Cria um query SQL e a executa
    conexao.query('SELECT * FROM noticias', (error, result) => {
      // resp.send(result);
      resp.render("noticias/noticias", {
        noticias: result
      });
    });

  });
};