// Hedvig

// structures the image grid and the necessary number of div depending on how many images there are in the list
// by taken in the parameter of a list specified on which filter option is needed.
// It also displays the name of project and finish year of each element in the list
function imageGrid(filerList) {
  let imageGrid = document.getElementsByClassName("box-grid");
  for (let i in filerList) {
    let file = filerList[i];

    let boxSingle = document.createElement("div");
    //boxSingle.setAttribute("class", "box-single");
    boxSingle.className = "box-single";
    imageGrid[0].appendChild(boxSingle);

    let imageSrc = "../img/" + file.fileName;
    let boxImage = document.createElement("img");
    boxImage.className = "box-img";
    boxImage.alt = "bilde";
    boxImage.src = imageSrc;
    boxImage.onclick = (() => on(imageSrc));
    boxSingle.appendChild(boxImage);

    let boxCaption = document.createElement("div");
    boxCaption.className = "box-caption";
    boxSingle.appendChild(boxCaption);

    let boxCaptionP = document.createElement("p");
    boxCaptionP.id = "box-caption";
    boxCaptionP.innerHTML = file.projectName + " " + file.finishYear;
    boxCaption.appendChild(boxCaptionP);
  }
}

// sorts by year
function sortChronologicallyByYear(arr) {
  let sortedYear = arr.sort((a, b) => {
    if (a.finishYear < b.finishYear) {return 1;}
    if (b.finishYear < a.finishYear) {return -1;}
    return 0;
  });
  console.log("Sorted Year: ", sortedYear);
  return sortedYear;
}

// filter by which type of building it is by taken a string in with the preferred name of building and finds it in imageLibrary.
// Then it is sorted chronologically
function filterByType(prosjektType) {
  let fileTypeList = imageLibrary.files;
  if (prosjektType) {
    fileTypeList = fileTypeList.filter((file) => file.type === prosjektType);
  }
  return sortChronologicallyByYear(fileTypeList);
}

// include a sorting option the user can navigate between the filters
let buildSortprojects =
    (() => buildHambar("sortingprojects", hambarOptions.buttons, "Sorter", false));

//onloads it all
function onloadShow(type) {
  buildSortprojects();
  if
    ( type === "beliggenhet"
      || type  === "kronologisk") {
      type = "";
    }
  imageGrid(filterByType(type));
}
