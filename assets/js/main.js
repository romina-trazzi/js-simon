
/*=============================================
=           JS - JQ CODICE SIMON            =
=============================================*/

/* Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati. */

$(function () {
    
    // Generiamo 5 numeri casuali tramite una funzione + ciclo e li inseriamo in un array
    function numeroRandom(min, max) {
        var numero = (Math.floor(Math.random() * max + min));
        // console.log(numero);
        return numero;
    } 

    var arrayPc = [];

    for (i = 0; i < 5; i++) {
        var numeriInMemoria = numeroRandom(0, 100);
        arrayPc.push(numeriInMemoria);
        var risultato = document.getElementById("result");
        risultato.innerHTML = arrayPc;
    } 

    // console.log(arrayPc);

    /* Impostiamo un timer di 30 secondi dopo il quale i numeri generati dal 
    computer spariranno, ed appariranno in successione i 5 prompt.
    Salviamo i numeri dell'utente in un secondo array. */

    var myClock = setTimeout(typePrompt, 3000);

    var arrayUtente = [];

    function typePrompt() {

        risultato.style.display = "none";
        
        for (i = 0; i < 5; i++) {
            var numeriUtente = Number((prompt("Inserisci i numeri che ricordi in ordine casuale")));
            arrayUtente.push(numeriUtente);
            var risultatoUtente = document.getElementById("user_result");
            risultatoUtente.innerHTML = arrayUtente;  
        }
        
        risultato.style.display = "block";

        var qualcosa = comparison(arrayUtente, arrayPc);

        console.log(qualcosa);


        // Mostriamo a schermo i risultati uguali fra Utente e Pc e il punteggio ottenuto
        var risultatoFinale = document.getElementById("guessed");
        risultatoFinale.innerHTML = qualcosa;
        
    }

   

    // Confrontiamo i numeri contenuti nel primo array con quelli dentro il secondo 
    // Mostriamo di nuovo i numeri generati dal computer
    
    function comparison (arrayUno, arrayDue) {
        // console.log(arrayUno);
        // console.log(arrayDue);

        var matches = [];

        for (i = 0; i < arrayUno.length; i++) {
            var userItem = arrayUno[i];

            for (var e = 0; e < arrayDue.length; e++) {
                var pcItem = arrayDue[e];

                if (userItem == pcItem) {
                    matches.push(userItem);
                }
            }
        }

        return matches;
    
    } 
   

    

    
});



    

