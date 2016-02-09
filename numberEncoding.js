function NumberEncoding(str) {
  var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var newStr = "";
  for(var i = 0; i <str.length; i++){
    var x = abc.indexOf(str[i]);
    if(x === -1){
      newStr += str[i];
    }else{
      x = x+1;
      x = x.toString();
      newStr += x;
    }
  }
    return newStr;
}

// keep this function call here
NumberEncoding(readline());
