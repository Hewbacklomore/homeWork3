'use strict';


// Task

const askUser = prompt("What do u want to do? Write 'add','sub', 'mult', 'div':", );


if(askUser === 'add') {

    const firstNumber = +prompt('Write down first number', '');
    const secondNumber = +prompt('Write down second number', '');

    const result = firstNumber + secondNumber;

    console.log(`The result: ${result}`)
}else if(askUser === 'mult') {

    const firstNumber = +prompt('Write down first number', '');
    const secondNumber = +prompt('Write down second number', '');

    const result = firstNumber * secondNumber;

    console.log(`The result: ${result}`)
}else if(askUser === 'div') {
    const firstNumber = +prompt('Write down first number', '');
    const secondNumber = +prompt('Write down second number', '');


    const result = firstNumber / secondNumber;

    console.log(`The result: ${result}`)
}else if(askUser === 'sub'){
    const firstNumber = +prompt('Write down first number', '');
    const secondNumber = +prompt('Write down second number', '');

    const result = firstNumber - secondNumber;

    console.log(`The result: ${result}`)
}else {
    alert('Try to write: "add", "sub", "mult", "div"')
}



