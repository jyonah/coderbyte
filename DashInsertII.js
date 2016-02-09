function DashInsertII(str) {
  for(var i = 0; i < str.length-1; i++) {
    if(str[i] === 0){
      break;
    }
    if(str[i] % 2 === 1 && str[i+1] % 2 === 1) {
      var x = str.substring(0,i+1);
      var y = str.substring(i+1,str.length);
      str = x.concat("-",y);
      i++;
    }else if(str[i] % 2 === 0 && str[i+1] % 2 === 0 && str[i] !== "0" && str[i+1] !== "0") {
      var x = str.substring(0,i+1);
      var y = str.substring(i+1,str.length);
      str = x.concat("*",y);
      i++;
    }
  }
  return str;

}
// keep this function call here
// to see how to enter arguments in JavaScript scroll down
DashInsertII(readline());
