// /*1.Consider you have following code snippet:
//  (Copy it in your HTML file)
//  <div>
//  <h1> DOM </h1>
//  <div id=”form-content” class=”content”>
//  <label for=”first-name”>First Name</label>
//  <input type=”text” id=”first-name” />
//  <label for=”last-name”>Last Name</label>
//  <input type=”text” id=”last-name” />
//  <label for=”email”>Email</label>
//  <input type=”text” id=”email” />
//  </div>
//  <div id=”main-content” class=”content”>
//  <p class=”render”> First Name : Alex</p>
//  <p class=”render” id=”lastName”>Last Name: Bank</p>
//  <p class=”render”> Email : alexbank@example.com</p>
//  <p class=”render”> Country : Pakistan </p>
//  <p class=”render”> contact : +92 300 1234567</p>
//  </div>
//  </div>
//  i. Get element of id “main-content” and assign them in a variable.
//  ii. Display all child elements of “main-content” element.
//  iii. Get all elements of class “render” and show their innerHTML 
//  in browser.
//  iv. Fill input value whose element id first-name using javascript.
//  v. Repeat part iv for id ”last-name” and “email”.*/

//   var mainContent = document.getElementById("main-content");
//   var childElements = mainContent.children;
//   document.write(childElements + "<br>");
//   var renderElements = document.getElementsByClassName("render");
//   for (var i = 0; i < renderElements.length; i++) {
//     document.write(renderElements[i].innerHTML);
//   }
//   var firstNameInput = document.getElementById("first-name");
//   firstNameInput.value = "Armeen";
//   var lastNameInput = document.getElementById("last-name");
//   lastNameInput.value = "Khan";
//   var emailInput = document.getElementById("email");
//   emailInput.value = "armeenisbah378@gmail.com";








// 2./*use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”*/

// var formContent = document.getElementById("form-content");
// var formContentType = formContent.nodeType;
// document.write("Node type of element with id 'form-content': " + formContentType + "<br>");
// var lastName = document.getElementById("lastName");
// var lastNameNodeType = lastName.nodeType;
// var lastNameChildNodeType = lastName.childNodes[0].nodeType;
// document.write("Node type of element with id 'lastName': " + lastNameNodeType + "<br>");
// document.write("Node type of its child node: " + lastNameChildNodeType + "<br>");
// lastName.childNodes[0].nodeValue = "Last Name: Updated";
// var mainContent = document.getElementById("main-content");
// var firstChild = mainContent.firstChild;
// var lastChild = mainContent.lastChild;
// document.write("First child of 'main-content': ", firstChild + "<br>");
// document.write("Last child of 'main-content': ", lastChild + "<br>");
// var lastNameNextSibling = lastName.nextSibling;
// var lastNamePreviousSibling = lastName.previousSibling;
// document.write("Next sibling of 'lastName': ", lastNameNextSibling + "<br>");
// document.write("Previous sibling of 'lastName': ", lastNamePreviousSibling + "<br>");
// var email = document.getElementById("email");
// var emailParentNode = email.parentNode;
// var emailNodeType = email.nodeType;
// document.write("Parent node of 'email': ", emailParentNode + "<br>");
// document.write("Node type of 'email': " + emailNodeType + "<br>");
