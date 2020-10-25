// Hedvig

//hva brukes denne til?
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
      console.log("File: ",file);
        let boxSingle = document.createElement("div");
        boxSingle.setAttribute("class", "box-single");
        imageGrid[0].appendChild(boxSingle);
        let boxImage = document.createElement("img");
        let imageSrc = "../img/"+ file.fileName;
        boxImage.setAttribute("class", "box-img");
        boxImage.setAttribute("alt","bilde");
        boxImage.setAttribute("src", imageSrc);
        boxSingle.appendChild(boxImage);
        console.log(imageSrc);
        boxImage.onclick = (() => on(imageSrc));
        let boxCaption = document.createElement("div");
        boxCaption.setAttribute("class", "box-caption");
        boxSingle.appendChild(boxCaption);
        let boxCaptionP = document.createElement("p");
        boxCaptionP.setAttribute("id", "box-caption");
        boxCaptionP.innerHTML = file.projectName+" "+file.finishYear;
        boxCaption.appendChild(boxCaptionP);
    }
}

function filterKronologiskByYear(arr) {
    let sortedYear = arr.sort( (a,b) => {
        if (a.finishYear < b.finishYear) {
          return 1;
        } else if (b.finishYear < a.finishYear) {
          return -1;
        } else {
          return 0;
        }
    });
    console.log("Sorted Year: ",sortedYear);
  return sortedYear;
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
    let sortedFileBoligList = filterKronologiskByYear(fileBoligList);
    console.log("Sorted liste bolig: ", sortedFileBoligList);
    console.log("Liste bolig: ", fileBoligList);
    return sortedFileBoligList;
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
    let sortedFileEneboligList = filterKronologiskByYear(fileEneboligList);
  return sortedFileEneboligList;
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
    let sortedFileFritidsboligList = filterKronologiskByYear(fileFritidsboligList);
    return sortedFileFritidsboligList;
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
    let sortedFileIdeerList = filterKronologiskByYear(fileIdeerList);
    return sortedFileIdeerList;
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
    let sortedFileMindreByggList = filterKronologiskByYear(fileMindrebyggList);
  return sortedFileMindreByggList;
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
    let sortedFileNaeringList = filterKronologiskByYear(fileNaeringList);
  return sortedFileNaeringList;
}

function showBolig() {
    let boligFilerList = filterBolig();
    imageGrid(boligFilerList);
}

function onloadShowBolig() {
    //buildNavbar();
    buildSortprojects();
    showBolig();
    //buildFooter();
}

function showEnebolig() {
    let eneboligFilerList = filterEnebolig();
    imageGrid(eneboligFilerList);
}

function onloadShowEnebolig() {
    buildNavbar();
    buildSortprojects();
    showEnebolig();
    //buildFooter();
}

function showFritidsbolig() {
    let fritidsboligFilerList = filterFritidsbolig();
    imageGrid(fritidsboligFilerList);
}

function onloadShowFritidsbolig() {
    buildNavbar();
    buildSortprojects();
    showFritidsbolig();
    //buildFooter();
}

function showIdeer() {
    let ideerFilerList = filterIdeer();
    imageGrid(ideerFilerList);
}

function onloadShowIdeer() {
    buildNavbar();
    buildSortprojects();
    showIdeer();
    //buildFooter();
}

function showMindrebygg() {
    let mindrebyggFilerList = filterMindrebygg();
    imageGrid(mindrebyggFilerList);
}

function onloadShowMindrebygg() {
    buildNavbar();
    buildSortprojects();
    showMindrebygg();
    //buildFooter();
}

function showNaering() {
    let naeringFilerList = filterNaering();
    imageGrid(naeringFilerList);
}

function onloadShowNaering() {
    buildNavbar();
    buildSortprojects();
    showNaering();
    //buildFooter();
}

function showKronologisk() {
    let kronologiskList = filterKronologiskByYear(imageLibrary.files);
    imageGrid(kronologiskList);
}

function onloadShowKronologisk() {
    buildNavbar();
    buildSortprojects();
    showKronologisk();
    //buildFooter();
}

function onloadProsjekttype() {
    buildNavbar();
    buildSortprojects();
}

function onloadShowBeliggenhet() {
    buildNavbar();
    buildSortprojects();
}
