// Exporta o objeto express já executando-a
const express = require('express')();
/**
 * Informando ao módulo Express que agora a engine
 * de views será fornecida pelo módulo EJS sempre
 * que necessitamos configurar um módulo para trabalhar
 * em conjunto com o express, isso se dará pela propriedade set
 */
express.set('view engine', 'ejs');

module.exports = express;