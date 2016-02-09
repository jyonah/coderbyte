function DivisionStringified(num1,num2) {
  var result = 0;
  var dec = "";
  var first = "";
  var divide = 0;
  div = Math.round(num1/num2); // if result need not be round, remove "Math.round" and uncomment lines 9-15
  divide = div.toString();
  console.log("div " + div);// here!
/*  if(num1 % num2 !== 0){
    var decArray = divide.split(".");
    dec = "." + decArray.pop();
    divide = decArray[0];
    console.log("decArray " + decArray);
    console.log("divide " + divide);
  }*/
  if(divide.length > 3 && divide.length % 3 !== 0){
    var x = divide.length % 3;
    first = divide.substring(0,x) + ",";
    divide = divide.substring(x,divide.length);
  }
  var every3 = [];
  every3 = divide.match(/.{1,3}/g);
  result = first;
  for(var i = 0; i < every3.length; i++){
    if(i === every3.length - 1){
      result += every3[i] + dec;
    }else{
      result += every3[i] + ",";
    }
  }
  return result;
}

// keep this function call here
DivisionStringified(readline()); 
