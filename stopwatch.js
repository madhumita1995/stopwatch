const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let startTime;
let interval;

function updateDisplay() {
    const currentTime = new Date() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);

    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', function () {
    if (!startTime) {
        startTime = new Date();
        interval = setInterval(updateDisplay, 1000);
    }
});

stopBtn.addEventListener('click', function () {
    clearInterval(interval);
    startTime = null;
});

resetBtn.addEventListener('click', function () {
    clearInterval(interval);
    startTime = null;
    display.textContent = '00:00:00';
});