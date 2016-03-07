function LetterCapitalize(str)
{
    var strArray = str.split(' ');
    for(var i =0; i<strArray.length;i++)
    {
        var letter = strArray[i].substr(0,1);
        letter = letter.toUpperCase();
        strArray[i] = letter + strArray[i].substr(1,strArray.length);
       // strArray[i] = strArray[i].splice(0,1,letter);
    }
    console.log(strArray.join(" "));

}

LetterCapitalize("the quick brown fox jumped over the lazy dog");
