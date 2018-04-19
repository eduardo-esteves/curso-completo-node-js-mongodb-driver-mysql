// feito importação do modulo mysql que está dentro de node_modules
const mysql = require('mysql');
// Após importamos o driver podemos criar a conexao
module.exports = () => {
  const conexao = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: 'root',
      password: '12345',
      database: 'portal_noticias'
    }
  );
  return conexao;
}