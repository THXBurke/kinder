'use strict';
///global variables
var totalChildrenPerLocation = 0;
var allChildren = [];
var locations = ['Beach', 'Treehouse', 'Forest'];
var headers = ['Name', 'Beach', 'Treehouse', 'Forest'];
var addChildForm = document.getElementById('addChildForm');
var addChildInfoTable = document.getElementById('addChildInfoTable');

//child constructor
function ChildData(name) {
  this.childName = childName;
  locations.push(this);
}
//function to make header of table
function makeHeaderRow() {
  var addChildInfoTable = document.getElementById('addChildInfoTable');
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');

  for (var i = 0; i < headers.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = headers[i];
    tableRow.appendChild(thElement);
  }

  addChildInfoTable.appendChild(tableRow);;
}

makeHeaderRow();

//function to add child to table
function handleChildAdd(event) {

  if (!event.target.childName.value || !event.target.childName.value) {
    return alert('Please fill in first and last name of child.');
  }
  console.log('log of the event object', event);
  console.log('log of the event.target', event.target);
  console.log('log of the event.target.childName', event.target.childName);
  console.log('log of the event.target.childName.value', event.target.childName.value);

  var newChildName = event.target.childName.value;


  new ChildData(childName);

  event.target.childName.value = null;

  document.getElementById('childName').addEventListener('submit', function(event){
    event.preventDefault();
  });
};


// handleChildAdd();
addChildForm.addEventListener('submit', handleChildAdd);
