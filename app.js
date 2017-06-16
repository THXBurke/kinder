'use strict';
///global variables
var totalChildrenPerLocation = 0;
var allChildren = [];
var locations = ['Beach', 'Treehouse', 'Forest'];
var headers = ['Name', 'Beach', 'Treehouse', 'Forest'];
var addChildForm = document.getElementById('addChildForm');
var addChildInfoTable = document.getElementById('addChildInfoTable');

function childTable(){
  var table = document.createElement('table');
  document.body.appendChild(table);
}

function makeHeaderRow() {
  var addChildInfoTable = document.getElementById('addChildInfoTable');
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');

  for (var i = 0; i < headers.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = headers[i];
    tableRow.appendChild(thElement);
  }

  addChildInfoTable.appendChild(tableRow);
};
makeHeaderRow();

//child constructor
function ChildData(name) {
  this.childName = childName;
  locations.push(this);
}
//function to make header of table


//create a row with all Child Data not on DOM yet
ChildData.prototype.generateRow = function() {
  var row = document.createElement('tr');
  var childName = document.createElement('td');
  childName.textContent = this.childName;
  row.appendChild(childName);

  return row;
};

//function to add child to table
function handleChildAdd(event) {

  if (!event.target.childName.value || !event.target.childName.value) {
    return alert('Please fill in the last then first name of child.');
  }

  event.preventDefault();

  var form = event.target;
  var childName = form.childName.value;

  console.log('log of the event object', event);
  console.log('log of the event.target', event.target);
  console.log('log of the event.target.childName', event.target.childName);
  console.log('log of the event.target.childName.value', event.target.childName.value);

  var addChild = new ChildData(childName);
  document.getElementById('addChildInfoTable').appendChild(addChild.generateRow());

  document.getElementById('addChildForm').addEventListener('submit', handleChildAdd);
};

// handleChildAdd();
childTable();

addChildForm.addEventListener('submit', handleChildAdd);
