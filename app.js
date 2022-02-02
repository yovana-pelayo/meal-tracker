// import functions and grab DOM elements
// const form = document.getElementById('ingredients');
const ingredientsIn = document.getElementById('ingredients-in');
// const quantityIn = document.getElementById('quantity-in');
// const caloriesIn = document.getElementById('calories-in');

// const ingredientBtn = document.getElementById('add-ingredient');
// const removeBtn = document.getElementById('remove');
// const saveBtn = document.getElementById('save-meal');

// let state: what are we keeping track of?
// let calories = [];
let ingredients = [];
// set event listeners 
// eslint-disable-next-line no-unused-vars
function renderIngredients() {
    ingredientsIn.textContent = '';
    for (let ingredient of ingredients) {
        const li = renderIngredients(ingredient);
        ingredientsIn.append(li);
    }
}

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
