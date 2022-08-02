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



function randomFiveNum(max) {
    let num = []


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

alert(randomFiveNum(100))


setTimeout(inserisciNumeri, 3000);

function inserisciNumeri() {
    numeriInseriti = []
    for (let i = 1; i <= 5; i++) {
        numeriInseriti.push(prompt('Inserisci il num ' + i))
    }

    return numeriInseriti
}

