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

const createPlayer = () => {

}

const deletePlayer = () => {

}