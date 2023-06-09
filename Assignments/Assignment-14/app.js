// 1.
// function displayCurrentDateTime() {
//     var currentDateTime = new Date();
//     document.write(currentDateTime);
//   }
  
//   displayCurrentDateTime();




// 2.
// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     document.write("Hello, " + fullName + "! Welcome!");
//   }
//     var firstName = "Armeen";
//   var lastName = "Khan";
//   greetUser(firstName, lastName);
  



// 3.
// function addNumbers() {
//     var number1 = parseFloat(prompt("Enter the first number:"));
//     var number2 = parseFloat(prompt("Enter the second number:"));
//     var sum = number1 + number2;
//     return sum;
//   }
//     var result = addNumbers();
//   document.write("The sum is: " + result);




// 4.
// function calculate(num1, num2, operator) {
//     var result;
//     switch (operator) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "*":
//         result = num1 * num2;
//         break;
//       case "/":
//         result = num1 / num2;
//         break;
//       case "%":
//         result = num1 % num2;
//         break;
//       default:
//         return "Invalid operator";
//     }
//     document.write("The result is: " + result);
//   }
//     var number1 = 10;
//   var number2 = 5;
//   var operator = "+";
//   calculate(number1, number2, operator);







// 5.
// function square(number) {
//     var result = number * number;
//     return result;
//   }
//     var num = 5;
//   var squaredNum = square(num);
//   document.write("The square of " + num + " is: " + squaredNum);





// 6.
// function computeFactorial() {
//     var number = parseInt(prompt("Enter a number:"));
    
//     if (isNaN(number) || number < 0) {
//       document.write("Invalid input. Please enter a non-negative number.");
//       return;
//     }
    
//     var factorial = 1;
    
//     for (var i = 2; i <= number; i++) {
//       factorial *= i;
//     }
    
//     document.write("The factorial of " + number + " is: " + factorial);
//   }
//     computeFactorial();






// 7.
// function displayCounting(start, end) {
//     if (start > end) {
//       console.log("Invalid range. The start number should be less than or equal to the end number.");
//       return;
//     }
    
//     for (var i = start; i <= end; i++) {
//       console.log(i);
//     }
//   }
//   var startNumber = 1;
//   var endNumber = 10;
//   displayCounting(startNumber, endNumber);






// 8.
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(side) {
//       return side * side;
//     }
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
    
//     return hypotenuse;
//   }
//   var baseLength = 3;
//   var perpendicularLength = 4;
//   var hypotenuseLength = calculateHypotenuse(baseLength, perpendicularLength);
//   document.write("The hypotenuse length is: " + hypotenuseLength);





// 9.
// function calculateRectangleArea(width, height) {
//     var area = width * height;
//     return area;
//   }
//   var area1 = calculateRectangleArea(5, 10);
//   document.write("The area of the rectangle is: " + area1);







// 10.
// function isPalindrome(str) {
//     var cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
//       var reversedStr = cleanStr.split('').reverse().join('');
//     return cleanStr === reversedStr;
//   }
//     var inputString = "madam";
//   var result = isPalindrome(inputString);
  
//   if (result) {
//     document.write("'" + inputString + "' is a palindrome.");
//   } else {
//     document.write("'" + inputString + "' is not a palindrome.");
//   }





// 11.
// function capitalizeFirstLetter(str) {
//     var words = str.split(' ');
//     var capitalizedWords = [];
  
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//       capitalizedWords.push(capitalizedWord);
//     }
  
//     var result = capitalizedWords.join(' ');
//     return result;
//   }
//     var inputString = 'the quick brown fox';
//   var capitalizedString = capitalizeFirstLetter(inputString);
//   document.write("Original string: " + inputString + "<br>");
//   document.write("Capitalized string: " + capitalizedString + "<br>");




// 12.
// function findLongestWord(str) {
//     var words = str.split(' ');
//     var longestWord = '';
  
//     for (var i = 0; i < words.length; i++) {
//       var currentWord = words[i];
  
//       if (currentWord.length > longestWord.length) {
//         longestWord = currentWord;
//       }
//     }
  
//     return longestWord;
//   }
//   var inputString = 'Web Development Tutorial';
//   var longestWord = findLongestWord(inputString);
//   document.write("Input string: " + inputString + "<br>");
//   document.write("Longest word: " + longestWord);






// 13.
// function countOccurrences(str, letter) {
//     var count = 0;
  
//     for (var i = 0; i < str.length; i++) {
//       if (str.charAt(i) === letter) {
//         count++;
//       }
//     }
  
//     return count;
//   }
//   var inputString = 'JSResourceS.com';
//   var inputLetter = 'o';
//   var occurrenceCount = countOccurrences(inputString, inputLetter);
//   document.write("Input string: " + inputString + "<br>");
//   document.write("Input letter: " + inputLetter + "<br>");
//   document.write("Number of occurrences: " + occurrenceCount);




// 14.
// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference + "<br>");
//   }
  
//   function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     document.write("The area is " + area);
//   }
//   var radius = 5;
//   calcCircumference(radius);
//   calcArea(radius);
  




























  



























  






































  
  






























  
  
  




























  

























   



















































  
  