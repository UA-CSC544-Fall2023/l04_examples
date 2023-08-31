////////////////////////////////////////////////////////////////
//
// This javascript example shows a very simple scatterplot 
// using Javascript calls
//
// Author: Joshua Levine
// Date: August 30, 2023
//
////////////////////////////////////////////////////////////////

let svg1 = document.createElementNS("http://www.w3.org/2000/svg","svg")
document.querySelector("#div1").appendChild(svg1)

svg1.setAttributeNS(null,"width", 400)
svg1.setAttributeNS(null,"height", 400)


let data = [1,2,3,4,5]
let data2 = data.map(x => Math.random())


for (let i=0; i<data.length; i++) {
  let circle = document.createElementNS("http://www.w3.org/2000/svg","circle")
  circle.setAttributeNS(null,"cx",50*data[i])
  circle.setAttributeNS(null,"cy",Math.round(100+200*data2[i]))
  circle.setAttributeNS(null,"r",10)
  circle.setAttributeNS(null,"fill","black")

  svg1.appendChild(circle)
}
