import { renderMeal, renderIngredient } from './utils.js';
// import functions and grab DOM elements
const mealName = document.getElementById('meal-name');
// const caloriesIn = document.getElementById('calories-in');
const ingredientsList = document.getElementById('ingredients-list');
const removeBtn = document.getElementById('remove');
const saveBtn = document.getElementById('save-meal');
const mealList = document.getElementById('meals-list');
// let state: what are we keeping track of
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
//created a mealsItem object that get sits date from these inputs
    ingredients.push(mealItems); 
    renderIngredients();

 
});
removeBtn.addEventListener('click', () => { 

    ingredients.pop(); //removes last input
    renderIngredients();

});
saveBtn.addEventListener('click', () => {

    const numOfIn = ingredients.length;
    const newMeal = mealName.value;
    const meal = {
        name: newMeal,
        totalIngredients: numOfIn,
    };
// if I am honest IDK what I did! Mary told me to write the test first and then to code in small sections. 
 //I think the new object is the meal and I am pushing that to meal list
    meals.push(meal);

    renderMeals();
    resetIngredients();

});

