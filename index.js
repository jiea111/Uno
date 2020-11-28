var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.send('Hola mundo como estas?')
})

app.listen(3000, function() {
    console.log('Bien, soy una API ejecutandose en la nube de GOKU 3000')
})