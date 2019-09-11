const articleElements = document.getElementById("articles");
// fetch("https://thejsway-server.herokuapp.com/api/articles")
//     .then(response => response.json())
//     .then(articles => {
//         articles.forEach(article => {
//             const titleElement = document.createElement("h3");
//             titleElement.textContent = article.title;
//             articleElements.appendChild(titleElement);

//             const contentElement = document.createElement("p");
//             contentElement.textContent = article.content;
//             articleElements.appendChild(contentElement);
//         });
//     })
//     .catch(err => console.error(err));

function showPlanet(index) {
    return e => {
        fetch(`https://swapi.co/api/planets/${index}/`)
            .then(response => response.json())
            .then(planet => {
                const infosElement = document.getElementById("infos");

                let planetTitleElement = document.getElementById("planetTitle");
                if (planetTitleElement == null) {
                    planetTitleElement = document.createElement("h2");
                    planetTitleElement.id = "planetTitle";
                    infosElement.appendChild(planetTitleElement);
                }
                planetTitleElement.textContent = planet.name;

                let planetInfoElement = document.getElementById("planetInfo");
                if (planetInfoElement == null) {
                    planetInfoElement = document.createElement("span");
                    planetInfoElement.id = "planetInfo";
                    infosElement.appendChild(planetInfoElement);
                }
                planetInfoElement.textContent = `Climate: ${planet.climate} Population: ${planet.population}`;
            })
            .catch(err => console.error(err));
        e.preventDefault();
    }
}

const linkElements = document.getElementById("links");
for (let index = 1; index < 10; index++) {
    const linkElement = document.createElement("button");
    linkElement.textContent = index;
    linkElement.addEventListener("click", showPlanet(index));
    linkElements.appendChild(linkElement);
    linkElements.appendChild(document.createTextNode("|"));
}
