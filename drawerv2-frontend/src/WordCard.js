// console.log("WordCard")
class WordCard {
    
    static all = []

    constructor(word) {
        this.word = word
        // console.log(this)
        this.constructor.all.push(this)
    }

    // static getRandomCard(){
    //     let wordCard1 = this.all[Math.floor(Math.random() * this.all.length)].word.content
    //     let wordCard2 = this.all[Math.floor(Math.random() * this.all.length)].word.content
    // }

    static getAllWords(){
        api.getAllWords().then(words => {
            words.forEach(word => new WordCard(word));
            
            // getrandomCard()
            const wordCardContent1 = words[Math.floor(Math.random() * words.length)].content;
            const wordCardContent2 = words[Math.floor(Math.random() * words.length)].content;
            const wordCard1 = document.createElement("div")
            const wordCard2 = document.createElement("div")
    
            wordCard1.setAttribute("class", "game-card")
            wordCard1.setAttribute("id", "game-card1")    
            wordCard2.setAttribute("class", "game-card")
            wordCard2.setAttribute("id", "game-card2")            
            
            wordCard1.innerHTML = wordCardContent1
            wordCard2.innerHTML = wordCardContent2
    
            cardsContainer.appendChild(wordCard1)
            cardsContainer.appendChild(wordCard2)
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