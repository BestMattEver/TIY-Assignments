function assignGrade(num)
{
    if(num >= 90)
    {console.log("A");}
    else if((num <= 89) && (num >=80))
    {console.log("B");}
    else if ((num <= 79) && (num >=70))
    {console.log("C");}
    else if((num <=69) &&(num>=60))
    {console.lof("D");}
    else
    {
        console.log("you fail.");
    }
}

assignGrade(83);
assignGrade(99);
assignGrade(33);
