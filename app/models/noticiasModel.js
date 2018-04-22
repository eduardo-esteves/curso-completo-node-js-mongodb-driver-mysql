module.exports = function(){
  //Cria a lógica da consulta para o controller noticias.js
  this.getNoticias = ( conexao, callBack ) => {
    conexao.query('SELECT * FROM noticias', callBack);
  }
  //Cria a lógica da consulta para o controller noticia.js
  this.getNoticia = ( conexao, callBack ) => {
    conexao.query('SELECT * FROM noticias WHERE id = 2', callBack);
  }
  /**
   * Repare que o modulo do MySql trabalha de forma diferente
   * do modelo tradicional SQL e que no segundo parametro é 
   * esperado um JSON com os valores das variaveis iguais ao
   * da tabela se não, não será inserido e não retornará erro.
  */
  this.salvarNoticia = ( noticia, conexao, callBack ) => {
    conexao.query('insert into noticias set ? ', noticia, callBack);
  }
  
  return this;
}
  