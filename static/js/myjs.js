// silly js demo

function alertInfoIcon() {
  var result = "<span class='fa fa-info-circle'></span>&nbsp;alert-info";
  document.getElementById("toInfo").innerHTML = result; 
  document.getElementById("myButton").style.backgroundColor = "#d9edf7";
  document.getElementById("myButton").style.color = "#3a87ad";
  document.getElementById("myButton").style.borderColor = "#bce8f1";
}

function alertInfo() {
  document.getElementById("myButton").style.backgroundColor = "#d9edf7";
  document.getElementById("myButton").style.color = "#3a87ad";
  document.getElementById("myButton").style.borderColor = "#bce8f1";
}

function alertWarning() {
  document.getElementById("myButton").style.backgroundColor = "#fcf8e3";
  document.getElementById("myButton").style.color = "#8a6d3b";
  document.getElementById("myButton").style.borderColor = "#faebcc";
}

function alertSuccess() {
  document.getElementById("myButton").style.backgroundColor = "#dff0d8";
  document.getElementById("myButton").style.color = "#3c763d";
  document.getElementById("myButton").style.borderColor = "#d6e9c6";
}

function alertDanger() {
  document.getElementById("myButton").style.backgroundColor = "#f2dede";
  document.getElementById("myButton").style.color = "#b94a48";
  document.getElementById("myButton").style.borderColor = "#eed3d7";
}