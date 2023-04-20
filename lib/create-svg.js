const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");

function createSVG() {
  // Select the code according to the selection of the shape

  return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

    ${shapeCode}

    ${textCode}

    </svg>`;
}

module.exports = { createSVG };
