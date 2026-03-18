function addProjectDialog() {
    const dialog = document.createElement("dialog");
    const h1 = document.createElement("h1");
    h1.textContent = "Create New Project";

    const form = document.createElement("form");

    const label = document.createElement("label");
    label.textContent = "Project Name";
    label.for = "newProjName";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "newProjName"

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";

    // submitBtn.addEventListener("click", () => {
    //     dialog.close();
    //     const project =
    //     // figure out where to return it to
    // });
}

function addTodoDialog(project) {
    const dialog = document.createElement("dialog");
    const h1 = document.createElement("h1");
    h1.textContent = "New Todo";

    const form = document.createElement("form");

    const label = document.createElement("label");
    label.textContent = "Title";
    label.for = "title";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "title"

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";

    submitBtn.addEventListener("click", () => {
        project.addNewTodo(input.value, "", "", "");
        dialog.close();
    });

    form.appendChild(label); form.appendChild(input); form.appendChild(submitBtn);
    dialog.appendChild(form);
    return dialog;
}

export {addProjectDialog, addTodoDialog};