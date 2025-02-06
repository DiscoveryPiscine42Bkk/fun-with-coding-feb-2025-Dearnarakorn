const inp = document.getElementById('calc-form');

const {
    elements: {
        atext,
        btext,
        opchoice,
        subbtn
    }
} = inp;

const handle = (e) => {
    e.preventDefault();
    const a = parseInt(atext.value);
    const b = parseInt(btext.value);
    try {
        const c = calc(a, b, opchoice.value);
        console.log(c);
        alert(c);
    } catch (error) {
        console.log(error);
        alert(error);
    }
};

const validCalc = (a, b) => {
    if (a < 0 || b < 0) {
        throw 'Error :(';
    } else if (isNaN(a) || isNaN(b)) {
        throw 'Error :(';
    }
};

const validDiv = (b) => {
    if (b === 0) {
        throw "It's over 9000";
    }
};

const calc = (a, b, op) => {
    validCalc(a, b);
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            validDiv(b);
            return a / b;
        case '%':
            validDiv(b);
            return a % b;
        default:
            throw 'Unknown operator';
    }
};

inp.addEventListener('submit', handle);

setInterval(() => {
    alert("Please, use me...");
}, 30000);