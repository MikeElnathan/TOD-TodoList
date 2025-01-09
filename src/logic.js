import { CreateElement, createInput, createSubTask } from "./helper";

export class Cards{
    constructor(stringTitle, parentNode){
        this.stringTitle = stringTitle;
        parentNode.appendChild(this.createCard(stringTitle));
    }
    createCard(){
        const c = new CreateElement("div", "", "cards subTask", "");
        const card = c.getElement();

        const p = new CreateElement("p", "", "taskTitle","");
        const taskTitle = p.getElement();
        
        taskTitle.innerText = this.stringTitle;

        const inputElement = createInput("text", "", "taskList", "Add sub-task");

        inputElement.addEventListener("keydown", (e) => {
            if(e.key === "Enter"){
                createSubTask("", "subList", card, inputElement);
            }
        });

        card.appendChild(taskTitle);
        card.appendChild(inputElement);
        
        return card;
    }
    
}