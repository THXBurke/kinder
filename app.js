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
function ChildDailyData(name) {
  this.name = name;
}

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

//form will push child data into the makeChildRow
function makeChildRow() {
  var tableRow = document.createElement('tr');
  var tdElement = document.createElement('td');
  for (var child = 0; child < childArray.length; child++) {
    tableRow = document.createElement('tr');
    tdElement = document.createElement('td');
    tdElement.textContent = childArray[child].name;
    tableRow.appendChild(tdElement);
    addChildInfoTable.appendChild(tableRow);
  }
}
makeChildRow();

function handleChildDataSubmit(event) {
  //prevent reload when submitted
  event.preventDefault();

  var inputChildData = event.target.name.value;

  var childAlreadyEntered = false;
  for (var i = 0; i < childArray.length; i++) {
    if (inputChildData === childArray[i].name) {
      childArray[i].name = inputChildData;
      childAlreadyEntered = true;
    }
  }
  if (childAlreadyEntered === false) {
    var addChild = new ChildDailyData(inputChildData);
    console.log('new child data entered', inputChildData, childArray);
  }

  event.target.name.value = null;

  addChildInfoTable.textContent = '';
}

function handleDeleteChild() {
  event.preventDefault();
  var inputDeleteChild = event.target.deleteChildName.value.toLowerCase();

  for (var i = 0; i < childArray.length; i++) {
    if(inputDeleteChild === childArray[i].name.toLowerCase());
    childArray.splice(i,1);
  }
}

event.target.deleteChildName.value = null;
addChildInfoTable.textContent = '';
handleChildDataSubmit();
handleDeleteChild();
makeHeaderRow();
makeChildRow();


addChildForm.addEventListener('submit', handleChildDataSubmit);
deleteChildName.addEventListener('submit', handleDeleteChild);
