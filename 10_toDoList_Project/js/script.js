class ToDo {

    constructor() {
        this.totalTasks = document.querySelectorAll(".task").length;
    }

    addTask(taskText) {
        //to clone template
        let template = document.querySelector(".task").cloneNode(true);
        //to remove class hide
        template.classList.remove("hide");
        //to manipulate the text
        let templateText = template.querySelector(".taskTitle");
        templateText.textContent = taskText;

        let list = document.querySelector("#tasksContainer");

        //to insert in list
        list.appendChild(template);

        //to add events to tasks
        this.addEvents();
    }

    removeTask(task) {
        //to find dad element
        let parentEl = task.parentElement;

        //to remove of the list
        parentEl.remove();
    }

    completeTask(task) {
        
    }

    addEvents() {

        let removeBtns = document.querySelectorAll(".fa-trash");
        let lastRemoveBtn = removeBtns[removeBtns.length - 1];

        let doneBtns = document.querySelectorAll(".fa-check");
        let lastDoneBtn = doneBtns[doneBtns.length - 1];

        //to add event to remover task
        lastRemoveBtn.addEventListener("click", function() {
            todo.removeTask(this);
        });

        //to add event to complete task
        lastDoneBtn.addEventListener("click", function() {
            todo.completeTask(this);
        });
    }

};

let todo = new ToDo();

//Events
let addBtn = document.querySelector("#add");

addBtn.addEventListener("click", function(e) {
    e.preventDefault();

    let taskText = document.querySelector("#task");

    if(taskText.value != "") {
        todo.addTask(taskText.value);
    }

});


