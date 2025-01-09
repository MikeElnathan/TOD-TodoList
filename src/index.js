import "./styles.css";
import { wrapper } from "./OverviewBoard";
import { ProjectWrapper } from "./ProjectPage";

const content = document.getElementById("content");
const link = document.getElementsByClassName("navLink");

// Default to overview board
    let nav = "Projects";
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

// function to remove page that are attached 
// to content before appending new page
function rmCurrentPage(){
    if(content.firstChild){
        content.removeChild(content.firstChild);
        console.log("removing child");
    }else console.log("No child to be removed");
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
            content.appendChild(ProjectWrapper);
            break;
        case "Calendar":
            console.log(nav);
            rmCurrentPage();
            break;
        case "Overview":
            console.log(nav);
            rmCurrentPage();
            content.appendChild(wrapper);
            break;
        case "Setting":
            console.log(nav);
            rmCurrentPage();
            break;
    }
}