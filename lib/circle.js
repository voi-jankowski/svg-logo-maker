const Shapes = require("./shapes.js");

class Circle extends Shapes {
  constructor(text, textColor, shapeType, shapeColor) {
    super(text, textColor, shapeType, shapeColor);
  }

  renderCode() {
    let shapeCode = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    let textCode = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = Circle;
