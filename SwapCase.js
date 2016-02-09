function SwapCase(str) {
  var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for(var i = 0; i < str.length; i++){
    if(abc.indexOf(str[i].toLowerCase()) !== -1){
      if(str[i] === str[i].toUpperCase()){
        str = str.substring(0,i) + str[i].toLowerCase() + str.substring(i+1,str.length);
      }else if(str[i] === str[i].toLowerCase()){
        str = str.substring(0,i) + str[i].toUpperCase() + str.substring(i+1,str.length);
      }
    }
  }
  return str;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline()); 
