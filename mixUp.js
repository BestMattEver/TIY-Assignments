function mixUp(str1, str2)
{
    var short1 = str1.substr(0,2);
    var short2 = str2.substr(0,2);
    //console.log(short1);
    //console.log(short2);

    var long1 = str1.substr(2,str1.length-1);
    var long2 = str2.substr(2,str2.length-1);
    //console.log(long1);

    return(short2+long1 + " " + short1+long2);
}

console.log("mix, pod =");
console.log(mixUp("mix", "pod"));

console.log("doggy, kitty =");
console.log(mixUp("doggy", "kitty"));

console.log("dog, dinner =");
console.log(mixUp("dog", "dinner"));

console.log("sauce, bowl =");
console.log(mixUp("sauce", "bowl"));
