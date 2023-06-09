// 1.
// function power(a, b) {
//     let result = Math.pow(a, b);
//     return result;
//   }
//   let result = power(2, 3); 
//   console.log(result); 




// 2
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return ("This Year is Leap Year");
//     } else {
//       return ("This Year is not a Leap Year");
//     }
//   }
//   let year =prompt("Enter any Year:")
//   let result = isLeapYear(year);
//   alert(result);





// 3.
// function calculateTriangleArea(a, b, c) {
//     let s = calculateSemiPerimeter(a, b, c);
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
//   }
  
//   function calculateSemiPerimeter(a, b, c) {
//     let s = (a + b + c) / 2;
//     return s;
//   }
//   let sideA = 5;
//   let sideB = 6;
//   let sideC = 7;
  
//   let area = calculateTriangleArea(sideA, sideB, sideC);
//   console.log(area); 
//   function calculateTriangleArea(a, b, c) {
//     let s = (a + b + c) / 2;
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
//   }
      






// 4.
// var marks1 = prompt("Enter Marks1:");
// var marks2 = prompt("Enter Marks2:");
// var marks3 = prompt("Enter Marks3:");
// function calculateAverage(marks1, marks2, marks3) {
//     let sum = marks1 + marks2 + marks3;
//     let average = sum / 3;
//     return average;
//   }
  
//   function calculatePercentage(marks1, marks2, marks3) {
//     let totalMarks = 300; 
//     let obtainedMarks = marks1 + marks2 + marks3;
//     let percentage = (obtainedMarks / totalMarks) * 100;
//     return percentage;
//   }
  
//   function mainFunction(marks1, marks2, marks3) {
//     let average = calculateAverage(marks1, marks2, marks3);
//     let percentage = calculatePercentage(marks1, marks2, marks3);
  
//     document.write("Average marks: " + average + "<br>");
//     document.write("Percentage: " + percentage + "%");
//   }
  
//   mainFunction(marks1,marks2,marks3);






// 5.
// function indexOfCustom(string, character) {
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === character) {
//       return i;
//     }
//   }
//   return -1;
// }
// const inputString = 'Hello, world!';
// const searchCharacter = 'o';

// const index = indexOfCustom(inputString, searchCharacter);
// console.log(index);







// 6.
// function removeVowels(sentence) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let result = '';

//   for (let i = 0; i < sentence.length; i++) {
//     const currentChar = sentence[i].toLowerCase();
//     if (!vowels.includes(currentChar)) {
//       result += sentence[i];
//     }
//   }

//   return result;
// }
// const sentence = 'This is a simple sentence';
// const modifiedSentence = removeVowels(sentence);
// console.log(modifiedSentence);










// 7.
// function countSuccessiveVowels(text) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (let i = 0; i < text.length - 1; i++) {
//     const currentChar = text[i].toLowerCase();
//     const nextChar = text[i + 1].toLowerCase();

//     switch (currentChar) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         if (vowels.includes(nextChar)) {
//           count++;
//         }
//         break;
//       default:
//         break;
//     }
//   }

//   return count;
// }
// const text = "Pleases read this application and give me gratuity";
// const occurrences = countSuccessiveVowels(text);
// console.log(occurrences);









// 8.
// function convertToMeters(distanceInKm) {
//   return distanceInKm * 1000;
// }
// function convertToFeet(distanceInKm) {
//   return distanceInKm * 3280.84;
// }
// function convertToInches(distanceInKm) {
//   return distanceInKm * 39370.1;
// }
// function convertToCentimeters(distanceInKm) {
//   return distanceInKm * 100000;
// }
// function printDistanceConversions(distanceInKm) {
//   const distanceInMeters = convertToMeters(distanceInKm);
//   const distanceInFeet = convertToFeet(distanceInKm);
//   const distanceInInches = convertToInches(distanceInKm);
//   const distanceInCentimeters = convertToCentimeters(distanceInKm);

//   console.log(`Distance: ${distanceInKm} km`);
//   console.log(`Distance in meters: ${distanceInMeters} m`);
//   console.log(`Distance in feet: ${distanceInFeet} ft`);
//   console.log(`Distance in inches: ${distanceInInches} in`);
//   console.log(`Distance in centimeters: ${distanceInCentimeters} cm`);
// }
// const distanceInKm = 100;
// printDistanceConversions(distanceInKm);








// 9.
// function calculateOvertimePay(hoursWorked) {
//   const regularHours = 40; 
//   const overtimeRate = 12.00;  

//   let overtimeHours = 0;
//   let overtimePay = 0;

//   if (hoursWorked > regularHours) {
//     overtimeHours = hoursWorked - regularHours;
//     overtimePay = overtimeHours * overtimeRate;
//   }

//   return overtimePay;
// }

// const hoursWorked = 45;
// const overtimePay = calculateOvertimePay(hoursWorked);
// console.log("Overtime pay: Rs. " + overtimePay.toFixed(2));





// // 10.
// function calculateCurrencyNotes(amount) {
//   const denomination100 = Math.floor(amount);
//   amount -= denomination100;

//   const denomination50 = Math.floor(amount / 0.5);
//   amount -= denomination50 * 0.5;

//   const denomination10 = Math.floor(amount / 0.1);
//   const result = `Denomination 100: ${denomination100}\nDenomination 50: ${denomination50}\nDenomination 10: ${denomination10}`;
//   alert(result);
// }

// const amountInHundreds = prompt("Enter the amount to be withdrawn in hundreds:");
// calculateCurrencyNotes(amountInHundreds);





































































































  

























        