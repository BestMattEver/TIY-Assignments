function pigLatin(word)
{
    var Pigged;
    wordAry =[];
    var firstVowel;

    console.log(word);

    word = word.toLowerCase();
    console.log(word);

    var first = word.substr(0,1);
    console.log(first);

    if(first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u')
    {
        pigged = word+"ay";
    }
    else
    {
       wordAry = word.split("");

       for(var i =0; i<wordAry.length;i++)
        {
            if(wordAry[i] === 'a' || wordAry[i] === 'e' || wordAry[i] === 'i' || wordAry[i] === 'o' || wordAry[i] === 'u')
            {
            firstVowel = i;
            }
        }//end for

        var leadingC = word.substr(0,firstVowel);
        var middleBit = word.substr(firstVowel, word.length);

        pigged = middleBit + leadingC + "ay"
    }//end else


    return pigged;

}//end pigLatin

pigLatin("cheeseburger");
