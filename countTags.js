function countTags(tag)
{
  var wholePage = $("html").html();
  var count =0;
  while(wholePage.indexOf(tag) != -1)//while the indexof can still find the tag
  {
    count++;
    wholePage =  wholePage.subStr(wholePage.indexOf(tag)+1, wholePage.length);
  }

  console.log("the " + tag + "appears " + count + "times in this page.");
}//end counttags
