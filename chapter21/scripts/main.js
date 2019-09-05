// fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt")
//     .then(response => response.text())
//     .then(text => console.log(text))
//     .catch(text => console.error(text));

const plane = {
  manufacturer: "Airbus",
  model: "A320"
};
console.log(plane);

const planeText = JSON.stringify(plane);
console.log(planeText);
console.log(JSON.parse(planeText));

const planes = [
  {
    manufacturer: "Airbus",
    model: "A320"
  },
  {
    manufacturer: "Boeing",
    model: "737"
  }
];
console.log(planes);
const planesText = JSON.stringify(planes);
console.log(planesText);
console.log(JSON.parse(planesText));

// fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/movies.json")
//     .then(response => response.json())
//     .then(movies => {
//         movies.forEach(movie => {
//             console.log(movie.title);
//         });
//     })
//     .catch(err => console.error(err));

{
  const languageElements = document.getElementById("languageList");

  // fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt")
  //     .then(response => response.text())
  //     .then(text => showLanguages(text))
  //     .catch(text => console.error(text));

  // const languages = "C++;Java;C#;PHP";

  function showLanguages(languages) {
    const languageList = languages.split(";");
    for (const language of languageList) {
      const languageElement = document.createElement("li");
      languageElement.textContent = language;
      languageElements.appendChild(languageElement);
    }
  }
  // showLanguages(languages);
}

{
  const paintings = [
    {
      name: "The Starry Night",
      year: "1889",
      artist: "Vincent Van Gogh"
    },
    {
      name: "The Scream",
      year: "1893",
      artist: "Edvard Munch"
    },
    {
      name: "Guernica",
      year: "1937",
      artist: "Pablo Picasso"
    }
  ];

// fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
//     .then(response => response.json())
//     .then(json => showPaintings(json))
//     .catch(err => console.error(err));

  const paintingElements = document.getElementById("paintings");
  function showPaintings(paintings) {
      for(const painting of paintings) {
        const paintingElement = document.createElement("tr");

        const nameElement = document.createElement("td");
        nameElement.textContent = painting.name;
        paintingElement.appendChild(nameElement);

        const yearElement = document.createElement("td");
        yearElement.textContent = painting.year;
        paintingElement.appendChild(yearElement);

        const artistElement = document.createElement("td");
        artistElement.textContent = painting.artist;
        paintingElement.appendChild(artistElement);

        paintingElements.appendChild(paintingElement);
      }
  }
//   showPaintings(paintings);
  
}
