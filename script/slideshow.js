function createSlide(fileNameList, i, slideShowContainer) {
    let fileName = fileNameList[i];
    let mySlides = document.createElement("div");
    mySlides.setAttribute("class", "mySlide");
    slideShowContainer[0].appendChild(mySlides);
    let mySlidesImage = document.createElement("img");
    mySlidesImage.setAttribute("class", "mySlides-img");
    mySlidesImage.setAttribute("alt", "bilde");
    mySlidesImage.setAttribute("src", "../img/" + fileName);
    mySlides.appendChild(mySlidesImage);
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
    for (let i in fileNameList) {
        createSlide(fileNameList, i, slideShowContainer);
    }

    let dotContainer = document.getElementsByClassName("dot-container")[0];
    for (let i in fileNameList) {
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
    // setTimeout(showSlides, 4000); // Change image every 2 seconds
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
    //let randomFilerList = filterOnBolig();
    slideShowGrid(filterOnBolig());
    carousel();
}

function onloadBarkMainPage() {
    console.log("Onload Bark main page");
    //buildNavbar();
    showSlides();
    //buildFooter();
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
