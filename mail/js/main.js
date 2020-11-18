/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */


/* INSERIRE EMAIL */
var mail = prompt("inserisci la tua mail?")
console.log(mail);

/* LISTA DI CHI PUò ACCEDERE */
var names = ["Pia@gmail.com", "TomHiddleston@gmail.com", "ChrisEvans@gmail.com", "IronMan@gmail.com", "Sandro Pertini@gmail.com", "Topolino@gmail.com", "Stalin@gmail.com",];
document.getElementById("demo").innerHTML = names;

var mailTrovata = false; 

/* VERIFICARE I NOMI */
for (var i = 0; i < names.length; i++) {
    var mail = names[i];

    if (mail === names){
        mailTrovata = false;
    }
} 
/* VERIFICARE MAIL */
if (mailTrovata){
    console.log("entra pure");
} else{
    console.log("non puoi entrare");
}

/* MESSAGGIO */
var message = ["Benvenuti!"];
document.getElementById("welcome").innerHTML = message;