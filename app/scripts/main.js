var next = document.getElementById('step-next');
var prev = document.getElementById('step-prev');

var elements = document.getElementsByClassName('carousel-container__element');

var i = 0;

function stepNext() {
    i++;
    elements[i].classList.add('display');
    console.log(i);
}