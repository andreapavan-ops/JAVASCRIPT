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



// 5. DOM — interagire con la pagina HTML //

document.getElementById("titolo").textContent = "Ciao Mondo!";