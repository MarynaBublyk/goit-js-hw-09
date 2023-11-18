
let idInt;

const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

refs.btnStop.disabled = true;
refs.btnStart.addEventListener('click', onBtnStart);
refs.btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

    idInt = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, 1000);
}

function onBtnStop() {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;

    clearInterval(idInt);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
