function ArithGeo(arr) {
  var product = arr[1] / arr[0];
  var pTruth = 0;
  var difference = arr[1] - arr [0];
  var dTruth = 0;
  for(var i = 1; i < arr.length; i++){
    if(arr[i] / arr[i-1] === product){
      pTruth += 1;
    }
    if(arr[i] - arr[i-1] === difference) {
      dTruth += 1;
    }
  }
  if(arr.length - 1 === dTruth) {
    return "Arithmetic";
  }else if(arr.length - 1 === pTruth) {
    return "Geometric";
  }else{
    return -1;
  }
}
// keep this function call here
ArithGeo(readline());    
