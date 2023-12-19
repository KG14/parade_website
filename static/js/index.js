$(document).ready(function () {
  $("body").flurry({
    character: "❄❅❆",
    color: ["rgb(59, 7, 100)", "white", "#7c3aed"],
    height: 700,
    frequency: 5,
    speed: 2000,
    small: 8,
    large: 15,
    wind: 100,
    windVariance: 20,
    rotation: 0,
    rotationVariance: 90,
    zIndex: 0,
  });

  var countdown_container = document.getElementById('countdown-container');
  var countdown = document.getElementById('timer');
  var livestream = document.getElementById('livestream-video');
  var countDownDate = new Date("Dec 21, 2023 08:30:00").getTime();

  function updateTimer() {
    var now = new Date().getTime(); // Current date
    var distance = countDownDate - now;

    // Days, hours, minutes calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Update timer
    countdown.innerHTML = days + "d " + hours + "h "
    + minutes + "m ";

    // If the count down is finished, show livestream
    if (distance < 0 && !countdown_container.classList.contains('hidden')) {
      countdown_container.classList.add('hidden');
      livestream.classList.remove('hidden');
    }
  }
  updateTimer();

  window.liveTest = function liveTest() {
    if (!countdown_container.classList.contains('hidden')) {
      countdown_container.classList.add('hidden');
      livestream.classList.remove('hidden');
    }
  }

  var x = setInterval(function() { // Update every minute
    updateTimer();
  });
});