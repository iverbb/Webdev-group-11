function createImageBox(imageGrid) {
    let boxSingle = document.createElement("div");
    boxSingle.className = "box-single";
    imageGrid[0].appendChild(boxSingle);
    return boxSingle;
}

function createSingleImage(file, boxSingle) {
    let imageSrc = "../img/" + file.fileName;
    let boxImage = document.createElement("img");
    boxImage.className = "box-img";
    boxImage.alt = "bilde av " + file.projectName;
    boxImage.src = imageSrc;
    boxImage.onclick = (() => on(imageSrc));
    boxSingle.appendChild(boxImage);
}

function createImageTextBox(boxSingle) {
    let boxCaption = document.createElement("div");
    boxCaption.className = "box-caption";
    boxSingle.appendChild(boxCaption);
    return boxCaption;
}

// Displays the name of project and finish year of each element
function createImageText(file, boxCaption) {
    let boxCaptionP = document.createElement("p");
    boxCaptionP.id = "box-caption";
    boxCaptionP.innerHTML = file.projectName + " " + file.finishYear;
    boxCaption.appendChild(boxCaptionP);
}

// Makes as many divs of boxSingle as there are images in the fileList
function imageGrid(fileList) {
    let imageGrid = document.getElementsByClassName("box-grid");
    for (let i in fileList) {
        let file = fileList[i];
        let boxSingle = createImageBox(imageGrid);
        createSingleImage(file, boxSingle);
        let boxCaption = createImageTextBox(boxSingle);
        createImageText(file, boxCaption);
    }
}

// Sorts by year by using the sort() function that returns:
//  - negative value if b argument is less than a argument,
//  - zero if they're equal
//  - positive value otherwise.
// The elements are sorted in descending.
function sortByYearDescending(fileList) {
    return fileList.sort((a, b) => {
        return b.finishYear - a.finishYear;
    });
}

// Filters either on type of building or if chronological it removes the news
// Then it is sorted chronologically before the list is returned
function filterByTypeAndSortDesc(sortingParameter) {
    let fileTypeList = imageLibrary.files;
    if (sortingParameter === "kronologisk") {
        fileTypeList = fileTypeList
            .filter((file) => file.type !== "nyhet");
    } else {
        fileTypeList = fileTypeList
            .filter((file) => file.type === sortingParameter);
    }
    return sortByYearDescending(fileTypeList);
}

// Includes a sorting option the user can navigate between the filters
let buildSortprojects =
    (() => buildHambar("sortingprojects", hambarOptions.buttons, "Sorter", false));

// Onloads it all
function onloadShow(sortingParameter) {
    buildSortprojects();
    if (sortingParameter !== "beliggenhet") {
        imageGrid(filterByTypeAndSortDesc(sortingParameter));
    }
}
