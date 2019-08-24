let titleElements = document.getElementsByTagName("h2");
console.log(titleElements[0]);
console.log(titleElements.length);

let existingElements = document.getElementsByClassName("exists");
for (let element of existingElements) {
    console.log(element);
}

console.log(document.getElementById("new"));
console.log(document.getElementById("ancient").getElementsByClassName("exists").length);

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
console.log(document.querySelectorAll("p").length);
console.log(document.querySelectorAll("#content p").length);
console.log(document.querySelectorAll(".exists").length);
console.log(document.querySelectorAll("#ancient > .exists").length);

console.log(document.querySelector("p"));

console.log(document.getElementById("content").innerHTML);
console.log(document.getElementById("content").textContent);

console.log(document.querySelector("a").getAttribute("href"));
console.log(document.querySelector("ul").id);
console.log(document.querySelector("a"));

if (document.querySelector("a").hasAttribute("target")) {
    console.log("The first link has a target attribute.");
} else {
    console.log("The first link does not have a target attribute.");
}

const classes = document.getElementById("ancient").classList;
console.log(classes.length);
console.log(classes[0]);

if (document.getElementById("ancient").classList.contains("wonders")) {
    console.log("The element with ID 'ancient' has the class 'wonders'");
} else {
    console.log("The element with ID 'ancient' does not have the class 'wonders'");
}

console.log(document.getElementById("exercise1"));

function countElements(query) {
    return document.getElementById("exercise1").querySelectorAll(query).length;
}

console.log(countElements("p"));              // Should show 4
console.log(countElements(".adjective"));     // Should show 3
console.log(countElements("p .adjective"));   // Should show 3
console.log(countElements("p > .adjective")); // Should show 2

// linkInfo
const linkElements = document.querySelectorAll("#exercise2 li");
console.log(linkElements.length);
console.log(linkElements[0]);
console.log(linkElements[linkElements.length - 1]);

const has = (id, someClass) => {
    const element = document.getElementById(id);
    if (element == null) {
        console.error(`unknown element id='${id}'`);
        return;
    }
    console.log(element.classList.contains(someClass));
};

has("saxophone", "woodwind");     // Should show true
has("saxophone", "brass");        // Should show false
has("trumpet", "brass");          // Should show true
has("contrabass", "chordophone"); // Should show an error message
