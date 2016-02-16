function pluralize(noun, number){
    if(number === 1)
    {
        console.log(number + " " + noun);
    }
    else if((noun==="sheep") || (noun==="geese") || (noun==="mice"))
    {
     console.log(number +" " + noun);
    }
    else if(number!=1)
    {//this also takes into account negative numbers and zero. which i would say as
     //'i have zero dogs' or 'i have -3 dogs' IE: plural
        console.log(number + " " + noun + "s");
    }
    else
    {
        console.log("you done messed up. you're dark sided. try again.");
    }

}

pluralize("dog", 8);
pluralize("kitten", 1);
pluralize("geese", 15);
pluralize("mice", 2);
