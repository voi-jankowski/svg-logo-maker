const inquirer = require("inquirer");
const { createSVG } = require("./create-svg.js");
const fs = require("fs");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { validateColor } = require("./validate-color.js");

// Create the array of prompts for user input
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

// create the main function that awaits for the input from the inquirer
const run = async () => {
  try {
    const inquirerResult = await inquirer.prompt(questions);

    // Trim the chosen text
    inquirerResult["text"] = inquirerResult.text.trim();
    // Change the color names to lower case
    inquirerResult["textColor"] = inquirerResult.textColor.toLowerCase();
    inquirerResult["shapeColor"] = inquirerResult.shapeColor.toLowerCase();
    const { text, textColor, shape, shapeColor } = inquirerResult;

    // Check if the text for the logo is 3 characters max.
    if (inquirerResult.text.length === 0 || inquirerResult.text.length > 4) {
      console.log(
        `Make sure the text is no longer than 3 characters! Try again!`
      );
      return run();
    }
    // Check if the color chosen for the text is a valid color name or a valid hexadecimal number.
    if (!validateColor(inquirerResult.textColor)) {
      console.log(
        `The color chosen for the text is not valid. Please try again!`
      );
      return run();
    }
    // Check if the color chosen for the shape is a valid color name or a valid hexadecimal number.
    if (!validateColor(inquirerResult.shapeColor)) {
      console.log(
        `The color chosen for the shape is not valid. Please try again!`
      );
      return run();
    }
    // If all the input has been provided write a svg file in the output folder with a name created from the logo text.
    if (text && textColor && shape && shapeColor) {
      const createContent = await createSVG(inquirerResult);

      await writeFile(
        join(__dirname, `..`, `output`, `${text}-logo.svg`),
        createContent
      );
      // If successfull, log that the fila has been created.
      console.log(`Generated ${text}-logo.svg`);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { run };
