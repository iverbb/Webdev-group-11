// Nora

function on(img) {
  let overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  overlay.querySelector("img").src = img;
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
  textFrame.style.width = projectImage.style.width;
  textFrame.style.display = "block";
  textFrame.style.backgroundColor = "#eeeeee";
  textFrame.style.margin = "auto";
  textFrame.innerText = "tested";

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
