const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/players`
const CARDS_URL = `${BASE_URL}/cards`
const GAMES_URL = `${BASE_URL}/games`

//FETCH PLAYERS
const player = document.getElementById("scoreboard")

document.addEventListener("DOMContentLoaded", () => loadPlayers())

const loadPlayers = () => {
    fetch(PLAYERS_URL)
    .then(resp => resp.json())
    // .then(json => {
    //     console.log(json)
    // })
    .then(json => {
        json.forEach(player => renderPlayer(player))
    })
}
//PLAYERS ON SCOREBOARD: NAME / DELETE(BUTTON) / POINTS(INPUT) 
const renderPlayer = (playerList) => {
    const p = document.createElement("p")
    const input = document.createElement("input")
    const button = document.createElement("button")

    p.setAttribute("class", "player")
    p.innerHTML = playerList.name
    input.innerHTML = "0"

    button.setAttribute("class", "delete-player")
    button.setAttribute("data-player-id", playerList.id)
    button.innerHTML = "☠️"

    input.setAttribute("class", "points")
    input.setAttribute("type", "number")
    input.setAttribute("value", "0")

    document.getElementById("new-player").addEventListener('submit', createPlayer)
    button.addEventListener('click', deletePlayer)

    player.appendChild(p)
    p.appendChild(button)
    p.appendChild(input)
}

const createPlayer = (e) => {
    e.preventDefault()
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({name: e.target.name.value})
    }
    fetch(PLAYERS_URL, configObj)
    .then(resp = resp.json())
    .then(json =>
          json.message ? alert(json.message) : renderPlayer(json)
    )
}

const deletePlayer = (e) => {
    e.preventDefault()
    const configObj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
        }
    }
    fetch(`${PLAYERS_URL}/${e.target.dataset.playerId}`, configObj)
        e.target.parentElement.remove()
}

//FETCH GAME CARDS (cards-container)
const cardsContainer = document.getElementById("cards-grid")

document.addEventListener("DOMContentLoaded", () => loadCards())

const loadCards = () => {
    fetch(CARDS_URL)
    .then(resp => resp.json())
    .then(json => {
        renderCards(json)
    })
}
let renderCards = (cardList) => {
    const div = document.createElement("div")
    const div2 = document.createElement("div")

    div.setAttribute("class", "game-card")
    div.setAttribute("id", "game-card1")
    div2.setAttribute("class", "game-card")
    div2.setAttribute("id", "game-card2")

    div.innerHTML = cardList[Math.floor(Math.random() * cardList.length)].content 
    div2.innerHTML = cardList[Math.floor(Math.random() * cardList.length)].content

    document.getElementById("new-word").addEventListener('submit', addWord)
    
    cardsContainer.appendChild(div)
    cardsContainer.appendChild(div2)
}

const addWord = (e) => {
    e.preventDefault()
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({content: e.target.name.value})
    }
    fetch(CARDS_URL, configObj)
    .then(resp = resp.json())
    .then(json =>
        json.message ? alert(json.message) : renderCards(json)    
    )
}

//GET NEW WORDS (re-run loadCards)
const newWords = document.getElementById("new-words")

newWords.addEventListener('click', function(){
    // console.log("new-words")
    document.getElementById("game-card1").replaceWith()
    document.getElementById("game-card2").replaceWith()
    loadCards()
})

//HIDE AND SHOW GAME CARDS
const showWords  = () => {
    let hide = document.getElementById("cards-grid");
    if(hide.style.display === "none") {
        hide.style.display = "flex";
    } else {
        hide.style.display = "none"
    }
}

//RULES
const showRules = () => {
    // console.log("Show Rules")
    let hide = document.getElementById("showRules");
    if (hide.style.display === "none") {
        hide.style.display = "";
    } else {
        hide.style.display = "none"
    }
}