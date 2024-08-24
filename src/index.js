function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let context =
    "You are a AI Barista expert and you love to make coffee recipes. Your mission is to generate a custom coffee recipe. Make sure to follow the user instructions and answer in basic HTML without the title.";
  let prompt = `User instructions: Generate a short custom coffee recipe based on ${instructionInput.value}`;
  let apiKey = "b6c516da5eaaa3o3f0cb04t9c962c4a1";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let coffeeRecipeElement = document.querySelector("#coffee-recipe-generator");
coffeeRecipeElement.addEventListener("submit", generateRecipe);
