// console.log("Player")
class Player {

    constructor(player) {
        this.player = player
        // console.log(this)
        this.renderPlayer()
        this.setEventListeners()
    }
    
    renderPlayer = () => {
        const playerCard = document.createElement("p")
        const input = document.createElement("input")
        const button = document.createElement("button")
    
        playerCard.setAttribute("class", "player")
        playerCard.innerHTML = this.player.name
        input.innerHTML = "0"
    
        button.setAttribute("class", "delete-player")
        button.setAttribute("data-player-id", this.player.id)
        button.innerHTML = "☠️"
    
        input.setAttribute("class", "points")
        input.setAttribute("type", "number")
        input.setAttribute("value", "0")
    
        scoreboard.appendChild(playerCard)
        playerCard.appendChild(button)
        playerCard.appendChild(input)

        this.playerCard = playerCard
    }

    setEventListeners = () => {
        this.playerCard.addEventListener('click', this.handleClick)
    }

    handleClick = (e) => {
        // console.log(this)
        const playerId = this.player.id 

        if (e.target.classList.contains("delete-player")){
            api.destroyPlayer(playerId).then(resp => resp.ok)
            this.playerCard.remove()
        }        
    }

    static getAllPlayers(){
        api.getAllPlayers().then(players => players.forEach(player => new Player(player)))
    }
}
