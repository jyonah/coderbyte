function AdditivePersistence(num) {
  var iterations = 0
  num = num.toString();
  while(num.length > 1){
    var result = 0
    for(var i = 0; i < num.length; i++){
      result += parseInt(num[i]);
    }
    num = result.toString();
    iterations += 1
  }
  return iterations;

}

// keep this function call here
AdditivePersistence(readline());     
