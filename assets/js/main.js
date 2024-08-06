const watch = document.querySelector('.watch');
const btnStart = document.querySelector('.start');
const btnPause = document.querySelector('.pause');
const btnRestart = document.querySelector('.restart');
let seconds = 0;
let timer;

function startWatch() {
    watch.classList.remove('watch-paused');
    timer = setInterval(function () {
        seconds++;
        watch.innerHTML = formatTimer(seconds);
        watch.classList.remove('watch-paused');
    }, 1000);
}

btnStart.addEventListener('click', function () {
    clearInterval(timer);
    startWatch();
});

btnPause.addEventListener('click', function () {
    clearInterval(timer);
    watch.classList.add('watch-paused');
});

btnRestart.addEventListener('click', function () {
    clearInterval(timer);
    watch.innerHTML = '00:00:00';
    watch.classList.remove('watch-paused');
    seconds = 0;
});

function formatTimer(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-PT', {
        hour12: false,
        timeZone: 'UTC'
    });
}
