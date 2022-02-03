import { renderMeal, renderStat } from './utils.js';
// import functions and grab DOM elements
const formEl = document.getElementById('add-ingredients');
// const ingredientsIn = document.getElementById('ingredients-in');
// const quantityIn = document.getElementById('quantity-in');
// const caloriesIn = document.getElementById('calories-in');
const statsList = document.getElementById('stats-list');
// const removeBtn = document.getElementById('remove');
// const saveBtn = document.getElementById('save-meal');
const mealList = document.getElementById('meals-list');
// let state: what are we keeping track of?
let meals = [];
let stats = [];
// set event listeners 


function renderMeals(){
    mealList.textContent = '';
    for (let meal of meals) {
        const li = renderMeal(meal);
        mealList.append(li);
    }
}
function renderStats() {
    statsList.textContent = '';
    for (let stat of stats) {
        const li = renderStat(stat);
        statsList.appendChild(li);
    }
}

function resetStats() {
    stats = [];
    statsList.textContent = '';
}
// const ingredientsEl = document.querySelector('#ingredients-form');
formEl.addEventListener('click', (e) => {
    e.preventDefault();

    const mealData = new FormData(formEl);

    const stat =
{
    ingredients: mealData.get('ingredients'),
    quantity: mealData.get('quantity'),
};
    stats.push(stat);
    renderStats();
});
removeEventListener.addEventListener('click', () => {

    let sumQuantity = 0;
    for (let stat of stats) {
        const numStats = Number(stat.quantity);
        sumQuantity = numStats + sumQuantity; 
    }
    const stat = {
        number: meals.length + 1, 
        totalQuantity: sumQuantity,
    };

    meals.push(meal);

    renderMeals();
    resetStats();

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
