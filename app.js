'use strict'
///global variables
var childArray = [];
var totalChildrenPerLocation = 0;
var locationsArray = ['Beach', 'Treehouse', 'Forest'];
// var staffArray = 0;
var addChildForm = document.getElementById('addChildForm');
var addChildInfoTable = document.getElementById('addChildInfoTable');
//var staffLocation = document.getElementById('addStaffLocation');

var headerArray = ['Name', 'Beach', 'Treehouse', 'Forest'];

function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');
  for (var i = 0; i < headerArray.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = headerArray[i];
    tableRow.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = headerArray[i];
  addChildInfoTable.appendChild(tableRow);;
}
makeHeaderRow();




// function displayTable() {
//   var container = document.getElementById('container');
//   //create table element
//   var table = document.createElement('table');
//   var tbody = document.createElement('tbody');
//   var thead = document.createElement('thead');
//
//   table.appendChild(thead);
//
// for (var i = 0; i < headerArray.length; i++) {
//   tHead.appendChild(document.createElement('th')).
//   appendChild(document.createTextNode(headerArray[i]));
// }
// //loop array that will push into childArray with form
// displayTable();
// }
