const mongoose = require('mongoose');

const factureSchema = mongoose.Schema({
    title : {type : String, required : true},
    content : {type : String, required : true},
    createdAT: {type : String, required : true},
    author : {type : String, required : true}
});

module.exports = mongoose.model('Article', factureSchema);