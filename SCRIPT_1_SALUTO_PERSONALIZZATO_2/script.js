/* 1. Le basi//
## Esercizio 1 — Saluto personalizzato (⭐ facile)

Scrivi un programma che chiede il nome dell'utente con `prompt()` e stampa un saluto nella console.

**Esempio:**

```
Input:  Mario
Output: Ciao Mario! Benvenuto nel corso di JavaScript!
```

**Suggerimenti:**

- `prompt("testo")` funziona come `input("testo")` in Python: mostra una finestra e restituisce ciò che l'utente scrive
- Usa un template literal (con i backtick `` ``) per inserire il nome nel messaggio con `${}`
 */


let nome = prompt ("qual'è il tuo nome " )

// Opzione 1: concatenazione con +
console.log("Ciao, " + nome + " Benvenuto nel corso di JavaScript!");

// Opzione 2: template literal con backtick
console.log(`Ciao, ${nome}! Benvenuto nel corso di JavaScript!`);

// Opzione 3: mostra il saluto nella pagina HTML (dentro l'h1)
document.getElementById("titolo").textContent = `Ciao, ${nome}! Benvenuto nel corso di JavaScript!`;



