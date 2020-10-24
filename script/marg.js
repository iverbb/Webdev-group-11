//Vilde

//navbar

var img = document.createElement("img");
img.src = "../p1 and p2/img/P1/logo_rett.png";
let logo = document.createElement("img");

// pages added to navbar as links
const pages = [
    /*{
      imagePath: "../p1 and p2/img/P1/logo_rett.png", //?? how do i put the picture of the logo here
      endpoint: "hjem.html",
    },*/
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
   * endpoint: The endpoint to check
   * returns: true if it is current, else false
   */
  function isCurrentEndpoint(endpoint) {
    return endpoint === currentEndpoint;
  }
  
  /**
   * Creates an anchor element of a given page with link and content
   * page: The page with text and endpoint properties
   * returns anchor element
   */
  function createLinkToPage(page) {
    const anchor = document.createElement("a");
    /*if (page.text===undefined){
        const content = document.createElement(page.img); //funker ikke
    }
    else {*/
      const content = document.createTextNode(page.text); //sjekk om tekst, hvis ikke finn img
    
  
  
    if (isCurrentEndpoint(page.endpoint)) {
        anchor.classList.add("navbar-current-item");
    }

    anchor.href = page.endpoint;
    anchor.appendChild(content);
  
    return anchor;
  }
  
  /**Adds a page to the navigation bar as a link.
   * page: The page to link
   * element: The element to hold the link
   */
  function addLinkToElement(page, element) {
    const link = createLinkToPage(page);
    element.appendChild(link);
  }
  
  //Returns the endpoint of the current page
  function getCurrentEndpoint() {
    const url = window.location.href;
    
    return url.split("/").pop();
  }
  
  // Builds the navigation bar by adding html elements to it.
  function buildNavbar() {
    currentEndpoint = getCurrentEndpoint();
    
    const navbar = document.getElementById("navbar");
    const content = document.createElement("div");
    content.classList.add("navbar-content");
    navbar.appendChild(content);
    
    const items = document.createElement("div");
    items.classList.add("navbar-items");
    content.appendChild(items);
    
    pages.forEach((page) => addLinkToElement(page, items));
  }


// When the user scrolls the page, execute myFunction
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
  
 
//footer  

function buildFooter() {
    var node = document.getElementById("myFooter");

    var kontakt = document.createElement("li"); //var breaks = "sdfhdfhg \n efjhsejj \n dhjfjhdsfjk"
    var gate = document.createElement("li");
    var postnummer = document.createElement("li");
    var telefon = document.createElement("li");
    var epost = document.createElement("li");
    var copyright = document.createElement("li");

    kontakt.classList.add("tit");
    copyright.classList.add("copyRight");
    gate.classList.add("adresse");
    postnummer.classList.add("adresseSpace");
    telefon.classList.add("adresse");
    epost.classList.add("adresse");

    kontakt.appendChild(document.createTextNode("Kontakt oss"));
    gate.appendChild(document.createTextNode("Avaldsnesgata 95 c"));
    postnummer.appendChild(document.createTextNode("4014 Stavanger"));
    telefon.appendChild(document.createTextNode("T:  51 56 78 30"));
    epost.appendChild(document.createTextNode("E: firmapost@barkarkitekter.no"));
    copyright.appendChild(document.createTextNode("© 2020 Group 11"));
    
    node.appendChild(kontakt);
    node.appendChild(gate);
    node.appendChild(postnummer);
    node.appendChild(telefon);
    node.appendChild(epost);
    node.appendChild(copyright);

}  

// triggers when ready 
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

/*footer


//const footer = document.getElementById("footer");

//console.log(footer);

//const text = document.createTextNode("Kontakt oss")

/**email

*function addLinkToElement(email, element) {
 *   const link = createLinkToPage(email);
*    element.appendChild(link);
  }*/



   /*__________________________________________________________
    const footer = document.getElementById("myFooter");

    console.log(footer);

    const text1 = document.createTextNode("Kontakt oss \t weutwegr");
    footer.appendChild(text1);

    const text2 = document.createTextNode("avajhfhj");
    footer.appendChild(text2);


    var kontakt = "Kontakt \n Avaldsnesgata 95 c \n 4014 Stavanger \n T:  51 56 78 30 \n E: firmapost@barkarkitekter.no";
    document.getElementById("myFooter") = kontakt;*/

    /*var x = "John";        // x is a string
    var y = new String("John");  // y is an object

    document.getElementById("myFooter") =
    typeof x + "<br>" + typeof y;

    document.footer.appendChild(x,y);*/





    /**var x = document.createElement("theFooter");
    x.setAttribute("id", "myFooter");
    document.body.appendChild(x);

    var y = document.createElement("P");
    var kontakt = document.createTextNode("Kontakt");
    y.appendChild(kontakt);

    document.getElementById("footer").appendChild("y");
    
    _________________________________________________________*/
