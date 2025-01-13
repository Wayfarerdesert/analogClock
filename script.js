setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function numbers() {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const numbers = document.querySelector('.numberWrapper');

    num.forEach((num) => {
        const div = document.createElement('div');
        div.classList.add('number', 'number' + num);

        const span = document.createElement('span');
        span.classList.add('number' + num + 'container');
        span.innerText = num;

        div.appendChild(span);
        numbers.appendChild(div);
    });
}

numbers();

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();