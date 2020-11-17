/* Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
 */


 /* LISTA DI VALORI COMPRESI DA 1 A 6 PER LE MIE VARIBILI */
 var risultatoPc
 var risultatoUtente 

 /* PROPRIETà MATH RANDOM PER GENERARE NUMERI  */
 risultatoPc = Math.floor((Math.random() * 6) + 1);
 risultatoUtente = Math.floor((Math.random() * 6) + 1);

 alert("Il tuo risultato è: " + risultatoUtente);
 alert("Il risultato del pc è: " + risultatoPc);

 /* RISULTATI OTTENUTI */
 if (risultatoUtente > risultatoPc) {
     alert("Hai vinto!");
 } else if (risultatoUtente < risultatoPc) {
     alert("SFIGATO");
 } else {
     alert ("Pareggio");
 }


