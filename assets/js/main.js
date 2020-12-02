
/*=============================================
=           JS - JQ CODICE SIMON            =
=============================================*/

/* Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati. */




// Generiamo 5 numeri casuali tramite una funzione + ciclo e li inseriamo in un array

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

    /* Impostiamo un timer di 30 secondi dopo il quale i numeri generati dal 
    computer spariranno, ed appariranno in successione i 5 prompt.
    Salviamo i numeri dell'utente in un secondo array. */

    var myClock = setTimeout(typePrompt, 3000);

    function typePrompt() {
        risultato.innerHTML = "";
        var arrayUtente = [];
        
        for (i = 0; i < 5; i++) {
            var numeriUtente = Number((prompt("Inserisci i numeri che ricordi in ordine casuale")));
            arrayUtente.push(numeriUtente);
            var risultatoUtente = document.getElementById("user_result");
            risultatoUtente.innerHTML = arrayUtente;  
        }
        // console.log(arrayUtente);
        return arrayUtente;     
    }






});