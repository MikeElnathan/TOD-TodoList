import { CreateElement } from "./helper";

const temp2 = new CreateElement("div", "OverviewWrapper", "", "grid");
const wrapper = temp2.getElement();

const temp = new CreateElement("p", "greeting", "", "");
const greeting = temp.getElement();

greeting.style.cssText = "color: white; text-align: center; font-size: 3rem; margin: 0; padding-top: 0;";
greeting.innerText = "Welcome stranger in the night!"

wrapper.appendChild(greeting);

export {wrapper};
// to encapsulate wrapper in a function that return the object wrapper