let a = 3.14;
console.log(a);

//const c = 1;
//c = 2;

let b = 0;
b += 1;
b++;
console.log(b);

let num1 = 0;
{
    num1 = 1;
    const num2 = 0;
}
console.log(num1);
//console.log(num2);

console.log("3 + 2 * 4");
let e = 3 + 2 * 4;
console.log(e);

console.log("(3 + 2) * 4");
console.log((3 + 2) * 4);

const country = "France";
console.log(`I live in ${country}`);
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`);

const f = 100;
console.log("varialble f contains the value " + f);

const g = 100 * "two";
console.log(g);

const h = "5";
console.log(h + 1);
const i = Number("5");
console.log(i + 1);

//const name = prompt("Enter your first name");
//alert(`Hello ${name}`);

a = 1;
b = 2;
c = 3;
console.log("console.log(a, b, c)");
console.log(a, b, c);

//let input = prompt("Enter a number");
//let number = Number(input);
//console.log("number contains the value " + number);

// VAT calculation
//let rawPrice = Number(prompt("Enter a raw price"));
//let totalPrice = rawPrice * 1.206;
//console.log("total price with VAT is " + totalPrice);

//let celcius = Number(prompt("Enter a temperature in celcius degrees"));
//let fahrenheit = celcius * (9 / 5) + 32;
//console.log(`${celcius} C = ${fahrenheit} F`);

let number1 = 5;
let number2 = 3;

let tmp = number1;
number1 = number2;
number2 = tmp;

console.log(number1);
console.log(number2);

