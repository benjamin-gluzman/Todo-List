import * as loader from "./load-todo.js";
import {Project} from "./project.js";
import { addProjectDialog, addTodoDialog } from "./create-dialog.js";

import "./style.css";
import rightArrow from "../assets/right-arrow.svg";
import downArrow from "../assets/down-arrow.svg";

const body = document.body;
const ProjBtn = document.querySelector(".newProj");
const content = document.querySelector(".content");
const projects = [];


displayProjects();
function displayProjects() {
    if(projects.length == 0) {
        projects.push(new Project("Default Project"));
    }

    for(const project of projects) {
        const container = document.createElement("div");
        const header = document.createElement("div");

        const arrow = document.createElement("img");
        arrow.src = rightArrow;

        const projName = document.createElement("h1");
        projName.textContent = project.name;

        const addTodoBtn = document.createElement("button");
        addTodoBtn.textContent = "Add Todo"

        addTodoBtn.addEventListener("click", () => {
            const dialog = addTodoDialog(project);
            document.body.appendChild(dialog);
            dialog.showModal();
        });

        const todoContainer = createTodoContainer(project);

        header.appendChild(arrow); header.appendChild(projName); header.appendChild(addTodoBtn);
        container.appendChild(header);
        container.appendChild(todoContainer);

        content.appendChild(container);
    }
}

function createTodoContainer(project) {
    const todoContainer = document.createElement("div");
    
    for(const todo of project.todoList) {
        const item = document.createElement("div");
        const title = document.createElement("h2");
        const description = document.createElement("p");
        const dueDate = document.createElement("p");
        const priority = document.createElement("p");

        title.textContent = todo.title;
        description.textContent = todo.description;
        dueDate.textContent = todo.dueDate;
        priority.textContent = todo.priority;

        item.appendChild(title);
        item.appendChild(description);
        item.appendChild(dueDate);
        item.appendChild(priority);
        todoContainer.appendChild(item);
    }

    return todoContainer;
}

// sidebar.addEventListener("click", (event) => {
//     switch(event.target.id) {
//         case "all":
//             loader.loadAll(projects);
//             break;
//         case "today":
//             loader.loadToday(projects);
//             break;
//         case "thisWeek":
//             loader.loadThisWeek(projects);
//             break;
//         case "nextWeek":
//             loader.loadNextWeek(projects);
//             break;
//         case "later":
//             loader.loadLater(projects);
//     }

    
// });