const api = new ApiService("http://localhost:3000")

const playerForm = document.getElementById("new-player") //ADD PLAYER
const scoreboard = document.getElementById("scoreboard") //FETCH PLAYERS

const cardsContainer = document.getElementById("cards-grid") //FETCH GAME CARDS (cards-container)
const newWords = document.getElementById("new-words") //GET NEW WORDS BUTTON

const wordForm = document.getElementById("new-word") // ADD WORD

const playerFormInstance = new PlayerForm
const wordFormInstance = new WordsForm

Player.getAllPlayers()
WordCard.getAllWords()


// TOGGLE GAME CARDS (HIDE AND SHOW)
const showWords  = () => {
    let hide = document.getElementById("cards-grid");
    if(hide.style.display === "none") {
        hide.style.display = "";
    } else {
        hide.style.display = "none"
    }
}

// TOGGLE SHOW AND HIDE RULES (maybe move to Players.js)
const showRules = () => {
    // console.log("Show Rules")
    let hide = document.getElementById("showRules");
    if (hide.style.display === "none") {
        hide.style.display = "";
    } else {
        hide.style.display = "none"
    }
}

//GET NEW WORDS BUTTON & RERUN getAllWords()
newWords.addEventListener('click', function() {
    document.getElementById("game-card1").replaceWith()
    document.getElementById("game-card2").replaceWith()
    WordCard.getAllWords()
})

//TIMER
const time = document.getElementById('time');
const toggle = document.getElementById('toggle');
const reset = document.getElementById('reset');

const timer = new Countdown(time);

toggle.addEventListener('click', function() {
    if (timer.timeRunning) {
        timer.stop();
        
        toggle.textContent = 'Start'
        console.log('stop')
    } else {
        timer.start();

        toggle.textContent = 'Stop'
        console.log('start')
    }
});

reset.addEventListener('click', function() {
    timer.reset();
    console.log('reset')
})