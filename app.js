const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// TODO Write code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!)

// prompt user function
// const promptUser = () => {
  
const questions = [
    {
        type: "input",
        name: "name", // prompt a simple input for team member name
        message: "Please enter the team Manager's name.",
    },
    {
        type: "input",
        name: "email", // prompt a simple input for email
        message: "Please enter the team Manager's email.",
      },
      {
        type: "input",
        name: "phone", // prompt a simple input for phone number
        message: "Please enter the team Manager's office phone number.",
        validate: function (value) {
          var pass = value.match(
            /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
          );
          if (pass) {
            return true;
          }

          return "Please enter a valid phone number";
        },
      },
      {
          type: 'confirm',
          name: 'askAgain',
          default: true,
      },
];

function ask() {
    inquirer.prompt(questions).then((answers)) => {
        outputPath.push(answers);
        if (answers.askAgain) {
            ask();
        } else {
            console.log('all done');
        }
    };
}
  
  
  
  
  
//     return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "managerName", // prompt a simple input for github username
//         message: "Please enter the team Manager's name.",
//       },
//       {
//         type: "input",
//         name: "managerEmail", // prompt a simple input for github username
//         message: "Please enter the team Manager's email.",
//       },
//       {
//         type: "input",
//         name: "managerPhone", // prompt a simple input for github username
//         message: "Please enter the team Manager's office phone number.",
//         validate: function (value) {
//           var pass = value.match(
//             /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
//           );
//           if (pass) {
//             return true;
//           }

//           return "Please enter a valid phone number";
//         },
//       },
//     ])
//     .then(() => {
//       inquirer.prompt({
//         type: "list",
//         name: "beverage",
//         message: "And your favorite beverage?",
//         choices: ["Pepsi", "Coke", "7up", "Mountain Dew", "Red Bull"],
//       });
//     });
// };

// console.log("Manager Questions Done.");

// const answersManager = await promptManager();


//! Write code to use inquirer to gather information about the development team members,
//! and to create objects for each team member (using the correct classes as blueprints!)

//! After the user has input all employees desired, call the `render` function (required
//! above) and pass in an array containing all employee objects; the `render` function will
//! generate and return a block of HTML including templated divs for each employee!

//! After you have your html, you're now ready to create an HTML file using the HTML
//! returned from the `render` function. Now write it to a file named `team.html` in the
//! `output` folder. You can use the variable `outputPath` above target this location.
//! Hint: you may need to check if the `output` folder exists and create it if it
//! does not.

//! HINT: each employee type (manager, engineer, or intern) has slightly different
//! information; write your code to ask different questions via inquirer depending on
//! employee type.

//! HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
//! and Intern classes should all extend from a class named Employee; see the directions
//! for further information. Be sure to test out each class and verify it generates an
//! object with the correct structure and methods. This structure will be crucial in order
//! for the provided `render` function to work! ```
