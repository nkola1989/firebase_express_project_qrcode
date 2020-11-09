//gestisco tutto quello che riguarda il file system
var fs = require('fs');
// richiamo express
const express = require('express');
// richiamo i percorsi relativi
var path = require('path');

// creo il sitema per gestire le rotte
var router = express.Router();

/* router.get('/',function(req, res){
  res.set('Cache-Control','public, max-age=300, s-maxage=600');
   //res.render('qrcode.html');
    res.sendFile(path.resolve( __dirname+ '/../views/qrcode.html'));
});
 */
// preparo per un select by id
// gestisco i segna posto
// /api/cats/:id
/* router.get('/:id', function(req, res) {
    console.log(req.params.id);
    var cats = require('../data/list_cats.json');
    var cat = cats.find(function(cat) {
      return cat.id == req.params.id;
    });
    res.json(cat);
  });


  // gestisco il delete
  router.delete('/:id', function(req, res) {
    // eseguo un select by id
    var cats = require('../data/list_cats.json');
    cats = cats.filter(function(cat) {
        //ritorno solo i gatti che non sono uguali all'id selezionato
      return cat.id != req.params.id;
    });
  // riscrivo il file json omettendo il gatto selezionato
    fs.writeFile(path.resolve(__dirname + '/../data/list_cats.json'),
     JSON.stringify(cats), function(error) {
      if (!!error) {
        console.log(error);
        res.status(400);
        return;
      }
  
      res.send('ok');
    });
  
  });
  


 // gestisco il update
 router.put('/:id', function(req, res) {
  console.log(req.body);
  // eseguo un select by id
  var cats = require('../data/list_cats.json');
  cats = cats.filter(function(cat) {
      //ritorno solo i gatti che non sono uguali all'id selezionato
    return cat.id != req.params.id;
  });

// gatto aggiornato
  cats.push(req.body);
  
// riscrivo il file json omettendo il gatto selezionato
  fs.writeFile(path.resolve(__dirname + '/../data/list_cats.json'),
   JSON.stringify(cats), function(error) {
    if (!!error) {
      console.log(error);
      res.status(400);
      return;
    }

    res.send('ok');
  });

}); 
 */

//esporto il modulo per richiamarlo in app.js 
module.exports= router;