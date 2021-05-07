
//Creare un oggetto che descriva uno studente, con le seguenti proprietà:nome,
// cognome
// età.
var studente = {
    nome: 'Andrea',
    cognome: 'Gavardi' ,
    età: 32,
}

var containerEl = document.querySelector(".container");
var container_2El = document.querySelector(".container2");

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for( var key in studente){
containerEl.insertAdjacentHTML('beforeend', `

        <div> ${key}: ${studente[key]} </div>
`)
}

//Creare un array di oggetti di studenti.

var studenti = [

    {
        nome: 'Maurizio',
        cognome: 'Ferrari' ,
        età: 45,
    },
    {
        nome: 'Anna',
        cognome: 'Buttaufoco' ,
        età: 19,
    },
    {
        nome: 'Mario',
        cognome: 'Rossi' ,
        età: 32,
    },
    {
        nome: 'Beatrice',
        cognome: 'Tonoli' ,
        età: 27,
    },
    {
        nome: 'Leonardo',
        cognome: 'Denti' ,
        età: 24,
    },
];
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var i = 0; i < studenti.length; i++ ){

    var el = studenti[i];
    container_2El.insertAdjacentHTML('beforeend', `

        <div> ${el.nome} ${el.cognome} </div>
`)
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var studenteNuovo = {};

setTimeout(function() {
studenteNuovo.nome = prompt('inserisci il tuo nome');
studenteNuovo.cognome = prompt('inserisci il tuo cognome');
studenteNuovo.età = prompt('inserisci quanti anni hai');

studenti.push(studenteNuovo);

container_2El.insertAdjacentHTML('beforeend', `

    <div class = "new">
     ${studenti[studenti.length - 1].nome} ${studenti[studenti.length - 1].cognome}
    </div>
`)

}, 5000);
