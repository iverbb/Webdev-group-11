


function slideShowGrid(filerList) {
    let images = document.getElementsByClassName("mySlides");
    for (let i in filerList) {
        //let file = filerList[i];
        let boxSingle = document.createElement("div");
        boxSingle.setAttribute("class", "box-single");
        images[0].appendChild(boxSingle);
    }
    console.log("SlideShowGrid: ",images);
}

function carousel() {
    let i;
    let slideIndex = 0;
    let slideDisplay = filterRandom();
    for (i = 0; i < slideDisplay.length; i++) {
        slideDisplay[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slideDisplay.length) {slideIndex = 1}
    slideDisplay[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
    console.log("SlideDisplay", slideDisplay);
}

function filterRandom() {
    let fileRandomList = [];
    for (let key in imageLibrary.files) {
        let file = imageLibrary.files;
        findObjectByKeyRandomly(file);
        fileRandomList.push(file);
    }
    console.log("Liste Random: ", fileRandomList);
    return fileRandomList;
}

let findObjectByKeyRandomly = function(obj) {
    let keys = Object.keys(obj);
    console.log("keys: ", keys)
    return obj[keys[keys.length * Math.random() << 0]];
};

function showSlides() {
    let randomFilerList = filterRandom();
    slideShowGrid(randomFilerList);
}
