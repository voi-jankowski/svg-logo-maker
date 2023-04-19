const Shapes = require("./shapes.js");

function Triangle(text, textColor, shapeType, shapeColor) {
  Shapes.call(this, text, textColor, shapeType, shapeColor);
  const shapeCode = `<polygon points="50, 187 250, 187 150, 13" fill="${shapeColor}"/>`;
  const textCode = `  <text x="150" y="170" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    `;
}
