setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function numbers() {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const numbers = document.querySelector('.numberWrapper');

    num.forEach((num) => {
        const marker = document.createElement('div');
        marker.classList.add('markers', 'marker' + num);

        const div = document.createElement('div');
        div.classList.add('number', 'number' + num);

        const span = document.createElement('span');
        span.classList.add('number' + num + 'container');
        span.innerText = num;

        div.appendChild(span);
        div.appendChild(marker);
        numbers.appendChild(div);
    });
}

numbers();

function setClock() {
    const currentDate = new Date();
    const isValidDate = currentDate instanceof Date && !isNaN(currentDate.getTime());

    const loader = document.getElementsByClassName("loader")[0];
    const clock = document.getElementById("clock");

    if (loader) loader.classList.toggle('hide', isValidDate);
    if (clock) clock.classList.toggle('hide', !isValidDate);

    if (isValidDate) {
        const secondsRatio = currentDate.getSeconds() / 60;
        const minutesRatio = (currentDate.getMinutes() + secondsRatio) / 60;
        const hoursRatio = (currentDate.getHours() % 12 + minutesRatio) / 12;

        setRotation(secondHand, secondsRatio);
        setRotation(minuteHand, minutesRatio);
        setRotation(hourHand, hoursRatio);
    }
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();