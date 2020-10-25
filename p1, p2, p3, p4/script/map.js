// First draft for a map drawing thingy
// points should definitely be defined in an appropriate
// JSON at some point in the future
let points = [
    {x:120, y:230},
    {x:250, y:480},
    {x:310, y:50}
];

let images = [
    "treehouse1.jpeg",
    "treehouse2.jpeg",
    "treehouse3.jpeg"
];

// makes an image with the given id(or, well any object really) appear if hidden
function show(imageId) {
    document.querySelector("#" + imageId).style.visibility = "visible";
}

// makes an image with the given id(or, well any object really) disappear
function hide(imageId) {
    document.querySelector("#" + imageId).style.visibility = "hidden";
}

// input: point, coordinate on format {x: ??, y: ??}
//        path, path as a string
// output: A div element styled as marker
function drawPoint(point, imgPath, i) {
    let house = document.createElement("div");
    house.setAttribute("class", "marker");
    house.style.left = point.x+85 + "px";
    house.style.top = point.y-8 + "px";

    let pic = document.createElement("img");
    pic.src = "../img/" + imgPath;
    pic.alt = "";
    let imgId = "house"  + i;
    pic.id = imgId;
    pic.style.visibility = "hidden";
    house.appendChild(pic);
    house.addEventListener("mouseover", function(){
        show(imgId);
    });
    house.addEventListener("mouseout", function(){
        hide(imgId);
    });
    return house;
}

// Create a document fragment to batch add children simultaneously
// Supposedly increases efficiency
let docFrag = document.createDocumentFragment();
for (let i = 0; i < points.length; i++) {
    docFrag.appendChild(drawPoint(points[i], images[i], i));
}
let myContainer = document.querySelector("#mapContainer");
myContainer.appendChild(docFrag);
