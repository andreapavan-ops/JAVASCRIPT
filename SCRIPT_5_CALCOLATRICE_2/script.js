function calcola() {
    let primoNumero = Number(document.getElementById("primoNumero").value);
    let secondoNumero = Number(document.getElementById("secondoNumero").value);
    let operazione = document.getElementById("operazione").value;

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
        document.getElementById("risultato").textContent = risultato;
    }
}
