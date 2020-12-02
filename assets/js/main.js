
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

    function typePrompt() {
        risultato.style.display = "none";
        
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

    // Confrontiamo i numeri contenuti nel primo array con quelli dentro il secondo 
    // Mostriamo di nuovo i numeri generati dal computer
    function comparison (arrayUno, arrayDue) {
        risultato.style.display = "block";

        var counter = 0;
        var matches = [];
        
        for (i = 0; i < arrayUno.length; i++) {
            for (var e = 0; e < arrayDue.length; e++) {
               if (arrayUno[i] === arrayDue[e]) {
                    matches.push(a[i]);
                    counter = counter + 1;
                    console.log(matches, counter);
                }

           }
        }

        return matches;
    }

    comparison(arrayUtente, arrayPc);

    // Mostriamo a schermo i risultati uguali fra Utente e Pc e il punteggio ottenuto
    var risultatoFinale = document.getElementById("guessed");
    risultatoFinale.innerHTML = comparison();


    
}
    




});