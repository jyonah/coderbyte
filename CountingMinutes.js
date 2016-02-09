function CountingMinutesI(str) {
  var timesArr = str.split("-");
  console.log(timesArr);
  var firstTime = timesArr[0].split(":");
  console.log(firstTime);
  var secondTime = timesArr[1].split(":");
  console.log(secondTime);

  var firstMins = parseInt(firstTime[1].substring(0,2));
  if(firstTime[1].substring(2,4) === "pm") {
      firstMins += 720;
  }
  if(firstTime[0] !== "12") {
      firstMins += (firstTime[0]*60);
  }
  console.log(firstMins);
  var secondMins = parseInt(secondTime[1].substring(0,2));
  if(secondTime[1].substring(2,4) === "pm") {
      secondMins += 720;
  }
  if(secondTime[0] !== "12"){
      secondMins += (secondTime[0]*60);
  }
  console.log(secondMins);
  var output = secondMins - firstMins;
  if(output < 0){
      output += 60*24;
  }
  return output;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
CountingMinutesI("12:30pm-12:00am"); 
