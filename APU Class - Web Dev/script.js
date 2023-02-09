// create console log

console.log("Hello World!");

// create mouse hover

// Mouse hover can be created using the mouseover and mouseout events in JavaScript.

// Example:

// HTML
<div id="hoverDiv">Hover over me!</div>

// JavaScript
let hoverDiv = document.getElementById("hoverDiv");

hoverDiv.addEventListener("mouseover", function(){
    hoverDiv.style.backgroundColor = "red";
});

hoverDiv.addEventListener("mouseout", function(){
    hoverDiv.style.backgroundColor = "white";
});