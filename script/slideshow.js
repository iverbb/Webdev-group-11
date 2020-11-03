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

let slideIndex = 1;

function carousel(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    console.log("Slides: ", slides)
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log("Slideindex: ", slideIndex);
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
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
    let imageAndText = [fileNewsImageList, fileNewsDescriptionList, fileNewsHeaderList]
    console.log("Image and text: ", imageAndText);
    return imageAndText;
}

function showSlides() {
    slideShowGrid(filterOnNews());
    carousel(slideIndex);
}

function onloadBarkMainPage() {
    console.log("Onload Bark main page");
    showSlides();
}
