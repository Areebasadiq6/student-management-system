#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.blue(" \n\t******** Welcome TO Student Management System *********\n"));
let students = [{ name: "Areeba" }, { name: "sadiq" }];
let teachers = [
    { name: "Miss Tyabba", experience: 3, school: " Graceful public" },
];
let courses = ["Digital Marketing", "Artificial intelligence"];
let newStudents = []; // Array to store new students
async function main(students) {
    do {
        const check = await inquirer.prompt({
            name: "check2",
            type: "list",
            message: chalk.cyan("What do you want to do?"),
            choices: ["Log In", "Create new Student", "Exit"],
        });
        if (check.check2 === "Log In") {
            const check3 = await inquirer.prompt({
                name: "check4",
                type: "input",
                message: chalk.cyan("Enter name:"),
            });
            const enteredName = check3.check4;
            const isNameValidExisting = students.some((student) => student.name === enteredName);
            const isNameValidNew = newStudents.some((student) => student.name === enteredName);
            if (isNameValidExisting || isNameValidNew) {
                console.log(chalk.gray("Log in successful!"));
                const todo = await inquirer.prompt({
                    name: "q1",
                    type: "list",
                    message: chalk.magenta("What do you want to do?"),
                    choices: ["View Teacher", "View Courses", "View Students"],
                });
                if (todo.q1 === "View Teacher") {
                    console.log(teachers);
                }
                if (todo.q1 === "View Courses") {
                    console.log(courses);
                }
                if (todo.q1 === "View Students") {
                    console.log(students.concat(newStudents));
                }
            }
            else {
                console.log(chalk.redBright("Invalid name."));
            }
        }
        if (check.check2 === "Create new Student") {
            let newStudent = await inquirer.prompt({
                type: "input",
                name: "newStudentName",
                message: chalk.cyan("Enter your name:"),
            });
            // Create a new student object
            const newStudentObject = { name: newStudent.newStudentName };
            // Push the new student to the newStudents array
            newStudents.push(newStudentObject);
            console.log(chalk.magentaBright("New student added!"));
        }
        if (check.check2 === "Exit") {
            console.log(chalk.greenBright("Exiting the program."));
            console.log(chalk.yellowBright("\n\t ******** Thanks for using a Student Management System ***********\n"));
            break; // Exit the loop
        }
    } while (true);
}
main(students);
