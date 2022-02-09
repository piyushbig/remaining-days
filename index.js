function ageleft(age){
  var yearsleft= 90 - age;
  var daysleft = yearsleft * 365;
  var weeksleft = yearsleft * 52;
  var monthsleft = yearsleft * 12;
  
  console.log("You have  " + daysleft + " days and weeks left are "+ weeksleft+", months are"+monthsleft)
}

ageleft(56)
