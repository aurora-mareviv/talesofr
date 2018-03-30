// silly js demo

function alertInfoIcon(myID) {
  var result = "<span class='fa fa-info-circle'></span>&nbsp;alert-info";
  document.getElementById("toInfo").innerHTML = result; 
  document.getElementById(myID).style.backgroundColor = "#d9edf7";
  document.getElementById(myID).style.color = "#3a87ad";
  document.getElementById(myID).style.borderColor = "#bce8f1";
}

function alertInfo(myID) {
  document.getElementById(myID).style.backgroundColor = "#d9edf7";
  document.getElementById(myID).style.color = "#3a87ad";
  document.getElementById(myID).style.borderColor = "#bce8f1";
}

function alertWarning(myID) {
  document.getElementById(myID).style.backgroundColor = "#fcf8e3";
  document.getElementById(myID).style.color = "#8a6d3b";
  document.getElementById(myID).style.borderColor = "#faebcc";
}

function alertSuccess(myID) {
  document.getElementById(myID).style.backgroundColor = "#dff0d8";
  document.getElementById(myID).style.color = "#3c763d";
  document.getElementById(myID).style.borderColor = "#d6e9c6";
}

function alertDanger(myID) {
  document.getElementById(myID).style.backgroundColor = "#f2dede";
  document.getElementById(myID).style.color = "#b94a48";
  document.getElementById(myID).style.borderColor = "#eed3d7";
}