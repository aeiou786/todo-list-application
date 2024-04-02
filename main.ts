#! /usr/bin/env node

import inquirer from "inquirer";

let todolist = [];

let conditions = true;

console.log("welcome to code with mohan - todo-list application");

while(conditions){

    let addTask = await inquirer.prompt (
        [
        {
            name: "task",
            type: "input",
            message: "enter your new task",
        }
        ]
    );
    todolist.push(addTask.task)

    console.log(`${addTask.task} task added in todo - list `);
    let addMoreTask = await inquirer.prompt (
        [
            {
                name: 'addmore',
                type: "confirm",
                message: 'do you want to add more task ?',
                default: "false",
            }
        ]
    );

    conditions = addMoreTask.addmore

}

console.log("your updated todo-list" , todolist);
