// Finds a file given its pathname
function find(fileName) {
    let project = imageLibrary.files.filter(
        (file) => (("../img/" + file.fileName) === fileName))[0];
    console.log("Return project: ", project);
    return project;
}

// Heuristic for determinging completion status for projects
function status(project) {
    if (project.fileName.match("^ideer")) {
        return "ide";
    }

    if (project.finishYear) {
        return "Fullført";
    }

    if (project.startYear) {
        return "Pågående";
    }

    return "Ide";
}

// Creates a templated value field given name and value in json
// Skips null values
function projectField(name, value) {
    //console.log(verdi);
    return verdi ? name + ": " + value + "</br>" : "";
}

// Creates a string representing start and finish year of function
function projectDate(project) {
    return project.startYear + (project.finishYear ? "-" + project.finishYear : "");
}

// Creates an informationbox
function projectDetails(project) {
    let projectText = "";
    [
        {navn: "Status", verdi: status(project)},
        {navn: "Klient", verdi: project.client},
        {navn: "Type", verdi: project.type},
        {navn: "Program", verdi: project.program},
        {navn: "Sted", verdi: project.location},
        {navn: "Team", verdi: "Bark Arkitekter"},
        {navn: "År", verdi: projectDate(project)},
    ].forEach((a) => {
        projectText += projectField(a.navn, a.verdi);
    });
    return projectText;


}

// Displays image overlay with information
function on(img) {
    let project = find(img);
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    overlay.querySelector("img").src = "../img/" + project.fileName;
    overlay.querySelector("#overlaytext").innerText = project.description;
    overlay.querySelector("#overlaytitle").innerText = project.projectName;
    overlay.querySelector("#overlaydetails").innerHTML = projectDetails(project);
}

// hides image overlay
function off() {
    document.getElementById("overlay").style.display = "none";
}

// displays image in the overlay
function overlayImage() {
    let projectDisplay = document.createElement("div");
    projectDisplay.id = "displaybox";
    projectDisplay.style.width = "80%";
    projectDisplay.style.height = "100%";
    projectDisplay.style.margin = "auto";

    let projectImage = document.createElement("img");
    projectImage.style.maxWidth = "80%";
    projectImage.style.width = "inherit";
    projectImage.style.objectFit = "contain";
    projectImage.style.maxHeight = "80%";
    projectImage.style.display = "block";
    projectImage.style.margin = "auto";
    projectImage.style.marginTop = "90px"; //make same height as navbar, does this only go for the top image?
    projectImage.id = "overlayImage";

    let textFrame = document.createElement("div");
    textFrame.id = "textFrame";
    textFrame.style.width = projectImage.style.width;
    textFrame.style.height = "15%";
    textFrame.style.display = "block";
    textFrame.style.backgroundColor = "none"; //making the overlay transparent
    textFrame.style.margin = "auto";
    textFrame.style.marginTop = "0";

    let description = document.createElement("div");
    let projectTitle = document.createElement("h3");
    let projectText = document.createElement("p");
    projectTitle.id = "overlaytitle";
    //projectTitle.style.marginTop = "40";
    projectText.id = ("overlaytext");
    //projectText.style.marginTop = "20px"; //short description of project
    description.appendChild(projectTitle);
    description.appendChild(projectText);
    description.id = "overlaydescription";
    description.style.width = "70%";
    description.style.float = "left";

    let details = document.createElement("div");
    details.id = "overlaydetails";
    details.style.width = "20%";
    details.style.float = "right";
    details.style.textAlign = "right";
    //details.style.marginTop = "20px";

    textFrame.appendChild(details);
    textFrame.appendChild(description);


    let overlay = document.createElement("div");
    overlay.onclick = (() => off());
    overlay.id = "overlay";

    projectDisplay.appendChild(projectImage);
    projectDisplay.appendChild(textFrame);
    overlay.appendChild(projectDisplay);
    document.body.prepend(overlay);
}

overlayImage();

/* 

add this to html:

<div id="overlay"></div>

*/
