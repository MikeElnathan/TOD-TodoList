export class CreateElement{
    constructor(tag, id, classname, display){
        this.tag = tag;
        this.id = id;
        this.classname = classname;
        this.display = display;

        const temp = document.createElement(tag);
        temp.id = id;
        temp.className = classname;
        temp.style.display = display;
        this.element = temp;
    }
    get element(){
        return this.element;
    }
}