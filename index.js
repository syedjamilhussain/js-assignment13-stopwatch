let stopwatchInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateStopwatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById('stopwatch').innerText = formattedTime;
}

function startStopwatch() {
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}
function resetStopwatch() {
  clearInterval(stopwatchInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('stopwatch').innerText = '00:00:00';
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}