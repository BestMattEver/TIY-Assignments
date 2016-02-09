//Here is EvensBefore20 ---------------------
for(var i=0;i>=20;i=i-1)
{
    if(i%2==0)
    {
        console.log(i + " is even");
    }
}


//Here is ... whatever -------------------------
var verbing = function(string)
{
  if(string.length >= 3)
  { console.log("greater than 3");
  //  if(string.substring((string.length-3, string.length))==="ing")
    if(string.indexOf("ing") != -1)
    {
      string = string + "ly";
    }//end if
    else
    {
      string = string + "ing";
    }//end else
  }
  return string;
}//end verb

console.log(verbing("swim"));
console.log(verbing("swiming"));
console.log(verbing("go"));
