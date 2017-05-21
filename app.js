// 'use strict'
///global variables
var childArray = [];


function checkChildLocation() {

  if(document.getElementById('radio1beach').checked === true) {
    document.write('beach');
  }else if(document.getElementById('radio1treehouse').checked === true) {
    console.log('treehouse');
  } else if (document.getElementById('radio1forest').checked === true) {
    console.log('forest');
  } else {
    //console.log('no location selected');
  }
}

function uncheck() {
    document.getElementById('radio1beach').checked === false;
}
