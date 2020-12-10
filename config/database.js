const mongoose = require('mongoose')
const server = require('./server')
module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é menor que o limite mínimo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é valido para o atributo '{PATH}'."