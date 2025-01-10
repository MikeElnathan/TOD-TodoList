import { createDiv, createParagraph } from "./helper";

const wrapper = createDiv("OverviewWrapper", "", "grid");

const greeting = createParagraph("greeting", "");

greeting.style.cssText = "color: white; text-align: center; font-size: 3rem; margin: 0; padding-top: 0;";
greeting.textContent = "Welcome stranger in the night!"

wrapper.appendChild(greeting);

export {wrapper};
// to encapsulate wrapper in a function that return the object wrapper