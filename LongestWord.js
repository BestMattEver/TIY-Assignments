function longestCountry(countryArray){//returns the longest string in an array of strings.
    var longest ="";
    for(var i =0;i<countryArray.length;i++)
    {
        if(longest.length < countryArray[i].length)//is the current country name longer than the longest so far?
        {
            longest = countryArray[i];//if yes, overwrite the longest so far with the current country name
        }
    }

    return longest;
}

console.log(longestCountry(["Austraila", "Germany", "United States of America", "SUPER LONG FICTIONAL COUNTRY NAME"]));
