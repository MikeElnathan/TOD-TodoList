
function isString(value){
    return typeof value === "string";
}

export class CreateElement{
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