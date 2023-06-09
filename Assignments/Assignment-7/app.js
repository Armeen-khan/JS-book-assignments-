// 1.

// var cityName = prompt("Enter a city name:");
// if (cityName.toLowerCase() === "karachi") {
//   alert("Welcome to the city of lights");
// }



// 2.
// var gender = prompt("Enter your gender (male/female):");
// if (gender.toLowerCase() === "male") {
//  alert("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//   alert("Good Morning Ma'am.");
// } else {
//   alert("Good Morning!");
// }



// 3.
// var signalColor = prompt("Enter the color of the traffic signal (red/yellow/green):");
// if (signalColor.toLowerCase() === "red") {
//   alert("Must Stop");
// } else if (signalColor.toLowerCase() === "yellow") {
//   alert("Ready to move");
// } else if (signalColor.toLowerCase() === "green") {
//   alert("Move now");
// } else {
//   alert("Invalid signal color");
// }


// 4.
// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in liters:"));
// if (remainingFuel < 0.25) {
//   alert("Please refill the fuel in your car");
// } else {
//   alert("Fuel level is sufficient");
// }


// 5.
// ................................


// 6.
// var marks1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
// var marks2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
// var marks3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));
// var percentage = ((marks1 + marks2 + marks3) / (totalMarks * 3)) * 100;
// var grade, remarks;
// if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else {
//   grade = "Fail";
//   remarks = "Sorry";
// }
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + (marks1 + marks2 + marks3) + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%" + "<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");



// 7.
// var secretNumber = Math.floor(Math.random() * 4) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//   alert("Close enough to the correct answer");
// } else {
//       alert("Incorrect guess");
// }




// 8.
// var number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//   alert("The number is divisible by 3");
// } else {
//   alert("The number is not divisible by 3");
// }




// 9.
// var number = parseInt(prompt("Enter a number:"));
// if (number % 2 === 0) {
//   alert("The number is even");
// } else {
//   alert("The number is odd");
// }



// 10.
// var temperature = parseFloat(prompt("Enter the temperature:"));
// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today's weather is so Cool.");
// } else {
//   alert("The temperature is below 10 degrees.");
// }



// 11.
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// var result;
// if (operation === "+") {
//   result = num1 + num2;
// } else if (operation === "-") {
//   result = num1 - num2;
// } else if (operation === "*") {
//   result = num1 * num2;
// } else if (operation === "/") {
//   result = num1 / num2;
// } else if (operation === "%") {
//   result = num1 % num2;
// } else {
//   alert("Invalid operation");
//   return;
// }
// alert("Result: " + result);











