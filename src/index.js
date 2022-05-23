import * as bootstrap from "bootstrap";
import './JS/navbar'

var collapseElementList = [].slice.call(document.querySelectorAll(".collapse"));
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl);
});

document.getElementById("date").innerText = new Date().getFullYear();
