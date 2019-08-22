let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

function setUsername() {
    let myName = prompt("Please enter your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
}
if (!localStorage.getItem("name")) {
    setUsername();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
}
myButton.onclick = function() {
    setUsername();
}


let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-logo.svg") {
        myImage.setAttribute("src", "images/firefox-old-logo.svg");
    } else {
        myImage.setAttribute("src", "images/firefox-logo.svg");
    }
}
