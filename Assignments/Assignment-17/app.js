// 1.Create a signup form and display form data in your web 
// page on submission
// var form = document.getElementById('signupForm');
// var formDataDiv = document.getElementById('formData');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   var name = document.getElementById('name').value;
//   var email = document.getElementById('email').value;
//   var password = document.getElementById('password').value;

//   var formData = "<h2>Form Data:</h2>";
//   formData += "<p><strong>Name:</strong> " + name + "</p>";
//   formData += "<p><strong>Email:</strong> " + email + "</p>";
//   formData += "<p><strong>Password:</strong> " + password + "</p>";

//   formDataDiv.innerHTML = formData;
//   form.reset();
// });








// 2.Suppose in your webpage there is content area in which 
// you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read 
// more” button, full detail of that particular item will be 
// displayed.
// var readMoreBtn = document.getElementById('readMoreBtn');
// var fullDetails = document.getElementById('fullDetails');

// readMoreBtn.addEventListener('click', function() {
//   fullDetails.style.display = 'block';
// });






// 3.In previous assignment you have created a tabular data 
// using javascript. Let’s modify that. Create a form which 
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should 
// be deleted. On click on edit button, a hidden form will 
// appear with the values of that row.

    //   var studentForm = document.getElementById('studentForm');
    // var studentTableBody = document.querySelector('#studentTable tbody');
    // var editForm = document.getElementById('editForm');
    // var saveEditBtn = document.getElementById('saveEditBtn');
    // var cancelEditBtn = document.getElementById('cancelEditBtn');
    
    // studentForm.addEventListener('submit', function(event) {
    //   event.preventDefault();
      
    //   var name = document.getElementById('name').value;
    //   var age = document.getElementById('age').value;
    //   var grade = document.getElementById('grade').value;
      
    //   addStudent(name, age, grade);
    //   studentForm.reset();
    // });
    
    // function addStudent(name, age, grade) {
    //   var row = document.createElement('tr');
      
    //   var nameCell = document.createElement('td');
    //   nameCell.textContent = name;
      
    //   var ageCell = document.createElement('td');
    //   ageCell.textContent = age;
      
    //   var gradeCell = document.createElement('td');
    //   gradeCell.textContent = grade;
      
    //   var actionsCell = document.createElement('td');
      
    //   var deleteButton = document.createElement('button');
    //   deleteButton.textContent = 'Delete';
    //   deleteButton.addEventListener('click', function() {
    //     row.remove();
    //   });
      
    //   var editButton = document.createElement('button');
    //   editButton.textContent = 'Edit';
    //   editButton.addEventListener('click', function() {
    //     showEditForm(row);
    //   });
      
    //   actionsCell.appendChild(deleteButton);
    //   actionsCell.appendChild(editButton);
      
    //   row.appendChild(nameCell);
    //   row.appendChild(ageCell);
    //   row.appendChild(gradeCell);
    //   row.appendChild(actionsCell);
      
    //   studentTableBody.appendChild(row);
    // }
    
    // function showEditForm(row) {
    //   var cells = row.querySelectorAll('td');
    //   var name = cells[0].textContent;
    //   var age = cells[1].textContent;
    //   var grade = cells[2].textContent;
      
    //   document.getElementById('editName').value = name;
    //   document.getElementById('editAge').value = age;
    //   document.getElementById('editGrade').value = grade;
      
    //   editForm.style.display = 'block';
      
    //   saveEditBtn.addEventListener('click', function() {
    //     cells[0].textContent = document.getElementById('editName').value;
    //     cells[1].textContent = document.getElementById('editAge').value;
    //     cells[2].textContent = document.getElementById('editGrade').value;
        
    //     editForm.style.display = 'none';
    //   });
      
    //   cancelEditBtn.addEventListener('click', function() {
    //     editForm.style.display = 'none';
    //   });
    // }
























































  