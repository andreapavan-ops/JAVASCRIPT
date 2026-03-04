/* 1. Le basi//
Variabili — let, const, var
Tipi di dati — stringhe, numeri, booleani
Operatori — +, -, *, /, ===, !== */

let nome = "Andrea";
let eta = 25;
console.log("Ciao, " + nome + "! Hai " + eta + " anni.");


/* 2. Condizioni e cicli
if / else
for, while*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 3. Funzioni //

function saluta(nome) {
  return "Ciao, " + nome + "!"; 
}

console.log(saluta("Andrea"));


// 4. Array e oggetti //

let frutta = ["mela", "banana", "arancia"];
frutta.forEach(f => console.log(f));


// JavaScript //
let voto = 7;

if (voto >= 9) {
    console.log("Eccellente");
} else if (voto >= 6) {
    console.log("Sufficiente");
} else {
    console.log("Insufficiente");
}

let messaggio = (eta >= 18) ? "Maggiorenne" : "Minorenne";
console.log(messaggio);

let giorno = "domenica";


// for classico
for (let i = 0; i < 5; i++) {
    console.log(i);
}

switch (giorno) {
    case "lunedì":
    case "martedì":
    case "mercoledì":
    case "giovedì":
    case "venerdì":
        console.log("Giorno lavorativo");
        break;                                // ⚠️ break è obbligatorio!
    case "sabato":
    case "domenica":
        console.log("Weekend!");
        break;
    default:
        console.log("Giorno non valido");
}


// while classico
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// for
let frutti = ["mela", "banana", "arancia"];
for (let frutto of frutti) {
    console.log(frutto);
}


function chiediNome() {
    let nomeUtente = prompt("Come ti chiami?");
    console.log(`Ciao ${nomeUtente}! Benvenuto nel corso di JavaScript!`);
}


/*
## Esercizio 2 — Pari o dispari (⭐ facile)
Chiedi un numero all'utente e stampa se è pari o dispari.
**Esempio:**

Input:  7
Output: 7 è dispari

Input:  12
Output: 12 è pari
```

**Suggerimenti:**

- Attenzione: `prompt()` restituisce **sempre una stringa**! Devi convertire a numero con `parseInt()` o `Number()`
- L'operatore modulo `%` funziona esattamente come in Python
- Ricorda: usa `===` per il confronto, non `==`
*/

function pariDispari() {
    let numero = parseInt(prompt("Scrivi un numero?"));
    if (numero % 2 === 0) {
        console.log(numero + " è pari");
    } else {
        console.log(numero + " è dispari");
    }
}




/*
## Esercizio 3 — FizzBuzz (⭐⭐ medio)

Stampa i numeri da 1 a 30 nella console. Ma con queste regole:

- Se il numero è divisibile per **3**, stampa `"Fizz"` al posto del numero
- Se il numero è divisibile per **5**, stampa `"Buzz"` al posto del numero
- Se il numero è divisibile per **entrambi** (3 e 5), stampa `"FizzBuzz"`
- Altrimenti stampa il numero

**Output atteso (prime righe):**

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...
```

**Suggerimenti:**

- Usa un ciclo `for` classico: `for (let i = 1; i <= 30; i++)`
- L'ordine dei controlli conta! Quale condizione devi controllare **per prima**?
- Un numero divisibile sia per 3 che per 5 è divisibile per...?
- Confronta la tua soluzione con quella che avevi scritto in Python: cosa è cambiato nella sostanza? (Spoiler: quasi niente, solo la sintassi!)
*/

