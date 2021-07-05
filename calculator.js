const readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt("Please enter the first number:");
var secondNum = readlineSync.questionInt("Please enter the second number:");
var calcOperator = readlineSync.question("Please enter your operation: add/sub/mult/div:");
function myCalc (num1, num2, enteredOperator){

function additionFunc(num1, num2){
    return num1 + num2;
}
function subtractionFunc(num1, num2){
    return num1 - num2;
}
function multiplicationFunc(num1, num2){
    return num1 * num2;
}
function divisionFunc(num1, num2){
    return num1 / num2;
}
    if (enteredOperator == "add"){
        console.log("The sum of two numbers is : " + additionFunc(num1, num2));
    }
    else if (enteredOperator == "sub"){
        console.log("The remainder of two numbers is : " + subtractionFunc(num1, num2));
    }
    else  if (enteredOperator == "mult"){
        console.log("The sum of two numbers is : " + multiplicationFunc(num1, num2));
    }
    else  if (enteredOperator == "div"){
        console.log("The remainder of two numbers is : " + divisionFunc(num1, num2));
    }
    else
    {
        console.log("invalid operation");
    }
       
}
myCalc(firstNum, secondNum, calcOperator);