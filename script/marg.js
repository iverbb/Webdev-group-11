//Vilde

//navbar

// pages added to navbar as links
const pages = [
    {
        img: "../p1 and p2/img/P1/logo_rett.png", //?? how do i put the picture of the logo here
        endpoint: "hjem.html",
    },
    {
        text: "Hjem",
        endpoint: "hjem.html",
    },
    {
        text: "Prosjekter",
        endpoint: "prosjekt_prosjekttype_test.html",
    },
    {
        text: "På tegnebordet",
        endpoint: "paa_tegnebordet.html",
    },
    {
        text: "Om oss",
        endpoint: "om_oss.html",
    },
    {
        text: "Kontakt",
        endpoint: "kontakt.html",
    },
];

let currentEndpoint = "";

/**
 * Checks if a given endpoint is the current one
 * @param {String} endpoint The endpoint to check
 * @returns {Boolean} true if it is current, else false
 */
function isCurrentEndpoint(endpoint) {
    return endpoint === currentEndpoint;
}

/**
 * Creates an anchor element of a given page with link and content
 * @param {Object} page The page with text and endpoint properties
 * @returns {HTMLAnchorElement} The anchor element
 */
function createLinkToPage(page) {
    let anchor = document.createElement("a");
    if (page.text) {
        anchor.appendChild(document.createTextNode(page.text));
    } else {
        let image = document.createElement("img");
        image.src = page.img;
        image.style.width = "100px";

        anchor.appendChild(image);
    }

    if (isCurrentEndpoint(page.endpoint)) {
        anchor.classList.add("navbar-current-item");
    }

    anchor.href = page.endpoint;

    return anchor;
}

/**
 * Adds a page to the navigation bar as a link.
 * @param {Object} page The page to link
 * @param {HTMLDivElement} element The element to hold the link
 */
function addLinkToElement(page, element) {
    const link = createLinkToPage(page);
    element.appendChild(link);
}

/**
 * Returns the endpoint of the current page
 * @returns {String} The current endpoint
 */
function getCurrentEndpoint() {
    const url = window.location.href;
    
    return url.split("/").pop();
}

/**
 * Builds the navigation bar by adding html elements to it.
 */
function buildNavbar() {
    currentEndpoint = getCurrentEndpoint();
    
    const navbar = document.getElementById("navbar");
    const content = document.createElement("div");
    content.classList.add("content");
    navbar.appendChild(content);
    
    const items = document.createElement("div");
    items.classList.add("navbar-items");
    content.appendChild(items);
    
    pages.forEach((page) => addLinkToElement(page, items));
}






//footer


//const footer = document.getElementById("footer");

//console.log(footer);

//const text = document.createTextNode("Kontakt oss")

/**email

 *function addLinkToElement(email, element) {
 *   const link = createLinkToPage(email);
 *    element.appendChild(link);
 }*/

function buildFooter() {
    /**var x = document.createElement("theFooter");
       x.setAttribute("id", "myFooter");
       document.body.appendChild(x);

       var y = document.createElement("P");
       var kontakt = document.createTextNode("Kontakt");
       y.appendChild(kontakt);

       document.getElementById("footer").appendChild("y");*/
    var myNode = document.getElementById("sf");

    console.log(myNode.id);
    var kontakt = document.createElement("h4");
    var adresse1 = document.createElement("p");
    var adresse2 = document.createElement("p");
    var copyright = document.createElement("p");

    kontakt.classList.add("tit");
    copyright.classList.add("footer");
    adresse1.classList.add("adresse1");
    adresse2.classList.add("adresse2");


    kontakt.appendChild(document.createTextNode("Kontakt oss"));
    adresse1.appendChild(document.createTextNode("Avaldsnesgata 95 c \n 4014 Stavanger"));
    adresse2.appendChild(document.createTextNode("4014 StavangerT:  51 56 78 30 \n E: firmapost@barkarkitekter.no"));
    copyright.appendChild(document.createTextNode("© 2020 Group 11"));

    myNode.appendChild(kontakt);
    myNode.appendChild(adresse1);
    myNode.appendChild(adresse2);
    myNode.appendChild(copyright);



}

// Event trigger when the DOM is ready (newer browsers)
window.onload = () => buildNavbar(), buildFooter();


/* When the user scrolls the page, execute myFunction
   window.onscroll = function() {myFunction()};

   // Get the navbar
   var navbar = document.getElementById("navbar");

   // Get the offset position of the navbar
   var sticky = navbar.offsetTop;

   // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
   function myFunction() {
   if (window.pageYOffset >= sticky) {
   navbar.classList.add("sticky")
   } else {
   navbar.classList.remove("sticky");
   }
   }

   <script>
   document.addEventListener(
   "DOMContentLoaded", () => {
   new Mmenu( "#my-menu", {
   navbars: [{
   // first navbar options
   }, {
   // second navbar options
   }]
   }, {
   navbars: {
   // navbars configuration
   }
   });
   }
   );
   </script>*/
