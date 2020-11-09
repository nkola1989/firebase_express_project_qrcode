//express va installato dentro la cartella functions
// tutorial : https://www.youtube.com/watch?v=LOeioOKUKI8

const functions = require('firebase-functions');
const express = require('express');

const app = express();

//app.set('views', './views');
/* app.set('view engine', 'html'); */
/* app.use(express.staticProvider(__dirname + '/views')); */

app.get('/', (request, response) =>{
    response.set('Cache-Control','public, max-age=300, s-maxage=600');
     response.render('index.html'); 
  // response.send("Hello from Firebase!");
})

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
