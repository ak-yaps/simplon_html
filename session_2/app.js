/*jshint esversion: 6*/
/*global document, window, console*/


var moduleShapeShifter = (function() {
  "use strict";
  window.addEventListener("DOMContentLoaded", function listen() {
    const circle = document.getElementById("circle");
    console.log(circle);
    const size = circle.querySelector(".size");
    console.log(size);

    document.getElementById("shape_shifter").oninput = function shiftShape() {
      const val = this.value;
      circle.style.height = val + 'px';
      circle.style.width = val + 'px';
      size.textContent = val;
    };
  });
}());
