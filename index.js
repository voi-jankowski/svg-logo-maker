const inquirer = require("inquirer");
const { createSVG } = require("./lib/create-svg");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "text",
    message:
      "Please choose text for your logo. It can be up to 3 characters long.",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Please choose the color of your text. It can be a color keyword or a hexadecimal number.",
  },
  {
    type: "list",
    name: "shape",
    message: "Select the shape of your logo.",
    choices: ["triangle", "square", "circle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Please choose the color of your chosen shape. It can be a color keyword or a hexadecimal number.",
  },
];
