const Shapes = require("./shapes.js");

class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  renderCode() {
    const shapeCode = `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>`;
    const textCode = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    return { shapeCode, textCode };
  }
}

module.exports = Square;
