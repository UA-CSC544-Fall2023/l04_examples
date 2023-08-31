////////////////////////////////////////////////////////////////
//
// This javascript example shows a simple d3 data join to build
// a bar chart
//
// Author: Joshua Levine
// Date: August 30, 2023
//
////////////////////////////////////////////////////////////////

let dataArray1 = [2,3,5,7,11,13,17,19,23,29];
let dataArray3 = [2,3,5,7,11];


function setAttrs(selection) {
  selection.attr("x", function(d,i) {
       return i*20;
     })
     .attr("y", d => 400-8*d)
     .attr("width", 15)
     .attr("height", function(d) { return 8*d;})
     .attr("fill", "red")
}


let svg2 = d3.select("#div2")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400)

let rects = svg2.selectAll("rect")
  .data(dataArray1);

rects.enter()
  .append("rect")
  .call(setAttrs) //refactored to use .call() rather than working directly on the selection


