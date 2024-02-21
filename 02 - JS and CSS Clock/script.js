const hour = document.querySelector('.hour-hand');
const minute = document.querySelector('.min-hand');
const second = document.querySelector('.second-hand');

setInterval(() => {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const secDeg = ((seconds / 60) * 360) + 90;
    second.style.transform = `rotate(${secDeg}deg)`;

    const minutes = currentTime.getMinutes();
    const minDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minute.style.transform = `rotate(${minDeg}deg)`;

    const hours = currentTime.getHours();
    const hrDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hour.style.transform = `rotate(${hrDeg}deg)`;
}, 1000);