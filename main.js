#! /usr/bin/env node
//above line is called a shebang, It tells us the opareting system to run it with node js
//import inquirer module, which is a command line interface for Node.js
import inquirer from "inquirer";
//install chalk
import chalk from "chalk";
//Declare a condtant `answer` and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.yellow("Enter your sentence to count the word:")
    }
]);
const words = answers.Sentence.trim().split(" ");
// "publishConfig": {
//   "access": "public"
// },
//print the array of words to tge console
console.log(words);
//print the word count of the sentence to the console
console.log(chalk.blueBright(`\nYour sentence word counter is ${words.length}\n`));
