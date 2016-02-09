function MeanMode(arr) {
  var mean = 0;
  var mode = 0;
  var instance = 0;
  var thisInstance = 0;
  for(var i = 0; i < arr.length; i++) {
    mean += arr[i]
    if(arr[i] !== mode){
      thisInstance += 1;
    }
    if(thisInstance > instance) {
      instance = thisInstance;
      mode = arr[i];
    }
    if(arr[i] === mode) {
      instance += 1;
    }
  }
  mean = mean/ arr.length;
  if(mean === mode) {
    return 1;
  }else{
    return 0;
  }

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());
