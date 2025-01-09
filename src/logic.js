import { CreateElement } from "./helper";

export class Cards{
    constructor(stringTitle, parentNode){
        this.stringTitle = stringTitle;
        parentNode.appendChild(this.createCard(stringTitle));
    }
    createCard(){
        const c = new CreateElement("div", "", "cards", "grid");
        const card = c.getElement();

        const p = new CreateElement("p", "", "taskTitle","");
        const taskTitle = p.getElement();
        taskTitle.innerText = this.stringTitle;

        card.appendChild(taskTitle);

        return card;
    }
}