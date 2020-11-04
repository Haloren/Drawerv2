// console.log("WordsForm")
class WordsForm {
    
    constructor(){
        // console.log(this)
        this.addEventListeners()
    }

    addEventListeners(){
        wordForm.addEventListener('submit', this.handleSubmit);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target, this)
        // console.log(this.getFormData(e.target))
        const data = this.getFormData(e.target)
        // api.postPlayer(data).then(console.log)
        api.postWordCard(data).then(word => new WordCard(word))

        wordForm.reset()
    }

    getFormData = (form) => {
        return {content: form.name.value, game_id: 1}
    }
}