function fizzBuzz() {
    let numero = parseInt(prompt("Da che numero positivo iniziamo?"));
    for (let i = 1; i <= numero; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}


/*
## Esercizio 4 — Media dei voti (⭐⭐ medio)

Dato il seguente array di voti, calcola e stampa nella console:

- La **media** dei voti
- Il **voto massimo**
- Il **voto minimo**

```jsx
const voti = [7, 5, 8, 6, 9, 4, 7, 8, 6, 5];
```

**Output atteso:**

```
Media: 6.5
Voto massimo: 9
Voto minimo: 4
```

**Suggerimenti:**

- Usa un ciclo `for...of` per iterare sull'array (è il più simile al `for x in lista` di Python)
- Per la media, accumula la somma e poi dividi per `voti.length` (equivalente di `len(voti)` in Python)
- Inizializza il massimo e il minimo con il primo elemento dell'array `voti[0]`, non con valori arbitrari
- Per il confronto puoi usare un semplice `if` — non servono funzioni speciali
*/


const voti = [7, 5, 8, 6, 9, 4, 7, 8, 6, 5];

let somma = 0;
let massimo = voti[0];
let minimo = voti[0];

for (let voto of voti) {
    somma += voto;
    if (voto > massimo) massimo = voto;
    if (voto < minimo) minimo = voto;
}

console.log("Media: " + somma / voti.length);
console.log("Voto massimo: " + massimo);
console.log("Voto minimo: " + minimo);


/*
## Esercizio 5 — Calcolatrice (⭐⭐ medio)

Chiedi all'utente:

1. Il primo numero
2. Il secondo numero
3. L'operazione da eseguire (`+`, , , `/`)

Poi stampa il risultato. Il programma deve gestire due casi particolari:

- **Divisione per zero** → stampare un messaggio di errore
- **Operazione non valida** → stampare un messaggio di errore

**Esempio:**

```
Input:  10, 3, +
Output: 10 + 3 = 13

Input:  10, 0, /
Output: Errore: divisione per zero!

Input:  10, 3, ^
Output: Operazione "^" non valida!
```

**Suggerimenti:**

- Questo esercizio è perfetto per usare lo `switch` — ogni `case` gestisce un'operazione
- Ricorda che ogni `case` ha bisogno del `break;` alla fine!
- Il caso `default` dello `switch` cattura le operazioni non riconosciute
- Per la divisione, controlla se il secondo numero è `0` **dentro** il case della divisione
- Trucco: dichiara `let risultato;` prima dello switch. Dopo lo switch, stampa il risultato **solo se è definito** (`risultato !== undefined`)

*/

// Usiamo Number() per convertire il testo del prompt in numeri reali
let primoNumero = Number(prompt("Scrivi il primo numero..."));
let secondoNumero = Number(prompt("Scrivi il secondo numero..."));
let operazione = prompt("Scrivi l'operazione che vuoi eseguire (+, -, *, /)...");

let risultato;

if (operazione === "+") {
    risultato = primoNumero + secondoNumero;
    console.log("La somma è: " + risultato);
} else if (operazione === "-") {
    risultato = primoNumero - secondoNumero;
    console.log("La sottrazione è: " + risultato);
}   else if (operazione === "*") {
    risultato = primoNumero * secondoNumero;
    console.log("La moltiplicazione è: " + risultato);
} else if (operazione === "/") {
    if (secondoNumero !== 0) {
        risultato = primoNumero / secondoNumero;
        console.log("La divisione è: " + risultato);
    } else {
        console.log("La divisione di un numero per 0 è impossibile");
    }
} else {
    console.log('Operazione "' + operazione + '" non valida!');
}

/*
## Esercizio 6 — Indovina il numero (⭐⭐⭐ difficile · 20 min)

Crea un gioco dove:

1. Il programma genera un **numero casuale** tra 1 e 100
2. L'utente deve **indovinarlo** inserendo tentativi con `prompt()`
3. Ad ogni tentativo sbagliato, il programma dice se il numero è **troppo alto** o **troppo basso**
4. Quando l'utente indovina, il programma mostra il **numero di tentativi** usati

**Esempio di partita:**

```
Tentativo: 50  →  "Troppo alto!"
Tentativo: 25  →  "Troppo basso!"
Tentativo: 37  →  "Troppo alto!"
Tentativo: 31  →  "Bravo! Hai indovinato in 4 tentativi!"
```

**Suggerimenti:**

- Per generare un numero casuale intero tra 1 e 100:
(`Math.random()` restituisce un decimale tra 0 e 1, `Math.floor()` arrotonda per difetto)
    
    ```jsx
    const segreto = Math.floor(Math.random() * 100) + 1;
    ```
    
- Usa un ciclo `while` che continua finché l'utente non ha indovinato
- Tieni un contatore dei tentativi e incrementalo ad ogni giro con `++`
- Bonus: gestisci il caso in cui l'utente inserisca qualcosa che non è un numero — la funzione `isNaN()` controlla se un valore **non è un numero** (Not a Number)


*/

function indovinaNumero() {
    const segreto = Math.floor(Math.random() * 100) + 1;
    let tentativi = 0;
    let indovinato = false;

    while (!indovinato) {
        let input = prompt("Indovina il numero (tra 1 e 100):");
        let tentativo = parseInt(input);

        if (isNaN(tentativo)) {
            console.log("Inserisci un numero valido!");
            continue;
        }

        tentativi++;

        if (tentativo > segreto) {
            console.log("Troppo alto!");
        } else if (tentativo < segreto) {
            console.log("Troppo basso!");
        } else {
            console.log("Bravo! Hai indovinato in " + tentativi + " tentativi!");
            indovinato = true;
        }
    }
}

indovinaNumero();


/*
## Esercizio 7 — Traduci da Python a JavaScript (⭐⭐⭐ difficile)

Riscrivi il seguente codice Python in JavaScript. Il programma analizza una lista di studenti e li divide in promossi (voto ≥ 6) e bocciati.

```python
studenti = [
    {"nome": "Mario", "voto": 7},
    {"nome": "Luigi", "voto": 5},
    {"nome": "Peach", "voto": 9},
    {"nome": "Toad", "voto": 4},
    {"nome": "Yoshi", "voto": 8}
]

promossi = []
bocciati = []

for studente in studenti:
    if studente["voto"] >= 6:
        promossi.append(studente["nome"])
    else:
        bocciati.append(studente["nome"])

print(f"Promossi: {', '.join(promossi)}")
print(f"Bocciati: {', '.join(bocciati)}")
```

**Output atteso:**

```
Promossi: Mario, Peach, Yoshi
Bocciati: Luigi, Toad
```

**Suggerimenti — tabella di traduzione per questo esercizio:**

| Python | JavaScript |
| --- | --- |
| `studenti = [...]` | `const studenti = [...]` |
| `{"nome": "Mario"}` | `{ nome: "Mario" }` (le chiavi non hanno virgolette!) |
| `[]` | `[]` |
| `for studente in studenti:` | `for (const studente of studenti) { }` |
| `studente["voto"]` | `studente.voto` (dot notation) |
| `lista.append(x)` | `lista.push(x)` |
| `", ".join(lista)` | `lista.join(", ")` |
| `print(f"...")` | `console.log(`...`)` |
- In JavaScript gli oggetti (l'equivalente dei dizionari Python) non richiedono virgolette sulle chiavi, a meno che la chiave contenga spazi o caratteri speciali
- La dot notation (`studente.voto`) è preferita alla bracket notation (`studente["voto"]`) quando il nome della proprietà è fisso e noto

*/

const studenti = [
    { nome: "Mario", voto: 7 },
    { nome: "Luigi", voto: 5 },
    { nome: "Peach", voto: 9 },
    { nome: "Toad",  voto: 4 },
    { nome: "Yoshi", voto: 8 }
];

const promossi = [];
const bocciati = [];

for (const studente of studenti) {
    if (studente.voto >= 6) {
        promossi.push(studente.nome);
    } else {
        bocciati.push(studente.nome);
    }
}

console.log("Promossi: " + promossi.join(", "));
console.log("Bocciati: " + bocciati.join(", "));



/*
## Esercizio Bonus — Analizzatore di testo (⭐⭐⭐ sfida)

Chiedi all'utente di inserire una frase. Il programma deve stampare:

- Il **numero di caratteri** (con e senza spazi)
- Il **numero di parole**
- La **parola più lunga**
- La frase al **contrario** (parola per parola)

**Esempio:**

```
Input: "JavaScript è il linguaggio del web"

Output:
Caratteri (con spazi): 36
Caratteri (senza spazi): 31
Numero di parole: 6
Parola più lunga: "linguaggio" (10 caratteri)
Frase al contrario: "web del linguaggio il è JavaScript"
```

**Suggerimenti:**

- `stringa.length` ti dà la lunghezza
- Per contare i caratteri senza spazi, puoi usare `stringa.replace(/ /g, "")` oppure `stringa.split(" ").join("")`
- `stringa.split(" ")` divide la frase in un array di parole
- Per trovare la parola più lunga, itera sull'array e tieni traccia della più lunga trovata finora
- Per invertire l'ordine delle parole: dividi in array → inverti con `.reverse()` → riunisci con `.join(" ")`

*/

function analizzaTesto() {
    const frase = prompt("Inserisci una frase:");
    const parole = frase.split(" ");

    const conSpazi = frase.length;
    const senzaSpazi = frase.replace(/ /g, "").length;
    const numParole = parole.length;

    let parolaLunga = parole[0];
    for (const parola of parole) {
        if (parola.length > parolaLunga.length) {
            parolaLunga = parola;
        }
    }

    const fraseAlContrario = parole.reverse().join(" ");

    console.log("Caratteri (con spazi): " + conSpazi);
    console.log("Caratteri (senza spazi): " + senzaSpazi);
    console.log("Numero di parole: " + numParole);
    console.log('Parola più lunga: "' + parolaLunga + '" (' + parolaLunga.length + ' caratteri)');
    console.log("Frase al contrario: \"" + fraseAlContrario + '"');
}

analizzaTesto();





// ... puoi continuare con gli altri operatori


// DOM — interagire con la pagina HTML //

document.getElementById("titolo").textContent = "Ciao Mondo!";