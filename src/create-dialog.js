import { projects } from "./index.js";
import { saveProjects, retrieveProjects } from "./storage.js";
import {loadAll} from "./load-todo.js"

function addTodoDialog(container, project) {
    const dialog = document.createElement("dialog");
    const h1 = document.createElement("h1");
    h1.textContent = "New Todo";

    const form = document.createElement("form");

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleLabel.setAttribute("for", "title");

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";

    
    const descLabel = document.createElement("label");
    descLabel.textContent = "Description";
    descLabel.setAttribute("for", "desc");

    const descInput = document.createElement("textarea");
    descInput.rows = "4"; descInput.cols = "20";
    descInput.id = "desc";


    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Due Date";
    dateLabel.setAttribute("for", "date");

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";


    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority";
    priorityLabel.setAttribute("for", "priority");

    const priorityInput = document.createElement("input");
    priorityInput.type = "number";
    priorityInput.id = "priority";






    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Add";

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        project.addNewTodo(titleInput.value, descInput.value, dateInput.value, priorityInput.value);

        loadAll(container, project);
        saveProjects(projects);

        dialog.close();
    });

    form.appendChild(titleLabel); form.appendChild(titleInput);
    form.appendChild(descLabel); form.appendChild(descInput);
    form.appendChild(dateLabel); form.appendChild(dateInput);
    form.appendChild(priorityLabel); form.appendChild(priorityInput);
    
    form.appendChild(submitBtn);
    dialog.appendChild(h1); dialog.appendChild(form);
    return dialog;
}

export {addTodoDialog};