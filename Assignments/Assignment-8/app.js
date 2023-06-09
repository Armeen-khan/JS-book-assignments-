// 1.
// function checkCharacterType(character) {
//     const asciiValue = character.charCodeAt(0);
  
//     if (asciiValue >= 48 && asciiValue <= 57) {
//       return "Number";
//     } else if (asciiValue >= 65 && asciiValue <= 90) {
//       return "Uppercase Letter";
//     } else if (asciiValue >= 97 && asciiValue <= 122) {
//       return "Lowercase Letter";
//     } else {
//       return "Unknown";
//     }
//   }
//   const character = prompt("Enter a character: ");
//   const characterType = checkCharacterType(character);
//   alert("The character is:", characterType);
  


// 2.
// function compareIntegers(num1, num2) {
//     if (num1 > num2) {
//       return `The larger number is: ${num1}`;
//     } else if (num2 > num1) {
//       return `The larger number is: ${num2}`;
//     } else {
//       return "Both numbers are equal";
//     }
//   }
//   const number1 = parseInt(prompt("Enter the first number: "));
//   const number2 = parseInt(prompt("Enter the second number: "));
//   const result = compareIntegers(number1, number2);
//   alert(result);



// 3.
// const number = parseFloat(prompt("Enter a number: "));
// if (number > 0) {
//   alert("The number is positive.");
// } else if (number < 0) {
//   alert("The number is negative.");
// } else {
//   alert("The number is zero.");
// }



// 4.
// function isVowel(character) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     const lowercaseCharacter = character.toLowerCase();
  
//     if (vowels.includes(lowercaseCharacter)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   const character = prompt("Enter a character: ");
//   const isVowelResult = isVowel(character);
//   alert(isVowelResult);



// 5.
// const correctPassword = "thisisthepassword321";
// const userPassword = prompt("Enter your Password: ");
// if (userPassword === "") {
//   alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password.");
// } else {
//   alert("Incorrect password.");
// }



// 6.
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   alert(greeting = "Good day")
// } else {
//   alert(greeting = "Good evening")
// }



// 7.
// const timeInput = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm): "));
// let convertedTime;
// if (timeInput >= 0 && timeInput < 1200) {
//   convertedTime = timeInput + "am";
// } else if (timeInput >= 1200 && timeInput < 1300) {
//   convertedTime = (timeInput - 1200) + "pm";
// } else if (timeInput >= 1300 && timeInput <= 2359) {
//   convertedTime = (timeInput - 1200) + "pm";
// } else {
//   convertedTime = "Invalid time";
// }
// alert("The time in 12-hour clock format is:", convertedTime);


  

  