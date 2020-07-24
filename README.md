# CLI Team Listings Template Engine &nbsp; ![](https://img.shields.io/badge/-Node.js-blue) ![](https://img.shields.io/badge/-ES6-red)

## Description

This application makes use of the command-line and node.js to create a CLI tool that prompts for user input to create a team listings/roster and generates and HTML file that displays different information per team member based on role (e.g. manager, engineer, intern, etc.). The application also leverages automated unit testing via the nodejs Jest package to dynamically verify code passes essential tests for functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)

## Installation

1. Download or clone this project and save it to your machine.
2. From Bash, Terminal, or whichever CLI you use, navigate to the directory where you've saved th
3. Install the package.json with `npm install` or simply `npm i`.
4. Run the Generator from the command line by typing `node app.js`
5. Create your Team Listings HTML file! After answering all the prompts, your new `team.html` will be output in the `/output/` folder of the project directory.
6. Use the `team.html` locally or on a server for readily accessible team info and contact information.

## Usage

The below video provides an overview of the CLI Team Listings Generator, the code involved and how it works, as well as a demo of the generator in action.

[![OVERVIEW: HOW TO USE THE CLI TEAM LISTINGS GENERATOR](https://chartroomcreative.com/gitassets/CLI-Team-Listings-generator.jpg)](https://chartroomcreative.com/gitassets/CLI-Team-Listings-generator.mp4)

## License

Copyright (c) 2020 Sean McGinnis, Chart Room Creative LLC.

This project is provided under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.
2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.

## Contributing

To contribute, please follow the [Contributor Covenant](https://www.contributor-covenant.org/).

## Tests

Be sure to test the application after application. Jest-based automated tests have been developed for this particular project for class and sub-class object creation for the purpose of generating the final HTML output.

Run the tests from the command line by navigating to the directory in which you saved or cloned the repository, and type `npm test`.

Additional context and instruction, including execution of the automated test that were created, can be reviewed in the video provided above under [usage](#usage).

## Questions

For questions, please contact [sean@chartroomcreative.com](mailto:sean@chartroomcreative.com).

See srmchartroom(https://github.com/srmchartroom) for additional repositories and contact information.

## Credits

This project was developed without additioal collaborators/contributors, but did leverage documentation on npm and Github for the fs, path, and inquirer packages. This project also leveraged some code derived from project(s) during the Full Stack Developer bootcamp provided at UNC Chapel Hill/Trilogy Educaiton. Such code was augmented, edited, revised, and significantly expended in order to create this application. If you'd like to contribute to this project, please see the [contributing](#contributing) section above.
