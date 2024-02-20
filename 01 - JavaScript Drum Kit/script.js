const keys = document.querySelector('.keys');

document.addEventListener('keydown', (event)=> {    
    const dataVal = event.keyCode;

    const key = keys.querySelector(`div[data-key='${dataVal}']`);
    if (key !== null) {
        key.classList.add('playing');
    }

    const audio = document.querySelector(`audio[data-key='${dataVal}']`);
    if (audio !== null) {
        // reset audio playback to start
        audio.currentTime = 0;
        audio.play();
    }
});

document.addEventListener('keyup', (e) => {
    const dataVal = event.keyCode;

    const key = keys.querySelector(`div[data-key='${dataVal}']`);
    if (key !== null) {
        key.classList.remove('playing');
    }
})