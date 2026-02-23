let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const timeDisplay = document.getElementById("time");
const laps = document.getElementById("laps");

function updateTime() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;
    const ms = milliseconds < 100 ? 
        milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds 
        : milliseconds;

    timeDisplay.textContent = `${h}:${m}:${s}:${ms}`;
}

function start() {
    if (!running) {
        timer = setInterval(updateTime, 10);
        running = true;
    }
}

function pause() {
    clearInterval(timer);
    running = false;
}

function reset() {
    clearInterval(timer);
    running = false;
    milliseconds = seconds = minutes = hours = 0;
    timeDisplay.textContent = "00:00:00:000";
    laps.innerHTML = "";
}

function lap() {
    if (running) {
        const li = document.createElement("li");
        li.textContent = timeDisplay.textContent;
        laps.appendChild(li);
    }
}
s