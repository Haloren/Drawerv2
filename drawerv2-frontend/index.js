const api = new ApiService("http://localhost:3000")

//ADD PLAYER
const playerForm = document.getElementById("new-player")
//FETCH PLAYERS
const scoreboard = document.getElementById("scoreboard")
//FETCH GAME CARDS (cards-container)
const cardsContainer = document.getElementById("cards-grid")
//GET NEW WORDS (re-run loadCards)
const newWords = document.getElementById("new-words")
//TIMER
const time = document.getElementById('time');
const toggle = document.getElementById('toggle');
const reset = document.getElementById('reset');

const playerFormInstance = new PlayerForm

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

// TOGGLE SHOW AND HIDE RULES
showRules = () => {
    // console.log("Show Rules")
    let hide = document.getElementById("showRules");
    if (hide.style.display === "none") {
        hide.style.display = "";
    } else {
        hide.style.display = "none"
    }
}