console.log("ABC".length);

let originalWord = "Bora-Bora";
console.log(`lowercase ${originalWord.toLowerCase()}`);
console.log(`upperCase ${originalWord.toUpperCase()}`);

let word = "koala";
console.log(word === "koala");
console.log(word === "kangaroo");

let name = "Sarah";
for (char of name) {
    console.log(char);
}

let song = "Honky Tonk Women";
console.log(song.indexOf("onk"));
console.log(song.indexOf("unknown"));
console.log(song.startsWith("Ho"));
console.log(song.endsWith("omen"));

let monthList = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
let months = monthList.split(",");
console.log(months[0]);
console.log(months[11]);

//word = prompt("Enter a word");
word = "radar";
function vowels(string){
    let result = 0;
    for(let letter of string) {
        switch(letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                result += 1;
        }
    }
    return result;
}
function backwards(string) {
    let result = "";
    for (let letter of string) {
        result = letter + result;
    }
    return result;
}
function palindrome(string) {
    let half = Math.floor(string.length / 2);
    for(let i=0; i < half; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(`word=${word}, lenght=${word.length} vowels=${vowels(word)} backwards=${backwards(word)} palindrome=${palindrome(word)} ${word.toUpperCase()} ${word.toLowerCase()}`);
