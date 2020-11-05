
// Makes as many slides as there are elements in fileNameList
// The parameter i is the file index
// SlideShowContainer contains all the slides
function createSlide(fileNameList, i, slideShowContainer) {
  let fileName = fileNameList[0][i];
  let fileDescription = fileNameList[1][i];
  let fileHeader = fileNameList[2][i];

  // Creates slide div
  let mySlides = document.createElement("div");
  mySlides.setAttribute("class", "mySlide");
  slideShowContainer[0].appendChild(mySlides);

  // Creates image element within mySlides
  let mySlidesImage = document.createElement("img");
  mySlidesImage.setAttribute("class", "mySlides-img");
  mySlidesImage.setAttribute("alt", "bilde av " + fileName);
  mySlidesImage.setAttribute("src", "../img/" + fileName);
  mySlides.appendChild(mySlidesImage);
  console.log("my slides image: ", mySlidesImage);

  // Creates a div element for text an title on each slide
  let mySlidesCaption = document.createElement("div");
  mySlidesCaption.setAttribute("class", "mySlides-caption");

  // Creates a header element within mySlideCaption
  let mySlidesHeader = document.createElement("h3");
  mySlidesHeader.setAttribute("class", "mySlides-header");
  mySlidesCaption.appendChild(mySlidesHeader);

  // Defines the title of the header for each slide
  let header = document.createTextNode(fileHeader);
  mySlidesHeader.appendChild(header);

  // Creates a paragraph element within mySlideCaption
  let mySlidesText = document.createElement("p");
  mySlidesText.setAttribute("class", "mySlides-text");
  mySlidesCaption.appendChild(mySlidesText);

  // Defines the text in the paragraph on each slide
  let text = document.createTextNode(fileDescription);
  mySlidesText.appendChild(text);
  mySlides.appendChild(mySlidesCaption);
  console.log("myslides med tekst: ", mySlides);
}

// This function creates a dot for each slide and the dot is located in dotContainer
function createDot(i, dotContainer) {
  let dotSpan = document.createElement("span");
  dotSpan.setAttribute("class", "dot");
  dotSpan.onclick = function () {
    switchSlide(i);
  };
  dotContainer.appendChild(dotSpan);
}

// Creates a slideshow for all the files in the fileNameList and each slide has a dot
function slideShowContainer(fileNameList) {
  let slideShowContainer = document.getElementsByClassName("slideshow-container");
  for (let i in fileNameList[0]) {
    createSlide(fileNameList, i, slideShowContainer);
  }

  let dotContainer = document.getElementsByClassName("dot-container")[0];
  for (let i in fileNameList[0]) {
    createDot(i, dotContainer);
  }
}

// Every time the user switch slides (previous or next button) the slideIndex is either +1 or -1
function plusSlides(n) {
  carousel(slideIndex += n);
}

// When a dot is clicked the slide is switched
function switchSlide(n) {
  carousel(slideIndex = n);
}

// To keep track of which slide the user will see
let slideIndex = 1;

// Makes the actual slideshow/carousel.
// If you get to the end the slideshow will start over.
// If you go previous from the first slide, you will come to the end of the slideshow.

// The slides are styled as taken up the full width available and on a new line.
// The dot is active when the user has selected it
function carousel(n) {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  console.log("Slides: ", slides);
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
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Filter on the type "news" in the object imageLibrary and appends the name of the news and description to two
// separate lists. These lists are then put into one list - lists within a list, called imageAndText.
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
  let imageAndText = [fileNewsImageList, fileNewsDescriptionList, fileNewsHeaderList];
  console.log("Image and text: ", imageAndText);
  return imageAndText;
}

function showSlides() {
  slideShowContainer(filterOnNews());
  carousel(slideIndex);
}

// Function that is used in html to unload the whole javascript
function onloadBarkMainPage() {
  console.log("Onload Bark main page");
  showSlides();
}


// Sourced used to make slideshow: https://www.w3schools.com/howto/howto_js_slideshow.asp