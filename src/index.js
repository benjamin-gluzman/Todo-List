import * as loader from "./load-todo.js";
import {Project} from "./project.js";
import "./style.css";

const displayProjDialogBtn = document.querySelector(".newProj");
const newProjBtn = document.querySelector("#createNewProjBtn");
const dialog = document.querySelector("dialog");


const content = document.querySelector(".content");
const projects = [];


displayProjects();
function displayProjects() {
    if(projects.length === 0) {
        projects.push(new Project("Default Project"));
    }
    content.replaceChildren();

    for(const project of projects) {
        const container = document.createElement("div");
        loader.loadAll(container, project);
        container.classList.add("project-container");

        content.appendChild(container);
    }
}


displayProjDialogBtn.addEventListener("click", () => {
    dialog.showModal();
});

newProjBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.querySelector("#newProjName");
    name.value = name.value.trim();
    if(name.value === "")
        return;

    projects.push(new Project(name.value));
    name.value = "";

    displayProjects();
    dialog.close();
})



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