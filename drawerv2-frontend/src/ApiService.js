// console.log("ApiService")
class ApiService {
    
    constructor(root) {
        this.root = root
    }

    getAllPlayers = () => fetch(`${this.root}/players`).then(resp => resp.json())

    getAllWords = () => fetch(`${this.root}/cards`).then(resp => resp.json())

    postPlayer = (player) => {
        return fetch(`${this.root}/players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
            },
            body: JSON.stringify(player),
        })
        .then(resp => resp.json())
    } 
    destroyPlayer = (id) => {
        return fetch(`${this.root}/players/${id}`, {
            method: 'DELETE',
        })
    }

    postWordCard = (word) => {
        return fetch(`${this.root}/cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
            },
            body: JSON.stringify(word),
        })
        .then(resp => resp.json())
    }
}
