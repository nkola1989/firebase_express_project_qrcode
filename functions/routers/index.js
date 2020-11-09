// richiamo la libreria
var express= require('express');
// creo il sistema per gestire i percorsi
var path= require('path');
// creo il sitema per gestire le rotte
var router = express.Router();


//imposto le rotte statiche nella cartella views per richiamare i file html
router.use(express.static('./views'));

// preparo la gestione del template indirizzando al link :
router.get('/',function(req, res){
res.sendFile(path.resolve( __dirname+ '/../views/index.html'));
});

/* // preparo la gestione del template indirizzando al link :
router.get('/chisono.html',function(req, res){
    res.sendFile(path.resolve( __dirname+ '/../views/chisono.html'));
    }); */
// ogni volta che ricevi la richiesta
/* router.get('/',function(req, res){
res.send('home')
}); */


//esporto il modulo per richiamarlo in app.js 
module.exports= router;

