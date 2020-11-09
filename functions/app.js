const functions = require('firebase-functions');
const express= require('express');

const app= express();

/* // creo tutto il sistema per usare html come tipo di template
app.engine("html", require('ejs').renderFile)
app.set('views','./views');
app.set('view engine', 'html');
 */

//imposto le rotte statiche nella cartella public per richiamare i template, file js ecc
app.use(express.static('public'));
// creiamo un  middleware ( interprete ) per la gestione delle rotte
app.use(express.json());


// gestisco le rotte richiamando il modulo presente in routers/index.js
var indexRouter= require('./routers/index');
//importo la libreria cat
var qrcodeRouter= require('./routers/qrcode');



// tu esisti tutte le volte che c'è uno slash davanti
app.use('/', indexRouter);


// collego il mio percorso per gestire il CRUD
app.use('/api/qrcode', qrcodeRouter);


/* app.get('/', function(request, response){

    response.set('Cache-Control','public, max-age=300, s-maxage=600');
    response.render('index');
})



 */
exports.app= functions.https.onRequest(app);
