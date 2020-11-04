// console.log("WordCard")
class WordCard {
    
    static all = []

    constructor(word) {
        this.word = word
        // console.log(this)
        // this.renderCards()
        this.constructor.all.push(this)
    }

    renderCards(){
        const wordCard = document.createElement("div")
        wordCard.setAttribute("class", "game-card")
        wordCard.setAttribute("id", "game-card1")    
        wordCard.innerHTML = this.word.content 
        
        cardsContainer.appendChild(wordCard)
    
        this.wordCard = wordCard
    }

    static getRandomCard(){
        this.all[Math.floor(Math.random() * this.all.length)].word.content
    }

    static getAllWords(){
        api.getAllWords().then(words => {
            words.forEach(word => new WordCard(word));
            // this.getrandomCard()
            words[Math.floor(Math.random() * words.length)].content;
        })    
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