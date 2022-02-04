export function renderIngredient(item) {
    const li = document.createElement('li');
    li.textContent = `${item.name} ${item.quantity}`;
    return li;
    
}
export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `Name ${meal.quantity}  ${meal.ingredients} ingredients`;
    return li;
}