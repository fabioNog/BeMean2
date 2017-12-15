// import { Buffer } from 'buffer';

'use strict'


const express = require('express');
const app = express();


app.get('/',function(req,res){
    // res.send('hello word');

    res.send(new Buffer('Novo Buferr'));;
    res.send(200);
})

app.listen(4000,function(){
    console.log("Escutado na porta 4000");
})