/* Calculating the difference between the current date and a special date. */
setInterval(function () {
  const now = new Date(); // current date

  const specialDay = new Date("2022-03-09"); //special date

  
  var countDiff = now - specialDay;

  var days = Math.floor(countDiff / (1000 * 60 * 60 * 24) + 1);
  // const days = Math.ceil(countDiff / (1000 * 60 * 60 * 24));
  var 
  currentDay = now.getDate(),
  specialD = specialDay.getDate() + 1;
  var years = 0,
    currentY = now.getFullYear(),
    specialY = specialDay.getFullYear(),
    currentM = now.getMonth() + 1,
    specialM = specialDay.getMonth() + 1;



  

  if (currentM === specialM & currentDay >= specialD) {
    years = currentY - specialY;
  }


  var months =
    (now.getFullYear() - specialDay.getFullYear()) * 12 +
    (now.getMonth() - specialDay.getMonth());

  document.querySelector("#days").innerHTML = "Dias: " + days;

  document.querySelector("#months").innerHTML = "Meses: " + months;

  document.querySelector("#years").innerHTML = "Anos: " + years;

  console.log(specialDay.getTime());
}, 1000);
