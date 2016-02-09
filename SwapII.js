function SwapII(str) {
  var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var i1 = -1;
  var num1 = "";
  var num2 = "";
  for(var i = 0; i < str.length; i++){
    if(abc.indexOf(str[i].toLowerCase()) !== -1){
      if(str[i] === str[i].toUpperCase()){
        str = str.substring(0,i) + str[i].toLowerCase() + str.substring(i+1,str.length);
      }else if(str[i] === str[i].toLowerCase()){
        str = str.substring(0,i) + str[i].toUpperCase() + str.substring(i+1,str.length);
      }
    }
  }

  for(var x = 0; x < str.length; x++){
    if(abc.indexOf(str[x].toLowerCase()) === -1 && nums.indexOf(str[x]) === -1){
      i1 = -1;
    }
    if(nums.indexOf(str[x]) !== -1){
      if(i1 === -1){
        i1 = x;
        num1 = str[x];
        if(nums.indexOf(str[x+1]) !== -1){
            i1 = -1;
        }
      }else{
        num2 = str[x];
        str = str.substring(0,i1) + num2 + str.substring(i1+1,x) + num1 + str.substring(x+1,str.length);
      }
    }
    console.log(num1, + " " + i1);
  }
  return str;
}

// keep this function call here
SwapII(readline()); 
