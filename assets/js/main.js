/* Creare un oggetto che descriva uno studente, con le seguenti proprietà:
nome,
cognome
età. */
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
//Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


/* Creare un oggetto che descriva uno studente, con le seguenti proprietà:
nome,
cognome
età. */

//parto creando un oggetto 

var student = {
    nome: "Davide",
    cognome: "Dalle Carbonare",
    età: 27
}
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
var studentElement;

for (var key in student) {
    console.log(student[key]);
}
//Creare un array di oggetti di studenti.

var classe = [
    {
        nome: "Javier",
        cognome: "Zorro",
        età: 42,
    },
    {
        nome: "Cap",
        cognome: "Rogers",
        età: 78,
    },
    {
        nome: "Tony",
        cognome: "Stark",
        età: 46,
    },
    {
        nome: "Bruce",
        cognome: "Banner",
        età: 38,
    },
    {
        nome: "Peter",
        cognome: "Parker",
        età: 18,
    }
]
console.log(classe);
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
var elementoClasse;
for (var i = 0; i < classe.length; i++){
    elementoClasse = classe[i];
    console.log(elementoClasse.nome + " " + elementoClasse.cognome);
}
console.log(elementoClasse);
/* document.getElementById("otherstudents").innerHTML = elementoClasse["nome"] + " " + elementoClasse["cognome"];
 */
for (chiave in elementoClasse) {
    document.getElementById("otherstudents").innerHTML = elementoClasse["nome"] + " " + elementoClasse["cognome"];

}
//Dare la possibilità all’utente, attraverso 3 prompt(), 
//di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

