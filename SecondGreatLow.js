function SecondGreatLow(arr) {
  var smax = 0;
  var slow = 0;
  arr = arr.sort(function(a,b){return a - b});
  var low = arr[0];
  var max = arr[arr.length - 1];
  if(arr.length === 2) {
    slow = arr[1];
    smax = arr[0];
  }/*else if(arr.length === 3) {
    slow = arr[1];
    smax = arr[1];
  }*/ // This was wrong. (Coderbytes tests did not catch it though.)
  for(var l = 1; l < arr.length; l++) {
    if(arr[l] !== low){
      slow = arr[l];
      break;
    }
  }
  for(var g = arr.length-2; g > 0; g--) {
    if(arr[g] !== max) {
      smax = arr[g];
      break;
    }
  }


  return slow + " " + smax;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());
