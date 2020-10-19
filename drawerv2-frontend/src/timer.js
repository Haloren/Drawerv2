function Countdown(element) {
    let time = 0;
    let interval; //interval update so time can be stopped & reset
    let offset; //using Date() and this will calc time past

    function update() { 
        if (this.timeRunning){
            time += timePast();
        }
        let displayTime = formatTime(time);
        
        element.textContent = displayTime
        // console.log(displayTime);
    }

    function timePast() {
        let now = Date.now();
        let counter = now - offset;
        offset = now;
        return counter;
    }

    function formatTime(millisecondsTime) {
        let time = new Date(millisecondsTime);
        let minutes = time.getMinutes().toString();
        let seconds = time.getSeconds().toString();

        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }
        if (seconds.length < 2) {
            seconds = '0' + seconds; 
        }
        // function formatTime(time) {
        //     return time < 10 ? `0${time}` : time; 
        // }
        return minutes + ' : ' + seconds;       
    }
    
    this.timeRunning = false;

    this.start = function() {
        if (!this.timeRunning) {
            interval = setInterval((update.bind(this)), 100); // window.setInterval so we have to bind .this to update
            offset = Date.now();
            this.timeRunning = true;
        }
    };

    this.stop = function() {
        if (this.timeRunning) {
            clearInterval(interval);
            interval = null;
            this.timeRunning = false;
        }
    };

    this.reset = function() {
        time = 0;
        update();
    };
}

// const timer = new Countdown();
// timer.start();