const showMessage = e => {
  console.log(`event type: ${e.type}, target: ${e.target}`);
};

const buttonElement = document.getElementById("myButton");
buttonElement.addEventListener("click", showMessage);
//buttonElement.removeEventListener("click", showMessage);

document.addEventListener("keypress", ev => {
  console.log(`You pressed the ${String.fromCharCode(ev.charCode)} key`);
});

const keyboardInfo = ev => {
  console.log(`Keyboard event: ${ev.type}, key: ${ev.keyCode}`);
};
document.addEventListener("keydown", keyboardInfo);
document.addEventListener("keyup", keyboardInfo);

const getMouseButton = code => {
  let button = "unknown";
  switch (code) {
    case 0:
      button = "left";
      break;
    case 1:
      button = "middle";
      break;
    case 2:
      button = "right";
      break;
  }
  return button;
};

const mouseInfo = ev => {
  console.log(
    `Mouse event: ${ev.type} button: ${getMouseButton(ev.button)}, X: ${
      ev.clientX
    }, Y: ${ev.clientY}`
  );
};

document.addEventListener("click", mouseInfo);
document.addEventListener("mousedown", mouseInfo);
document.addEventListener("mouseup", mouseInfo);

window.addEventListener("load", e => {
  console.log("The page have been loaded");
});

// window.addEventListener("beforeunload", e => {
//     const message = "Should you stay or should you go";
//     e.returnValue = message;
//     return message;
// });

// Click handler on the document
document.addEventListener("click", e => {
  console.log("Document handler");
});
// Click handler on the paragraph
document.getElementById("para").addEventListener("click", e => {
  console.log("Paragraph handler");
});
// Click handler on the button
document.getElementById("propa").addEventListener("click", e => {
  console.log("Button handler");
  e.stopPropagation();
});

// Handling clicking on the forbidden link
document.getElementById("forbidden").addEventListener("click", e => {
  alert("Yes... But no.");
  e.preventDefault(); // Cancels the default behavior
});

let countingEnabled = true;
const clickCountElement = document.getElementById("clickCount");
document.getElementById("myButton").addEventListener("click", ev => {
  if (countingEnabled) {
    clickCountElement.textContent = parseInt(clickCountElement.textContent) + 1;
  }
});
document.getElementById("deactivate").addEventListener("click", ev => {
  if (countingEnabled) {
    countingEnabled = false;
    ev.target.textContent = "Activate counting";
  } else {
    countingEnabled = true;
    ev.target.textContent = "Deactivate counting";
  }
});

document.addEventListener("keypress", ev => {
  let color = null;
  switch (String.fromCharCode(ev.charCode)) {
    case "b":
      color = "blue";
      break;
    case "r":
      color = "red";
      break;
    case "y":
      color = "yellow";
      break;
  }
  if (color != null) {
    const colorsDivs = document.querySelectorAll("#colorsDiv > div");
    for (const colorsDiv of colorsDivs) {
      colorsDiv.style.backgroundColor = color;
    }
  }
});

const dessertList = document.getElementById("desserts");

const renameElement = ev => {
  const dessertInput = prompt("Please rename the dessert");
  ev.target.textContent = dessertInput;
};

document.getElementById("addButton").addEventListener("click", () => {
  const dessertInput = prompt("Please enter a dessert");
  const dessertListElement = document.createElement("li");
  dessertListElement.textContent = dessertInput;
  dessertListElement.addEventListener("click", renameElement);
  dessertList.appendChild(dessertListElement);
});

const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

function showAnswer(button, answer, id) {
    return ev => {
        button.parentElement.replaceChild(document.createTextNode(answer), button);
    }
}

function showQuiz(questions, parentElement) {
    for (let index = 0; index < questions.length; index++) {
        const question = questions[index];
        
        const questionElement = document.createTextNode(`Question ${index}: ${question.statement}`);
        parentElement.appendChild(questionElement);
        parentElement.appendChild(document.createElement("br"));
        
        const answerButtonElement = document.createElement("button");
        answerButtonElement.textContent = "Show answer";
        answerButtonElement.addEventListener("click", 
            () => answerButtonElement.parentElement.replaceChild(document.createTextNode(question.answer), answerButtonElement));
        parentElement.appendChild(answerButtonElement);
        parentElement.appendChild(document.createElement("br"));
    }
}
const quizDivElement = document.getElementById("quizDiv");
showQuiz(questions, quizDivElement);
