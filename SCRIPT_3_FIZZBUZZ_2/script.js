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

// VERSIONE 2 — Output nella pagina HTML
// - Il numero di cicli è dinamico: l'utente lo sceglie tramite prompt()
// - L'output viene scritto nel <div id="output"> della pagina
// - output.innerHTML = "" svuota il div prima di ogni nuova esecuzione
// - fizzBuzz() viene chiamata solo quando l'utente clicca il bottone

function fizzBuzz() {
    let numero = parseInt(prompt("Da che numero positivo iniziamo?"));
    let output = document.getElementById("output");
    output.innerHTML = "";

    for (let i = 1; i <= numero; i++) {
        let testo;
        if (i % 3 === 0 && i % 5 === 0) {
            testo = "FizzBuzz";
        } else if (i % 3 === 0) {
            testo = "Fizz";
        } else if (i % 5 === 0) {
            testo = "Buzz";
        } else {
            testo = i;
        }
        output.innerHTML += testo + "<br>";
    }
}


