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

for (const voto of voti) {
    somma += voto;
}

const media = somma / voti.length;
console.log(media);

// Versione verbosa
let sommaVerbosa = 0;
const numeroVoti = voti.length;

for (const voto of voti) {
    sommaVerbosa = sommaVerbosa + voto;
}

const mediaVerbosa = sommaVerbosa / numeroVoti;
console.log("La media dei voti è: " + mediaVerbosa);


let massimo = voti[0];

for (const voto of voti) {
    if (voto > massimo) {
        massimo = voto;
    }
}

console.log("Voto massimo: " + massimo);

// Versione verbosa massimo
let massimoVerboso = voti[0];

for (const voto of voti) {
    const votoCorrenteEMaggiore = voto > massimoVerboso;
    if (votoCorrenteEMaggiore === true) {
        massimoVerboso = voto;
    }
}

console.log("Il voto massimo è: " + massimoVerboso);


let minimo = voti[0];

for (const voto of voti) {
    if (voto < minimo) {
        minimo = voto;
    }
}
console.log("Voto minimo: " + minimo);

