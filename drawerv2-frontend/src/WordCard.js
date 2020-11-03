// console.log("WordCard")
class WordCard {
    
    constructor(word) {
        this.word = word
        // console.log(this)
        this.renderCards()
    }

    renderCards(){
        const div = document.createElement("div")
        // const div2 = document.createElement("div")
    
        div.setAttribute("class", "game-card")
        div.setAttribute("id", "game-card1")
        // div2.setAttribute("class", "game-card")
        // div2.setAttribute("id", "game-card2")
    
        div.innerHTML = this.word.content // all[Math.floor(Math.random() * all.length)].content 
        // div2.innerHTML = this.word.content // all[Math.floor(Math.random() * all.length)].content
    
        // document.getElementById("new-word").addEventListener('submit', addWord)
        
        cardsContainer.appendChild(div)
        // cardsContainer.appendChild(div2)
    }

    static getAllWords(){
        api.getAllWords().then(words => words.forEach(word => new WordCard(word)))
    }
}

// //GET NEW WORDS (re-run loadCards)
// const newWords = document.getElementById("new-words")

// newWords.addEventListener('click', function(){
//     // console.log("new-words")
//     document.getElementById("game-card1").replaceWith()
//     document.getElementById("game-card2").replaceWith()
//     loadCards()
// })