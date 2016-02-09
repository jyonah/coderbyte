function BinaryConverter(str) {
  var val = 0;
  for(var i = 0; i < str.length; i++){
    if(str[str.length-1-i] === "1"){
      val += Math.pow(2, i);
    }
  }
  return val;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
BinaryConverter(readline());  
