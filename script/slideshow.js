function createSlide(fileNameList, i, slideShowContainer) {
    let fileName = fileNameList[0][i];
    let fileDescription = fileNameList[1][i];
    let fileHeader = fileNameList[2][i];
    let mySlides = document.createElement("div");
    mySlides.setAttribute("class", "mySlide");
    slideShowContainer[0].appendChild(mySlides);
    //let divImage = document.createElement("div");
    //divImage.setAttribute("class", "mySLides-divImage");
    let mySlidesImage = document.createElement("img");
    mySlidesImage.setAttribute("class", "mySlides-img");
    mySlidesImage.setAttribute("alt", "bilde");
    mySlidesImage.setAttribute("src", "../img/" + fileName);
    //divImage.appendChild(mySlidesImage);
    //mySlides.appendChild(divImage);
    mySlides.appendChild(mySlidesImage)
    let mySlidesCaption = document.createElement("div");
    mySlidesCaption.setAttribute("class", "mySlides-caption")
    let mySlidesHeader = document.createElement("h3");
    mySlidesHeader.setAttribute("class", "mySlides-header");
    mySlidesCaption.appendChild(mySlidesHeader);
    let header = document.createTextNode(fileHeader);
    mySlidesHeader.appendChild(header);
    let mySlidesText = document.createElement("p");
    mySlidesText.setAttribute("class", "mySlides-text");
    mySlidesCaption.appendChild(mySlidesText);
    let text = document.createTextNode(fileDescription);
    mySlidesText.appendChild(text);
    mySlides.appendChild(mySlidesCaption);
    console.log("myslides med tekst: ", mySlides);
}

function createDot(i, dotContainer) {
    let dotSpan = document.createElement("span");
    dotSpan.setAttribute("class", "dot");
    dotSpan.onclick = function () {
        currentSlide(i);
    };
    dotContainer.appendChild(dotSpan);
}

function slideShowGrid(fileNameList) {
    let slideShowContainer = document.getElementsByClassName("slideshow-container");
    for (let i in fileNameList[0]) {
        createSlide(fileNameList, i, slideShowContainer);
    }

    let dotContainer = document.getElementsByClassName("dot-container")[0];
    for (let i in fileNameList[0]) {
        createDot(i, dotContainer);
    }
}

function plusSlides(n) {
    carousel(slideIndex += n);
}

function currentSlide(n) {
    carousel(slideIndex = n);
}
let slideIndex = 0;

function carousel() {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    console.log("Slides: ", slides)
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log("Slideindex: ", slideIndex);
    if (slideIndex > slides.length) {slideIndex = 1;}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}


function filterOnNews() {
    let fileNewsImageList = [];
    let fileNewsDescriptionList = [];
    let fileNewsHeaderList = [];
    for (let key in imageLibrary.files) {
        let file = imageLibrary.files[key];
        if (file.type === "nyhet") {
            fileNewsImageList.push(file.fileName);
            fileNewsDescriptionList.push(file.description);
            fileNewsHeaderList.push(file.projectName);
        }
    }
    let imageAndText = [fileNewsImageList,fileNewsDescriptionList,fileNewsHeaderList]
    console.log("Image and text: ", imageAndText);
    return imageAndText;
}

function showSlides() {
    slideShowGrid(filterOnNews());
    carousel();
}

function onloadBarkMainPage() {
    console.log("Onload Bark main page");
    showSlides();
}




// function filterRandom() {
//     let fileRandomList = [];
//     for (let key in imageLibrary.file) {
//         let file = imageLibrary.files;
//         let randomKey = findObjectByKeyRandomly(file);
//         fileRandomList.push(randomKey);
//         console.log("File: ", file);
//     }
//     console.log("Liste Random: ", fileRandomList);
//     return fileRandomList;
// }
//
// let findObjectByKeyRandomly = function(obj) {
//     let keys = Object.keys(obj);
//     console.log("keys: ", keys);
//     return obj[keys[keys.length * Math.random() << 0]];
// };


//News

// var slideIndex = 1;
// showDivs(slideIndex);
//
// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }
//
// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("box-grid");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length} ;
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex-1].style.display = "block";
// }
