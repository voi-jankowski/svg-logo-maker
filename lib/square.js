const Shapes = require("./shapes.js");

function Square(text, textColor, shapeType, shapeColor) {
  Shapes.call(this, text, textColor, shapeType, shapeColor);
  const shapeCode = `<rect x="75" y="25" width="150" height="150" fill="${shapeColor}"/>`;
  const textCode = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
}
