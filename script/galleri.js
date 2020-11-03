// Hedvig

function imageGrid(filerList) {
    let imageGrid = document.getElementsByClassName("box-grid");
    for (let i in filerList) {
        let file = filerList[i];
        let boxSingle = document.createElement("div");
        boxSingle.setAttribute("class", "box-single");
        imageGrid[0].appendChild(boxSingle);
        let boxImage = document.createElement("img");
        let imageSrc = "../img/" + file.fileName;
        boxImage.setAttribute("class", "box-img");
        boxImage.setAttribute("alt", "bilde");
        boxImage.setAttribute("src", imageSrc);
        boxSingle.appendChild(boxImage);
        boxImage.onclick = (() => on(imageSrc));
        let boxCaption = document.createElement("div");
        boxCaption.setAttribute("class", "box-caption");
        boxSingle.appendChild(boxCaption);
        let boxCaptionP = document.createElement("p");
        boxCaptionP.setAttribute("id", "box-caption");
        boxCaptionP.innerHTML = file.projectName + " " + file.finishYear;
        boxCaption.appendChild(boxCaptionP);
    }
}

function filterKronologiskByYear(arr) {
    let sortedYear = arr.sort((a, b) => {
        if (a.finishYear < b.finishYear) {
            return 1;
        } else if (b.finishYear < a.finishYear) {
            return -1;
        } else {
            return 0;
        }
    });
    console.log("Sorted Year: ", sortedYear);
    return sortedYear;
}

function filterByType(prosjekttype) {
    let fileTypeList = [];
    for (let key in imageLibrary.files) {
        let file = imageLibrary.files[key];
        if (file.type === prosjekttype) {
            fileTypeList.push(file);
        }
    }
    return filterKronologiskByYear(fileTypeList);

}

function onloadShowBolig() {
    buildSortprojects();
    imageGrid(filterByType("bolig"));
}

function onloadShowEnebolig() {
    buildSortprojects();
    imageGrid(filterByType("enebolig"));
}

function onloadShowFritidsbolig() {
    buildSortprojects();
    imageGrid(filterByType("fritidsbolig"))
}

function onloadShowIdeer() {
    buildSortprojects();
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
    buildSortprojects();
}

function onloadShowBeliggenhet() {
    buildSortprojects();
}
