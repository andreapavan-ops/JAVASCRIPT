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

// VERSIONE 1 — Output solo in console
// - Il numero di cicli è fisso: da 1 a 30
// - L'output appare nella console del browser (F12), non nella pagina
// - fizzBuzz() viene chiamata automaticamente al caricamento della pagina
function fizzBuzz() {
    for (let i = 1; i <= 30; i++) {
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

fizzBuzz();
