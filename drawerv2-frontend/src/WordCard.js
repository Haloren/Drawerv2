// console.log("WordCard")
class WordCard {
    
    static all = []

    constructor(word) {
        this.word = word
        // console.log(this)
        this.constructor.all.push(this)
        this.setEventListeners()
    }

    static getAllWords(){
        api.getAllWords().then(words => {
            words.forEach(word => new WordCard(word));
            
            // MAKE RANDOM CARD1 & CARD2
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
    
    setEventListeners = () => {
        newWords.addEventListener('click', this.handleClick)
    } 

    handleClick = (e) => {
        // console.log(cardsContainer)
        console.log(this.constructor.all[Math.floor(Math.random() * this.constructor.all.length)].word.content)
        // const gameCard1 = this.constructor.all[Math.floor(Math.random() * this.constructor.all.length)].word.content
        // const gameCard2 = this.constructor.all[Math.floor(Math.random() * this.constructor.all.length)].word.content
        // document.getElementById("game-card1").replaceWith()
        // document.getElementById("game-card2").replaceWith()
        // getAllWords()
    }
}
