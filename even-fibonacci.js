//this adds all even fibbonaci numbers below 4 million
// Note: works only in repl.it
var countTo4mil = function()
{
  console.log("This works right?");
  var fibTotal =0;//the sum of all fibonacci's
  var curFibNum =1;//this represents the current fibonacci number
  var lastFibNum =1;//this represents the fibonacci number that came directly before
  var tempFibNum =0;//this is just a placeholder

while(curFibNum <= 4000000)//apparently you can do this with an if.
  {//but really, you can do the whole thing with recursion so who's to say...
    console.log(curFibNum + ", ");

    if(curFibNum%2===0)
    {//if the fib number is even, add it to the total.
      fibTotal += curFibNum;
    }
    //the next 3 lines finds the next fibonacci number in the sequence.
    //and sets lastFibNum to the last fibbonaci number and curFibNum to the next Fibonacci number
    tempFibNum = curFibNum + lastFibNum;
    lastFibNum = curFibNum;
    curFibNum = tempFibNum;

  }//end while
  return fibTotal
}//end count to 4 mil

console.log("the total count is " + countTo4mil());

//-----------Below this line is the code that should work on an actual webpage--------------
/*this adds all even fibbonaci numbers below 4 million
var countTo4mil = function()
{
  //console.log("This works right?");
  var fibTotal =0;
  var curFibNum =1;
  var lastFibNum =1;
  var tempFibNum =0;//this is just a placeholder

while(curFibNum <= 4000000)//apparently you can do this with an if.
  {//but really, you can do the whole thing with recursion so who's to say...
    //console.log(curFibNum + ", ");
    document.write(curFibNum +", ");

    if(curFibNum%2===0)
    {//if the fib number is even, add it to the total.
      fibTotal += curFibNum;
    }

    tempFibNum = curFibNum + lastFibNum;

    lastFibNum = curFibNum;
    curFibNum = tempFibNum;

  }//end while
  return fibTotal
}//end count to 4 mil

//console.log("the total count is " + countTo4mil());
document.write("the total count is " + countTo4mil()); */
