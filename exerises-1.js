/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort([compareFunction])
//- This function sorts an array according to a compare function. if no compare function is present, it sorts based on unicode order? - this is confusing...
//so, a compare function is just a regular function you define that you write before hand and does the comparison based on some criteria you determine.
var ary = [5,9,1,10,30,70];
console.log(ary.sort());
// since this sorts by unicode value the output is:
//[1,10,30,5,70,9]

// .concat(ary2[])
// this function adds one array, or list of values to the end of another array.
var ary = [5,9,1,10,30,70];
var bry = ["b","c","r","j","o","s"];

console.log(ary.concat(bry));

// .indexOf(element, startlocation)
//- this searches the array for the element provided starting at 'index' and then returns the element's index location in the array. if not in there, it returns -1
var ary = [5,9,1,10,30,70];

console.log(ary.indexOf(10,1)); //returns 3
console.log(ary.indexOf(70)); //returns 5
console.log(ary.indexOf(6000)); //returns -1

// .split(seperator, limit)
//- This finds every instance of the seperator in the string, removes it, and returns the rest of the string as an array broken into elements at the locations where the seperator used to be. if there is no seperator, it returns an array with one element containing the whole string. the limit is an optoinal argument telling it how many times it is allowed to do this operation.

var text ="Mary had a little lamb";

console.log(text.split(" ",10));
//returns the array "[ 'Mary', 'had', 'a', 'little', 'lamb' ]"

// .join(seperator)
// this assigns all elements in an array to a single string. seperator is an optional argument that is inserted between each element.

var text =["Mary", "had", "a", "little", "lamb"];

console.log(text.join("-"));
//returns Mary-had-a-little-lamb

// .pop()
//this function removes the last element in an array and returns it. pretty straight forward.

var text =["Mary", "had", "a", "little", "lamb"];

console.log(text.pop());
//returns 'lamb'

// .push(arg1, arg2 ... argn)
//this method takes n arguments and appends them to the array in the last position. it also returns the new length of the array.

var text =["Mary", "had", "a", "little", "lamb"];

console.log(text.push("and", "an", "ass");
//returns '8' since that would be the new length of text

// .slice(begin, end)
//this function cuts out a portion of an array and returns it as another array.
//note: does not include the 'end' index.

var text =["twikle", "twikle", "little", "Star", "how", "I", "Wonder","what", "you", "are"];
console.log(text.slice(2,4)); //returns [ 'little', 'Star' ]

// .splice(start, deletecount, add1, add2, add3)
//This function seems to be a general array modifying function. it deletes elements from the array. it adds elements to the array. it slices! it dices! it returns an array of all deleted elements!

var text =["twikle", "twikle", "little", "Star", "how", "I", "Wonder","what", "you", "are"];

console.log(text.splice(3,7,"butt")); //returns [ 'Star', 'how', 'I', 'Wonder', 'what', 'you', 'are' ]
console.log(text);//returns [ 'twikle', 'twikle', 'little', 'butt' ]

// .shift()
//this just seems to remove the first element in the array and return it. bruuuutallll.

var text =["twikle", "twikle", "little", "Star", "how", "I", "Wonder","what", "you", "are"];
console.log(text.shift()); //returns ["twinkle"]

// .unshift(element1, element2, ... elementn)
//this seems to add N elements to the start of the array and then return the length of the new array

var text =["little", "star", "how", "I", "wonder", "what", "you", "are"];
console.log(text.unshift("twinkle", "twinkle")); //returns 10, because the array text now includes twinkle twinkle.

// .filter(function)
//this puts all elements of this array that pass unscathed with a value of true through another evaluation function
// you have previously written and have given to .filter into a new array.


// .map(function)
//woahhh... this one creates a new array which is the output of calling a function on every element
//in the old array. saves you time by not making you write a for loop. pretty cooooool!

var nums =[300.5,99.1,102.9,144.7,512,3];
console.log(nums.map(Math.floor));// returns [ 300, 99, 102, 144, 512, 3 ]
