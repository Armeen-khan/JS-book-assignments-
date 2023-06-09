// 1./ 2.
// var link = document.createElement('a');
// link.href = '#';
// link.textContent = 'Mobile Phone Lookup';
// link.addEventListener('click', function() {
//   alert('Link clicked!');
// });
// document.body.appendChild(link);
// var imageUrls = ['https://www.zdnet.com/a/img/resize/8dd22e666205dfda6dc8d9c191933ef81b75133d/2022/10/06/a2137a60-5064-48f9-babf-a4ad7890b64c/samsung-galaxy-z-fold-4.jpg?auto=webp&fit=crop&height=900&width=1200', 'https://thenamal.com/wp-content/uploads/2022/10/Xiaomi-Redmi-Note-12-750x430.png', 'https://s.yimg.com/uu/api/res/1.2/xY2vjyN1czb2Eqla6fsKsw--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-10/2d0d3a62-44e3-11ed-bb2d-e6572a9c20b7.cf.jpg', 'https://bgr.com/wp-content/uploads/2022/06/rsz_adobestock_304491417.jpg?quality=82&strip=all&resize=1400,1050'];
// var container = document.createElement('div');
// container.style.display = 'flex'; 
// container.style.flexDirection = 'row'; 
// container.style.alignItems = 'center';
// imageUrls.forEach(function(url) {
//   var img = document.createElement('img');
//   img.src = url;
//   img.classList.add('image');
//   img.style.width = '200px';
//   img.style.height = '150px'
//   img.addEventListener('click', function() {
//     alert('Thanks for Purchasing a Phone.');
//   });
//   container.appendChild(img);
// });
// document.body.appendChild(container);






// 3.
// var studentRecords = [
//     { id: 1, name: 'Ali Ahmed', class: 10 },
//     { id: 2, name: 'Usman Ali', class: 10 },
//     { id: 3, name: 'Aitesam Khan', class: 10 },
//   ];
  
//   var table = document.createElement('table');
//   var thead = document.createElement('thead');
//   var headerRow = document.createElement('tr');
//   var headers = ['Index', 'Name', 'Class'];
  
//   headers.forEach(function(header) {
//     var th = document.createElement('th');
//     th.textContent = header;
//     headerRow.appendChild(th);
//   });
  
//   thead.appendChild(headerRow);
//   table.appendChild(thead);
  
//   var tbody = document.createElement('tbody');
  
//   studentRecords.forEach(function(student) {
//     var row = document.createElement('tr');
  
//     var idCell = document.createElement('td');
//     idCell.textContent = student.id;
//     row.appendChild(idCell);
  
//     var nameCell = document.createElement('td');
//     nameCell.textContent = student.name;
//     row.appendChild(nameCell);
  
//     var ageCell = document.createElement('td');
//     ageCell.textContent = student.class;
//     row.appendChild(ageCell);
  
//     var actionCell = document.createElement('td');
//     var deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.addEventListener('click', function() {
//       row.remove();
//     });
//     actionCell.appendChild(deleteBtn);
//     row.appendChild(actionCell);
  
//     tbody.appendChild(row);
//   });
  
//   table.appendChild(tbody);
//   document.body.appendChild(table);







// 4.
// document.write("<strong>" + "Picture Switch!" + "</strong>" + "<br>")
// var image = new Image();
// image.src = 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
// image.style.width = '800px';
// image.style.height = '600px';

// var originalSrc = 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
// var secondImageSrc = 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
// image.addEventListener('mouseover', function() {
//   image.src = secondImageSrc; 
// });

// image.addEventListener('mouseout', function() {
//   image.src = originalSrc;
// });

// document.body.appendChild(image);





// 5.
// var counterElement = document.createElement('h1');
// document.body.appendChild(counterElement);
// var counterValueElement = document.createElement('span');
// counterValueElement.textContent = '0';
// counterElement.appendChild(counterValueElement);

// var increaseBtn = document.createElement('button');
// increaseBtn.textContent = 'Increase';
// document.body.appendChild(increaseBtn);
// var decreaseBtn = document.createElement('button');
// decreaseBtn.textContent = 'Decrease';
// document.body.appendChild(decreaseBtn);
// var counter = 0;
// function updateCounter() {
//   counterValueElement.textContent = counter;
// }
// increaseBtn.addEventListener('click', function() {
//   counter++;
//   updateCounter();
// });
// decreaseBtn.addEventListener('click', function() {
//   counter--;
//   updateCounter();
// });









































































































































