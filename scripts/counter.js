//Make Variable

let counterbuttonAdd1 = document.getElementById("counter-button-add1");
let counterbuttonMinus1 = document.getElementById("counter-button-minus1");
let counterbuttonClear = document.getElementById("counter-button-clear");
let counterbuttonZero = document.getElementById("counter-button-zero");
let counterbuttonOne = document.getElementById("counter-button-one");
let counterbuttonTwo = document.getElementById("counter-button-two");
let counterbuttonThree = document.getElementById("counter-button-three");
let counterbuttonFour = document.getElementById("counter-button-four");
let counterbuttonFive = document.getElementById("counter-button-five");
let counterbuttonSix = document.getElementById("counter-button-six");
let counterbuttonSeven = document.getElementById("counter-button-seven");
let counterbuttonEight = document.getElementById("counter-button-eight");
let counterbuttonNine = document.getElementById("counter-button-nine");
let counterbuttonSixSeven = document.getElementById("counter-button-sixseven");


let counter = document.getElementById("counter");
let number = 0;


//Define Function

function add1() {
    number = number + 1;
    counter.textContent = number;
}

function minus1() {
    number = number - 1;
    counter.textContent = number;
}

function clear() {
    number = 0
    counter.textContent = number
}

function zero(){
    number = 0;
    counter.textContent = number
}

function one(){
    number = 1;
    counter.textContent = number
}

function two(){
    number = 2;
    counter.textContent = number
}

function three(){
    number = 3;
    counter.textContent = number
}

function four(){
    number = 4;
    counter.textContent = number
}

function five(){
    number = 5;
    counter.textContent = number
}

function six(){
    number = 6;
    counter.textContent = number
}

function seven(){
    number = 7;
    counter.textContent = number
}

function eight(){
    number = 8;
    counter.textContent = number
}

function nine(){
    number = 9;
    counter.textContent = number
}

function sixseven(){
    number = 67;
    counter.textContent = number
}


//Define Button Event Listeners

counterbuttonAdd1.addEventListener("click", add1);
counterbuttonMinus1.addEventListener("click", minus1);
counterbuttonClear.addEventListener("click", clear);
counterbuttonZero.addEventListener("click", zero);
counterbuttonOne.addEventListener("click", one);
counterbuttonTwo.addEventListener("click", two);
counterbuttonThree.addEventListener("click", three);
counterbuttonFour.addEventListener("click", four);
counterbuttonFive.addEventListener("click", five);
counterbuttonSix.addEventListener("click", six);
counterbuttonSeven.addEventListener("click", seven);
counterbuttonEight.addEventListener("click", eight);
counterbuttonNine.addEventListener("click", nine);
counterbuttonSixSeven.addEventListener("click", sixseven);