import {Project} from "./project.js";
import {Todo} from "./todo.js";

function saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
}

function retrieveProjects() {
    const projects = JSON.parse(localStorage.getItem("projects"));
    if(projects === null) return null;

    const res = [];

    for(const project of projects) {
        const todoList = [];
        for(const todo of project.todoList) {
            todoList.push(new Todo(todo.title, todo.description, todo.dueDate, todo.priority));
        }
        res.push(new Project(project.name, todoList));
    }

    return res;
}

export {saveProjects, retrieveProjects};