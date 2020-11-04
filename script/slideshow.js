
// makes as many slides as there are news following this structure,
// by using the parameter fileNameList where all the news elements are,
//!! i is the current slide the user is on
// slideShowContainer is a div in the html where the slides are being shown
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
  mySlides.appendChild(mySlidesImage);
  let mySlidesCaption = document.createElement("div");
  mySlidesCaption.setAttribute("class", "mySlides-caption");
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

//!! the dot underneath each news is created with the parameter of which news the user is on (i)
// and where the dot is located (dotContainer)
function createDot(i, dotContainer) {
  let dotSpan = document.createElement("span");
  dotSpan.setAttribute("class", "dot");
  dotSpan.onclick = function () {
    currentSlide(i);
  };
  dotContainer.appendChild(dotSpan);
}

// Loops through all the elements in the news list (parameter fileNameList),
// and creates a slide for each element by using the parameter i and where is shown (slideShowContainer).
// The same is done with the dots by loop through the list and create the same number of dots as there are news.
// and show it in dotContainer
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

// every time the user switch slides (previous or next button) the carousel function is taken in a parameter
// which is either +1 (next) or -1 (previous)
function plusSlides(n) {
  carousel(slideIndex += n);
}

//!! a dot is connected to a news slide, so when a dot is clicked the slidesshow will go to the connected news
// and the carousel will take in the right number by which the dot is connected to
function currentSlide(n) {
  carousel(slideIndex = n);
}

// to keep track of which slide the user is on
let slideIndex = 1;

// makes the actual slideshow/carousel, by showing them in "slides" and "dots"
// if you get to the end the slideshow will start over
// if you go previous from the first slide, you will come to the end of the slideshow
// loops through the length of the dots (dotSpan in createDot()) and replaces the dots that is not current to none ("")
// the slides are styled as taken up the full width available and on a new line
// the dot is active when the user is on that specific news connected to the dot
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
  //er ikke denne lik som noe av det over??
  /*if (slideIndex > slides.length) {
    slideIndex = 1;
  }*/
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// filter on the type "news" in the object imageLibrary and appends the name of the news and description to two
// separate lists. These lists are then put into one list - lists within a list, called imageAndText.
// imageAndText is used in slideShowContainer so it then again can be iterated and structured in createSlide
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

// calls on the specificed function so that everything is running
function showSlides() {
  slideShowContainer(filterOnNews());
  carousel(slideIndex);
}

// function that is used in html to unload the whole javascript
function onloadBarkMainPage() {
  console.log("Onload Bark main page");
  showSlides();
}
