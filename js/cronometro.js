
const specialDay = new Date("2022-03-09");
var year = new Date();

var year = year.getFullYear();


var now = new Date();

var targetDate = new Date(year + "-03-09");

if(now > targetDate){
  targetDate = new Date(year + 1 + "-03-09");
}



/* A function that is called every 1000 milliseconds. */
setInterval(function () {
  

  // Calcular a diferença em milissegundos
  var timeDiff = targetDate - now;

  // Calcular o tempo restante em dias, horas e segundos
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
  var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  
  document.querySelector("#stopwatch").innerHTML =
    days +
    " dias, " +
    hours +
    " horas, " +
    minutes +
    " minutos e " +
    seconds +
    " segundos restantes.";
}, 1000);
