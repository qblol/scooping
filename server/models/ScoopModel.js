var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ScoopSchema = new Schema({	'title' : String});

module.exports = mongoose.model('Scoop', ScoopSchema);
