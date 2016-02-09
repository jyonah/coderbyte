function LetterCount(str) {
  var strArr = str.split(" ");
  var result = "";
  var mostRepeat = 0;
  var letter = "";

  for(var i = 0; i < strArr.length; i++){
    var thisWord = strArr[i];
    console.log(thisWord);

    for(var x = 0; x <thisWord.length; x++){
      if(thisWord[x] !== letter){
        var count = 0;
        var pos = thisWord.indexOf(thisWord[x]);
       console.log(pos);
        while (pos !== -1) {
          count++;
          pos = thisWord.indexOf(thisWord[x], pos +1);
          console.log(count + " " + mostRepeat + " " + letter);
        }
        if(count > mostRepeat){
          mostRepeat = count;
          letter = thisWord[x];
          result = thisWord;
        }
      }
    }
  }
  if(mostRepeat === 1){
      result = -1;
  }
  return result;
}

// keep this function call here
LetterCount(readline());   
