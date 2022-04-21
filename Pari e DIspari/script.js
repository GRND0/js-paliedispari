let sceltaUtente = prompt("Scegli pari o dispari");
let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
let numeroIa = numeroRandom(6) ;
let isPari 

if (sceltaUtente === "pari") {
    isPari = true ; 
}

console.log(isPari);
console.log(numeroUtente);
console.log(numeroIa);

let somma = numeroUtente + numeroIa;
console.log(somma);

let risultato = evenOdd(somma) ;
console.log(risultato);

if (risultato == isPari) {
    console.log("Vince il giocatore") ;
}
else {
    console.log("Vince il computer");
}

















//FUNZIONI
function numeroRandom(massimo) {
    return Math.floor(Math.random() * massimo);
}

function evenOdd(valore) {
    return (valore % 2 == 0) ; 
}