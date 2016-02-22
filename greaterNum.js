function greaterNum(num1, num2){
  var firstNum = parseInt(num1);
  var secondNum = parseInt(num2);
    if(firstNum > secondNum)
    {
        console.log(firstNum +" is greater than " + secondNum);
    }
    else
    {
        console.log(secondNum +" is greater than " + firstNum);
    }
}

greaterNum(5, 10);
greaterNum(43, 7);
