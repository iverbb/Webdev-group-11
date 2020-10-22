// Hedvig

Object.size = function(obj) {
    let size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

let findObjectByKey = function(obj, key) {
    if(obj.type === key) { return obj; }
    for(let i in obj) {
        if(obj.hasOwnProperty(i)){
            let foundKey = findObjectByKey(obj[i], key);
            if(foundKey) { return foundKey; }
        }
    }
    return null;
};

function imageGrid(filerList) {
    let imageGrid = document.getElementsByClassName("box-grid");
    for (let i in filerList) {
        let file = filerList[i];
        let boxSingle = document.createElement("div");
        boxSingle.setAttribute("class", "box-single");
        imageGrid[0].appendChild(boxSingle);
        let boxImage = document.createElement("img");
        boxImage.setAttribute("class", "box-img");
        boxImage.setAttribute("alt","bilde");
        boxImage.setAttribute("src","../img/"+ file.fileName);
        boxSingle.appendChild(boxImage);
        let boxCaption = document.createElement("div");
        boxCaption.setAttribute("class", "box-caption");
        boxSingle.appendChild(boxCaption);
        let boxCaptionP = document.createElement("p");
        boxCaptionP.setAttribute("id", "box-caption");
        boxCaptionP.innerHTML = file.projectName+" "+file.finishYear;
        boxCaption.appendChild(boxCaptionP);
    }

}

function filterBolig() {
    let fileBoligList = [];
    for (let key in imageLibrary.files) {
        let file = imageLibrary.files[key];
        if (file.type === "bolig") {
            console.log(file);
            fileBoligList.push(file);
        }
    }
    return fileBoligList
}

function filterEnebolig() {
    let fileEneboligList = [];
    for (let key in imageLibrary.files) {
        let file = imageLibrary.files[key];
        if (file.type === "enebolig") {
            console.log(file);
            fileEneboligList.push(file);
        }
    }
    return fileEneboligList
}

function filterFritidsbolig() {
    let fileFritidsboligList = [];
    for (let key in imageLibrary.files) {
        let file = imageLibrary.files[key];
        if (file.type === "fritidsbolig") {
            console.log(file);
            fileFritidsboligList.push(file);
        }
    }
    return fileFritidsboligList
}

function filterIdeer() {
    let fileIdeerList = [];
    for (let key in imageLibrary.files) {
        let file = imageLibrary.files[key];
        if (file.type === "ideer") {
            console.log(file);
            fileIdeerList.push(file);
        }
    }
    return fileIdeerList
}

function filterMindrebygg() {
    let fileMindrebyggList = [];
    for (let key in imageLibrary.files) {
        let file = imageLibrary.files[key];
        if (file.type === "mindre_bygg") {
            console.log(file);
            fileMindrebyggList.push(file);
        }
    }
    return fileMindrebyggList
}

function filterNaering() {
    let fileNaeringList = [];
    for (let key in imageLibrary.files) {
        let file = imageLibrary.files[key];
        if (file.type === "naering") {
            console.log(file);
            fileNaeringList.push(file);
        }
    }
    return fileNaeringList
}

function showBolig() {
    let boligFilerList = filterBolig();
    imageGrid(boligFilerList);
}

function showEnebolig() {
    let eneboligFilerList = filterEnebolig();
    imageGrid(eneboligFilerList);
}

function showFritidsbolig() {
    let fritidsboligFilerList = filterFritidsbolig();
    imageGrid(fritidsboligFilerList);
}

function showIdeer() {
    let ideerFilerList = filterIdeer();
    imageGrid(ideerFilerList);
}

function showMindrebygg() {
    let mindrebyggFilerList = filterMindrebygg();
    imageGrid(mindrebyggFilerList);
}

function showNaering() {
    let naeringFilerList = filterNaering();
    imageGrid(naeringFilerList);
}