const { validateColor } = require("./validate-color.js");
// Create the test to check if validateColor is checking for correct input.
describe("validateColor", () => {
  test("should return false when the chosenColor is 'invalidColor'", () => {
    let testedColor = "invalidColor";

    expect(validateColor(testedColor)).toBeFalsy();
  });
  test("should return true when the chosenColor is #ff4000", () => {
    let testedColor = "#ff4000";

    expect(validateColor(testedColor)).toBeTruthy();
  });
});
