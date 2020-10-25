// Functionality for autopopulating a projectview page by means of
// fetching a query string and then grabbing the appropriate project
// from the datalist

function populate() {

  const params = new URLSearchParams(window.location.search);
  let project  = params.get("fileName");

  //console.log(imageLibrary.files);
  let file          = imageLibrary.files.filter(proj => proj.projectName == project)[0];

  let imageBox             = document.getElementById("projectImage");
  let projImage            = document.createElement("img");

  projImage.src            = "../img/" + file.fileName;
  projImage.style.maxWidth = "80%";
  imageBox.appendChild(projImage);


  let textBox       = document.getElementById("projectText");
  textBox.style.maxWidth = "80%";



  let projText      = file.description;
  let projYear      = file.year;
  textBox.innerText = projText;
}

populate();
