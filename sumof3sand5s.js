//this is the code to add all multiples of 3 and 5 below 1000
var fizzpop = function()
{
    var total =0;
    for(var i =0;i<1000;i++)
    {
        if((i%3===0)||(i%5===0))
        {   console.log(i);
            total = total + i;
        }
        else
        {
            //nm
        }
    }
    return total;
}

console.log(fizzpop());

//to make this run on a website with visible output. replace console.log() with document.write()
