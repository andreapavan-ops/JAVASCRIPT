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



// --- Altri metodi di console (utili per il debug) ---

// console.warn() stampa un messaggio di avviso (giallo nella console del browser).
// Usato per segnalare situazioni anomale ma non bloccanti.
console.warn(`Ciao, ${nome}! Benvenuto nel corso di JavaScript!`);

// console.error() stampa un messaggio di errore (rosso nella console del browser).
// Usato per segnalare problemi gravi o errori imprevisti.
console.error(`Ciao, ${nome}! Benvenuto nel corso di JavaScript!`);

// console.table() mostra un array (o oggetto) come tabella formattata nella console.
// Ogni elemento dell'array diventa una riga: utile per leggere dati strutturati.
console.table([
    `Ciao, ${nome}! Benvenuto nel corso di JavaScript!`,
    `Ciao, ${nome}! Benvenuto nel corso di JavaScript!`,
    `Ciao, ${nome}! Benvenuto nel corso di JavaScript!`
]);

// console.clear() pulisce la console, rimuovendo tutti i messaggi precedenti.
// Commentato qui per non cancellare l'output degli esempi sopra.
//console.clear();