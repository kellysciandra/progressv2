class Task {
    constructor(taskJSON) {
        // this.id = taskJSON.id
        this.content = taskJSON.content
        this.reference = taskJSON.reference
        this.language_id = taskJSON.language_id
    }

    renderLi() {
        return `<li data-id=${this.id}>${this.language_id.name}, ${this.content}</li>`
    }
}