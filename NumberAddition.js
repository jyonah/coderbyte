function NumberAddition(str) {
  var i1 = -1;
  var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var numsAdd = [];
  for(var i = 0; i < str.length; i++){
    if(nums.indexOf(str[i]) !== -1 && i1 === -1) { //if position is the first num in serries.
      i1 = i;
      if(i === str.length - 1){
        numsAdd.push(parseInt(str[i]));
        i1 = -1
      }
    }
    if(nums.indexOf(str[i]) === -1 && i1 !== -1){
      numsAdd.push(parseInt(str.substring(i1,i)));
      i1 = -1;
    }
    if(nums.indexOf(str[i]) !== -1 && i1 !== -1 && i === str.length -1){
      numsAdd.push(parseInt(str.substring(i1,i+1)));
    }
  }
  var result = 0;
  for(var x = 0; x < numsAdd.length; x++) {
    result += numsAdd[x];
  }
  return result;
}

// keep this function call here
NumberAddition(readline());
