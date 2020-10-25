// Nora
function find(fileName) {
  let project = imageLibrary.files.filter(
    (file) => (("../img/" + file.fileName) === fileName))[0];
  return project;
}

function on(img) {
  let project = find(img);
  let overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  overlay.querySelector("img").src = "../img/" + project.fileName;
  overlay.querySelector("#overlaydescription").innerText = project.description;
  overlay.querySelector("#overlaydetails").innerHTML
    = project.projectName.bold() + "</br>" + project.finishYear + "</br>" + project.location;
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
}

function overlayImage() {
  let projectDisplay = document.createElement("div");
  projectDisplay.id = "displaybox";
  projectDisplay.style.width = "75%";
  projectDisplay.style.height = "100%";
  projectDisplay.style.margin = "auto";

  let projectImage = document.createElement("img");
  projectImage.style.maxWidth = "75%";
  projectImage.style.width = "inherit";
  projectImage.style.maxHeight = "75%";
  projectImage.style.display = "block";
  projectImage.style.margin = "auto";
  projectImage.id = "overlayImage";

  let textFrame = document.createElement("div");
  textFrame.id = "textFrame";
  textFrame.style.width = projectImage.style.width;
  textFrame.style.height = "15%";
  textFrame.style.display = "block";
  textFrame.style.backgroundColor = "#eeeeee";
  textFrame.style.margin = "auto";

  let description = document.createElement("div");
  description.id = "overlaydescription";
  description.style.width = "45%";
  description.style.float = "right";

  let details = document.createElement("div");
  details.id = "overlaydetails";
  details.style.width = "45%";
  details.style.float = "left";

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
