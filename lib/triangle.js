const Shapes = require("./shapes.js");

class Triangle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  //   Create a function to build shape specific lines of SVG code.
  renderCode() {
    const shapeCode = `<polygon points="50, 187 250, 187 150, 13" fill="${this.shapeColor}"/>`;
    const textCode = `<text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    return { shapeCode, textCode };
  }
}

module.exports = Triangle;
