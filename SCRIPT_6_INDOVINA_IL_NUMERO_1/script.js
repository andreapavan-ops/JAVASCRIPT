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


const segreto = Math.floor(Math.random() * 100) + 1;

console.log(segreto)

let numeroSegreto = Number(prompt("Indovina il numero segreto - inserisci "))

function risultato () {
    if (numeroSegreto > segreto)
    console.log("numero troppo alto");
        else if (numeroSegreto < segreto)
        console.log("numero troppo basso")
        else
        console.log("BRAVO! INDOVINATO")}

        risultato()


    