import { CreateElement } from "./helper";

const temp = new CreateElement("p", "greeting", "", "");
const greeting = temp.getElement();

greeting.style.cssText = "color: white; text-align: center; font-size: 3rem; margin: 0; padding-top: 0;";
greeting.innerText = "Welcome stranger in the night!"

export {greeting};