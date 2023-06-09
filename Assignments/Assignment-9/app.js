// 1.
// const studentNames = [];



// 2.
// const studentNames = new Array();



// 3.
// const stringsArray = ["Hey", "Universe", "Hello", "everyone"];



// 4.
// const numbersArray = [102, 102, 103, 104, 105];



// 5.
// const booleanArray = [true, false,];



// 6.
// const mixedArray = [5, "Hey", true, [2, 3, 4], { name: "Armeen", age: 19 }];



// 7.
// const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PHD"];
// document.write("<h3>Qualifications:</h3>");
// for (let i = 0; i < qualifications.length; i++) {
//   document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }



// 8.
// const studentNames = ["Ali", "Usman", "Saad"];
// const scores = [320, 420, 380];
// for (let i = 0; i < studentNames.length; i++) {
//   const studentName = studentNames[i];
//   const score = scores[i];
//   const percentage = (score / 500) * 100;
  
//   document.write(`Score of ${studentName} is ${score}. Percentage: ${percentage}%`);
// }



// 9.
// const colorNames = ["Red", "Green", "Blue"];

// document.write("<h3>Original Array:</h3>");
// document.write(colorNames.join(", ") + "<br>");

// const colorToAddAtBeginning = prompt("Enter a color to add at the beginning:");
// colorNames.unshift(colorToAddAtBeginning);

// document.write("<h3>Array after adding color at the beginning:</h3>");
// document.write(colorNames.join(", ") + "<br>");

// const colorToAddAtEnd = prompt("Enter a color to add at the end:");
// colorNames.push(colorToAddAtEnd);

// document.write("<h3>Array after adding color at the end:</h3>");
// document.write(colorNames.join(", ") + "<br>");

// colorNames.unshift("Purple", "Yellow");

// document.write("<h3>Array after adding two colors at the beginning:</h3>");
// document.write(colorNames.join(", ") + "<br>");

// colorNames.shift();

// document.write("<h3>Array after deleting the first color:</h3>");
// document.write(colorNames.join(", ") + "<br>");

// colorNames.pop();

// document.write("<h3>Array after deleting the last color:</h3>");
// document.write(colorNames.join(", ") + "<br>");

// const indexToAddColor = parseInt(prompt("Enter the index to add a color:"));
// const colorToAddAtIndex = prompt("Enter the color to add at the index:");
// colorNames.splice(indexToAddColor, 0, colorToAddAtIndex);

// document.write("<h3>Array after adding color at the desired index:</h3>");
// document.write(colorNames.join(", ") + "<br>");

// const indexToDeleteFrom = parseInt(prompt("Enter the index to delete color(s):"));
// const numColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colorNames.splice(indexToDeleteFrom, numColorsToDelete);

// document.write("<h3>Array after deleting color(s) from the desired index:</h3>");
// document.write(colorNames.join(", ") + "<br>");




// 10.
// const scores1 = [320, 272, 493, 268, 191, 377];
// const scores = [320, 272, 493, 268, 191, 377];
// scores.sort(function(a, b) {
//   return a - b;
// });
// document.write("Scores of Students: ", scores1, "<br>");
// document.write("Ordered Scores of Students:", scores);



// 11.
// const cities = ["Karachi", "Lahore", "Peshawar", "Islamabad", "Quetta"];
// const selectedCities = [];
// selectedCities.push(cities[1], cities[3], cities[4]);
// document.write("Cities: ", cities, "<br>")
// document.write("Selected Cities:", selectedCities);



// 12.
// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");
// document.write("Array: ",arr, "<br>");
// document.write("String: ", singleString);



// 13.
// var fifoArray = [];
// fifoArray.push("Keyboard");
// fifoArray.push("Mouse");
// fifoArray.push("Printer");
// fifoArray.push("Moniter");

// document.write("Devices: ",fifoArray, "<br>");
// document.write("Out:", "<br>", fifoArray.shift(), "<br>");
// document.write("Out:", "<br>", fifoArray.shift(), "<br>");
// document.write("Out:", "<br>", fifoArray.shift(), "<br>");
// document.write("Out:", "<br>", fifoArray.shift(), "<br>");



// 14.
// var lifoArray = [];
// lifoArray.push("Sofa");
// lifoArray.push("Vase");
// lifoArray.push("Chair");
// lifoArray.push("Table")
// document.write("Array: ", lifoArray, "<br>")
// document.write("OUT: ", "<br>",lifoArray.pop(),"<br>");
// document.write("OUT: ", "<br>",lifoArray.pop(),"<br>");
// document.write("OUT: ", "<br>",lifoArray.pop(),"<br>");
// document.write("OUT: ", "<br>",lifoArray.pop(),"<br>");


// 15.
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");

// for (var i = 0; i < manufacturers.length; i++) {
//   document.write("<option>" + manufacturers[i] + "</option>");
// }

// document.write("</select>");
















