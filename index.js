#! /usr/bin/env Node
import inquirer from "inquirer";
let balance = 100000;
let myPin = 2108;
let pinAns = await inquirer.prompt([{
        name: "pinCode",
        message: "Please Enter Your Pin Code!!",
        type: "number"
    },]);
if (pinAns.pinCode === myPin) {
    console.log("Correct Pin Code!!");
    let actionans = await inquirer.prompt([{
            name: "action",
            message: "Please Select any one of these!!!",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        },]);
    if (actionans.action === "Withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Please enter Amount You want To withdraw",
                type: "number"
            },]);
        if (amountAns.amount <= balance) {
            balance -= amountAns.amount;
            console.log(` Your Remaining Balance is ${balance}`);
        }
        else {
            console.log("Insufficient Balance!!!");
        }
    }
    else if (actionans.action === "Check Balance") {
        console.log(`Your Balance is ${balance}`);
    }
}
else {
    console.log("Please Enter Correct Pin!!!");
}
