//let number = Number(prompt("Enter a number"));
let number = 50;
if (number >= 0 && number <= 100) {
    console.log(`${number} is between 0 and 100`);
} else if (number >= 0) {
    console.log(`${number} is positive or zero`);
} else {
    console.log(`${number} is negative`);
}

//let weather = prompt("What's the weather like?");
let weather = "sunny"
switch (weather) {
    case "sunny":
        console.log("T-shirt time");
        break;
    case "rainy":
        console.log("Bing up some umbrella");
        break;
    default:
        console.log("Not a valid weather type");
}

// let day = prompt("What's the day?");
let day = "monday";
switch (day) {
    case "monday":
        console.log(`The day after ${day} is tuesday`);
        break;
    case "tuesday":
        console.log(`The day after ${day} is wednesday`);
        break;
    case "wednesday":
        console.log(`The day after ${day} is thursday`);
        break;
    case "thursday":
        console.log(`The day after ${day} is friday`);
        break;
    case "friday":
        console.log(`The day after ${day} is saturday`);
        break;
    case "saturday":
        console.log(`The day after ${day} is sunday`);
        break;
    case "sunday":
        console.log(`The day after ${day} is monday`);
        break;
    default:
        console.log(`${day} is not a valid day`);
}

// let month = prompt("What's the month?")
let month = "january";
switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`The number of days for ${month} is 31`);
        break;
    case "february":
        console.log(`The number of days for ${month} is 28`);
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`The number of days for ${month} is 30`);
        break;
    default:
        console.log(`${month} is not a valid month`);
}

let hours = 23;
let minutes = 59;
let seconds = 59;

// first algorithm
let nextSeconds = (seconds + 1) % 60;
let nextMinutes = (minutes + Math.floor((seconds + 1) / 60)) % 60;
let nextHours = (hours + Math.floor((minutes + 1) / 60)) % 24;
console.log(`next ${nextHours}:${nextMinutes}:${nextSeconds}`);

// second algorithm
nextSeconds = seconds + 1;
nextMinutes = minutes;
nextHours = hours;
if (nextSeconds > 59) {
    nextSeconds = 0;
    nextMinutes += 1;
}
if (nextMinutes > 59) {
    nextMinutes = 0;
    nextHours += 1;
}
if (nextHours > 23) {
    nextHours = 0;
}
console.log(`next ${nextHours}:${nextMinutes}:${nextSeconds}`);

