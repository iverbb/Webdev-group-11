


function slideShowGrid(filerList) {
    let slideShowContainer = document.getElementsByClassName("slideshow-container");
    for (let i in filerList) {
        let file = filerList[i];
        let mySlides = document.createElement("div");
        mySlides.setAttribute("class", "mySlides");
        slideShowContainer[0].appendChild(mySlides);
        let mySlidesImage = document.createElement("img");
        mySlidesImage.setAttribute("class", "mySlides-img");
        mySlidesImage.setAttribute("alt","bilde");
        mySlidesImage.setAttribute("src","../img/"+ file.fileName);
        mySlides.appendChild(mySlidesImage);
    }
    console.log("SlideShowGrid: ",slideShowContainer);
}

function carousel(fileRandomList) {
    let i;
    let slideIndex = 0;
    const fileClass = fileRandomList.className
    let slideDisplay = document.getElementsByClassName(fileClass);
    console.log("SlideDisplay", slideDisplay);
    console.log("SlideDisplay length", slideDisplay.length);
    for (i = 0; i < slideDisplay.length; i++) {
        console.log("Slidedisplay this round: ", slideDisplay[i]);
        slideDisplay[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slideDisplay.length) {slideIndex = 1}
    slideDisplay[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
    console.log("SlideDisplay: ", slideDisplay);
}


function filterOnBolig() {
    let fileBoligList = [];
    for (let key in imageLibrary.files) {
        let file = imageLibrary.files[key];
        if (file.type === "bolig") {
            fileBoligList.push(file.fileName);
        }
    }
    console.log("Liste bolig: ", fileBoligList);
    return fileBoligList;
}

function showSlides() {
    console.log("Hei");
    let randomFilerList = filterOnBolig();
    let randomCarousel = carousel(randomFilerList);
    /*let testFilerList = filterOnBolig();*/
    slideShowGrid(randomCarousel);
    /*slideShowGrid(testFilerList);*/
}

function filterRandom() {
    let fileRandomList = [];
    for (let key in imageLibrary.file) {
        let file = imageLibrary.files;
        let randomKey = findObjectByKeyRandomly(file);
        fileRandomList.push(randomKey);
        console.log("File: ", file);
    }
    console.log("Liste Random: ", fileRandomList);
    return fileRandomList;
}

let findObjectByKeyRandomly = function(obj) {
    let keys = Object.keys(obj);
    console.log("keys: ", keys);
    return obj[keys[keys.length * Math.random() << 0]];
};


//News

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("box-grid");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}