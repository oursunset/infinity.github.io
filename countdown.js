
const countdownDate = new Date('2024-12-22T00:00:00').getTime();


const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;


  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('days').innerHTML = '0';
    document.getElementById('hours').innerHTML = '0';
    document.getElementById('minutes').innerHTML = '0';
    document.getElementById('seconds').innerHTML = '0';
    return;
  }

 
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
}, 1000);
