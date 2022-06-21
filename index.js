class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start() {
        console.log("TIMER START!");
    }
    pause() {
        console.log("TIMER PAUSE!");
    }
    onDurationChange() {

    }
    tick() {

    }
}

const durationInput = document.querySelector('#input');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
