const Shapes = require("./shapes.js");

function Circle(text, textColor, shapeType, shapeColor) {
  Shapes.call(this, text, textColor, shapeType, shapeColor);
  const shapeCode = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
  const textCode = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
}
