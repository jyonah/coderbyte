function LookSaySequence(num) {
  num = num.toString();
  var actNum = num[0];
  var actItr = 0;
  var nexNum = "";
  for(var i = 0; i <= num.length; i++){
    if(num[i] === actNum){
      actItr += 1;
    }else{
      nexNum += actItr;
      nexNum += actNum;
      actNum = num[i];
      actItr = 1;
    }
  }
  return parseInt(nexNum);
}

// keep this function call here
LookSaySequence(readline());    
