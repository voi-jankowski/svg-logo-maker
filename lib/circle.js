const Shapes = require("./shapes.js");

class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  //   Create a function to build shape specific lines of SVG code.
  renderCode() {
    const shapeCode = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    const textCode = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    return { shapeCode, textCode };
  }
}

module.exports = Circle;
