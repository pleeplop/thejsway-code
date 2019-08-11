let number = 1;
while (number <= 5) {
    console.log(number);
    number++;
}

for (number = 1; number <= 5; number++) {
    console.log(number);
}

// This program must show exactly 10 numbers including the first one, not 11 numbers!
//let start = Number(prompt("Enter a number"));
let start = 0;
let i;
for (i = start; i < start + 20; i++) {
    if (i % 2 == 1) {
        console.log(`${i} is odd`);
    }
}

//number = 0;
number = 50;
while (number < 50 || number > 100) {
    number = Number(prompt("Enter a number between 50 and 100"));
}


number = 2;
while (number < 2 || number > 9) {
    number = Number(prompt("Enter a number between 2 and 9"));
}
for (i = 1; i < 10; i++) {
    console.log(`${number} x ${i}`);
}

//let input = "pouet";
let input = "no";
while (input !== "yes" && input !== "no") {
    input = prompt("Enter neither yes or no");
}

for (i = 1; i <= 100; i++) {
    if (i % 3 && i % 5) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3) {
        console.log(`${i} Fizz`);
    } else if (i % 5) {
        console.log(`${i} Buzz`);
    }
}
