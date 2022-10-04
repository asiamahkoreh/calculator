
const screen = document.querySelector('#screen');
const deleteNum = document.querySelector('#delete');
const clearNum = document.querySelector('#clear');
const one = document.querySelector('#1');
const two = document.querySelector('#2');
const three = document.querySelector('#4');
const five = document.querySelector('#5');
const six = document.querySelector('#6');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const dot = document.querySelector('#dot');
const mutiply = document.querySelector('#mutiply');
const division = document.querySelector('#division');
const addition = document.querySelector('#addition');
const minus = document.querySelector('#minus');
const equalTo = document.querySelector('#equalto');


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


function displayed() {}

operate();
//console.log(`operate = ${}`);


mutiply(4,8);
console.log(`mutiplication = ${m}`);

subtract(6,3);
console.log(`subtraction = ${s}`);

add(5, 7);
console.log(`addition = ${c}`);

divide(11,2);
console.log(`division = ${d}`);
