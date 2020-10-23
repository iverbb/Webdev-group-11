// Functionality for autopopulating a projectview page by means of
// fetching a query string and then grabbing the appropriate project
// from the datalist

function populate() {

    const params = new URLSearchParams(window.location.search);
    let project  = params.get("fileName");

    let imageBox             = document.getElementById("projectImage");
    let projImage            = document.createElement("img");
    projImage.src            = "../img/" + project;
    projImage.style.maxWidth = "80%";
    imageBox.appendChild(projImage);


    let textBox       = document.getElementById("projectText");
    let projText      = data.files.filter(proj => proj.fileName == project)[0].year;
    textBox.innerText = projText;
}

populate();
