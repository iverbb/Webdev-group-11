/* BUILDING NAVBAR */

// pages added to navbar as links
const pages = [
    {
        img: "../img/logo_correct.png", //adding image instead of text
        endpoint: ["hjem.html"],
    },
    {
        text: "Kontakt",
        endpoint: ["kontakt.html"],
    },
    {
        text: "Om oss",
        endpoint: ["om_oss.html"],
    },
    {
        text: "På tegnebordet",
        endpoint: ["paa_tegnebordet.html"],
    },
    {
        text: "Prosjekter",
        endpoint: ["prosjekt_prosjekttype.html",
            "prosjekt_kronologisk.html",
            "prosjekt_beliggenhet.html",
            "prosjekt_prosjekttype_bolig.html",
            "prosjekt_prosjekttype_enebolig.html",
            "prosjekt_prosjekttype_fritidsbolig.html",
            "prosjekt_prosjekttype_ideer.html",
            "prosjekt_prosjekttype_mindrebygg.html",
            "prosjekt_prosjekttype_naering.html"],
    },
    {
        text: "Hjem",
        endpoint: ["hjem.html"],
    },
];

let currentEndpoint = "";


// returns the current endpoint 
function getCurrentEndpoint() {
    const url = window.location.href;
    return url.split("/").pop();
}


/* checks if a given endpoint is the current one, 
and returns if it true if current endpoint is included in the list */
function isCurrentEndpoint(endpoint) {
    return endpoint.includes(currentEndpoint);
}


/* creates an anchor element of a  page with link and content
page: text and endpoint properties. Returns anchor element */
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
        anchor.classList.add("navbarLogo"); //adding class for styling of logoimage
    }

    if (isCurrentEndpoint(page.endpoint)) {
        anchor.classList.add("navbarCurrentItem");
        anchor.style.textDecoration = "underline"; //underlining current page, and not logo
    }

    anchor.href = page.endpoint[0]; //underlining the first element in the object list

    return anchor;
}


// adds a page to the navigation bar as a link 
function addLinkToElement(page, element) {
    const link = createLinkToPage(page);
    element.appendChild(link);
}


// builds the navigation bar by adding html elements to it
function buildNavbar() {
    currentEndpoint = getCurrentEndpoint();

    const navbar = document.getElementById("navbarPc");
    const content = document.createElement("div");
    content.classList.add("navbarContent");
    navbar.appendChild(content);

    const items = document.createElement("div");
    items.classList.add("navbarItems");
    content.appendChild(items);

    pages.forEach((page) => addLinkToElement(page, items));
}

// made with great help from studasses and another webtek group


//Making a sticky navbar

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction();
};

// Get the navbar
let navbar = document.getElementById("navbarPc");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

/* Add the sticky class to the navbar when you reach its scroll position. 
Remove "sticky" when you leave the scroll position */
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("stickyNavbar");
    } else {
        navbar.classList.remove("stickyNavbar");
    }
}

//source: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp


/* BUILDING FOOTER */

function buildFooter() {

    let prevfooter = document.getElementById("stickyFooter");
    let newfooter = document.createElement("footer");
    newfooter.id = "stickyFooter";

    let myNode = prevfooter ? prevfooter : newfooter;

    document.body.appendChild(myNode);

    // added to all pages except "kontakt"
    if (!window.location.href.match(".*/kontakt.html$")) {
        let contact = document.createElement("h4");
        let street = document.createElement("li");
        let postcode = document.createElement("li");
        let phone = document.createElement("li");
        let email = document.createElement("li");

        contact.classList.add("tit");
        street.classList.add("adresse");
        postcode.classList.add("postSpace"); //differrent class so i can add space
        phone.classList.add("adresse");
        email.classList.add("adresse");

        contact.appendChild(document.createTextNode("Kontakt oss"));
        street.appendChild(document.createTextNode("Avaldsnesgata 95 c"));
        postcode.appendChild(document.createTextNode("4014 Stavanger"));
        phone.appendChild(document.createTextNode("T:  51 56 78 30"));
        email.appendChild(document.createTextNode("E: firmapost@barkarkitekter.no"));

        myNode.appendChild(contact);
        myNode.appendChild(street);
        myNode.appendChild(postcode);
        myNode.appendChild(phone);
        myNode.appendChild(email);
    }

    //added to all pages
    let copyright = document.createElement("li");
    copyright.classList.add("copyright");
    copyright.appendChild(document.createTextNode("© 2020 Group 11"));

    myNode.appendChild(copyright);

}


/* ONLOADING FOOTER AND NAVBAR */

//function for loading footer and navbar 
function onloadMarg() {
    buildNavbar();
    buildFooter();
}

onloadMarg();
