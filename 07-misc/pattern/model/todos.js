class Todo {
    todos = [];
    container = null;

    constructor(listContainer) {
        this.container = listContainer;
    }
    addTodo(todoItem) {
        this.todos.push(todoItem)
        this.updateUI()
    }

    getTodos() {
        return this.todos;
    }

    updateUI() {
        this.container.innerHTML = '';

        for (var i = 0; i < this.todos.length; i++) {
            var liEl = document.createElement("li")
            liEl.innerHTML = this.todos[i]
            this.container.appendChild(liEl)
        }
    }
}

export default Todo;