'use strict'
///global variables
var childArray = [];
var totalChildren = 0;
var locationsArray = ['Beach', "Treehouse", "Forest"];


var addChildInfo = document.getElementById('addChildInfo');
//var staffLocation = document.getElementById('addStaffLocation');


function DailyData(childName, location, staff) {
  this.childName = childName;
  this.location = location;
  this.staff = staff;
}

this.render = function() {
  var rowElement = document.createElement('tr');
  var dataElement = document.createElement('td');
  dataElement.textContent = this.childName;
  dataElement.setAttribute('class', 'childNameTable');
  rowElement.appendChild(dataElement);
}















//   if(document.getElementById('radio1beach').click === true) {
//     console.log('beach');
//   }else if(document.getElementById('radio1treehouse').click === true) {
//     console.log('treehouse');
//   } else if (document.getElementById('radio1forest').click === true) {
//     console.log('forest');
//   } else {
//     //console.log('no location selected');
//   }
// }
//
// function uncheck() {
//     document.getElementById('radio1beach').click === false;
// }
//
// window.onload = function() {
//
//         var child1 = document.getElementById('radio1beach');
//         var child2 = document.getElementById('radio2beach');
//         var child3 = document.getElementById('radio3beach');
//
//         child1.onclick = handler;
//         child2.onclick = handler;
//         child3.onclick = handler;
//
//     }
//
//     function handler() {
//         console.log('clicked');
//     }
