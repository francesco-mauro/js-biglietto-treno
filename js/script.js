// alert("Ciao")


// 1. Chiede all'utente il numero di chilometri che vuole percorrere e la sua età

const chilometri = prompt("Quanti chilometri vuoi percorrere?"); //String
const eta = prompt("Quanti anni hai?"); //String
console.log(chilometri, typeof chilometri);
console.log(eta, typeof eta);

// 2. Converte le in numeri i valori "string" inseriti dall'utente

const chilometriNumber = parseInt(chilometri);
const etaNumber = parseInt(eta);
console.log(chilometriNumber, typeof chilometriNumber);
console.log(etaNumber, typeof etaNumber);
