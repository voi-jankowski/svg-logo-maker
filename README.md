# SVG Logo Maker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

SVG Logo Maker has been created to help generate simple logos for projects based on the user input.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)
- [Links](#links)

## Installation

1. Clone the repo

   ```sh
   git clone https://github.com/voi-jankowski/svg-logo-maker.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Start with the below command in your terminal:

```sh
node index.js
```

You will be presented with a series of questions about your desired logo. After answering each one press Enter to go to the next question.

![First prompts.](./assets/images/readme-2.png)

When you are asked about the text of your logo you can enter up to three characters. When you are prompted for the color of your text, you can enter a valic color name or a hexadecimal number.

![License prompts.](./assets/images/readme-3.png)

When you are asked about the shape of your logo, you can select from the list of three different shapes.

![Answering with text editor.](./assets/images/readme-4.png)

Finally answer the question about the desired color for your shape with a valic color name or a hexadecimal number.

After that your new logo will be created as the svg file with the name made up of <span style="color: pink;">'your logo's text'</span>`-logo.svg` and saved in `output` folder.

![Location of the file created.](./assets/images/readme-5.png)

The folder `examples` contains sample SVG files generated using the application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the [MIT License](https://opensource.org/licenses/MIT). See LICENSE.txt for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add Your Feature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tests

There are two test suites created for the application: `validate-color.test.js` and `shapes-test.js`.

To perform the tests type in the command line:

```sh
  npm run test
```

Once the tests are completed you will be presented with the report on the results.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Questions

If you have any questions about the project please contact me through [my Github](https://github.com/voi-jankowski) or email me at [voi.jankowski@gmail.com](mailto:voi.jankowski@gmail.com).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Credits

The project was created with the help of:

- [slikts](https://gist.github.com/slikts/cfa5bb0ad340b6e01dd711f20a419aec) and his array of all the CSS Color names.
- [GeeksForGeeks](https://www.geeksforgeeks.org/how-to-validate-hexadecimal-color-code-using-regular-expression/) - provided the method to validate Hexadecimal Color Code using Regular Expression.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## LInks

The location of the project [on GitHub](https://github.com/voi-jankowski/svg-logo-maker).

The walkthrough video can be accessed on [here](https://drive.google.com/file/d/15-OeCr41gL0kB4s6pmHtnzjDfuzGc28C/view).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
