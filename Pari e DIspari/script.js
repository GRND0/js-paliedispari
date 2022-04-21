//Dichiarazione variabili e input utente
let numeroUtente = "";
let sceltaUtente = "";
let continua = true;
do {
    sceltaUtente = prompt("Scegli pari o dispari").toLowerCase();
    if (sceltaUtente === "pari" || sceltaUtente === "dispari") {
        continua = false;
    }
}
while (continua);

do {
    numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
}
while (isNaN(numeroUtente) || numeroUtente > 5);
let numeroIa = numeroRandom(6);
let isPari

if (sceltaUtente === "pari") {
    isPari = true;
}
//Calcolo somma 
let somma = numeroUtente + numeroIa;
//Controllo parità
let risultato = evenOdd(somma);

//Output risultato
if (risultato == isPari) {
    console.log("Vince il giocatore");
}
else {
    console.log("Vince il computer");
}


//FUNZIONI
function numeroRandom(massimo) {
    return Math.floor(Math.random() * massimo);
}

function evenOdd(valore) {
    return (valore % 2 == 0);
}

