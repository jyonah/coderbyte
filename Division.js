// Code returns the greatest common divisor between two numbers.

function Division(num1,num2) {
  var great = 0;
  var limit = Math.max(num1,num2);
  for(var i = 0; i < limit; i++){
    if(num1 % i === 0 && num2 % i === 0 && i > great){
      great = i;
    }
  }
  return great;
}

Division(readline());   
