import {
  createButton,
  createDiv,
  createInput,
  createParagraph,
  importImage,
} from "./helper";
import { fetchData, saveToStorage } from "./logic";
import Icon from "/asset/bx-save.svg";

const ProjectWrapper = createDiv("ProjectWrapper", "", "grid");

class Card {
  constructor(stringTitle, workSpace) {
    this.stringTitle = stringTitle;
    this.card = this.createCard();
    this.workSpace = workSpace;
    this.workSpace.appendChild(this.card);
  }
  createCard() {
    const card = createDiv("", "cards subTask", "");

    const taskTitle = createParagraph("", "taskTitle");
    taskTitle.textContent = this.stringTitle;
    const inputElement = createInput("text", "", "taskList", "Add sub-task");

    inputElement.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        createSubTask("", "subList", card, inputElement, "");
      }
    });

    const saveIcon = importImage("saveButton", "", Icon);
    saveIcon.addEventListener("click", () => this.saveProjects());

    card.append(taskTitle, inputElement, saveIcon);
    workSpace.style.display = "flex";

    return card;
  }

  saveProjects() {
    let temp = [];
    let taskData = {
      // title: this.stringTitle,
      subtask: Array.from(this.card.querySelectorAll(".subList")).map(
        (subtask) => subtask.innerText,
      ),
    };
    temp.push(taskData);
    saveToStorage(this.stringTitle, temp);
  }
}

function createSubTask(
  id,
  className,
  parentNode,
  inputElement,
  subText,
) {
  const subtask = createParagraph(id, className);

  const checkMark = createParagraph("", "checkMark");
  checkMark.textContent = "x";

  checkMark.addEventListener("click", () => {
    console.log("I'm a text X");
  });

  if (subText !== "") {
    subtask.innerText = subText;
  } else {
    subtask.innerText = inputElement.value;
  }

  parentNode.insertBefore(subtask, inputElement);
  parentNode.insertBefore(checkMark, subtask);

  inputElement.value = "";
}

function createNewTask() {
  if (cardTitle.value.trim() != "") {
    const c = new Card(cardTitle.value, workSpace);
    cardTitle.value = "";
  } else {
    alert("Title can't be empty");
  }
}

const addTask = createButton("addButton", "", "text");
addTask.innerText = "+";
addTask.addEventListener("click", () => {
  createNewTask();
});

window.addEventListener("load", function () {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    let storedArray = fetchData(key);

    const c = new Card(key, workSpace);
    const inputEle = c.card.querySelector(".taskList");
    
    for (let task of storedArray) {
      for(let items of task.subtask){
        createSubTask("", "subList", c.card, inputEle, items);
      }
    }
  }
});

const AddProjects = createDiv("AddProjects", "cards", "grid");

const cardTitle = createInput("text", "", "cardsTitle", "Create project");

const workSpace = createDiv("workSpace", "", "flex");
workSpace.style.display = "none";

AddProjects.append(cardTitle, addTask);

ProjectWrapper.append(AddProjects, workSpace);

export { ProjectWrapper };
