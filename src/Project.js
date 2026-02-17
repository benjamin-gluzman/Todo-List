import {Todo} from "./Todo.js";

export class Project {
    #todoList;
    constructor() {
        this.#todoList = [];
    }

    addTodo(todo) {
        this.#todoList.push(todo);
    }

    getTodoList() {
        return this.#todoList;
    }
}