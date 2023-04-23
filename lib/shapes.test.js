const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");
// A testing suite for shapes is created.

describe("Triangle", () => {
  test("should create the string with settings for circle and set fill to green in that string", () => {
    const triangle = new Triangle("SVG", "white", "green");
    let returnObj = triangle.renderCode();

    expect(returnObj.shapeCode).toEqual(
      '<polygon points="50, 187 250, 187 150, 13" fill="green"/>'
    );
  });
  test("should create the string with positioning of the text and set fill to white in that string", () => {
    const triangle = new Triangle("SVG", "white", "green");
    let returnObj = triangle.renderCode();

    expect(returnObj.textCode).toEqual(
      '<text x="150" y="170" font-size="60" text-anchor="middle" fill="white">SVG</text>'
    );
  });
});

describe("Circle", () => {
  test("should create the string with settings for circle and set fill to green in that string", () => {
    const circle = new Circle("SVG", "white", "green");
    let returnObj = circle.renderCode();

    expect(returnObj.shapeCode).toEqual(
      '<circle cx="150" cy="100" r="80" fill="green" />'
    );
  });
  test("should create the string with positioning of the text and set fill to white in that string", () => {
    const circle = new Circle("SVG", "white", "green");
    let returnObj = circle.renderCode();

    expect(returnObj.textCode).toEqual(
      '<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text>'
    );
  });
});

describe("Square", () => {
    test("should create the string with settings for square and set fill to green in that string", () => {
      const square = new Square("SVG", "white", "green");
      let returnObj = square.renderCode();
  
      expect(returnObj.shapeCode).toEqual(
        '<rect x="75" y="25" width="150" height="150" fill="green"/>'
      );
    });
    test("should create the string with positioning of the text and set fill to white in that string", () => {
        const square = new Square("SVG", "white", "green");
        let returnObj = square.renderCode();
  
      expect(returnObj.textCode).toEqual(
        '<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text>'
      );
    });
  });
