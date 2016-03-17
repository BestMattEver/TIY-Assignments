function notRepeated(word)
{
    word = word.toLowerCase();
    var wordAry = word.split('');
    console.log(wordAry);

    for(var i=0;i<wordAry.length;i++)
    {
      var tempLetter = wordAry[i];
      wordAry[i]="#";
      if(wordAry.indexOf(tempLetter) === -1)
      {//the letter was not found!
        return tempLetter
        //wordAry[i]=tempLetter; //return the temp letter to its place in the array
        //i=wordAry.length+2; //break us out of the loop
      }//end if
      else
      {//the letter must've been in there somewhere else...
        wordAry[i]=tempLetter;//return the letter to the word and try again.
      }//end else
    }//end for
}

console.log(notRepeated("abacddbec"));
console.log(notRepeated("indian"));
console.log(notRepeated("Banana"));
console.log(notRepeated("I was able ere I saw Elba"));
console.log(notRepeated("taco cat"));
