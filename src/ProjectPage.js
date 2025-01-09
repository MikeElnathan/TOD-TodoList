import { CreateElement } from "./helper";

const temp = new CreateElement("div", "ProjectWrapper", "", "grid");
const ProjectWrapper = temp.getElement();
// ----------------------------------------------------------------------
const temp2 = new CreateElement("div", "AddProjects", "", "grid");
const AddProjects = temp2.getElement();

const temp3 = new CreateElement("input", "", "cardsTitle", "");
const cardTitle = temp3.getElement();
cardTitle.setAttribute("type", "text");
cardTitle.setAttribute("required", "");
cardTitle.setAttribute("placeholder", "Title here");

const temp4 = new CreateElement("button", "addButton", "", "");
const addTask = temp4.getElement();
addTask.innerText = "+";

AddProjects.appendChild(cardTitle);
AddProjects.appendChild(addTask);
// ----Create Card-------------------------------------------------------

// -----------------------------------------------------------------------
ProjectWrapper.appendChild(AddProjects);

export {ProjectWrapper};