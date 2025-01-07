import "./styles.css";
import { greeting } from "./OverviewBoard";

const content = document.getElementById("content");
const link = document.getElementsByClassName("navLink");

// Default to overview board
    let nav = "Overview";
    navigate(nav);
// Attach event listener
if(link.length > 0){
    Array.from(link).forEach(link => {
        link.addEventListener("click", () => {
            nav = link.innerText;
            navigate(nav);
        })
    });
}
// switch case function to navigate between page
function navigate(nav){
    switch(nav){
        case "Profile":
            console.log(nav);
            rmCurrentPage();
            break;
        case "Projects":
            console.log(nav);
            rmCurrentPage();
            break;
        case "Calendar":
            console.log(nav);
            rmCurrentPage();
            break;
        case "Overview":
            console.log(nav);
            rmCurrentPage();
            content.appendChild(greeting);
            break;
        case "Setting":
            console.log(nav);
            rmCurrentPage();
            break;
    }
}
// function to remove page that are attached 
// to content before appending new page
function rmCurrentPage(){
    if(content.firstChild){
        content.removeChild(content.firstChild);
        console.log("removing child");
    }else console.log("No child to be removed");
}