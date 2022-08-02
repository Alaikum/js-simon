console.log('Simon')


// Visualizzare in pagina 5 numeri casuali. (con un alert)
// Dopo che l’utente avrà chiuso l’alert(quindi i numeri 
//  non saranno pìu visibili) parte un timer di 30 secondi.
// Alla fine dei 30 secondi l’utente deve inserire,
//  uno alla volta, i numeri che ha visto precedentemente,
//   tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software 
// dice quanti e quali dei numeri da indovinare sono stati
//  individuati.



let num = []
let numeriIndovinati = []
function randomFiveNum(max) {


    while (num.length < 5) {
        const n = getRandomInt(max)
        if (!num.includes(n)) {
            num.push(n)
        }
    }
    return num
}

// funzione crea numeri casuali 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



// console.log(randomFiveNum(100))

alert(randomFiveNum(5))

setTimeout(inserisciNumeri, 30000);


numeriInseriti = []
function inserisciNumeri() {
    for (let i = 1; i <= 5; i++) {
        numeriInseriti.push(prompt('Inserisci il num ' + i))
    }
    for (let i = 0; i < num.length; i++) {
        if (num.includes(parseInt(numeriInseriti[i]))) {
            // console.log(numeriInseriti[i])
            numeriIndovinati.push(numeriInseriti[i])
        }
    }

    if (numeriIndovinati.length === 0) {
        console.log('Non hai indovinato nessun numero')
    } else if (numeriIndovinati.length === 1) {
        console.log('Hai indovinato solo un numero il ' + numeriIndovinati)
    } else {
        console.log('Bravo hai indovinato ' + numeriIndovinati.length + ' numeri, ecco quelli che ti ricordavi ' + numeriIndovinati)

    }
    // console.log(numeriIndovinati)

    return
}


