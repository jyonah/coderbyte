function OffLineMinimum(strArr) {
  var newArr = [];
  var low = 10;
  for(var i = 0; i < strArr.length; i++){
    if(strArr[i] === "E"){
      for(var x = 0; x < i; x++){
        if(strArr[x] < low){
          low = strArr[x];
        }
      }
      newArr.push(low);
      var y = strArr.indexOf(low)
      delete strArr[y];
      low = 10;
    }
  }
  newArr = newArr.toString();
  return newArr;
}

// keep this function call here
OffLineMinimum(readline());  
