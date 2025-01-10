
function isString(value){
    return typeof value === "string";
}

class CreateElement{
    constructor(tag, id, classname, display){
        this.tag = tag;
        this.id = id;
        this.classname = classname;
        this.display = display;

        if(isString(tag)){
            const temp = document.createElement(tag);
            temp.id = id;
            temp.className = classname;
            temp.style.display = display;
            this._element = temp;
        }
        else{
            throw new Error("Invalid element type");
        }

    }
    getElement(){
        return this._element;
    }
}

export function createInput(type, id, className, placeholder){
    const i = new CreateElement("input", id, className, "");
    const input = i.getElement();
    input.setAttribute("type", type);
    input.setAttribute("required", "");
    input.setAttribute("placeholder", placeholder);
    
    return input;
}

export function createSubTask(id, className, parentNode, inputNode){
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

export function createDiv(id, className, display){
    const temp = new CreateElement("div", id, className, display);
    const div = temp.getElement();
    return div;
}

export function createButton(id, className, type){
    const temp = new CreateElement("button", id, className, "");
    const button = temp.getElement();
    button.setAttribute("type", type);
    return button;
}

export function createParagraph(id, className){
    const temp = new CreateElement("p", id, className, "");
    const paragraph = temp.getElement();
    return paragraph;
}