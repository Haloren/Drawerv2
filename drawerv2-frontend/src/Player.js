console.log("Player")
class Player {
    
}


// //PLAYERS ON SCOREBOARD: NAME / DELETE(BUTTON) / POINTS(INPUT) 
// const renderPlayer = (playerList) => {
//     const p = document.createElement("p")
//     const input = document.createElement("input")
//     const button = document.createElement("button")

//     p.setAttribute("class", "player")
//     p.innerHTML = playerList.name
//     input.innerHTML = "0"

//     button.setAttribute("class", "delete-player")
//     button.setAttribute("data-player-id", playerList.id)
//     button.innerHTML = "☠️"

//     input.setAttribute("class", "points")
//     input.setAttribute("type", "number")
//     input.setAttribute("value", "0")

//     document.getElementById("new-player").addEventListener('submit', createPlayer)
//     button.addEventListener('click', deletePlayer)

//     player.appendChild(p)
//     p.appendChild(button)
//     p.appendChild(input)
// }

// const deletePlayer = (e) => {
//     e.preventDefault()
//     const configObj = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept':'application/json'
//         }
//     }
//     fetch(`${PLAYERS_URL}/${e.target.dataset.playerId}`, configObj)
//         e.target.parentElement.remove()
// }