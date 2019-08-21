class Link {
    constructor(title, url, author) {
        this.title = title;
        this.url = url;
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            this.url = "http://" + url;
        }
        this.author = author;
    }
}

const links = [];

function showStartMenu() {
    const startMessage = 
        "1: Show the list of links.\n" +
        "2: Add a new link.\n" +
        "3: Remove an existing link.\n" +
        "0: Quit the program.";

    let input = "";
    while (input !== "4") {
    let input = prompt(startMessage);
        switch(input) {
            case "1":
                showLinksMenu();
                break;
            case "2":
                addLinkMenu();
                break;
            case "3":
                removeLinkMenu();
                break;
            case "0":
                alert("Quitting the program");
                break;
            default:
                alert(`${input} is not a valid action`);
                break;
        }
    }
}

function showLinksMenu() {
    let linksMessage;
    if (links.length === 0) {
        linksMessage = "No links";
    } else {
        linksMessage = "";
        for (let i=0; i < links.length; i++) {
            linksMessage = linksMessage + `${i}: ${links[i].title} (${links[i].url}). Author: ${links[i].author}`;
        }
    }
    alert(linksMessage);
}

function addLinkMenu() {
    const title = prompt("Enter a title");
    const url = prompt("Enter an url");
    const author = prompt("Enter an author");
    links.push(new Link(title, url, author));
}

function removeLinkMenu() {
    const index = Number(prompt("Insert a rank to delete"));
    links.splice(index, 1);
}

showStartMenu();
