import {Todo} from "./todo.js";

export class Project {
    #todoList;
    #name;
    constructor(name) {
        this.#name = name;
        this.#todoList = [];
    }

    get name() {
        return this.#name;
    }

    get todoList() {
        return this.#todoList;
    }

    addNewTodo(title, description, dueDate, priority) {
        let todo = new Todo(title, description, dueDate, priority);
        this.#todoList.push(todo);
    }
}