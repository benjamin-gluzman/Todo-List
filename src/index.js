import * as loader from "./load-todo.js";
import {Project} from "./project.js";


import "./style.css";


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
        loader.loadAll(container, project);
        container.classList.add("project-container");

        content.appendChild(container);
    }
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