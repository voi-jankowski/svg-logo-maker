const Shapes = require("./shapes.js");

class Triangle extends Shapes {
  constructor(text, textColor, shapeType, shapeColor) {
    super(text, textColor, shapeType, shapeColor);
  }
  renderCode() {
    let shapeCode = `<polygon points="50, 187 250, 187 150, 13" fill="${this.shapeColor}"/>`;
    let textCode = `  <text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
  }
}

module.exports = Triangle;
