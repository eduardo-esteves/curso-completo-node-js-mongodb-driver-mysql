
function NoticiasModel(conexao){
  this._conexao = conexao;
}
//Cria a lógica da consulta para o controller noticia.js
NoticiasModel.prototype.getNoticia = function ( callBack ){
  this._conexao.query('SELECT * FROM noticias WHERE id = 2', callBack);
}
//Cria a lógica da consulta para o controller noticias.js
NoticiasModel.prototype.getNoticias = function ( callBack ){
  this._conexao.query('SELECT * FROM noticias', callBack);
}
/**
 * Repare que o modulo do MySql trabalha de forma diferente
 * do modelo tradicional SQL e que no segundo parametro é 
 * esperado um JSON com os valores das variaveis iguais ao
 * da tabela se não, não será inserido e não retornará erro.
*/
NoticiasModel.prototype.salvarNoticia = function( noticia, callBack ){
  console.log(noticia);
  this._conexao.query('insert into noticias set ? ', noticia, callBack);
}

module.exports = function(){
  return NoticiasModel;
}
  