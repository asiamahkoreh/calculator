const screen = document.querySelector('#screen');
const allButtons = document.querySelectorAll('.button');
//const operators = ['*', '/', '-', '+']

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value

        
        if (value === '=') {
            if (screen.innerText.includes('/')) {
                const splitStuff = screen.innerText.split('/')
                operate('/', splitStuff[0], splitStuff[1])
            }
            if (screen.innerText.includes('+')) {
                const splitStuff = screen.innerText.split('+')
                operate('+', splitStuff[0], splitStuff[1])
            }
            if (screen.innerText.includes('-')) {
                const splitStuff = screen.innerText.split('-')
                operate('-', splitStuff[0], splitStuff[1])
            }
            if (screen.innerText.includes('*')) {
                const splitStuff = screen.innerText.split('*')
                operate('*', splitStuff[0], splitStuff[1])
            }
        }
         
        screen.innerText += value

        if (value === 'clear') {
            screen.innerText = ''
        }
    })
})

const operate = (operator, value1, value2) => {
    const num1 = Number(value1)
    const num2 = Number(value2)


    if (operator === '/') {
        screen.innerText = num1 / num2
    }

    if (operator === '-') {
        screen.innerText = num1 - num2
    }

    if (operator === '+') {
        screen.innerText = num1 + num2
    }

    if (operator === '*') {
        screen.innerText = num1 * num2
    }
}











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

console.log(screen);


mutiply(4,8);
console.log(`mutiplication = ${m}`);

subtract(6,3);
console.log(`subtraction = ${s}`);

add(5, 7);
console.log(`addition = ${c}`);

divide(11,2);
console.log(`division = ${d}`);
