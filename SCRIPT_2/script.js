/* ## Esercizio 2 — Pari o dispari (⭐ facile)

Chiedi un numero all'utente e stampa se è pari o dispari.

**Esempio:**

```
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

let numero = prompt("scrivi un numero "  )
numero = parseInt(numero)

if (numero % 2 === 0) {
    console.log(numero + " è pari")
 } else {
    console.log(numero + "è dispari")
 }                                     //X LA CONSOLE


 if (numero % 2 === 0) {
    
    document.getElementById("risultato")
    .textContent = numero + " è pari"
} else {
    
    document.getElementById("risultato")
    .textContent = numero + " è dispari"
}                                   //X LA PAGINA

