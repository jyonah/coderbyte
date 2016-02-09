function PowersofTwo(num) {
  while(num > 2){
    num = num/2;
  }
  if (num === 2){
    return true;
  }else{
    return false;
  }
}

// keep this function call here
PowersofTwo(readline());
