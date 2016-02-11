/*function calculateSupply(amtPerDay, age)
{
  var lifetime = 80.1; //average life expectancy of a human male in 2016


  var amtPerWeek = amtPerDay * 7;
  var amtPerMonth = amtPerWeek * 4;
  var amtPerYear = amtPerMonth * 12;

  var amtPerLife = amtPerYear * 80.1;

  var amtperRestLife = (lifetime - age) * amtPerYear;

  console.log("To keep you flush with your favorite snack at all times you'll need:");
  console.log(amtPerWeek + " every week." );
  console.log(amtPerMonth + " every month." );
  console.log(amtPerYear + " every year." );
  console.log("and a full lifetime of snacking will require: " + amtPerLife);
  //console.log(amtperRestLife);
  console.log("But! you've already used up " + age + " years not eating this snack. so you'll only need " + amtperRestLife + " of the delacacy to last you until you die.");
}

calculateSupply(3, 25);
calculateSupply(3, 70);
calculateSupply(20, 4);*/

//--------------------------------END SNACK THING ---------------------------------------------------------

var favMovie = {
  title: "The Fifth Element",
  duration: "127 minutes",
  stars: ["Bruce Willis", "Milla Jojovitch", "Chris Rock"]
}

function printMovie(movie)
{
  var stars ="";
  for(var i=0;i<movie.stars.length;i++)
  {
    stars = stars + (movie.stars[i] + ", ");
  }
  console.log(movie.title + " lasts " + movie.duration + " and stars: " + stars);
}

printMovie(favMovie);
