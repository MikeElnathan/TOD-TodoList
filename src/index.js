import "./styles.css";

const content = document.getElementById("content");
const link = document.getElementsByClassName("navLink");

// Attach event listener
if(link.length > 0){
    Array.from(link).forEach(link => {
        link.addEventListener("click", () => {
            const nav = link.innerText;
            navigate(nav);
        })
    });
}
// switch case function to navigate between page
function navigate(nav){
    switch(nav){
        case "Profile":
            console.log("Profile");
            rmCurrentPage();
            break;
        case "Projects":
            console.log("Projects");
            rmCurrentPage();
            break;
        case "Calendar":
            console.log("Calendar");
            rmCurrentPage();
            break;
        case "Coconuts":
            console.log("Coconuts");
            rmCurrentPage();
            break;
        case "Setting":
            console.log("Setting");
            rmCurrentPage();
            break;
    }
}
// function to remove page that are attached 
// to content before appending new page
function rmCurrentPage(){
    if(content.firstChild){
        content.removeChild(content.firstChild);
    }
}