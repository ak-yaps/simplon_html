/*jshint esversion: 6*/
/*global document, window, console*/
// EVAL AYABA

var evalJs = (function evalJs() {
  "use strict";
  const init = function init() {

    let btn = document.getElementById('btn');
    let divRes = document.getElementById('res');
    let wrap = document.getElementById('wrap');
    let wrapChildren = Array.from(wrap.children);
    let wrapChildrenLength = wrap.children.length;
    let allEl = Array.from(wrap.getElementsByTagName('*'));
    console.log(allEl);

    btn.addEventListener("click", function () {
      for (let i = 0; i < wrapChildren.length; i++) {
        if (wrapChildren[i].childElementCount > 0) {
          wrapChildrenLength += wrapChildren[i].childElementCount;
        }
      }
      return divRes.innerHTML = wrapChildrenLength;
    });

allEl.forEach(e => {
  e.addEventListener("click", ()=> {
    e.classList.toggle("active");
  })
})

  };

  window.addEventListener("DOMContentLoaded", init);
}());