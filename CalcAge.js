//--------This calculates an age based on the current year and a year of birth---
function calculateAge (curYear, birthYear)
{
  var posAge = curYear-birthYear;
  console.log("you are either " + posAge + " or " + (posAge-1));
}

calculateAge(2016, 1986);
calculateAge(2015, 1564); //last year shakespeare was...
calculateAge(1963, 1917); //jfk was 46 when he died.

//----------Object practice--------
console.log("");

var GoodFood = {
  title: "Shredded BBQ Chicken",
  servings: "10",
  ingredients: ["Chicken Breasts","BBQ Sauce", "Slow Cooker"]
}

console.log(GoodFood.title);
console.log(GoodFood.servings);
console.log(GoodFood.ingredients);
