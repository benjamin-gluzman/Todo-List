import {Todo} from "./todo.js";

export class Project {
    constructor(name, todoList) {
        this.name = name;
        this.todoList = todoList;
    }

    addNewTodo(title, description, dueDate, priority) {
        let todo = new Todo(title, description, dueDate, priority);
        this.todoList.push(todo);
    }

    removeTodo(todo) {
        this.todoList.splice(this.todoList.indexOf(todo), 1);
    }
}