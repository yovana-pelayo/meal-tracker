export function renderIngredient(item) {
    const li = document.createElement('li');
    li.textContent = `${item.name} ${item.quantity}`;
    return li;
    
}
export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `Meal: ${meal.name} (${meal.totalIngredients}) ingredients`;
    return li;
}