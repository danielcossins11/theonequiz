var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

var element = document.getElementById("vanilla_output");
element.innerHTML = "This content generated with vanilla JavaScript";

$("#jquery_output").html("This content generated with jQuery");
//////////////////////////////////////////

function modulus(a, b){
  return a%b;
}
console.log(modulus(10, 3));

function doMath(a, b, func){
  return func(a, b);
}

function add(a, b){
  return a+b;
}

function subtract(a, b){
  return a-b;
}

console.log(doMath(2, 4, add));
console.log(doMath(2, 4, subtract));
/////////////////////////


function sortedPlanets(){
  return Planets.sort();
}
console.log(sortedPlanets());

function reversedPlanets(){
  var newPlanets = [];
  for(var i=0; i<Planets.length; i++){
    newPlanets.push(Planets[i].split("").reverse().join("").split(" ").reverse().join(" "));
  }
  return newPlanets;
}
console.log(reversedPlanets());

function longPlanets(){
  var newPlanets = [];
  for(var i=0; i<Planets.length; i++){
    if(Planets[i].length>6){
      newPlanets.push(Planets[i]);
    }
  }
  return newPlanets;
}
console.log(longPlanets());
/////////////////////////


function getAnimals(){
  $.ajax({
    url: "../data/animals.json"
  })
  .done(function(data) {
    console.log("animals", data.animals);
  });
}
getAnimals();