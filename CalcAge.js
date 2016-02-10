function calculateAge (curYear, birthYear)
{
  var posAge = curYear-birthYear;
  console.log("you are either " + posAge + " or " + (posAge-1));
}

calculateAge(2016, 1986);
calculateAge(2015, 1564); //last year shakespeare was...
calculateAge(1963, 1917); //jfk was 46 when he died.
