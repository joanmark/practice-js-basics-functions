let idInterval;
let counter = 1

function runTimer() {
    const time = (new Date()).toLocaleTimeString();
    console.log(time)
    counter = counter + 1;

    if (counter > 5) {
        clearInterval(idInterval);
    }
}

idInterval = setInterval(runTimer, 5000);


