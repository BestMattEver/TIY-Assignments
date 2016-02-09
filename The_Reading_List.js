var list=[]; //the reading list itself. probably going to end up an array of obejcts. but who knows?! non typed languages man...

//this is my object contstructor. it can make new books and AUTOMATICALLY adds them to the reading list called list
function BookInList(called, author, read)
{
  //both title and name seem to be reserved words. im not risking it.
  //the title of the book is 'called' as in:"the book is called x"
  this.called = called;
  this.author = author;
  this.read = read;

  list.push(this);

  this.haveIRead = function()
  {
    if(read)
    {
      console.log("you've read " + this.called + " by " + this.author);
    }
    else
    {
      console.log("you still need to read " + this.called + " by " + this.author);
    }
  }//end haveIRead
}//end constructor

var dune = new BookInList("Dune", "Frank Herbert", false);
var newsun = new BookInList("The Book of The New Sun", "Gene Wolfe", false);
var disposessed = new BookInList("The Disposessed", "Ursula k. Legiun", true);
var neuromancer = new BookInList("Neuromancer", "William Gibson", true);
var destination = new BookInList("The Stars My Destination", "Alfred Bester", false);
var foundation = new BookInList("The Foundation Trilogy", "Isaac Asimov", true);

for(var p=0;p<=list.length-1; p++)
{
  list[p].haveIRead();
}
