let movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
let elements = ["Hello", { message: "Hi mom"}, true];

console.log(`movies length ${movies.length}`);
const emptyArray = [];
console.log(`empty array length ${emptyArray.length}`);

console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[3]);

console.log("for loop iterator")
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

console.log("forearch iterator")
movies.forEach(movie => console.log(movie));

console.log("for-of array iterator")
for (const movie of movies) {
    console.log(movie);
}

movies.push("Ghostbusters");
console.log(`movie pushed: ${movies[3]}`);

movies.unshift("Pacific Rim");
console.log(`movie unshift ${movies[0]}`);

movies.pop();
console.log(`movies pop length: ${movies.length} last element: ${movies.length}`);

movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies.splice(0, 1);
console.log(`movies=${movies}`);

let musketeers = ["Athos","Porthos","Aramis"];
for(let i=0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}
musketeers.push("D'Artagnan");
musketeers.forEach(musketeer => console.log(musketeer));
musketeers.splice(2, 1);
for(musketeer of musketeers) {
    console.log(musketeer);
}

function sum(array) {
    let result = 0;
    array.forEach(element => result += element);
    return result;
}
let values = [3, 11, 7, 2, 9, 10];
console.log(`values sum=${sum(values)}`);

function max(array) {
    let result = array[0];
    array.forEach(element => {
        if (element > result) {
            result = element;
        }
    });
    return result;
}
console.log(`values maximum ${max(values)}`);

function askWords() {
    let result = [];
    let input = prompt("Enter some text");
    while (input !== "stop") {
        result.push(input);
        input = prompt("Enter some text");
    }
    return result;
}
let words = askWords();
console.log(`words ${words}`);
