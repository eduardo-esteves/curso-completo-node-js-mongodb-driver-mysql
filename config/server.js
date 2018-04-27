// Exporta o objeto express já executando-a
const express = require('express')();
/**
 * Importo o modulo consign que se encontra em node_modules
 * sem o executar isso será feito após a instancia do modulo
 * express já tiver iniciada com as devidas configurações
*/
const consign = require('consign');
/**
 * Informando ao módulo Express que agora a engine
 * de views será fornecida pelo módulo EJS sempre
 * que necessitamos configurar um módulo para trabalhar
 * em conjunto com o express, isso se dará pela propriedade set
*/
// Feito a importação do modulo de midleware
const bodyParser = require('body-parser');
// Importa o modulo Express Validator como um Midleware
const expressValidator = require('express-validator');

express.set('view engine', 'ejs');

/**
 * Seta a propriedade de views do ejs onde o express
 * apartir de agora vai entender que as views estão
 * no diretorio app/views. Um cuidado deve ser tomado
 * porque este arquivo está sendo exportado em forma de
 * um modulo para o arquivo app.js que está na raiz da
 * aplicação então tenho que passar o diretorio de views
 * como se este arquivo fosse o app.js já que é onde ele
 * está sendo incluso.
 * */
express.set('views', './app/views');

express.use(bodyParser.urlencoded({extended:true}));
express.use(expressValidator());

/**
 * Obs que agora sim eu executo-a e incluo meu diretório
 * onde estarão minhas rotas que quero que seja feito um auto-load
 * e em seguida informo para onde deverá ser usada com o into()
*/ 
consign()
  .include('./app/routes')
  .then('./config/mysqlConnection.js')
  .then('./app/models')
  .into(express);

module.exports = express;