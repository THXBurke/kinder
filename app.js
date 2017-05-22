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

//child constructor with var child = new ChildDailyData coming through the form
// function ChildDailyData(name) {
//   this.name = name;
// }

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
