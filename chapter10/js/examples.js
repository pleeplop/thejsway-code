const numbers = [1, 5, 10, 15];
const doubles = numbers.map(x => x * 2);
console.log(doubles);

const sum = numbers.reduce((acc, value) => acc + value, 0);
console.log(`sum ${numbers}=${sum}`);

const movieList = [
    {
      title: "Batman",
      year: 1989,
      director: "Tim Burton",
      imdbRating: 7.6
    },
    {
      title: "Batman Returns",
      year: 1992,
      director: "Tim Burton",
      imdbRating: 7.0
    },
    {
      title: "Batman Forever",
      year: 1995,
      director: "Joel Schumacher",
      imdbRating: 5.4
    },
    {
      title: "Batman & Robin",
      year: 1997,
      director: "Joel Schumacher",
      imdbRating: 3.7
    },
    {
      title: "Batman Begins",
      year: 2005,
      director: "Christopher Nolan",
      imdbRating: 8.3
    },
    {
      title: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      imdbRating: 9.0
    },
    {
      title: "The Dark Knight Rises",
      year: 2012,
      director: "Christopher Nolan",
      imdbRating: 8.5
    }
  ];
const moviesBefore2000 = movieList.filter(movie => movie.year < 2000).map(movie => movie.title);
console.log(`moviesBefore2000 ${moviesBefore2000}`);

const governmentForms = [
    {
      name: "Plutocracy",
      definition: "Rule by the wealthy"
    },
    {
      name: "Oligarchy",
      definition: "Rule by a small number of people"
    },
    {
      name: "Kleptocracy",
      definition: "Rule by the thieves"
    },
    {
      name: "Theocracy",
      definition: "Rule by a religious elite"
    },
    {
      name: "Democracy",
      definition: "Rule by the people"
    },
    {
      name: "Autocracy",
      definition: "Rule by a single person"
    }
  ];
const formsEndingWithCy = governmentForms.map(movie => movie.name).filter(movie => movie.endsWith("cy"));
console.log(formsEndingWithCy);

const arrays = [[1, 4], [11], [3, 5, 7]];

function sumReduce(array) {
    return array.reduce((acc,value) => acc + value, 0);
}
const arraysSum = sumReduce(arrays.map(array => sumReduce(array)));
console.log(arraysSum);

const students = [
    {
      name: "Anna",
      sex: "f",
      grades: [4.5, 3.5, 4]
    },
    {
      name: "Dennis",
      sex: "m",
      country: "Germany",
      grades: [5, 1.5, 4]
    },
    {
      name: "Martha",
      sex: "f",
      grades: [5, 4, 2.5, 3]
    },
    {
      name: "Brock",
      sex: "m",
      grades: [4, 3, 2]
    }
  ];

function average(array) {
    return array.reduce((acc,value) => acc + value, 0) / array.length;
}
const femaleStudentsResults = students.filter(student => student.sex === "f")
    .map(student => {
        const avgGrade = average(student.grades);
        return {
            name: student.name ,
            avgGrade: avgGrade 
        }
    });
console.log(femaleStudentsResults);
