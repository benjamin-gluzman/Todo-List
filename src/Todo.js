export class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    set priority(newPriority) {
        if(newPriority < 0) return false;
        this.priority = newPriority;
    }
}