import { renderMeal, renderIngredient } from './utils.js';
// import functions and grab DOM elements
// const quantityIn = document.getElementById('quantity-in');
// const caloriesIn = document.getElementById('calories-in');
const ingredientsList = document.getElementById('ingredients-list');
const removeBtn = document.getElementById('remove');
const saveBtn = document.getElementById('save-meal');
const mealList = document.getElementById('meals-list');
// let state: what are we keeping track of?
let meals = [];
let ingredients = [];
// set event listeners 


function renderMeals(){
    mealList.textContent = '';
    for (let meal of meals) {
        const li = renderMeal(meal);
        mealList.append(li);
    }
}
function renderIngredients() {
    ingredientsList.textContent = '';
    for (let item of ingredients) {
        const li = renderIngredient(item);
        ingredientsList.append(li);
    }
}

function resetIngredients() {
    ingredients = 0;
    ingredientsList.textContent = '';
}
const formEl = document.querySelector('#add-ingredients');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(formEl);

    const mealItems = {
        name: formData.get('ingredients'),
        quantity: formData.get('quantity'),
    }; 

    ingredients.push(mealItems);
    renderIngredients();

 
});
removeBtn.addEventListener('click', () => { 

    ingredients.pop();
    renderIngredients();

});
// saveBtn.addEventListener('click', () => {


//     for (let ingredient of ingredients) {
//         const numOfI = Number(ingredient.ingredients);
//         mealName = numOfI + mealName;
//     }
//     const meal = {
//         number: meals.length + 1, 
//         quantity: mealName,
//     };

//     meals.push(meal);

//     renderMeals();
//     resetIngredients();

// });

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
