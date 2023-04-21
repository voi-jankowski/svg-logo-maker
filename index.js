const inquirer = require("inquirer");
const { createSVG } = require("./lib/create-svg");
const fs = require("fs");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { validateColor } = require("./lib/validate-color")
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


const run = async () => {
  try {
    const inquirerResult = await inquirer.prompt(questions);

    console.log(inquirerResult);

    const { text, textColor, shape, shapeColor } = inquirerResult;
    if (inquirerResult.text.length === 0 || inquirerResult.text.length > 4) {
      console.log(
        `Make sure the text is no longer than 3 characters! Try again!`
      );
      return run();
    }

    // if ( validateColor(inquirerResult))

    if (text && textColor && shape && shapeColor) {
      const createContent = await createSVG(inquirerResult);

      await writeFile(
        join(__dirname, `output`, `${text}-logo.svg`),
        createContent
      );

      console.log(`Created ${text}-logo.svg`);
    }
  } catch (error) {
    console.log(error);
  }
};
run();
