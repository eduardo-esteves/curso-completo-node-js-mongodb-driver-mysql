module.exports = function(){
  //Cria a lógica da consulta para o controller noticias.js
  this.getNoticias = ( conexao, callBack ) => {
    conexao.query('SELECT * FROM noticias', callBack);
  }
  //Cria a lógica da consulta para o controller noticia.js
  this.getNoticia = ( conexao, callBack ) => {
    conexao.query('SELECT * FROM noticias WHERE id = 2', callBack);
  }
  
  return this;
}
  