'use strict';
///global variables
var totalChildrenPerLocation = 0;
var locations = ['Beach', 'Treehouse', 'Forest'];
var headers = ['Name', 'Beach', 'Treehouse', 'Forest'];
var addChildForm = document.getElementById('addChildForm');
var addChildInfoTable = document.getElementById('addChildInfoTable');

//function to make header of table
function makeHeaderRow() {
  var addChildInfoTable = document.getElementById('addChildInfoTable');
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');
  for (var i = 0; i < headers.length; i++) {
    // console.log(i);
    thElement = document.createElement('th');
    thElement.textContent = headers[i];
    tableRow.appendChild(thElement);
  }

  addChildInfoTable.appendChild(tableRow);;
}

makeHeaderRow();

function ChildData(name) {
  this.name = name;
  locations.push(this);
}

new ChildData();

//function to add child to table
function addChildToTable(event) {

  event.preventDefault();
}

addChildForm.addEventListener('submit', addChildToTable);
