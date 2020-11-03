// console.log("WordCard")
class WordCard {
    
    constructor(word) {
        this.word = word
        // console.log(this)
    }




    static getAllWords(){
        api.getAllWords().then(words => words.forEach(word => new WordCard(word)))
    }
}





// //FETCH GAME CARDS (cards-container)
// const cardsContainer = document.getElementById("cards-grid")

// document.addEventListener("DOMContentLoaded", () => loadCards())

// const loadCards = () => {
//     fetch(CARDS_URL)
//     .then(resp => resp.json())
//     .then(json => {
//         renderCards(json)
//     })
// }
// let renderCards = (cardList) => {
//     const div = document.createElement("div")
//     const div2 = document.createElement("div")

//     div.setAttribute("class", "game-card")
//     div.setAttribute("id", "game-card1")
//     div2.setAttribute("class", "game-card")
//     div2.setAttribute("id", "game-card2")

//     div.innerHTML = cardList[Math.floor(Math.random() * cardList.length)].content 
//     div2.innerHTML = cardList[Math.floor(Math.random() * cardList.length)].content

//     // document.getElementById("new-word").addEventListener('submit', addWord)
    
//     cardsContainer.appendChild(div)
//     cardsContainer.appendChild(div2)
// }

// //GET NEW WORDS (re-run loadCards)
// const newWords = document.getElementById("new-words")

// newWords.addEventListener('click', function(){
//     // console.log("new-words")
//     document.getElementById("game-card1").replaceWith()
//     document.getElementById("game-card2").replaceWith()
//     loadCards()
// })

// //HIDE AND SHOW GAME CARDS
// const showWords  = () => {
//     let hide = document.getElementById("cards-grid");
//     if(hide.style.display === "none") {
//         hide.style.display = "";
//     } else {
//         hide.style.display = "none"
//     }
// }