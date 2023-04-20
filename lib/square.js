const Shapes = require("./shapes.js");

class Square extends Shapes {
  constructor(text, textColor, shapeType, shapeColor) {
    super(text, textColor, shapeType, shapeColor);
  }

  renderCode() {
    let shapeCode = `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>`;
    let textCode = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = Square;
