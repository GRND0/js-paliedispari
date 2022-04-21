//definizione variabili e input utente
let palindromo = true;
let inputParola = prompt("Inserisci una parola");
//creazione array a partire da stringa inserita dall'utente
let arrayParola = inputParola.split("");
console.log(arrayParola);
//copia e inversione dell'array
let arrayParolaCopia = arrayParola.slice().reverse();
console.log(arrayParolaCopia);
//confronto array
for (i = 0; i < arrayParola.length; i++) {
    if (arrayParola[i] != arrayParolaCopia[i]) {
        palindromo = false
    }
} 
//output
console.log(palindromo);

