window.addEventListener('load', () => {
    const timeLeft = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start-btn')
    let time = 60;

    function countDown() {
        setInterval(function(){
            if(time <= 0) {
                clearInterval(time = 0)
            }
            timeLeft.innerHTML = time
            time--
        }, 1000)
    }

    startBtn.addEventListener('click', countDown)

})