// sets variables and calls methods
class Tasks {
    constructor() {
        this.tasks = []
        this.adapter = new TasksAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadTasks()
    }

    initBindingsAndEventListeners() {
        this.tasksContainer = document.getElementById('tasks-container')
        this.body = document.querySelector('body')
        this.newTaskBody = document.getElementById('new-task-body')
        this.taskForm = document.getElementById('new-task-form')
        this.taskForm.addEventListener('submit', this.createTask.bind(this))
        this.tasksContainer.addEventListener('dblclick', this.handleTaskClick.bind(this))
        this.body.addEventListener('blur', this.updateTask.bind(this), true)
    }

    createTask(e) {
        e.preventDefault()
        const value = this.newTaskBody.value

        this.adapter.createTask(value).then(task => {
            this.tasks.push(new Task(task))
            this.newTaskBody.value = ''
            this.render()
        })
    }

    handleTaskClick(e) {
        const li = e.target
        li.contentEditable = true
        li.focus()
        li.classList.add('z-depth-1')
    }

    updateTask(e) {
        const li = e.target
        li.contentEditable = false
        li.classList.remove('z-depth-1')
        const newValue = li.innerHTML
        const id = li.dataset.id
        this.adapter.updateTask(newValue, id)
    }

    fetchAndLoadTasks() {
        this.adapter
            .getTasks()
            .then(tasks => {
                this.tasks.forEach(task => this.tasks.push(new Task(task)))
            })
            .then(() => {
                this.render()
            })
    }

    render() {
        const tasksContainer = document.getElementById('tasks-container')
        tasksContainer.innerHTML = this.tasks.map(task => task.renderLi()).join('')
    }
}