function CaesarCipher(str,num) {
  var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var result = "";
  if(num === 0){
    return str;
  }
  for(var i = 0; i < str.length; i++){
    var pos = abc.indexOf(str[i].toLowerCase());
    if(pos === -1){
      result += str[i];
    }else{
        pos += num;
        if(pos > 25){
            pos -=26;
        }
        if(str[i] === str[i].toUpperCase()) {
            result += abc[pos].toUpperCase();
        }else{
            result += abc[pos];
        }
    }
  }
  return result;
}

// keep this function call here
CaesarCipher(readline()); 
