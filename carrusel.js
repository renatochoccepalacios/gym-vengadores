const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

let operacion = 0;
let counter = 0;
let widthImg = 100 / sliderSection.length; // slider-section la cantidad de imagenes q tenemos

function moveToRight() {

    console.log(counter)
    // si el contador es mayor  o igual a la longitud de slidersection
    if (counter >= sliderSection.length - 1) {
        operacion = 0;
        counter = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        return;
    }
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = 'all ease .6s';
}

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderSection.length - 1;
        operacion = widthImg * (sliderSection.length - 1);
        slider.style.transform = `translate(-${operacion}%)`;
        return;
    }
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = 'all ease .6s';
}