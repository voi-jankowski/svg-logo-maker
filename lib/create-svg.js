const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");

function renderLogoCode(shapeCode, textCode) {
  return `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">

      ${shapeCode}

      ${textCode}

      </svg>`;
}

function createSVG(userInput) {
  const chosenText = userInput.text;
  const chosenTextColor = userInput.textColor;
  const chosenShape = userInput.shape;
  const chosenShapeColor = userInput.shapeColor;
  // Select the code according to the selection of the shape
  if (chosenShape === "triangle") {
    const result = new Triangle(
      chosenText,
      chosenTextColor,
      chosenShapeColor
    ).renderCode();

    console.log(`result`);
    console.log(result);

    return renderLogoCode(result.shapeCode, result.textCode);
  }
  if (chosenShape === "circle") {
    const result = new Circle(
      chosenText,
      chosenTextColor,
      chosenShapeColor
    ).renderCode();

    console.log(`result`);
    console.log(result);

    return renderLogoCode(result.shapeCode, result.textCode);
  }
  if (chosenShape === "square") {
    const result = new Square(
      chosenText,
      chosenTextColor,
      chosenShapeColor
    ).renderCode();

    console.log(`result`);
    console.log(result);

    return renderLogoCode(result.shapeCode, result.textCode);
  }
}

module.exports = { createSVG };
