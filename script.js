document.addEventListener('DOMContentLoaded', ()=>{
    
    const appendTens = document.getElementById('tens');
    const appendSconds = document.getElementById('seconds');
    const buttonStart = document.getElementById('button-start');
    const buttonStop = document.getElementById('button-stop');
    const buttonReset = document.getElementById('button-reset');

    let seconds = 0;
    let tens = 0;
    let Interval;

    buttonStart.onclick = function() {
        Interval = setInterval(startTimer,10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);

        seconds = 0;
        tens = 0;
        appendTens.innerText = 0;
        appendSconds.innerText = 0;
    }

    function startTimer() {
        tens++;

        if(tens > 99) {
            seconds++;

            appendSconds.innerText = seconds;

            tens = 0;
            appendTens.innerText = 0;

        }else{
            appendTens.innerText = tens;
        }
    }

});