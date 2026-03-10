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

let primoNumero = Number(prompt("dammi il primo numero"))
let secondoNumero = Number(prompt("dammi il secondo numero"))

let operazione = prompt ("che operazione vuoi fare (+,-,*,/) " )

let risultato;

switch (operazione) {
    case "+":
        risultato = primoNumero + secondoNumero;
        break;
    case "-":
        risultato = primoNumero - secondoNumero;
        break;
    case "*":
        risultato = primoNumero * secondoNumero;
        break;
    case "/":
        if (secondoNumero === 0) {
            risultato = "Errore! impossibile dividere per zero";
        } else {
            risultato = primoNumero / secondoNumero;
        }
        break;
    default:
        risultato = `Operazione "${operazione}" non valida!`;
}

if (risultato !== undefined) {
    console.log(risultato);
}

/*
Il default è il caso "tutto il resto" dello switch — viene eseguito quando nessun case corrisponde.
Esempio:

switch (operazione) {
    case "+":  // se operazione è "+"
    case "-":  // se operazione è "-"
    case "*":  // se operazione è "*"
    case "/":  // se operazione è "/"
    default:   // se operazione è qualsiasi altra cosa (es. "^", "ciao", "abc"...)
}
Quindi se l'utente scrive ^, nessun case corrisponde → entra nel default → stampa Operazione "^" non valida!
*/