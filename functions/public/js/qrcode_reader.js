window.addEventListener('load',function(){

  
document.getElementById('btn_scan').addEventListener('click', function(evt){
    startQRCODE();
})
  
});

// funzione che gestisce i permessi alla fotocamera 
function startQRCODE(){
    
  // verifico i permessi alla fotocamera
  Html5Qrcode.getCameras().then(devices => {
    
    //se dopo i permessi esistono fotocamere 
      if (devices && devices.length) {
        //eseguo il filtro prendendo in considerazione solo l'ultima
        var cameraId = devices[devices.length-1].id;
        // creazione e lettura del QRCODE e invio alla pagina web del gioco
       
        // richiamo la parte grafica del lettore e gestisco cosa deve fare
        const html5QrCode = new Html5Qrcode(/* element id */ "reader");
        // metodo start 
        html5QrCode.start(
        //sulla sola fotocamera posteriore presa dopo il controllo
          cameraId , 
          {
              fps: 10,    // Optional frame per seconds for qr code scanning
              qrbox: 250  // Optional if you want bounded box UI
          },
          // quando il lettore individua il qrcode ottengo il contenuto del QR CODE posto dentro come parametro qrCodeMessage
          qrCodeMessage => {
          // interrompo lo scan alla prima lettura per evitare un costante loop di lettura  
          html5QrCode.stop().then(ignore => {
                  // quando ho interrotto apro la pagina del link
                  window.location.href=qrCodeMessage;
              }).catch(err => {
                  // Stop failed, handle it.
                });

          },
          errorMessage => {
              // parse error, ignore it.
          })
          .catch(err => {
          // Start failed, handle it.
          });
       
        

      } // fine if di verifica esistenza fotocamere
      

      // fine permessi di accesso alla fotocamera
    }).catch(err => {
      console.log('permessi negati o fotocamera non trovata '+err);
      alert('Errore:\n1 Browser non supportato\n2 Permessi fotocamera non concessi\n3 Fotocamera assente:\n\n'+err)
      // STAMPARE EVENTUALE AVVISO: es: 'Permessi alla fotocamera fondamentali'
    }); 

}

