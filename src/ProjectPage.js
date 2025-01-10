import { createButton, createDiv, createInput, createParagraph, importImage, storageCheck } from "./helper";
import Icon from "/asset/bx-save.svg";

const ProjectWrapper = createDiv("ProjectWrapper", "", "grid");
let savedCard = [];

class Cards{
    constructor(stringTitle, workSpace){
        this.stringTitle = stringTitle;
        this.card = this.createCard();
        this.workSpace = workSpace;
        this.workSpace.appendChild(this.card);
    }
    createCard(){
        console.log("a card is created");
        const card = createDiv("", "cards subTask", "");
        
        const taskTitle = createParagraph("", "taskTitle");
        taskTitle.textContent = this.stringTitle;
        const inputElement = createInput("text", "", "taskList", "Add sub-task");

        inputElement.addEventListener("keydown", (e) => {
            if(e.key === "Enter"){
                createSubTask("", "subList", card, inputElement, "");
            }
        });

        const saveIcon = importImage("saveButton", "", Icon);
        saveIcon.addEventListener("click", () => {
            this.saveProjects();
        })
        
        card.append(taskTitle, inputElement, saveIcon);
        workSpace.style.display = "flex";

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
            localStorage.setItem(this.stringTitle, JSON.stringify(savedCard));
            alert("Project saved");
        }
    }
}

function createSubTask(id, className, parentNode, inputElement, subText){
    const subtask = createParagraph(id, className);

    const checkMark = createParagraph("", "checkMark");
    checkMark.textContent = "x";

    checkMark.addEventListener("click", ()=>{
        console.log("I'm a text X");
    })

    if(subText !== ""){
        subtask.innerText = subText;
    }else{
        subtask.innerText = inputElement.value;
    }

    parentNode.insertBefore(subtask, inputElement);
    parentNode.insertBefore(checkMark, subtask);

    inputElement.value = "";
}

const AddProjects = createDiv("AddProjects", "cards", "grid");

const cardTitle = createInput("text", "", "cardsTitle", "Create project");

const workSpace = createDiv("workSpace", "", "flex");
workSpace.style.display = "none";

function createNewTask(){
    if(cardTitle.value.trim() != ""){
        // create task card here
        const c = new Cards(cardTitle.value, workSpace);
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

window.addEventListener("load", function(){
    if(localStorage.getItem("task") !== null){
        let storedArray = localStorage.getItem("task");
        storedArray = JSON.parse(storedArray);
        for(let item of storedArray){
            console.log("Im triggered");
            const c = new Cards(item.title, workSpace);
            const inputEle = c.card.querySelector(".taskList");
            for(let subTaskText of item.subtask){
                console.log(subTaskText);
                createSubTask("", "subList", c.card, inputEle, subTaskText);
            }
            console.log(inputEle);
        }
    }else{
        console.log("no data saved");
    }
}); 

export {ProjectWrapper};