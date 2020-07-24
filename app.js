//! Get dependencies
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//! Render function's components to make team html and output to output folder
// Use the path nodejs package to set OUTPUT_DIR var to be based on the directory at the time
const OUTPUT_DIR = path.resolve(__dirname, "output");
// Combine dynamic OUTPUT_DIR var with output file "team.html" to use in rendering the final HTML
const outputPath = path.join(OUTPUT_DIR, "team.html");

//! Get dependency for render function to generate the HTML to use in the final team.html output
const render = require("./lib/htmlRenderer");

//! Create aysc write file variable set to util.promisify
// const writeFileAsync = util.promisify(fs.writeFile);

//! employees array variable to push new inquirer prompted objects into
const employees = [];

//! Questions Array for inquirer prompt
const questions = [
  {
    type: "list",
    name: "role",
    message: "What Type of Project Team Member would you like to add?",
    choices: ["Manager", "Engineer", "Intern", ""],
  },
  {
    type: "input",
    name: "name", // prompt a simple input for team member name
    message: "Please enter the team member's name.",
  },
  {
    type: "input",
    name: "email", // prompt a simple input for email
    message: "Please enter the team members's email.",
  },
  {
    type: "input",
    name: "id", // prompt a simple input for email
    message: "Enter your team member's id.",
  },
  {
    type: "input",
    name: "officeNumber", // prompt a simple input for phone number
    message: "Please enter the team Manager's office phone number.",
    when: function (answers) {
      return answers.role === "Manager";
    },
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
    type: "input",
    name: "github",
    message: "Please enter the Engineer's GitHub username.",
    when: function (answers) {
      return answers.role === "Engineer";
    },
  },
  {
    type: "input",
    name: "school",
    message: "Please enter the Intern's School or University Name.",
    when: function (answers) {
      return answers.role === "Intern";
    },
  },
  {
    type: "confirm",
    name: "askAgain",
    message: "Would you like to add another Team Member?",
    // default: true,
  },
];

//! Function to prompt user via CLI using inquirer & generate new team members; then
//! when done, render HTML and write it to team.html file in output directory
function promptUser() {
  // Run inquirer using the previously questions array above
  inquirer
    .prompt(questions)
    // Once the questions complete...
    .then((answers) => {
      // If role selected is Manager...
      if (answers.role == "Manager") {
        // ...then create a new Manager instance...
        let empManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        // ... and push the new Manager class instance to the employees array...
        employees.push(empManager);
      }
      // If the role selected is Engineer...
      if (answers.role == "Engineer") {
        // ...Create new Engineer instance...
        let empEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        // ...Push new Engineer to employees array...
        employees.push(empEngineer);
      }
      // If the role selected is Intern...
      if (answers.role == "Intern") {
        // ...then create a new Intern instance...
        let empIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        // push the new Integer class instance to the employees array...
        employees.push(empIntern);
      }
      // if the askAgain answers are "true" (user indicated they wanted to add another member)
      if (answers.askAgain) {
        // ...then rerun the promptUser function
        promptUser();
        // if askAgain answer is "false" (user indicated no more team members to add)
      } else {
        // ...then show the user a console message that the team is being generated, ...
        console.log("Generating your team...");
        // ...then create and set teamHTML variable to the HTML output from the render() function, ...
        let teamHTML = render(employees);
        // ...then write the HTML in teamHTML variable to ./output/team.html ...
        fs.writeFile(outputPath, teamHTML, function (err) {
          // ... and catch the error if there is one ...
          if (err) {
            return console.log(err);
          }
          // ... finally show a confirmation message that the HTML file is complete and ready for review.
          console.log("Done! Find your team.html file in the /output directory.");
        });
      }
    });
}

//! Kickoff function to run on launch of the index.js file
async function init() {
  try {
    // run the inquirer promptUser function
    const answers = await promptUser();
  } catch (err) {
    // try..catch to stop script and catch any errors should they occur.
    console.log(err);
  }
}

//! Call the kickoff init() function on opening the app.js file.
init();
