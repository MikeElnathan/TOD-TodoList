
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

export function importImage(id, className, src){
    const Image = document.createElement("img");
    Image.src = src;
    Image.className = className;
    Image.id = id;

    return Image;
}

export function storageCheck(type){
    let storage;
    try{
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);

        return true;
    }catch(e){
        return(
            e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
        );
    }
}