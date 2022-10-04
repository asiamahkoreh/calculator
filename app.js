const screen = document.querySelector('#screen');
const allButtons = document.querySelectorAll('.button');

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value
        screen.innerText += value 
    })
})
function add(a,b) {
    c = a + b;
    return c;
}

function subtract(a,b) {
    s = a - b;
    return s;
}

function mutiply (a, b) {
    m = a * b;
    return m;
}

function divide(a,b) {
    d = a / b;
    return d;
}

function operate() {
    add();
} 

console.log(screen);


mutiply(4,8);
console.log(`mutiplication = ${m}`);

subtract(6,3);
console.log(`subtraction = ${s}`);

add(5, 7);
console.log(`addition = ${c}`);

divide(11,2);
console.log(`division = ${d}`);
