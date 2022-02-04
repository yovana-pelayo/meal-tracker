// IMPORT MODULES under test here:
import { renderIngredient } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>lettuce 3</li>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderIngredient({
        name: "lettuce", quantity:3 });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
