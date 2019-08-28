const usernameElement = document.getElementById("username");
usernameElement.value = "MyCoolUsername";

const usernameHelpElement = document.getElementById("usernameHelp");

usernameElement.addEventListener("focus", e => {
  usernameHelpElement.textContent = "Enter a unique username!";
});
usernameElement.addEventListener("blur", e => {
  usernameHelpElement.textContent = "";
});
//usernameElement.focus();

const confirmationElement = document.getElementById("confirmation");
confirmationElement.addEventListener("change", e => {
  console.log(`Email confirmation request: ${e.target.checked}`);
});

const subscriptionElements = document.getElementsByName("subscription");
for (const subscriptionElement of subscriptionElements) {
  subscriptionElement.addEventListener("change", e => {
    console.log(`Selected subscription: ${e.target.value}`);
  });
}

const nationalityElement = document.getElementById("nationality");
nationalityElement.addEventListener("change", e => {
  console.log("Nationality code " + e.target.value);
});

const formElement = document.querySelector("form");
console.log(`Number of fields: ${formElement.elements.length}`);
console.log(formElement.elements[0]);
console.log(formElement.elements.username);

formElement.addEventListener("submit", e => {
  const username = e.target.elements.username.value;
  const password = e.target.elements.password.value;
  const email = e.target.elements.emailAddress.value;
  console.log(`username: ${username}, password: ${password}, email: ${email}`);

  if (e.target.elements.confirmation.checked) {
    console.log("You asked for email confirmation");
  } else {
    console.log("You didn't asked for email confirmation");
  }

  switch (e.target.elements.subscription.value) {
    case "newspromo":
      console.log("You are subscribed to newsletters and promotions");
      break;
    case "news":
      console.log("You are subscribed to newsletters only");
      break;
    case "no":
      console.log("You are not subscribed to anything");
      break;
    default:
      console.log("unknown subscription code");
  }

  switch (e.target.elements.nationality.value) {
    case "US":
      console.log("Hello! You are a US citizen");
      break;
    case "FR":
      console.log("Bonjour! You are a French citizen");
      break;
    case "ES":
      console.log("Hola! You are a Spanish citizen");
      break;
    default:
      console.log("Your nationality is unknown");
  }
  e.preventDefault();
});

const passwordElement = document.getElementById("password");
const passwordHelpElement = document.getElementById("passwordHelp");

// Instant validation
passwordElement.addEventListener("input", e => {
  const password = e.target.value;
  let passwordLength = "too short";
  let messageColor = "red"; // Short password => red
  if (password.length >= 8) {
    passwordLength = "adequate";
    messageColor = "green"; // Long password => green
  } else if (password.length >= 4) {
    passwordLength = "moderate";
    messageColor = "orange"; // Moderate password => orange
  }

  passwordHelpElement.textContent = `Length: ${passwordLength}`;
  passwordHelpElement.style.color = messageColor;
});

const emailAddressElement = document.getElementById("emailAddress");
const emailHelpElement = document.getElementById("emailHelp");

const emailRegex = /.+@.+\..+/;
emailAddressElement.addEventListener("blur", e => {
  let emailAddressValidity = "";
  if (!emailRegex.test(e.target.value)) {
    emailAddressValidity = "Invalid address";
  }
  emailHelpElement.textContent = emailAddressValidity;
});

const regex = /@/;
console.log(regex.test(""));
console.log(regex.test("@"));
console.log(regex.test("sophie&mail.fr"));
console.log(regex.test("sophie@email.fr"));

{
  const password1Element = document.getElementById("password1");
  const password2Element = document.getElementById("password2");
  const passwordHelpElement = document.getElementById("passwordHelpExercise");
  const passwordFormElement = document.getElementById("exercise-password");

  const digitReg = /[0-9]/;

  passwordFormElement.addEventListener("submit", e => {
    const password1 = e.target.elements.password1.value;
    const password2 = e.target.elements.password2.value;

    let passwordValidity = "";
    if (password1 !== password2) {
      passwordValidity = "the two inputed passwords must be identical";
    }
    if (password1 < 6 || password2 < 6) {
      passwordValidity = "The minimal password length is 6 characters";
    }
    if (!digitReg.test(password1)) {
      passwordValidity = "The password must contains at least one digit";
    }
    passwordHelpElement.textContent = passwordValidity;
    e.preventDefault();
  });
}

{
  // Character list. Each house has a name and a code
  const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];

  // Return an array of characters belonging to a house
  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
  };

  const houseElement = document.getElementById("house");
  const characterElements = document.getElementById("characters");

  for (const house of houses) {
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", house.code);
    optionElement.textContent = house.name;

    houseElement.appendChild(optionElement);
  }

  houseElement.addEventListener("change", e => {
    const houseCode = e.target.value;

    while (characterElements.hasChildNodes()) {
      characterElements.removeChild(characterElements.lastChild);
    }
    for (const character of getCharacters(houseCode)) {
      const characterElement = document.createElement("li");
      characterElement.textContent = character;
      characterElements.appendChild(characterElement);
    }
  });
}

{
  // Country list
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];

  const countryElement = document.getElementById("country");
  const suggestionsElement = document.getElementById("suggestions");
  countryElement.addEventListener("input", e => {
    const input = e.target.value;

    // remove old suggestions
    while (suggestionsElement.hasChildNodes()) {
        suggestionsElement.removeChild(suggestionsElement.lastChild);
    }

    // add new ones
    countryList.filter(country => country.startsWith(input))
    .forEach(country => {
        suggestionsElement.appendChild(document.createTextNode(country));
        suggestionsElement.appendChild(document.createElement("br"));
    });
  });
}
