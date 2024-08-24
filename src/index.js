function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Custom Coffee Recipe",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let coffeeRecipeElement = document.querySelector("#coffee-recipe-generator");
coffeeRecipeElement.addEventListener("submit", generateRecipe);
