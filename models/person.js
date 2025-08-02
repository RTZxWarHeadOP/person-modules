const mongoose = require('mongoose');
const personschema = new mongoose.Schema({
    name :{
        type: String,
    },
    age:{
        type:Number
    },
    hign:{
        type:String,
        enum:['shikhar','suhani','ronit','lavanya'],
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    }
});
const Person = mongoose.model('Person',personschema);
module.exports = Person;