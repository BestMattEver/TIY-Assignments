function fixStart(word)
{
    var letter = word.substr(0,1);
    var charArray = word.split("");

    //console.log(letter);

    for(var i =1;i<charArray.length;i++)
    {
        if(charArray[i] === letter)
        {
            charArray[i] = "*";
        }
        else
        {
            //do nothing.
        }
    }

    var newWord = charArray.join("");
    return newWord;
}

console.log(fixStart("bubbles"));
console.log(fixStart("googly"));
console.log(fixStart("turtle"));
