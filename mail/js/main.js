/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */


/* INSERIRE EMAIL */
var mail = parseInt(prompt("Inserisci la tua Mail"));

/* LISTA DI CHI PUò ACCEDERE */
var names = ["Pia", "Tom Hiddleston", "Chris Evans", "IronMan", "Sandro Pertini", "Topolino", "Stalin",];
document.getElementById("demo").innerHTML = names;

/* MESSAGGIO */
var message = ["Benvenuti!"];
document.getElementById("welcome").innerHTML = message;