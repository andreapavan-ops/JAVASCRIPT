const voti = [7, 5, 8, 6, 9, 4, 7, 8, 6, 5];

// Media
let somma = 0;
for (const voto of voti) {
    somma += voto;
}
const media = somma / voti.length;
document.getElementById("media").textContent = "Media: " + media;

// Massimo
let massimo = voti[0];
for (const voto of voti) {
    if (voto > massimo) {
        massimo = voto;
    }
}
document.getElementById("massimo").textContent = "Voto massimo: " + massimo;

// Minimo
let minimo = voti[0];
for (const voto of voti) {
    if (voto < minimo) {
        minimo = voto;
    }
}
document.getElementById("minimo").textContent = "Voto minimo: " + minimo;
