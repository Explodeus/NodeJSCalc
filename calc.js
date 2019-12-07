const operations = require('./operations.js');
const readline = require('readline');

var express = require('express');

var calc = express();

  
  

// Use readline to create command line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//welcome screen
console.log(`
Calc.js

_____________________
|  _________________  |
| | VSokha       0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|

Welcome to the Node.js Calculator app!
Version: 1.0.0.

Usage: The user will be prompted for two numbers,
then asked to select their operation of choice.
`);

//message to require input from user
rl.question('Enter the first number: ', (x) => {
  rl.question('Enter the second number: ', (y) => {
    rl.question(`
Please select from the following options:

[1] Addition (+)
[2] Subtraction (-)
[3] Multiplication (*)
[4] Division (/)

Enter your choice: `, (choice) => {
  if (!operations.validateNumbers(x, y)) {
    console.log('Only numbers are allowed! Please restart the program.');
  } else {
    switch (choice) {
      case '1':
        console.log(`The sum of ${x} and ${y} is ${operations.add(x, y)}.`);
        break;
      case '2':
        console.log(`The difference of ${x} and ${y} is ${operations.subtract(x, y)}.`);
        break;
      case '3':
        console.log(`The product of ${x} and ${y} is ${operations.multiply(x, y)}.`);
        break;
      default:
        console.log('Please restart the program and select a number between 1 and 4.');
        break;
    }
  }
      rl.close();
    });
  });
});


module.exports = calc;
