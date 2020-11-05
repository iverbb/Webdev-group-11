// add coordinates to element
function setCoords(element, x, y) {
  element.style.left = x;
  console.log("set x to: " + element.style.left);

  element.style.top  = y;
  console.log("set y to: " + element.style.top);
}

function onMap(point) {
  const y = point.north;
  const x = point.east;
  console.log("x: " + x);
  console.log(edges.left, edges.right);
  return ((y <= edges.top && y >= edges.bottom) &&
          (x >= edges.left));
}

// There's no fucking way I'm hazarding a guess on estimating coordinates in the middle of the
// goddamn ocean, so I'd rather estimate it based on ratios
let edges = { bottom: 58.95144699,
              top: 58.97505609,
              left: 5.69731236,
            };

function guesstimateRightEdge(left, height, imgHeight, imgWidth) {
  return left + height * (imgWidth / imgWidth);
}


let images = [
  "bolig_grandkvartalet_01.jpg",
  "bolig_meto.jpg",
  "bolig_myklebust.jpg"
];

function calcCoord(coordinate) {
  // console.log(coordinate);
  // console.log("in x: " + (coordinate.x));
  let diffX     = edges.left - coordinate.east;
  let diffY     = edges.top  - coordinate.north;

  let map       = document.getElementById("map");
  while (!map.src) {
    console.log("map ", map);
    map = document.getElementById("map");
  }
  let mapWidth  = map.width;
  let mapHeight = map.height;

  let height    = edges.top - edges.bottom;
  let right     = guesstimateRightEdge(edges.left, height, mapHeight, mapWidth);
  let width     = edges.left - right;

  let x         = diffX / width  * 100;
  let y         = diffY / height * 100;

  if ((x > 100) || (y > 100) || (x == "")) { return ""; }

  return {x: x + "%", y: y + "%"};
}

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
function drawPoint(project, i) {
  //console.log(project.coordinate);

  let coords = calcCoord(project.coordinate);
  if (!coords) {return "";}
  // console.log(project.coordinate.east);
  let house = document.createElement("div");

  //console.log(coords);

  house.setAttribute("class", "marker");

  setCoords(house, coords.x, coords.y);
  // house.style.left = coords.x;
  // console.log("set left");
  // house.style.top = coords.y;
  // console.log("set top");

  let pic = document.createElement("img");
  pic.style.position = "absolute";
  pic.src = "../img/" + project.fileName;
  pic.alt = "";

  let imgId = "house"  + i;
  pic.id = imgId;
  pic.style.left = "-60px";
  pic.style.top = "-40px";
  pic.className = "mapImg";
  pic.style.visibility = "hidden";
  pic.onclick = (() => on("../img/" + project.fileName));
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
function markMap(projectFiles) {
  let docFrag = document.createDocumentFragment();
  let counter = 0;
  projectFiles.files.forEach((project) =>
    { if (project.coordinate && onMap(project.coordinate))
      {
        let house = drawPoint(project, counter);
        if (house) {
          docFrag.appendChild(house);
          counter++;
        }
      }
    });

  let myContainer = document.querySelector("#mapContainer");
  myContainer.appendChild(docFrag);
}
