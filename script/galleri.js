// Hedvig

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

function filterKronologiskByYear(arr) {
  let sortedYear = arr.sort((a, b) => {
    if (a.finishYear < b.finishYear) {return 1;}
    if (b.finishYear < a.finishYear) {return -1;}
    return 0;
  });
  console.log("Sorted Year: ", sortedYear);
  return sortedYear;
}

function filterByType(prosjektType) {
  let fileTypeList = imageLibrary.files;
  if (prosjektType) {
    fileTypeList = fileTypeList.filter((file) => file.type === prosjektType);
  }
  return filterKronologiskByYear(fileTypeList);
}

function onloadShow(type) {
  buildSortprojects(buttons);
  if
    ( type === "prosjekttype"
      || type === "beliggenhet"
      || type  === "kronologisk") {
      type = "";
    }
  imageGrid(filterByType(type));
}

function onloadShowBolig() {
  buildSortprojects(tags);
  imageGrid(filterByType("bolig"));
}

function onloadShowEnebolig() {
  buildSortprojects(tags);
  imageGrid(filterByType("enebolig"));
}

function onloadShowFritidsbolig(tags) {
  buildSortprojects(tags);
  imageGrid(filterByType("fritidsbolig"));
}

function onloadShowIdeer() {
  buildSortprojects(tags);
  imageGrid(filterByType("ideer"));
}

function onloadShowMindrebygg() {
  buildSortprojects();
  imageGrid(filterByType("mindre_bygg"));
}

function onloadShowNaering() {
  buildSortprojects();
  imageGrid(filterByType("naering"));
}

function onloadShowKronologisk() {
  buildSortprojects();
  imageGrid(filterKronologiskByYear(imageLibrary.files));
}

function onloadProsjekttype() {
  buildSortprojects(buttons);
}

function onloadShowBeliggenhet() {
  buildSortprojects();
}
