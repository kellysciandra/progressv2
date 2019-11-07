class Languages {
    constructor() {
        this.languages = []
        this.adapter = new LanguagesAdapter()
        this.initBindings()
        this.initEventListeners()
        this.fetchAndLoadLanguages()
    }

    initBindings() {
        this.languagesContainer = document.getElementById('languages-container')
        this.body = document.querySelector('body')
        this.newTaskBody = document.getElementById('new-task-body')
    }

    initEventListeners() {

    }


    fetchAndLoadLanguages() {
        this.adapter
            .getLanguages()
            .then(languages => {
                languages.forEach(language => this.languages.push(new Language(language)))
            })
            .then(() => {
                this.render()
            })
    }

    render() {
        const languagesContainer = document.getElementById('languages-container')
        languagesContainer.innerHTML = this.languages.map(language => language.renderLanguage()).join('')
    }

}