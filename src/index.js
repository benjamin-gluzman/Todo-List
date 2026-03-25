import * as loader from "./load-todo.js";
import { Project } from "./project.js";
import { saveProjects, retrieveProjects } from "./storage.js";
import "./style.css";

const displayProjDialogBtn = document.querySelector(".newProj");
const newProjBtn = document.querySelector("#createNewProjBtn");
const dialog = document.querySelector("dialog");


const content = document.querySelector(".content");
let projects = [];


displayProjects();
function displayProjects() {
    projects = retrieveProjects();
    if(projects == null) projects = [];

    if(projects.length === 0) {
        projects.push(new Project("Default Project", []));
        saveProjects(projects);
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

    projects.push(new Project(name.value, []));
    name.value = "";

    saveProjects(projects);
    displayProjects();
    dialog.close();
})


export { projects };