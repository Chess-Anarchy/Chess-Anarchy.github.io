// Target date and time (2023-06-14 23:00)
var targetDate = new Date("2023-06-14T23:00:00").getTime();

// Update the clock every second
setInterval(function() {
  // Get the current date and time
  var currentDate = new Date().getTime();

  // Calculate the difference between the target date and the current date
  var difference = currentDate - targetDate;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);
