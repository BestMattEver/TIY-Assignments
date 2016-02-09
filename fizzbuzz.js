//this is the code to add all multiples of 3 and 5 below 1000
var fizzbuzz = function()
{
    var total =0;
    for(var i =0;i<100;i++)
    {
        if((i%3===0)&&(i%5===0))
        {
           console.log("FIZZBUZZ");
        }
        else if(i%5===0)
        {
          console.log("Buzz");
        }
        else if(i%3===0)
        {
          console.log("Fizz");
        }
        else {
        {
          console.log(i);
        }
        }
    }
    return total;
}

console.log(fizzbuzz());
