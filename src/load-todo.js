import { addProjectDialog, addTodoDialog } from "./create-dialog.js";
import rightArrow from "../assets/right-arrow.svg";
import downArrow from "../assets/down-arrow.svg";
import plus from "../assets/plus.svg";

function createTodoContainer(container, project) {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    
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


        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";

        removeBtn.addEventListener("click", () => {
            project.removeTodo(todo);
            loadAll(container, project);
        });

        item.appendChild(title);
        item.appendChild(description);
        item.appendChild(dueDate);
        item.appendChild(priority);
        item.appendChild(removeBtn);

        todoContainer.appendChild(item);
    }

    return todoContainer;
}

function loadAll(container, project) {
    container.replaceChildren();

    const header = document.createElement("div");
    header.classList.add("header");

    const arrow = document.createElement("img");
    arrow.src = rightArrow;

    const projName = document.createElement("h1");
    projName.textContent = project.name;

    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add Todo";

    const dialog = addTodoDialog(container, project);
    document.body.appendChild(dialog);
    addTodoBtn.addEventListener("click", () => {
        dialog.showModal();
    });

    const todoContainer = createTodoContainer(container, project);

    header.appendChild(projName); header.appendChild(arrow); header.appendChild(addTodoBtn);
    container.appendChild(header);
    container.appendChild(todoContainer);
}

// function loadToday(todoList) {
//     content.replaceChildren();
//     // projects.getProjectList().filter((project) => )
// }

// function loadThisWeek(todoList) {
//     content.replaceChildren();
// }

// function loadNextWeek(todoList) {
//     content.replaceChildren();


// }

// function loadLater(todoList) {
//     content.replaceChildren();


// }

export {loadAll};