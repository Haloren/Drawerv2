// console.log("ApiService")
class ApiService {
    
    constructor(root) {
        this.root = root
    }

    getAllPlayers = () => fetch(`${this.root}/players`).then(resp => resp.json())

    getAllWords = () => fetch(`${this.root}/cards`).then(resp => resp.json())

    


}