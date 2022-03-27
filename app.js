var express = require('express') //Importamos express
var app = express(); //declaramos una app de express
var port = process.env.PORT || 3000; //declaramos el puerto del servidor
app.use('assets', express.static(__dirname + '/public')); // mapeo de la carpeta virtual
//primera ruta, a nivel de raiz
app.use('/', function(req,res,next){
    console.log('Request URL' + req.url);
    next();
});
app.get('/', function(req,res){
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet/></head>
    <body><h1>Hello world!</h1></body></html>`); 
});
//segunda ruta, JSON
app.get('/api', function(req,res){
    res.json({firstname: 'Jhon', lastname: 'Snow'});
});
//tercera ruta, parametros
app.get('/person/:id', function(req,res){
    res.send('<html><head></head><body><h1>Person: '+ req.params.id +'</h1></body></html>');
});

app.listen(port); //levantar server y ponerlo a la espera.