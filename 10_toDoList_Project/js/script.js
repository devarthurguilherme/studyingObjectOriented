class ToDo {
    constructor() {
        this.totalTasks = document.querySelectorAll(".task").length;
    }

    addTask(taskText) {
        //Clone Template
        let template = document.querySelector(".task").cloneNode(true);
        //Remover Classe '.hide'
        template.classList.remove("hide");
        //Maniputar texto default
        let templateText = template.querySelector(".taskTitle");
        templateText.textContent = taskText;

        let list = document.querySelector("#tasksContainer");

        //Insetir na lista

        list.appendChild(template);
    }
}

const toDoList = new ToDo();

// Events
let addBtn = document.querySelector("#add");

addBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let taskText = document.querySelector("#task");
    
    if(taskText.value != "") {
        toDoList.addTask(taskText.value);
    }

    

    //Limpar campo de texto
    taskText.value = '';
});

