class LanguagesAdapter {
    constructor() {
        this.baseUrl =
            'http://localhost:3000/api/v1/languages'
    }

    // make fetch request to languageUrl
    async getLanguages() {
        const res = await fetch(this.baseUrl)
        return await res.json()
    }
}