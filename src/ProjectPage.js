import { createButton, createDiv, createInput, createParagraph, importImage, storageCheck } from "./helper";
import Icon from "/asset/bx-save.svg";

const ProjectWrapper = createDiv("ProjectWrapper", "", "grid");
let savedCard = [];

class Cards{
    constructor(stringTitle, workSpace){
        this.stringTitle = stringTitle;
        workSpace.appendChild(this.createCard(stringTitle));
    }
    createCard(){
        const card = createDiv("", "cards subTask", "");
        
        const taskTitle = createParagraph("", "taskTitle");
        taskTitle.textContent = this.stringTitle;
        const inputElement = createInput("text", "", "taskList", "Add sub-task");

        inputElement.addEventListener("keydown", (e) => {
            if(e.key === "Enter"){
                createSubTask("", "subList", card, inputElement);
            }
        });

        const saveIcon = importImage("saveButton", "", Icon);
        saveIcon.addEventListener("click", () => {
            this.saveProjects();
        })
        
        card.append(taskTitle, inputElement, saveIcon);
        
        return card;
    }
    saveProjects(){
        const taskData = {
            title: this.stringTitle,
            subtask: Array.from(document.querySelectorAll(".subList")).map(subtask => subtask.innerText)
        }
        savedCard.push(taskData);
        console.log(savedCard);
    
        if(storageCheck("localStorage")){
            localStorage.setItem('task', JSON.stringify(savedCard));
            alert("Project saved");
        }
    }
}

function createSubTask(id, className, parentNode, inputNode){
    const subtask = createParagraph(id, className);

    const checkMark = createParagraph("", "checkMark");
    checkMark.textContent = "x";

    checkMark.addEventListener("click", ()=>{
        console.log("I'm a text X");
    })

    subtask.innerText = inputNode.value;
    
    parentNode.insertBefore(subtask, inputNode);
    parentNode.insertBefore(checkMark, subtask);
    inputNode.value = "";
}

const AddProjects = createDiv("AddProjects", "cards", "grid");

const cardTitle = createInput("text", "", "cardsTitle", "Create project");

const workSpace = createDiv("workSpace", "", "flex");
workSpace.style.display = "none";

function createNewTask(){
    if(cardTitle.value.trim() != ""){
        // create task card here
        const c = new Cards(cardTitle.value, workSpace);
        workSpace.style.display = "flex";
        cardTitle.value = "";
    }
    else{
        alert("Title can't be empty");
    }
}

const addTask = createButton("addButton", "", "text");
addTask.innerText = "+";
addTask.addEventListener("click", () => {
    createNewTask();
});

AddProjects.append(cardTitle, addTask);

ProjectWrapper.append(AddProjects, workSpace);

window.onload = function() {
    if(localStorage.getItem("task") !== null){
        let storedArray = localStorage.getItem("task");
        storedArray = JSON.parse(storedArray);
    }
}

export {ProjectWrapper};