// IMPORT MODULES under test here:
import { renderMeal, renderStat } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>number1</li>
    `;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMeal({
        number: 1, totalQuantity:10 });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
