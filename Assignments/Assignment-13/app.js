// 1.
    // function displayDateTime() {
    //   var currentDateTime = new Date();
    //   var date = currentDateTime.toLocaleDateString();
    //   var time = currentDateTime.toLocaleTimeString();
      
    //   document.getElementById("datetime").innerHTML = "Current Date: " + date + "<br>Current Time: " + time;
    // }
    // displayDateTime();
    // setInterval(displayDateTime, 1000);
  




    // 2.
    // function alertCurrentMonth() {
    //     var currentDateTime = new Date();
    //     var month = currentDateTime.toLocaleString('default', { month: 'long' });
        
    //     alert("Current Month: " + month);
    //   }
  



    // 3.
    // function alertCurrentDay() {
    //     var currentDateTime = new Date();
    //     var day = currentDateTime.toLocaleString('default', { weekday: 'short' });
        
    //     alert("Today is " + day);
    //   }




    // 4.
    // function checkFunDay() {
    //   var currentDateTime = new Date();
    //   var day = currentDateTime.toLocaleString('default', { weekday: 'long' });
      
    //   if (day === "Saturday" || day === "Sunday") {
    //     alert("It's Fun day");
    //   } else {
    //     alert("It's not Fun day");
    //   }
    // }




    // 5.
    // function checkMonthDays() {
    //     var currentDateTime = new Date();
    //     var date = currentDateTime.getDate();
        
    //     if (date < 16) {
    //       alert("First fifteen days of the month");
    //     } else {
    //       alert("Last days of the month");
    //     }
    //   }





// 6.
// var currentDate = new Date();
// var millisecondsSinceEpoch = currentDate.getTime();
// var minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60));

// document.write("Current date: " + currentDate + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millisecondsSinceEpoch + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + minutesSinceEpoch );





// 7.
// function checkAMorPM() {
//     var currentDateTime = new Date();
//     var hour = currentDateTime.getHours();
    
//     if (hour < 12) {
//       alert("It's AM");
//     } else {
//       alert("It's PM");
//     }
//   }
//   checkAMorPM();





// 8.
// var laterDate = new Date(2020, 11, 31, 0, 0, 0);
// document.write("Later date:", laterDate);




// 9.
// var startingDate = new Date(2015, 5, 18);
// var currentDate = new Date();
// var millisecondsPassed = currentDate - startingDate;
// var daysPassed = Math.floor(millisecondsPassed / (1000 * 60 * 60 * 24));

// alert(daysPassed + " days passed since 1st Ramadan");




// 10.
// function displaySecondsSince2015() {
//     var referenceDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500");
//     var beginningOf2015 = new Date(2015, 0, 1);
    
//     var millisecondsPassed = referenceDate - beginningOf2015;
//     var secondsPassed = Math.floor(millisecondsPassed / 1000);
//     document.write("On referance day " + referenceDate + "<br>");
//     document.write(secondsPassed + " seconds had passed since the beginning of 2015.");
//   }
//   displaySecondsSince2015();





// 11.
// function displayUpdatedDate() {
//     var currentDate = new Date();
//     var currentHours = currentDate.getHours();
//     currentDate.setHours(currentHours + 1);
//     document.write("1 hour ago, it was " + currentDate);
//   }
//   displayUpdatedDate();




// 12.
// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);

// alert("Date reset to 100 years back: " + currentDate);



// 13.
// function calculateBirthYear() {
//     var age = prompt("Please enter your age:");
//         var currentYear = new Date().getFullYear();
//     var birthYear = currentYear - age;
//     document.write("Your age is : " + age + "<br>")
//     document.write("Your birth year is: " + birthYear);
//   }
//   calculateBirthYear();



// 14.
// function generateBill() {
//     var customerName = "Armeen Khan";
//     var currentMonth = "June 2023";
//     var numberOfUnits = 200;
//     var chargesPerUnit = 15.50;
//     var netAmountPayable = numberOfUnits * chargesPerUnit;
//     var latePaymentSurcharge = 100.00;
//     var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
//     netAmountPayable = netAmountPayable.toFixed(2);
//     latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
//     grossAmountPayable = grossAmountPayable.toFixed(2);
//     document.write("<h2>K-Electric Bill</h2>");
//     document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
//     document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
//     document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
//     document.write("<p><strong>Charges per Unit:</strong> $" + chargesPerUnit + "</p>");
//     document.write("<p><strong>Net Amount Payable (within Due Date):</strong> $" + netAmountPayable + "</p>");
//     document.write("<p><strong>Late Payment Surcharge:</strong> $" + latePaymentSurcharge + "</p>");
//     document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> $" + grossAmountPayable + "</p>");
//   }
//   generateBill();
















































































