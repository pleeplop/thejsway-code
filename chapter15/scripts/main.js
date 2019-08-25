{
    document.getElementById("languages").innerHTML += '<li id="c">C</li>';
    const titleElement = document.querySelector("h3");
    //document.getElementById("languages").innerHTML = "";
    titleElement.textContent += " for programming";
    titleElement.setAttribute("id", "title");
    titleElement.id = "title";
    titleElement.classList.remove("beginning");
    titleElement.classList.add("title");
    console.log(titleElement);

    const pythonElement = document.createElement("li");
    pythonElement.id = "python";
    pythonElement.textContent = "Python";
    document.getElementById("languages").appendChild(pythonElement);

    const rubyElement = document.createElement("li");
    rubyElement.id = "ruby;"
    rubyElement.appendChild(document.createTextNode("Ruby"));
    document.getElementById("languages").appendChild(rubyElement);

    const perlElement = document.createElement("li");
    perlElement.id = "perl";
    perlElement.appendChild(document.createTextNode("Perl"));
    document.getElementById("languages").insertBefore(perlElement, document.getElementById("php"));

    document.getElementById("languages").insertAdjacentHTML("afterbegin", '<li id="javascript">JavaScript</li>');

    const lispElement = document.createElement("li");
    lispElement.id = "lisp";
    lispElement.appendChild(document.createTextNode("Lisp"));
    document.getElementById("languages").replaceChild(lispElement, document.getElementById("perl"));

    document.getElementById("languages").removeChild(document.getElementById("lisp"));

    const stylingElement = document.getElementById("styling");

    const paragraphElement = document.querySelector("p");
    paragraphElement.style.color = "red";
    paragraphElement.style.margin = "50px";
    paragraphElement.style.fontFamily = "Arial";
    paragraphElement.style.backgroundColor = "black";

    const paragraphElements = document.getElementsByTagName("p");
    console.log(paragraphElements[0].style.color);
    console.log(paragraphElements[1].style.color);
    console.log(paragraphElements[2].style.color);

    const paragraphStyle = getComputedStyle(document.getElementById("para"));
    console.log(paragraphStyle.fontStyle);
    console.log(paragraphStyle.color);
}

{
    const stylingElement = document.getElementById("styling");
    const paragraphLanguageElement = document.createElement("p");

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", "https://en.wikipedia.org/wiki/List_of_programming_languages");
    linkElement.appendChild(document.createTextNode("https://en.wikipedia.org/wiki/List_of_programming_languages"));
    paragraphLanguageElement.appendChild(linkElement);

    document.body.insertBefore(paragraphLanguageElement, stylingElement);

    function insertNewspaper(parentElement, newspapers) {
        newspapers.forEach(newspaper => {
            const linkElement = document.createElement("a");
            linkElement.setAttribute("href", newspaper);
            linkElement.appendChild(document.createTextNode(newspaper));
            parentElement.appendChild(linkElement);
            parentElement.appendChild(document.createElement("br"));
        });
    }
}

{
    let newspaperLinks = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com"];
    const newspapersElement = document.createElement("div");
    newspapersElement.id = "newspapers";
    insertNewspaper(newspapersElement, newspaperLinks);
    document.body.replaceChild(newspapersElement, document.getElementById("newspapers"));

    function showDictionary(parentElement, words) {
        words.forEach(word => {
            const termElement = document.createElement("dt");
            const strongElement = document.createElement("strong");
            strongElement.textContent = word.term;
            termElement.appendChild(strongElement);
            parentElement.appendChild(termElement);

            const descriptionElement = document.createElement("dd");
            descriptionElement.textContent = word.definition;
            parentElement.appendChild(descriptionElement);
        })
    }
}

{
    const words = [{
        term: "Procrastination",
        definition: "Avoidance of doing a task that needs to be accomplished"
    }, {
        term: "Tautology",
        definition: "logical argument constructed in such a way that it is logically irrefutable"
    }, {
        term: "Oxymoron",
        definition: "figure of speech that juxtaposes elements that appear to be contradictory"
    }];

    const dictionaryElement = document.createElement("div");
    dictionaryElement.id = "dictionary";
    showDictionary(dictionaryElement, words);
    document.body.replaceChild(dictionaryElement, document.getElementById("dictionary"));
}

{
//  const color = prompt("Please input a a color");
//  const backgroundColor = prompt("Please input a a backgroud-color");
    const color = "white";
    const backgroundColor = "red";

    const paragraphElements = document.querySelectorAll("#color > div");
    for (const paragraphElement of paragraphElements) {
        paragraphElement.style.color = color;
        paragraphElement.style.backgroundColor = backgroundColor;
    }
}

{
    function showInfoElement(element, parentElement) {
        const titleText = document.createTextNode("Information about the element");
        parentElement.appendChild(titleText);

        const listElement = document.createElement("ul");
        const elementStyle = getComputedStyle(element);
        
        const heightListElement = document.createElement("li");
        heightListElement.textContent = `Height: ${elementStyle.height}px`;
        listElement.append(heightListElement);
        
        const widthListElement = document.createElement("li");
        widthListElement.textContent = `Width: ${elementStyle.width}px`;
        listElement.append(widthListElement);

        parentElement.appendChild(listElement);
    }

    const oldInfosElement = document.getElementById("infos");

    const newInfosElement = document.createElement("div");
    newInfosElement.id = "infos";

    const infosContentElement = document.getElementById("infos-content");
    showInfoElement(infosContentElement, newInfosElement);
    document.getElementById("infos-div").replaceChild(newInfosElement, oldInfosElement);
}
