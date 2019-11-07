class Language {
    constructor(languageJSON) {
        this.name = languageJSON.name
    }
    renderLanguage() {
        return `<h5><a class="nav-link" href="#">${this.name}</a></h5>`
    }
}