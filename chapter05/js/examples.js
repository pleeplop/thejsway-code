function sayHello(name) {
    const message = `Hello, ${name}!`;
    return message;
}

let str = sayHello("Peter");
console.log(str);

const helloAnonymous = function(name) {
    const message = `Hello, ${name}`;
    return message;
}
console.log(helloAnonymous("Mark"));

const shortAnonymous = (name) => {
    const message = `Hello, ${name}`;
    return message;
}
console.log(shortAnonymous("William"));

// Say hello to the user
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
}
//let firstName = prompt("Enter your first name");
//let lastName = prompt("Enter your last name");
let firstName = "John";
let lastName = "Doe"
console.log(sayHello(firstName, lastName));

function square1(x) {
    return x * x;
  }
  
// Square the given number x
const square2 = x => x * x;

let i;
for (i = 0; i < 10; i++) {
    console.log(square1(i));
    console.log(square2(i));
}

function min(x, y) {
    if (x < y) {
        return x
    } else {
        return y
    }
}
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

function calculate(operand1, operator, operand2) {
    switch(operator) {
        case "*":
            return operand1 * operand2;
        case "+":
            return  operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "/":
            return operand1 / operand2;
    }
}
console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

function circumference(radius) {
    return 2 * Math.PI * radius;
}
function area(radius) {
    return Math.PI * (radius ** 2);
}
console.log(`circumference: ${circumference(10)}`);
console.log(`area: ${area(10)}`);