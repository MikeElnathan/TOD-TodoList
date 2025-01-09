import { CreateElement, createInput } from "./helper";
import { Cards } from "./logic";

const temp = new CreateElement("div", "ProjectWrapper", "", "grid");
const ProjectWrapper = temp.getElement();
let savedCard = [];
// ---------------------------------------------------------------------
// create a function to check and load json file here
    // TODO
// ----------------------------------------------------------------------
const temp2 = new CreateElement("div", "AddProjects", "cards", "grid");
const AddProjects = temp2.getElement();

const cardTitle = createInput("text", "", "cardsTitle", "Create project");

const temp4 = new CreateElement("button", "addButton", "", "");
const addTask = temp4.getElement();
addTask.innerText = "+";

const temp5 = new CreateElement("div", "workSpace", "", "flex");
const workSpace = temp5.getElement();
workSpace.style.display = "none";

AddProjects.appendChild(cardTitle);
AddProjects.appendChild(addTask);

// ----Create Card-------------------------------------------------------
if(addTask){
    addTask.addEventListener("click", () => {
        getInput();
    });
}

function getInput(){
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

// -----------------------------------------------------------------------

ProjectWrapper.appendChild(AddProjects);
ProjectWrapper.appendChild(workSpace);

export {ProjectWrapper};