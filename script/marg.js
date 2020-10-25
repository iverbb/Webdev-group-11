//Vilde

//navbar

// pages added to navbar as links
const pages = [
  {
    img: "../p1 and p2/img/P1/logo_rett.png", //adding image instead of text
    endpoint: "hjem.html",
  },
  {
    text: "Kontakt",
    endpoint: "kontakt.html",
  },
  {
    text: "Om oss",
    endpoint: "om_oss.html",
  },
  {
    text: "På tegnebordet",
    endpoint: "paa_tegnebordet.html",
  },
  {
    text: "Prosjekter",
    endpoint: "prosjekt_prosjekttype_test.html",
  },
  {
      text: "Hjem",
      endpoint: "hjem.html",
  },
];

let currentEndpoint = "";

/* Checks if a given endpoint is the current one
returns true if it is current, else false */

function isCurrentEndpoint(endpoint) {
  return endpoint === currentEndpoint;
}

/* Creates an anchor element of a given page with link and content
page: text and endpoint properties
returns anchor element */

function createLinkToPage(page) {
  let anchor = document.createElement("a");
  if (page.text) {
      anchor.appendChild(document.createTextNode(page.text));
      anchor.classList.add("navbarPages");
  } else {
      let image = document.createElement("img");
      image.src = page.img;
      image.style.width = "300px";

      anchor.appendChild(image);
      anchor.classList.add("navbarLogo");
  }

  if (isCurrentEndpoint(page.endpoint)) {
      anchor.classList.add("navbarCurrentItem");
      anchor.style.textDecoration = "underline"; //underlining current page 
  }

  anchor.href = page.endpoint;

  return anchor;
}

/*Adds a page to the navigation bar as a link.*/
function addLinkToElement(page, element) {
  const link = createLinkToPage(page);
  element.appendChild(link);
}

/*Returns the endpoint of the current page
returns the current endpoint */

function getCurrentEndpoint() {
  const url = window.location.href;

  return url.split("/").pop();
}

// Builds the navigation bar by adding html elements to it.

function buildNavbar() {
  currentEndpoint = getCurrentEndpoint();

  const navbar = document.getElementById("navbar");
  const content = document.createElement("div");
  content.classList.add("navbarContent");
  navbar.appendChild(content);

  const items = document.createElement("div");
  items.classList.add("navbarItems");
  content.appendChild(items);

  pages.forEach((page) => addLinkToElement(page, items));
}




//Making a sticky navbar

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("stickyNavbar");
  } else {
    navbar.classList.remove("stickyNavbar");
  }
}

//Footer

function buildFooter() {
 
  var myNode = document.getElementById("sf");

  console.log(myNode.id);
  var contact = document.createElement("h4");
  var street = document.createElement("li");
  var postcode = document.createElement("li");
  var phone = document.createElement("li");
  var email = document.createElement("li");
  var copyright = document.createElement("li");

  contact.classList.add("tit");
  street.classList.add("adresse");
  postcode.classList.add("postSpace"); //differrent class so i can add space 
  phone.classList.add("adresse");
  email.classList.add("adresse");
  copyright.classList.add("copyright");

  contact.appendChild(document.createTextNode("Kontakt oss"));
  street.appendChild(document.createTextNode("Avaldsnesgata 95 c"));
  postcode.appendChild(document.createTextNode("4014 Stavanger"));
  phone.appendChild(document.createTextNode("T:  51 56 78 30"));
  email.appendChild(document.createTextNode("E: firmapost@barkarkitekter.no"));
  copyright.appendChild(document.createTextNode("© 2020 Group 11"));

  myNode.appendChild(contact);
  myNode.appendChild(street);
  myNode.appendChild(postcode);
  myNode.appendChild(phone);
  myNode.appendChild(email);
  myNode.appendChild(copyright);

}

// Event trigger when the DOM is ready (newer browsers)
// window.onload = () => buildNavbar(), buildFooter();
//buildNavbar();
//buildFooter();


function onloadMarg() {
  buildNavbar();
  buildFooter();
}
onloadMarg();
