


function slideShowGrid(fileNameList) {
    let slideShowContainer = document.getElementsByClassName("slideshow-container");
    for (let i in fileNameList) {
        let fileName = fileNameList[i];
        let mySlides = document.createElement("div");
        mySlides.setAttribute("class", "mySlide");
        slideShowContainer[0].appendChild(mySlides);
        let mySlidesImage = document.createElement("img");
        mySlidesImage.setAttribute("class", "mySlides-img");
        mySlidesImage.setAttribute("alt","bilde");
        mySlidesImage.setAttribute("src","../img/"+ fileName);
        mySlides.appendChild(mySlidesImage);
    }
    console.log("SlideShowGrid: ",slideShowContainer);
}

let i;
let slideIndex = 0;

function carousel() {
    let slides = document.getElementsByClassName("mySlide");
    console.log("my slides web elements:",slides);
    //let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";
    //dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
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
    let randomFilerList = filterOnBolig();
    console.log("filter list", randomFilerList);
    /*let testFilerList = filterOnBolig();*/
    slideShowGrid(randomFilerList);
    carousel();
    /*slideShowGrid(testFilerList);*/
}

function onloadBarkMainPage() {
    console.log("Onload Bark main page");
    buildNavbar();
    showSlides();
    buildFooter();

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