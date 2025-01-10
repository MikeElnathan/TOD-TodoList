import { createButton, createDiv, createInput, createParagraph } from "./helper";
const ProjectWrapper = createDiv("ProjectWrapper", "", "grid");
let savedCard = [];

class Cards{
    constructor(stringTitle, parentNode){
        this.stringTitle = stringTitle;
        parentNode.appendChild(this.createCard(stringTitle));
        savedCard.push(this);
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

        card.append(taskTitle, inputElement);
        
        return card;
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

const addTask = createButton("addButton", "", "text");
addTask.innerText = "+";
addTask.addEventListener("click", () => {
    createNewTask();
});

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

AddProjects.append(cardTitle, addTask);

ProjectWrapper.append(AddProjects, workSpace);

export {ProjectWrapper};