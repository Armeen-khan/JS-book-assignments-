// 1.
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;

// alert("Hello " + "\n" +  fullName + "! Welcome!");




// 2.
// var favoriteModel = prompt("Enter your favorite mobile phone model:");
// var inputLength = favoriteModel.length;
// document.write("My Favourite Phone is " + favoriteModel + "<br>");
// document.write("Lenght Of String: " + inputLength)



// 3.
// var word = "Pakistani";
// var index = word.indexOf("n");

// document.write("String: " + word + "<br>");
// document.write("The index of 'n' : " + index);


// 4.
// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");

// document.write("String: " + word + "<br>");
// document.write("The last index of 'l' : " + lastIndex);



// 5.
// var word= "Pakistan";
// var character= word.charAt(3);
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + character);



// 6.
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);

// alert("Hello " + "\n" + fullName + "! Welcome!");




// 7.
// var word = "Hyderabad";
// var newWord = word.replace("Hyder", "Islam");
// document.write("City: " + word + "<br>");
// document.write("After replacement: " + newWord);



// 8.
// var message = "“Ali and Sami are best friends. They play cricket and football together.”" ;
// var newword = message.replace(/and/g, "&")
// document.write("Message: " + message + "<br>");
// document.write("After replacement: " + newword);


// 9.
// var str = "472";
// var num = Number(str);
// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof str + "<br>");
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num + "<br>");


// 10.
// var userInput = prompt("Enter your input:");
// var capitalizedInput = userInput.toUpperCase();
// document.write("User input: " + userInput + "<br>");
// document.write("Upper Case: " + capitalizedInput);


// 11.
// const userinput = prompt("Enter your Input:")
// const titleCase = userinput.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// document.write("User Input:", userinput, "<br>");
// document.write("Title Case:", titleCase);


// 12.
// var num = 35.36;
// var numString = num.toString().replace(".", "");
// document.write("Number: " + num + "<br>");
// document.write("Result: " + numString);


// 13.
// var username = prompt("Enter a username:");
// if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
//   alert("Invalid username! Please enter a valid username without special symbols [@ . , !]");
//   username = prompt("Enter a valid username:");
// }
// alert("Username: " + username);



// 14.
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:").toLowerCase(); 
// var index = A.indexOf(userInput);
// if (index !== -1) {
//     document.write(userInput + " is available at index " + index + ".");
// } else {
//         document.write(userInput + " is not found in the list.");
// }



// 15.
// var password = prompt("Enter a password:");
// var alphabetRegex = /[a-zA-Z]/;
// var numberRegex = /[0-9]/;
// if (
//   password.length >= 6 &&
//   alphabetRegex.test(password) &&
//   numberRegex.test(password) &&
//   isNaN(password[0])
// ) {
//   document.write("Password is valid.");
// } else {
//   while (
//     password.length < 6 ||
//     !alphabetRegex.test(password) ||
//     !numberRegex.test(password) ||
//     !isNaN(password[0])
//   ) {
//     document.write("Enter a valid password:<br>");
//     password = prompt("Password must contain alphabets and numbers, must not start with a number, and be at least 6 characters long.\nEnter a password:");
//   }
//   document.write("Password is valid.");
// }





// 16.
// var university = "University of Karachi";
// var ARRAy = university.split("");
// for(var i=0; i<ARRAy.length;i++){
//     document.write(ARRAy[i]+ '<br>')
// }



// 17.
// var userInput = "Pakistan";
// var lastCharacter = userInput.charAt(userInput.length - 1);

// document.write("User input: " + userInput + "<br>");
// document.write("The last character of input: " + lastCharacter);



// 18.
// var sentence = "The quick brown fox jumps over the lazy dog";
// var wordToSearch = "the";
// var regex = new RegExp("\\b" + wordToSearch + "\\b", "gi");

// var count = (sentence.match(regex) || []).length;
// document.write("TEXT: " + sentence + "<br>");
// document.write("There are '" + count + "'occurances of the word " + wordToSearch);








