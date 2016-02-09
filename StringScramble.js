function StringScramble(str1,str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  var arr1 = str1.split("");
  var arr2 = str2.split("");
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  var i = 0;
  while(i <= arr2.length){
      if(arr2[i] === arr1[i]){
          i++;
      }else{
         arr1.splice(i,1);
         if(arr1.length < arr2.length){
             i = arr2.length + 1;
         }
      }
  }
  str1 = arr1.toString();
  str2 = arr2.toString();

//  return(arr1 + " xxxx " +arr2);
  return(str2 === str1);
}
