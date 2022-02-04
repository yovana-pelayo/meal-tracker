export function renderIngredient(item) {
    const li = document.createElement('li');
    li.textContent = `${item.name} ${item.quantity}`;
    return li;
    
}
export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.name} ${meal.totalIngredients}`;
    return li;
}