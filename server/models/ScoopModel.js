var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ScoopSchema = new Schema({

module.exports = mongoose.model('Scoop', ScoopSchema);