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
  let projectImage = document.createElement("img");
  projectImage.style.maxWidth = "75%";
  projectImage.style.maxHeight = "75%";
  projectImage.style.margin = "auto";
  projectImage.style.display = "block";
  projectImage.id = "overlayImage";

  let overlay = document.createElement("div");
  overlay.onclick = (() => off());
  overlay.id = "overlay";
  overlay.appendChild(projectImage);
  document.body.prepend(overlay);
}

overlayImage();

/* 

add this to html:

<div id="overlay"></div>

*/
