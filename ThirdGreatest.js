function ThirdGreatest(strArr) {
  var first = "";
  var second = "";
  var third = "";
  for(var i = 0; i < strArr.length; i++){
    if(strArr[i].length > first.length){
      third = second;
      second = first;
      first = strArr[i];
    }else if(strArr[i].length === first.length){
      if(strArr[i].length === second.length){
        third = strArr[i];
      }else{
        third = second;
        second = strArr[i];
      }
    }else if(strArr[i].length > second.length){
      third = second;
      second = strArr[i]
    }else if(strArr[i].length === second.length){
      if(strArr[i].length > third.length){
        third = strArr[i]
      }
    }else if(strArr[i].length > third.length){
      third = strArr[i];
    }
  }
  return third;
}

// keep this function call here
ThirdGreatest(readline()); 
