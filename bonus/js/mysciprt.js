console.log('Carosello')

// array di img 
const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

const slideElements = [];

const slidesWrapperEl = document.querySelector('.slides-wrapper');
slidesWrapperEl.innerHTML = ''

let currentIndex = 0



// generare il contenuto dello slider 
for (let i = 0; i < slides.length; i++) {

    const src = slides[i];
    // console.log(src)

    // creo li 
    const li = document.createElement('li');

    // do la classe slide a li 
    li.className = 'slide';

    // assegno alla prima slide la classe active 
    if (i === currentIndex) {
        li.classList.add('active')
    }

    // creo img 
    const img = document.createElement('img');

    // do src alla img 
    img.src = src;
    // console.dir(img)

    // aggancio img a li 
    li.append(img);


    // aggancio li al Wrapper 
    slidesWrapperEl.append(li)

    // push nell array slideElements 
    slideElements.push(li);


}
// console.log(slideElements)


// implementare pulsanti sotto la foto 
const circles = document.querySelector('.circles')
const circleArray = []
circles.innerHTML = ' '

for (let i = 0; i < slides.length; i++) {




    // creo p
    const p = document.createElement('p');

    // do la classe circles__dot a p 
    p.className = 'circles__dot';
    p.classList.add('slide' + i)



    // assegno alla prima p la classe circle__active 
    if (i === currentIndex) {
        p.classList.add('circle__active')
    }








    // aggancio il cricle
    circles.append(p)

    // push nell array di circle
    circleArray.push(p);

    // console.log(circleArray)
    // console.log(circles)


}





// implementare freccia destra 
const nextArrowEl = document.querySelector('.arrow-next');
// console.log(nextArrowEl)


// cambio  active alla slide  destra
nextArrowEl.addEventListener('click', function () {

    let slideAttiva = slideElements[currentIndex];
    let slideSuccessiva = slideElements[currentIndex + 1]
    let circleAttivo = circleArray[currentIndex]
    let circleSuccessivo = circleArray[currentIndex + 1];


    // qui si torna alla prima img quando siamo arrivati alla fine 
    if (currentIndex === 4) {
        slideSuccessiva = slideElements[0];
        slideAttiva.classList.remove('active');
        slideSuccessiva.classList.add('active');
        circleSuccessivo = circleArray[0]
        circleAttivo.classList.remove('circle__active');
        circleSuccessivo.classList.add('circle__active');
        // console.log(currentIndex)
        currentIndex = -1;
        // console.log(currentIndex)

    } else {
        // togliere classe active dalla slide attiva 
        slideAttiva.classList.remove('active');
        slideSuccessiva.classList.add('active');
        circleAttivo.classList.remove('circle__active');
        circleSuccessivo.classList.add('circle__active');
    }
    currentIndex++
    azzeraConteggio()

    // console.log(slideAttiva, 'attiva')
    // console.log(slideSuccessiva, 'successiva')
    // console.log(currentIndex)


})


// implementare freccia sinistra 
const prevArrowEl = document.querySelector('.arrow-prev');
// console.log(prevArrowEl)


// cambio  active alla slide  destra
prevArrowEl.addEventListener('click', function () {

    let slideAttiva = slideElements[currentIndex];
    let slideSuccessiva = slideElements[currentIndex + -1]
    let circleAttivo = circleArray[currentIndex]
    let circleSuccessivo = circleArray[currentIndex + -1];



    // qui si torna alla prima img quando siamo arrivati alla fine 
    if (currentIndex === 0) {
        slideSuccessiva = slideElements[4];
        slideAttiva.classList.remove('active');
        slideSuccessiva.classList.add('active');
        circleSuccessivo = circleArray[4]
        circleAttivo.classList.remove('circle__active');
        circleSuccessivo.classList.add('circle__active');
        currentIndex = 5;


    } else {
        // togliere classe active dalla slide attiva 
        slideAttiva.classList.remove('active');
        slideSuccessiva.classList.add('active');
        circleAttivo.classList.remove('circle__active');
        circleSuccessivo.classList.add('circle__active');
    }
    currentIndex--
    azzeraConteggio()

    console.log(slideAttiva, 'attiva')
    console.log(slideSuccessiva, 'successiva')
    console.log(currentIndex)


})



