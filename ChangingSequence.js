function ChangingSequence(arr) {
  var result = -1;
  for(var i = 0; i < arr.length-1; i++){
    if(arr[0] < arr[1] && arr[i] > arr[i+1]){
      return i;
    }else if(arr[0] > arr[1] && arr[i] < arr[i+1]){
      return i;
    }
  }
  return result;
}

// keep this function call here
ChangingSequence(readline()); 
