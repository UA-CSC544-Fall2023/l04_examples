////////////////////////////////////////////////////////////////
//
// More complex version of L04 using scales/axes
//
// Author: Joshua Levine
// Date: August 30, 2023
//
////////////////////////////////////////////////////////////////

let dataArray1 = [2,3,5,7,11,13,17,19,23,29];
let dataArray2 = [29,23,19,17,13,11,7,5,3,2];
let dataArray3 = [2,3,5,7,11];

let padding = 50;
let svgWidth = 400;
let svgHeight = 400;

//create the scales
let xScale = d3.scaleLinear().domain([0,10]).range([padding,svgWidth-padding])
let yScale = d3.scaleLinear().domain([0,d3.max(dataArray1)]).range([svgHeight-padding,padding])

//will reuse this for setting attributes
function setAttrs(selection) {
  selection
    .attr("width", function() {
      return 10;
    })
    .attr("x", function(d,i) {
       return xScale(i);
    })
    .attr("height", function(d) {
       return svgHeight-padding-yScale(d); 
    })
    .attr("y", d=>yScale(d))
    .attr("fill", "red")
}
  

let svg2 = d3.select("#div2")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400)

//draw the first set of rects
let rects = svg2.selectAll("rect")
  .data(dataArray1)
  .enter()
  .append("rect")
  .call(setAttrs)

//try out a different data array
rects = rects.data(dataArray2)
   .transition()
   .duration(1000)
   .call(setAttrs)
   .on("end", nextTransition)  //need this to trigger a transition after this one finishes!


//try out a more complicated, different data array

function nextTransition() {
  rects.selection()  //rects is a transition object, pull out it's selection to do a data bind
       .data(dataArray3)
       .join(
          enter => enter.call(setAttrs), 
          update => update.transition().duration(3000).call(setAttrs),
          exit => exit.transition().duration(3000).attr("fill","white").remove()
       )
}


//draw the axes for the scales, note that they use translates to ensure correct positioning
let xAxis = d3.axisBottom().scale(xScale)

svg2.append("g")
   .attr('transform', `translate(0,${svgHeight-padding})`)
   .call(xAxis)

let yAxis = d3.axisLeft().scale(yScale)

svg2.append("g")
   .attr('transform', `translate(${padding},0)`)
   .call(yAxis)



