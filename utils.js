export function renderStat(stat) {
    const li = document.createElement('li');
    li.textContent = `${stat.ingredients} (${stat.quantity})`;
    return li;
    
}
export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `Meal #${meal.ingredients} - ${meal.totalQuantity} Ingredients used`;
    return li;
}