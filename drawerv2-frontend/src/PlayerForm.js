// console.log("PlayerForm")
class PlayerForm {
    
    constructor(){
        // console.log(this)
        this.addEventListeners()
    }

    addEventListeners(){
        playerForm.addEventListener('submit', this.handleSubmit);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target, this)
        // console.log(this.getFormData(e.target))
        const data = this.getFormData(e.target)
        // api.postPlayer(data).then(console.log)
        api.postPlayer(data).then(player => new Player(player))

        playerForm.reset()
    }

    getFormData = (form) => {
        return {name: form.name.value}
    }
}
