function MultiplicativePersistence(num) {
  var iterations = 0
  num = num.toString();
  while(num.length > 1){
    var result = 0
    for(var i = 0; i < num.length; i++){
      if(i === 0){
        result = parseInt(num[i]);
      }else{
        result *= parseInt(num[i]);
      }
    }
    num = result.toString();
    iterations += 1
  }
  return iterations;

}

// keep this function call here
MultiplicativePersistence(readline()); 
