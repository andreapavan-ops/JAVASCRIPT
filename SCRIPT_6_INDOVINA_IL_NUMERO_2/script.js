const segreto = Math.floor(Math.random() * 100) + 1;

let numeroSegreto = Number(prompt("Indovina il numero segreto - inserisci "))

while (numeroSegreto !== segreto) {

    // scrivi qui i tuoi if / else if / else

    if (numeroSegreto > segreto) {
    console.log("numero troppo alto");
    } else if (numeroSegreto < segreto) {
        console.log("numero troppo basso")

      numeroSegreto = Number(prompt("Riprova - inserisci un nuovo numero "))
}

// scrivi qui cosa succede quando ha indovinato

        console.log("BRAVO! INDOVINATO")}

break









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

