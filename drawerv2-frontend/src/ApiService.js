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


}

// const createPlayer = (e) => {
//     e.preventDefault()
//     const configObj = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept':'application/json'
//         },
//         body: JSON.stringify({name: e.target.name.value})
//     }
//     fetch(PLAYERS_URL, configObj)
//     .then(resp => resp.json())
//     .then(json =>
//           json.message ? alert(json.message) : renderPlayer(json)
//     )
//     e.path[0].reset() //clear form input
// }