// bottone 0 
const circle0 = document.querySelector('.slide0')
circle0.addEventListener('click', function () {

    let alternativeIndex = 0
    let slideAttiva = slideElements[currentIndex];
    let slideSuccessiva = slideElements[alternativeIndex]
    let circleAttivo = circleArray[currentIndex]
    let circleSuccessivo = circleArray[alternativeIndex];
    slideAttiva.classList.remove('active');
    slideSuccessiva.classList.add('active');
    circleAttivo.classList.remove('circle__active');
    circleSuccessivo.classList.add('circle__active');
    currentIndex = alternativeIndex;
    azzeraConteggio()
})



// bottone 1 
const circle1 = document.querySelector('.slide1')
circle1.addEventListener('click', function () {

    let alternativeIndex = 1
    let slideAttiva = slideElements[currentIndex];
    let slideSuccessiva = slideElements[alternativeIndex]
    let circleAttivo = circleArray[currentIndex]
    let circleSuccessivo = circleArray[alternativeIndex];
    slideAttiva.classList.remove('active');
    slideSuccessiva.classList.add('active');
    circleAttivo.classList.remove('circle__active');
    circleSuccessivo.classList.add('circle__active');
    currentIndex = alternativeIndex;
    azzeraConteggio()

})


// bottone 2 
const circle2 = document.querySelector('.slide2')
circle2.addEventListener('click', function () {

    let alternativeIndex = 2
    let slideAttiva = slideElements[currentIndex];
    let slideSuccessiva = slideElements[alternativeIndex]
    let circleAttivo = circleArray[currentIndex]
    let circleSuccessivo = circleArray[alternativeIndex];
    slideAttiva.classList.remove('active');
    slideSuccessiva.classList.add('active');
    circleAttivo.classList.remove('circle__active');
    circleSuccessivo.classList.add('circle__active');
    currentIndex = alternativeIndex;
    azzeraConteggio()
})


// bottone 3 
const circle3 = document.querySelector('.slide3')
circle3.addEventListener('click', function () {

    let alternativeIndex = 3
    let slideAttiva = slideElements[currentIndex];
    let slideSuccessiva = slideElements[alternativeIndex]
    let circleAttivo = circleArray[currentIndex]
    let circleSuccessivo = circleArray[alternativeIndex];
    slideAttiva.classList.remove('active');
    slideSuccessiva.classList.add('active');
    circleAttivo.classList.remove('circle__active');
    circleSuccessivo.classList.add('circle__active');
    currentIndex = alternativeIndex;
    azzeraConteggio()
})

// bottone 4 
const circle4 = document.querySelector('.slide4')
circle4.addEventListener('click', function () {

    let alternativeIndex = 4
    let slideAttiva = slideElements[currentIndex];
    let slideSuccessiva = slideElements[alternativeIndex]
    let circleAttivo = circleArray[currentIndex]
    let circleSuccessivo = circleArray[alternativeIndex];
    slideAttiva.classList.remove('active');
    slideSuccessiva.classList.add('active');
    circleAttivo.classList.remove('circle__active');
    circleSuccessivo.classList.add('circle__active');
    currentIndex = alternativeIndex;
    azzeraConteggio()
})



let clock = setInterval(avantiDaSolo, 3000)
function avantiDaSolo() {
    let slideAttiva = slideElements[currentIndex];
    let slideSuccessiva = slideElements[currentIndex + 1]
    let circleAttivo = circleArray[currentIndex]
    let circleSuccessivo = circleArray[currentIndex + 1];


    // qui si torna alla prima img quando siamo arrivati alla fine 
    if (currentIndex === 4) {
        slideSuccessiva = slideElements[0];
        slideAttiva.classList.remove('active');
        slideSuccessiva.classList.add('active');
        circleSuccessivo = circleArray[0]
        circleAttivo.classList.remove('circle__active');
        circleSuccessivo.classList.add('circle__active');
        // console.log(currentIndex)
        currentIndex = -1;
        // console.log(currentIndex)

    } else {
        // togliere classe active dalla slide attiva 
        slideAttiva.classList.remove('active');
        slideSuccessiva.classList.add('active');
        circleAttivo.classList.remove('circle__active');
        circleSuccessivo.classList.add('circle__active');
    }
    currentIndex++
}

function azzeraConteggio() {
    clearInterval(clock);
    clock = setInterval(avantiDaSolo, 3000)
}