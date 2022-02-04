// IMPORT MODULES under test here:
import { renderIngredient, renderMeal } from '../utils.js';

const test = QUnit.test;

test('renderIngredient should create list', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>lettuce 3</li>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderIngredient({
        name: 'lettuce', quantity:3 });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('renderMeal will create a list', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>Sandwich 3</li>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMeal({ name: "Sandwich", totalIngredients:3});
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});