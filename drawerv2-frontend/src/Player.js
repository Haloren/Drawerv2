// console.log("Player")
class Player {

    constructor(player) {
        this.player = player
        // console.log(this)
        this.renderPlayer()
        this.setEventListeners()
    }
    
    renderPlayer(){
        const p = document.createElement("p")
        const input = document.createElement("input")
        const button = document.createElement("button")
    
        p.setAttribute("class", "player")
        p.innerHTML = this.player.name
        input.innerHTML = "0"
    
        button.setAttribute("class", "delete-player")
        button.setAttribute("data-player-id", this.player.id)
        button.innerHTML = "☠️"
    
        input.setAttribute("class", "points")
        input.setAttribute("type", "number")
        input.setAttribute("value", "0")
    
        // document.getElementById("new-player").addEventListener('submit', createPlayer)
        // button.addEventListener('click', deletePlayer)
    
        scoreboard.appendChild(p)
        p.appendChild(button)
        p.appendChild(input)
    }

    renderInnerHTML(){

    }

    setEventListeners = () => {

    }



    static getAllPlayers(){
        api.getAllPlayers().then(players => players.forEach(player => new Player(player)))
    }
}

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