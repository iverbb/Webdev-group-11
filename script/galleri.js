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

function showBolig() {
    let boligFilerList = filterBolig();
    let imageGrid = document.getElementsByClassName("box-grid");
    for (let i in boligFilerList) {
        let file = boligFilerList[i];
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