
/*=============================================
=           JS - JQ CODICE SIMON            =
=============================================*/

/* Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati. */

// Generiamo 5 numeri casuali tramite una funzione + ciclo e li inseriamo in un Array

$(function () {

function numeroRandom(min, max) {
    var numero = (Math.floor(Math.random() * max + min));
    // console.log(numero);
    return numero;
} 

var numeriInMemoria = [];

for (i = 0; i < 5; i++) {
    var arrayPc = numeroRandom(0, 100);
    numeriInMemoria.push(arrayPc);
    var risultato = document.getElementById("result");
    risultato.innerHTML = numeriInMemoria;
} 

// console.log(numeriInMemoria);

// Impostiamo dopo 30 secondi i 5 prompt con cui l'utente inserirà i numeri ricordati
var numeriMemorizzati = setTimeout(typePrompt, 30000);
  
   
   var arrayUtente = [];

    function typePrompt() {
        for (i = 0; i < 5; i++) {
            var numeriUtente = (prompt("Inserisci i numeri che ricordi in ordine casuale"));
            arrayUtente.push(numeriUtente);
            return numeriUtente;        
        }
    }

clearTimeout(numeriMemorizzati);

typePrompt(); 

});