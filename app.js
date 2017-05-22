'use strict'
///global variables
var childArray = [];
var totalChildrenPerLocation = 0;
var locationsArray = ['Beach', 'Treehouse', 'Forest'];
// var staffArray = 0;
var addChildForm = document.getElementById('addChildForm');
var addChildInfoTable = document.getElementById('addChildInfoTable');
//var staffLocation = document.getElementById('addStaffLocation');

//DailyData constructor
function ChildDailyData(childName, location, staff) {
  this.childName = childName;
  this.location = location;
  this.staff = staff;
}

var child1 = new ChildDailyData('Child1', 'Beach', 'Staff1');

//end of DailyData constructor

function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');
  tableRow.appendChild(thElement);
  for(var i = 0; i < locationsArray.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = locationsArray[i];
    tableRow.appendChild(thElement);
  }
  tableRow = document.createElement('tr');
  tableRow.textContent = 'Staff';
  addChildInfoTable.appendChild(tableRow);
}

function makeChildRow() {
  var tableRow;
  var tdElement;
  for(var child = 0; child < childArray.length; child++) {
    tableRow = document.createElement('tr');
    tdElement = document.createElement('td');
    tdElement.textContent = childArray[child].locationsArray[i];
    tableRow.appendChild(tdElement);
  }
}

function handleChildDataSubmit(event) {
  //prevent reload upon submit
  event.preventDefault();

  var inputChildData = event.target.addChildForm;
  console.log('new child data submitted');
}
  makeHeaderRow();
  makeChildRow();
addChildForm.addEventListener('submit', handleChildDataSubmit);

//
// function makeStaffRow() {
//   var rowElement = document.createElement('tr');
//   var dataElement = document.createElement('td');
//   dataElement.textContent = 'Staff';
//   dataElement.setAttribute('class', 'addChildInfo');
//   rowElement.appendChild(dataElement);
//   for( var i = 0; i < locationsArray.length; i++) {
//     for(var j = 0; j < childArray.length; j++) {
//
//     }
//   }
// }

//Event handling for form will prob need a prevent default here

// makeHeaderRow(addChildInfo);
// makeStaffRow();





  //
  //
  //
  // if(document.getElementById('beach').click === true) {
  //   console.log('beach');
  // }else if(document.getElementById('treehouse').click === true) {
  //   console.log('treehouse');
  // } else if (document.getElementById('forest').click === true) {
  //   console.log('forest');
  // } else {
  //   //console.log('no location selected');
  // }
