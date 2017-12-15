'use strict'


const express = require('express')
const app = express();

app.get('/',function(req,res){
    res.redirect('/login')
})
.get('/login',function(req,res){
    res.json('Login route');
})

app.listen(4000,function(){
    console.log("listen on port", 4000);
})