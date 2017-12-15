const mongoose = require('mongoose')
const Schema =  mongoose.Schema;

const _schema = {
name : String ,
description: String,
creat_at: {type: Date,default: Date.now}
}

const BD = new Schema(_schema);

const data = {name: 'Taurus',description: 'Power'}

const Model = mongoose.model('SchemaCollection',BD);

const bd = new Model(data);

bd.save(function(err,data){
    if(err) return console.log('ERRO',err)

    console.log('Inseriu',data)
})

module.exports = BD;
