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



let nome = prompt("Come ti chiami?");
console.log("Ciao, " + nome);

*/

let nome = prompt("Come ti chiami?");
console.log("Ciao, " + nome);      // scritto NELLA CONSOLE DEL BROWSER (F12)
alert("Ciao, " + nome);            // scritto nel popup
document.write("Ciao, " + nome);   // scritto sulla pagina


// Se metti tutti e tre insieme (come hai ora), li esegue tutti in ordine uno dopo l'altro.




