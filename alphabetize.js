function alphabetize(word){
   word = word.toLowerCase();
   var aryWord = word.split("");
   aryWord.sort();
   return (aryWord.join(""));
}

console.log(alphabetize("thequickbrowndogjumpedoverthelazyfox"));
console.log(alphabetize("Webmaster"));
console.log(alphabetize("I have a loveley bunch of coconuts!"));
