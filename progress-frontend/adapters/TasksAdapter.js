class TasksAdapter {
    constructor() {
        this.baseUrl =
            'http://localhost:3000/api/v1/tasks'
    }
    // make fetch request to baseUrl
    async getTasks() {
        const res = await fetch(this.baseUrl)
        // return await res.json()
        console.log(res.json())
    }

    async createTask(value) {
        const task = {
            text: value
        }
        const res = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ task }),
        })
        return await res.json()
    }

    async updateTask(value, id) {
        const task = {
            text: value
        }
        const res = await fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ task }),
        })
        return await res.json()
    }
}